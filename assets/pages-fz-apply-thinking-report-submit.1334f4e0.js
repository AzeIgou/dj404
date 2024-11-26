import{k as e,L as a,T as s,m as t,q as l,o,b as r,a as u,x as i,w as n,f as d,t as p,F as c,D as f,H as m,Z as v,B as g,C as _,h}from"./index.7dddb93e.js";import{_ as b}from"./u-navbar.2247389e.js";import{_ as y}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as x,a as j}from"./u-cell-group.3ff6fc80.js";import{_ as w}from"./u-upload.fc59abfe.js";import{_ as k}from"./u-button.7f757efe.js";import{d as Y}from"./dayjs.min.4485b413.js";import{b as U,s as D}from"./thinking-report.1cd2d7ac.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./u-line-progress.c40d9c0e.js";const C=e({__name:"submit",setup(e){const C=a(),M=s(),R=[],T=t(null),A=t("add"),O=t("提交思想汇报"),H=t([]),I=t(Y().format("YYYY-MM-DD")),S=t(null),q=t(!0),z=t(!1);l((async e=>{if(e&&e.type)if(A.value=e.type,"add"==A.value)O.value="提交思想汇报";else if("edit"==A.value&&e.code){S.value=e.code,O.value="修改思想汇报";const a=await U({trCode:e.code});H.value=a.thinkAddress,I.value=Y(a.createtime).format("YYYY-MM-DD")}}));const B=(e,a,s)=>{const t=a.filter((e=>100==e.progress));H.value=t.map((e=>e.url.slice(f.ResourceUrl.length)))},E=(e,a,s)=>{const{data:{imageUrl:t}}=e;R.push(t)},F=async()=>{var e;try{z.value=!0;const a=[...H.value,...R];if(!a||!a.length)throw C.showTips({title:"提交内容不能为空",type:"error"}),Error("提交内容不能为空");await D({code:"edit"==A.value&&S.value?S.value:void 0,isSave:q.value,thinkAddress:a,username:null==(e=M.userInfo)?void 0:e.username}),C.showTips({title:"edit"==A.value?"修改成功":"新增成功",type:"success"}),setTimeout((()=>{m()}),500),v("refresh")}catch{z.value=!1}};return(e,a)=>{const s=g(_("u-navbar"),b),t=g(_("message"),y),l=g(_("u-cell-item"),x),m=g(_("u-upload"),w),v=g(_("u-cell-group"),j),Y=h,U=g(_("u-button"),k);return o(),r(c,null,[u(s,{title:i(O)},null,8,["title"]),u(t,{navbarHeight:48}),u(Y,{class:"container"},{default:n((()=>[u(v,null,{default:n((()=>[u(l,{title:"提交日期",arrow:!1},{"right-icon":n((()=>[d(p(i(I)),1)])),_:1}),u(l,{title:"思想汇报",arrow:!1},{label:n((()=>[u(m,{ref_key:"uploadRef",ref:T,name:"image",action:i(f).UploadImgUrl,"auto-upload":!1,"file-list":i(H).map((e=>({url:i(f).ResourceUrl+e}))),header:{Authorization:i(M).token},onOnSuccess:E,onOnRemove:B,onOnUploaded:F},null,8,["action","file-list","header"])])),_:1})])),_:1})])),_:1}),u(Y,{class:"fixed flex justify-between gap-5 bottom-0 p-5 w-full bg-white rounded-t-lg",style:{"box-shadow":"0px 2px 15px 0px rgba(184, 184, 210, 0.5)"}},{default:n((()=>[u(U,{class:"flex-1",type:"success",loading:i(z),onClick:a[0]||(a[0]=e=>{q.value=!1,i(T).upload()})},{default:n((()=>[d("保存")])),_:1},8,["loading"]),u(U,{class:"flex-1",type:"primary",loading:i(z),onClick:a[1]||(a[1]=e=>{q.value=!0,i(T).upload()})},{default:n((()=>[d("提交")])),_:1},8,["loading"])])),_:1})],64)}}});export{C as default};
