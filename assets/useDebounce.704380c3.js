import{k as e,m as s,q as a,L as t,T as o,o as i,c as n,x as l,B as u,C as m,D as c}from"./index.f8f0a8a6.js";import{_ as r}from"./u-upload.bcce9b3d.js";const p=e({__name:"index",props:{fileList:null},emits:["uploadSuccess","imgRemove"],setup(e,{emit:p}){const d=e;let f=s([]);a((async()=>{d.fileList&&setTimeout((()=>{f.value=d.fileList}),500)})),t();const g=o().token,h=e=>{p("uploadSuccess",e.data.imageUrl)},v=e=>{p("imgRemove",e)};return(e,s)=>{const a=u(m("u-upload"),r);return i(),n(a,{action:l(c).UploadImgUrl,header:{Authorization:l(g)},name:"image","file-list":l(f),onOnSuccess:h,onOnRemove:v},null,8,["action","header","file-list"])}}});function d(e,s){let a;return function(...t){a&&clearTimeout(a),a=setTimeout((()=>e.apply(this,t)),s)}}export{p as _,d};
