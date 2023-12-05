"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[98705],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(59496);var a=n(49613);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"languages-and-characters",title:"Languages and Characters"},s=void 0,l={unversionedId:"development/ui-development/touchgfx-engine-features/languages-and-characters",id:"development/ui-development/touchgfx-engine-features/languages-and-characters",title:"Languages and Characters",description:"TouchGFX enables internationalized and localized applications.",source:"@site/docs/development/ui-development/touchgfx-engine-features/languages-and-characters.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/languages-and-characters",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/languages-and-characters",draft:!1,tags:[],version:"current",frontMatter:{id:"languages-and-characters",title:"Languages and Characters"},sidebar:"docs",previous:{title:"Texts and Fonts",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"},next:{title:"MJPEG Video",permalink:"/4.23/docs/development/ui-development/touchgfx-engine-features/video"}},u={},c=[{value:"Languages",id:"languages",level:2},{value:"Characters",id:"characters",level:2},{value:"Writing Direction",id:"writing-direction",level:2},{value:"Contextual Shaping",id:"contextual-shaping",level:2},{value:"List of Supported Languages",id:"list-of-supported-languages",level:2},{value:"Left-to-Right Languages",id:"left-to-right-languages",level:3},{value:"Right-to-Left Languages",id:"right-to-left-languages",level:3},{value:"Unsupported Languages",id:"unsupported-languages",level:2}],h={toc:c},p="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(p,r({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TouchGFX enables internationalized and localized applications."),(0,a.kt)("p",null,"TouchGFX does this by supporting a wide range of languages and\ncharacters and by understanding text layout mechanisms, such as\nwriting direction and contextual shaping."),(0,a.kt)("h2",r({},{id:"languages"}),"Languages"),(0,a.kt)("p",null,"The languages supported are the languages of the Unicode basic\nmultilingual plane with the restriction that only Left-to-Right or\nRight-to-Left writing systems are supported. This implies that\nlanguages such as Arabic, Chinese, English and many more are\nsupported, maybe with a few limitations. Urdu and Burmese are examples\nof languages that are currently not supported."),(0,a.kt)("h2",r({},{id:"characters"}),"Characters"),(0,a.kt)("p",null,"The encoding of characters is based on the Unicode standard. 16-bit\nUnicodes are supported, i.e. Unicodes from 0x0000 to 0xFFFF are\nsupported. Some languages may use the Private Use Area from\n0xE000-0xE3FF for special characters in a given font (e.g.\nDevanagari)."),(0,a.kt)("h2",r({},{id:"writing-direction"}),"Writing Direction"),(0,a.kt)("p",null,"TouchGFX supports Left-to-Right (LTR) and Right-to-Left (RTL) writing\nsystems. There is no built-in support for Top-to-Bottom writing\nsystems."),(0,a.kt)("p",null,'It should be noted that RTL does not mean that text is written\nbackwards (compared to LTR). It means that WORDS are written starting\nfrom the right towards the left. For Arabic and Hebrew, this is the\ncorrect setting. "TouchGFX" will not be written "XFGhcuoT" but the\ndirection of words (or collection of words) can be controlled using\nthe RTL/LTR setting.'),(0,a.kt)("p",null,'The handling of LTR and RTL writing inside TouchGFX applications\nrespects mixing of the two to some degree. This is known as\nbidirectional script support. A subset of the official rules for\nbidirectional writing is supported by TouchGFX. This means that for\nexample "10:45", "3.14159", "STMicroelectronics TouchGFX" and others\nare recognized and written fully LTR even in an RTL text.'),(0,a.kt)("p",null,"For RTL text, some parts of the text must thus be written LTR. This\ntext is found and collected; all characters that are non-RTL letters\nare collected. Characters such as color (:), dot (.), comma (,), space\n(","\xa0",') will also "tie together" two consecutive LTR parts. This is\nwhat makes sure that "10:45" is handled as a single LTR entity whereas\n"Mark:" (ending in a color) will get the colon to the left as Arabic\nand Hebrew speaking countries would expect, i.e. "',"<","some Arabic\nmessage",">",' :Mark" where the colon is on the left side in the RTL\ntext.'),(0,a.kt)("p",null,"Please note that numbers used in the Latin character set (0-9), as\nwell as numbers used in the Arabic character set, are all handled as\nLTR characters to make sure that numbers show up properly on the\ndisplay."),(0,a.kt)("p",null,'It should also be noted that the writing direction is very important\nwhen a text contains a mix of LTR entities and RTL entities. Also\nnote, that it cannot be determined if a text is RTL or LTR by\nexamining the characters in the text. If a text contains first a\nHebrew word (RTL) and then an English word (LTR), the output on\ndisplay will depend on the writing direction of the text. If the text\nis set to be RTL the output would look something like this: "English\nwerbeH" because the entire text is RTL so the first word must be\nwritten to the far right, but if the text is set to be LTR the output\nwould look something like this: "werbeH English" because the text\nshould start with the first word at the far left. The RTL versus LTR\nsetting cannot be determined automatically because an English text may\ncontain Hebrew words, just like a Hebrew text may contain English\nwords.'),(0,a.kt)("p",null,"Another important issue regarding RTL text is the automatic swapping\nof parenthesis characters. These are (, ), {, }, ","[, ]",", ","<",", ",">",". All\nthese are automatically swapped with the opposite character to ensure\nthat text looks correct. Please note that there is no automatic\nconversion from Latin numbers to Arabic numbers. This must be done by\nthe user before displaying the text, should this be desired."),(0,a.kt)("h2",r({},{id:"contextual-shaping"}),"Contextual Shaping"),(0,a.kt)("p",null,"Certain scripts will select a different form of one or more\ncharacters/glyphs depending on the context of the character. As an\nexample the Arabic alphabet has different contextual forms for the\nletters in the alphabet, depending on the position of the letter\ninside the word. TouchGFX supports such contextual shaping of\nlanguages by implementing a simplified set of rules for combining\ncharacters. Also, some diacritics are placed using custom logic to\ndetermine the vertical position - this is particularly true for\nArabic, Thai and Devanagari."),(0,a.kt)("h2",r({},{id:"list-of-supported-languages"}),"List of Supported Languages"),(0,a.kt)("p",null,"It is difficult to provide an exhaustive list of all supported\nlanguages. In general, standard glyphs without special re-ordering or\npositioning rules are supported. Some languages, such as Hindi\n(Devanagari) and Arabic, with special rules have been included in\nTouchGFX."),(0,a.kt)("h3",r({},{id:"left-to-right-languages"}),"Left-to-Right Languages"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Simple languages using Latin characters")),(0,a.kt)("p",null,"In general, simple languages using characters and glyphs that do not\nrequire special re-ordering or positioning are supported. These\nlanguages include, but is not limited to, these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainian")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Simple languages using special character sets")),(0,a.kt)("p",null,"Some languages still follow simple positioning rules, but use a\ndifferent set of characters and glyphs. These are also support and\ninclude, but is not limited to, these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chinese, Greek, Japanese, Russian")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Other")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Thai has limited support. Tone marks are positioned (vertically) using TouchGFX rules."),(0,a.kt)("li",{parentName:"ul"},"Hindi (Devanagari) has limited support. Some characters may be placed slightly wrong, but text should not be unreadable.")),(0,a.kt)("h3",r({},{id:"right-to-left-languages"}),"Right-to-Left Languages"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Simple languages using special character sets")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hebrew, Indonesian, Kazakh")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Languages with different ligatures for different forms (isolated, initial, middle, final)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arabic (Sequences of more than four characters are not recognized and converted to one ligature. These are: Sallallahou Alayhe Wasallam, Jallajalalouhou and Rial Sign). Some diacritics may be placed slightly incorrect."),(0,a.kt)("li",{parentName:"ul"},"Farsi"),(0,a.kt)("li",{parentName:"ul"},'Malay (\u0762 "Keheh with dot above" only supported in isolated form)')),(0,a.kt)("h2",r({},{id:"unsupported-languages"}),"Unsupported Languages"),(0,a.kt)("p",null,"The following languages are known to be unsupported because they rely\non extensive use of ligatures, digraphs and vertical positioning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Urdu, Burmese")))}d.isMDXComponent=!0}}]);