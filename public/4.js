(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,10],{EimN:function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o={name:"CoursesWidget",components:{CourseCard:r("pHhT").default},data:function(){return{loading:!1,data:[]}},props:{courses:{type:Array}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.c)({authenticated:function(t){return t.authenticated},auth:function(t){return t.auth}})),methods:{getCourses:function(){var t=this;this.loading=!0,axios.get(this.route("course.list")).then((function(e){t.loading=!1,t.data=e.data.data}))}},watch:{courses:{immediate:!0,handler:function(t){t?this.data=t:this.getCourses()}}}},s=r("KHd+"),i=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.loading?e("div",[e("v-row",this._l([1,2,3],(function(t){return e("v-col",{key:t,attrs:{cols:"12",md:"4"}},[e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-avatar-three-line"}})],1)})),1)],1):e("div",[this.data.length?e("v-row",this._l(this.data,(function(t){return e("v-col",{key:t.id,attrs:{cols:"12",md:"4"}},[e("course-card",{attrs:{course:t}})],1)})),1):e("div",{staticClass:"text-center text-muted my-5"},[this._v("\n            No course available\n        ")])],1)])}),[],!1,null,null,null);e.default=i.exports},mSFh:function(t,e,r){"use strict";r.r(e);var n=r("EmcK"),c={name:"HomePage",layout:function(t,e){return t(n.default,[e])},metaInfo:function(){return{title:"Home",titleTemplate:"%s - AcadaApp"}},components:{CoursesWidget:r("EimN").default}},a=r("KHd+"),o=Object(a.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("courses-widget")],1)}),[],!1,null,null,null);e.default=o.exports},pHhT:function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o={name:"CourseCard",props:{course:Object,account:Object},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.c)({authenticated:function(t){return t.authenticated},auth:function(t){return t.auth}})),watch:{account:{immediate:!0,handler:function(t){t&&!this.course.account&&(this.course.account=t)}}}},s=r("KHd+"),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[r("v-list-item",[r("avatar",{staticClass:"mr-2",attrs:{src:t.course.account.avatar,color:t.course.account.theme_color,size:"50"}}),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v(t._s(t.course.title))]),t._v(" "),r("v-list-item-subtitle",[t._v("by "+t._s(t.course.account.name)+" "+t._s(t.course.account.at_username))])],1)],1),t._v(" "),r("v-img",{attrs:{src:t.course.cover_image,height:"194"}}),t._v(" "),r("v-card-text",[t._v("\n    "+t._s(t.course.snippet)+"\n  ")]),t._v(" "),r("v-card-actions",[r("h2",[t._v(t._s(t._f("money")(t.course.price)))]),t._v(" "),r("v-spacer"),t._v(" "),r("inertia-link",{staticClass:"prevent-default",attrs:{href:t.route("account.course.show",{account:t.course.account.username,course:t.course.slug})}},[r("v-btn",{attrs:{dark:"",color:t.course.account.theme_color}},[t._v(" view course")])],1),t._v(" "),r("v-menu",{attrs:{origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",[r("v-list-item-title",[t._v("Share options here")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);