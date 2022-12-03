(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6280b459"],{"0de4":function(e,t,r){"use strict";r.r(t);var o=r("7a23"),n={class:"main"},a={class:"title"},c={class:"text-align-right"};function s(e,t,r,s,l,i){var u=Object(o["resolveComponent"])("el-input"),d=Object(o["resolveComponent"])("el-form-item"),m=Object(o["resolveComponent"])("el-button"),b=Object(o["resolveComponent"])("router-link"),p=Object(o["resolveComponent"])("el-alert"),f=Object(o["resolveComponent"])("el-form");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("h1",a,Object(o["toDisplayString"])(e.t("page.user.register.form.title")),1),Object(o["createVNode"])(f,{model:e.modelRef,rules:e.rulesRef,ref:"formRef"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{label:"",prop:"username"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{modelValue:e.modelRef.username,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.modelRef.username=t}),placeholder:e.t("page.user.register.form-item-username"),onKeydown:Object(o["withKeys"])(e.handleSubmit,["enter"])},null,8,["modelValue","placeholder","onKeydown"])]})),_:1}),Object(o["createVNode"])(d,{label:"",prop:"password"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{type:"password",modelValue:e.modelRef.password,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.modelRef.password=t}),placeholder:e.t("page.user.register.form-item-password"),onKeydown:Object(o["withKeys"])(e.handleSubmit,["enter"])},null,8,["modelValue","placeholder","onKeydown"])]})),_:1}),Object(o["createVNode"])(d,{label:"",prop:"confirm"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{type:"password",modelValue:e.modelRef.confirm,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.modelRef.confirm=t}),placeholder:e.t("page.user.register.form-item-confirmpassword"),onKeydown:Object(o["withKeys"])(e.handleSubmit,["enter"])},null,8,["modelValue","placeholder","onKeydown"])]})),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,{type:"primary",class:"submit",onClick:e.handleSubmit,loading:e.submitLoading},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.t("page.user.register.form.btn-submit")),1)]})),_:1},8,["onClick","loading"]),Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(b,{to:"/user/login"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.t("page.user.register.form.btn-jump")),1)]})),_:1})])]})),_:1}),""===e.errorMsg||"undefined"===typeof e.errorMsg||e.submitLoading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:0,title:e.errorMsg,type:"error","show-icon":"",closable:!1},null,8,["title"]))]})),_:1},8,["model","rules"])])}var l=r("1da1"),i=(r("96cf"),r("d3b7"),r("ac1f"),r("5319"),r("6c02")),u=r("5502"),d=r("47e2"),m=r("3ef4"),b=Object(o["defineComponent"])({name:"UserRegister",setup:function(){var e=Object(i["d"])(),t=Object(u["b"])(),r=Object(d["b"])(),n=r.t,a=Object(o["reactive"])({username:"",password:"",confirm:""}),c=Object(o["reactive"])({username:[{required:!0,message:n("page.user.register.form-item-username.required")}],password:[{required:!0,message:n("page.user.register.form-item-password.required")}],confirm:[{validator:function(e,t,r){return""===t?Promise.reject(n("page.user.register.form-item-password.required")):t!==a.password?Promise.reject(n("page.user.register.form-item-confirmpassword.compare")):Promise.resolve()}}]}),s=Object(o["ref"])(),b=Object(o["ref"])(!1),p=function(){var r=Object(l["a"])(regeneratorRuntime.mark((function r(){var o,c,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return b.value=!0,r.prev=1,r.next=4,null===(o=s.value)||void 0===o?void 0:o.validate();case 4:if(c=r.sent,!0!==c){r.next=10;break}return r.next=8,t.dispatch("userregister/register",a);case 8:l=r.sent,!0===l&&(m["a"].success(n("page.user.register.form.register-success")),e.replace("/user/login"));case 10:r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](1),console.log("error",r.t0),m["a"].warning(n("app.global.form.validatefields.catch"));case 16:b.value=!1;case 17:case"end":return r.stop()}}),r,null,[[1,12]])})));return function(){return r.apply(this,arguments)}}(),f=Object(o["computed"])((function(){return t.state.userregister.errorMsg}));return{t:n,modelRef:a,rulesRef:c,formRef:s,submitLoading:b,handleSubmit:p,errorMsg:f}}}),p=(r("bba4"),r("6b0d")),f=r.n(p);const g=f()(b,[["render",s],["__scopeId","data-v-146866df"]]);t["default"]=g},"9aec":function(e,t,r){},bba4:function(e,t,r){"use strict";r("9aec")}}]);