(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8],{"33ZE":function(t,e,c){"use strict";c.r(e);var n=c("L2JU");function r(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,n)}return c}function o(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?r(Object(c),!0).forEach((function(e){i(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function i(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}var a={name:"AccountLayout",data:function(){return{}},computed:o(o({},Object(n.c)({auth:function(t){return t.auth},authenticated:function(t){return t.authenticated}})),{},{account:function(){return this.$page.account},isMyAccount:function(){return!(!this.authenticated||this.auth.id!==this.account.id)},socials:function(){return[{icon:"link",text:"Facebook",link:this.account.facebook_url},{icon:"link",text:"Instagram",link:this.account.instagram_url},{icon:"link",text:"Twitter",link:this.account.twitter_url},{icon:"link",text:"LinkedIn",link:this.account.linkedin_url},{icon:"link",text:"Website",link:this.account.website}]}}),methods:{anySocial:function(){return this.socials.every((function(t){return!(!t.link||""==t.link)}))}},mounted:function(){$("html").attr("no-scroll","no-scroll")},destroyed:function(){$("html").removeAttr("no-scroll")}},s=c("KHd+"),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-app",[c("v-app-bar",{attrs:{absolute:"",color:t.account.theme_color,dark:"",src:t.account.cover_image,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","inverted-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[c("v-img",t._b({attrs:{gradient:"to top right, "+t.account.theme_color+", rgba(255,255,255,.7)"}},"v-img",n,!1))]}}])},[t._v(" "),c("v-btn",{attrs:{icon:""},on:{click:function(e){t.$inertia.visit(t.route("home"))}}},[c("v-icon",[t._v("home")])],1),t._v(" "),c("v-toolbar-title",{attrs:{dark:""}},[c("inertia-link",{staticClass:"prevent-default",staticStyle:{color:"#fff"},attrs:{href:t.route("account.show",{account:t.account.username})}},[c("avatar",{attrs:{src:t.account.avatar,color:t.account.theme_color,size:"30"}}),t._v(" "+t._s(t.account.name)+"\n      ")],1)],1),t._v(" "),c("v-spacer"),t._v(" "),t.isMyAccount?c("v-menu",{attrs:{origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[c("v-btn",t._g({attrs:{icon:""}},n),[c("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[t._v(" "),c("v-list",[c("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.edit",{account:t.account.username}))}}},[c("v-list-item-icon",[c("v-icon",[t._v("edit")])],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",[t._v("Edit account")])],1)],1),t._v(" "),c("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.course.create",{account:t.account.username}))}}},[c("v-list-item-icon",[c("v-icon",[t._v("add")])],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",[t._v("Add new course")])],1)],1)],1)],1):t._e()],1),t._v(" "),c("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"100vh"},attrs:{id:"scrolling-techniques-5"}},[c("v-parallax",{attrs:{height:"200",src:t.account.cover_image,color:t.account.theme_color}},[c("v-container",{staticStyle:{"background-color":"rgba(0,0,0, .2)"}},[c("div",{staticClass:"d-flex align-center"},[c("div",{staticClass:"mr-2"},[c("avatar",{attrs:{src:t.account.avatar,color:t.account.theme_color,size:"100"}})],1),t._v(" "),c("div",[c("h4",[t._v(t._s(t.account.name))]),t._v(" "),c("div",[c("small",[t._v(t._s(t.account.at_username))])])])])])],1),t._v(" "),c("v-container",{staticStyle:{"min-height":"100vh"},attrs:{fluid:""}},[c("v-row",[c("v-col",{attrs:{cols:"12",md:"8"}},[t._t("default")],2),t._v(" "),c("v-col",{attrs:{cols:"12",md:"4"}},[t.route().current("account.show")?t._e():[c("v-divider"),t._v(" "),c("h4",[t._v("About "+t._s(t.account.name))]),t._v(" "),c("v-divider")],t._v(" "),t.account.bio?[t._v("\n                    "+t._s(t.account.bio)+"\n                  ")]:t._e(),t._v(" "),c("v-card",{attrs:{outlined:""}},[c("v-card",{attrs:{outlined:"",dark:"",color:t.account.theme_color}},[c("v-row",[c("v-col",[c("div",{staticClass:"text-center"},[c("a",{staticClass:"prevent-default",attrs:{href:"tel: "+t.account.phone}},[c("v-btn",{attrs:{icon:"",large:""}},[c("v-icon",[t._v("call")])],1)],1)])]),t._v(" "),c("v-col",[c("div",{staticClass:"text-center"},[c("a",{staticClass:"prevent-default",attrs:{href:"mailto: "+t.account.email}},[c("v-btn",{attrs:{large:"",icon:""}},[c("v-icon",[t._v("email")])],1)],1)])])],1)],1),t._v(" "),t.anySocial()?c("v-list",[c("div",{staticClass:"mx-3"},[c("h4",[t._v("Socials")])]),t._v(" "),c("v-divider"),t._v(" "),c("v-list-item-group",[t._l(t.socials,(function(e,n){return[e.link?c("a",{key:n,staticClass:"prevent-default",attrs:{href:e.link,target:"_blank"}},[c("v-list-item",[c("v-list-item-icon",[c("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),c("v-list-item-content",[c("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)],1):t._e()]}))],2)],1):t._e()],1),t._v(" "),t.route().current("account.show")&&t.isMyAccount?[c("v-btn",{attrs:{color:t.account.theme_color,dark:"",large:"",fixed:"",bottom:"",right:"",fab:"",title:"Create  course"},on:{click:function(e){t.$inertia.visit(t.route("account.course.create",{account:t.account.username}))}}},[c("v-icon",[t._v("mdi-plus")])],1)]:t._e()],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports},"90Es":function(t,e,c){"use strict";c.r(e);var n=c("L2JU"),r=c("33ZE");function o(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,n)}return c}function i(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}var a={name:"CourseShow",layout:function(t,e){return t(r.default,[e])},metaInfo:function(){return{title:"".concat(this.course.title," ").concat(this.account.at_username),titleTemplate:"%s - AcadaApp"}},props:{account:Object,course:Object},computed:function(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?o(Object(c),!0).forEach((function(e){i(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}({},Object(n.b)(["auth","authenticated","isMyAccount","isOnMyAccount"]))},s=c("KHd+"),l=Object(s.a)(a,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("h4",[t._v(t._s(t.course.title))]),t._v(" "),c("v-img",{attrs:{src:t.course.cover_image}}),t._v(" "),c("v-divider"),t._v(" "),c("div",{staticClass:"d-flex"},[c("div",[c("h1",[t._v(t._s(t._f("money")(t.course.price)))])]),t._v(" "),c("div",{staticClass:"ml-auto"},[c("v-btn",{attrs:{dark:"",large:"",color:t.account.theme_color}},[t._v("\n                Enroll Now "),c("v-icon",[t._v("arrow_forward")])],1)],1)]),t._v(" "),c("v-divider"),t._v(" "),c("div",[t._v("\n        "+t._s(t.course.description)+"\n    ")]),t._v(" "),c("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",large:"",color:t.account.theme_color,title:"Enroll for "+t.course.title}},[c("v-icon",[t._v("arrow_forward")])],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);