import{k as e,L as a,m as l,q as s,D as t,ac as r,o,b as u,a as d,w as i,x as c,f as m,Y as n,F as p,B as f,C as b,h as _,Z as v}from"./index.7dddb93e.js";import{_ as j}from"./u-navbar.2247389e.js";import{_ as g}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as y}from"./u-input.4a92a7e0.js";import{_ as h,a as k}from"./u-form.2758243d.js";import{_ as w,a as V}from"./u-cell-group.3ff6fc80.js";import{_ as x}from"./u-select.bbd28a7e.js";import{_ as U}from"./u-button.7f757efe.js";import{u as C}from"./meet.8370cffd.js";import{_ as E,d as G}from"./useDebounce.1587bee8.js";import{g as N}from"./go.59004091.js";import{a as O,b as S,e as T}from"./index.2dd11e89.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-upload.fc59abfe.js";import"./u-line-progress.c40d9c0e.js";const I=A(e({__name:"edit",setup(e){const A=a(),I=C();let D=l([]),F=l([]);const L=l(!1);let P=l({applyGrades:0,pioneerCode:"",title:"",files:[],remark:"",isSubmit:!1,cascader:"",code:""});s((async e=>{if(e&&e.code){const a=await O({code:e.code});P.value.code=e.code,P.value.cascader=a.pioneerParent+"/"+a.pioneerName,a.files.forEach((e=>{F.value.push({url:t.ResourceUrl+e.url})})),Object.keys(a).filter((e=>Object.keys(P.value).includes(e))).reduce(((e,l)=>(e[l]=a[l],e)),P.value)}})),r((()=>{let e=l([]);["履职先锋","为民先锋","引领先锋"].forEach((async a=>{let l=await S({oneNames:a});e.value=e.value.concat(l)})),setTimeout((()=>{D.value=e.value.map((e=>{let a=e.pmPioneerIndexList.map((e=>({label:e.name,value:e.name,grade:e.grades})));return{label:e.oneName,value:e.oneName,children:a}}))}),500)}));const R=e=>{P.value.cascader=e[0].value+"/"+e[1].value,D.value.forEach((a=>{a.value==e[0].value&&a.children.forEach((e=>{P.value.applyGrades=e.grade}))}))},q=G((async e=>{P.value.isSubmit=e;let a=Y(P.value);for(const[s,t]of Object.entries(P.value))if("remark"!==s){if(a){await T(P.value);try{A.showTips({title:"修改成功",type:"success"}),setTimeout((()=>{N("/pages/pm-mangement/user-apply/index"),v("addApplySuccess"),I.$reset()}),1e3)}catch(l){}break}A.showTips({title:"请将内容填写完整",type:"warning"});break}}),1e3),B=e=>{P.value.files.push({name:e.split("/")[1],url:e})},H=e=>{P.value.files.splice(e,1)},Y=e=>{for(const[a,l]of Object.entries(e))if("remark"!==a&&(""===l||Array.isArray(l)&&0===l.length||void 0===l))return!1;return!0};return(e,a)=>{const l=f(b("u-navbar"),j),s=f(b("message"),g),t=f(b("u-input"),y),r=f(b("u-form-item"),h),v=f(b("u-form"),k),C=_,G=f(b("u-cell-item"),w),N=f(b("u-cell-group"),V),O=f(b("u-select"),x),S=f(b("u-button"),U);return o(),u(p,null,[d(l,{"title-color":"#000","is-back":!0,title:"修改申报",background:{background:"#ffffff"},"border-bottom":!1}),d(s,{navbarHeight:48}),d(C,{class:"container pb-20rpx"},{default:i((()=>[d(v,{clas:"p-4px",model:c(P),"label-width":"150",ref:"uForm","label-align":"center"},{default:i((()=>[d(r,{label:"先锋指数"},{default:i((()=>[d(t,{modelValue:c(P).cascader,"onUpdate:modelValue":a[0]||(a[0]=e=>c(P).cascader=e),disabled:!0,placeholder:"请选择先锋指数",onClick:a[1]||(a[1]=e=>L.value=!0)},null,8,["modelValue"])])),_:1}),d(r,{label:"申报标题"},{default:i((()=>[d(t,{modelValue:c(P).title,"onUpdate:modelValue":a[2]||(a[2]=e=>c(P).title=e),placeholder:"请输入申报标题"},null,8,["modelValue"])])),_:1}),d(r,{label:"申报分数"},{default:i((()=>[d(t,{modelValue:c(P).applyGrades,"onUpdate:modelValue":a[3]||(a[3]=e=>c(P).applyGrades=e),disabled:!0},null,8,["modelValue"])])),_:1}),d(r,{label:"申报备注"},{default:i((()=>[d(t,{modelValue:c(P).remark,"onUpdate:modelValue":a[4]||(a[4]=e=>c(P).remark=e),placeholder:"请输入申报备注"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),d(N,null,{default:i((()=>[d(G,{arrow:!1},{default:i((()=>[d(C,{slot:"icon",class:"flex items-center"},{default:i((()=>[d(C,{class:"justify-center w-full"},{default:i((()=>[d(C,{class:"w-224rpx"},{default:i((()=>[m(" 申报附件上传 ")])),_:1}),d(C,{class:"w-700rpx"},{default:i((()=>[d(E,{"file-list":c(F),onUploadSuccess:B,onImgRemove:H},null,8,["file-list"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d(O,{modelValue:c(L),"onUpdate:modelValue":a[5]||(a[5]=e=>n(L)?L.value=e:null),mode:"mutil-column-auto",list:c(D),title:"请选择先锋指数",onConfirm:R},null,8,["modelValue","list"])])),_:1}),d(C,{class:"flex items-center justify-around w-full h-300rpx"},{default:i((()=>[d(S,{class:"w-45-pes-",ripple:!0,onClick:a[6]||(a[6]=e=>c(q)(!1))},{default:i((()=>[m("保存")])),_:1}),d(S,{class:"w-45-pes-",type:"primary",ripple:!0,onClick:a[7]||(a[7]=e=>c(q)(!0))},{default:i((()=>[m("提交")])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-c2445174"]]);export{I as default};