import{k as a,L as t,T as e,m as r,q as o,o as s,b as i,a as c,w as l,x as n,c as u,f as m,t as _,g as p,F as g,B as f,C as d,h}from"./index.f8f0a8a6.js";import{_ as v}from"./u-navbar.1284843c.js";import{_ as w}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as j,a as b}from"./u-cell-group.c1b9a19e.js";import{s as x}from"./index.14235ccc.js";import{a as y}from"./subjecet.7e2bcdcf.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C=a({__name:"detail",setup(a){t(),e();const C=r();return o((async a=>{if(a&&a.code){const t=await y({code:a.code});C.value=t,console.log(C.value)}})),(a,t)=>{const e=f(d("u-navbar"),v),r=f(d("message"),w),o=f(d("u-cell-item"),j),y=f(d("u-cell-group"),b),N=h;return s(),i(g,null,[c(e,{title:"课题详情"}),c(r,{navbarHeight:48}),c(N,{class:"container"},{default:l((()=>[n(C)?(s(),u(y,{key:0},{default:l((()=>[c(o,{title:"项目名称",arrow:!1},{"right-icon":l((()=>[m(_(n(C).projectName),1)])),_:1}),c(o,{title:"项目负责人",arrow:!1},{"right-icon":l((()=>[m(_(n(C).executor),1)])),_:1}),c(o,{title:"项目来源",arrow:!1},{"right-icon":l((()=>[m(_(n(C).source),1)])),_:1}),c(o,{title:"项目批准文号",arrow:!1},{"right-icon":l((()=>[m(_(n(C).approvalCode),1)])),_:1}),c(o,{title:"项目级别",arrow:!1},{"right-icon":l((()=>[m(_(n(x)[n(C).level].type),1)])),_:1}),c(o,{title:"立项日期",arrow:!1},{"right-icon":l((()=>[m(_(n(C).startTime),1)])),_:1}),c(o,{title:"所属二级党委",arrow:!1},{"right-icon":l((()=>[m(_(n(C).partyCommitteeName),1)])),_:1}),c(o,{title:"所属党支部",arrow:!1},{"right-icon":l((()=>[m(_(n(C).partyBranchName),1)])),_:1}),c(o,{title:"是否结课",arrow:!1},{"right-icon":l((()=>[m(_(n(C).isOver?"是":"否"),1)])),_:1})])),_:1})):p("v-if",!0)])),_:1})],64)}}});export{C as default};