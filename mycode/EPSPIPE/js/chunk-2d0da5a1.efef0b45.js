(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da5a1"],{"6add":function(e,t,o){"use strict";o.r(t);var c=o("7a23"),a=Object(c["createTextVNode"])("上传"),n=Object(c["createElementVNode"])("div",{class:"el-upload__text"},[Object(c["createTextVNode"])(" Drop file here or "),Object(c["createElementVNode"])("em",null,"click to upload")],-1),r={class:"el-upload__tip"},l=Object(c["createElementVNode"])("div",{class:"el-upload__text"},[Object(c["createTextVNode"])(" Drop file here or "),Object(c["createElementVNode"])("em",null,"click to upload")],-1),d=Object(c["createTextVNode"])("选择文件"),u=Object(c["createTextVNode"])("选择图片"),p=Object(c["createTextVNode"])("选择文件夹");function i(e,t,o,i,s,b){var j=Object(c["resolveComponent"])("el-button"),O=Object(c["resolveComponent"])("upload-filled"),f=Object(c["resolveComponent"])("el-icon"),m=Object(c["resolveComponent"])("el-progress"),h=Object(c["resolveComponent"])("el-upload"),C=Object(c["resolveComponent"])("uploader-unsupport"),N=Object(c["resolveComponent"])("uploader-btn"),V=Object(c["resolveComponent"])("uploader-drop"),v=Object(c["resolveComponent"])("uploader-list"),x=Object(c["resolveComponent"])("uploader");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(j,{onClick:i.uploadFile},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["onClick"]),Object(c["createVNode"])(h,{class:"upload-demo",drag:"",multiple:"","file-list":i.fileList,"auto-upload":!1,accept:e.acceptType,"on-change":i.handleChange},{tip:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",r,[i.percentage>0?(Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:0,percentage:i.percentage},null,8,["percentage"])):Object(c["createCommentVNode"])("",!0)])]})),default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{class:"el-icon--upload"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O)]})),_:1}),n]})),_:1},8,["file-list","accept","on-change"]),Object(c["createVNode"])(x,{options:e.options,class:"uploader-example"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(C),Object(c["createVNode"])(V,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{class:"el-icon--upload"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(O)]})),_:1}),l,Object(c["createVNode"])(N,null,{default:Object(c["withCtx"])((function(){return[d]})),_:1}),Object(c["createVNode"])(N,{attrs:e.attrs},{default:Object(c["withCtx"])((function(){return[u]})),_:1},8,["attrs"]),Object(c["createVNode"])(N,{directory:!0},{default:Object(c["withCtx"])((function(){return[p]})),_:1})]})),_:1}),Object(c["createVNode"])(v)]})),_:1},8,["options"])],64)}o("d3b7"),o("159b"),o("b680"),o("a434");var s=o("3ef4"),b=o("bc3a"),j=o.n(b),O={name:"fileupload",setup:function(e,t){var o=Object(c["reactive"])([]),a=function(e,t){console.log("file---",e),console.log("fileList---",t)},n=Object(c["ref"])(0),r=function(){var e=new FormData;o.forEach((function(t){e.append("files[]",t["raw"])}));var c=t.attrs.parameter;e.append("iid",c.iid),e.append("type","授权委托证明"),e.append("userid","cs03");var a={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){var t=100*(e.loaded/e.total).toFixed(2);n.value=t}};j.a.post("http://39.152.31.83:11380/SG_ERP_BJGW/EPSGISAPI/epsoffice/AttachementTransfer/AttachementUpload",e,a).then((function(e){e.data.success?(s["a"].success(e.data.msg),n.value=0,o.splice(0,o.length),t.emit("afterUpload")):s["a"].error(e.data.msg)}))};return{fileList:o,handleChange:a,uploadFile:r,percentage:n}}},f=o("6b0d"),m=o.n(f);const h=m()(O,[["render",i]]);t["default"]=h}}]);