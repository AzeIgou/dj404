import{k as e,m as a,q as l,o as t,b as r,a as s,w as u,x as p,c as i,g as n,F as o,B as m,C as c,h as v}from"./index.f8f0a8a6.js";import{_ as y}from"./u-navbar.1284843c.js";import{_ as f}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as g,a as _}from"./u-cell-group.c1b9a19e.js";import{_ as d}from"./u-tag.2e01dec1.js";import{g as w}from"./go.241c4b18.js";import{g as h}from"./index.a62c3e9c.js";import{w as x,l as j}from"./index.14235ccc.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b=e({__name:"detail",setup(e){const b=a(null);return l((async e=>{e&&e.username&&(b.value=await h({username:e.username,type:3}))})),(e,a)=>{const l=m(c("u-navbar"),y),h=m(c("message"),f),T=m(c("u-cell-item"),g),k=m(c("u-tag"),d),A=m(c("u-cell-group"),_),C=v;return t(),r(o,null,[s(l,{title:"详情"}),s(h,{navbarHeight:48}),s(C,{class:"container"},{default:u((()=>[p(b)?(t(),i(A,{key:0},{default:u((()=>[s(T,{title:"学号",arrow:!1,value:p(b).username},null,8,["value"]),s(T,{title:"姓名",arrow:!1,value:p(b).realname},null,8,["value"]),s(T,{title:"班级",arrow:!1,value:p(b).stuClass},null,8,["value"]),s(T,{title:"所属党支部",arrow:!1,value:p(b).partyBranch},null,8,["value"]),s(T,{title:"预备党员日期",arrow:!1,value:p(b).pmTime},null,8,["value"]),s(T,{title:"预备党员天数",arrow:!1,value:p(b).pmTimeDay},null,8,["value"]),s(T,{title:"转正申请日期",arrow:!1,value:p(b).formalApplyDate},null,8,["value"]),s(T,{title:"转正申请截止日期",arrow:!1,value:p(b).applyEndTime},null,8,["value"]),s(T,{title:"转正申请审核状态",arrow:!1},{"right-icon":u((()=>[s(k,{text:p(x)[p(b).formalApplyType].description,type:p(x)[p(b).formalApplyType].type,mode:"light"},null,8,["text","type"])])),_:1}),s(T,{title:"公示状态",arrow:!1},{"right-icon":u((()=>[s(k,{text:p(j)[p(b).checkType||0].description,type:p(j)[p(b).checkType||0].type,mode:"light"},null,8,["text","type"])])),_:1}),n(' <u-cell-item\r\n        title="提交转正申请"\r\n        @click="go(`/pages/fz-apply/formal-apply/submit?username=${data.username}`)"\r\n      >\r\n      </u-cell-item> '),s(T,{title:"查看转正申请",onClick:a[0]||(a[0]=e=>p(w)(`/pages/fz-apply/prepare/apply?username=${p(b).username}`))})])),_:1})):n("v-if",!0)])),_:1})],64)}}});export{b as default};