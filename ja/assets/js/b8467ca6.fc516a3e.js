"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[89069],{49613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(59496);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),p=a,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},14313:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>p});o(59496);var n=o(49613),a=o(89639),r=o(12963),i=o(11995);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={id:"tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions"},u=void 0,d={unversionedId:"tutorials/tutorial-05",id:"tutorials/tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions",description:"With TouchGFX Designer it is possible to define your own interaction components with custom triggers and actions. Each Screen in your application can contain a collection of actions (these are simply void methods in C++) that you can call from within TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers (which is equal to a callback in C++) which your application can react to.",source:"@site/academy/tutorials/tutorial-05.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-05",permalink:"/4.23/ja/academy/tutorials/tutorial-05",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions"},sidebar:"academy",previous:{title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior",permalink:"/4.23/ja/academy/tutorials/tutorial-04"},next:{title:"Tutorial 6: Using TextAreas",permalink:"/4.23/ja/academy/tutorials/tutorial-06/tutorial-06-introduction"}},m={},p=[{value:"Adding a Custom Action to a Screen",id:"adding-a-custom-action-to-a-screen",level:2},{value:"Passing a Value to a Custom Action",id:"passing-a-value-to-a-custom-action",level:2},{value:"Using Custom Triggers in Custom Containers",id:"using-custom-triggers-in-custom-containers",level:2}],h={toc:p},g="wrapper";function k(e){var{components:t}=e,o=c(e,["components"]);return(0,n.kt)(g,l({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"With TouchGFX Designer it is possible to define your own interaction components with custom triggers and actions. Each Screen in your application can contain a collection of actions ",(0,n.kt)("em",{parentName:"p"},"(these are simply void methods in C++)")," that you can call from within TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers ",(0,n.kt)("em",{parentName:"p"},"(which is equal to a callback in C++)")," which your application can react to."),(0,n.kt)("p",null,"In this tutorial, we will go through this functionality to learn the possibilities this gives us to create more clean and dynamic TouchGFX applications."),(0,n.kt)("p",null,"This tutorial is not suitable for new users of TouchGFX. It is recommended to revisit the tutorial later."),(0,n.kt)("h2",l({},{id:"adding-a-custom-action-to-a-screen"}),"Adding a Custom Action to a Screen"),(0,n.kt)("p",null,"In this section we will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new application with a background box and a button"),(0,n.kt)("li",{parentName:"ul"},"Add a custom action to the application"),(0,n.kt)("li",{parentName:"ul"},"Change the background color using the custom action when the button is pressed")),(0,n.kt)("p",null,'Let\'s start out by creating a new blank application with dimensions 480x272 (for example for STM32F746 or the simulator) and inserting a Box for the background (let\'s name this "background") and a Button (name this one "button"). You should have something similar to the image below:'),(0,n.kt)(r.Z,{points:[[479,78]],imageSource:"/img/academy/tutorials/tutorial-05/white-background-and-button-4-17.webp",mdxType:"FigureWithPoints"},"Adding a white background Box and a Button"),(0,n.kt)("p",null,'Next, let\'s add a custom action to our Screen. You can do this from the properties tab of the Screen by selecting the Screen and pressing the + button in the "Actions" group (1 above). Name the action "setBackgroundColor" and give it a description like "Sets the background color". Do not set a type for this Action.'),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/adding-custom-action-to-screen-4-17.webp",mdxType:"Figure"},"Adding a new custom action to a Screen"),(0,n.kt)("p",null,"Press ",(0,n.kt)(i.Z,{mdxType:"Shortcut"},"F4")," to generate the code for the project. This generates a virtual method in ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/generated/gui_generated/include/gui_generated/screen1_screen/Screen1ViewBase.hpp")," called ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor()"),"."),(0,n.kt)("p",null,"You can add functionality to this method by overriding it in user code in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," file or by creating interactions through TouchGFX Designer.\nLet's try out the latter by going to the interactions tab for the screen and adding an interaction that calls our new method when our button is clicked."),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/calling-setbackgroundcolor-on-click-4-17.webp",mdxType:"Figure"},"Call setBackgroundColor when button is clicked"),(0,n.kt)("p",null,"Now we must specify what actually happens when ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor")," is called. This is done by using our new custom action (1) as a trigger in another interaction. Let's start out by simply setting the background Box color to black by using the action ",(0,n.kt)("em",{parentName:"p"},'"Change box color"')," (2) when the trigger ",(0,n.kt)("em",{parentName:"p"},'"setBackgroundColor is called"')," happens."),(0,n.kt)(r.Z,{points:[[370,58],[410,76]],imageSource:"/img/academy/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality-4-17.webp",mdxType:"FigureWithPoints"},"Implementing functionality for custom action setBackgroundColor"),(0,n.kt)("p",null,"Now run the simulator and press the button; the background should turn black. You have successfully created your first custom action."),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/black-color-result-4-17.webp",mdxType:"Figure"},"Pressing button turns background black"),(0,n.kt)("p",null,"You can now see the generated code for the method ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFX/generated/gui_generated/src/screen1_screen/Screen1ViewBase.cpp"),"."),(0,n.kt)("h2",l({},{id:"passing-a-value-to-a-custom-action"}),"Passing a Value to a Custom Action"),(0,n.kt)("p",null,"Building upon the application we have just created, this section will expand upon the custom action concept by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding a parameter to the setBackgroundColor custom action"),(0,n.kt)("li",{parentName:"ul"},"Passing a random color to setBackgroundColor"),(0,n.kt)("li",{parentName:"ul"},"Using this to change the background to random colors when pressing the button")),(0,n.kt)("p",null,"Let's make this application a little more interesting by passing a value to our ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor")," custom action to make it more dynamic."),(0,n.kt)("p",null,"Goto the interactions tab for the Screen and delete the two current interactions by pressing the x button for each of them, as we will be setting up new ones."),(0,n.kt)("p",null,"Go to the properties tab for the Screen to the custom action called ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),' and check off the checkbox for type and input "colortype" which will be the type of the parameter we are going to pass to the action (colortype is the built-in TouchGFX type for describing colors). It is not possible to name the parameter, it will be named ',(0,n.kt)("em",{parentName:"p"},'"value"'),"."),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/adding-type-to-action-4-17.webp",mdxType:"Figure"},"Setting up a parameter for a custom action"),(0,n.kt)("p",null,'Next let\'s setup an interaction which uses our newly added parameter value. We do this by using the trigger "setBackgroundColor is called" and the action "Execute C++ code". We want to use our new parameter to set the color of our background Box, so the code to execute should be:'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"background.setColor(value);\nbackground.invalidate();\n")),(0,n.kt)("p",null,"The second line forces a redraw of the background with the new color."),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/set-color-execute-code-4-17.webp",mdxType:"Figure"},"Using the passed value to change color of background"),(0,n.kt)("p",null,'Notice that the trigger displays the name and type of the parameter "value : colortype".'),(0,n.kt)("p",null,'Next, let\'s set up the interaction that actually calls setBackgroundColor when our button is clicked. Add another interaction with trigger "Button is clicked" and action "Call Screen1 setBackgroundColor" and notice that the value property also displays which type it expects. Let\'s pass a random color to setBackgroundColor by utilizing the randomization method ',(0,n.kt)("inlineCode",{parentName:"p"},"rand()")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"stdlib.h")," to get three random numbers between 0 and 255 and using those to specify the color. To gain access to ",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),' we need to include it into our application. It is also possible to supply your own includes from within TouchGFX Designer for both screens and custom containers, which we need to do for this example. Go to the properties tab for the screen and under the "INCLUDES" group, input:'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n")),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/include-stdlib-4-17.webp",mdxType:"Figure"},"Including stdlib to gain access to rand()"),(0,n.kt)("p",null,"Next, for the value property we are going to input (1):"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(r.Z,{points:[[395,105]],imageSource:"/img/academy/tutorials/tutorial-05/pass-random-color-to-action-4-17.webp",mdxType:"FigureWithPoints"},"Passing a random color value when button is clicked"),(0,n.kt)("p",null,"Now run the simulator and try pressing the button a couple of times. You should see the background changing to random colors."),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/random-color-result-initial-4-17.webp",mdxType:"Figure"},"Resulting random color when clicking the button"),(0,n.kt)("h2",l({},{id:"using-custom-triggers-in-custom-containers"}),"Using Custom Triggers in Custom Containers"),(0,n.kt)("p",null,"Finally, Custom Containers can also define a collection of custom triggers so in this section we will expand upon the application by doing the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new custom container called ColorEmitter"),(0,n.kt)("li",{parentName:"ul"},'Add a custom trigger to ColorEmitter called "colorChanged"'),(0,n.kt)("li",{parentName:"ul"},"Use the colorChanged trigger to signal out random colors to the application when the button is pressed"),(0,n.kt)("li",{parentName:"ul"},"Set up interactions in the screen to listen for the colorChanged trigger"),(0,n.kt)("li",{parentName:"ul"},"Use whatever color the ColorEmitter sends out to set the color of the background box")),(0,n.kt)("p",null,"Let's try using a custom trigger to signal some event in our application. Instead of our button interaction passing the random color to ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),", let's try and make a custom container send out the random color to our Screen, and then let the Screen use whatever value the custom container communicated. This should end up being a simple example of different UI components communicating with each other in an application to make smaller, more reusable components."),(0,n.kt)("p",null,'First, let\'s create a new custom container and call it "ColorEmitter". Insert a button and call it "button". You should have something similar to the image below:'),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/color-emitter-custom-container-4-17.webp",mdxType:"Figure"},"ColorEmitter custom container"),(0,n.kt)("p",null,"Now, let's make it so that whenever the button is clicked, the ColorEmitter will emit a random color to the world. Anyone can then decide to listen for this emit and use the color for something. In our case, we just want to mimic the behavior we had before by using the color to set the background color."),(0,n.kt)("p",null,'To make the custom container emit a color, first we need to create a custom trigger. Go to the properties tab for the custom container and press the + button in the "Triggers" group (1). Name the trigger "colorChanged", give it description "The color has changed" and give it the type "colortype".'),(0,n.kt)(r.Z,{points:[[460,78]],imageSource:"/img/academy/tutorials/tutorial-05/adding-custom-trigger-to-custom-container-4-17.webp",mdxType:"FigureWithPoints"},"Adding a custom trigger to a custom container"),(0,n.kt)("p",null,'Next, go to the interactions tab for the custom container and create a new interaction. Use trigger "Button is clicked" and action "Emit colorChanged". Now we want to communicate a random color, so use the same code from earlier for the value property:'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFromRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/emitting-color-changed-4-17.webp",mdxType:"Figure"},"Emitting a custom trigger"),(0,n.kt)("p",null,"However, this won't work initially since the ",(0,n.kt)("inlineCode",{parentName:"p"},"touchgfx::Color"),' namespace is not automatically included within our custom container. So like earlier, we are going to supply our own include for the custom container. Go to the properties tab for the custom container and under the "Includes" group (1), input:'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n")),(0,n.kt)(r.Z,{points:[[460,110]],imageSource:"/img/academy/tutorials/tutorial-05/extra-includes-4-17.webp",mdxType:"FigureWithPoints"},"Supplying extra includes"),(0,n.kt)("p",null,'Now we want to replace our old button with the new ColorEmitter custom container we have created. Select Screen1 and delete the button here. This should give a domain error in the interaction that was using this button, so delete that interaction also as we will create a new one for the ColorEmitter. Now insert an instance of our ColorEmitter on Screen1, then create a new interaction on Screen1. For the trigger, you should see an option called "ColorEmitter colorChanged happens". Select that one and for the action use "Call Screen1 setBackgroundColor". Now we need to use the value from the colorChanged emit, which will always be named "value" (like discussed earlier in this article). Therefore, input "value" into the value property.'),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/emit-colorchanged-happens-interaction-4-17.webp",mdxType:"Figure"},"Setting up an interaction to listen for colorChanged custom trigger"),(0,n.kt)("p",null,"Now run simulator and try pressing the button again. The same behavior should be present, with the background changing to random colors. But now, instead of just having all the functionality implemented in the Screen, we've successfully created our own communication between the Screen and some of its smaller, reusable components, namely our simple ColorEmitter."),(0,n.kt)(a.Z,{imageSource:"/img/academy/tutorials/tutorial-05/random-color-result-final-4-17.webp",mdxType:"Figure"},"Resulting random color when button is clicked"))}k.isMDXComponent=!0},89639:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(59496),a=o(7029);const r=function(e){const t=e.noShadow||!1,o=e.width,r=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{className:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:r,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:r,src:i})),n.createElement("p",null,e.children))}},12963:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(59496),a=o(7029);const r=function(e){const t=e.width,o=e.height,r=e.points||[],i=(0,a.Z)(e.imageSource);return n.createElement("div",{style:{position:"relative"}},n.createElement("div",{className:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:t,height:o,src:i})),r.map((function(e,t){return n.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none"},viewBox:"0 0 500 500"},n.createElement("g",{transform:"translate("+e[0]+", "+e[1]+")"},n.createElement("path",{id:"p1",d:"M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602z",fill:"white",stroke:"black"}),n.createElement("text",{x:"11.7",y:"9.5","font-size":"x-small","dominant-baseline":"middle","text-anchor":"middle"},t+1)))})),n.createElement("p",null,e.children)))}},11995:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(59496);class a extends n.Component{render(){return n.createElement("code",{className:"shortcut"},this.props.children)}}const r=a}}]);