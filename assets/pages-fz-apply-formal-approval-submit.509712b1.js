import{k as a,L as e,T as s,m as l,q as t,o as r,b as o,a as u,x as i,w as n,f as p,F as m,D as d,H as c,Z as f,B as v,C as _,h as b}from"./index.7dddb93e.js";import{_ as g}from"./u-navbar.2247389e.js";import{_ as h}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as j}from"./u-upload.fc59abfe.js";import{_ as y,a as x}from"./u-cell-group.3ff6fc80.js";import{_ as w}from"./u-button.7f757efe.js";import{u as k}from"./formal-approval.c5a8d656.js";import{d as A}from"./dayjs.min.4485b413.js";import{u as U,a as O}from"./committee-approval.6b58d74e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./u-line-progress.c40d9c0e.js";const D=a({__name:"submit",setup(a){const D=e(),R=s(),S=l([]),Y=[],T=l(""),B=l(null),C=l(!1),H=l("0"),M={0:"上传《党员基本情况登记表》",1:"上传《党员入党志愿书》",2:"上传《预备党员考察表》"};t((a=>{(null==a?void 0:a.address)&&(S.value=JSON.parse(a.address)),(null==a?void 0:a.username)&&(T.value=a.username),(null==a?void 0:a.type)&&(H.value=a.type)}));const q=(a,e,s)=>{const l=e.filter((a=>100==a.progress));S.value=l.map((a=>a.url.slice(d.ResourceUrl.length)))},z=(a,e,s)=>{const{data:{imageUrl:l}}=a;Y.push(l)},E=async()=>{const a=[...S.value,...Y];switch(H.value){case"0":await O({username:T.value,pmBasicSituationAddress:a});break;case"1":await U({username:T.value,applicationPmAddress:a});break;case"3":await k({username:T.value,formalApplyAddress:a,isSave:!0,formalApplyDate:A().format("YYYY-MM-DD")})}D.showTips({title:"修改成功",type:"success"}),setTimeout((()=>c()),500),f("refresh")};return(a,e)=>{const s=v(_("u-navbar"),g),l=v(_("message"),h),t=v(_("u-upload"),j),c=v(_("u-cell-item"),y),f=v(_("u-cell-group"),x),k=b,A=v(_("u-button"),w);return r(),o(m,null,[u(s,{title:M[i(H)]},null,8,["title"]),u(l,{navbarHeight:48}),u(k,{class:"container"},{default:n((()=>[u(f,null,{default:n((()=>[u(c,{title:M[i(H)],arrow:!1},{label:n((()=>[u(t,{ref_key:"uploadRef",ref:B,name:"image",action:i(d).UploadImgUrl,"auto-upload":!1,"file-list":i(S).map((a=>({url:i(d).ResourceUrl+a}))),header:{Authorization:i(R).token},onOnSuccess:z,onOnRemove:q,onOnError:e[0]||(e[0]=a=>C.value=!1),onOnUploaded:E},null,8,["action","file-list","header"])])),_:1},8,["title"])])),_:1})])),_:1}),u(k,{class:"fixed flex justify-between gap-5 bottom-0 p-5 w-full bg-white rounded-t-lg",style:{"box-shadow":"0px 2px 15px 0px rgba(184, 184, 210, 0.5)"}},{default:n((()=>[u(A,{class:"flex-1",type:"primary",loading:i(C),onClick:e[1]||(e[1]=a=>{i(B).upload(),C.value=!0})},{default:n((()=>[p("提交")])),_:1},8,["loading"])])),_:1})],64)}}});export{D as default};