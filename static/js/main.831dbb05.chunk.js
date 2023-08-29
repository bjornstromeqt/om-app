(this["webpackJsonpom-app"]=this["webpackJsonpom-app"]||[]).push([[0],{54:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(21),r=t.n(i),s=t(5),o=t(0);function l(e){var n=e.title,t=e.content,a=e.theme;return Object(o.jsx)("section",{className:"hero is-fullheight ".concat(a),children:Object(o.jsx)("div",{className:"hero-body",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("p",{className:"title",children:n}),Object(o.jsx)("div",{className:"subtitle",children:t})]})})})}var d,b=t(2),j=t(3);function u(e){var n=e.currentValue,t=e.updateValue,c=Object(a.useCallback)((function(e){t(e.target.value)}),[t]);return Object(o.jsx)(O,{children:Object(o.jsx)("input",{className:"input",type:"password",value:n,onChange:c,autoComplete:"omasdasd"})})}var p,x,h,O=j.a.div(d||(d=Object(b.a)(["\n    max-width: 400px;\n"]))),f=t(6),g=t.n(f);function v(e){var n=e.color;return Object(o.jsxs)(m,{children:[Object(o.jsx)(k,{color:n}),Object(o.jsx)(k,{color:n}),Object(o.jsx)(k,{color:n}),Object(o.jsx)(k,{color:n})]})}v.defaultProps={color:"grey"};var m=j.a.div(p||(p=Object(b.a)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),y=Object(j.b)(x||(x=Object(b.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),k=j.a.div(h||(h=Object(b.a)(["\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid ",";\n  border-radius: 50%;\n  animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: "," transparent transparent transparent;\n  &:nth-child(1) {\n      animation-delay: -0.45s;\n  }\n  &:nth-child(2) {\n      animation-delay: -0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: -0.15s;\n  }    \n"])),(function(e){return e.color}),y,(function(e){return e.color}));k.propTypes={color:g.a.string};var C,S,N,w,L,V=t(25),E=t.n(V);function F(){var e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,t={params:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null};E()("https://script.google.com/macros/s/AKfycbxx3g3QtxAkSQUhCJ7GrzJ2Hs-viyYnJB4F-1ipYDLniEME3Y7AAAo9Ptx7xTvNXcRu/exec",t).then((function(n){e(n.data)})).catch((function(e){console.error(e),n(e)}))}function T(){var e=function(){var e=Object(a.useState)({data:[],isLoading:!0,error:null}),n=Object(s.a)(e,2),t=n[0],c=n[1],i=Object(a.useCallback)((function(e){c({data:e,isLoading:!1,error:null})}),[c]),r=Object(a.useCallback)((function(e){c({data:[],isLoading:!1,error:e})}),[c]),o=Object(a.useCallback)((function(e){var n=Object.assign({},t,{isLoading:!0});c(n),F({select:e},i,r)}),[t,i,r]),l=Object(a.useCallback)((function(e){var n=Object.assign({},t,{isLoading:!0});c(n),F({deselect:e},i,r)}),[t,i,r]);return Object(a.useEffect)((function(){console.log("Use effect!"),F("",i,r)}),[r,i]),[o,l,t]}(),n=Object(s.a)(e,3),t=n[0],c=n[1],i=n[2],r=i.data,l=i.isLoading,d=i.error;return console.log(i),d?Object(o.jsx)("div",{children:"Failed to load dates."}):Object(o.jsxs)(A,{children:[r.map((function(e,n){return Object(o.jsxs)(z,{isSelected:!!e.selected,children:[Object(o.jsx)(M,{children:new Date(e.date).toISOString().slice(0,10)}),Object(o.jsx)(M,{isCentered:!0,children:e.selected?Object(o.jsx)(B,{onClick:c.bind(null,n+1),children:"Vald!"}):Object(o.jsx)("button",{className:"button is-small",disabled:!!e.selected,onClick:t.bind(null,n+1),children:"V\xe4lj"})})]},e.date)})),l&&Object(o.jsx)(J,{children:Object(o.jsx)(v,{color:"#fff"})})]})}var A=j.a.div(C||(C=Object(b.a)(["\n  margin: 20px auto;\n  font-size: 80%;\n  min-height: 400px;\n  position: relative;\n  padding: 4px 8px;\n"]))),J=j.a.div(S||(S=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.14);   \n  border-radius: 10px;\n"]))),z=j.a.div(N||(N=Object(b.a)(["\n  height: 40px;\n  display: flex;\n  padding: 4px 0;\n  margin: 4px 0;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  :first-child {\n    border-top: 1px solid rgba(255,255,255, 0.1);\n  }\n  ",";\n"])),(function(e){return e.isSelected?"\n        color: #85e485;\n        font-weight: bold;\n    ":""}));z.propTypes={isSelected:g.a.bool};var M=j.a.div(w||(w=Object(b.a)(["\n  flex: 1;\n  padding-right: 20px;\n  ",";\n"])),(function(e){return e.isCentered?"\n        text-align: center;\n    ":""}));M.propTypes={isCentered:g.a.bool};var P,B=j.a.div(L||(L=Object(b.a)(["\n  cursor: pointer;\n"])));function D(){return Object(o.jsxs)(I,{children:[Object(o.jsx)("p",{className:"content",children:"Ni \xe4r b\xe4st! Som ett litet tack f\xf6r att ni l\xe5tit oss vara en del av v\xe4rldens finaste br\xf6llopshelg s\xe5 vill vi bjuda tillbaka p\xe5 en helkv\xe4ll i Stockholm."}),Object(o.jsx)("p",{className:"content",children:"Nedan finns n\xe5gra f\xf6rslag p\xe5 datum. V\xe4lj de som passar"}),Object(o.jsx)("hr",{}),Object(o.jsx)(T,{}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{className:"content",children:["Varma h\xe4lsningar \u2763\ufe0f",Object(o.jsx)("br",{}),Object(o.jsx)("i",{children:"Olga, M\xe5rten, Maria, Carl och Joel"})]})]})}var I=j.a.div(P||(P=Object(b.a)(["\n  max-width: 480px;\n"]))),Q=["5yRSjtQN","test","\xd6ppetSinne4Ever"];function Y(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(!0),r=Object(s.a)(i,2),d=r[0],b=r[1],j=Object(a.useState)(!1),p=Object(s.a)(j,2),x=p[0],h=p[1];return Object(a.useEffect)((function(){Q.find((function(e){return e===t}))&&(h(!0),window.setTimeout((function(){b(!1)}),1e3))}),[t]),x&&d?Object(o.jsx)(l,{title:" ",theme:"is-danger",content:Object(o.jsx)(v,{color:"#fff"})}):x?Object(o.jsx)(l,{theme:"is-info",title:"\u2764\ufe0fLinnea & Albert \u2764\ufe0f",content:Object(o.jsx)(D,{})}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,{title:"Enter password",content:Object(o.jsx)(u,{currentValue:t,updateValue:c})})})}var R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Y,{})}),document.getElementById("root")),R()}},[[54,1,2]]]);
//# sourceMappingURL=main.831dbb05.chunk.js.map