(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NUKG:function(n,t,l){"use strict";l.d(t,"a",(function(){return i}));var e=l("8Y7J");let i=(()=>{class n{constructor(){}}return n.baseUrl="http://10.251.109.13/events2/api",n.mediaUrl="http://10.251.109.13/",n.EMAIL_REGEX=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n.PHONE_REGEX=/^(9)\d{9}$/,n.ngInjectableDef=e.Mb({factory:function(){return new n},token:n,providedIn:"root"}),n})()},"Xf/P":function(n,t,l){"use strict";l.r(t);var e=l("8Y7J");class i{}var o=l("pMnS"),u=l("iInd"),a=l("SVse"),r=l("mrSG");class s{constructor(n,t,l,e){this.activatedRoute=n,this.api=t,this.formBuilder=l,this.router=e,this.dataForm=this.formBuilder.group({congregation_id:[""],column:[""],value:[""],src:[""]}),this.activatedRoute.params.subscribe(n=>{console.log(n),this.church=n.slug,this.getCongregation()}),this.activatedRoute.queryParams.subscribe(n=>r.a(this,void 0,void 0,(function*(){this.contactInformation=n.contact,yield this.checkContactType(),this.dataForm.get("value").setValue(this.contactInformation),this.dataForm.get("column").setValue(this.contactType)})))}ngOnInit(){}checkContactType(){return r.a(this,void 0,void 0,(function*(){this.contactType=isNaN(this.contactInformation)?"email":"mobile"}))}getCongregation(){return r.a(this,void 0,void 0,(function*(){try{const n=yield this.api.getCongregations();this.selectedChurch=n.find(n=>{if(this.church===n.congregation)return n}),this.dataForm.get("congregation_id").setValue(this.selectedChurch.congregation_id)}catch(n){console.log(n)}}))}sendForOTP(){return r.a(this,void 0,void 0,(function*(){var n=new FormData;n.append("congregation_id",this.dataForm.get("congregation_id").value),n.append("column",this.dataForm.get("column").value),n.append("value",this.dataForm.get("value").value),n.append("src","pre-register"===localStorage.getItem("source")?"1":"2");try{this.isLoading=!0;const t=yield this.api.postOTP(n);if(this.isLoading=!1,console.log("post otp",t),"success"===t.status){localStorage.setItem("otp_data",JSON.stringify(t));const n=[{contactMethod:this.dataForm.get("column").value},{contactDetails:this.dataForm.get("value").value},{congregation_id:this.dataForm.get("congregation_id").value}];this.router.navigate(["/otp/contact-verification-code/"+this.church],{queryParams:{contact:JSON.stringify(n)}})}}catch(t){console.log(t),this.isLoading=!1}}))}}var c=l("oZWX"),d=l("s7LF"),b=e.ob({encapsulation:0,styles:[[".flex-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.message-alignment[_ngcontent-%COMP%]{width:50%;text-align:center}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.dots[_ngcontent-%COMP%]{list-style-type:none;background:#fff;padding:20px 10px 20px 20px;margin:0;position:absolute;right:10px;top:40px}.dot[_ngcontent-%COMP%]{display:block;border-radius:100%;width:12px;height:12px;background:#ededed;cursor:pointer;color:#fff;font-size:8px;position:relative;z-index:2;border:1px solid gray}.line[_ngcontent-%COMP%]{position:relative;background:#d4d3d3;width:3px;height:25px;margin:0 4px}li[_ngcontent-%COMP%]:nth-child(3){background:gray}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;z-index:3;font-size:8px;top:-4px;padding-left:3px;color:#fff}.spinner-container[_ngcontent-%COMP%]{flex-shrink:0;width:100%;height:100%;-webkit-transition-property:-webkit-transform;transition-property:transform,-webkit-transform;position:fixed;top:0;background-color:gray;opacity:.6}.spinner-border[_ngcontent-%COMP%]{place-self:center;width:80px;height:80px}"]],data:{}});function p(n){return e.Ib(0,[(n()(),e.qb(0,0,null,null,3,"div",[["class","d-flex justify-content-center spinner-container"]],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,2,"div",[["class","spinner-border"],["role","status"]],null,null,null,null,null)),(n()(),e.qb(2,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Loading..."]))],null,null)}function g(n){return e.Ib(0,[(n()(),e.qb(0,0,null,null,25,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,24,"div",[["class","flex-container flex-center mt-lg-100"]],null,null,null,null,null)),(n()(),e.qb(2,0,null,null,7,"ul",[["class","dots"]],null,null,null,null,null)),(n()(),e.qb(3,0,null,null,0,"li",[["class","dot"]],null,null,null,null,null)),(n()(),e.qb(4,0,null,null,0,"li",[["class","line"]],null,null,null,null,null)),(n()(),e.qb(5,0,null,null,2,"li",[["class","dot"]],null,null,null,null,null)),(n()(),e.qb(6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["2"])),(n()(),e.qb(8,0,null,null,0,"li",[["class","line"]],null,null,null,null,null)),(n()(),e.qb(9,0,null,null,0,"li",[["class","dot"]],null,null,null,null,null)),(n()(),e.qb(10,0,null,null,2,"div",[["class","pt-100 pb-50 message-alignment"]],null,null,null,null,null)),(n()(),e.qb(11,0,null,null,1,"p",[["class","font-avenir"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["ENC will send 6-digit One-Time-Pin (OTP) to the contact detail you provided."])),(n()(),e.qb(13,0,null,null,4,"div",[["class","pt-50 pb-50 message-alignment"]],null,null,null,null,null)),(n()(),e.qb(14,0,null,null,1,"p",[["class","font-avenir"]],null,null,null,null,null)),(n()(),e.Hb(15,null,["Is this your ","?"])),(n()(),e.qb(16,0,null,null,1,"p",[["class","font-avenir"]],null,null,null,null,null)),(n()(),e.Hb(17,null,["",""])),(n()(),e.qb(18,0,null,null,2,"div",[["class","pt-50"]],null,null,null,null,null)),(n()(),e.qb(19,0,null,null,1,"button",[["class","btn btn-blue"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.sendForOTP()&&e),e}),null,null)),(n()(),e.Hb(20,null,["",""])),(n()(),e.qb(21,0,null,null,4,"a",[["class","pt-10 section-caption"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,l){var i=!0;return"click"===t&&(i=!1!==e.Cb(n,22).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&i),i}),null,null)),e.pb(22,671744,null,0,u.m,[u.k,u.a,a.h],{routerLink:[0,"routerLink"]},null),(n()(),e.qb(23,0,null,null,2,"u",[],null,null,null,null,null)),(n()(),e.qb(24,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Change contact detail"])),(n()(),e.fb(16777216,null,null,1,null,p)),e.pb(27,16384,null,0,a.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,22,0,"/otp/contact-information/"+l.church),n(t,27,0,l.isLoading)}),(function(n,t){var l=t.component;n(t,15,0,"email"===l.contactType?"email address":"phone number"),n(t,17,0,l.contactInformation),n(t,20,0,l.isLoading?"Processing...":"Yes"),n(t,21,0,e.Cb(t,22).target,e.Cb(t,22).href)}))}function h(n){return e.Ib(0,[(n()(),e.qb(0,0,null,null,1,"app-contact-verification",[],null,null,null,g,b)),e.pb(1,114688,null,0,s,[u.a,c.a,d.d,u.k],null,null)],(function(n,t){n(t,1,0)}),null)}var f=e.mb("app-contact-verification",s,h,{},{},[]),v=l("9AJC"),m=l("G0yt");class y{}var A=l("j1ZV");l.d(t,"ContactVerificationModuleNgFactory",(function(){return P}));var P=e.nb(i,[],(function(n){return e.zb([e.Ab(512,e.j,e.Y,[[8,[o.a,f,v.a,v.b,v.h,v.i,v.e,v.f,v.g]],[3,e.j],e.w]),e.Ab(4608,a.m,a.l,[e.t,[2,a.B]]),e.Ab(4608,d.t,d.t,[]),e.Ab(4608,m.w,m.w,[e.j,e.q,m.lb,m.x]),e.Ab(4608,d.d,d.d,[]),e.Ab(1073742336,a.b,a.b,[]),e.Ab(1073742336,u.n,u.n,[[2,u.t],[2,u.k]]),e.Ab(1073742336,y,y,[]),e.Ab(1073742336,m.d,m.d,[]),e.Ab(1073742336,m.g,m.g,[]),e.Ab(1073742336,m.h,m.h,[]),e.Ab(1073742336,m.l,m.l,[]),e.Ab(1073742336,m.m,m.m,[]),e.Ab(1073742336,d.s,d.s,[]),e.Ab(1073742336,d.i,d.i,[]),e.Ab(1073742336,m.s,m.s,[]),e.Ab(1073742336,m.u,m.u,[]),e.Ab(1073742336,m.y,m.y,[]),e.Ab(1073742336,m.A,m.A,[]),e.Ab(1073742336,m.F,m.F,[]),e.Ab(1073742336,m.I,m.I,[]),e.Ab(1073742336,m.L,m.L,[]),e.Ab(1073742336,m.O,m.O,[]),e.Ab(1073742336,m.R,m.R,[]),e.Ab(1073742336,m.W,m.W,[]),e.Ab(1073742336,m.Z,m.Z,[]),e.Ab(1073742336,m.ab,m.ab,[]),e.Ab(1073742336,m.bb,m.bb,[]),e.Ab(1073742336,m.z,m.z,[]),e.Ab(1073742336,d.q,d.q,[]),e.Ab(1073742336,A.a,A.a,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,u.i,(function(){return[[{path:"",component:s}]]}),[])])}))},mrSG:function(n,t,l){"use strict";function e(n,t,l,e){return new(l||(l=Promise))((function(i,o){function u(n){try{r(e.next(n))}catch(t){o(t)}}function a(n){try{r(e.throw(n))}catch(t){o(t)}}function r(n){var t;n.done?i(n.value):(t=n.value,t instanceof l?t:new l((function(n){n(t)}))).then(u,a)}r((e=e.apply(n,t||[])).next())}))}l.d(t,"a",(function(){return e}))},oZWX:function(n,t,l){"use strict";l.d(t,"a",(function(){return a}));var e=l("mrSG"),i=l("NUKG"),o=l("8Y7J"),u=l("IheW");let a=(()=>{class n{constructor(n){this.http=n}getCongregations(n=""){return e.a(this,void 0,void 0,(function*(){return this.http.get(`${i.a.baseUrl}/congregations?type=${n}`).toPromise()}))}getCampus(){return e.a(this,void 0,void 0,(function*(){return this.http.get(`${i.a.baseUrl}/campus`).toPromise()}))}getNation(){return e.a(this,void 0,void 0,(function*(){return this.http.get(`${i.a.baseUrl}/countries`).toPromise()}))}postOTP(n){return e.a(this,void 0,void 0,(function*(){return console.log(n),this.http.post(`${i.a.baseUrl}/generate_otp`,n).toPromise()}))}validateOTP(n){return e.a(this,void 0,void 0,(function*(){return this.http.post(`${i.a.baseUrl}/validate_otp`,n).toPromise()}))}validateRegistrationCode(n){return e.a(this,void 0,void 0,(function*(){return this.http.post(`${i.a.baseUrl}/validate_registration`,n).toPromise()}))}getRegistrationInformation(n){return e.a(this,void 0,void 0,(function*(){return this.http.get(`${i.a.baseUrl}/view_registration?reg_code=${n}`).toPromise()}))}getPaymentHistory(n){return e.a(this,void 0,void 0,(function*(){return this.http.get(`${i.a.baseUrl}/payment_history?reg_code=${n}&event_id=000001`).toPromise()}))}processPayment(n){return e.a(this,void 0,void 0,(function*(){return this.http.post(`${i.a.baseUrl}/process_payment`,n).toPromise()}))}register(n){return e.a(this,void 0,void 0,(function*(){return this.http.post(`${i.a.baseUrl}/save_registration`,n).toPromise()}))}}return n.ngInjectableDef=o.Mb({factory:function(){return new n(o.Nb(u.c))},token:n,providedIn:"root"}),n})()}}]);