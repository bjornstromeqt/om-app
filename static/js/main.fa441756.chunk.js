(this["webpackJsonpom-app"]=this["webpackJsonpom-app"]||[]).push([[0],{54:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(21),i=t.n(r),o=t(5),s=t(0);function l(e){var n=e.title,t=e.content,c=e.theme;return Object(s.jsx)("section",{className:"hero is-fullheight ".concat(c),children:Object(s.jsx)("div",{className:"hero-body",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("p",{className:"title",children:n}),Object(s.jsx)("div",{className:"subtitle",children:t})]})})})}var d,j=t(3),b=t(4);function u(e){var n=e.currentValue,t=e.updateValue,a=Object(c.useCallback)((function(e){t(e.target.value)}),[t]);return Object(s.jsx)(x,{children:Object(s.jsx)("input",{className:"input",type:"password",value:n,onChange:a,autoComplete:"omasdasd"})})}var p,O,h,x=b.a.div(d||(d=Object(j.a)(["\n    max-width: 400px;\n"]))),f=t(6),g=t.n(f);function m(e){var n=e.color;return Object(s.jsxs)(v,{children:[Object(s.jsx)(k,{color:n}),Object(s.jsx)(k,{color:n}),Object(s.jsx)(k,{color:n}),Object(s.jsx)(k,{color:n})]})}m.defaultProps={color:"grey"};var v=b.a.div(p||(p=Object(j.a)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),y=Object(b.b)(O||(O=Object(j.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),k=b.a.div(h||(h=Object(j.a)(["\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid ",";\n  border-radius: 50%;\n  animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: "," transparent transparent transparent;\n  &:nth-child(1) {\n      animation-delay: -0.45s;\n  }\n  &:nth-child(2) {\n      animation-delay: -0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: -0.15s;\n  }    \n"])),(function(e){return e.color}),y,(function(e){return e.color}));k.propTypes={color:g.a.string};var C,w,N,S=t(25),L=t.n(S);function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;console.log("Make request!");var c="https://script.google.com/macros/s/AKfycbx5k_fnpRyoZJ_XwHLIXJkoF4C50ywdNlOa4TXUoh_KG4vUq6pNMGm8CtZ7xRfHX6CQ/exec",a={params:{option:e}};L()(c,a).then((function(e){n(e.data)})).catch((function(e){console.error(e),t(e)}))}function F(){var e=function(){var e=Object(c.useState)({data:[],isLoading:!0,error:null}),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useCallback)((function(e){a({data:e,isLoading:!1,error:null})}),[a]),i=Object(c.useCallback)((function(e){a({data:[],isLoading:!1,error:e})}),[a]),s=Object(c.useCallback)((function(e){a({isLoading:!0}),T(e,r,i)}),[r,i]);return Object(c.useEffect)((function(){console.log("Use effect!"),T("",r,i)}),[i,r]),[s,t]}(),n=Object(o.a)(e,2),t=n[0],a=n[1],r=a.data,i=a.isLoading,l=a.error;return console.log(a),l?Object(s.jsx)("div",{children:"Failed to load dates."}):i?Object(s.jsx)(m,{color:"#fff"}):Object(s.jsx)(V,{children:r.map((function(e,n){return Object(s.jsxs)(J,{isSelected:!!e.selected,children:[Object(s.jsx)(I,{children:new Date(e.date).toISOString().slice(0,10)}),Object(s.jsx)(I,{isCentered:!0,children:e.selected?"Vald!":Object(s.jsx)("button",{className:"button is-small",disabled:!!e.selected,onClick:t.bind(null,n+1),children:"V\xe4lj"})})]},e.date)}))})}var V=b.a.div(C||(C=Object(j.a)(["\n    margin: 20px auto;\n    font-size: 80%;\n"]))),J=b.a.div(w||(w=Object(j.a)(["\n    display: flex;\n    padding: 4px 0;\n    margin: 4px 0;\n    align-items: center;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    :first-child {\n        border-top: 1px solid rgba(255,255,255, 0.1);\n    }\n    ",";\n"])),(function(e){return e.isSelected?"\n        color: #85e485;\n        font-weight: bold;\n    ":""}));J.propTypes={isSelected:g.a.bool};var E,I=b.a.div(N||(N=Object(j.a)(["\n    flex: 1;\n    padding-right: 20px;\n    ",";\n"])),(function(e){return e.isCentered?"\n        text-align: center;\n    ":""}));function M(){return Object(s.jsxs)(X,{children:[Object(s.jsx)("p",{className:"content",children:"Stort grattis p\xe5 eran br\xf6llopsdag!"}),Object(s.jsx)("p",{className:"content",children:"D\xe5 vi vill spendera mer tid med er s\xe5 vill vi bjuda er p\xe5 en helkv\xe4ll i Stockholm. Nedan finns n\xe5gra f\xf6rslag p\xe5 datum."}),Object(s.jsx)("hr",{}),Object(s.jsx)(F,{}),Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{className:"content",children:["Varma lycko\xf6nskningar \u2763\ufe0f",Object(s.jsx)("br",{}),Object(s.jsx)("i",{children:"Bj\xf6rn, Hanna, Tom och Jeanna"})]})]})}I.propTypes={isCentered:g.a.bool};var X=b.a.div(E||(E=Object(j.a)(["\n    max-width: 480px;\n"]))),z=["5yRSjtQN","test"];function B(){var e=Object(c.useState)(""),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(!0),i=Object(o.a)(r,2),d=i[0],j=i[1],b=Object(c.useState)(!1),p=Object(o.a)(b,2),O=p[0],h=p[1];return Object(c.useEffect)((function(){z.find((function(e){return e===t}))&&(h(!0),window.setTimeout((function(){j(!1)}),1e3))}),[t]),O&&d?Object(s.jsx)(l,{title:" ",theme:"is-danger",content:Object(s.jsx)(m,{color:"#fff"})}):O?Object(s.jsx)(l,{theme:"is-info",title:"\ud83c\udf1f Olga & M\xe5rten \ud83c\udf1f",content:Object(s.jsx)(M,{})}):Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(l,{title:"Enter password",content:Object(s.jsx)(u,{currentValue:t,updateValue:a})})})}var D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),D()}},[[54,1,2]]]);
//# sourceMappingURL=main.fa441756.chunk.js.map