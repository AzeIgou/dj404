import{k as e,m as l,L as a,am as t,q as o,D as s,an as r,o as u,b as d,a as n,w as m,x as c,Y as i,y as p,t as f,f as v,a9 as _,aa as y,F as b,B as x,C as V,h,Z as g}from"./index.7dddb93e.js";import{_ as j}from"./u-navbar.2247389e.js";import{_ as C}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as w}from"./u-input.4a92a7e0.js";import{_ as k,a as U}from"./u-form.2758243d.js";import{_ as A,a as F}from"./u-cell-group.3ff6fc80.js";import{_ as T}from"./u-switch.a28c9770.js";import{_ as O}from"./u-picker.e822a654.js";import{_ as B}from"./u-button.7f757efe.js";import{_ as L,d as N}from"./useDebounce.1587bee8.js";import{s as R}from"./index.14235ccc.js";import{g as S}from"./go.59004091.js";import{a as z,b as I}from"./subjecet.47c34711.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-upload.fc59abfe.js";import"./u-line-progress.c40d9c0e.js";const E=D(e({__name:"edit",setup(e){const D=l(!1),E=a(),q=t(),H=l(!1),Y=l(!1),Z=l(!1),G=l(!1),J=l(""),K=l("");let M=l(""),P=l([]),Q=l([]);const W=l([]);let X=l({isOver:!1,projectName:"",approvalCode:"",startTime:"",executor:"",level:void 0,partyCommitteeCode:"",partyBranchCode:"",source:"",projectCode:"",startFileAddress:[],endFileAddress:[],endTime:"",code:""});o((async e=>{if(e&&e.code){let l=await z({code:e.code});Object.keys(l).filter((e=>Object.keys(X.value).includes(e))).reduce(((e,a)=>(e[a]=l[a],e)),X.value),M.value=R[l.level].type,J.value=l.partyCommitteeName,K.value=l.partyBranchName,X.value.startFileAddress.forEach((e=>{P.value.push({url:s.ResourceUrl+e.url,name:e.name})})),X.value.endFileAddress.forEach((e=>{Q.value.push({url:s.ResourceUrl+e.url,name:e.name})}));let a=await r({code:l.partyCommitteeCode});W.value=a}}));const $=e=>{X.value.startFileAddress.push({name:e.split("/")[1],url:e})},ee=e=>{X.value.endFileAddress.push({name:e.split("/")[1],url:e})},le=e=>{X.value.startTime=e.year+"-"+e.month+"-"+e.day},ae=e=>{X.value.endTime=e.year+"-"+e.month+"-"+e.day},te=async e=>{J.value=q.committeeList[e[0]].name,X.value.partyCommitteeCode=q.committeeList[e[0]].code,K.value="";let l=await r({code:q.committeeList[e[0]].code});W.value=l},oe=e=>{K.value=W.value[e[0]].name,X.value.partyBranchCode=W.value[e[0]].code},se=e=>{X.value.startFileAddress.splice(e,1)},re=e=>{X.value.endFileAddress.splice(e,1)},ue=e=>{X.value.level=R[e[0]].value,M.value=R[e[0]].type},de=N((async()=>{let e=ne(X.value);console.log(e);for(const[a,t]of Object.entries(X.value))if("partyBranchCode"!==a&&"code"!==a&&"endFileAddress"!==a&&"endTime"!==a&&"startFileAddress"!==a){if(e){await I(X.value);try{E.showTips({title:"修改成功",type:"success"}),setTimeout((()=>{S("/pages/honour-manage/subject/subject"),g("addSubjectSuccess")}),1e3)}catch(l){}break}E.showTips({title:"请将内容填写完整",type:"warning"});break}}),1e3),ne=e=>{for(const[l,a]of Object.entries(e))if("partyBranchCode"!==l&&"code"!==l&&"endFileAddress"!==l&&"endTime"!==l&&"startFileAddress"!==l&&(""===a||Array.isArray(a)&&0===a.length||void 0===a))return!1;return!0};return(e,l)=>{const a=x(V("u-navbar"),j),t=x(V("message"),C),o=x(V("u-input"),w),s=x(V("u-form-item"),k),r=x(V("u-form"),U),g=h,N=x(V("u-cell-item"),A),S=x(V("u-switch"),T),z=x(V("u-cell-group"),F),I=x(V("u-picker"),O),E=x(V("u-button"),B);return u(),d(b,null,[n(a,{"title-color":"#000","is-back":!0,title:"修改课题",background:{background:"#ffffff"},"border-bottom":!1}),n(t,{navbarHeight:48}),n(g,{class:"container pb-20rpx"},{default:m((()=>[n(r,{clas:"p-4px",model:c(X),"label-width":"200",ref:"uForm","label-align":"center"},{default:m((()=>[n(s,{label:"项目名称"},{default:m((()=>[n(o,{modelValue:c(X).projectName,"onUpdate:modelValue":l[0]||(l[0]=e=>c(X).projectName=e),placeholder:"请输入项目名称"},null,8,["modelValue"])])),_:1}),n(s,{label:"项目负责人"},{default:m((()=>[n(o,{modelValue:c(X).approvalCode,"onUpdate:modelValue":l[1]||(l[1]=e=>c(X).approvalCode=e),placeholder:"请输入项目负责人"},null,8,["modelValue"])])),_:1}),n(s,{label:"项目来源"},{default:m((()=>[n(o,{modelValue:c(X).source,"onUpdate:modelValue":l[2]||(l[2]=e=>c(X).source=e),placeholder:"请输入项目来源"},null,8,["modelValue"])])),_:1}),n(s,{label:"项目批准文号"},{default:m((()=>[n(o,{modelValue:c(X).executor,"onUpdate:modelValue":l[3]||(l[3]=e=>c(X).executor=e),placeholder:"请输入项目批准文号"},null,8,["modelValue"])])),_:1}),n(s,{label:"项目编号"},{default:m((()=>[n(o,{modelValue:c(X).projectCode,"onUpdate:modelValue":l[4]||(l[4]=e=>c(X).projectCode=e),placeholder:"请输入项目编号"},null,8,["modelValue"])])),_:1}),n(s,{label:"二级党委"},{default:m((()=>[n(o,{placeholder:"请选择二级党委",disabled:!0,onClick:l[5]||(l[5]=e=>Y.value=!0),modelValue:c(J),"onUpdate:modelValue":l[6]||(l[6]=e=>i(J)?J.value=e:null)},null,8,["modelValue"])])),_:1}),n(s,{label:"党支部"},{default:m((()=>[n(o,{placeholder:"请选择党支部",disabled:!0,onClick:l[7]||(l[7]=e=>G.value=!0),modelValue:c(K),"onUpdate:modelValue":l[8]||(l[8]=e=>i(K)?K.value=e:null)},null,8,["modelValue"])])),_:1}),n(s,{label:"项目级别"},{default:m((()=>[n(o,{placeholder:"请选择项目级别",disabled:!0,onClick:l[9]||(l[9]=e=>Z.value=!0),modelValue:c(M),"onUpdate:modelValue":l[10]||(l[10]=e=>i(M)?M.value=e:M=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),n(z,null,{default:m((()=>[n(N,{arrow:!1},{default:m((()=>[n(g,{slot:"icon",class:"flex items-center"},{default:m((()=>[p("span",null,"发表日期"),n(g,{class:"flex flex-col items-center justify-center my-20rpx"},{default:m((()=>[n(g,{class:"w-350rpx h-50rpx m-20rpx rounded-lg bg--wn-f5f5f5 leading-50rpx text-center mx-20rpx",onClick:l[11]||(l[11]=e=>H.value=!0)},{default:m((()=>[""==c(X).startTime?(u(),d("span",{key:0}," 立项日期 ")):(u(),d("span",{key:1,class:"v-else"},f(c(X).startTime),1))])),_:1})])),_:1})])),_:1})])),_:1}),n(N,{arrow:!1},{default:m((()=>[n(g,{slot:"icon",class:"flex items-center"},{default:m((()=>[n(g,{class:"justify-center w-full"},{default:m((()=>[n(g,{class:"w-224rpx"},{default:m((()=>[v(" 立项支撑材料上传 ")])),_:1}),n(g,{class:"w-700rpx"},{default:m((()=>[n(L,{"file-list":c(P),onUploadSuccess:$,onImgRemove:se},null,8,["file-list"])])),_:1})])),_:1})])),_:1})])),_:1}),n(N,{arrow:!1,title:"是否结课"},{"right-icon":m((()=>[n(S,{modelValue:c(X).isOver,"onUpdate:modelValue":l[12]||(l[12]=e=>c(X).isOver=e),activeColor:"#B94949"},null,8,["modelValue"])])),_:1}),_(n(N,{arrow:!1},{default:m((()=>[n(g,{slot:"icon",class:"flex items-center"},{default:m((()=>[p("span",null,"结课日期"),n(g,{class:"flex flex-col items-center justify-center my-20rpx"},{default:m((()=>[n(g,{class:"w-350rpx h-50rpx m-20rpx rounded-lg bg--wn-f5f5f5 leading-50rpx text-center mx-20rpx",onClick:l[13]||(l[13]=e=>D.value=!0)},{default:m((()=>[""==c(X).endTime?(u(),d("span",{key:0}," 结课日期 ")):(u(),d("span",{key:1,class:"v-else"},f(c(X).endTime),1))])),_:1})])),_:1})])),_:1})])),_:1},512),[[y,c(X).isOver]]),_(n(N,{arrow:!1},{default:m((()=>[n(g,{slot:"icon",class:"flex items-center"},{default:m((()=>[n(g,{class:"justify-center w-full"},{default:m((()=>[n(g,{class:"w-224rpx"},{default:m((()=>[v(" 结课支撑材料上传 ")])),_:1}),n(g,{class:"w-700rpx"},{default:m((()=>[n(L,{"file-list":c(Q),onUploadSuccess:ee,onImgRemove:re},null,8,["file-list"])])),_:1})])),_:1})])),_:1})])),_:1},512),[[y,c(X).isOver]])])),_:1})])),_:1}),n(I,{modelValue:c(H),"onUpdate:modelValue":l[14]||(l[14]=e=>i(H)?H.value=e:null),mode:"time",params:{year:!0,month:!0,day:!0},onConfirm:le},null,8,["modelValue"]),n(I,{modelValue:c(D),"onUpdate:modelValue":l[15]||(l[15]=e=>i(D)?D.value=e:null),mode:"time",params:{year:!0,month:!0,day:!0},onConfirm:ae},null,8,["modelValue"]),n(I,{mode:"selector",modelValue:c(Z),"onUpdate:modelValue":l[16]||(l[16]=e=>i(Z)?Z.value=e:null),range:c(R),"z-index":"99999999999999",title:"请选择论文级别","default-selector":[0],"range-key":"type",onConfirm:ue},null,8,["modelValue","range"]),n(I,{mode:"selector",modelValue:c(Y),"onUpdate:modelValue":l[17]||(l[17]=e=>i(Y)?Y.value=e:null),range:c(q).committeeList,"z-index":"99999999999999",title:"请选择二级党委","default-selector":[0],"range-key":"name",onConfirm:te},null,8,["modelValue","range"]),n(I,{mode:"selector",modelValue:c(G),"onUpdate:modelValue":l[18]||(l[18]=e=>i(G)?G.value=e:null),range:c(W),"z-index":"99999999999999",title:"请选择党支部","default-selector":[0],"range-key":"name",onConfirm:oe},null,8,["modelValue","range"]),n(g,{class:"flex items-center justify-around w-full h-300rpx"},{default:m((()=>[n(E,{class:"w-95-pes-",type:"primary",ripple:!0,onClick:l[19]||(l[19]=e=>c(de)())},{default:m((()=>[v("提交")])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-c3d8278d"]]);export{E as default};