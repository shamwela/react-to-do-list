(this["webpackJsonpreact-to-do-list"]=this["webpackJsonpreact-to-do-list"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(8),i=n.n(c),o=(n(13),n(7)),r=n(2),d=n(3),l=n(5),p=n(4),u=(n(14),n(15),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={description:""},t.handleSubmit=function(e){e.preventDefault(),t.state.description&&t.props.onAddTask(t.state.description),t.setState({description:""})},t.onChange=function(e){t.setState({description:e.target.value})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,id:"task-form",children:[Object(u.jsx)("input",{type:"text",name:"taskDescription",id:"task-form-input",placeholder:"Add task",value:this.state.description,onChange:this.onChange,autoFocus:!0}),Object(u.jsx)("input",{type:"submit",value:"Add task",id:"task-form-submit"})]})}}]),n}(a.Component),h=(n(17),function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={},t.outputTaskDescription=function(){var e=t.props.task,n=e.description;return e.completed?Object(u.jsx)("del",{children:n}):n},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.onComplete,a=e.onDelete;return Object(u.jsxs)("div",{className:"task",children:[Object(u.jsx)("input",{className:"task-checkbox",type:"checkbox",onClick:function(){return n(t.props.task)}}),Object(u.jsx)("span",{className:"task-description",children:this.outputTaskDescription()}),Object(u.jsx)("button",{className:"delete-button",onClick:function(){return a(t.props.task.id)},children:"Delete"})]})}}]),n}(a.Component)),b=(n(18),function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onComplete,n=t.onDelete;return Object(u.jsx)("div",{id:"tasks",children:this.props.tasks.map((function(t){return Object(u.jsx)(h,{task:t,onComplete:e,onDelete:n},t.id)}))})}}]),n}(a.Component)),k=n(21),f=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={tasks:[{id:Object(k.a)(),description:"Example task 1",completed:!1},{id:Object(k.a)(),description:"Example task 2",completed:!1},{id:Object(k.a)(),description:"Example task 3",completed:!1}]},t.handleAddTask=function(e){var n=Object(o.a)(t.state.tasks);n.push({id:Object(k.a)(),description:e,completed:!1}),t.setState({tasks:n})},t.handleComplete=function(e){var n=Object(o.a)(t.state.tasks),a=n.indexOf(e);n[a].completed=!n[a].completed,t.setState({tasks:n})},t.handleDelete=function(e){var n=t.state.tasks.filter((function(t){return t.id!==e}));t.setState({tasks:n})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"app",children:[Object(u.jsxs)("h1",{id:"app-title",children:["React ",Object(u.jsx)("br",{}),"To-do List"]}),Object(u.jsx)(j,{id:"task-input",onAddTask:this.handleAddTask}),Object(u.jsx)(b,{tasks:this.state.tasks,onComplete:this.handleComplete,onDelete:this.handleDelete})]})}}]),n}(a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.d0754b4d.chunk.js.map