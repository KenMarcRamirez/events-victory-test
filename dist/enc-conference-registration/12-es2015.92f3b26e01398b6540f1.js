(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7P3v":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),a=u("6l8z"),b=u("XRsc"),i=u("iInd"),r=u("mrSG");class s{constructor(l){this.api=l}ngOnInit(){const l=window.innerWidth;this.showBack=!(l<768),this.getMemberSummary()}getMemberSummary(){return r.a(this,void 0,void 0,(function*(){try{const l=yield this.api.getRegistrationInformation(localStorage.getItem("regCode"));this.memberInformation=l,console.log(l)}catch(l){console.log(l)}}))}postPayment(l){return r.a(this,void 0,void 0,(function*(){try{var n=new FormData;n.append("gw",l),n.append("reg_id",this.memberInformation.reg_id),n.append("event_id",this.memberInformation.event_id),n.append("member_id",this.memberInformation.member_id),n.append("amt","2000.00");const u=yield this.api.processPayment(n);if(console.log(u),"success"===u.status){const l=u.url.replace("location:","");window.open(l,"_self")}}catch(u){console.log(u)}}))}}var c=u("oZWX"),m=t.ob({encapsulation:0,styles:[[".total-payment[_ngcontent-%COMP%]{float:right}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.payment-container[_ngcontent-%COMP%]{text-align:-webkit-center}.group-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.group-buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:70%;margin:10px;text-align:center;padding:15px 20px;font-family:Avenir,serif}button[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{float:left;height:20px}"]],data:{}});function p(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"app-banner",[],null,null,null,a.b,a.a)),t.pb(1,114688,null,0,b.a,[],null,null),(l()(),t.qb(2,0,null,null,41,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,40,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,22,"div",[["class","col-lg-6 pt-lg-50 pr-lg-50 pl-30"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"p",[["class","pl-lg-100 section-title-black pt-30"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Summary"])),(l()(),t.qb(7,0,null,null,19,"div",[["class","pt-20 pl-lg-100 format-content font-work-sans"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(9,null,["Name: ",""])),(l()(),t.qb(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(11,null,["Age: ",""])),(l()(),t.qb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(13,null,["Contact Number: ",""])),(l()(),t.qb(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(15,null,["Email: ",""])),(l()(),t.qb(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(17,null,["Nation: ",""])),(l()(),t.qb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(19,null,["Local Center: ",""])),(l()(),t.qb(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Year Level: Grade 12"])),(l()(),t.qb(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["School: University of Santo Tomas"])),(l()(),t.qb(24,0,null,null,0,"hr",[["style","border-top: dotted 1px;"]],null,null,null,null,null)),(l()(),t.qb(25,0,null,null,1,"p",[["class","sub-section-title-red total-payment pb-20"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Registration Fee: PHP 2000"])),(l()(),t.qb(27,0,null,null,16,"div",[["class","col-lg-6 payment-container"]],null,null,null,null,null)),(l()(),t.qb(28,0,null,null,1,"p",[["class","pt-lg-80 format-content pt-20 font-work-sans-bold"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Please select a payment option:"])),(l()(),t.qb(30,0,null,null,13,"div",[["class","group-buttons"]],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,3,"button",[["class","btn btn-gray"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.postPayment("paypal")&&t),t}),null,null)),(l()(),t.qb(32,0,null,null,0,"img",[["alt",""],["src","assets/images/paypal.png"]],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Paypal"])),(l()(),t.qb(35,0,null,null,3,"button",[["class","btn btn-gray"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.postPayment("pesopay")&&t),t}),null,null)),(l()(),t.qb(36,0,null,null,0,"img",[["alt",""],["src","assets/images/credit-card.png"]],null,null,null,null,null)),(l()(),t.qb(37,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Credit Card"])),(l()(),t.qb(39,0,null,null,4,"button",[["class","btn btn-gray"],["routerLink","/payment/cash"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Cb(l,40).onClick()&&e),e}),null,null)),t.pb(40,16384,null,0,i.l,[i.k,i.a,[8,null],t.C,t.k],{routerLink:[0,"routerLink"]},null),(l()(),t.qb(41,0,null,null,0,"img",[["alt",""],["src","assets/images/e-wallet.png"]],null,null,null,null,null)),(l()(),t.qb(42,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Cash"]))],(function(l,n){l(n,1,0),l(n,40,0,"/payment/cash")}),(function(l,n){var u=n.component;l(n,9,0,null==u.memberInformation?null:u.memberInformation.name_full),l(n,11,0,null==u.memberInformation?null:u.memberInformation.age),l(n,13,0,null==u.memberInformation?null:u.memberInformation.mobile),l(n,15,0,null==u.memberInformation?null:u.memberInformation.email),l(n,17,0,null==u.memberInformation?null:u.memberInformation.nation),l(n,19,0,null==u.memberInformation?null:u.memberInformation.congregation_id)}))}function g(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"app-payment",[],null,null,null,p,m)),t.pb(1,114688,null,0,s,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var d=t.mb("app-payment",s,g,{},{},[]),f=u("9AJC"),y=u("SVse"),A=u("s7LF"),q=u("G0yt");class h{}var v=u("j1ZV");u.d(n,"PaymentModuleNgFactory",(function(){return w}));var w=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[o.a,d,f.a,f.b,f.h,f.i,f.e,f.f,f.g]],[3,t.j],t.w]),t.Ab(4608,y.m,y.l,[t.t,[2,y.B]]),t.Ab(4608,A.t,A.t,[]),t.Ab(4608,q.w,q.w,[t.j,t.q,q.lb,q.x]),t.Ab(4608,A.d,A.d,[]),t.Ab(1073742336,y.b,y.b,[]),t.Ab(1073742336,i.n,i.n,[[2,i.t],[2,i.k]]),t.Ab(1073742336,h,h,[]),t.Ab(1073742336,q.d,q.d,[]),t.Ab(1073742336,q.g,q.g,[]),t.Ab(1073742336,q.h,q.h,[]),t.Ab(1073742336,q.l,q.l,[]),t.Ab(1073742336,q.m,q.m,[]),t.Ab(1073742336,A.s,A.s,[]),t.Ab(1073742336,A.i,A.i,[]),t.Ab(1073742336,q.s,q.s,[]),t.Ab(1073742336,q.u,q.u,[]),t.Ab(1073742336,q.y,q.y,[]),t.Ab(1073742336,q.A,q.A,[]),t.Ab(1073742336,q.F,q.F,[]),t.Ab(1073742336,q.I,q.I,[]),t.Ab(1073742336,q.L,q.L,[]),t.Ab(1073742336,q.O,q.O,[]),t.Ab(1073742336,q.R,q.R,[]),t.Ab(1073742336,q.W,q.W,[]),t.Ab(1073742336,q.Z,q.Z,[]),t.Ab(1073742336,q.ab,q.ab,[]),t.Ab(1073742336,q.bb,q.bb,[]),t.Ab(1073742336,q.z,q.z,[]),t.Ab(1073742336,A.q,A.q,[]),t.Ab(1073742336,v.a,v.a,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,i.i,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);