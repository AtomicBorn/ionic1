const __vite__fileDeps=["assets/web-CihXkCud.js","assets/index-Cwenx0lJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as _,d as v,c as b,e as y,g,f as k,h as w,i as I,_ as P,j as V,w as a,r as s,o as C,k as l,l as $,m as t,a5 as r,a6 as i}from"./index-Drr7b6UI.js";import{r as D}from"./index-Cwenx0lJ.js";const m=D("Preferences",{web:()=>_(()=>import("./web-CihXkCud.js"),__vite__mapDeps([0,1])).then(o=>new o.PreferencesWeb)}),S=v({name:"LocalStorageScreen",components:{IonToolbar:b,IonTitle:y,IonPage:g,IonHeader:k,IonContent:w,IonFooter:I},data(){return{form:{key:"",value:""}}},methods:{async save(){await m.set({key:this.form.key,value:this.form.value})},async getData(){const o=await m.get({key:this.form.key});o.value&&(this.form.value=o.value)}}}),T={class:"p-3"},N={class:"mb-3"},x={class:"mb-3"};function B(o,e,L,E,U,h){const d=s("ion-title"),u=s("ion-toolbar"),f=s("ion-header"),p=s("ion-content"),c=s("ion-page");return C(),V(c,null,{default:a(()=>[l(f,null,{default:a(()=>[l(u,{color:"primary"},{default:a(()=>[l(d,null,{default:a(()=>e[4]||(e[4]=[$("Local Storage")])),_:1})]),_:1})]),_:1}),l(p,null,{default:a(()=>[t("div",T,[t("div",N,[e[5]||(e[5]=t("label",{class:"form-label"},"Key Name",-1)),r(t("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>o.form.key=n),type:"text",class:"form-control"},null,512),[[i,o.form.key]])]),t("div",x,[e[6]||(e[6]=t("label",{class:"form-label"},"Value",-1)),r(t("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>o.form.value=n),type:"text",class:"form-control"},null,512),[[i,o.form.value]])]),t("button",{class:"btn btn-primary w-100",onClick:e[2]||(e[2]=n=>o.save())},"Save Storage"),t("button",{class:"btn btn-primary w-100 mt-3",onClick:e[3]||(e[3]=n=>o.getData())},"Get Data")])]),_:1})]),_:1})}const F=P(S,[["render",B],["__scopeId","data-v-35f057ce"]]);export{F as default};
