import{_ as h,a as p,c as e,F as o,r as u,b as c,d as t,o as n,t as r,e as b}from"./index-B40a8Eml.js";const g={data(){return{jsonData:null}},mounted(){p.get("https://raw.githubusercontent.com/torpidsnake/json-api/master/gadgets.json").then(a=>{this.jsonData=a.data}).catch(a=>{console.error("Error fetching data:",a)})}},k={key:0,class:"about"},f=t("br",null,null,-1),m=t("br",null,null,-1),y=t("u",null,[t("b",null,[t("i",null,"Phones under your budget:")])],-1),j=t("br",null,null,-1),x=t("br",null,null,-1),D=["href"],V={key:0};function w(_,a,B,N,l,v){return l.jsonData?(n(),e("div",k,[f,m,y,j,x,(n(!0),e(o,null,u(l.jsonData.phones_with_prices,(i,d)=>(n(),e("div",{key:d},[c(r(i.detailed_heading)+" ",1),t("ul",null,[(n(!0),e(o,null,u(i.models,s=>(n(),e("li",{key:s.name},[t("a",{href:s.link,target:"_blank"},r(s.name),9,D),s.speciality?(n(),e("span",V," - "+r(s.speciality.join(", ")),1)):b("",!0)]))),128))])]))),128))])):(n(),e(o,{key:1},[c(" loading... ")],64))}const F=h(g,[["render",w]]);export{F as default};