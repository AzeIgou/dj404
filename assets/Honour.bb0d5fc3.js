import{R as o}from"./index.7dddb93e.js";const e=e=>o.get({url:"/mobile/djsc/glory/selectHonorList",data:e}),d=e=>{const d=`?code=${e.code}`;return o.delete({url:"/mobile/djsc/glory/deleteHonor"+d})},r=e=>o.get({url:"/mobile/djsc/glory/selectHonorByCode",data:e}),l=e=>o.post({url:"/mobile/djsc/glory/addHonor",data:e});export{r as a,l as b,d,e as g};
