import{k as e,a1 as a,L as t,am as l,m as s,M as o,a2 as r,o as u,b as p,a as c,w as n,x as i,F as d,r as m,Y as f,f as _,a4 as g,B as b,C as y,h,c as j,t as k,J as v}from"./index.7dddb93e.js";import{_ as x}from"./u-navbar.2247389e.js";import{_ as C}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as w}from"./u-search.1cfa0f81.js";import{_ as B}from"./u-input.4a92a7e0.js";import{_ as V}from"./u-button.7f757efe.js";import{_ as F}from"./pagination.vue_vue_type_script_setup_true_lang.3e227710.js";import{_ as z}from"./u-select.bbd28a7e.js";import{g as N}from"./go.59004091.js";import{g as P,d as H}from"./papper.9f210250.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-loadmore.c9a600cb.js";import"./u-line.65c408c3.js";const T=S(e({__name:"papper",setup(e){g((e=>({a9b52da6:i(S)})));const{statusBarHeight:S}=a(),T=t(),U=l(),$=s("");let q=o({keyword:"",isPlay:!0,partyCommitteeCode:"",partyBranchCode:""});const E=s(),I=s(!1),J=e=>{q.partyCommitteeCode=e[0].value,q.partyBranchCode=e[1].value,$.value=e.map((e=>e.label)).join("-")},L=()=>{E.value.reload()};return r("addPapperSuccess",L),(e,a)=>{const t=b(y("u-navbar"),x),l=b(y("message"),C),s=b(y("u-search"),w),o=h,r=b(y("u-input"),B),g=v,S=b(y("u-button"),V),M=b(y("pagination"),F),R=b(y("u-select"),z);return u(),p(d,null,[c(t,{"title-color":"#FFF","is-back":!0,title:"论文管理",background:{background:"#E35959"},"border-bottom":!1,placeholder:!0,"back-icon-color":"#fff"}),c(l,{navbarHeight:48}),c(o,{class:"container"},{default:n((()=>[c(o,{class:"px-2 pb-2 pt-1 bg--do-dj-themed-color"},{default:n((()=>[c(s,{placeholder:"请输入关键信息",shape:"square","action-style":{color:"#ffffff"},modelValue:i(q).keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>i(q).keyword=e)},null,8,["modelValue"])])),_:1}),c(o,null,{default:n((()=>[c(r,{type:"select","input-align":"center",placeholder:"请选择党组织信息","model-value":i($),"custom-style":{fontWeight:"bold"},onClick:a[1]||(a[1]=e=>I.value=!0)},null,8,["model-value"])])),_:1}),c(M,{ref_key:"paginationRef",ref:E,params:i(q),api:i(P),option:{resultField:"data",pageSize:20},class:"flex-1 h-0"},{default:n((e=>[(u(!0),p(d,null,m(e.data,((e,a)=>(u(),j(o,{class:"flex p-4 bg-white m-4 rounded-20rpx",key:e.username,onClick:a=>i(N)(`/pages/honour-manage/papper/detail?code=${e.code}`)},{default:n((()=>[c(o,{class:"w-full flex flex-col gap-1"},{default:n((()=>[c(o,{class:"flex justify-between w-full"},{default:n((()=>[c(g,{class:"font-bold text-34rpx"},{default:n((()=>[_(k(e.paperName),1)])),_:2},1024)])),_:2},1024),c(o,null,{default:n((()=>[_(" 论文级别："+k(e.level),1)])),_:2},1024),c(o,null,{default:n((()=>[_(" 日期："+k(e.paperTime),1)])),_:2},1024),c(o,null,{default:n((()=>[_(" 党委："+k(e.partyCommitteeName),1)])),_:2},1024),c(o,null,{default:n((()=>[_(" 党支部："+k(e.partyBranchName),1)])),_:2},1024),c(o,{class:"flex justify-end gap-3"},{default:n((()=>[c(S,{size:"mini",shape:"circle","custom-style":{padding:"0 30rpx"},onClick:a=>i(N)(`/pages/honour-manage/papper/edit?code=${e.code}`)},{default:n((()=>[_(" 修改 ")])),_:2},1032,["onClick"]),c(S,{size:"mini",shape:"circle","custom-style":{padding:"0 30rpx"},onClick:a=>(async e=>{await T.confirm({content:"确定删除这条数据吗？"}),await H({code:e}),T.showTips({title:"删除成功",type:"success"}),L()})(e.code)},{default:n((()=>[_(" 删除 ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["params","api"]),c(R,{modelValue:i(I),"onUpdate:modelValue":a[2]||(a[2]=e=>f(I)?I.value=e:null),mode:"mutil-column-auto",list:i(U).getPartyBranchCascader,onConfirm:J},null,8,["modelValue","list"])])),_:1}),c(o,{class:"w-full h-150rpx fixed bottom-0 z-999 flex justify-center items-center opacity-100"},{default:n((()=>[c(S,{type:"primary","hover-class":"none",shape:"circle",class:"w-50-pes-",onClick:a[3]||(a[3]=e=>i(N)("/pages/honour-manage/subject/add")),"custom-style":{background:"#e35959"}},{default:n((()=>[_("新增")])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-be295253"]]);export{T as default};
