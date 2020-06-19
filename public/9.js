(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10,19],{"7CKn":function(t,e,r){"use strict";r.r(e);var c=r("L2JU"),n=r("EmcK");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={name:"CourseList",layout:function(t,e){return t(n.default,[e])},components:{CourseCard:r("pHhT").default},metaInfo:function(){return{title:"Courses (".concat(this.courses.length,")"),titleTemplate:"%s - AcadaApp"}},data:function(){return{data:[]}},props:{account:Object,courses:Array},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(c.b)(["auth","authenticated","isMyAccount","isOnMyAccount"])),watch:{courses:{immediate:!0,handler:function(t){this.data=t}}}},u=r("KHd+"),i=Object(u.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("Courses ("+t._s(t.data.length)+")")]),t._v(" "),t.data.length?r("v-row",t._l(t.data,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",md:"6",lg:"4"}},[r("course-card",{attrs:{account:t.account,course:e,showStatus:!0,showInstructor:!1},scopedSlots:t._u([{key:"options",fn:function(){return[t.isOnMyAccount(e)?r("v-menu",{attrs:{origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on;return[r("v-btn",t._g({attrs:{icon:""}},c),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),r("v-list",[r("v-list-item",{on:{click:function(r){t.$inertia.visit(t.route("account.course.edit",{account:t.account.username,course:e.slug}))}}},[r("v-list-item-icon",[r("v-icon",[t._v("edit")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Edit course")])],1)],1),t._v(" "),r("v-list-item",{on:{click:function(r){t.$inertia.visit(t.route("account.course.student.list",{account:t.account.username,course:e.slug}))}}},[r("v-list-item-icon",[r("v-icon",[t._v("people")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("View students")])],1)],1)],1)],1):t._e()]},proxy:!0}],null,!0)})],1)})),1):r("div",{staticClass:"text-center text-muted my-5"},[t._v("\n            No course available\n  ")]),t._v(" "),r("v-btn",{attrs:{color:t.account.theme_color,dark:"",large:"",fixed:"",bottom:"",right:"",fab:"",title:"Create  course"},on:{click:function(e){t.$inertia.visit(t.route("account.course.create",{account:t.account.username}))}}},[r("v-icon",[t._v("mdi-plus")])],1)],1)}),[],!1,null,null,null);e.default=i.exports},O3YU:function(t,e,r){"use strict";r.r(e);var c={name:"CourseStatus",props:{course:Object}},n=r("KHd+"),o=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.course.started?t.course.ongoing?r("v-chip",{staticClass:"ma-2",attrs:{color:"success","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Ongoing\n    ")],1):r("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Ended\n    ")],1):r("v-chip",{staticClass:"ma-2",attrs:{color:"orange","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Upcoming\n    ")],1)],1)}),[],!1,null,null,null);e.default=o.exports},pHhT:function(t,e,r){"use strict";r.r(e);var c=r("L2JU");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={name:"CourseCard",components:{CourseStatus:r("O3YU").default},props:{course:Object,account:Object,showInstructor:{type:Boolean,default:function(){return!0}},showStatus:{type:Boolean,default:function(){return!1}},display:{type:String,default:function(){return"grid"}}},computed:o(o({},Object(c.c)({authenticated:function(t){return t.authenticated},auth:function(t){return t.auth},inFrame:function(t){return t.inFrame}})),{},{col:function(){return"list"==this.display?6:12}}),watch:{account:{immediate:!0,handler:function(t){t&&!this.course.account&&(this.course.account=t)}}}},u=r("KHd+"),i=Object(u.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto"},[r("v-row",[!t.inFrame&&t.showInstructor?r("v-col",{attrs:{cols:"12"}},[r("v-list-item",[r("avatar",{staticClass:"mr-2",attrs:{src:t.course.account.avatar,color:t.course.account.theme_color,size:"40"}}),t._v(" "),r("v-list-item-content",[r("v-list-item-subtitle",[r("strong",[t._v(t._s(t.course.account.name))]),t._v(" "),r("inertia-link",{attrs:{href:t.route("account.show",{account:t.course.account.username})}},[t._v(t._s(t.course.account.at_username))])],1)],1)],1)],1):t._e(),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:t.col}},[r("v-img",{attrs:{src:t.course.cover_image,height:"194"}}),t._v(" "),t.showStatus?r("course-status",{attrs:{course:t.course}}):t._e()],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:t.col}},[r("v-card-text",[r("h4",[t._v(t._s(t.course.title))]),t._v("\n        "+t._s(t.course.snippet)+"\n        "),r("v-divider"),t._v(" "),r("div",{staticClass:"text-muted"},[r("v-icon",{attrs:{color:t.course.account.theme_color}},[t._v("date_range")]),t._v(" "+t._s(t.course.start_date)+" - "+t._s(t.course.end_date)+"\n        ")],1)],1),t._v(" "),r("v-card-actions",[r("h2",[t._v(t._s(t._f("money")(t.course.price)))]),t._v(" "),r("v-spacer"),t._v(" "),r("inertia-link",{staticClass:"prevent-default",attrs:{href:t.route("account.course.show",{account:t.course.account.username,course:t.course.slug})}},[r("v-btn",{attrs:{dark:"",color:t.course.account.theme_color}},[t._v(" view course")])],1),t._v(" "),t._t("options")],2)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);