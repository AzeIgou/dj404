import{k as e,a1 as s,m as a,a5 as t,p as l,q as o,o as u,b as n,a as i,x as d,c as r,w as c,f,t as p,g as m,F as _,r as b,Y as v,a4 as y,B as x,C as g,h as k,J as h}from"./index.7dddb93e.js";import{_ as w}from"./u-navbar.2247389e.js";import{_ as j,a as q}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as C}from"./u-section.0d3c8435.js";import{_ as V,a as $}from"./u-radio-group.1a98b216.js";import{_ as F,a as z}from"./u-checkbox-group.d4356cf6.js";import{_ as B}from"./u-button.7f757efe.js";import{d as H}from"./study.882a7b91.js";import{_ as J}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./JSEncrypt.1622f795.js";const E=J(e({__name:"exam-detail",setup(e){y((e=>({f35ce25e:d(J)})));const{statusBarHeight:J}=s(),E=a(),I=a(),S=a(null),T=a(0),U=a(!0);t(T,(()=>{U.value=!1,setTimeout((()=>{U.value=!0}),0)}));const Y=l((()=>(e,s)=>{switch(e){case 0:return`单选题（${s.toFixed(1)}）`;case 1:return`多选题（${s.toFixed(1)}）`;case 2:return`判断题（${s.toFixed(1)}）`}})),A=l((()=>{var e;let s;if(!S.value)return;const a=S.value.questions[T.value];return a.answer&&a.answer.length?(0==a.type||2==a.type?s=a.options[a.answer[0]].code:1==a.type&&(s=null==(e=a.answer)?void 0:e.map((e=>a.options[e].code))),console.log(s),s):void 0}));return o((async e=>{if(e&&e.score&&(E.value=+e.score),e&&e.partyClassCode){I.value=e.partyClassCode;const s=await H({partyClassCode:I.value});S.value=s}})),(e,s)=>{const a=x(g("u-navbar"),w),t=x(g("message"),j),l=k,o=x(g("u-section"),C),y=h,H=x(g("u-icon"),q),J=x(g("u-radio"),V),E=x(g("u-radio-group"),$),I=x(g("u-checkbox"),F),D=x(g("u-checkbox-group"),z),G=x(g("u-button"),B);return u(),n(_,null,[i(a,{title:"考试详情"}),i(t,{navbarHeight:48}),d(S)?(u(),r(l,{key:0,class:"container p-2 gap-5"},{default:c((()=>[i(l,{class:"mx-auto mt-5",style:{"font-size":"45rpx"}},{default:c((()=>[f(p(d(S).title),1)])),_:1}),i(o,{title:d(Y)(d(S).questions[d(T)].type,d(S).questions[d(T)].score),"font-size":"34","show-line":!1,bold:!1,arrow:!1,"sub-title":`${d(T)+1}/${d(S).questions.length}`},null,8,["title","sub-title"]),i(l,{style:{"font-size":"30rpx"}},{default:c((()=>[f(p(d(T)+1)+"."+p(d(S).questions[d(T)].title),1)])),_:1}),m(" 单选题 判断题 "),!d(U)||0!=d(S).questions[d(T)].type&&2!=d(S).questions[d(T)].type?d(U)&&1==d(S).questions[d(T)].type?(u(),n(_,{key:1},[m(" 多选题 "),i(l,null,{default:c((()=>[i(D,null,{default:c((()=>[i(l,{class:"flex flex-col gap-2"},{default:c((()=>[(u(!0),n(_,null,b(d(S).questions[d(T)].options,((e,s)=>{var a,t;return u(),r(I,{modelValue:null==(a=d(A))?void 0:a.includes(e.code),disabled:!(null==(t=d(A))?void 0:t.includes(e.code)),key:e.code,name:e.code},{default:c((()=>[i(l,{class:"flex justify-between"},{default:c((()=>{var s,a,t;return[i(y,null,{default:c((()=>[f(p(e.option),1)])),_:2},1024),(null==(s=d(A))?void 0:s.includes(e.code))&&0==e.status?(u(),r(H,{key:0,name:"checkmark",color:"#00ff14"})):(null==(a=d(A))?void 0:a.includes(e.code))&&1==e.status||!(null==(t=d(A))?void 0:t.includes(e.code))&&0==e.status?(u(),r(H,{key:1,name:"close",color:"#ff0000"})):m("v-if",!0)]})),_:2},1024)])),_:2},1032,["modelValue","disabled","name"])})),128))])),_:1})])),_:1})])),_:1})],2112)):m("v-if",!0):(u(),r(l,{key:0},{default:c((()=>[i(E,{modelValue:d(A),"onUpdate:modelValue":s[0]||(s[0]=e=>v(A)?A.value=e:null)},{default:c((()=>[i(l,{class:"flex flex-col gap-2"},{default:c((()=>[(u(!0),n(_,null,b(d(S).questions[d(T)].options,((e,s)=>(u(),r(J,{disabled:d(A)!=e.code,key:e.code,name:e.code,class:"bg-white"},{default:c((()=>[i(l,{class:"flex justify-between"},{default:c((()=>[i(y,null,{default:c((()=>[f(p(e.option),1)])),_:2},1024),0==e.status?(u(),r(H,{key:0,name:"checkmark",color:"#00ff14"})):d(A)==e.code?(u(),r(H,{key:1,name:"close",color:"#ff0000"})):m("v-if",!0)])),_:2},1024)])),_:2},1032,["disabled","name"])))),128))])),_:1})])),_:1},8,["modelValue"])])),_:1}))])),_:1})):m("v-if",!0),i(l,{class:"fixed flex justify-between gap-5 bottom-0 p-5 w-full bg-white rounded-t-lg",style:{"box-shadow":"0px 2px 15px 0px rgba(184, 184, 210, 0.5)"}},{default:c((()=>[i(G,{class:"flex-1",disabled:d(T)<=0,type:"primary",onClick:s[1]||(s[1]=e=>T.value--)},{default:c((()=>[f("上一题")])),_:1},8,["disabled"]),i(G,{class:"flex-1",disabled:d(S)&&d(T)>=d(S).questions.length-1,type:"primary",onClick:s[2]||(s[2]=e=>T.value++)},{default:c((()=>[f("下一题")])),_:1},8,["disabled"])])),_:1})],64)}}}),[["__scopeId","data-v-b60bef82"]]);export{E as default};
