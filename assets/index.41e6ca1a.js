import{R as t}from"./index.f8f0a8a6.js";const a=a=>t.get({url:"/mobile/djsc/unit/getUnitList",data:a}),e=a=>{const e=`?code=${a.code}`;return t.post({url:"/mobile/djsc/unit/deleteUnit"+e})},s=a=>t.get({url:"/mobile/djsc/unit/getCase",data:a}),i=a=>t.post({url:"/mobile/djsc/unit/addUnit",data:a}),d=a=>t.get({url:"/mobile/djsc/unit/approveUnit",data:a});export{s as a,i as b,e as d,a as g,d as r};