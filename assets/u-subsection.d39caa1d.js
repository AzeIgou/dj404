import{G as t,W as e,B as i,C as s,o,c as n,w as r,b as l,F as a,r as u,d,n as h,a as f,f as m,t as c,g as b,h as g}from"./index.7dddb93e.js";import{_ as p}from"./u-badge.3aac235a.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const S=y({name:"u-subsection",emits:["change","update:modelValue","input"],props:{list:{type:Array,default:()=>[]},value:{type:[String,Number],default:0},modelValue:{type:[String,Number],default:0},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[0,0]}}},data(){return{itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0,listInfo:[]}},watch:{valueCom:{immediate:!0,handler(t){t&&(this.currentIndex=t,this.changeSectionStatus(t))}},current:{immediate:!0,handler(t){t&&(this.currentIndex=t,this.changeSectionStatus(t))}},list:{deep:!0,handler(t=[]){this.listInfoFn(),setTimeout((()=>{this.getTabsInfo()}),10)}}},computed:{valueCom(){return this.modelValue},noBorderRight(){return t=>{if("subsection"!=this.mode)return;let e="";return t<this.list.length-1&&(e+=" u-none-border-right"),0==t&&(e+=" u-item-first"),t==this.list.length-1&&(e+=" u-item-last"),e}},textStyle(){return t=>{let e={};return"subsection"==this.mode?t==this.currentIndex?e.color="#ffffff":e.color=this.activeColor:t==this.currentIndex?e.color=this.activeColor:e.color=this.inactiveColor,t==this.currentIndex&&this.bold&&(e.fontWeight="bold"),e.fontSize=this.fontSize+"rpx",e}},itemStyle(){return t=>{let e={};return"subsection"==this.mode&&(e.borderColor=this.activeColor,e.borderWidth="1px",e.borderStyle="solid"),e}},subsectionStyle(){let e={};return e.height=t(this.height)+"px","button"==this.mode&&(e.backgroundColor=this.bgColor,e.padding=`${this.buttonPadding}px`,e.borderRadius=`${this.borderRadius}px`),e},itemBarStyle(){let e={};return e.backgroundColor=this.activeColor,e.zIndex=1,"button"==this.mode&&(e.backgroundColor=this.buttonColor,e.borderRadius=`${this.borderRadius}px`,e.bottom=`${this.buttonPadding}px`,e.height=t(this.height)-2*this.buttonPadding+"px",e.zIndex=0),Object.assign(this.itemBgStyle,e)}},mounted(){this.listInfoFn(),setTimeout((()=>{this.getTabsInfo()}),10)},methods:{listInfoFn(){return this.listInfo=this.list.map(((t,e)=>{if("object"!=typeof t){return{width:0,name:t}}return t})),this.listInfo},changeSectionStatus(t){"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius=`0 ${this.buttonPadding}px ${this.buttonPadding}px 0`),0==t&&(this.itemBgStyle.borderRadius=`${this.buttonPadding}px 0 0 ${this.buttonPadding}px`),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((()=>{this.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)),this.$emit("input",Number(t)),this.$emit("update:modelValue",Number(t)))},getTabsInfo(){let t=e().in(this);for(let e=0;e<this.list.length;e++)t.select(".u-item-"+e).boundingClientRect();t.exec((t=>{t.length||setTimeout((()=>{this.getTabsInfo()}),10),t.map(((t,e)=>{this.listInfo[e].width=t.width})),("subsection"==this.mode||"button"==this.mode)&&(this.itemBgStyle.width=this.listInfo[0].width+"px"),this.itemBgLeft()}))},itemBgLeft(){this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";let t=0;this.listInfo.map(((e,i)=>{i<this.currentIndex&&(t+=e.width)})),"subsection"==this.mode?this.itemBgStyle.left=t+"px":"button"==this.mode&&(this.itemBgStyle.left=t+this.buttonPadding+"px")}}},[["render",function(t,e,y,S,x,I){const C=g,B=i(s("u-badge"),p);return o(),n(C,{class:"u-subsection",style:h([I.subsectionStyle])},{default:r((()=>[(o(!0),l(a,null,u(x.listInfo,((t,e)=>(o(),n(C,{class:d(["u-item u-line-1",[I.noBorderRight(e),"u-item-"+e]]),style:h([I.itemStyle(e)]),onClick:t=>I.click(e),key:e},{default:r((()=>[f(C,{style:h([I.textStyle(e)]),class:"u-item-text u-line-1"},{default:r((()=>[m(c(t.name),1)])),_:2},1032,["style"]),t.num>0?(o(),n(B,{key:0,count:t.num,offset:y.offset,size:"mini"},null,8,["count","offset"])):b("v-if",!0)])),_:2},1032,["style","onClick","class"])))),128)),f(C,{class:"u-item-bg",style:h([I.itemBarStyle])},null,8,["style"])])),_:1},8,["style"])}],["__scopeId","data-v-df265044"]]);export{S as _};