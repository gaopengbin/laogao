(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b3f8a0c"],{1271:function(e,t,c){"use strict";c("ab78")},"466d":function(e,t,c){"use strict";var n=c("c65b"),r=c("d784"),o=c("825a"),l=c("50c4"),a=c("577e"),u=c("1d80"),d=c("dc4a"),b=c("8aa5"),s=c("14c3");r("match",(function(e,t,c){return[function(t){var c=u(this),r=void 0==t?void 0:d(t,e);return r?n(r,t,c):new RegExp(t)[e](a(c))},function(e){var n=o(this),r=a(e),u=c(t,n,r);if(u.done)return u.value;if(!n.global)return s(n,r);var d=n.unicode;n.lastIndex=0;var i,j=[],O=0;while(null!==(i=s(n,r))){var v=a(i[0]);j[O]=v,""===v&&(n.lastIndex=b(r,l(n.lastIndex),d)),O++}return 0===O?null:j}]}))},ab78:function(e,t,c){},caaf:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-6c0773aa"),e=e(),Object(n["popScopeId"])(),e},o=r((function(){return Object(n["createElementVNode"])("div",{style:{clear:"both"}},null,-1)})),l=r((function(){return Object(n["createElementVNode"])("table",{class:"el-table"},[Object(n["createElementVNode"])("tbody",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",null,"组件位置： @/components/IconSvg")]),Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",null,"创建原因：方便自定义使用svg图标")])])],-1)})),a=r((function(){return Object(n["createElementVNode"])("h3",null,"使用方法：",-1)})),u={class:"el-table"},d=Object(n["createTextVNode"])(" 1、下载或制作svg文件，存放到 "),b=Object(n["createTextVNode"])("@/assets/iconsvg"),s=Object(n["createTextVNode"])("目录下，自己可以对此目录下svg进行删减。 "),i=Object(n["createTextVNode"])(" 2、项目会根据 "),j=Object(n["createTextVNode"])("@/assets/iconsvg/svgo.yml"),O=Object(n["createTextVNode"])(" 配置自动压缩精简svg，也可以独立运行 "),v=Object(n["createTextVNode"])("yarn svgo"),m=Object(n["createTextVNode"])(" 或 "),f=Object(n["createTextVNode"])("npm run svgo"),p=Object(n["createTextVNode"])("压缩精简svg "),N=r((function(){return Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",null,"3、使用Demo：")],-1)})),V=r((function(){return Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",null,"import IconSvg from '@/components/IconSvg';")],-1)})),g=r((function(){return Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",null,'<IconSvg type="svg文件名" class="" style=""/>')],-1)}));function E(e,t,c,r,E,x){var h=Object(n["resolveComponent"])("icon-svg"),w=Object(n["resolveComponent"])("el-popover"),y=Object(n["resolveComponent"])("el-divider"),C=Object(n["resolveComponent"])("el-tag"),I=Object(n["resolveComponent"])("el-card");return Object(n["openBlock"])(),Object(n["createBlock"])(I,{shadow:"never",class:"cus-card"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.svgIcons,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"list",key:t},[Object(n["createVNode"])(w,{trigger:"hover",placement:"top-start",width:"300"},{reference:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(h,{type:e||"",style:{"font-size":"30px"}},null,8,["type"]),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e),1)])]})),default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(' <icon-svg type="'+Object(n["toDisplayString"])(e)+'" /> ',1)]})),_:2},1024)])})),128)),o,Object(n["createVNode"])(y),Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(e.t("page.icon.svg.remark.title")),1),l,a,Object(n["createElementVNode"])("table",u,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",null,[d,Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])((function(){return[b]})),_:1}),s])]),Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",null,[i,Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])((function(){return[j]})),_:1}),O,Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])((function(){return[v]})),_:1}),m,Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])((function(){return[f]})),_:1}),p])]),N,V,g])]})),_:1})}c("d3b7"),c("ddb0"),c("d81d"),c("ac1f"),c("466d");var x=c("47e2"),h=c("d76d"),w=function(e){return e.keys()},y=w(c("742a")).map((function(e){var t=e.match(/\.\/(.*)\.svg/);return t&&t[1]})),C=Object(n["defineComponent"])({components:{IconSvg:h["a"]},setup:function(){var e=Object(x["b"])(),t=e.t;return{t:t,svgIcons:y}}}),I=(c("1271"),c("6b0d")),k=c.n(I);const T=k()(C,[["render",E],["__scopeId","data-v-6c0773aa"]]);t["default"]=T}}]);