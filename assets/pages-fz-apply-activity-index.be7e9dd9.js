import{R as e,k as a,T as t,a1 as l,am as s,m as o,q as r,p as n,o as i,b as u,a as c,w as p,g as f,x as m,F as d,c as v,f as _,t as g,r as h,Y as b,a4 as y,B as k,C,J as j,h as x,j as w,M as z,S as I}from"./index.7dddb93e.js";import{_ as R}from"./u-navbar.2247389e.js";import{_ as T,a as B}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as L}from"./u-search.1cfa0f81.js";import{_ as S}from"./u-button.7f757efe.js";import{_ as D}from"./u-input.4a92a7e0.js";import{u as F,_ as $}from"./useTabSwiper.e59040ea.js";import{_ as V}from"./u-tag.00b1459e.js";import{_ as q}from"./pagination.vue_vue_type_script_setup_true_lang.3e227710.js";import{_ as A}from"./u-select.bbd28a7e.js";import{g as H}from"./go.59004091.js";import{_ as W}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-badge.3aac235a.js";import"./u-loadmore.c9a600cb.js";import"./u-line.65c408c3.js";const J=a=>e.get({url:"/mobile/fz-active/selectFormulateDevelopList",data:a}),M=a=>e.get({url:"/mobile/fz-active/selectStuThinkingReport",data:a}),N=W(a({__name:"index",setup(e){y((e=>({"3209763a":m(W)})));const a=t(),{statusBarHeight:W}=l(),N=s(),P=o(null),U=o(null),Y=o(null),E=o(!1),{tabCurrent:G,swiperCurrent:K,tabsChange:O,transition:Q,animationFinish:X}=F(U);r((e=>{e&&e.type&&(P.value=+e.type)}));const Z=[J,M],ee=n((()=>[{name:"学生",api:null!=P.value?Z[P.value]:void 0,selectLabel:"",params:{},searchInfo:z({partyCommitteeCode:void 0,partyBranchCode:void 0,realname:void 0})},{name:"教师",api:null!=P.value?Z[P.value]:void 0,selectLabel:"",params:{userType:1},searchInfo:z({partyCommitteeCode:void 0,partyBranchCode:void 0,realname:void 0})}])),ae=e=>{ee.value[G.value].searchInfo.partyCommitteeCode=e[0].value,ee.value[G.value].searchInfo.partyBranchCode=e[1].value,ee.value[G.value].selectLabel=e.map((e=>e.label)).join("-")};return(e,t)=>{const l=k(C("u-navbar"),R),s=k(C("message"),T),o=k(C("u-search"),L),r=k(C("u-icon"),B),n=j,y=k(C("u-button"),S),z=x,F=k(C("u-input"),D),W=k(C("u-tabs-swiper"),$),J=k(C("u-tag"),V),M=k(C("pagination"),q),Z=I,te=w,le=k(C("u-select"),A);return i(),u(d,null,[c(l,{title:"积极分子",background:{background:"var(--dj-themed-color)"},"border-bottom":!1,"title-color":"#fff","back-icon-color":"#fff"},null,8,["background"]),c(s,{navbarHeight:48}),c(z,{class:"container"},{default:p((()=>[f(" 搜索 "),c(z,{class:"px-2 pb-2 pt-1 bg--do-dj-themed-color flex"},{default:p((()=>{var e;return[c(o,{class:"flex-1",placeholder:"请输入关键信息",shape:"square","action-style":{color:"#ffffff"},onSearch:t[0]||(t[0]=e=>m(ee)[m(G)].searchInfo.realname=e),"show-action":!1}),(null==(e=m(a).userInfo)?void 0:e.dataRange)<=3?(i(),u(d,{key:0},[null!=m(P)?(i(),v(y,{key:0,class:"h-full","custom-style":{backgroundColor:"var(--dj-themed-color)",height:"100%"},onClick:t[1]||(t[1]=e=>P.value=1-m(P)),type:"error",size:"mini"},{default:p((()=>[c(r,{name:"/static/icon/common/change.svg",size:"28"}),c(n,null,{default:p((()=>[_(g(0==m(P)?"去教师审核":"去支部审核"),1)])),_:1})])),_:1},8,["custom-style"])):f("v-if",!0)],64)):f("v-if",!0)]})),_:1}),0==m(P)?(i(),v(z,{key:0},{default:p((()=>[c(F,{type:"select","input-align":"center",placeholder:"请选择党组织信息","model-value":m(ee)[m(G)].selectLabel,"custom-style":{fontWeight:"bold"},onClick:t[2]||(t[2]=e=>E.value=!0)},null,8,["model-value"])])),_:1})):f("v-if",!0),f(" Swiper "),c(W,{ref_key:"uTabs",ref:U,list:m(ee),current:m(G),onChange:m(O),"is-scroll":!1,swiperWidth:"750","active-color":"#D13333","bg-color":"rgb(245, 247, 251)"},null,8,["list","current","onChange"]),f(" 列表 "),c(te,{class:"h-full",current:m(K),onTransition:m(Q),onAnimationfinish:m(X)},{default:p((()=>[(i(!0),u(d,null,h(m(ee),((e,a)=>(i(),v(Z,{class:"swiper-item",key:a},{default:p((()=>[c(M,{ref_for:!0,ref_key:"paginationRef",ref:Y,api:e.api,params:{...e.params,...e.searchInfo},option:{resultField:"data",pageSize:20}},{default:p((e=>[(i(!0),u(d,null,h(e.data,((e,a)=>(i(),v(z,{class:"flex p-4 bg-white m-4 rounded-20rpx",key:e.username,onClick:a=>m(H)(`/pages/fz-apply/activity/detail?username=${e.username}&type=${m(P)}&wait=${e.thinkingReportContinued}`)},{default:p((()=>[c(z,{class:"w-full flex flex-col gap-1"},{default:p((()=>[c(z,{class:"flex justify-between w-full"},{default:p((()=>[c(n,{class:"font-bold text-34rpx"},{default:p((()=>[_(g(e.realname),1)])),_:2},1024),c(J,{text:e.isDevelop?"拟定为发展对象":"未拟定为发展对象",type:e.isDevelop?"error":"info",mode:"light"},null,8,["text","type"])])),_:2},1024),0==m(G)?(i(),v(z,{key:0},{default:p((()=>[_("班级："+g(e.stuClass),1)])),_:2},1024)):f("v-if",!0),c(z,null,{default:p((()=>[_(g(0==m(G)?"学号：":"工号：")+g(e.username),1)])),_:2},1024),0==m(P)?(i(),u(d,{key:1},[c(z,null,{default:p((()=>[_("党校学习情况："+g(e.stuLearn?"完成":"未完成"),1)])),_:2},1024),c(z,null,{default:p((()=>[_("积极分子天数："+g(e.activeDay)+"天",1)])),_:2},1024)],64)):f("v-if",!0),1==m(P)?(i(),u(d,{key:2},[c(z,{class:"flex gap-2"},{default:p((()=>[c(n,null,{default:p((()=>[_("思想汇报："+g(e.thinkingReportNbr)+"份",1)])),_:2},1024),c(n,null,{default:p((()=>[_(" 待审核："+g(e.thinkingReportContinued)+"份 ",1)])),_:2},1024)])),_:2},1024),c(z,{class:"flex justify-end"},{default:p((()=>[c(y,{size:"mini",shape:"circle",onClick:a=>m(H)(`/pages/fz-apply/thinking-report/user-list?username=${e.username}&type=teacher`)},{default:p((()=>[_("查看思想汇报")])),_:2},1032,["onClick"])])),_:2},1024)],64)):f("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1032,["api","params"])])),_:2},1024)))),128))])),_:1},8,["current","onTransition","onAnimationfinish"])])),_:1}),c(le,{modelValue:m(E),"onUpdate:modelValue":t[3]||(t[3]=e=>b(E)?E.value=e:null),mode:"mutil-column-auto",list:m(N).getPartyBranchCascader,onConfirm:ae},null,8,["modelValue","list"])],64)}}}),[["__scopeId","data-v-e16c12b7"]]);export{N as default};
