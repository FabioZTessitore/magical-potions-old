webpackJsonp([1],{"0Pad":function(t,e,n){"use strict";var o=n("cC2E"),s=n("uqPT"),r=n("VU/8"),a=r(o.a,s.a,!1,null,null,null);e.a=a.exports},"1/oy":function(t,e){},"2AE9":function(t,e,n){"use strict";function o(t){n("WGsi")}var s=n("6h/q"),r=n("iJ+W"),a=n("VU/8"),i=o,c=a(s.a,r.a,!1,i,"data-v-7c422c3a",null);e.a=c.exports},"5Z8x":function(t,e){},"6h/q":function(t,e,n){"use strict";e.a={name:"Logo",data:function(){return{logoName:"Magical Potions"}}}},"9M+g":function(t,e){},AGs8:function(t,e,n){"use strict";e.a={name:"revenue",computed:{revenue:function(){return(this.$store.state.potions/this.$store.state.potionsToMoney).toFixed(2)}}}},ApaE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("SwRy"),s=n("MQk4"),r=n("VU/8"),a=r(o.a,s.a,!1,null,null,null);e.default=a.exports},Chz9:function(t,e,n){"use strict";var o=n("AGs8"),s=n("JbPE"),r=n("VU/8"),a=r(o.a,s.a,!1,null,null,null);e.a=a.exports},"ExI+":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{on:{click:t.makePotions}},[n("h3",{staticClass:"card-text text-center"},[n("font-awesome-icon",{attrs:{icon:"wine-bottle"}}),t._v(" "+t._s(t.potions)+"\n  ")],1)])},s=[],r={render:o,staticRenderFns:s};e.a=r},GfHa:function(t,e){},HuBD:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("b-row",{staticClass:"mt-5"},[n("b-col",{staticClass:"text-center"},[n("Logo")],1)],1),t._v(" "),n("b-row",[n("b-col",{staticClass:"text-center"},[n("router-link",{attrs:{to:"/home"}},[t._v("(Go to Home)")])],1)],1),t._v(" "),n("b-row",{staticClass:"mt-5 align-items-center"},[n("b-col",{attrs:{md:"2"}}),t._v(" "),n("b-col",[n("h1",{staticClass:"text-center"},[n("font-awesome-icon",{attrs:{icon:"wine-bottle"}})],1)]),t._v(" "),n("b-col",[n("LoginForm"),t._v(" "),n("p",{staticClass:"mt-3"}),n("div",{staticClass:"card-body"},[n("p",[n("small",[t._v("New to "),n("strong",[t._v("Magical Potions")]),t._v("? "),n("router-link",{attrs:{to:"/signup"}},[t._v("Create an account")])],1)])]),t._v(" "),n("p")],1),t._v(" "),n("b-col",{attrs:{md:"2"}})],1)],1)},s=[],r={render:o,staticRenderFns:s};e.a=r},Id91:function(t,e){},JbPE:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",[n("h3",{staticClass:"card-text text-center"},[n("font-awesome-icon",{attrs:{icon:"funnel-dollar"}}),t._v(" "+t._s(t.revenue)+"\n  ")],1)])},s=[],r={render:o,staticRenderFns:s};e.a=r},M93x:function(t,e,n){"use strict";function o(t){n("5Z8x")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("xJD8"),r=n("rEm5"),a=n("VU/8"),i=o,c=a(s.a,r.a,!1,i,null,null);e.default=c.exports},MQk4:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"mt-5"},[n("b-col",{staticClass:"text-center"},[n("Logo")],1)],1),t._v(" "),n("b-row",{staticClass:"mt-5"},[n("b-col",{staticClass:"text-center"},[n("h2",[t._v("Sign Up")])])],1),t._v(" "),n("div",{staticClass:"offset-md-3 col-md-6"},[n("b-form",{staticClass:"mt-5",attrs:{md:"6"},on:{submit:t.onSubmit}},[n("b-form-group",{attrs:{label:"Email address:","label-for":"useremail",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"useremail",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[n("b-form-input",{attrs:{id:"username",type:"text",required:"",placeholder:"Enter username"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Password:","label-for":"userpassword"}},[n("b-form-input",{attrs:{id:"userpassword",type:"password",required:"",placeholder:"Enter Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v("Sign Up")])],1),t._v(" "),t.error?n("b-row",{staticClass:"mt-5"},[n("b-col",{staticClass:"text-center"},[n("h2",[t._v("Error")]),t._v(" "),n("p",[t._v(t._s(t.errorMessage))])])],1):t._e()],1)],1)},s=[],r={render:o,staticRenderFns:s};e.a=r},NHnr:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var s=n("7+uW"),r=o(s),a=n("e6fC"),i=o(a),c=n("M93x"),u=o(c),l=n("YaEn"),m=o(l);n("qb6w"),n("9M+g");var f=n("C/JF"),d=n("fhbW"),p=n("1e6/"),v=n("NYxO"),b=o(v),_=n("HI0L"),h=o(_);f.library.add(d.faHandHoldingUsd),f.library.add(d.faWineBottle),f.library.add(d.faFunnelDollar),r.default.component("font-awesome-icon",p.FontAwesomeIcon),r.default.use(i.default),r.default.config.productionTip=!1,r.default.use(b.default);var w=new b.default.Store({state:{money:0,potions:0,potionsToMoney:10},mutations:{setInitialData:function(t,e){t.money=e.money,t.potions=e.potions},increment:function(t){t.money++},incrementPotions:function(t){t.potions++},updateMoney:function(t){t.money+=t.potions/t.potionsToMoney}}});r.default.use(new h.default({debug:!1,connection:window.location.hostname})),new r.default({el:"#app",store:w,router:m.default,template:"<App/>",components:{App:u.default},data:function(){return{timer:""}},created:function(){var t=this;this.timer=setInterval(function(){t.$store.commit("updateMoney")},1e3)},beforeDestroy:function(){clearInterval(this.timer)},sockets:{connect:function(){console.log("socket connection ...")},initialData:function(t){this.$store.commit("setInitialData",t)}}})},SwRy:function(t,e,n){"use strict";var o=n("2AE9");e.a={name:"SignUp",data:function(){return{form:{username:"",email:"",password:""},error:!1,errorMessage:""}},sockets:{signupResponse:function(t){return console.log(t),t.success?(this.error=!1,this.$router.push("/")):this.setError(t.message),!1}},methods:{setError:function(t){this.error=!0,this.errorMessage=t},onSubmit:function(t){t.preventDefault(),this.$socket.emit("signup",this.form)}},components:{Logo:o.a}}},Tzea:function(t,e,n){"use strict";var o=n("2AE9"),s=n("0Pad"),r=n("dzKz"),a=n("Chz9");e.a={name:"MainComponent",components:{Logo:o.a,Money:s.a,Potions:r.a,Revenue:a.a}}},WGsi:function(t,e){},YaEn:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r=o(s),a=n("/ocq"),i=o(a),c=n("lS0w"),u=o(c),l=n("xJsL"),m=o(l),f=n("ApaE"),d=o(f);r.default.use(i.default),e.default=new i.default({routes:[{path:"/",name:"Login",component:m.default},{path:"/signup",name:"SignUp",component:d.default},{path:"/home",name:"MainComponent",component:u.default}]})},cC2E:function(t,e,n){"use strict";e.a={name:"money",computed:{money:function(){return this.$store.state.money.toFixed(1)}},methods:{makeMoney:function(){this.$store.commit("increment")}}}},dzKz:function(t,e,n){"use strict";var o=n("sVz+"),s=n("ExI+"),r=n("VU/8"),a=r(o.a,s.a,!1,null,null,null);e.a=a.exports},gosb:function(t,e,n){"use strict";var o=n("pFqp"),s=n("o/O4"),r=n("VU/8"),a=r(o.a,s.a,!1,null,null,null);e.a=a.exports},"iJ+W":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("h1",[t._v(t._s(t.logoName))])])},s=[],r={render:o,staticRenderFns:s};e.a=r},kJRf:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("b-row",{staticClass:"mt-5"},[n("b-col",{staticClass:"text-center"},[n("Logo")],1)],1),t._v(" "),n("b-row",{staticClass:"mt-5"},[n("b-col",{attrs:{md:"1"}}),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{md:"2"}},[n("Money")],1),t._v(" "),n("b-col",{attrs:{md:"2"}}),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{md:"2"}},[n("Revenue")],1),t._v(" "),n("b-col",{attrs:{md:"2"}}),t._v(" "),n("b-col",{staticClass:"my-3",attrs:{md:"2"}},[n("Potions")],1),t._v(" "),n("b-col",{attrs:{md:"1"}})],1)],1)},s=[],r={render:o,staticRenderFns:s};e.a=r},lS0w:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Tzea"),s=n("kJRf"),r=n("VU/8"),a=r(o.a,s.a,!1,null,null,null);e.default=a.exports},"nKb+":function(t,e,n){"use strict";var o=n("2AE9"),s=n("gosb");e.a={name:"Login",components:{Logo:o.a,LoginForm:s.a}}},"o/O4":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("b-form",{on:{submit:t.onSubmit}},[n("b-form-group",{attrs:{label:"Email address:","label-for":"useremail",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"useremail",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Password:","label-for":"userpassword"}},[n("b-form-input",{attrs:{id:"userpassword",type:"password",required:"",placeholder:"Enter Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v("Login")])],1):t._e()],1)},s=[],r={render:o,staticRenderFns:s};e.a=r},pFqp:function(t,e,n){"use strict";var o=n("mvHQ"),s=n.n(o);e.a={name:"LoginForm",data:function(){return{form:{email:"",password:""},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(s()(this.form))}}}},qb6w:function(t,e){},rEm5:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("router-view")],1)},s=[],r={render:o,staticRenderFns:s};e.a=r},"sVz+":function(t,e,n){"use strict";e.a={name:"potions",computed:{potions:function(){return this.$store.state.potions.toFixed(0)}},methods:{makePotions:function(){this.$store.commit("incrementPotions")}}}},uqPT:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{on:{click:t.makeMoney}},[n("h3",{staticClass:"card-text text-center"},[n("font-awesome-icon",{attrs:{icon:"hand-holding-usd"}}),t._v(" "+t._s(t.money)+"\n  ")],1)])},s=[],r={render:o,staticRenderFns:s};e.a=r},xJD8:function(t,e,n){"use strict";e.a={name:"app"}},xJsL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("nKb+"),s=n("HuBD"),r=n("VU/8"),a=r(o.a,s.a,!1,null,null,null);e.default=a.exports},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c8ea111d6b42e3167dd2.js.map