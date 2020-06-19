(window.webpackJsonp=window.webpackJsonp||[]).push([[1,3,4,7,10,19,20,21],{"33ZE":function(t,e,n){"use strict";n.r(e);var r=n("L2JU");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"AccountLayout",components:{CoursesQuickEnroll:n("mWPv").default},data:function(){return{courses_dialog:!1}},computed:c(c(c({},Object(r.c)({inFrame:function(t){return t.inFrame}})),Object(r.b)(["auth","authenticated","isMyAccount","isOnMyAccount"])),{},{account:function(){return this.$page.account},courses:function(){return this.$page.courses?this.$page.courses.data:null},socials:function(){return[{icon:"link",text:"Facebook",link:this.account.facebook_url},{icon:"link",text:"Instagram",link:this.account.instagram_url},{icon:"link",text:"Twitter",link:this.account.twitter_url},{icon:"link",text:"LinkedIn",link:this.account.linkedin_url},{icon:"link",text:"Website",link:this.account.website}]}}),methods:{anySocial:function(){return this.socials.filter((function(t){return!!t.link})).length}},mounted:function(){$("html").attr("no-scroll","no-scroll")},destroyed:function(){$("html").removeAttr("no-scroll")}},i=n("KHd+"),u=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{absolute:"",color:t.account.theme_color,dark:"",src:t.account.cover_image,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","inverted-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var r=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, "+t.account.theme_color+", rgba(255,255,255,.7)"}},"v-img",r,!1))]}}])},[t._v(" "),t.authenticated&&t.isMyAccount(t.account)?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.$inertia.visit(t.route("home"))}}},[n("v-icon",[t._v("home")])],1):t._e(),t._v(" "),n("v-toolbar-title",{attrs:{dark:""}},[n("inertia-link",{staticClass:"prevent-default",staticStyle:{color:"#fff"},attrs:{href:t.route("account.show",{account:t.account.username})}},[n("avatar",{attrs:{src:t.account.avatar,color:t.account.theme_color,size:"30"}}),t._v(" "+t._s(t.account.name)+"\n      ")],1)],1),t._v(" "),n("v-spacer"),t._v(" "),t.authenticated&&!t.isMyAccount?n("inertia-link",{staticClass:"prevent-default mx-1",attrs:{href:t.auth.username?t.route("account.show",{account:t.auth.username}):"#"}},[n("avatar",{attrs:{src:t.auth.avatar,color:t.auth.theme_color,size:"40"}})],1):t._e(),t._v(" "),t.isMyAccount(t.account)?n("v-menu",{attrs:{origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.edit",{account:t.account.username}))}}},[n("v-list-item-icon",[n("v-icon",[t._v("edit")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Edit account")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.course.create",{account:t.account.username}))}}},[n("v-list-item-icon",[n("v-icon",[t._v("add")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Add new course")])],1)],1)],1)],1):t._e()],1),t._v(" "),n("div",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"100vh"},attrs:{id:"scrolling-techniques-5"}},[n("v-parallax",{attrs:{height:"200",src:t.account.cover_image,color:t.account.theme_color}},[n("div",{staticClass:"p-3",staticStyle:{"background-color":"rgba(0,0,0, .2)"}},[t.account.show_caption?n("div",{staticClass:"text-center mb-2"},[n("h1",[t._v(t._s(t.account.caption))]),t._v(" "),n("h4",[t._v(t._s(t.account.subcaption))])]):n("div",{staticClass:"d-flex align-center justify-content-center mb-2"},[n("div",{staticClass:"mr-2"},[n("avatar",{attrs:{src:t.account.avatar,color:t.account.theme_color,size:"100"}})],1),t._v(" "),n("div",[n("h4",[t._v(t._s(t.account.name))]),t._v(" "),n("div",[n("small",[t._v(t._s(t.account.at_username))])])])]),t._v(" "),t.courses?[n("courses-quick-enroll",{attrs:{account:t.account,courses:t.courses}})]:t._e()],2)]),t._v(" "),n("v-container",{staticStyle:{"min-height":"100vh"},attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[t._t("default")],2),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-divider"),t._v(" "),n("h4",[t._v("About "+t._s(t.account.name))]),t._v(" "),n("v-divider"),t._v(" "),t.account.bio?[t._v("\n                    "+t._s(t.account.bio)+"\n                  ")]:t._e(),t._v(" "),n("v-card",{attrs:{outlined:""}},[n("v-card",{attrs:{outlined:"",dark:"",color:t.account.theme_color}},[n("v-row",[n("v-col",[n("div",{staticClass:"text-center"},[n("a",{staticClass:"prevent-default",attrs:{href:"tel: "+t.account.phone}},[n("v-btn",{attrs:{icon:"",large:""}},[n("v-icon",[t._v("call")])],1)],1)])]),t._v(" "),n("v-col",[n("div",{staticClass:"text-center"},[n("a",{staticClass:"prevent-default",attrs:{href:"mailto: "+t.account.email}},[n("v-btn",{attrs:{large:"",icon:""}},[n("v-icon",[t._v("email")])],1)],1)])])],1)],1),t._v(" "),t.anySocial()?n("v-list",[n("div",{staticClass:"mx-3"},[n("h4",[t._v("Socials")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-list-item-group",[t._l(t.socials,(function(e,r){return[e.link?n("a",{key:r,staticClass:"prevent-default",attrs:{href:e.link,target:"_blank"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)],1):t._e()]}))],2)],1):t._e()],1)],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},"90Es":function(t,e,n){"use strict";n.r(e);var r=n("L2JU"),o=n("33ZE");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={name:"CourseShow",layout:function(t,e){return t(o.default,[e])},components:{CourseStatus:n("O3YU").default},metaInfo:function(){return{title:"".concat(this.course.title," ").concat(this.account.at_username),titleTemplate:"%s - AcadaApp"}},computed:a(a({},Object(r.b)(["auth","authenticated","isMyAccount","isOnMyAccount"])),{},{account:function(){return this.$page.account},course:function(){return this.$page.course}}),methods:{enroll:function(){this.$inertia.visit(this.route("account.course.enroll",{account:this.account.username,course:this.course.slug}))}}},u=n("KHd+"),l=Object(u.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v(t._s(t.course.title))]),t._v(" "),n("v-img",{attrs:{src:t.course.cover_image}}),t._v(" "),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"text-muted mt-3"},[n("v-icon",{attrs:{color:t.account.theme_color}},[t._v("date_range")]),t._v(" "+t._s(t.course.start_date)+" - "+t._s(t.course.end_date)+"\n            "),n("v-icon",{attrs:{color:t.account.theme_color}},[t._v("info")]),t._v(" "+t._s(t.course.course_type)+"\n        ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("course-status",{attrs:{course:t.course}})],1),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"d-flex"},[n("div",[n("h1",[t._v(t._s(t._f("money")(t.course.price)))])]),t._v(" "),n("div",{staticClass:"ml-auto",on:{click:t.enroll}},[n("v-btn",{attrs:{dark:"",large:"",color:t.account.theme_color}},[t._v("\n                Enroll Now "),n("v-icon",[t._v("arrow_forward")])],1),t._v(" "),t.isOnMyAccount(t.course)?n("v-menu",{attrs:{origin:"center center",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){t.$inertia.visit(t.route("account.course.edit",{account:t.account.username,course:t.course.slug}))}}},[n("v-list-item-icon",[n("v-icon",[t._v("edit")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Edit course")])],1)],1)],1)],1):t._e()],1)]),t._v(" "),n("v-divider"),t._v(" "),n("div",[t._v("\n        "+t._s(t.course.description)+"\n    ")]),t._v(" "),t._t("default"),t._v(" "),n("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",large:"",color:t.account.theme_color,title:"Enroll for "+t.course.title},on:{click:t.enroll}},[n("v-icon",[t._v("arrow_forward")])],1)],2)}),[],!1,null,null,null);e.default=l.exports},GKnw:function(t,e,n){"use strict";n.r(e);var r={name:"PaymentGateways",data:function(){return{gateway:null,dialog:!1}},props:{gateways:Array,account:Object,show:Boolean},watch:{show:{immediate:!0,handler:function(t){this.dialog=t}}}},o=n("KHd+"),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Payment method")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticStyle:{height:"300px"}},[t.gateways.length?n("v-radio-group",{attrs:{column:""},model:{value:t.gateway,callback:function(e){t.gateway=e},expression:"gateway"}},t._l(t.gateways,(function(t){return n("v-radio",{key:t.gateway,attrs:{label:t.gateway,value:t.gateway}})})),1):n("div",{staticClass:"text-muted text-center"},[n("small",[t._v("No payment gateway available yet")])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.$emit("cancel")}}},[t._v("Cancel")]),t._v(" "),n("v-spacer"),t._v(" "),null!==t.gateway?n("v-btn",{attrs:{color:t.account.theme_color,dark:""},on:{click:function(e){return t.$emit("continue",t.gateway)}}},[t._v("Continue")]):t._e()],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports},O3YU:function(t,e,n){"use strict";n.r(e);var r={name:"CourseStatus",props:{course:Object}},o=n("KHd+"),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.course.started?t.course.ongoing?n("v-chip",{staticClass:"ma-2",attrs:{color:"success","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Ongoing\n    ")],1):n("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Ended\n    ")],1):n("v-chip",{staticClass:"ma-2",attrs:{color:"orange","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("schedule")]),t._v("\n        Upcoming\n    ")],1)],1)}),[],!1,null,null,null);e.default=c.exports},"S/dq":function(t,e,n){"use strict";n.r(e);var r={name:"StudentEnrollment",data:function(){return{dialog:!1}},props:{account:Object,student:Object,show:Boolean},watch:{show:{immediate:!0,handler:function(t){this.dialog=t}}}},o=n("KHd+"),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:t.account.theme_color}},[n("v-toolbar-title",[t._v("Enrollment info")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("close")}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"text-center"},[n("v-icon",{attrs:{color:t.account.theme_color,size:"100"}},[t._v("check_circle")]),t._v(" "),n("h1",[t._v("Enrollment successful!")])],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports},VdNX:function(t,e,n){"use strict";n.r(e);var r=n("33ZE"),o=n("90Es"),c=n("S/dq"),a=n("GKnw");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={name:"CourseEnroll",metaInfo:function(){return{title:"Enroll ".concat(this.course.title," ").concat(this.account.at_username),titleTemplate:"%s - AcadaApp"}},layout:function(t,e){return t(r.default,[t(o.default,[e])])},components:{StudentEnrollment:c.default,PaymentGateways:a.default},data:function(){return{dialog:!0,loading:!1,student:{},errors:null,process:"",selectPaymentGateway:!1,showEnrollment:!1}},computed:{processing:function(){return""!==this.process}},props:{account:{type:Object,default:function(){return{}}},course:{type:Object,default:function(){return{}}},payment_gateways:{type:Array,default:function(){return[]}}},methods:{freeProcess:function(){this.process="",this.loading=!1},register:function(t){return axios.post(this.route("account.course.register",{account:this.account.username,course:this.course.slug}),t)},submit:function(){var t=this;this.loading=!0,this.process="Validating your information...",this.register(i(i({},this.student),{},{raw:!0,for_real:!1})).then((function(e){t.errors=null,t.selectPaymentGateway=!0,t.process=""})).catch((function(e){t.errors=e.response?e.response.data.errors:[],t.freeProcess()}))},initializeGateway:function(t){this.selectPaymentGateway=!1;var e=this.payment_gateways.find((function(e){return e.gateway==t}));switch(t){case"paystack":this.initializePaystack(e);break;default:toastr.error("We do not support that payment gateway yet. We are working on it."),this.freeProcess()}},initializePaystack:function(t){var e=this;this.process="Initializing payment gateway...";var n=document.createElement("script");n.setAttribute("src","https://js.paystack.co/v1/inline.js"),document.head.appendChild(n),n.onload=function(n){e.init_payment=!1,toastr.success("Payment gateway initialized"),e.paystackPayment(t)},n.onerror=function(t){e.init_payment=!1,toastr.error("Payment gateway initialization failed"),e.freeProcess()}},paystackPayment:function(t){var e=this,n=PaystackPop.setup({key:t.credentials.public_key,email:this.student.email,amount:100*this.course.price,currency:"NGN",ref:this.student.id,firstname:this.student.first_name,lastname:this.student.first_name,metadata:{custom_fields:[{course:this.course.title}]},callback:function(n){toastr.success("Payment successful"),e.process="Registering you as ".concat(e.student.first_name," ").concat(e.student.last_name),e.register(i(i({},e.student),{},{payment_ref:n.reference,raw:!0,for_real:!0,payment_gateway_id:t.id})).then((function(t){e.student=t.data,e.loading=!1,e.showEnrollment=!0})).catch((function(t){toastr.error("Registration failed: ".concat(t.message))})).finally((function(){e.freeProcess()}))},onClose:function(){toastr.warning("Enrollment aborted"),e.freeProcess()}});this.process="",n.openIframe()}}},v=n("KHd+"),d=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.processing,callback:function(e){t.processing=e},expression:"processing"}},[n("v-card",{attrs:{color:t.account.theme_color,dark:""}},[n("v-card-text",[t._v("\n        "+t._s(t.process)+"\n        "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.course.ended?n("div",[n("v-card",[n("v-card-text",[n("div",{staticClass:"text-center"},[t._v("\n              You can no longer enroll for this course. It ended since "+t._s(t.course.end_date)+"\n              "),n("v-divider"),t._v(" "),n("v-btn",{attrs:{type:"button",color:"red darken-1",text:""},on:{click:function(e){t.$inertia.visit(t.route("account.course.show",{account:t.account.username,course:t.course.slug}))}}},[t._v("Cancel")])],1)])],1)],1):n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v('Enroll for "'+t._s(t.course.title)+'"')]),t._v(" "),n("v-spacer"),t._v(" "),n("h4",{style:"color: "+t.account.theme_color},[t._v(t._s(t._f("money")(t.course.price)))])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("x-input",{attrs:{errors:t.errors,name:"first_name",type:"text",label:"First name*"},model:{value:t.student.first_name,callback:function(e){t.$set(t.student,"first_name",e)},expression:"student.first_name"}}),t._v(" "),n("x-input",{attrs:{errors:t.errors,name:"last_name",type:"text",label:"Last name*"},model:{value:t.student.last_name,callback:function(e){t.$set(t.student,"last_name",e)},expression:"student.last_name"}}),t._v(" "),n("x-input",{attrs:{errors:t.errors,name:"email",type:"text",label:"Email*"},model:{value:t.student.email,callback:function(e){t.$set(t.student,"email",e)},expression:"student.email"}}),t._v(" "),n("x-input",{attrs:{errors:t.errors,name:"phone",type:"text",label:"Phone*"},model:{value:t.student.phone,callback:function(e){t.$set(t.student,"phone",e)},expression:"student.phone"}}),t._v(" "),n("small",{attrs:{color:"red"}},[t._v("*indicates required field")])],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{type:"button",color:"red darken-1",text:""},on:{click:function(e){t.$inertia.visit(t.route("account.course.show",{account:t.account.username,course:t.course.slug}))}}},[t._v("Cancel")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{type:"submit",loading:t.loading,color:t.account.theme_color,dark:""}},[t._v("Proceed to payment  "),n("v-icon",[t._v("arrow_forward")])],1)],1)],1)],1)]),t._v(" "),n("payment-gateways",{attrs:{account:t.account,gateways:t.payment_gateways,show:t.selectPaymentGateway},on:{continue:t.initializeGateway,cancel:function(e){t.selectPaymentGateway=!1,t.freeProcess()}}}),t._v(" "),n("student-enrollment",{attrs:{account:t.account,student:t.student,show:t.showEnrollment},on:{close:function(e){t.$inertia.visit(t.route("account.show",{account:t.account.username}))}}})],1)}),[],!1,null,null,null);e.default=d.exports},mWPv:function(t,e,n){"use strict";n.r(e);var r={name:"CoursesQuickEnroll",components:{CourseCard:n("pHhT").default},data:function(){return{dialog:!1,course_index:null}},props:{courses:{type:Array,default:function(){return[]}},account:{type:Object,default:function(){return{}}}},computed:{course:function(){return null===this.course_index?null:this.courses[this.course_index]}}},o=n("KHd+"),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.courses?n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{scrollable:"","max-width":null!==t.course?"800px":"300px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:t.account.theme_color,dark:"",large:""}},r),[t._v("Enroll for a course "),n("v-icon",[t._v("arrow_forward")])],1)]}}],null,!1,3487011881),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[t._v("Courses available")]),t._v(" "),n("v-card-text",{staticClass:"px-0",staticStyle:{"max-height":"500px"}},[t.courses.length?[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:null!==t.course?"6":"12"}},[n("v-list",{attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:t.account.theme_color},model:{value:t.course_index,callback:function(e){t.course_index=e},expression:"course_index"}},t._l(t.courses,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-icon",[n("v-icon",[t._v("library_books")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1),t._v(" "),null!==t.course?n("v-col",{staticStyle:{"max-height":"500px"},attrs:{cols:"12",md:"6"}},[n("course-card",{attrs:{course:t.course,account:t.account,showInstructor:!1,display:"grid",showStatus:!0}})],1):t._e()],1)],1)]:[n("div",{staticClass:"text-center text-muted"},[n("small",[t._v("No course is available for now. You can check back.")])])]],2),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=c.exports},pHhT:function(t,e,n){"use strict";n.r(e);var r=n("L2JU");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"CourseCard",components:{CourseStatus:n("O3YU").default},props:{course:Object,account:Object,showInstructor:{type:Boolean,default:function(){return!0}},showStatus:{type:Boolean,default:function(){return!1}},display:{type:String,default:function(){return"grid"}}},computed:c(c({},Object(r.c)({authenticated:function(t){return t.authenticated},auth:function(t){return t.auth},inFrame:function(t){return t.inFrame}})),{},{col:function(){return"list"==this.display?6:12}}),watch:{account:{immediate:!0,handler:function(t){t&&!this.course.account&&(this.course.account=t)}}}},i=n("KHd+"),u=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto"},[n("v-row",[!t.inFrame&&t.showInstructor?n("v-col",{attrs:{cols:"12"}},[n("v-list-item",[n("avatar",{staticClass:"mr-2",attrs:{src:t.course.account.avatar,color:t.course.account.theme_color,size:"40"}}),t._v(" "),n("v-list-item-content",[n("v-list-item-subtitle",[n("strong",[t._v(t._s(t.course.account.name))]),t._v(" "),n("inertia-link",{attrs:{href:t.route("account.show",{account:t.course.account.username})}},[t._v(t._s(t.course.account.at_username))])],1)],1)],1)],1):t._e(),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:t.col}},[n("v-img",{attrs:{src:t.course.cover_image,height:"194"}}),t._v(" "),t.showStatus?n("course-status",{attrs:{course:t.course}}):t._e()],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"12",lg:t.col}},[n("v-card-text",[n("h4",[t._v(t._s(t.course.title))]),t._v("\n        "+t._s(t.course.snippet)+"\n        "),n("v-divider"),t._v(" "),n("div",{staticClass:"text-muted"},[n("v-icon",{attrs:{color:t.course.account.theme_color}},[t._v("date_range")]),t._v(" "+t._s(t.course.start_date)+" - "+t._s(t.course.end_date)+"\n        ")],1)],1),t._v(" "),n("v-card-actions",[n("h2",[t._v(t._s(t._f("money")(t.course.price)))]),t._v(" "),n("v-spacer"),t._v(" "),n("inertia-link",{staticClass:"prevent-default",attrs:{href:t.route("account.course.show",{account:t.course.account.username,course:t.course.slug})}},[n("v-btn",{attrs:{dark:"",color:t.course.account.theme_color}},[t._v(" view course")])],1),t._v(" "),t._t("options")],2)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);