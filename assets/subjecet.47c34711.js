import{R as e}from"./index.7dddb93e.js";const t=t=>e.get({url:"/mobile/djsc/subject/selectSubjectList",data:t}),s=t=>{const s=`?code=${t.code}`;return e.delete({url:"/mobile/djsc/subject/deleteSubject"+s})},d=t=>e.get({url:"/mobile/djsc/subject/selectSubjectByCode",data:t}),c=t=>e.post({url:"/mobile/djsc/subject/addSubject",data:t});export{d as a,c as b,s as d,t as g};
