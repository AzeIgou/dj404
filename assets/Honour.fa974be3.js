import{R as o}from"./index.f8f0a8a6.js";const e=e=>o.get({url:"/mobile/djsc/glory/selectHonorList",data:e}),r=e=>{const r=`?code=${e.code}`;return o.delete({url:"/mobile/djsc/glory/deleteHonor"+r})},d=e=>o.get({url:"/mobile/djsc/glory/selectHonorByCode",data:e}),l=e=>o.post({url:"/mobile/djsc/glory/addHonor",data:e});export{d as a,l as b,r as d,e as g};