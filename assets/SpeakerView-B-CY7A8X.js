import{_ as h,a as p,c as t,F as r,r as u,b as c,d as e,o as n,t as o,e as b}from"./index-B40a8Eml.js";const g={data(){return{jsonData:null}},mounted(){p.get("https://raw.githubusercontent.com/torpidsnake/json-api/master/gadgets.json").then(a=>{this.jsonData=a.data}).catch(a=>{console.error("Error fetching data:",a)})}},k={key:0,class:"about"},f=e("br",null,null,-1),m=e("br",null,null,-1),y=e("u",null,[e("b",null,[e("i",null,"BT Speakers under your budget:")])],-1),j=e("br",null,null,-1),x=e("br",null,null,-1),D=["href"],B={key:0};function V(_,a,w,N,l,S){return l.jsonData?(n(),t("div",k,[f,m,y,j,x,(n(!0),t(r,null,u(l.jsonData.portable_bluetooth_speakers_with_prices,(i,d)=>(n(),t("div",{key:d},[c(o(i.detailed_heading)+" ",1),e("ul",null,[(n(!0),t(r,null,u(i.models,s=>(n(),t("li",{key:s.name},[e("a",{href:s.link,target:"_blank"},o(s.name),9,D),s.speciality?(n(),t("span",B," - "+o(s.speciality.join(", ")),1)):b("",!0)]))),128))])]))),128))])):(n(),t(r,{key:1},[c(" loading... ")],64))}const E=h(g,[["render",V]]);export{E as default};