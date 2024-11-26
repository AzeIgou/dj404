import{k as e,L as a,am as o,a1 as t,m as l,M as s,a2 as r,o as u,b as n,a as i,w as c,x as d,F as p,r as m,Y as f,f as _,a4 as g,B as h,C as y,h as b,c as j,t as k,J as x}from"./index.f8f0a8a6.js";import{_ as v}from"./u-navbar.1284843c.js";import{_ as C}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as w}from"./u-search.e7ce9eeb.js";import{_ as B}from"./u-input.f5a1625f.js";import{_ as V}from"./u-button.9b5620aa.js";import{_ as F}from"./pagination.vue_vue_type_script_setup_true_lang.a8071f8a.js";import{_ as z}from"./u-select.71281130.js";import{g as H}from"./go.241c4b18.js";import{g as N,d as U}from"./Honour.fa974be3.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-loadmore.9028c00d.js";import"./u-line.334abfea.js";const S=P(e({__name:"honour",setup(e){g((e=>({ae46afee:d(T)})));const P=a(),S=o(),{statusBarHeight:T}=t(),$=l("");let q=s({keyword:"",isPlay:!1,partyCommitteeCode:"",partyBranchCode:""});const E=l(),I=l(!1),J=e=>{q.partyCommitteeCode=e[0].value,q.partyBranchCode=e[1].value,$.value=e.map((e=>e.label)).join("-")},L=()=>{E.value.reload()};return r("addHonourSuccess",L),(e,a)=>{const o=h(y("u-navbar"),v),t=h(y("message"),C),l=h(y("u-search"),w),s=b,r=h(y("u-input"),B),g=x,T=h(y("u-button"),V),M=h(y("pagination"),F),R=h(y("u-select"),z);return u(),n(p,null,[i(o,{"title-color":"#FFF","is-back":!0,title:"荣誉管理",background:{background:"#E35959"},"border-bottom":!1,placeholder:!0,"back-icon-color":"#fff"}),i(t,{navbarHeight:48}),i(s,{class:"container"},{default:c((()=>[i(s,{class:"px-2 pb-2 pt-1 bg--do-dj-themed-color"},{default:c((()=>[i(l,{placeholder:"请输入关键信息",shape:"square","action-style":{color:"#ffffff"},modelValue:d(q).keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>d(q).keyword=e)},null,8,["modelValue"])])),_:1}),i(s,null,{default:c((()=>[i(r,{type:"select","input-align":"center",placeholder:"请选择党组织信息","model-value":d($),"custom-style":{fontWeight:"bold"},onClick:a[1]||(a[1]=e=>I.value=!0)},null,8,["model-value"])])),_:1}),i(M,{ref_key:"paginationRef",ref:E,params:d(q),api:d(N),option:{resultField:"data",pageSize:20},class:"flex-1 h-0"},{default:c((e=>[(u(!0),n(p,null,m(e.data,((e,a)=>(u(),j(s,{class:"flex p-4 bg-white m-4 rounded-20rpx",key:e.username,onClick:a=>d(H)(`/pages/honour-manage/honour/detail?code=${e.code}`)},{default:c((()=>[i(s,{class:"w-full flex flex-col gap-1"},{default:c((()=>[i(s,{class:"flex justify-between w-full"},{default:c((()=>[i(g,{class:"font-bold text-34rpx"},{default:c((()=>[_(k(e.gloryName),1)])),_:2},1024)])),_:2},1024),i(s,null,{default:c((()=>[_(" 获奖单位："+k(e.awardUnit),1)])),_:2},1024),i(s,null,{default:c((()=>[_(" 日期："+k(e.gloryTime),1)])),_:2},1024),i(s,null,{default:c((()=>[_(" 党委："+k(e.partyCommitteeName),1)])),_:2},1024),i(s,null,{default:c((()=>[_(" 党支部："+k(e.partyBranchName),1)])),_:2},1024),i(s,{class:"flex justify-end gap-3"},{default:c((()=>[i(T,{size:"mini",shape:"circle","custom-style":{padding:"0 30rpx"},onClick:a=>d(H)(`/pages/honour-manage/honour/edit?code=${e.code}`)},{default:c((()=>[_(" 修改 ")])),_:2},1032,["onClick"]),i(T,{size:"mini",shape:"circle","custom-style":{padding:"0 30rpx"},onClick:a=>(async e=>{await P.confirm({content:"确定删除这条数据吗？"}),await U({code:e}),P.showTips({title:"删除成功",type:"success"}),L()})(e.code)},{default:c((()=>[_(" 删除 ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["params","api"]),i(R,{modelValue:d(I),"onUpdate:modelValue":a[2]||(a[2]=e=>f(I)?I.value=e:null),mode:"mutil-column-auto",list:d(S).getPartyBranchCascader,onConfirm:J},null,8,["modelValue","list"])])),_:1}),i(s,{class:"w-full h-150rpx fixed bottom-0 z-999 flex justify-center items-center opacity-100"},{default:c((()=>[i(T,{type:"primary","hover-class":"none",shape:"circle",class:"w-50-pes-",onClick:a[3]||(a[3]=e=>d(H)("/pages/honour-manage/honour/add")),"custom-style":{background:"#e35959"}},{default:c((()=>[_("新增")])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-2f41470e"]]);export{S as default};
