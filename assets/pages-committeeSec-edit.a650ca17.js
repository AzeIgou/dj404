import{k as e,L as l,am as a,m as t,q as o,D as s,an as u,o as r,b as i,a as d,w as n,x as c,Y as m,f as p,e as f,F as v,B as _,C as y,h as b,Z as V}from"./index.7dddb93e.js";import{_ as g}from"./u-navbar.2247389e.js";import{_ as w}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{_ as h}from"./u-input.4a92a7e0.js";import{_ as C,a as j}from"./u-form.2758243d.js";import{_ as x,a as k}from"./u-cell-group.3ff6fc80.js";import{_ as U}from"./u-button.7f757efe.js";import{_ as F}from"./u-switch.a28c9770.js";import{_ as S}from"./u-picker.e822a654.js";import{_ as z,d as B}from"./useDebounce.1587bee8.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang.53873a0c.js";import{d as L,c as R}from"./index.14235ccc.js";import{b as A}from"./index.ef7b58f7.js";import{g as T}from"./go.59004091.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-upload.fc59abfe.js";import"./u-line-progress.c40d9c0e.js";const E=D(e({__name:"edit",setup(e){const D=l(),E=a(),I=t(""),q=t(""),H=t(!1),J=t(!1);let N=t([]),Y=t([]),Z=t([]);const G=t(!1),K=t(!1),M=t(""),P=t(""),Q=t([]);let W=t(),X=t(),$=t({flowCode:"",code:"",level:void 0,type:void 0,name:"",sort:void 0,des:"",cover:"",isSubmit:!0,videos:[],typicalCases:[],isShow:!0,partyBranchCode:""});o((async e=>{if(e){let l=JSON.parse(e.committeeSecitem);Object.keys(l).filter((e=>Object.keys($.value).includes(e))).reduce(((e,a)=>(e[a]=l[a],e)),$.value),Z.value=l.typicalCases.map((e=>({name:e.title,url:e.content}))),Y.value=l.videos.map((e=>({name:e.title,url:e.video}))),M.value=L[l.level].type,P.value=R[l.type].type,N.value.push({url:s.ResourceUrl+l.cover}),q.value=l.partyBranch,I.value=l.partyCommittee,Q.value=await u({code:l.partyCommitteeCode})}}));const ee=async e=>{I.value=E.committeeList[e[0]].name;let l=await u({code:E.committeeList[e[0]].code});Q.value=l},le=e=>{q.value=Q.value[e[0]].name,$.value.partyBranchCode=Q.value[e[0]].code},ae=e=>{$.value.level=e[0],M.value=L[e[0]].type},te=e=>{$.value.type=e[0],P.value=R[e[0]].type},oe=e=>{$.value.cover=e,console.log($.value)},se=()=>{W.value.uploadFile()},ue=()=>{X.value.uploadFile()},re=e=>{$.value.videos.push({title:e.name,video:e.url})},ie=e=>{$.value.typicalCases.push({title:e.name,content:e.url})},de=B((async()=>{let e=ne($.value);console.log(e);for(const[a,t]of Object.entries($.value))if("videos"!==a&&"typicalCases"!==a&&"code"!==a&&"flowCode"!==a){if(e){await A($.value);try{D.showTips({title:"修改成功",type:"success"}),setTimeout((()=>{T("/pages/committeeSec/index"),V("committeeAddSuccess")}),1e3)}catch(l){}break}D.showTips({title:"请将内容填写完整",type:"warning"});break}}),1e3),ne=e=>{for(const[l,a]of Object.entries(e))if("videos"!==l&&"typicalCases"!==l&&"code"!==l&&"flowCode"!==l&&(""===a||Array.isArray(a)&&0===a.length||void 0===a))return!1;return!0},ce=e=>{$.value.typicalCases.forEach(((l,a)=>{l.title==e.name&&$.value.videos.splice(a,1)}))},me=e=>{$.value.videos.forEach(((l,a)=>{l.title==e.name&&$.value.videos.splice(a,1)}))};return(e,l)=>{const a=_(y("u-navbar"),g),t=_(y("message"),w),o=_(y("u-input"),h),s=_(y("u-form-item"),C),u=_(y("u-form"),j),V=b,B=_(y("u-cell-item"),x),A=_(y("u-button"),U),T=_(y("u-switch"),F),D=_(y("u-cell-group"),k),ne=_(y("u-picker"),S);return r(),i(v,null,[d(a,{"title-color":"#000","is-back":!0,title:"修改党建双创",background:{background:"#ffffff"},"border-bottom":!1}),d(t,{navbarHeight:48}),d(V,{class:"container pb-20rpx"},{default:n((()=>[d(u,{clas:"p-4px",model:c($),"label-width":"120",ref:"uForm","label-align":"center"},{default:n((()=>[d(s,{label:"名称"},{default:n((()=>[d(o,{modelValue:c($).name,"onUpdate:modelValue":l[0]||(l[0]=e=>c($).name=e),placeholder:"请输入双创名称"},null,8,["modelValue"])])),_:1}),d(s,{label:"排序"},{default:n((()=>[d(o,{modelValue:c($).sort,"onUpdate:modelValue":l[1]||(l[1]=e=>c($).sort=e),placeholder:"请输入双创排序"},null,8,["modelValue"])])),_:1}),d(s,{label:"简介"},{default:n((()=>[d(o,{modelValue:c($).des,"onUpdate:modelValue":l[2]||(l[2]=e=>c($).des=e),type:"textarea",placeholder:"请输入双创简介"},null,8,["modelValue"])])),_:1}),d(s,{label:"级别"},{default:n((()=>[d(o,{modelValue:c(M),"onUpdate:modelValue":l[3]||(l[3]=e=>m(M)?M.value=e:null),onClick:l[4]||(l[4]=e=>G.value=!0),disabled:!0,placeholder:"请选择双创级别"},null,8,["modelValue"])])),_:1}),d(s,{label:"类型"},{default:n((()=>[d(o,{modelValue:c(P),"onUpdate:modelValue":l[5]||(l[5]=e=>m(P)?P.value=e:null),onClick:l[6]||(l[6]=e=>K.value=!0),disabled:!0,placeholder:"请选择双创级别"},null,8,["modelValue"])])),_:1}),d(s,{label:"二级党委"},{default:n((()=>[d(o,{placeholder:"请选择二级党委",disabled:!0,onClick:l[7]||(l[7]=e=>H.value=!0),modelValue:c(I),"onUpdate:modelValue":l[8]||(l[8]=e=>m(I)?I.value=e:null)},null,8,["modelValue"])])),_:1}),d(s,{label:"党支部"},{default:n((()=>[d(o,{placeholder:"请选择党支部",disabled:!0,onClick:l[9]||(l[9]=e=>J.value=!0),modelValue:c(q),"onUpdate:modelValue":l[10]||(l[10]=e=>m(q)?q.value=e:null)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),d(D,null,{default:n((()=>[d(B,{arrow:!1},{default:n((()=>[d(V,{slot:"icon",class:"flex items-center"},{default:n((()=>[d(V,{class:"justify-center w-full"},{default:n((()=>[d(V,{class:"w-224rpx"},{default:n((()=>[p(" 双创封面上传 ")])),_:1}),d(V,{class:"w-700rpx"},{default:n((()=>[d(z,{"file-list":c(N),onUploadSuccess:oe,onImgRemove:l[11]||(l[11]=e=>c($).cover="")},null,8,["file-list"])])),_:1})])),_:1})])),_:1})])),_:1}),d(B,{arrow:!1},{default:n((()=>[d(V,{slot:"icon",class:"flex items-center"},{default:n((()=>[d(V,{class:"justify-center w-full"},{default:n((()=>[d(V,{class:"flex justify-between"},{default:n((()=>[d(V,{class:"w-224rpx"},{default:n((()=>[p(" 微视频 ")])),_:1}),d(A,{type:"primary",size:"mini",onClick:f(se,["self"])},{default:n((()=>[p("上传")])),_:1},8,["onClick"])])),_:1}),d(V,{class:"w-700rpx"},{default:n((()=>[d(O,{ref_key:"fileupload",ref:W,"props-list":c(Y),onFileUploadFinsh:re,onRemoveFile:me},null,8,["props-list"])])),_:1})])),_:1})])),_:1})])),_:1}),d(B,{arrow:!1},{default:n((()=>[d(V,{slot:"icon",class:"flex items-center"},{default:n((()=>[d(V,{class:"justify-center w-full"},{default:n((()=>[d(V,{class:"flex justify-between"},{default:n((()=>[d(V,{class:"w-224rpx"},{default:n((()=>[p(" 典型案例 ")])),_:1}),d(A,{type:"primary",size:"mini",onClick:f(ue,["self"])},{default:n((()=>[p("上传")])),_:1},8,["onClick"])])),_:1}),d(V,{class:"w-700rpx"},{default:n((()=>[d(O,{ref_key:"modelfileupload",ref:X,onFileUploadFinsh:ie,"props-list":c(Z),onRemoveFile:ce},null,8,["props-list"])])),_:1})])),_:1})])),_:1})])),_:1}),d(B,{title:"是否展示",arrow:!1},{"right-icon":n((()=>[d(T,{modelValue:c($).isShow,"onUpdate:modelValue":l[12]||(l[12]=e=>c($).isShow=e),activeColor:"#B94949"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(ne,{mode:"selector",modelValue:c(H),"onUpdate:modelValue":l[13]||(l[13]=e=>m(H)?H.value=e:null),range:c(E).committeeList,"z-index":"99999999999999",title:"请选择二级党委","default-selector":[0],"range-key":"name",onConfirm:ee},null,8,["modelValue","range"]),d(ne,{mode:"selector",modelValue:c(J),"onUpdate:modelValue":l[14]||(l[14]=e=>m(J)?J.value=e:null),range:c(Q),"z-index":"99999999999999",title:"请选择党支部","default-selector":[0],"range-key":"name",onConfirm:le},null,8,["modelValue","range"]),d(ne,{mode:"selector",modelValue:c(G),"onUpdate:modelValue":l[15]||(l[15]=e=>m(G)?G.value=e:null),range:c(L),"z-index":"99999999999999",title:"请选择双创级别","default-selector":[0],"range-key":"type",onConfirm:ae},null,8,["modelValue","range"]),d(ne,{mode:"selector",modelValue:c(K),"onUpdate:modelValue":l[16]||(l[16]=e=>m(K)?K.value=e:null),range:c(R),"z-index":"99999999999999",title:"请选择双创类型","default-selector":[0],"range-key":"type",onConfirm:te},null,8,["modelValue","range"]),d(V,{class:"flex items-center justify-around w-full h-300rpx"},{default:n((()=>[d(A,{class:"w-95-pes-",type:"primary",ripple:!0,onClick:l[17]||(l[17]=e=>c(de)())},{default:n((()=>[p("提交")])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-e124b0ce"]]);export{E as default};
