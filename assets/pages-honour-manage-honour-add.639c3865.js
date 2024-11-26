import{k as e,L as l,am as a,m as o,o as t,b as r,a as u,w as s,x as d,Y as n,y as m,t as i,f as c,e as f,F as p,an as _,B as y,C as b,h as v,Z as g}from"./index.f8f0a8a6.js";import{_ as h}from"./u-navbar.1284843c.js";import{_ as V}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as x}from"./u-input.f5a1625f.js";import{_ as w,a as j}from"./u-form.86e30c0a.js";import{_ as k,a as C}from"./u-cell-group.c1b9a19e.js";import{_ as U}from"./u-picker.4f0ca51a.js";import{_ as A}from"./u-button.9b5620aa.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang.c27d8088.js";import{_ as T,d as F}from"./useDebounce.704380c3.js";import{b as B}from"./Honour.fa974be3.js";import{g as L}from"./go.241c4b18.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import"./emitter.9c2dba95.js";import"./u-upload.bcce9b3d.js";import"./u-line-progress.aa9a4d7b.js";const z=H(e({__name:"add",setup(e){const H=l(),z=a(),I=o(!1),O=o(!1),R=o(!1),S=o(""),D=o(""),E=o([]),Y=o();let Z=o({awardUnit:"",code:"",fileAddress:[],fileName:"",fileNumber:"",gloryAddress:[],gloryName:"",gloryTime:"",honoree:"",partyCommitteeCode:"",partyBranchCode:""});const q=e=>{Z.value.gloryAddress.push({name:e.split("/")[1],url:e})},G=e=>{Z.value.gloryTime=e.year+"-"+e.month+"-"+e.day},J=()=>{Y.value.uploadFile()},K=e=>{Z.value.fileAddress.push(e)},M=async e=>{S.value=z.committeeList[e[0]].name,Z.value.partyCommitteeCode=z.committeeList[e[0]].code,D.value="";let l=await _({code:z.committeeList[e[0]].code});E.value=l},P=e=>{D.value=E.value[e[0]].name,Z.value.partyBranchCode=E.value[e[0]].code},Q=e=>{Z.value.gloryAddress.splice(e,1)},W=F((async()=>{let e=X(Z.value);for(const[a,o]of Object.entries(Z.value))if("partyBranchCode"!==a&&"code"!==a){if(console.log(Z.value),e){await B(Z.value);try{H.showTips({title:"新增成功",type:"success"}),setTimeout((()=>{L("/pages/honour-manage/honour/honour"),g("addHonourSuccess")}),1e3)}catch(l){}break}H.showTips({title:"请将内容填写完整",type:"warning"});break}}),1e3),X=e=>{for(const[l,a]of Object.entries(e))if("partyBranchCode"!==l&&"code"!==l&&(""===a||Array.isArray(a)&&0===a.length||void 0===a))return!1;return!0},$=e=>{Z.value.fileAddress.forEach(((l,a)=>{l.name==e.name&&Z.value.fileAddress.splice(a,1)}))};return(e,l)=>{const a=y(b("u-navbar"),h),o=y(b("message"),V),_=y(b("u-input"),x),g=y(b("u-form-item"),w),F=y(b("u-form"),j),B=v,L=y(b("u-cell-item"),k),H=y(b("u-cell-group"),C),X=y(b("u-picker"),U),ee=y(b("u-button"),A);return t(),r(p,null,[u(a,{"title-color":"#000","is-back":!0,title:"新增荣誉",background:{background:"#ffffff"},"border-bottom":!1}),u(o,{navbarHeight:48}),u(B,{class:"container pb-20rpx"},{default:s((()=>[u(F,{clas:"p-4px",model:d(Z),"label-width":"200",ref:"uForm","label-align":"center"},{default:s((()=>[u(g,{label:"荣誉名称"},{default:s((()=>[u(_,{modelValue:d(Z).gloryName,"onUpdate:modelValue":l[0]||(l[0]=e=>d(Z).gloryName=e),placeholder:"请输入荣誉名称"},null,8,["modelValue"])])),_:1}),u(g,{label:"获奖对象"},{default:s((()=>[u(_,{modelValue:d(Z).honoree,"onUpdate:modelValue":l[1]||(l[1]=e=>d(Z).honoree=e),placeholder:"请输入获奖对象"},null,8,["modelValue"])])),_:1}),u(g,{label:"颁奖单位"},{default:s((()=>[u(_,{modelValue:d(Z).awardUnit,"onUpdate:modelValue":l[2]||(l[2]=e=>d(Z).awardUnit=e),placeholder:"请输入颁奖单位"},null,8,["modelValue"])])),_:1}),u(g,{label:"获奖文件名称"},{default:s((()=>[u(_,{modelValue:d(Z).fileName,"onUpdate:modelValue":l[3]||(l[3]=e=>d(Z).fileName=e),placeholder:"请输入获奖文件名称"},null,8,["modelValue"])])),_:1}),u(g,{label:"获奖文件号"},{default:s((()=>[u(_,{modelValue:d(Z).fileNumber,"onUpdate:modelValue":l[4]||(l[4]=e=>d(Z).fileNumber=e),placeholder:"请输入获奖文件号"},null,8,["modelValue"])])),_:1}),u(g,{label:"二级党委"},{default:s((()=>[u(_,{placeholder:"请选择二级党委",disabled:!0,onClick:l[5]||(l[5]=e=>O.value=!0),modelValue:d(S),"onUpdate:modelValue":l[6]||(l[6]=e=>n(S)?S.value=e:null)},null,8,["modelValue"])])),_:1}),u(g,{label:"党支部"},{default:s((()=>[u(_,{placeholder:"请选择党支部",disabled:!0,onClick:l[7]||(l[7]=e=>R.value=!0),modelValue:d(D),"onUpdate:modelValue":l[8]||(l[8]=e=>n(D)?D.value=e:null)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),u(H,null,{default:s((()=>[u(L,{arrow:!1},{default:s((()=>[u(B,{slot:"icon",class:"flex items-center"},{default:s((()=>[m("span",null,"获奖时间"),u(B,{class:"flex flex-col items-center justify-center my-20rpx"},{default:s((()=>[u(B,{class:"w-350rpx h-50rpx m-20rpx rounded-lg bg--wn-f5f5f5 leading-50rpx text-center mx-20rpx",onClick:l[9]||(l[9]=e=>I.value=!0)},{default:s((()=>[""==d(Z).gloryTime?(t(),r("span",{key:0}," 开始时间 ")):(t(),r("span",{key:1,class:"v-else"},i(d(Z).gloryTime),1))])),_:1})])),_:1})])),_:1})])),_:1}),u(L,{arrow:!1},{default:s((()=>[u(B,{slot:"icon",class:"flex items-center"},{default:s((()=>[u(B,{class:"justify-center w-full"},{default:s((()=>[u(B,{class:"w-224rpx"},{default:s((()=>[c(" 荣誉证书上传 ")])),_:1}),u(B,{class:"w-700rpx"},{default:s((()=>[u(T,{"file-list":[],onUploadSuccess:q,onImgRemove:Q})])),_:1})])),_:1})])),_:1})])),_:1}),u(L,{arrow:!1,onClick:f(J,["self"])},{default:s((()=>[u(B,{slot:"icon",class:"flex items-center"},{default:s((()=>[u(B,{class:"justify-center w-full"},{default:s((()=>[u(B,{class:"w-224rpx"},{default:s((()=>[c(" 获奖文件上传 ")])),_:1}),u(B,{class:"w-700rpx"},{default:s((()=>[u(N,{ref_key:"fileupload",ref:Y,onFileUploadFinsh:K,onRemoveFile:$},null,512)])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1}),u(X,{modelValue:d(I),"onUpdate:modelValue":l[10]||(l[10]=e=>n(I)?I.value=e:null),mode:"time",params:{year:!0,month:!0,day:!0},onConfirm:G},null,8,["modelValue"]),u(X,{mode:"selector",modelValue:d(O),"onUpdate:modelValue":l[11]||(l[11]=e=>n(O)?O.value=e:null),range:d(z).committeeList,"z-index":"99999999999999",title:"请选择二级党委","default-selector":[0],"range-key":"name",onConfirm:M},null,8,["modelValue","range"]),u(X,{mode:"selector",modelValue:d(R),"onUpdate:modelValue":l[12]||(l[12]=e=>n(R)?R.value=e:null),range:d(E),"z-index":"99999999999999",title:"请选择党支部","default-selector":[0],"range-key":"name",onConfirm:P},null,8,["modelValue","range"]),u(B,{class:"flex items-center justify-around w-full h-300rpx"},{default:s((()=>[u(ee,{class:"w-95-pes-",type:"primary",ripple:!0,onClick:l[13]||(l[13]=e=>d(W)())},{default:s((()=>[c("提交")])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-301af36a"]]);export{z as default};