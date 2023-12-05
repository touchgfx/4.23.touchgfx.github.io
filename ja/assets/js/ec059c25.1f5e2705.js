"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[84970],{49613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var i=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=i.createContext({}),d=function(e){var t=i.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=n,h=p["".concat(u,".").concat(c)]||p[c]||m[c]||r;return a?i.createElement(h,o(o({ref:t},s),{},{components:a})):i.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12822:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(59496),n=a(32118);const r=function(e){const t=e.noShadow||!1,a=e.width,r=e.height,o=(0,n.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:a,height:r,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:a,height:r,src:o})),i.createElement("p",null,e.children))}},86222:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(59496),n=a(89588);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends i.Component{render(){return i.createElement(n.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const l=o},89588:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(59496);class n extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}const r=n},66590:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(59496);class n extends i.Component{render(){return i.createElement("code",{className:"shortcut"},this.props.children)}}const r=n},7704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>s,metadata:()=>m,toc:()=>h});a(59496);var i=a(49613),n=a(12822),r=a(66590),o=a(86222),l=a(51721);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"config-view",title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09"},p=void 0,m={unversionedId:"development/ui-development/designer-user-guide/config-view",id:"development/ui-development/designer-user-guide/config-view",title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09",description:"\u8a2d\u5b9a\u30d3\u30e5\u30fc\u3067\u306f\u3001General\u3001Display\u3001Default Image Configuration\u3001Text Configuration\u3001Simulator\u3001Build\u3001Framework Features\u3068\u3044\u3063\u305f\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5f71\u97ff\u3059\u308b\u3055\u307e\u3056\u307e\u306a\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/config-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/config-view",permalink:"/4.23/ja/docs/development/ui-development/designer-user-guide/config-view",draft:!1,tags:[],version:"current",frontMatter:{id:"config-view",title:"Config View\uff08\u8a2d\u5b9a\u30d3\u30e5\u30fc\uff09"},sidebar:"docs",previous:{title:"Texts View\uff08\u30c6\u30ad\u30b9\u30c8\uff65\u30d3\u30e5\u30fc\uff09",permalink:"/4.23/ja/docs/development/ui-development/designer-user-guide/texts-view"},next:{title:"Interactions\uff08\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\uff09",permalink:"/4.23/ja/docs/development/ui-development/designer-user-guide/interactions-view"}},c={},h=[{value:"General\uff08\u4e00\u822c\uff09",id:"general",level:2},{value:"Application Name",id:"application-name",level:4},{value:"TouchGFX Board Setup",id:"touchgfx-board-setup",level:4},{value:"Selected Language",id:"selected-language",level:4},{value:"Startup Screen",id:"startup-screen",level:4},{value:"Display\uff08\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff09",id:"display",level:2},{value:"Dimensions",id:"dimensions",level:4},{value:"Display Orientation",id:"display-orientation",level:4},{value:"Color Depth",id:"color-depth",level:4},{value:"Default Image Configuration\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u753b\u50cf\u8a2d\u5b9a\uff09",id:"default-image-configuration",level:2},{value:"Opaque Image Format",id:"opaque-image-format",level:4},{value:"Non Opaque Image Format",id:"non-opaque-image-format",level:4},{value:"Section",id:"section",level:4},{value:"Extra Section",id:"extra-section",level:4},{value:"Dither Algorithm",id:"dither-algorith",level:4},{value:"Alpha Dither",id:"alpha-dither",level:4},{value:"Layout Rotation",id:"layout-rotation",level:4},{value:"Text Configuration\uff08\u30c6\u30ad\u30b9\u30c8\u8a2d\u5b9a\uff09",id:"text-configuration",level:2},{value:"Remap texts",id:"remap-texts",level:4},{value:"A4",id:"a4",level:4},{value:"Binary translation files",id:"binary-translation-files",level:4},{value:"Binary font files",id:"binary-font-files",level:4},{value:"Mapped storage format",id:"mapped-storage-format",level:4},{value:"Unmapped storage format",id:"unmapped-storage-format",level:4},{value:"Simulator\uff08\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\uff09",id:"simulator",level:2},{value:"Build\uff08\u30d3\u30eb\u30c9\uff09",id:"build",level:2},{value:"Generate Assets Command",id:"generate-assets-command",level:4},{value:"Post Generate Command",id:"post-generate-command",level:4},{value:"Compile Simulator Command",id:"compile-simulator-command",level:4},{value:"Run Simulator Command",id:"run-simulator-command",level:4},{value:"Post Generate Target Command",id:"post-generate-command",level:4},{value:"Compile Target Command",id:"compile-target-command",level:4},{value:"Flash Target Command",id:"flash-target-command",level:4},{value:"Flash Target Internal Command",id:"flash-target-internal-command",level:4},{value:"Framework Features\uff08\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u6a5f\u80fd\uff09",id:"framework-features",level:2}],g={toc:h},f="wrapper";function v(e){var{components:t}=e,a=d(e,["components"]);return(0,i.kt)(f,u({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8a2d\u5b9a\u30d3\u30e5\u30fc\u3067\u306f\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"#general"}),"General"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"#display"}),"Display"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"#default-image-configuration"}),"Default Image Configuration"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"#text-configuration"}),"Text Configuration"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"#simulator"}),"Simulator"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"#simulator"}),"Build"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"#framework-features"}),"Framework Features"),"\u3068\u3044\u3063\u305f\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5f71\u97ff\u3059\u308b\u3055\u307e\u3056\u307e\u306a\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-4.17.webp",mdxType:"Figure"}," Config View\u3067\u306eGeneral\u306e\u8a2d\u5b9a"),(0,i.kt)("h2",u({},{id:"general"}),"General\uff08\u4e00\u822c\uff09"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general.webp",mdxType:"Figure"}," Config View\u3067\u306eGeneral\u306e\u8a2d\u5b9a"),(0,i.kt)("h4",u({},{id:"application-name"}),"Application Name"),(0,i.kt)("p",null,"Application name is a readonly field, displaying the name that was chosen for the application when it was created."),(0,i.kt)("h4",u({},{id:"touchgfx-board-setup"}),"TouchGFX Board Setup"),(0,i.kt)("p",null,"This field shows the TouchGFX Board Setup the application was created with, if this information is not available 'N/A' will be displayed.",(0,i.kt)("br",null)," If this information is available, the name of the TouchGFX Board Setup will be displayed along with the version."),(0,i.kt)("h4",u({},{id:"selected-language"}),"Selected Language"),(0,i.kt)("p",null,"This dropdown contains the languages configured in the ",(0,i.kt)("a",u({parentName:"p"},{href:"texts-view"}),"Texts")," View, and selects which language should be displayed at startup of the project."),(0,i.kt)("h4",u({},{id:"startup-screen"}),"Startup Screen"),(0,i.kt)("p",null,"This dropdown contains all the screens that have been added to the project, and selects which screen to display at startup of the project."),(0,i.kt)("h2",u({},{id:"display"}),"Display\uff08\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\uff09"),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display-4.17.webp",mdxType:"Figure"}," Config View\u3067\u306eDisplay\u306e\u8a2d\u5b9a"),(0,i.kt)("h4",u({},{id:"dimensions"}),"Dimensions"),(0,i.kt)("p",null,"The size of the display can be set through the ",(0,i.kt)("em",{parentName:"p"},"W(width)")," and ",(0,i.kt)("em",{parentName:"p"},"H(height)")," properties. \u305f\u3060\u3057TouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u3067\u30b5\u30a4\u30ba\u304c\u8a2d\u5b9a\u6e08\u307f\u306e\u5834\u5408\u3001\u30b5\u30a4\u30ba\u306e\u8a2d\u5b9a\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,i.kt)("h4",u({},{id:"display-orientation"}),"Display Orientation"),(0,i.kt)("p",null,"The orientation of the display can be toggled between Landscape and Portrait orientations. \u3053\u306e\u8a2d\u5b9a\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u4f7f\u7528\u3055\u308c\u308b\u753b\u50cf\u304ccpp\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3055\u308c\u308b\u65b9\u6cd5\u306b\u3082\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"color-depth"}),"Color Depth"),(0,i.kt)("p",null,"This dropdown contains the color depths that are available to a project. \u3053\u306e\u8a2d\u5b9a\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u306b\u4f7f\u7528\u3055\u308c\u308bTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306b\u3088\u3063\u3066\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h2",u({},{id:"default-image-configuration"}),"Default Image Configuration\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u753b\u50cf\u8a2d\u5b9a\uff09"),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u753b\u50cf\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u8a2d\u5b9a\u306f\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"images-view"}),"Images View"),"\u3067\u4e0a\u66f8\u304d\u3055\u308c\u306a\u3044\u9650\u308a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u753b\u50cf\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration.webp",mdxType:"Figure"},"Config View\u3067\u306eDefault Image Configuration\u306e\u8a2d\u5b9a"),(0,i.kt)("h4",u({},{id:"opaque-image-format"}),"Opaque Image Format"),(0,i.kt)("p",null,"This dropdown sets which format images that have only opaque pixel data should be generated with. \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u9078\u629e\u3055\u308c\u305f\u8272\u6df1\u5ea6\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"non-opaque-image-format"}),"Non Opaque Image Format"),(0,i.kt)("p",null,"This dropdown sets which format images that have non-opaque pixel data should be generated with. \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u9078\u629e\u3055\u308c\u305f\u8272\u6df1\u5ea6\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"section"}),"Section"),(0,i.kt)("p",null,"This dropdown sets the location where image data should be stored on the target hardware. \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306eTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"extra-section"}),"Extra Section"),(0,i.kt)("p",null,"When using L8 image formats you can choose to store the color table in a different section using this dropdown. \u3053\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u9078\u629e\u53ef\u80fd\u306a\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4f5c\u6210\u6642\u306eTouchGFX\u30dc\u30fc\u30c9\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u6c7a\u307e\u308a\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"dither-algorith"}),"Dither Algorithm"),(0,i.kt)("p",null,"This dropdown sets the dithering algorithm used for images."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No dither: \u753b\u50cf\u306b\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306f\u9069\u7528\u3055\u308c\u307e\u305b\u3093\u3002 \u4f55\u3082\u5909\u66f4\u304c\u884c\u308f\u308c\u306a\u3044\u306e\u3067\u3001\u6700\u3082\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9ad8\u3044\u8a2d\u5b9a\u3067\u3059\u3002 \u305f\u3060\u3057\u753b\u50cf\u306b\u3088\u3063\u3066\u306f\u3001\u8272\u6df1\u5ea6\u304c\u4f4e\u3044\u5834\u5408\u306b\u753b\u50cf\u306e\u8996\u899a\u7684\u54c1\u8cea\u304c\u4f4e\u4e0b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Floyd-Steinberg: \u96a3\u63a5\u3059\u308b\u30d4\u30af\u30bb\u30eb\u306b\u8aa4\u5dee\u3092\u62e1\u6563\u3055\u305b\u3001\u304d\u3081\u7d30\u304b\u3044\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306b\u306a\u308a\u307e\u3059\u304c\u3001\u9bae\u660e\u3055\u304c\u72a0\u7272\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Jarvis, Judice and Ninke: Floyd-Steinberg\u3088\u308a\u3082\u4e00\u6b69\u5148\u306e\u30d4\u30af\u30bb\u30eb\u307e\u3067\u8aa4\u5dee\u3092\u62e1\u6563\u3055\u305b\u3001\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306e\u304d\u3081\u304c\u7c97\u304f\u306a\u308a\u307e\u3059\u304c\u3001\u9bae\u660e\u306a\u753b\u50cf\u306b\u306a\u308a\u307e\u3059\u3002 3\u3064\u306e\u8aa4\u5dee\u62e1\u6563\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\uff65\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u4e2d\u3067\u6700\u3082\u4f4e\u901f\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Stucki: \u6700\u5c0f\u9650\u306e\u5e73\u5747\u8aa4\u5dee\u30c7\u30a3\u30b6\u30ea\u30f3\u30b0\u306b\u57fa\u3065\u3044\u3066\u304a\u308a\u3001\u9ad8\u901f\u3067\u304f\u3063\u304d\u308a\u3068\u3057\u307e\u3059\u3002")),(0,i.kt)("h4",u({},{id:"alpha-dither"}),"Alpha Dither"),(0,i.kt)("p",null,"This dropdown sets whether or not to use the dither algorithm through the alpha channel."),(0,i.kt)("h4",u({},{id:"layout-rotation"}),"Layout Rotation"),(0,i.kt)("p",null,"This dropdown specifies the rotation of the image data when generated. \u30b9\u30af\u30ea\u30fc\u30f3\u306e\u5411\u304d\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u3001\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u5411\u304d\u3067\u6b63\u3057\u304f\u753b\u50cf\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",u({},{id:"text-configuration"}),"Text Configuration\uff08\u30c6\u30ad\u30b9\u30c8\u8a2d\u5b9a\uff09"),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5408\u3046\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30aa\u30f3\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3068\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration-4.17.webp",mdxType:"Figure"},"Config View\u3067\u306eText Configuration\u306e\u8a2d\u5b9a"),(0,i.kt)("h4",u({},{id:"remap-texts"}),"Remap texts"),(0,i.kt)("p",null,"This option defines whether or not translations that are identical should be remapped. \u30c6\u30ad\u30b9\u30c8\u3092\u518d\u5272\u308a\u5f53\u3066\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u8a00\u8a9e\u3001\u30bf\u30a4\u30dd\u30b0\u30e9\u30d5\u30a3\u3001\u30a2\u30e9\u30a4\u30e1\u30f3\u30c8\u3067\u540c\u4e00\u306e\u7ffb\u8a33\u3068\u63a5\u5c3e\u8f9e\u304c\u7d50\u5408\u3055\u308c\u3001\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u304c\u7e2e\u5c0f\u3057\u307e\u3059\u3002\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001Binary translation files\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u306f\u540c\u6642\u306b\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\uff08\u76f8\u4e92\u6392\u4ed6\u7684\uff09\u3002"),(0,i.kt)("h4",u({},{id:"a4"}),"A4"),(0,i.kt)("p",null,"This option defines whether or not the horizontal pixel data of glyphs byte are aligned into an A4 format.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"p"},"This only affects typographies that are configured as 4bpp")),(0,i.kt)("h4",u({},{id:"binary-translation-files"}),"Binary translation files"),(0,i.kt)("p",null,"This option defines whether or not the translations in a project should be moved into binary files that can be loaded at runtime.",(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"p"},"This option is mutually exclusive with the option 'Remap texts'")),(0,i.kt)("h4",u({},{id:"binary-font-files"}),"Binary font files"),(0,i.kt)("p",null,"This option defines whether or not the font files in a project should be moved into binary files that can be loaded at runtime."),(0,i.kt)("h4",u({},{id:"mapped-storage-format"}),"Mapped storage format"),(0,i.kt)("p",null,"This option defines if the font files in a project should be output in mapped storage format."),(0,i.kt)("h4",u({},{id:"unmapped-storage-format"}),"Unmapped storage format"),(0,i.kt)("p",null,"This option defines if the font files in a project should be output in unmapped storage format."),(0,i.kt)(o.Z,{mdxType:"FurtherReading"},(0,i.kt)(l.Z,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"\u30c6\u30ad\u30b9\u30c8\u3068\u30d5\u30a9\u30f3\u30c8")),(0,i.kt)("h2",u({},{id:"simulator"}),"Simulator\uff08\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\uff09"),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u5b9f\u884c\u6642\u306b\u30b9\u30ad\u30f3\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002 \u30b9\u30ad\u30f3\u306f\u7e26\u5411\u304d\u3068\u6a2a\u5411\u304d\u306e\u3069\u3061\u3089\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3082\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002 X\u304a\u3088\u3073Y\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30b9\u30ad\u30f3\u4e0a\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u4f4d\u7f6e\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-4.17.webp",mdxType:"Figure"}," Config View\u3067\u306eSimulator\u306e\u8a2d\u5b9a"),(0,i.kt)("p",null,"\u30b9\u30ad\u30f3\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u4e2d\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u30c7\u30e2\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\u30b9\u30ad\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u6a19\u6e96\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\uff65\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306f\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3059\u3002 \u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u9589\u3058\u308b\u306b\u306f ",(0,i.kt)(r.Z,{mdxType:"Shortcut"},"Esc\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002")),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.webp",mdxType:"Figure"},"\u30b9\u30ad\u30f3\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u4e2d\u306e\u30b7\u30df\u30e5\u30ec\u30fc\u30bf"),(0,i.kt)("h2",u({},{id:"build"}),"Build\uff08\u30d3\u30eb\u30c9\uff09"),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"main-window#run-simulator"}),"'Run Simulator'"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"main-window#run-target"}),"'Run Target'"),"\u3001",(0,i.kt)("a",u({parentName:"p"},{href:"main-window#generate-code"}),"'Generate Code'"),"\u3092\u62bc\u3057\u305f\u3068\u304d\u306b\u5b9f\u884c\u3055\u308c\u305f\u30b3\u30de\u30f3\u30c9\u3092\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u3092\u4e0a\u66f8\u304d\u3059\u308b\u306b\u306f\u3001\u5358\u7d14\u306b\u30c6\u30ad\u30b9\u30c8\uff65\u30dc\u30c3\u30af\u30b9\u306b\u4efb\u610f\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002 \u30b3\u30de\u30f3\u30c9\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b\u306b\u306f\u3001\u4e0a\u66f8\u304d\u6e08\u307f\u306e\u5834\u5408\u306f\u3001\u30b3\u30de\u30f3\u30c9\u540d\u306e\u6a2a\u306e'Reset'\u30e9\u30d9\u30eb\u3092\u62bc\u3057\u307e\u3059\u3002"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build-4.17.webp",mdxType:"Figure"}," Config View\u3067\u306eBuild\u306e\u8a2d\u5b9a"),(0,i.kt)("h4",u({},{id:"generate-assets-command"}),"Generate Assets Command"),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u901a\u5e38\u306f\u30c6\u30ad\u30b9\u30c8\uff65\u30a2\u30bb\u30c3\u30c8\u3068\u753b\u50cf\u30a2\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u8a2d\u5b9a\u3055\u308c\u3001TouchGFX Designer\u304c\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3057\u305f\u5f8c\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"post-generate-command"}),"Post Generate Command"),(0,i.kt)("p",null,"This command is usually used to update various project files. \u7d44\u8fbc\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"touchgfx update_project"),"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\uff65\u30c4\u30fc\u30eb\u306f\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\uff65\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visual Studio\uff08.vcxproj\uff09"),(0,i.kt)("li",{parentName:"ul"},"Keil\uff08.uvprojx\uff09"),(0,i.kt)("li",{parentName:"ul"},"IAR\uff08.ewp & .ipcf\uff09"),(0,i.kt)("li",{parentName:"ul"},"STM32CubeIDE\uff08.project & .cproject\uff09"),(0,i.kt)("li",{parentName:"ul"},"STM32CubeMX\uff08.ioc\uff09")),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001\u30b3\u30fc\u30c9\u751f\u6210\u5f8c\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30b3\u30de\u30f3\u30c9\u3092\u3001\u3053\u3053\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"compile-simulator-command"}),"Compile Simulator Command"),(0,i.kt)("p",null,"This command executes the compilation of a project for the simulator, usually by executing the Makefile generated by the TouchGFX Designer."),(0,i.kt)("h4",u({},{id:"run-simulator-command"}),"Run Simulator Command"),(0,i.kt)("p",null,"This command executes the startup of the simulator.exe."),(0,i.kt)("h4",u({},{id:"post-generate-command"}),"Post Generate Target Command"),(0,i.kt)("p",null,"This command is usually used to update various project files, mostly STM32CubeMX (.ioc) project files."),(0,i.kt)("p",null,"\u305f\u3060\u3057\u3001\u30b3\u30fc\u30c9\u751f\u6210\u5f8c\u306b\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30b3\u30de\u30f3\u30c9\u3092\u3001\u3053\u3053\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h4",u({},{id:"compile-target-command"}),"Compile Target Command"),(0,i.kt)("p",null,"This command executes the compilation of a project for the target hardware."),(0,i.kt)("h4",u({},{id:"flash-target-command"}),"Flash Target Command"),(0,i.kt)("p",null,"This command executes the flashing of a project to the target hardware."),(0,i.kt)("h4",u({},{id:"flash-target-internal-command"}),"Flash Target Internal Command"),(0,i.kt)("p",null,"This command executes the flashing of a project to the target hardware when the ",(0,i.kt)("a",u({parentName:"p"},{href:"main-window#run-target-internal"}),"Flash Internal")," option is enabled."),(0,i.kt)("h2",u({},{id:"framework-features"}),"Framework Features\uff08\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u6a5f\u80fd\uff09"),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u5185\u306e\u6a5f\u80fd\uff08\u7279\u306b\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\uff65\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u304c\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\uff09\u3092\u6709\u52b9\u5316 / \u7121\u52b9\u5316\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\uff65\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u4e0a\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u5360\u6709\u3059\u308b\u30b3\u30fc\u30c9\u306e\u30b5\u30a4\u30ba\u3092\u6700\u9069\u5316\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u8868\u793a\u3055\u308c\u308b\u9078\u629e\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u9078\u629e\u3055\u308c\u305f\u8272\u6df1\u5ea6\u306b\u5fdc\u3058\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u4e0b\u306e\u753b\u50cf\u306b\u306f\u3001\u8272\u6df1\u5ea6\u304c24bit\u306e\u30c6\u30af\u30b9\u30c1\u30e3\uff65\u30de\u30c3\u30d1\u30fc\u5411\u3051\u306e\u753b\u50cf\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)(n.Z,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features-4.17.webp",mdxType:"Figure"},"Config View\u3067\u306e24bpp\u7528\u306eFramework Features\u306e\u8a2d\u5b9a"))}v.isMDXComponent=!0}}]);