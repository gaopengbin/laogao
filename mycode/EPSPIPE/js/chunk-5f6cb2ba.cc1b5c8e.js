(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6cb2ba"],{1628:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=Object(c["createElementVNode"])("h2",null,"说明：",-1),l=Object(c["createElementVNode"])("table",{class:"el-table"},[Object(c["createElementVNode"])("tbody",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,"组件位置： @/components/IconFont")]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,"创建原因：方便统一管理使用 iconfont.cn 上 js 资源图标")])])],-1),r=Object(c["createElementVNode"])("h3",null,"使用方法：",-1),a=Object(c["createElementVNode"])("table",{class:"el-table"},[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,"1、iconfont.cn 上生成 js 资源。")]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,"2、@/config/settings.ts 文件中配置 iconfont.cn 生成的js文件地址。")]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,"3、使用Demo：")]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,"import IconFont from '@/components/IconFont';")]),Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("td",null,'<IconFont type="svg文件名" class="" style=""/>')])],-1),d=Object(c["createElementVNode"])("h3",null,"Demo：",-1);function s(e,t,n,s,b,i){var u=Object(c["resolveComponent"])("el-alert"),m=Object(c["resolveComponent"])("IconFont"),j=Object(c["resolveComponent"])("el-card");return Object(c["openBlock"])(),Object(c["createBlock"])(j,{shadow:"never",class:"cus-card"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{title:"使用此组件需要配置 ‘@/config/settings.ts’ 中 ‘iconfontUrl’ 参数。",type:"warning"}),o,l,r,a,d,Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(m,{type:"icon-epsgis-huizhi"})])]})),_:1})}var b={class:"svg-icon","aria-hidden":"true"},i=["xlink:href"];function u(e,t,n,o,l,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",b,[Object(c["createElementVNode"])("use",{"xlink:href":"#".concat(e.type)},null,8,i)])}var m=n("0e30");function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e[t];if("string"===typeof n&&n.length&&!document.getElementById(n)){var c=document.createElement("script");c.setAttribute("id",n),c.setAttribute("src",n),c.setAttribute("data-namespace",n),e.length>t+1&&(c.onload=function(){j(e,t+1)},c.onerror=function(){j(e,t+1)}),document.body.appendChild(c)}else e.length>t+1&&j(e,t+1)}j(m["a"].iconfontUrl.reverse());var O=Object(c["defineComponent"])({name:"IconFont",props:{type:{type:String,required:!0}}}),p=(n("26b6"),n("6b0d")),f=n.n(p);const E=f()(O,[["render",u],["__scopeId","data-v-cad998f4"]]);var N=E,V=N,v=Object(c["defineComponent"])({name:"IconFontTest",components:{IconFont:V}});const h=f()(v,[["render",s]]);t["default"]=h},"26b6":function(e,t,n){"use strict";n("73ef")},"73ef":function(e,t,n){}}]);