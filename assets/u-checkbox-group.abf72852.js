import{a as e}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{B as t,C as i,o as a,c as s,w as l,a as n,d as r,n as o,I as h,h as u}from"./index.f8f0a8a6.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{E as d}from"./emitter.9c2dba95.js";const p=c({name:"u-checkbox",emits:["update:modelValue","input","change"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},name:{type:[String,Number],default:""},shape:{type:String,default:""},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:()=>({parentDisabled:!1,newParams:{}}),created(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{valueCom(){return this.modelValue},isDisabled(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle(){let e={};return this.elActiveColor&&this.valueCom&&!this.isDisabled&&(e.borderColor=this.elActiveColor,e.backgroundColor=this.elActiveColor),e.width=this.$u.addUnit(this.checkboxSize),e.height=this.$u.addUnit(this.checkboxSize),e},iconColor(){return this.valueCom?"#ffffff":"transparent"},iconClass(){let e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),1==this.valueCom&&e.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.valueCom&&this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e.join(" ")},checkboxStyle(){let e={};return this.parent&&this.parent.width&&(e.width=this.parent.width,e.flex=`0 0 ${this.parent.width}`),this.parent&&this.parent.wrap&&(e.width="100%",e.flex="0 0 100%"),e}},mounted(){this._emitEvent()},watch:{valueCom:{handler:function(e,t){this._emitEvent()}}},methods:{_emitEvent(){let e={value:this.valueCom,name:this.name};this.parent&&this.parent.emitEvent&&this.parent._emitEvent(e)},onClickLabel(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle(){this.isDisabled||this.setValue()},emitEvent(){let e={value:!this.valueCom,name:this.name};this.$emit("change",e),this.parent&&this.parent.emitEvent&&this.parent.emitEvent(e)},setValue(){let e=this.valueCom,t=0;if(this.parent&&this.parent.children&&this.parent.children.map((e=>{e.value&&t++})),1==e)this.emitEvent(),this.$emit("input",!e),this.$emit("update:modelValue",!e);else{if(this.parent&&t>=this.parent.max)return this.$u.toast(`最多可选${this.parent.max}项`);this.emitEvent(),this.$emit("input",!e),this.$emit("update:modelValue",!e)}}}},[["render",function(c,d,p,m,b,f){const v=t(i("u-icon"),e),_=u;return a(),s(_,{class:"u-checkbox",style:o([f.checkboxStyle])},{default:l((()=>[n(_,{class:r(["u-checkbox__icon-wrap",[f.iconClass]]),onClick:f.toggle,style:o([f.iconStyle])},{default:l((()=>[n(v,{class:"u-checkbox__icon-wrap__icon",name:"checkbox-mark",size:f.checkboxIconSize,color:f.iconColor},null,8,["size","color"])])),_:1},8,["onClick","class","style"]),n(_,{class:"u-checkbox__label",onClick:f.onClickLabel,style:o({fontSize:c.$u.addUnit(p.labelSize)})},{default:l((()=>[h(c.$slots,"default",{},void 0,!0)])),_:3},8,["onClick","style"])])),_:3},8,["style"])}],["__scopeId","data-v-3cda5dc2"]]);const m=c({name:"u-checkbox-group",emits:["update:modelValue","input","change"],mixins:[d],props:{value:{type:[String,Number,Array,Boolean],default:""},modelValue:{type:[String,Number,Array,Boolean],default:""},max:{type:[Number,String],default:999},disabled:{type:Boolean,default:!1},name:{type:[Boolean,String],default:""},labelDisabled:{type:Boolean,default:!1},shape:{type:String,default:"square"},activeColor:{type:String,default:"#2979ff"},size:{type:[String,Number],default:34},width:{type:String,default:"auto"},wrap:{type:Boolean,default:!1},iconSize:{type:[String,Number],default:20}},data:()=>({values:[],uFromData:{inputAlign:"left"}}),created(){this.children=[]},mounted(){let e=this.$u.$parent.call(this,"u-form");e&&Object.keys(this.uFromData).map((t=>{this.uFromData[t]=e[t]}))},methods:{emitEvent(e){let t=this.values||[];if(e.value){-1===t.indexOf(e.name)&&t.push(e.name)}else{let i=t.indexOf(e.name);i>-1&&t.splice(i,1)}this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t),setTimeout((()=>{this.dispatch("u-form-item","onFieldChange",t)}),60)},_emitEvent(e){let t=this.values||[];if(e.value){-1===t.indexOf(e.name)&&t.push(e.name)}else{let i=t.indexOf(e.name);i>-1&&t.splice(i,1)}}}},[["render",function(e,t,i,n,o,c){const d=u;return a(),s(d,{class:r(["u-checkbox-group u-clearfix","right"==o.uFromData.inputAlign?"flex-end":""])},{default:l((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-cc8420d5"]]);export{p as _,m as a};