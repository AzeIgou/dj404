import{k as e,L as t,T as a,m as r,q as i,o as s,b as o,a as l,w as n,x as c,c as u,f as p,t as d,F as m,r as g,g as y,Y as f,A as h,Z as _,Q as v,B as w,C as b,h as A,D as k,e as x,ab as j}from"./index.f8f0a8a6.js";import{_ as C}from"./u-navbar.1284843c.js";import{_ as z}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as T,a as S}from"./u-cell-group.c1b9a19e.js";import{_ as O}from"./u-input.f5a1625f.js";import{_ as V}from"./u-button.9b5620aa.js";import{w as P,m as F,f as M,g as D,h as E,i as R,j as L}from"./index.14235ccc.js";import{w as N}from"./workflow.80bc9344.js";import{a as U,b as $}from"./index.11b636a5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-line.334abfea.js";const J=e({__name:"detail",setup(e){const J=t();a();const q=r(),B=r(),H=r(""),Q=r(""),Y=r(""),Z=r(""),G=r([]);i((async e=>{if(e&&e.code){const t=await U({meetingCode:e.code});B.value=e.code,t.moderators.forEach((e=>{H.value+=e.realname+" "})),t.userCode.forEach((e=>{Q.value+=e+" "})),t.zzMeetingAbsentVos.forEach((e=>{Y.value+=e.realName+" "})),q.value=t,q.value.zzMeetingApproveDetailsVo.forEach((e=>{G.value.push({name:P[e.status].description})}))}}));const I=()=>{const e={absentList:q.value.zzMeetingAbsentVos,shouldArrive:q.value.userCode};h({url:`/pages/orga-life/shouldArrive?list=${JSON.stringify(e)}`})},K=()=>{const e={pictureList:q.value.pictureAddress};h({url:`/pages/orga-life/picture?picture=${JSON.stringify(e)}`})},W=async e=>{await $({code:q.value.meetingCode,opinion:Z.value,state:e}),J.showTips({title:"审批成功",type:"success"}),_("approveSuccess"),setTimeout((()=>{v({url:`/pages/orga-life/detail?code=${B.value}`}),Z.value=""}),1e3)};return(e,t)=>{const a=w(b("u-navbar"),C),r=w(b("message"),z),i=w(b("u-cell-item"),T),h=A,_=w(b("u-cell-group"),S),v=w(b("u-input"),O),P=w(b("u-button"),V);return s(),o(m,null,[l(a,{title:"会议详情"}),l(r,{navbarHeight:48}),l(h,{class:"container"},{default:n((()=>[c(q)?(s(),u(_,{key:0},{default:n((()=>[l(i,{title:"会议类型",arrow:!1},{"right-icon":n((()=>[p(d(c(F)[c(q).type].type),1)])),_:1}),l(i,{title:"会议主题",arrow:!1},{"right-icon":n((()=>[p(d(c(q).theme),1)])),_:1}),l(i,{title:"会议地点",arrow:!1},{"right-icon":n((()=>[p(d(c(q).place),1)])),_:1}),l(i,{title:"会议内容",arrow:!1},{"right-icon":n((()=>[p(d(c(q).content),1)])),_:1}),l(i,{title:"记录人",arrow:!1},{"right-icon":n((()=>[p(d(c(q).recorder.realname),1)])),_:1}),l(i,{title:"主持人",arrow:!1},{"right-icon":n((()=>[p(d(c(H)),1)])),_:1}),l(i,{title:"会议时间",arrow:!1},{"right-icon":n((()=>[l(h,null,{default:n((()=>[p(d(c(q).createTime.split(" ")[0]),1)])),_:1})])),_:1}),l(i,{title:"应到人员",arrow:!0,onClick:I}),l(i,{title:"会议记录照片",arrow:!1,onClick:K},{"right-icon":n((()=>[(s(!0),o(m,null,g(c(q).pictureAddress,((e,t)=>(s(),o("img",{class:"w-60rpx h-60rpx alt",src:c(k).ResourceUrl+e,alt:"",onClick:x((e=>((e,t)=>{j({urls:e.map((e=>k.ResourceUrl+e)),current:t})})(c(q).pictureAddress,t)),["stop"]),key:t},null,8,["src","onClick"])))),128))])),_:1}),l(i,{title:"参会率",arrow:!1},{"right-icon":n((()=>[p(d(c(q).attendancRate),1)])),_:1}),l(i,{title:"本次活动是否为三会一课",arrow:!1},{"right-icon":n((()=>[p(d(c(q).isThreeAndOne?"是":"否"),1)])),_:1}),c(q).isThreeAndOne?(s(),u(i,{key:0,title:"三会一课活动形式",arrow:!1},{"right-icon":n((()=>[p(d(c(M)[c(q).activityForm].type),1)])),_:1})):y("v-if",!0),c(q).isThreeAndOne?(s(),u(i,{key:1,title:"三会一课类型",arrow:!1},{"right-icon":n((()=>[p(d(c(D)[c(q).typeOfThreeAndOne].type),1)])),_:1})):y("v-if",!0),l(i,{title:"本次活动是否为党员日常活动",arrow:!1},{"right-icon":n((()=>[p(d(c(q).isDailyPartyActivity?"是":"否"),1)])),_:1}),l(i,{title:"本次活动是否为党员干部学习",arrow:!1},{"right-icon":n((()=>[p(d(c(q).isPartyStudy?"是":"否"),1)])),_:1}),c(q).isPartyStudy?(s(),u(i,{key:2,title:"党员干部学习培训主要途径和载体",arrow:!1},{"right-icon":n((()=>[p(d(c(E)[c(q).partyStudyMethods].type),1)])),_:1})):y("v-if",!0),c(q).isPartyStudy?(s(),u(i,{key:3,title:"党员干部学习培训内容",arrow:!1},{"right-icon":n((()=>[p(d(c(R)[c(q).partyStudyContent].type),1)])),_:1})):y("v-if",!0),l(i,{title:"本次活动是否为党员主题党日活动",arrow:!1},{"right-icon":n((()=>[p(d(c(q).isPartyThemeActivity?"是":"否"),1)])),_:1}),c(q).isPartyThemeActivity?(s(),u(i,{key:4,title:"党员活动内容",arrow:!1},{"right-icon":n((()=>[p(d(c(L)[c(q).partyThemeActivity].type),1)])),_:1})):y("v-if",!0),l(i,{title:"审核状态","hover-class":"none",arrow:!1},{label:n((()=>[l(N,{approve:c(q).zzMeetingApproveDetailsVo,createtime:c(q).createtime},null,8,["approve","createtime"])])),_:1})])),_:1})):y("v-if",!0),c(q).isApprove&&10==c(q).orgaStatus?(s(),u(h,{key:1,class:"p-4 flex flex-col gap-3"},{default:n((()=>[l(h,null,{default:n((()=>[p("审批意见")])),_:1}),l(h,{class:"px-4"},{default:n((()=>[l(v,{height:"200","custom-style":{backgroundColor:"#F6F6F6",borderRadius:"20rpx",padding:"10rpx"},modelValue:c(Z),"onUpdate:modelValue":t[0]||(t[0]=e=>f(Z)?Z.value=e:null),type:"textarea","auto-height":"",class:"auto-height"},null,8,["modelValue"])])),_:1}),l(h,{class:"flex justify-evenly"},{default:n((()=>[l(P,{size:"mini","custom-style":{padding:"0 30rpx"},onClick:t[1]||(t[1]=e=>W("-10"))},{default:n((()=>[p("不通过")])),_:1}),l(P,{size:"mini","custom-style":{padding:"0 30rpx"},type:"info",onClick:t[2]||(t[2]=e=>W("-20"))},{default:n((()=>[p("退回修改")])),_:1}),l(P,{size:"mini","custom-style":{padding:"0 30rpx"},type:"primary ",onClick:t[3]||(t[3]=e=>W(20))},{default:n((()=>[p("通过")])),_:1})])),_:1})])),_:1})):y("v-if",!0)])),_:1})],64)}}});export{J as default};