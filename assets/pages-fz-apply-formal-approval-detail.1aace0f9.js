import{k as a,m as e,q as r,a2 as s,s as l,$ as t,o as u,b as o,a as n,w as i,x as p,c as m,F as c,r as f,g as v,B as d,C as g,h as _,D as y,e as w,aD as h}from"./index.7dddb93e.js";import{_ as x}from"./u-navbar.2247389e.js";import{_ as j}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as b,a as k}from"./u-cell-group.3ff6fc80.js";import{_ as C}from"./u-image.079e795d.js";import{g as F}from"./go.59004091.js";import{g as D}from"./index.e47e42f1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I=a({__name:"detail",setup(a){const I=e(null);return r((async a=>{a&&a.username&&(I.value=await D({username:a.username,type:4}),s("refresh",(async()=>I.value=await D({username:a.username,type:4}))))})),l((()=>t("refresh"))),(a,e)=>{const r=d(g("u-navbar"),x),s=d(g("message"),j),l=d(g("u-cell-item"),b),t=d(g("u-image"),C),D=_,P=d(g("u-cell-group"),k);return u(),o(c,null,[n(r,{title:"详情"}),n(s,{navbarHeight:48}),n(D,{class:"container"},{default:i((()=>[p(I)?(u(),m(P,{key:0},{default:i((()=>[n(l,{title:"学号",arrow:!1,value:p(I).username},null,8,["value"]),n(l,{title:"姓名",arrow:!1,value:p(I).realname},null,8,["value"]),n(l,{title:"班级",arrow:!1,value:p(I).stuClass},null,8,["value"]),n(l,{title:"所属党支部",arrow:!1,value:p(I).partyBranch},null,8,["value"]),n(l,{title:"党员大会接收日期",arrow:!1,value:p(I).pmTime},null,8,["value"]),n(l,{title:"党委会日期",arrow:!1,value:p(I).formalMeetingDate},null,8,["value"]),n(l,{title:"上传《预备党员考察表》",onClick:e[0]||(e[0]=a=>p(F)(`/pages/fz-apply/formal-approval/submit?username=${p(I).username}&&address=${JSON.stringify(p(I).preparatoryPartyInspectionForm)||""}`))},{label:i((()=>[n(D,{class:"flex h-full flex-wrap gap-2"},{default:i((()=>[(u(!0),o(c,null,f(p(I).preparatoryPartyInspectionForm,((a,e)=>(u(),m(t,{class:"overflow-hidden",key:e,width:"180rpx",height:"180rpx",src:p(y).ResourceUrl+a,mode:"widthFix",onClick:w((a=>p(h)(p(I).preparatoryPartyInspectionForm,e)),["stop"])},null,8,["src","onClick"])))),128))])),_:1})])),_:1})])),_:1})):v("v-if",!0)])),_:1})],64)}}});export{I as default};