"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[45747],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=l.createContext({}),c=function(e){var t=l.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),s=i,h=d["".concat(a,".").concat(s)]||d[s]||m[s]||o;return n?l.createElement(h,r(r({ref:t},p),{},{components:n})):l.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=s;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[d]="string"==typeof e?e:i,r[1]=u;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86473:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(59496),i=n(89588);const o=l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},l.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}));class r extends l.Component{render(){return l.createElement(i.Z,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:o},this.props.children)}}const u=r},12822:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(59496),i=n(32118);const o=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,r=(0,i.Z)(e.imageSource);return t?l.createElement("div",{className:"figure noshadow"},l.createElement("a",{href:r,target:"_blank"},l.createElement("img",{width:n,height:o,src:r})),l.createElement("p",null,e.children)):l.createElement("div",{className:"figure"},l.createElement("a",{href:r,target:"_blank"},l.createElement("img",{width:n,height:o,src:r})),l.createElement("p",null,e.children))}},89588:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(59496);class i extends l.Component{render(){const e=`highlight highlight-${this.props.type}`;return l.createElement("div",{className:e},l.createElement("div",{className:"highlight-heading"},l.createElement("h5",null,l.createElement("div",{className:"highlight-icon"},this.props.icon),this.props.header)),l.createElement("div",{className:"highlight-content"},this.props.children))}}const o=i},50282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>m});n(59496);var l=n(49613),i=n(86473),o=n(12822);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"file-menu",title:"\u6587\u4ef6\u83dc\u5355"},c=void 0,p={unversionedId:"development/ui-development/designer-user-guide/file-menu",id:"development/ui-development/designer-user-guide/file-menu",title:"\u6587\u4ef6\u83dc\u5355",description:"\u4e3b\u754c\u9762\u6587\u4ef6\u83dc\u5355",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/file-menu.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/file-menu",permalink:"/4.23/zh-CN/docs/development/ui-development/designer-user-guide/file-menu",draft:!1,tags:[],version:"current",frontMatter:{id:"file-menu",title:"\u6587\u4ef6\u83dc\u5355"},sidebar:"docs",previous:{title:"\u8d77\u59cb\u754c\u9762",permalink:"/4.23/zh-CN/docs/development/ui-development/designer-user-guide/startup-window"},next:{title:"\u4e3b\u7a97\u53e3",permalink:"/4.23/zh-CN/docs/development/ui-development/designer-user-guide/main-window"}},d={},m=[{value:"\u4e3b\u754c\u9762\u6587\u4ef6\u83dc\u5355",id:"lobby-file-menu",level:2},{value:"\u6587\u4ef6",id:"lobby-file-menu-file",level:3},{value:"Open",id:"lobby-file-menu-file-open",level:4},{value:"Switch to Dark theme",id:"lobby-file-menu-file-switch-to-dark-theme",level:4},{value:"Download",id:"lobby-file-menu-file-download",level:4},{value:"Settings",id:"lobby-file-menu-file-settings",level:4},{value:"Exit",id:"lobby-file-menu-file-exit",level:4},{value:"\u5e2e\u52a9",id:"lobby-file-menu-help",level:3},{value:"Documentation",id:"lobby-file-menu-help-documentation",level:4},{value:"Q&amp;A",id:"lobby-file-menu-help-q-and-a",level:4},{value:"Request Feature",id:"lobby-file-menu-help-request-feature",level:4},{value:"Keyboard Shortcuts",id:"lobby-file-menu-help-keyboard-shortcuts",level:4},{value:"About",id:"lobby-file-menu-help-about",level:4},{value:"\u9879\u76ee\u6587\u4ef6\u83dc\u5355",id:"project-file-menu",level:2},{value:"\u6587\u4ef6",id:"project-file-menu-file",level:3},{value:"New",id:"project-file-menu-file-new",level:4},{value:"Open",id:"project-file-menu-file-open",level:4},{value:"Save",id:"project-file-menu-file-save",level:4},{value:"Switch to Dark theme",id:"project-file-menu-file-switch-to-dark-theme",level:4},{value:"Recent",id:"project-file-menu-file-recent",level:4},{value:"Exit",id:"project-file-menu-file-exit",level:4},{value:"\u7f16\u8f91",id:"project-file-menu-edit",level:3},{value:"Undo",id:"project-file-menu-edit-undo",level:4},{value:"Redo",id:"project-file-menu-edit-redo",level:4},{value:"Select All",id:"project-file-menu-edit-select-all",level:4},{value:"Copy",id:"project-file-menu-edit-copy",level:4},{value:"Paste",id:"project-file-menu-edit-paste",level:4},{value:"Delete",id:"project-file-menu-edit-delete",level:4},{value:"Import GUI",id:"project-file-menu-edit-import-gui",level:4},{value:"\u4ee3\u7801",id:"project-file-menu-code",level:3},{value:"Generate Code",id:"project-file-menu-code-generate-code",level:4},{value:"Run Simulator",id:"project-file-menu-code-run-simulator",level:4},{value:"Program and Run Target",id:"project-file-menu-code-program-and-run-target",level:4},{value:"Program Internal Flash and Run Target",id:"project-file-menu-code-program-internal-flash-and-run-target",level:4},{value:"Cancel",id:"project-file-menu-code-cancel",level:4},{value:"Open Files",id:"project-file-menu-code-open-files",level:4},{value:"\u5e2e\u52a9",id:"project-file-menu-help",level:3},{value:"Documentation",id:"project-file-menu-help-documentation",level:4},{value:"Q&amp;A",id:"project-file-menu-help-q-and-a",level:4},{value:"Request Feature",id:"project-file-menu-help-request-feature",level:4},{value:"Keyboard Shortcuts",id:"project-file-menu-help-keyboard-shortcuts",level:4},{value:"About",id:"project-file-menu-help-about",level:4}],s={toc:m},h="wrapper";function f(e){var{components:t}=e,n=u(e,["components"]);return(0,l.kt)(h,r({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",r({},{id:"lobby-file-menu"}),"\u4e3b\u754c\u9762\u6587\u4ef6\u83dc\u5355"),(0,l.kt)("p",null,"TouchGFX \u8bbe\u8ba1\u5668\u7684\u4e3b\u754c\u9762\u6587\u4ef6\u83dc\u5355\u7531",(0,l.kt)("a",r({parentName:"p"},{href:"#lobby-file-menu-file"}),"\u6587\u4ef6"),"\u548c",(0,l.kt)("a",r({parentName:"p"},{href:"#lobby-file-menu-help"}),"\u5e2e\u52a9"),"\u83dc\u5355\u9879\u7ec4\u6210\u3002"),(0,l.kt)("h3",r({},{id:"lobby-file-menu-file"}),"\u6587\u4ef6"),(0,l.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-lobby-file-menu-file.png",mdxType:"Figure"},"\u4e3b\u754c\u9762\u6587\u4ef6\u83dc\u5355\u4e2d\u7684\u6587\u4ef6\u83dc\u5355\u9879"),(0,l.kt)("h4",r({},{id:"lobby-file-menu-file-open"}),"Open"),(0,l.kt)("p",null,"Clicking the Open button will open a file explorer, allowing for navigation to and loading of a TouchGFX Designer project file (.touchgfx)"),(0,l.kt)("h4",r({},{id:"lobby-file-menu-file-switch-to-dark-theme"}),"Switch to Dark theme"),(0,l.kt)("p",null,"Clicking the Switch to Dark theme button will change the theme of the TouchGFX Designer to a dark theme."),(0,l.kt)("h4",r({},{id:"lobby-file-menu-file-download"}),"Download"),(0,l.kt)("p",null,"Hovering/clicking the Recent button will reveal four options for downloading packages, clicking any of these will make the TouchGFX Designer download all packages of the specified type for offline use."),(0,l.kt)("h4",r({},{id:"lobby-file-menu-file-settings"}),"Settings"),(0,l.kt)("p",null,"Hovering/clicking the Recent button will reveal options to set the ",(0,l.kt)("a",r({parentName:"p"},{href:"settings-windows"}),"TouchGFX Designer's global settings"),", clicking any of these will open a window that is used to configure the chosen setting."),(0,l.kt)("h4",r({},{id:"lobby-file-menu-file-exit"}),"Exit"),(0,l.kt)("p",null,"Clicking the Exit button will shutdown the TouchGFX Designer."),(0,l.kt)("h3",r({},{id:"lobby-file-menu-help"}),"\u5e2e\u52a9"),(0,l.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-lobby-file-menu-help.png",mdxType:"Figure"},"\u4e3b\u754c\u9762\u6587\u4ef6\u83dc\u5355\u4e2d\u7684\u5e2e\u52a9\u83dc\u5355\u9879"),(0,l.kt)("h4",r({},{id:"lobby-file-menu-help-documentation"}),"Documentation"),(0,l.kt)("p",null,"Clicking the Documentation button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://support.touchgfx.com"}),"https://support.touchgfx.com")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"lobby-file-menu-help-q-and-a"}),"Q&A"),(0,l.kt)("p",null,"Clicking the Q&A button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://community.st.com/touchgfx"}),"https://community.st.com/touchgfx")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"lobby-file-menu-help-request-feature"}),"Request Feature"),(0,l.kt)("p",null,"Clicking the Request Feature button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://community.st.com/s/ideazone"}),"https://community.st.com/s/ideazone")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"lobby-file-menu-help-keyboard-shortcuts"}),"Keyboard Shortcuts"),(0,l.kt)("p",null,"Clicking the Keyboard Shortcuts button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}),"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"lobby-file-menu-help-about"}),"About"),(0,l.kt)("p",null,"Clicking the About button will open a window containing the Software License Agreement."),(0,l.kt)("h2",r({},{id:"project-file-menu"}),"\u9879\u76ee\u6587\u4ef6\u83dc\u5355"),(0,l.kt)("p",null,"TouchGFX \u8bbe\u8ba1\u5668\u7684\u9879\u76ee\u6587\u4ef6\u83dc\u5355\u7531",(0,l.kt)("a",r({parentName:"p"},{href:"#project-file-menu-file"}),"\u6587\u4ef6"),"\u3001",(0,l.kt)("a",r({parentName:"p"},{href:"#project-file-menu-edit"}),"\u7f16\u8f91"),"\u548c",(0,l.kt)("a",r({parentName:"p"},{href:"#project-file-menu-help"}),"\u5e2e\u52a9"),"\u83dc\u5355\u9879\u7ec4\u6210\u3002"),(0,l.kt)("h3",r({},{id:"project-file-menu-file"}),"\u6587\u4ef6"),(0,l.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-file.png",mdxType:"Figure"},"\u9879\u76ee\u6587\u4ef6\u83dc\u5355\u4e2d\u7684\u6587\u4ef6\u83dc\u5355\u9879"),(0,l.kt)("h4",r({},{id:"project-file-menu-file-new"}),"New"),(0,l.kt)("p",null,"Clicking the New button will open the ",(0,l.kt)("a",r({parentName:"p"},{href:"startup-window"}),"Lobby"),", where a new project can be created."),(0,l.kt)("h4",r({},{id:"project-file-menu-file-open"}),"Open"),(0,l.kt)("p",null,"Clicking the Open button will open a file explorer, allowing for navigation to and loading of a TouchGFX Designer project file (.touchgfx)"),(0,l.kt)("h4",r({},{id:"project-file-menu-file-save"}),"Save"),(0,l.kt)("p",null,"Clicking the Save button will save the project that is currently open, into its TouchGFX Designer project.",(0,l.kt)("br",null)," The project is also saved when running the simulator, flashing to target and generating code."),(0,l.kt)("h4",r({},{id:"project-file-menu-file-switch-to-dark-theme"}),"Switch to Dark theme"),(0,l.kt)("p",null,"Clicking the Switch to Dark theme button will change the theme of the TouchGFX Designer to a dark theme."),(0,l.kt)("h4",r({},{id:"project-file-menu-file-recent"}),"Recent"),(0,l.kt)("p",null,"Hovering/clicking the Recent button will reveal the projects that have most recently been created, opened or modified, clicking any of these will load that project."),(0,l.kt)("h4",r({},{id:"project-file-menu-file-exit"}),"Exit"),(0,l.kt)("p",null,"Clicking the Exit button will shutdown the TouchGFX Designer."),(0,l.kt)("h3",r({},{id:"project-file-menu-edit"}),"\u7f16\u8f91"),(0,l.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-edit.png",mdxType:"Figure"},"\u9879\u76ee\u83dc\u5355\u4e2d\u7684\u7f16\u8f91\u83dc\u5355\u9879"),(0,l.kt)("h4",r({},{id:"project-file-menu-edit-undo"}),"Undo"),(0,l.kt)("p",null,"Clicking the Undo button will undo changes made in the ",(0,l.kt)("a",r({parentName:"p"},{href:"canvas-view"}),"Canvas View"),". \u5982\u679c\u6ca1\u6709\u53ef\u64a4\u9500\u7684\u4fee\u6539\uff0c\u6216\u8005\u5f53\u524d\u672a\u9009\u4e2d\u201c\u753b\u5e03\u89c6\u56fe\u201d\uff0c\u5219\u8be5\u83dc\u5355\u4e3a\u7070\u8272\u3002"),(0,l.kt)("h4",r({},{id:"project-file-menu-edit-redo"}),"Redo"),(0,l.kt)("p",null,"Clicking the Redo button will redo changes made in the ",(0,l.kt)("a",r({parentName:"p"},{href:"canvas-view"}),"Canvas View"),". \u5982\u679c\u6ca1\u6709\u53ef\u91cd\u505a\u7684\u4fee\u6539\uff0c\u6216\u8005\u5f53\u524d\u672a\u9009\u4e2d\u201c\u753b\u5e03\u89c6\u56fe\u201d\uff0c\u5219\u8be5\u83dc\u5355\u4e3a\u7070\u8272\u3002"),(0,l.kt)("h4",r({},{id:"project-file-menu-edit-select-all"}),"Select All"),(0,l.kt)("p",null,"Clicking the Select All button will select all widgets added to the Screen or Custom Container that is currently visible in the ",(0,l.kt)("a",r({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"."),(0,l.kt)("h4",r({},{id:"project-file-menu-edit-copy"}),"Copy"),(0,l.kt)("p",null,"Clicking the Copy button will add the Widget, Screen or Custom Container that is currently selected in the ",(0,l.kt)("a",r({parentName:"p"},{href:"canvas-view"}),"Canvas View"),", to the copy/paste buffer."),(0,l.kt)("h4",r({},{id:"project-file-menu-edit-paste"}),"Paste"),(0,l.kt)("p",null,"Clicking the Paste button will paste the Widget, Screen or Custom Container that is currently in the copy/paste buffer. \u5982\u679c\u6ca1\u6709\u590d\u5236\u5bf9\u8c61\uff0c\u5c06\u65e0\u6cd5\u8fdb\u884c\u7c98\u8d34\u3002"),(0,l.kt)("h4",r({},{id:"project-file-menu-edit-delete"}),"Delete"),(0,l.kt)("p",null,"Clicking the Delete button will delete the Widget, Screen or Custom Container that is currently selected in the ",(0,l.kt)("a",r({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"."),(0,l.kt)("h4",r({},{id:"project-file-menu-edit-import-gui"}),"Import GUI"),(0,l.kt)("p",null,"Clicking the Import Gui button will open the Import GUI window."),(0,l.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-import-gui-4.17.webp",mdxType:"Figure"},"TouchGFX Designer\u4e2d\u7684\u201c\u5bfc\u5165UI\u201d\u7a97\u53e3"),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u53ef\u4ee5\u5c06UI\u5bfc\u5165\u5f53\u524d\u6253\u5f00\u7684\u5de5\u7a0b\u4e2d\u3002 \u53ef\u4ee5\u4ece\u610f\u6cd5\u534a\u5bfc\u4f53\u63d0\u4f9b\u7684\u793a\u4f8b\u548c\u6f14\u793a\u4e2d\u9009\u62e9UI\uff0c\u6216\u8005\u70b9\u51fb\u201c\u6d4f\u89c8\u201d\uff0c\u7136\u540e\u9009\u62e9\u8981\u5bfc\u5165\u5f53\u524d\u5de5\u7a0b\u7684TouchGFX Designer\u5de5\u7a0b (.touchgfx) \u3002"),(0,l.kt)(i.Z,{mdxType:"Caution"},"\u5bfc\u5165\u7684UI\u5c06\u8986\u76d6\u5de5\u7a0b\u4e2d\u5df2\u6709\u7684UI"),(0,l.kt)("h3",r({},{id:"project-file-menu-code"}),"\u4ee3\u7801"),(0,l.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-code.png",mdxType:"Figure"},"\u9879\u76ee\u6587\u4ef6\u83dc\u5355\u4e2d\u7684\u4ee3\u7801\u83dc\u5355\u9879"),(0,l.kt)("h4",r({},{id:"project-file-menu-code-generate-code"}),"Generate Code"),(0,l.kt)("p",null,"Clicking the Generate Code button will start code generation of the current project. \u5982\u679c\u6709\u5176\u4ed6\u751f\u6210\u6216\u7f16\u8bd1\u6b65\u9aa4\u6b63\u5728\u8fd0\u884c\uff0c\u5219\u6b64\u6309\u94ae\u53ef\u80fd\u4f1a\u53d8\u7070\u3002"),(0,l.kt)("h4",r({},{id:"project-file-menu-code-run-simulator"}),"Run Simulator"),(0,l.kt)("p",null,"Clicking the Run Simulator button will start compilation of the current project and afterwards open the ",(0,l.kt)("a",r({parentName:"p"},{href:"../working-with-touchgfx/simulator"}),"Simulator"),". \u5982\u679c\u6709\u5176\u4ed6\u751f\u6210\u6216\u7f16\u8bd1\u6b65\u9aa4\u6b63\u5728\u8fd0\u884c\uff0c\u5219\u6b64\u6309\u94ae\u53ef\u80fd\u4f1a\u53d8\u7070\u3002"),(0,l.kt)("h4",r({},{id:"project-file-menu-code-program-and-run-target"}),"Program and Run Target"),(0,l.kt)("p",null,"Clicking the Program and Run Target button will start compilation of the project and afterwards ",(0,l.kt)("a",r({parentName:"p"},{href:"../working-with-touchgfx/compiling-and-flashing"}),"flash it to target"),". \u5982\u679c\u6709\u5176\u4ed6\u751f\u6210\u6216\u7f16\u8bd1\u6b65\u9aa4\u6b63\u5728\u8fd0\u884c\uff0c\u5219\u6b64\u6309\u94ae\u53ef\u80fd\u4f1a\u53d8\u7070\u3002"),(0,l.kt)("h4",r({},{id:"project-file-menu-code-program-internal-flash-and-run-target"}),"Program Internal Flash and Run Target"),(0,l.kt)("p",null,"Clicking the Program Internal Flash and Run Target button will start compilation of the project and afterwards flash the internal memory of the target. This button will be greyed out if the ",(0,l.kt)("a",r({parentName:"p"},{href:"config-view#flash-target-internal-command"}),"Flash Target Internal Command")," is disabled."),(0,l.kt)("h4",r({},{id:"project-file-menu-code-cancel"}),"Cancel"),(0,l.kt)("p",null,"Clicking the Cancel button will cancel any running generation or compilation steps. \u5f53\u65e0\u751f\u6210\u6216\u7f16\u8bd1\u6b65\u9aa4\u8fd0\u884c\u65f6\uff0c\u6b64\u6309\u94ae\u5c06\u53d8\u7070\u3002"),(0,l.kt)("h4",r({},{id:"project-file-menu-code-open-files"}),"Open Files"),(0,l.kt)("p",null,"Clicking the Open Files button will open the project folder in a file browser."),(0,l.kt)("h3",r({},{id:"project-file-menu-help"}),"\u5e2e\u52a9"),(0,l.kt)(o.Z,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-help.png",mdxType:"Figure"},"\u9879\u76ee\u6587\u4ef6\u83dc\u5355\u4e2d\u7684\u5e2e\u52a9\u83dc\u5355\u9879"),(0,l.kt)("h4",r({},{id:"project-file-menu-help-documentation"}),"Documentation"),(0,l.kt)("p",null,"Clicking the Documentation button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://support.touchgfx.com"}),"https://support.touchgfx.com")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"project-file-menu-help-q-and-a"}),"Q&A"),(0,l.kt)("p",null,"Clicking the Q&A button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://community.st.com/touchgfx"}),"https://community.st.com/touchgfx")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"project-file-menu-help-request-feature"}),"Request Feature"),(0,l.kt)("p",null,"Clicking the Request Feature button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://community.st.com/s/ideazone"}),"https://community.st.com/s/ideazone")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"project-file-menu-help-keyboard-shortcuts"}),"Keyboard Shortcuts"),(0,l.kt)("p",null,"Clicking the Keyboard Shortcuts button will open ",(0,l.kt)("a",r({parentName:"p"},{href:"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}),"https://support.touchgfx.com/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts")," in your operating systems default browser."),(0,l.kt)("h4",r({},{id:"project-file-menu-help-about"}),"About"),(0,l.kt)("p",null,"Clicking the About button will open a window containing the Software License Agreement."))}f.isMDXComponent=!0}}]);