(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),i=(n(12),n(13),n(3)),j=n(7),o=n(0),u=Object(c.createContext)(),d=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],s=r[1];return Object(o.jsx)(u.Provider,{value:{transactions:a,addCreditDebit:function(e,t){var n=Math.floor(100*Math.random());s([].concat(Object(j.a)(a),[{texts:e,amount:t,id:n}]))},deleteTransaction:function(e){s(a.filter((function(t){return t.id!==e})))}},children:t})};function l(){var e=Object(c.useContext)(u).addCreditDebit,t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),j=Object(i.a)(s,2),d=j[0],l=j[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Add Transaction"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=parseInt(r);e(d,n),a(""),l("")},children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",required:!0,value:r,placeholder:"Enter amount here",onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("label",{children:"Text"}),Object(o.jsx)("input",{type:"text",required:!0,value:d,placeholder:"Enter reason",onChange:function(e){return l(e.target.value)}})," ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",className:"add-btn",value:"Add transaction"})]})]})}function b(){var e=Object(c.useContext)(u).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(o.jsxs)("div",{className:"balance-div",children:[Object(o.jsx)("h4",{className:"balance-header",children:"Your Balance"}),Object(o.jsxs)("p",{className:"balance",children:["$",e]})]})}function x(){var e=Object(c.useContext)(u).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(o.jsxs)("div",{className:"income-exp",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"income-exp-text",children:"Income"}),Object(o.jsxs)("p",{children:["$",t]})]}),Object(o.jsx)("div",{className:"divider"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"income-exp-text",children:"Expense"})," ",Object(o.jsxs)("p",{children:["$",n]})]})]})}function O(){return Object(o.jsx)("div",{children:Object(o.jsx)("h4",{className:"head",children:"Silver Expense Tracker"})})}function h(){var e=Object(c.useContext)(u),t=e.transactions,n=e.deleteTransaction;return t.length?Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Transaction History"}),Object(o.jsx)("ul",{className:"history",children:t.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("div",{className:e.amount>0?"postive":"negative"}),e.texts+":"," ","$"+e.amount,Object(o.jsx)("button",{onClick:function(){return n(e.id)},className:"delete-btn",children:"X"})]},e.id)}))})]}):Object(o.jsx)("div",{style:{paddingTop:"20px"},children:"You don't have any transaction history"})}var v=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(d,{children:[Object(o.jsx)(O,{}),Object(o.jsx)(b,{}),Object(o.jsx)(x,{}),Object(o.jsx)(h,{}),Object(o.jsx)(l,{})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.01d8832d.chunk.js.map