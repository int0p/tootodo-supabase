import{S as I,i as R,s as S,e as f,d as b,t as x,f as m,g,j as $,k as U,l as d,m as p,p as v,r as _,a7 as P,u as C,M as k,C as q,a2 as M}from"../chunks/index.62fc0439.js";var O=Object.defineProperty,T=(n,e)=>{for(var t in e)O(n,t,{get:e[t],enumerable:!0})},j={};T(j,{convertFileSrc:()=>D,invoke:()=>E,transformCallback:()=>w});function A(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function w(n,e=!1){let t=A(),a=`_${t}`;return Object.defineProperty(window,a,{value:r=>(e&&Reflect.deleteProperty(window,a),n==null?void 0:n(r)),writable:!1,configurable:!0}),t}async function E(n,e={}){return new Promise((t,a)=>{let r=w(l=>{t(l),Reflect.deleteProperty(window,`_${i}`)},!0),i=w(l=>{a(l),Reflect.deleteProperty(window,`_${r}`)},!0);window.__TAURI_IPC__({cmd:n,callback:r,error:i,...e})})}function D(n,e="asset"){let t=encodeURIComponent(n);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${t}`:`${e}://localhost/${t}`}function L(n){let e,t,a,r,i,l,u,c,h;return{c(){e=f("div"),t=f("input"),a=b(),r=f("button"),i=x("greet"),l=b(),u=f("div"),this.h()},l(o){e=m(o,"DIV",{class:!0});var s=g(e);t=m(s,"INPUT",{id:!0}),a=$(s),r=m(s,"BUTTON",{id:!0,class:!0});var y=g(r);i=U(y,"greet"),y.forEach(d),s.forEach(d),l=$(o),u=m(o,"DIV",{id:!0}),g(u).forEach(d),this.h()},h(){p(t,"id","greet-input"),p(r,"id","greet-button"),p(r,"class","w-20 h-10 bg-black text-white"),p(e,"class","flex-col"),p(u,"id","greet-msg")},m(o,s){v(o,e,s),_(e,t),P(t,n[0]),_(e,a),_(e,r),_(r,i),v(o,l,s),v(o,u,s),c||(h=[C(t,"input",n[2]),C(r,"click",n[1])],c=!0)},p(o,[s]){s&1&&t.value!==o[0]&&P(t,o[0])},i:k,o:k,d(o){o&&d(e),o&&d(l),o&&d(u),c=!1,q(h)}}}function V(n,e,t){let a,r,i;async function l(){!r||!i||(i.textContent=await E("greet",{name:r.value}),console.log(i.textContent))}M(()=>{window.addEventListener("DOMContentLoaded",()=>{var c;r=document.querySelector("#greet-input"),i=document.querySelector("#greet-msg"),(c=document.querySelector("#greet-button"))==null||c.addEventListener("click",()=>l())})});function u(){a=this.value,t(0,a)}return n.$$.update=()=>{n.$$.dirty&1&&console.log(a)},[a,l,u]}class B extends I{constructor(e){super(),R(this,e,V,L,S,{})}}export{B as component};
