(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,7,10,19],{"33ZE":function(t,e,c){"use strict";c.r(e);var r=c("L2JU");function o(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,r)}return c}function n(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?o(Object(c),!0).forEach((function(e){a(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function a(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}var s={name:"AccountLayout",components:{CoursesQuickEnroll:c("mWPv").default},data:function(){return{courses_dialog:!1}},computed:n(n(n({},Object(r.c)({inFrame:function(t){return t.inFrame}})),Object(r.b)(["auth","authenticated","isMyAccount","isOnMyAccount"])),{},{account:function(){return this.$page.account},courses:function(){return this.$page.courses?this.$page.courses.data:null},socials:function(){return[{icon:"link",text:"Facebook",link:this.account.facebook_url},{icon:"link",text:"Instagram",link:this.account.instagram_url},{icon:"link",text:"Twitter",link:this.account.twitter_url},{icon:"link",text:"LinkedIn",link:this.account.linkedin_url},{icon:"link",text:"Website",link:this.account.website}]}}),methods:{anySocial:function(){return this.socials.filter((function(t){return!!t.link})).length}},mounted:function(){$("html").attr("no-scroll","no-scroll")},destroyed:function(){$("html").removeAttr("no-scroll")}},i=c("KHd+"),u=Object(i.a)(s,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-app",[c("v-app-bar",{attrs:{absolute:"",color:t.account.theme_color,dark:"",src:t.account.cover_image,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","inverted-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var r=e.props;return[c("v-img",t._b({attrs:{gradient:"to top right, "+t.account.theme_color+", rgba(255,255,255,.7)"}},"v-img",r,!1))]}}])},[t._v(" "),t.authenticated&&t.isMyAccount(t.account)?c("v-btn",{attrs:{icon:""},on:{click:function(e){t.$inertia.visit(t.route("home"))}}},[c("v-icon",[t._v("home")])],1):t._e(),t._v(" "),c("v-toolbar-title",{attrs:{dark:""}},[c("inertia-link",{staticClass:"prevent-default",staticStyle:{color:"#fff"},attrs:{href:t.route("account.show",{account:t.account.username})}},[c("avatar",{attrs:{src:t.account.avatar,color:t.account.theme_color,size:"30"}}),t._v(" "+t._s(t.account.name)+"\n      ")],1)],1),t._v(" "),c("v-spacer"),t._v(" "),t.authenticated&&!t.isMyAccount?c("inertia-link",{staticClass:"prevent-default mx-1",attrs:{href:t.auth.username?t.route("account.show",{account:t.auth.username}):"#"}},[c("avatar",{attrs:{src:t.auth.avatar,color:t.auth.theme_color,size:"40"}})],1):t._e(),t._v(" "),t.isMyAccount(t.account)?c("v-menu",{attrs:{origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[c("v-btn",t._g({attrs:{icon:""}},r),[c("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[t._v(" "),c("v-list",[c("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.edit",{account:t.account.username}))}}},[c("v-list-item-icon",[c("v-icon",[t._v("edit")])],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",[t._v("Edit account")])],1)],1),t._v(" "),c("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.course.create",{account:t.account.username}))}}},[c("v-list-item-icon",[c("v-icon",[t._v("add")])],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",[t._v("Add new course")])],1)],1)],1)],1):t._e()],1),t._v(" "),c("div",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"100vh"},attrs:{id:"scrolling-techniques-5"}},[c("v-parallax",{attrs:{height:"200",src:t.account.cover_image,color:t.account.theme_color}},[c("div",{staticClass:"p-3",staticStyle:{"background-color":"rgba(0,0,0, .2)"}},[t.account.show_caption?c("div",{staticClass:"text-center mb-2"},[c("h1",[t._v(t._s(t.account.caption))]),t._v(" "),c("h4",[t._v(t._s(t.account.subcaption))])]):c("div",{staticClass:"d-flex align-center justify-content-center mb-2"},[c("div",{staticClass:"mr-2"},[c("avatar",{attrs:{src:t.account.avatar,color:t.account.theme_color,size:"100"}})],1),t._v(" "),c("div",[c("h4",[t._v(t._s(t.account.name))]),t._v(" "),c("div",[c("small",[t._v(t._s(t.account.at_username))])])])]),t._v(" "),t.courses?[c("courses-quick-enroll",{attrs:{account:t.account,courses:t.courses}})]:t._e()],2)]),t._v(" "),c("v-container",{staticStyle:{"min-height":"100vh"},attrs:{fluid:""}},[c("v-row",[c("v-col",{attrs:{cols:"12",md:"8"}},[t._t("default")],2),t._v(" "),c("v-col",{attrs:{cols:"12",md:"4"}},[c("v-divider"),t._v(" "),c("h4",[t._v("About "+t._s(t.account.name))]),t._v(" "),c("v-divider"),t._v(" "),t.account.bio?[t._v("\n                    "+t._s(t.account.bio)+"\n                  ")]:t._e(),t._v(" "),c("v-card",{attrs:{outlined:""}},[c("v-card",{attrs:{outlined:"",dark:"",color:t.account.theme_color}},[c("v-row",[c("v-col",[c("div",{staticClass:"text-center"},[c("a",{staticClass:"prevent-default",attrs:{href:"tel: "+t.account.phone}},[c("v-btn",{attrs:{icon:"",large:""}},[c("v-icon",[t._v("call")])],1)],1)])]),t._v(" "),c("v-col",[c("div",{staticClass:"text-center"},[c("a",{staticClass:"prevent-default",attrs:{href:"mailto: "+t.account.email}},[c("v-btn",{attrs:{large:"",icon:""}},[c("v-icon",[t._v("email")])],1)],1)])])],1)],1),t._v(" "),t.anySocial()?c("v-list",[c("div",{staticClass:"mx-3"},[c("h4",[t._v("Socials")])]),t._v(" "),c("v-divider"),t._v(" "),c("v-list-item-group",[t._l(t.socials,(function(e,r){return[e.link?c("a",{key:r,staticClass:"prevent-default",attrs:{href:e.link,target:"_blank"}},[c("v-list-item",[c("v-list-item-icon",[c("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)],1):t._e()]}))],2)],1):t._e()],1)],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},"90Es":function(t,e,c){"use strict";c.r(e);var r=c("L2JU"),o=c("33ZE");function n(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,r)}return c}function a(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?n(Object(c),!0).forEach((function(e){s(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function s(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}var i={name:"CourseShow",layout:function(t,e){return t(o.default,[e])},components:{CourseStatus:c("O3YU").default},metaInfo:function(){return{title:"".concat(this.course.title," ").concat(this.account.at_username),titleTemplate:"%s - AcadaApp"}},computed:a(a({},Object(r.b)(["auth","authenticated","isMyAccount","isOnMyAccount"])),{},{account:function(){return this.$page.account},course:function(){return this.$page.course}}),methods:{enroll:function(){this.$inertia.visit(this.route("account.course.enroll",{account:this.account.username,course:this.course.slug}))}}},u=c("KHd+"),l=Object(u.a)(i,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("h4",[t._v(t._s(t.course.title))]),t._v(" "),c("v-img",{attrs:{src:t.course.cover_image}}),t._v(" "),c("div",{staticClass:"d-flex"},[c("div",{staticClass:"text-muted mt-3"},[c("v-icon",{attrs:{color:t.account.theme_color}},[t._v("date_range")]),t._v(" "+t._s(t.course.start_date)+" - "+t._s(t.course.end_date)+"\n            "),c("v-icon",{attrs:{color:t.account.theme_color}},[t._v("info")]),t._v(" "+t._s(t.course.course_type)+"\n        ")],1),t._v(" "),c("v-spacer"),t._v(" "),c("course-status",{attrs:{course:t.course}})],1),t._v(" "),c("v-divider"),t._v(" "),c("div",{staticClass:"d-flex"},[c("div",[c("h1",[t._v(t._s(t._f("money")(t.course.price)))])]),t._v(" "),c("div",{staticClass:"ml-auto",on:{click:t.enroll}},[c("v-btn",{attrs:{dark:"",large:"",color:t.account.theme_color}},[t._v("\n                Enroll Now "),c("v-icon",[t._v("arrow_forward")])],1),t._v(" "),t.isOnMyAccount(t.course)?c("v-menu",{attrs:{origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[c("v-btn",t._g({attrs:{icon:""}},r),[c("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[t._v(" "),c("v-list",[c("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.course.edit",{account:t.account.username,course:t.course.slug}))}}},[c("v-list-item-icon",[c("v-icon",[t._v("edit")])],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",[t._v("Edit course")])],1)],1)],1)],1):t._e()],1)]),t._v(" "),c("v-divider"),t._v(" "),c("div",[t._v("\n        "+t._s(t.course.description)+"\n    ")]),t._v(" "),t._t("default"),t._v(" "),c("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",large:"",color:t.account.theme_color,title:"Enroll for "+t.course.title},on:{click:t.enroll}},[c("v-icon",[t._v("arrow_forward")])],1)],2)}),[],!1,null,null,null);e.default=l.exports},O3YU:function(t,e,c){"use strict";c.r(e);var r={name:"CourseStatus",props:{course:Object}},o=c("KHd+"),n=Object(o.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t.course.started?t.course.ongoing?c("v-chip",{staticClass:"ma-2",attrs:{color:"success","text-color":"white"}},[c("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Ongoing\n    ")],1):c("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[c("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Ended\n    ")],1):c("v-chip",{staticClass:"ma-2",attrs:{color:"orange","text-color":"white"}},[c("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Upcoming\n    ")],1)],1)}),[],!1,null,null,null);e.default=n.exports},mWPv:function(t,e,c){"use strict";c.r(e);var r={name:"CoursesQuickEnroll",components:{CourseCard:c("pHhT").default},data:function(){return{dialog:!1,course_index:null}},props:{courses:{type:Array,default:function(){return[]}},account:{type:Object,default:function(){return{}}}},computed:{course:function(){return null===this.course_index?null:this.courses[this.course_index]}}},o=c("KHd+"),n=Object(o.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.courses?c("v-row",{attrs:{justify:"center"}},[c("v-dialog",{attrs:{scrollable:"","max-width":null!==t.course?"800px":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[c("v-btn",t._g({attrs:{color:t.account.theme_color,dark:"",large:""}},r),[t._v("Enroll for a course "),c("v-icon",[t._v("arrow_forward")])],1)]}}],null,!1,3487011881),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),c("v-card",[c("v-card-title",[t._v("Courses available")]),t._v(" "),c("v-card-text",{staticClass:"px-0",staticStyle:{"max-height":"500px"}},[t.courses.length?[c("v-container",{attrs:{fluid:""}},[c("v-row",[c("v-col",{attrs:{cols:"12",md:null!==t.course?"6":"12"}},[c("v-list",{attrs:{flat:""}},[c("v-list-item-group",{attrs:{color:t.account.theme_color},model:{value:t.course_index,callback:function(e){t.course_index=e},expression:"course_index"}},t._l(t.courses,(function(e,r){return c("v-list-item",{key:r},[c("v-list-item-icon",[c("v-icon",[t._v("library_books")])],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1),t._v(" "),null!==t.course?c("v-col",{staticStyle:{"max-height":"500px"},attrs:{cols:"12",md:"6"}},[c("course-card",{attrs:{course:t.course,account:t.account,showInstructor:!1,display:"grid",showStatus:!0}})],1):t._e()],1)],1)]:[c("div",{staticClass:"text-center text-muted"},[c("small",[t._v("No course is available for now. You can check back.")])])]],2),t._v(" "),c("v-divider"),t._v(" "),c("v-card-actions",[c("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=n.exports},pHhT:function(t,e,c){"use strict";c.r(e);var r=c("L2JU");function o(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,r)}return c}function n(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?o(Object(c),!0).forEach((function(e){a(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function a(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}var s={name:"CourseCard",components:{CourseStatus:c("O3YU").default},props:{course:Object,account:Object,showInstructor:{type:Boolean,default:function(){return!0}},showStatus:{type:Boolean,default:function(){return!1}},display:{type:String,default:function(){return"grid"}}},computed:n(n({},Object(r.c)({authenticated:function(t){return t.authenticated},auth:function(t){return t.auth},inFrame:function(t){return t.inFrame}})),{},{col:function(){return"list"==this.display?6:12}}),watch:{account:{immediate:!0,handler:function(t){t&&!this.course.account&&(this.course.account=t)}}}},i=c("KHd+"),u=Object(i.a)(s,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-card",{staticClass:"mx-auto"},[c("v-row",[!t.inFrame&&t.showInstructor?c("v-col",{attrs:{cols:"12"}},[c("v-list-item",[c("avatar",{staticClass:"mr-2",attrs:{src:t.course.account.avatar,color:t.course.account.theme_color,size:"40"}}),t._v(" "),c("v-list-item-content",[c("v-list-item-subtitle",[c("strong",[t._v(t._s(t.course.account.name))]),t._v(" "),c("inertia-link",{attrs:{href:t.route("account.show",{account:t.course.account.username})}},[t._v(t._s(t.course.account.at_username))])],1)],1)],1)],1):t._e(),t._v(" "),c("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:t.col}},[c("v-img",{attrs:{src:t.course.cover_image,height:"194"}}),t._v(" "),t.showStatus?c("course-status",{attrs:{course:t.course}}):t._e()],1),t._v(" "),c("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:t.col}},[c("v-card-text",[c("h4",[t._v(t._s(t.course.title))]),t._v("\n        "+t._s(t.course.snippet)+"\n        "),c("v-divider"),t._v(" "),c("div",{staticClass:"text-muted"},[c("v-icon",{attrs:{color:t.course.account.theme_color}},[t._v("date_range")]),t._v(" "+t._s(t.course.start_date)+" - "+t._s(t.course.end_date)+"\n        ")],1)],1),t._v(" "),c("v-card-actions",[c("h2",[t._v(t._s(t._f("money")(t.course.price)))]),t._v(" "),c("v-spacer"),t._v(" "),c("inertia-link",{staticClass:"prevent-default",attrs:{href:t.route("account.course.show",{account:t.course.account.username,course:t.course.slug})}},[c("v-btn",{attrs:{dark:"",color:t.course.account.theme_color}},[t._v(" view course")])],1),t._v(" "),t._t("options")],2)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);