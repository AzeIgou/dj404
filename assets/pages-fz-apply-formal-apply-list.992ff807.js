import{k as a,a1 as e,m as r,M as s,p as t,q as o,a2 as i,s as l,$ as n,o as p,b as u,a as m,w as f,x as c,g,F as d,r as _,a4 as h,B as b,C as y,h as v,j,c as w,f as x,t as C,D as k,S}from"./index.7dddb93e.js";import{_ as A}from"./u-navbar.2247389e.js";import{_ as T}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as N}from"./u-subsection.d39caa1d.js";import{u as $,_ as z}from"./useTabSwiper.e59040ea.js";import{_ as D,a as F}from"./u-cell-group.3ff6fc80.js";import{_ as B}from"./u-tag.00b1459e.js";import{_ as E}from"./u-image.079e795d.js";import{_ as H}from"./pagination.vue_vue_type_script_setup_true_lang.3e227710.js";import{g as R}from"./go.59004091.js";import{g as q}from"./formal-apply.22f29fa9.js";import{w as I}from"./index.14235ccc.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import"./u-badge.3aac235a.js";import"./u-loadmore.c9a600cb.js";import"./u-line.65c408c3.js";const U=M(a({__name:"list",setup(a){h((a=>({"2053297e":c(M)})));const{statusBarHeight:M}=e(),U=r(null),W=r(null),{tabCurrent:G,swiperCurrent:J,tabsChange:K,transition:L,animationFinish:O}=$(U),P=[{name:"学生"},{name:"教师"}],Q=s([{name:"待审核",originName:"待审核",api:q,params:{approvalState:2}},{name:"已审核",originName:"已审核",api:q,params:{approvalState:3}},{name:"全部",originName:"全部",params:{approvalState:1},api:q}]),V=a=>{Q.forEach((e=>{e.params.userType=1==a?1:null}))},X=t((()=>{const a=new Set;return(e,r)=>r==J.value||a.has(r)?(a.add(r),k.ResourceUrl+e):void 0})),Y=(a,e)=>(Q[a].name=`${Q[a].originName}(${e.totalSize})`,e);return o((()=>{i("refresh",(()=>Q.forEach(((a,e)=>W.value[e].reload()))))})),l((()=>{n("refresh")})),(a,e)=>{const r=b(y("u-navbar"),A),s=b(y("message"),T),t=b(y("u-subsection"),N),o=b(y("u-tabs-swiper"),z),i=b(y("u-cell-item"),D),l=b(y("u-tag"),B),n=b(y("u-image"),E),h=v,k=b(y("u-cell-group"),F),$=b(y("pagination"),H),q=S,M=j;return p(),u(d,null,[m(r,{title:"转正申请"}),m(s,{navbarHeight:48}),m(h,{class:"container"},{default:f((()=>[m(t,{list:P,"bg-color":"#fff","button-color":"#f5f7fb",onChange:V}),m(o,{ref_key:"uTabs",ref:U,list:c(Q),current:c(G),onChange:c(K),"is-scroll":!1,swiperWidth:"750","active-color":"#D13333","bg-color":"rgb(245, 247, 251)"},null,8,["list","current","onChange"]),g(" 列表 "),m(M,{class:"h-full",current:c(J),onTransition:c(L),onAnimationfinish:c(O)},{default:f((()=>[g(" 全部转正申请 "),(p(!0),u(d,null,_(c(Q),((a,e)=>(p(),w(q,{class:"swiper-item",key:e},{default:f((()=>[m($,{ref_for:!0,ref_key:"paginationRef",ref:W,api:a.api,params:a.params,"after-fetch":Y.bind(null,e),option:{pageSize:10}},{default:f((a=>[m(h,{class:"p-2 flex flex-col gap-2"},{default:f((()=>[(p(!0),u(d,null,_(a.data,(a=>(p(),w(h,{key:a.username,class:"rounded-40rpx overflow-hidden",onClick:e=>c(R)(`/pages/fz-apply/formal-apply/review?username=${a.username}&type=review`)},{default:f((()=>[m(k,null,{default:f((()=>[m(i,{title:"姓名","hover-class":"none",arrow:!1},{"right-icon":f((()=>[x(C(a.realname),1)])),_:2},1024),m(i,{title:"提交日期","hover-class":"none",arrow:!1},{"right-icon":f((()=>[x(C(a.formalApplyDate),1)])),_:2},1024),m(i,{title:"转正申请","hover-class":"none",arrow:!1},{"right-icon":f((()=>[m(l,{class:"absolute top-0 right-0 translate-x--1-sl-2 translate-y-1-sl-2",text:c(I)[a.formalApplyType].description,type:c(I)[a.formalApplyType].type,mode:"light"},null,8,["text","type"])])),label:f((()=>[m(h,{class:"flex gap-5 justify-center mt-2"},{default:f((()=>[(p(!0),u(d,null,_(a.formalApplyAddress,((a,r)=>(p(),w(n,{key:r,width:"180rpx",height:"180rpx",src:c(X)(a,e),mode:"widthFix"},null,8,["src"])))),128))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1032,["api","params","after-fetch"])])),_:2},1024)))),128))])),_:1},8,["current","onTransition","onAnimationfinish"])])),_:1})],64)}}}),[["__scopeId","data-v-79a4bd85"]]);export{U as default};
