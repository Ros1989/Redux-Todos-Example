(this["webpackJsonpRedux-Todos-Example"]=this["webpackJsonpRedux-Todos-Example"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var r=n(1),i=(n(0),n(5)),c=n(3),o=n(2),u=n(4),l=n(11),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return[].concat(Object(l.a)(t),[{id:e.id,text:e.text,completed:!1}]);case"TOGGLE_TODO":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}));default:return t}},s=0,j="SHOW_ALL",b="SHOW_COMPLETED",O="SHOW_ACTIVE",f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_VISIBILITY_FILTER":return e.filter;default:return t}},a=Object(c.b)({todos:d,visibilityFilter:f}),h=(n(23),function(t){var e=t.active,n=t.children,i=t.onClick;return Object(r.jsx)("button",{onClick:i,disabled:e,style:{marginLeft:"4px"},children:n})}),x=Object(o.b)((function(t,e){return{active:e.filter===t.visibilityFilter}}),(function(t,e){return{onClick:function(){return t({type:"SET_VISIBILITY_FILTER",filter:e.filter})}}}))(h),p=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Show: "}),Object(r.jsx)(x,{filter:j,children:"All"}),Object(r.jsx)(x,{filter:O,children:"Active"}),Object(r.jsx)(x,{filter:b,children:"Completed"})]})},v=Object(o.b)()((function(t){var e,n=t.dispatch;return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:function(t){var r;(t.preventDefault(),e.value.trim())&&(n((r=e.value,{type:"ADD_TODO",id:s++,text:r})),e.value="")},children:[Object(r.jsx)("input",{ref:function(t){return e=t}}),Object(r.jsx)("button",{type:"submit",children:"Add Todo"})]})})})),T=function(t){var e=t.onClick,n=t.completed,i=t.text;return Object(r.jsx)("li",{onClick:e,style:{textDecoration:n?"line-through":"none"},children:i})},m=function(t){var e=t.todos,n=t.toggleTodo;return Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)(T,Object(u.a)(Object(u.a)({},t),{},{onClick:function(){return n(t.id)}}),t.id)}))})},E=function(t,e){switch(e){case j:return t;case b:return t.filter((function(t){return t.completed}));case O:return t.filter((function(t){return!t.completed}));default:throw new Error("Unknown filter: "+e)}},y=Object(o.b)((function(t){return{todos:E(t.todos,t.visibilityFilter)}}),(function(t){return{toggleTodo:function(e){return t(function(t){return{type:"TOGGLE_TODO",id:t}}(e))}}}))(m),I=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{}),Object(r.jsx)(y,{}),Object(r.jsx)(p,{})]})},g=Object(c.c)(a);Object(i.render)(Object(r.jsx)(o.a,{store:g,children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f042874f.chunk.js.map