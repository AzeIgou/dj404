import{o as e,c as t,w as s,a as r,d as a,n as o,I as d,b as l,F as p,f as i,t as u,g as n,h as c}from"./index.7dddb93e.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";const y=f({name:"u-line-progress",props:{round:{type:Boolean,default:!0},type:{type:String,default:""},activeColor:{type:String,default:"#19be6b"},inactiveColor:{type:String,default:"#ececec"},percent:{type:Number,default:0},showPercent:{type:Boolean,default:!0},height:{type:[Number,String],default:28},striped:{type:Boolean,default:!1},stripedActive:{type:Boolean,default:!1}},data:()=>({}),computed:{progressStyle(){let e={};return e.width=this.percent+"%",this.activeColor&&(e.backgroundColor=this.activeColor),e}},methods:{}},[["render",function(f,y,g,h,v,b){const m=c;return e(),t(m,{class:"u-progress",style:o({borderRadius:g.round?"100rpx":0,height:g.height+"rpx",backgroundColor:g.inactiveColor})},{default:s((()=>[r(m,{class:a([[g.type?`u-type-${g.type}-bg`:"",g.striped?"u-striped":"",g.striped&&g.stripedActive?"u-striped-active":""],"u-active"]),style:o([b.progressStyle])},{default:s((()=>[f.$slots.default||f.$slots.$default?d(f.$slots,"default",{key:0},void 0,!0):g.showPercent?(e(),l(p,{key:1},[i(u(g.percent+"%"),1)],64)):n("v-if",!0)])),_:3},8,["class","style"])])),_:3},8,["style"])}],["__scopeId","data-v-8df13ef3"]]);export{y as _};
