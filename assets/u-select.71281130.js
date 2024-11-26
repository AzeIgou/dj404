import{B as e,C as t,o as l,c as a,w as s,g as u,a as i,e as o,n,f as c,t as m,b as r,F as d,r as h,h as p,ad as f,ae as _}from"./index.f8f0a8a6.js";import{c as v}from"./message.vue_vue_type_script_setup_true_lang.2049d432.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const g=y({emits:["update:modelValue","input","confirm"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},border:{type:Boolean,default:!0},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[0]},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"},blur:{type:[Number,String],default:0}},data:()=>({popupValue:!1,defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}),watch:{value:{immediate:!0,handler(e){e&&setTimeout((()=>this.init()),10),this.popupValue=e}},modelValue:{immediate:!0,handler(e){e&&setTimeout((()=>this.init()),10),this.popupValue=e}}},computed:{uZIndex(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart(){},pickend(){},init(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){let e=1,t=this.list;for(;t[0][this.childName];)t=t[0]?t[0][this.childName]:{},e++;this.columnNum=e}},setColumnData(){let e=[];if(this.selectValue=[],"mutil-column-auto"==this.mode){let t=this.list[this.defaultSelector.length?this.defaultSelector[0]:0];for(let l=0;l<this.columnNum;l++)0==l?(e[l]=this.list,t=t[this.childName]):(e[l]=t,t=t[this.defaultSelector[l]][this.childName])}else"single-column"==this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue(){let e=null;for(let t=0;t<this.columnNum;t++){e=this.columnData[t][this.defaultSelector[t]];let l={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&e.extra&&(l.extra=e.extra),this.selectValue.push(l)}},columnChange(e){let t=null,l=e.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map(((e,a)=>{e!=l[a]&&(t=a)})),this.defaultSelector=l;for(let e=t+1;e<this.columnNum;e++)this.columnData[e]=this.columnData[e-1][e-1==t?l[t]:0][this.childName],this.defaultSelector[e]=0;l.map(((e,t)=>{let a=this.columnData[t][l[t]],s={value:a?a[this.valueName]:null,label:a?a[this.labelName]:null};a&&void 0!==a.extra&&(s.extra=a.extra),this.selectValue.push(s)})),this.lastSelectIndex=l}else if("single-column"==this.mode){let e=this.columnData[0][l[0]],t={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&void 0!==e.extra&&(t.extra=e.extra),this.selectValue.push(t)}else"mutil-column"==this.mode&&l.map(((e,t)=>{let a=this.columnData[t][l[t]],s={value:a?a[this.valueName]:null,label:a?a[this.labelName]:null};a&&void 0!==a.extra&&(s.extra=a.extra),this.selectValue.push(s)}))},close(){this.$emit("input",!1),this.$emit("update:modelValue",!1)},getResult(e=null){e&&this.$emit(e,this.selectValue),this.close()},selectHandler(){this.$emit("click")}}},[["render",function(y,g,b,x,N,S){const V=p,C=f,k=_,I=e(t("u-popup"),v);return l(),a(V,{class:"u-select"},{default:s((()=>[u(' <view class="u-select__action" :class="{\r\n\t\t\t\'u-select--border\': border\r\n\t\t}" @tap.stop="selectHandler">\r\n\t\t\t<view class="u-select__action__icon" :class="{\r\n\t\t\t\t\'u-select__action__icon--reverse\': value == true\r\n\t\t\t}">\r\n\t\t\t\t<u-icon name="arrow-down-fill" size="26" color="#c0c4cc"></u-icon>\r\n\t\t\t</view>\r\n\t\t</view> '),i(I,{blur:b.blur,maskCloseAble:b.maskCloseAble,mode:"bottom",popup:!1,modelValue:N.popupValue,"onUpdate:modelValue":g[4]||(g[4]=e=>N.popupValue=e),length:"auto",safeAreaInsetBottom:b.safeAreaInsetBottom,onClose:S.close,"z-index":S.uZIndex},{default:s((()=>[i(V,{class:"u-select"},{default:s((()=>[i(V,{class:"u-select__header",onTouchmove:g[3]||(g[3]=o((()=>{}),["stop","prevent"]))},{default:s((()=>[i(V,{class:"u-select__header__cancel u-select__header__btn",style:n({color:b.cancelColor}),"hover-class":"u-hover-class","hover-stay-time":150,onClick:g[0]||(g[0]=e=>S.getResult("cancel"))},{default:s((()=>[c(m(b.cancelText),1)])),_:1},8,["style"]),i(V,{class:"u-select__header__title"},{default:s((()=>[c(m(b.title),1)])),_:1}),i(V,{class:"u-select__header__confirm u-select__header__btn",style:n({color:N.moving?b.cancelColor:b.confirmColor}),"hover-class":"u-hover-class","hover-stay-time":150,onTouchmove:g[1]||(g[1]=o((()=>{}),["stop"])),onClick:g[2]||(g[2]=o((e=>S.getResult("confirm")),["stop"]))},{default:s((()=>[c(m(b.confirmText),1)])),_:1},8,["style"])])),_:1}),i(V,{class:"u-select__body"},{default:s((()=>[i(k,{onChange:S.columnChange,class:"u-select__body__picker-view",value:N.defaultSelector,onPickstart:S.pickstart,onPickend:S.pickend},{default:s((()=>[(l(!0),r(d,null,h(N.columnData,((e,t)=>(l(),a(C,{key:t},{default:s((()=>[(l(!0),r(d,null,h(e,((e,t)=>(l(),a(V,{class:"u-select__body__picker-view__item",key:t},{default:s((()=>[i(V,{class:"u-line-1"},{default:s((()=>[c(m(e[b.labelName]),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1},8,["onChange","value","onPickstart","onPickend"])])),_:1})])),_:1})])),_:1},8,["blur","maskCloseAble","modelValue","safeAreaInsetBottom","onClose","z-index"])])),_:1})}],["__scopeId","data-v-12e70e25"]]);export{g as _};