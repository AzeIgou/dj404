import{a8 as e,B as t,C as a,o as i,c as l,w as o,a as s,n as u,d as n,h as d}from"./index.f8f0a8a6.js";import{b as r}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";const h=c({name:"u-switch",emits:["update:modelValue","input","change"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:50},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},data:()=>({}),computed:{valueCom(){return this.modelValue},switchStyle(){let e={};return e.fontSize=this.size+"rpx",e.backgroundColor=this.valueCom?this.activeColor:this.inactiveColor,e},loadingColor(){return this.valueCom?this.activeColor:null}},methods:{onClick(){this.disabled||this.loading||(this.vibrateShort&&e(),this.$emit("input",!this.valueCom),this.$emit("update:modelValue",!this.valueCom),this.$nextTick((()=>{this.$emit("change",this.valueCom?this.activeValue:this.inactiveValue)})))}}},[["render",function(e,c,h,p,f,m){const v=t(a("u-loading"),r),C=d;return i(),l(C,{class:n(["u-switch",[1==m.valueCom?"u-switch--on":"",h.disabled?"u-switch--disabled":""]]),onClick:m.onClick,style:u([m.switchStyle])},{default:o((()=>[s(C,{class:"u-switch__node node-class",style:u({width:e.$u.addUnit(h.size),height:e.$u.addUnit(h.size)})},{default:o((()=>[s(v,{show:h.loading,class:"u-switch__loading",size:.6*h.size,color:m.loadingColor},null,8,["show","size","color"])])),_:1},8,["style"])])),_:1},8,["class","onClick","style"])}],["__scopeId","data-v-6d6f3a11"]]);export{h as _};