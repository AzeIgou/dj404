import{o as e,c as t,w as a,a as l,d as s,n as o,I as d,g as i,h as r,B as n,C as c,b as u,F as h,r as m,e as p,f,t as g,P as y,k,m as _,p as b,x,Y as v}from"./index.7dddb93e.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as w}from"./u-search.1cfa0f81.js";import{_ as S,a as V}from"./u-radio-group.1a98b216.js";import{_ as L,a as N}from"./u-checkbox-group.d4356cf6.js";import{a as j,c as T}from"./message.vue_vue_type_script_setup_true_lang.167ae55e.js";import{u as U}from"./meet.8370cffd.js";import{s as B}from"./index.04d21dbe.js";const I=C({name:"u-divider",props:{halfWidth:{type:[Number,String],default:150},borderColor:{type:String,default:"#dcdfe6"},type:{type:String,default:"primary"},color:{type:String,default:"#909399"},fontSize:{type:[Number,String],default:26},bgColor:{type:String,default:"#ffffff"},height:{type:[Number,String],default:"auto"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},useSlot:{type:Boolean,default:!0}},computed:{lineStyle(){let e={};return-1!=String(this.halfWidth).indexOf("%")?e.width=this.halfWidth:e.width=this.halfWidth+"rpx",this.borderColor&&(e.borderColor=this.borderColor),e}},methods:{click(){this.$emit("click")}}},[["render",function(n,c,u,h,m,p){const f=r;return e(),t(f,{class:"u-divider",style:o({height:"auto"==u.height?"auto":u.height+"rpx",backgroundColor:u.bgColor,marginBottom:u.marginBottom+"rpx",marginTop:u.marginTop+"rpx"}),onClick:p.click},{default:a((()=>[l(f,{class:s(["u-divider-line",[u.type?"u-divider-line--bordercolor--"+u.type:""]]),style:o([p.lineStyle])},null,8,["class","style"]),u.useSlot?(e(),t(f,{key:0,class:"u-divider-text",style:o({color:u.color,fontSize:u.fontSize+"rpx"})},{default:a((()=>[d(n.$slots,"default",{},void 0,!0)])),_:3},8,["style"])):i("v-if",!0),l(f,{class:s(["u-divider-line",[u.type?"u-divider-line--bordercolor--"+u.type:""]]),style:o([p.lineStyle])},null,8,["class","style"])])),_:3},8,["style","onClick"])}],["__scopeId","data-v-59009513"]]);const A=C({name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}},[["render",function(a,l,s,d,i,n){const c=r;return e(),t(c,{class:"u-gap",style:o([n.gapStyle])},null,8,["style"])}],["__scopeId","data-v-f01c7df4"]]);const z=C({props:{dataList:{type:Array,default:[]}},data:()=>({newList:[],oldList:[],searchText:""}),mounted(){this.newList=this.dataList,this.newList.forEach((e=>{e.state=!1,console.log(e)})),this.oldList=this.newList},methods:{test(){console.log("222")},searchList(){this.searchText?this.newList=this.newList.filter((e=>!!e.children&&e.children.some((e=>e.realName.includes(this.searchText))))):this.newList=this.oldList},showMore(e){e.state=!e.state,this.newList=JSON.parse(JSON.stringify(this.newList))},goDetail(e,t){t.checked=!t.checked,0==t.checked?e.checked=!1:e.checked=e.children.every((e=>1==e.checked)),this.$emit("clickChildItem",t)},chekcAll(e){e.checked=!e.checked,e.children.forEach((t=>{t.checked=e.checked,this.$emit("clickChildItem",t)}))}}},[["render",function(s,o,d,k,_,b){const x=y,v=r,C=n(c("u-icon"),j),w=n(c("u-checkbox"),L),S=n(c("u-checkbox-group"),N);return e(),t(v,{class:"main"},{default:a((()=>[l(v,{class:"search-info"},{default:a((()=>[l(v,{class:"search-item"},{default:a((()=>[l(x,{type:"text",class:"search-input",placeholder:"请输入关键字搜索",onInput:b.searchList,maxlength:"50",modelValue:_.searchText,"onUpdate:modelValue":o[0]||(o[0]=e=>_.searchText=e)},null,8,["onInput","modelValue"])])),_:1})])),_:1}),l(v,{class:"card-message"},{default:a((()=>[_.newList.length?(e(!0),u(h,{key:0},m(_.newList,((s,o)=>(e(),t(v,{class:"item-mess",key:o,onClick:p((e=>b.showMore(s)),["stop"])},{default:a((()=>[l(v,{class:"item1"},{default:a((()=>[l(v,{class:"item-left"},{default:a((()=>[l(C,{name:"account-fill",color:"#919399"}),l(v,{class:"item-left-name"},{default:a((()=>[f(g(s.realName),1)])),_:2},1024)])),_:2},1024),s.state?(e(),t(C,{key:0,name:"arrow-up",color:"#919399"})):(e(),t(C,{key:1,name:"arrow-down",color:"#919399",class:"v-else"}))])),_:2},1024),s.state&&s.children?(e(),t(v,{key:0},{default:a((()=>[l(v,{class:"flex justify-between",onClick:p((e=>b.chekcAll(s)),["stop"])},{default:a((()=>[l(v,{class:"item2-left ml-68rpx"},{default:a((()=>[l(v,{class:"item2-left-name"},{default:a((()=>[f("全选")])),_:1})])),_:1}),l(S,{onClick:e=>b.chekcAll(s)},{default:a((()=>[l(w,{modelValue:s.checked,"onUpdate:modelValue":e=>s.checked=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["onClick"])])),_:2},1032,["onClick"]),(e(!0),u(h,null,m(s.children,((o,d)=>(e(),t(v,{class:"item2 duration-300",key:d,onClick:p((e=>b.goDetail(s,o)),["stop"])},{default:a((()=>[l(v,{class:"item2-left"},{default:a((()=>[l(C,{name:"account-fill",color:"#919399"}),l(v,{class:"item2-left-name"},{default:a((()=>[f(g(o.realName),1)])),_:2},1024)])),_:2},1024),i(" //单选框 "),l(S,{onClick:e=>b.goDetail(s,o)},{default:a((()=>[l(w,{modelValue:o.checked,"onUpdate:modelValue":e=>o.checked=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["onClick"])])),_:2},1032,["onClick"])))),128))])),_:2},1024)):i("v-if",!0)])),_:2},1032,["onClick"])))),128)):i("v-if",!0),0==_.newList.length?(e(),t(v,{key:1,class:"no-data"},{default:a((()=>[f("暂无数据")])),_:1})):i("v-if",!0)])),_:1})])),_:1})}],["__scopeId","data-v-c911672b"]]),E=C(k({__name:"index",props:{show:{type:Boolean},popupTitle:null,showSearch:{type:Boolean},type:null},emits:["closePopup"],setup(s,{emit:o}){const d=s,p=U(),y=_(""),k=b((()=>p.userList)),C=b((()=>p.hostManList));C.value.forEach((e=>{e.checked=!1}));const j=b((()=>p.pmTree));j.value.forEach((e=>{e.checked=!1}));let I=b((()=>p.shouldArrive));const E=e=>{p.changePmTree(e),p.addShouldArrive(e)},P=async e=>{""==e&&(p.userList=await B({name:e}))},W=()=>{o("closePopup")},$=async e=>{console.log(e),"single"==d.type?p.userList=await B({name:e}):d.type};return(o,_)=>{const b=r,U=n(c("u-search"),w),B=n(c("u-gap"),A),D=n(c("u-radio"),S),M=n(c("u-radio-group"),V),O=n(c("u-checkbox"),L),J=n(c("u-checkbox-group"),N),F=n(c("u-popup"),T);return e(),t(b,null,{default:a((()=>[l(F,{modelValue:d.show,"onUpdate:modelValue":_[1]||(_[1]=e=>d.show=e),mode:"bottom","border-radius":"14",height:"1000rpx",onClose:W},{default:a((()=>[l(b,{class:"title"},{default:a((()=>[f(g(d.popupTitle),1)])),_:1}),l(b,{style:{padding:"20rpx"}},{default:a((()=>[s.showSearch?(e(),t(U,{key:0,onSearch:$,onChange:P,placeholder:"请输入姓名",modelValue:x(y),"onUpdate:modelValue":_[0]||(_[0]=e=>v(y)?y.value=e:null)},null,8,["modelValue"])):i("v-if",!0),l(B,{height:"15"}),i("单选"),"single"==d.type?(e(),t(M,{key:1,size:"700"},{default:a((()=>[l(b,{class:"flex flex-col gap"},{default:a((()=>[(e(!0),u(h,null,m(x(k),((s,o)=>(e(),t(D,{key:o,modelValue:s.checked,"onUpdate:modelValue":e=>s.checked=e,name:s.realName,class:"bg-white p-3",onChange:e=>{return t=s,void p.addRecord(t);var t}},{default:a((()=>[l(b,{class:"w-screen flex justify-around"},{default:a((()=>[l(b),l(b,{class:"justify-end"},{default:a((()=>[f(g(s.realName),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue","name","onChange"])))),128))])),_:1})])),_:1})):i("v-if",!0),"multiple"==d.type?(e(),t(J,{key:2},{default:a((()=>[(e(!0),u(h,null,m(x(C),((s,o)=>(e(),t(O,{key:o,modelValue:s.checked,"onUpdate:modelValue":e=>s.checked=e,name:s.realName,class:"bg-white p-1",onChange:e=>{return(t=s).checked=!t.checked,void p.addHostman(t);var t}},{default:a((()=>[l(b,{class:"w-screen flex justify-around"},{default:a((()=>[l(b),l(b,{class:"justify-end"},{default:a((()=>[f(g(s.realName),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue","name","onChange"])))),128))])),_:1})):i("v-if",!0),"tree"==d.type?(e(),t(b,{key:3},{default:a((()=>[l(z,{dataList:x(j),onClickChildItem:E},null,8,["dataList"])])),_:1})):i("v-if",!0),"absent"==d.type?(e(),t(J,{key:4},{default:a((()=>[(e(!0),u(h,null,m(x(I),((s,o)=>(e(),t(O,{key:o,modelValue:s.checked,"onUpdate:modelValue":e=>s.checked=e,name:s.realName,class:"bg-white p-1",onChange:e=>(e=>{p.addAbsentList(e)})(s)},{default:a((()=>[l(b,{class:"w-screen flex justify-around"},{default:a((()=>[l(b),l(b,{class:"justify-end"},{default:a((()=>[f(g(s.realName),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue","name","onChange"])))),128))])),_:1})):i("v-if",!0),l(B,{height:"45"})])),_:1})])),_:1},8,["modelValue"])])),_:1})}}}),[["__scopeId","data-v-c5cdfa24"]]);export{E as S,I as _};