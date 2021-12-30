(this["webpackJsonptask-management-app"]=this["webpackJsonptask-management-app"]||[]).push([[0],{163:function(e,t,n){},164:function(e,t,n){},475:function(e,t,n){},476:function(e,t,n){},477:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),s=n(22),i=n.n(s),r=(n(163),n(82),n(164),n.p+"static/media/logo.c81ad55b.png"),d=n(5);var o=function(e){return Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{src:r,className:"logo",alt:"Website logo"}),Object(d.jsx)("h1",{children:"Project Task Manager"})]})},l=n(12);var j=function(e){var t=e.project,n=e.handleChangeProject;return Object(d.jsx)("button",{className:"project-button",onClick:n.bind(this,t),children:t.name})},u=n(0),b=n.n(u),h=n(4),p=(n(166),n(32)),f=n(79),m=n.n(f),O=function(e,t){var n=[],a=t||m()(),c=function(e){return n.find((function(t){return t.getID()===e}))};return{name:e,addTask:function(e){return n.push(e),v(t,n),e},removeTaskByIndex:function(e){var a=n[e];return n.splice(e,1),v(t,n),a},removeTaskByID:function(e){n=n.filter((function(t){return t.getID()!==e})),v(t,n)},sortByPriority:function(){n.sort((function(e,t){return e.priority-t.priority})),v(t,n)},findTaskByID:c,clearTasks:function(){v(t,n=[])},getTasks:function(){return n},setTasks:function(e){n=e},toggleCompleteTaskByID:function(e,a){var s=c(e);a?s.complete():s.uncomplete(),v(t,n)},getID:function(){return a},clearCompletedTasks:function(){n=n.filter((function(e){return!e.isComplete()})),v(t,n)},editTaskWithNewTaskInfo:function(e,a){var s=c(e);s.title=a.title,s.description=a.description,s.dueDate=a.dueDate,s.priority=a.priority,v(t,n)}}},x=function(e,t,n,a,c){var s=!1,i=c||m()();return{title:e,isComplete:function(){return s},description:t,dueDate:n,priority:a,complete:function(){s=!0},uncomplete:function(){s=!1},getID:function(){return i},id:i}};function k(){return(k=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.d)(),e.prev=1,e.next=4,Object(p.f)(Object(p.b)(n,"projects",t.getID()),{projectName:t.name,tasks:t.getTasks(),timestamp:Object(p.e)()},{merge:!0});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error("Unable to add new project to Firestore",e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(b.a.mark((function e(t,n){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(p.d)(),c=Object(p.b)(a,"projects",t),e.next=4,Object(p.g)(c,{tasks:n.map(y)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return{title:e.title,description:e.description,dueDate:e.dueDate,priority:e.priority,id:e.getID(),complete:e.isComplete()}}function N(e){var t=e.data(),n=e.id,a=t.projectName,c=t.tasks;c=c.map((function(e){return function(e){var t=e.title,n=e.description,a=e.dueDate,c=e.priority,s=e.id,i=e.complete,r=x(t,n,a,c,s);return i&&r.complete(),r}(e)}));var s=O(a,n);return s.setTasks(c),s}function C(){return(C=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(p.d)(),e.next=3,Object(p.c)(Object(p.a)(t,"projects"));case 3:e.sent.forEach((function(e){var t=N(e);"~"===t.getID()?T.addProjectAtIndex(0,t):T.addProject(t)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){var e=[];return{addProject:function(t){return e.push(t),function(e){k.apply(this,arguments)}(t),t},addProjectAtIndex:function(t,n){e.splice(t,0,n)},deleteProjectByIndex:function(t){var n=e[t];return e.splice(t,1),n},deleteProjectbyID:function(t){return e.filter((function(e){return t!==e.id}))},findProjectByID:function(t){return e.find((function(e){return t===e.id}))},getProjects:function(){return e},findProjectByName:function(t){return e.find((function(e){return t===e.name}))},setProjects:function(t){e=t}}}(),D=n(52);var I=function(e){var t=e.handleAddNewProject,n=e.handleExit,c=Object(a.useState)(!1),s=Object(l.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(null),j=Object(l.a)(o,2),u=j[0],b=j[1];return Object(d.jsx)("div",{class:"overlay",children:Object(d.jsxs)("div",{class:"add-project-window",children:[Object(d.jsx)("h2",{children:"Add Project Task"}),Object(d.jsxs)("div",{className:"add-project-field",children:[Object(d.jsx)("input",{type:"text",id:"project-name",onChange:function(e){return t=e.target.value,b(t),void r(""!==t);var t}}),Object(d.jsx)("label",{htmlFor:"project-name",className:i?"Active":"",children:"Project Name"})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(d.jsx)("button",{className:"add-project-option-button",onClick:function(){var e=O(u);t(e),n()},children:"Add"}),Object(d.jsx)("button",{className:"add-project-option-button",onClick:n,children:"Cancel"})]})]})})};var P=function(e){var t=e.handleChangeProject,n=Object(a.useState)(T.getProjects()),c=Object(l.a)(n,2),s=c[0],i=c[1],r=Object(a.useState)(!1),o=Object(l.a)(r,2),u=o[0],b=o[1];return Object(a.useEffect)((function(){T.setProjects(s)})),Object(d.jsxs)("nav",{children:[Object(d.jsxs)("div",{className:"main-buttons-container",children:[T.getProjects()[0]&&Object(d.jsx)(j,{handleChangeProject:t,project:T.getProjects()[0]}),Object(d.jsx)("button",{className:"main-button",children:"Today"})]}),Object(d.jsx)("h2",{children:"Projects"}),Object(d.jsxs)("div",{className:"project-menu",children:[s.map((function(e){return"~"!==e.getID()&&Object(d.jsx)(j,{handleChangeProject:t,project:e})})),Object(d.jsx)("button",{onClick:function(){b(!0)},className:"add-project-button",children:"Add New Project"}),Object(d.jsx)(D.CSSTransition,{in:u,timeout:300,classNames:"fadeIn",unmountOnExit:!0,children:Object(d.jsx)(I,{handleAddNewProject:function(e){var t=s.map((function(e){return Object.assign({},e)}));t.push(e),T.addProject(e),i(t)}.bind(this),handleExit:function(){b(!u)}.bind(this)})})]})]})},w=(n(475),n(24));var A=function(e){var t=e.handleAddTask,n=e.handleExit,c=Object(a.useState)([!1,!1,!1,!1]),s=Object(l.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)([null,null,null,null]),j=Object(l.a)(o,2),u=j[0],b=j[1];function h(e,t){var n=Object(w.a)(u);n[e]=t,b(n);var a=Object(w.a)(i);a[e]=""!==t,r(a)}return Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"add-task-window",children:[Object(d.jsx)("h2",{children:"Add New Task"}),Object(d.jsxs)("div",{className:"add-task-field",children:[Object(d.jsx)("input",{type:"text",id:"task-name",onChange:function(e){return h(0,e.target.value)}}),Object(d.jsx)("label",{htmlFor:"task-name",className:i[0]?"Active":"",children:"Task Name"})]}),Object(d.jsxs)("div",{className:"add-task-field",children:[Object(d.jsx)("input",{type:"text",id:"task-description",onChange:function(e){return h(1,e.target.value)}}),Object(d.jsx)("label",{htmlFor:"task-description",className:i[1]?"Active":"",children:"Description"})]}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsxs)("div",{className:"add-task-field date-field",children:[Object(d.jsx)("input",{type:"date",id:"task-due-date",onChange:function(e){return h(2,e.target.value)}}),Object(d.jsx)("label",{className:"static",htmlFor:"task-due-date",children:"Due Date"})]}),Object(d.jsxs)("div",{className:"add-task-field half-field",children:[Object(d.jsx)("input",{type:"number",id:"task-priority",onChange:function(e){return h(3,e.target.value)}}),Object(d.jsx)("label",{htmlFor:"task-priority",className:i[3]?"Active":"",children:"Priority"})]})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(d.jsx)("button",{className:"add-task-option-button",onClick:function(){var e=x(u[0],u[1],u[2],u[3]);t(e),n()},children:"Add"}),Object(d.jsx)("button",{className:"add-task-option-button",onClick:e.handleExit,children:"Cancel"})]})]})})};var E=function(e){var t=e.task,n=e.handleEditTask,c=e.handleExit,s=Object(a.useState)([t.title,t.description,t.dueDate,t.priority]),i=Object(l.a)(s,2),r=i[0],o=i[1],j=Object(a.useState)([t.title,t.description,t.dueDate,t.priority]),u=Object(l.a)(j,2),b=u[0],h=u[1];function p(e,t){var n=Object(w.a)(b);n[e]=t,h(n);var a=Object(w.a)(r);a[e]=""!==t,o(a)}return Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"add-task-window",children:[Object(d.jsx)("h2",{children:"Edit Task"}),Object(d.jsxs)("div",{className:"add-task-field",children:[Object(d.jsx)("input",{type:"text",id:"task-name",value:b[0],onChange:function(e){return p(0,e.target.value)}}),Object(d.jsx)("label",{htmlFor:"task-name",className:r[0]?"Active":"",children:"Task Name"})]}),Object(d.jsxs)("div",{className:"add-task-field",children:[Object(d.jsx)("input",{type:"text",id:"task-description",value:b[1],onChange:function(e){return p(1,e.target.value)}}),Object(d.jsx)("label",{htmlFor:"task-description",className:r[1]?"Active":"",children:"Description"})]}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsxs)("div",{className:"add-task-field date-field",children:[Object(d.jsx)("input",{type:"date",id:"task-due-date",value:b[2],onChange:function(e){return p(2,e.target.value)}}),Object(d.jsx)("label",{className:"static",htmlFor:"task-due-date",children:"Due Date"})]}),Object(d.jsxs)("div",{className:"add-task-field half-field",children:[Object(d.jsx)("input",{type:"number",id:"task-priority",value:b[3],onChange:function(e){return p(3,e.target.value)}}),Object(d.jsx)("label",{htmlFor:"task-priority",className:r[3]?"Active":"",children:"Priority"})]})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(d.jsx)("button",{className:"add-task-option-button",onClick:function(){var e=x(b[0],b[1],b[2],b[3]);n(t.id,e),c()},children:"Submit Changes"}),Object(d.jsx)("button",{className:"add-task-option-button",onClick:e.handleExit,children:"Cancel"})]})]})})};var S=function(e){var t=e.task,n=e.handleDeleteTask,c=e.handleCompleteTask,s=e.handleEditTask,i=Object(a.useState)(!1),r=Object(l.a)(i,2),o=r[0],j=r[1],u=function(e){e&&"checkbox"===e.target.type||j(!o)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"task-item",onClick:u,children:[Object(d.jsx)("input",{onClick:function(e){j(!1)},type:"checkbox",checked:t.isComplete(),className:"checkbox",onChange:function(e){var n=e.target.checked;c(t.getID(),n)}}),Object(d.jsx)("p",{className:"task-item-label",children:t.title}),Object(d.jsxs)("div",{className:"task-item-right-box",children:[Object(d.jsx)("p",{className:"task-date",children:t.dueDate}),Object(d.jsx)("i",{className:"fas fa-trash-alt",onClick:n.bind(this,t.getID())})]})]}),Object(d.jsx)(D.CSSTransition,{in:o,timeout:300,classNames:"fadeIn",unmountOnExit:!0,children:Object(d.jsx)(E,{task:t,handleEditTask:s.bind(this),handleExit:u.bind(this)})})]})};var B=function(e){var t=this,n=e.project,c=e.handleAddTask,s=e.handleDeleteTask,i=e.handleCompleteTask,r=e.handleClearCompleted,o=e.handleEditTask,j=Object(a.useState)(!1),u=Object(l.a)(j,2),b=u[0],h=u[1],p=function(){h(!b)};return Object(d.jsxs)("div",{className:"task-preview",children:[Object(d.jsx)("h2",{className:"project-title",children:n.name}),Object(d.jsx)("div",{className:"task-list",children:n.getTasks().map((function(e){return Object(d.jsx)(S,{task:e,handleDeleteTask:s.bind(t),handleCompleteTask:i.bind(t),handleEditTask:o.bind(t)})}))}),Object(d.jsxs)("div",{className:"preview-button-options",children:[Object(d.jsx)("button",{onClick:p,className:"task-button add-task-button",children:"Add New Task"}),Object(d.jsx)("button",{onClick:r,className:"task-button clear-selected",children:"Clear Selected"})]}),Object(d.jsx)(D.CSSTransition,{in:b,timeout:300,classNames:"fadeIn",unmountOnExit:!0,children:Object(d.jsx)(A,{handleAddTask:c.bind(this),handleExit:p.bind(this)})})]})};var F=function(){var e=Object(a.useState)(T.getProjects()[0]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=n.getID(),t=T.findProjectByID(e);t&&t.setTasks(n.getTasks())})),Object(d.jsxs)("main",{children:[Object(d.jsx)(P,{handleChangeProject:function(e){c(e)}.bind(this)}),Object(d.jsx)(B,{project:n,handleAddTask:function(e){var t=Object.assign({},n);t.addTask(e),c(t)}.bind(this),handleDeleteTask:function(e){var t=Object.assign({},n);t.removeTaskByID(e),c(t)}.bind(this),handleCompleteTask:function(e,t){var a=Object.assign({},n);a.toggleCompleteTaskByID(e,t),c(a)}.bind(this),handleEditTask:function(e,t){var a=Object.assign({},n);a.editTaskWithNewTaskInfo(e,t),c(a)}.bind(this),handleClearCompleted:function(){var e=Object.assign({},n);e.clearCompletedTasks(),c(e)}.bind(this)})]})};n(476);var J=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{}),Object(d.jsx)(F,{})]})},K={apiKey:"AIzaSyBVkAae2NvBnLd1sN-scx1yqa3hK0fknbw",authDomain:"projectmanager-45a0f.firebaseapp.com",projectId:"projectmanager-45a0f",storageBucket:"projectmanager-45a0f.appspot.com",messagingSenderId:"711181533996",appId:"1:711181533996:web:41005591631a8ee1886289",measurementId:"G-Q8RDGQJZ8Q"};var Q=n(159);Object(Q.a)(function(){if(K&&K.apiKey)return K;throw new Error("No Firebase configuration object provided.\nAdd your web app's configuration object to firebase-config.js")}()),function(){return C.apply(this,arguments)}().then((function(){i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root"))}))},82:function(e,t,n){}},[[477,1,2]]]);
//# sourceMappingURL=main.16a77749.chunk.js.map