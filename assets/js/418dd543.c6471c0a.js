"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[97452],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||g[c]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89639:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59496),a=n(7029);const r=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,o=(0,a.Z)(e.imageSource);return t?i.createElement("div",{className:"figure noshadow"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children)):i.createElement("div",{className:"figure"},i.createElement("a",{href:o,target:"_blank"},i.createElement("img",{width:n,height:r,src:o})),i.createElement("p",null,e.children))}},48753:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59496),a=n(96151);const r=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends i.Component{render(){return i.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:r},this.props.children)}}const l=o},96151:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59496);class a extends i.Component{render(){const e=`highlight highlight-${this.props.type}`;return i.createElement("div",{className:e},i.createElement("div",{className:"highlight-heading"},i.createElement("h5",null,i.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),i.createElement("div",{className:"highlight-content"},this.props.children))}}const r=a},42243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>c});n(59496);var i=n(49613),a=n(89639),r=n(48753),o=n(95375);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={id:"texts-view",title:"Texts View"},p=void 0,u={unversionedId:"development/ui-development/designer-user-guide/texts-view",id:"development/ui-development/designer-user-guide/texts-view",title:"Texts View",description:"The Texts View in the TouchGFX Designer is used for configuring texts, translations and typographies in a project. The view consists of two tabs: Texts, and Typographies.",source:"@site/docs/development/ui-development/designer-user-guide/texts-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/texts-view",permalink:"/4.23/docs/development/ui-development/designer-user-guide/texts-view",draft:!1,tags:[],version:"current",frontMatter:{id:"texts-view",title:"Texts View"},sidebar:"docs",previous:{title:"Images View",permalink:"/4.23/docs/development/ui-development/designer-user-guide/images-view"},next:{title:"Config View",permalink:"/4.23/docs/development/ui-development/designer-user-guide/config-view"}},g={},c=[{value:"Texts",id:"texts",level:2},{value:"Auto-generated ID",id:"auto-generated-id",level:3},{value:"Defined ID",id:"defined-id",level:3},{value:"Texts tab features",id:"texts-tab-features",level:3},{value:"Search",id:"search",level:4},{value:"Tree view",id:"tree-view",level:4},{value:"Groups",id:"groups",level:4},{value:"Header context menu",id:"header-context-menu",level:4},{value:"Grid context menu",id:"grid-context-menu",level:4},{value:"Translations",id:"translations",level:3},{value:"Typography",id:"typography",level:4},{value:"Alignment",id:"alignment",level:4},{value:"Translations Specifics",id:"translations-specifics",level:3},{value:"Adding languages",id:"adding-languages",level:3},{value:"Typographies",id:"typographies",level:2},{value:"Typography ID",id:"typography-id",level:4},{value:"Language Settings",id:"language-settings",level:4},{value:"Font",id:"font",level:4},{value:"Type",id:"type",level:4},{value:"Size",id:"size",level:4},{value:"Bpp",id:"bpp",level:4},{value:"Direction",id:"direction",level:4},{value:"Fallback Character",id:"fallback-character",level:4},{value:"Wildcard Characters",id:"wildcard-characters",level:4},{value:"Widget Wildcard Characters",id:"widget-wildcard-characters",level:4},{value:"Wildcard Ranges",id:"wildcard-ranges",level:4},{value:"Ellipsis Character",id:"ellipsis-character",level:4},{value:"Add Typography",id:"add-new-typography",level:3},{value:"Delete Typography",id:"delete-typography",level:3}],h={toc:c},m="wrapper";function v(e){var{components:t}=e,n=s(e,["components"]);return(0,i.kt)(m,l({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Texts View in the TouchGFX Designer is used for configuring texts, translations and typographies in a project. The view consists of two tabs: ",(0,i.kt)("a",l({parentName:"p"},{href:"#texts"}),"Texts"),", and ",(0,i.kt)("a",l({parentName:"p"},{href:"#typographies"}),"Typographies"),"."),(0,i.kt)("h2",l({},{id:"texts"}),"Texts"),(0,i.kt)("p",null,"The Texts tab gives an overview of all texts elements. A text element can either have an ",(0,i.kt)("a",l({parentName:"p"},{href:"#auto-generated-id"}),"auto-generated ID")," or a ",(0,i.kt)("a",l({parentName:"p"},{href:"#defined-id"}),"defined ID"),"."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view.webp",mdxType:"Figure"},"Texts View"),(0,i.kt)("h3",l({},{id:"auto-generated-id"}),"Auto-generated ID"),(0,i.kt)("p",null,"Texts with an auto-generated ID (also known as Single Use texts) are only used once, and cannot be used by more than one widget or action at a time. They are added automatically when used on a widget or action, and are deleted automatically when the widget or action is deleted."),(0,i.kt)("p",null,"When auto-generated texts are initially created, they are added to a text group named ",(0,i.kt)("em",{parentName:"p"},'"Unsorted"'),". if this group does not exist, it will be created."),(0,i.kt)("p",null,"The auto-generated ID can easily be renamed thereby enabling the use of the text on any number of widgets and actions."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-texts-view-auto-generated.webp",mdxType:"Figure"},"Auto-generated texts in Texts View"),(0,i.kt)("h3",l({},{id:"defined-id"}),"Defined ID"),(0,i.kt)("p",null,"Texts with a defined ID (also known as Resources) can be reused on any number of widgets and actions in the TouchGFX Designer.\nTo add a new text with a defined ID, click the button labeled 'Add new text' in the Texts tab or rename a text with an auto-generated ID. One or more texts with a defined ID can be deleted in the Texts tab by selecting in grid or tree view and right clicking to open the shortcut menu or use the keyboard shortcut."),(0,i.kt)("h3",l({},{id:"texts-tab-features"}),"Texts tab features"),(0,i.kt)("h4",l({},{id:"search"}),"Search"),(0,i.kt)("p",null,"Use the search bar to locate a specific text element or translation. All available input in text columns is searched."),(0,i.kt)("h4",l({},{id:"tree-view"}),"Tree view"),(0,i.kt)("p",null,"The Texts tab contain a tree giving an overview of groups and text elements."),(0,i.kt)("h4",l({},{id:"groups"}),"Groups"),(0,i.kt)("p",null,"Every group in the tree, that contains one or more texts can be collapsed by pressing the chevron next to the group's name.\nGroups can have text added to them either by dragging a text in tree view or by right clicking a text in grid. To add a new group simply click the add button in tree view."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-groups.webp",mdxType:"Figure"},"Text Groups"),(0,i.kt)("h4",l({},{id:"header-context-menu"}),"Header context menu"),(0,i.kt)("p",null,"Right click the header in grid to see the header context menu. From here you can hide, edit, delete, and show a column (not all options are available for all columns)."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-header-context-menu.webp",mdxType:"Figure"},"Header context menu"),(0,i.kt)("h4",l({},{id:"grid-context-menu"}),"Grid context menu"),(0,i.kt)("p",null,"Right click a text in grid to see the context menu. From here you can delete, copy, paste, and move a text to another group."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-text-context-menu.webp",mdxType:"Figure"},"Text context menu"),(0,i.kt)("h3",l({},{id:"translations"}),"Translations"),(0,i.kt)("h4",l({},{id:"typography"}),"Typography"),(0,i.kt)("p",null,"Specifies which typography the text and all its translations should use. Typographies can be added and configured in the ",(0,i.kt)("a",l({parentName:"p"},{href:"#typographies"}),"Typographies")," tab."),(0,i.kt)("h4",l({},{id:"alignment"}),"Alignment"),(0,i.kt)("p",null,"Specifies the horizontal alignment the text and all its translations should use as default. Possible values are Left, Right, and Center."),(0,i.kt)("h3",l({},{id:"translations-specifics"}),"Translations Specifics"),(0,i.kt)("p",null,"Each translation can overwrite the default Alignment. To reveal this control double click a translation. Setting a translation specific alignment is easily done through the inline Alignment selector, as shown in the figure below."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-edit-language-specific-text-alignment.webp",mdxType:"Figure"},"How to set Translation Specific Alignment"),(0,i.kt)("h3",l({},{id:"adding-languages"}),"Adding languages"),(0,i.kt)("p",null,"To add a new language, simply press the add button in the header menu. The popup in the figure below will appear, where the name of the language can be configured, and whether or not to use the translations from another language."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-text-view-add-language.webp",mdxType:"Figure"},"Add New Language popup"),(0,i.kt)("h2",l({},{id:"typographies"}),"Typographies"),(0,i.kt)("p",null,"In the Typographies tab an overview of all typographies in a project can be found, as shown in the figure below."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view.png",mdxType:"Figure"},"Typographies view"),(0,i.kt)("h4",l({},{id:"typography-id"}),"Typography ID"),(0,i.kt)("p",null,"The name of the typography."),(0,i.kt)("h4",l({},{id:"language-settings"}),"Language Settings"),(0,i.kt)("p",null,"Contains the language settings of the typography. Default applies to all unspecified languages. To specify settings for a specific language click the add button and choose the desired language from the menu."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-language-setting.png",mdxType:"Figure"},"Add Language Setting to Typography"),(0,i.kt)("p",null,"A language setting can be deleted by right clicking the desired language setting tab."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-language-setting.webp",mdxType:"Figure"},"Delete Language Setting to Typography"),(0,i.kt)("h4",l({},{id:"font"}),"Font"),(0,i.kt)("p",null,"The name of the font to use for the given typography.",(0,i.kt)("br",null),"\nYou can choose between all installed fonts in Windows, or add your own fonts in the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/fonts")," folder. ",(0,i.kt)("em",{parentName:"p"},"When adding fonts to this folder, the TouchGFX Designer needs to be restarted to load them.")),(0,i.kt)("h4",l({},{id:"type"}),"Type"),(0,i.kt)("p",null,"The type of format to store the font in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bitmap - the default format where every glyph used in the font is stored as a bitmap."),(0,i.kt)("li",{parentName:"ul"},"Vector - if vector font functionality is enabled, choose this option to store the font as vector data.")),(0,i.kt)(r.Z,{mdxType:"FurtherReading"},"To read more about how to potentially save space in a TouchGFX application by using the vector font format, visit the ",(0,i.kt)(o.Z,{to:"../touchgfx-engine-features/vector-fonts",mdxType:"Link"},"Vector Fonts article"),"."),(0,i.kt)("h4",l({},{id:"size"}),"Size"),(0,i.kt)("p",null,"The font size of the typography."),(0,i.kt)("h4",l({},{id:"bpp"}),"Bpp"),(0,i.kt)("p",null,"Bits per pixel. The number of bits that are used per pixel to represent the font. Legal values are 1, 2, 4, 8."),(0,i.kt)("h4",l({},{id:"direction"}),"Direction"),(0,i.kt)("p",null,"Specifies which text direction the text should use. Possible values are LTR (Left-to-Right) and RTL (Right-to-Left), the default being LTR. The RTL option is primarily used for Arabic, Hebrew or other languages written from right to left."),(0,i.kt)("h4",l({},{id:"fallback-character"}),"Fallback Character"),(0,i.kt)("p",null,"If TouchGFX needs to render a character, but the glyph is unavailable, the character specified in this column is used. Value can be a single character, a unicode value ",(0,i.kt)("em",{parentName:"p"},"(in decimal or hexadecimal e.g. 0xABCD)"),", the special keyword 'skip' or simply blank."),(0,i.kt)("h4",l({},{id:"wildcard-characters"}),"Wildcard Characters"),(0,i.kt)("p",null,'Characters that should be available to display in the TouchGFX application. This is recommended over using a dummy text. A dummy text will generate all glyphs, but also the actual string (e.g. "0123456789-"). Putting "0123456789-" in this column will generate the glyphs, but not a string.'),(0,i.kt)("h4",l({},{id:"widget-wildcard-characters"}),"Widget Wildcard Characters"),(0,i.kt)("p",null,"These are characters which some widgets that require a wildcard will add. As an example the ",(0,i.kt)("a",l({parentName:"p"},{href:"../ui-components/miscellaneous/digital-clock"}),"Digital Clock"),' widget will add "0123456789 :APM" to this field. The field is read only.'),(0,i.kt)("h4",l({},{id:"wildcard-ranges"}),"Wildcard Ranges"),(0,i.kt)("p",null,'This is similar to Wildcard Characters, but ranges can easily be specified, e.g. "0-9,A-F" will be the same as putting "0123456789ABCDEF" in the Wildcard Characters column. Ranges can also be specified as numbers. For example "0-9" can also be specified as "48-57" or "0x30-0x39". Please note that the quotes should not be entered.'),(0,i.kt)("h4",l({},{id:"ellipsis-character"}),"Ellipsis Character"),(0,i.kt)("p",null,"This character is used to truncate long text in text areas."),(0,i.kt)("h3",l({},{id:"add-new-typography"}),"Add Typography"),(0,i.kt)("p",null,"To add a new typography, simply press the add button in tree view. A new typography containing default settings will be added to the bottom of the list."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-add-typography.webp",mdxType:"Figure"},"Add Typography"),(0,i.kt)("h3",l({},{id:"delete-typography"}),"Delete Typography"),(0,i.kt)("p",null,"A typography can be deleted by right clicking the desired typography in tree view to open the shortcut menu or use the keyboard shortcut."),(0,i.kt)(a.Z,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/designer-typography-view-delete-typography.webp",mdxType:"Figure"},"Delete Typography"))}v.isMDXComponent=!0}}]);