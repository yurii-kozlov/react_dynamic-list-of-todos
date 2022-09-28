(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(3)),i=c.n(d),o=(c(12),c(0)),r=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},j=function(e){var t=e.filteredTodos,c=e.selectedTodo,s=e.selectedTodoId,a=e.loading;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return a?Object(o.jsx)(r,{}):Object(o.jsxs)("tr",{"data-cy":"todo",className:i()(c&&c.id===e.id&&"has-background-info-light"),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()((null===c||void 0===c?void 0:c.id)===e.id?"far fa-eye-slash":"far fa-eye")})})})})]},e.id)}))})]})},b=function(e){var t=e.setFilter,c=e.filter,s=e.query,a=e.setQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){t(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s.length>0&&Object(o.jsx)("button",{onClick:function(){a("")},"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.selectedTodo,c=e.setTodoId,s=Object(l.useState)(null),a=Object(n.a)(s,2),d=a[0],j=a[1];return Object(l.useEffect)((function(){var e;void 0!==t&&(e=t.userId,u("/users/".concat(e))).then(j)}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),null===t||null===d?Object(o.jsx)(r,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:i()(t.completed?"has-text-success":"has-text-danger"),children:t.completed?"Done":"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)("all"),d=Object(n.a)(a,2),i=d[0],m=d[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(0),v=Object(n.a)(N,2),y=v[0],g=v[1],T=Object(l.useState)(!0),k=Object(n.a)(T,2),w=k[0],C=k[1],S=c.find((function(e){return e.id===y})),I=c.filter((function(e){return e.title.toLowerCase().includes(f.toLowerCase())})).filter((function(e){switch(i){case"active":return!e.completed;case"completed":return e.completed;default:return e}}));return Object(l.useEffect)((function(){u("/todos").then((function(e){return s(e)})).finally((function(){return C(!1)}))}),[C,s]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(b,{setFilter:m,filter:i,query:f,setQuery:p})}),Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)(j,{filteredTodos:I,selectedTodoId:g,selectedTodo:S,loading:w}),w&&Object(o.jsx)(r,{})]})]})})}),S&&Object(o.jsx)(h,{selectedTodo:S,setTodoId:g})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5670d76c.chunk.js.map