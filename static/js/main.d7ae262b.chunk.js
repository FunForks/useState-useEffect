(this.webpackJsonppriscilla=this.webpackJsonppriscilla||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(3),s=c.n(i),d=c(4),l=(c(9),c(0));var r=function(e){var t=e.renders,c=e.myState,n=e.action;return Object(l.jsxs)("div",{id:"example",onClick:n,children:[Object(l.jsx)("h1",{children:"Click me"}),Object(l.jsxs)("p",{children:["renders: ",t]}),Object(l.jsxs)("p",{children:["myState: ",c]})]})},o=0;var a=function(){o+=1;var e=Object(n.useState)(0),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){var e=["#f9f","#f99","#ff9","#9f9","#9ff","#99f"],t=e[o%e.length];document.body.style.backgroundColor=t})),Object(l.jsxs)("div",{id:"App",children:[Object(l.jsx)(r,{renders:o,myState:c,action:function(){i(c+1)}}),Object(l.jsx)("h1",{children:"Demo of useState and useEffect"}),Object(l.jsxs)("p",{children:["The ",Object(l.jsx)("code",{children:"App()"})," function is called for the first time by the ",Object(l.jsx)("code",{children:"ReactDOM.render()"})," function in index.js. The first time it is called the ",Object(l.jsx)("code",{children:"myState"})," constant is set to ",Object(l.jsx)("code",{children:"0"}),"."]}),Object(l.jsxs)("p",{children:["Each time you click on the ",Object(l.jsx)("code",{children:"Stately div"})," above, the value of ",Object(l.jsx)("code",{children:"myState"})," is incremented by 1. This change causes React to call the ",Object(l.jsx)("code",{children:"App ()"})," function again, in order to render the ",Object(l.jsx)("code",{children:"App"})," component one more time. This will have several effects:"]}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["The value of the local variable ",Object(l.jsx)("code",{children:"renders"})," will be incremented by 1"]}),Object(l.jsxs)("li",{children:["The values of the ",Object(l.jsx)("i",{children:"constants"})," ",Object(l.jsx)("code",{children:"myState"})," and ",Object(l.jsx)("code",{children:"setMyState"})," will be set inside the new function call. React will have stored the newly-changed value of ",Object(l.jsx)("code",{children:"myState"})," internally, and will set the ",Object(l.jsx)("i",{children:"constant"})," ",Object(l.jsx)("code",{children:"myState"})," to this saved value."]}),Object(l.jsxs)("li",{children:["A new function ",Object(l.jsx)("code",{children:"increment()"})," will be created, and passed as the ",Object(l.jsx)("code",{children:"action"})," prop to the ",Object(l.jsx)("code",{children:"Stately"})," component."]}),Object(l.jsxs)("li",{children:["The ",Object(l.jsx)("code",{children:"useEffect"})," function will be triggered, which will generate a side-effect. In this example, the side-effect is a change of background-color for the body. In a real project, it could be any effect that is independent of the rendering logic, such as a ",Object(l.jsx)("code",{children:"fetch"})," request, starting a timer, or updating the page title."]})]}),Object(l.jsx)("h2",{children:"Note"}),Object(l.jsxs)("p",{children:["When you create an app using ",Object(l.jsx)("code",{children:"npx create-react-app"}),",by default, the ",Object(l.jsx)("code",{children:"index.js"})," file will render using ",Object(l.jsx)("a",{href:"https://reactjs.org/docs/strict-mode.html",children:Object(l.jsx)("code",{children:"<React.StrictMode>"})}),". In development mode, this will call the ",Object(l.jsx)("code",{children:"App()"})," function twice for each render, in order to activate additional checks and warnings, forhighlighting potential problems in an application."]}),Object(l.jsxs)("p",{children:["In this demo, ",Object(l.jsx)("code",{children:"<React.StrictMode>"})," has been disabled, so each the ",Object(l.jsx)("code",{children:"App()"})," function will only be called once per render."]})]})};s.a.render(Object(l.jsx)(a,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.d7ae262b.chunk.js.map