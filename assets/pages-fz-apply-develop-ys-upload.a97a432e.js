import{k as s,T as a,L as e,m as r,M as l,q as o,o as t,b as u,a as i,w as n,x as d,f as m,Y as p,F as c,D as f,Z as _,H as y,B as g,C as h,h as b}from"./index.f8f0a8a6.js";import{_ as v}from"./u-navbar.1284843c.js";import{_ as j}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as w,a as P}from"./u-cell-group.c1b9a19e.js";import{_ as A}from"./u-switch.4eed8954.js";import{_ as T}from"./u-upload.bcce9b3d.js";import{_ as Y}from"./u-button.9b5620aa.js";import{_ as U}from"./u-calendar.e867b009.js";import{b as x}from"./develop.a9e15139.js";import{d as V}from"./dayjs.min.4485b413.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./u-line-progress.aa9a4d7b.js";const k=s({__name:"ys-upload",setup(s){const k=a(),D=e(),M=[],z=r(null),C=r(!1),O=r(!1),R=l({username:"",isPass:!0,ysAddress:[],yspassTime:V().format("YYYY-MM-DD")});o((s=>{s&&s.ysAddress&&(R.ysAddress=JSON.parse(s.ysAddress)),s&&s.username&&(R.username=s.username),s&&s.isPass&&(1==s.isPass?R.isPass=!0:2==s.isPass&&(R.isPass=!1))}));const H=(s,a,e)=>{const{data:{imageUrl:r}}=s;M.push(r)},S=(s,a,e)=>{const r=a.filter((s=>100==s.progress));R.ysAddress=r.map((s=>s.url.slice(f.ResourceUrl.length)))},q=async()=>{try{O.value=!0;const s=[...R.ysAddress,...M];if(!s||!s.length)throw D.showTips({title:"提交内容不能为空",type:"error"}),Error("提交内容不能为空");await x({isPass:R.isPass,username:R.username,zsAddress:s,zspassTime:R.yspassTime}),D.showTips({title:"上传成功"}),_("refresh"),setTimeout((()=>y()),500)}catch(s){O.value=!1}};return(s,a)=>{const e=g(h("u-navbar"),v),r=g(h("message"),j),l=g(h("u-cell-item"),w),o=g(h("u-switch"),A),_=g(h("u-upload"),T),y=g(h("u-cell-group"),P),x=g(h("u-button"),Y),D=b,M=g(h("u-calendar"),U);return t(),u(c,null,[i(e,{title:"上传预审表"}),i(r,{navbarHeight:48}),i(D,{class:"container"},{default:n((()=>[i(y,null,{default:n((()=>[i(l,{title:"预审日期",arrow:!1,value:d(R).yspassTime,onClick:a[0]||(a[0]=s=>C.value=!0)},null,8,["value"]),i(l,{title:"预审状态",arrow:!1},{"right-icon":n((()=>[i(o,{modelValue:d(R).isPass,"onUpdate:modelValue":a[1]||(a[1]=s=>d(R).isPass=s),size:"40"},null,8,["modelValue"])])),_:1}),i(l,{title:"上传预审表",arrow:!1},{label:n((()=>[i(_,{ref_key:"uploadRef",ref:z,name:"image",action:d(f).UploadImgUrl,"auto-upload":!1,header:{Authorization:d(k).token},"file-list":d(R).ysAddress.map((s=>({url:d(f).ResourceUrl+s}))),onOnSuccess:H,onOnRemove:S,onOnUploaded:q},null,8,["action","header","file-list"])])),_:1})])),_:1}),i(D,{class:"fixed bottom-0 w-full"},{default:n((()=>[i(x,{loading:d(O),type:"primary",onClick:a[2]||(a[2]=s=>d(z).upload())},{default:n((()=>[m("上传")])),_:1},8,["loading"])])),_:1})])),_:1}),i(M,{modelValue:d(C),"onUpdate:modelValue":a[3]||(a[3]=s=>p(C)?C.value=s:null),onChange:a[4]||(a[4]=s=>d(R).yspassTime=s.result),"max-date":d(V)().add(1,"y").format("YYYY-MM-DD")},null,8,["modelValue","max-date"])],64)}}});export{k as default};