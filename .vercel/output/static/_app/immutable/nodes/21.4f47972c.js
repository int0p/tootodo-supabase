import{S as Le,i as Me,s as Ie,J as Ve,p as G,z as R,v as Oe,w as P,y as Re,l as d,a2 as wt,av as Lt,a as we,E as Se,e as D,t as I,d as N,f as T,g as m,k as B,j as H,m as u,r as a,A as j,ab as Mt,al as ut,X as Ze,u as Te,C as Dt,F as dt,b as ge,h as _e,q as me,B as It,R as Bt,x as be,N as Nt,O as Ht,P as At,Q as Vt,a3 as x,a4 as W,M as ie,K as Ke,G as St,aa as Ct,ae as Ot,a9 as Rt,au as qt}from"../chunks/index.62fc0439.js";import{s as Tt,b as Yt,d as Gt}from"../chunks/Modal.svelte_svelte_type_style_lang.10e906d4.js";import{I as Pt}from"../chunks/Icon.6e62ecb4.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.fe36e70c.js";import{a as ht}from"../chunks/index.7dfca014.js";import{h as Ce}from"../chunks/moment.a354566a.js";import"../chunks/index.5e2a9a64.js";import{m as Qe,a as zt}from"../chunks/minutesToCustomString.91539dad.js";import{p as Ft}from"../chunks/stores.4d5e9aa8.js";import{component as jt}from"./20.275ea464.js";import"../chunks/paths.079c38ab.js";function gt(s,e,t){const l=s.slice();return l[27]=e[t],l}function _t(s){let e,t,l,r,f,o,i,c,E,p,b=s[2],h=[];for(let g=0;g<b.length;g+=1)h[g]=mt(gt(s,b,g));return{c(){e=D("div"),t=D("nav"),l=D("div"),r=I(s[0]),o=N();for(let g=0;g<h.length;g+=1)h[g].c();this.h()},l(g){e=T(g,"DIV",{class:!0});var _=m(e);t=T(_,"NAV",{class:!0});var n=m(t);l=T(n,"DIV",{class:!0});var v=m(l);r=B(v,s[0]),v.forEach(d),o=H(n);for(let y=0;y<h.length;y+=1)h[y].l(n);n.forEach(d),_.forEach(d),this.h()},h(){u(l,"class",f="toc-label "+s[6]),u(t,"class",i="toc-list "+s[5]),u(e,"class",c="toc "+s[7])},m(g,_){G(g,e,_),a(e,t),a(t,l),a(l,r),a(t,o);for(let n=0;n<h.length;n+=1)h[n]&&h[n].m(t,null);p=!0},p(g,_){if((!p||_&1)&&j(r,g[0]),(!p||_&64&&f!==(f="toc-label "+g[6]))&&u(l,"class",f),_&30){b=g[2];let n;for(n=0;n<b.length;n+=1){const v=gt(g,b,n);h[n]?h[n].p(v,_):(h[n]=mt(v),h[n].c(),h[n].m(t,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=b.length}(!p||_&32&&i!==(i="toc-list "+g[5]))&&u(t,"class",i),(!p||_&128&&c!==(c="toc "+g[7]))&&u(e,"class",c)},i(g){p||(g&&Mt(()=>{p&&(E||(E=ut(e,ht,{duration:100},!0)),E.run(1))}),p=!0)},o(g){g&&(E||(E=ut(e,ht,{duration:100},!1)),E.run(0)),p=!1},d(g){g&&d(e),Ze(h,g),g&&E&&E.end()}}}function mt(s){var E;let e,t=((E=s[27].firstChild)==null?void 0:E.nodeValue)+"",l,r,f,o,i;function c(){return s[20](s[27])}return{c(){e=D("li"),l=I(t),r=N(),this.h()},l(p){e=T(p,"LI",{class:!0});var b=m(e);l=B(b,t),r=H(b),b.forEach(d),this.h()},h(){u(e,"class",f="toc-list-item "+s[4]+" "+bt(s[27])+" "+(s[27].id===s[3]?s[1]:""))},m(p,b){G(p,e,b),a(e,l),a(e,r),o||(i=[Te(e,"click",c),Te(e,"click",s[18]),Te(e,"keypress",s[19])],o=!0)},p(p,b){var h;s=p,b&4&&t!==(t=((h=s[27].firstChild)==null?void 0:h.nodeValue)+"")&&j(l,t),b&30&&f!==(f="toc-list-item "+s[4]+" "+bt(s[27])+" "+(s[27].id===s[3]?s[1]:""))&&u(e,"class",f)},d(p){p&&d(e),o=!1,Dt(i)}}}function Ut(s){let e,t=s[2].length>0&&_t(s);return{c(){t&&t.c(),e=Ve()},l(l){t&&t.l(l),e=Ve()},m(l,r){t&&t.m(l,r),G(l,e,r)},p(l,[r]){l[2].length>0?t?(t.p(l,r),r&4&&R(t,1)):(t=_t(l),t.c(),R(t,1),t.m(e.parentNode,e)):t&&(Oe(),P(t,1,1,()=>{t=null}),Re())},i(l){R(t)},o(l){P(t)},d(l){t&&t.d(l),l&&d(e)}}}const xt="p-4 pt-0",Wt="list-none space-y-1",Xt="px-4 py-2 cursor-pointer";function bt(s){return s.tagName==="H3"?"ml-3":s.tagName==="H4"?"ml-6":s.tagName==="H5"?"ml-9":s.tagName==="H6"?"ml-12":""}function Jt(s){const e=document.querySelector(`#${s.id}`);e&&e.scrollIntoView({behavior:"smooth"})}function Kt(s,e,t){let l,r,f,o,{scrollParent:i="#page"}=e,{target:c="#page"}=e,{allowedHeadings:E="h2, h3"}=e,{label:p="On This Page"}=e,{width:b="w-[240px]"}=e,{spacing:h="space-y-4"}=e,{text:g="text-surface-600-300-token"}=e,{hover:_="hover:bg-primary-hover-token"}=e,{active:n="bg-primary-active-token !text-on-primary-token"}=e,{rounded:v="rounded-token"}=e,{regionLabel:y="font-bold"}=e,{regionList:w=""}=e,L,O,S=[],C;function A(){const k=document.querySelector(c);O=k==null?void 0:k.querySelectorAll(E)}function z(){O==null||O.forEach(k=>{if(!k.hasAttribute("data-toc-ignore")){if(!k.id){let $=k.innerText.replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","-").toLowerCase();k.id=`${$}`}k.querySelector(".permalink")||(k.innerHTML+=`<a href="#${k.id}" class="permalink">🔗</a>`),S.push(k)}}),t(2,S=[...S])}function X(){var U;let $=[];O==null||O.forEach(ee=>{const F=(L==null?void 0:L.getBoundingClientRect().top)||0;ee.getBoundingClientRect().top-F+40>=0&&$.push(ee)}),t(3,C=(U=$[0])==null?void 0:U.id)}wt(()=>{A(),z(),L=document.querySelector(i),L==null||L.addEventListener("scroll",X),X()}),Lt(()=>{L==null||L.removeEventListener("scroll",X)});function Z(k){dt.call(this,s,k)}function J(k){dt.call(this,s,k)}const K=k=>{Jt(k)};return s.$$set=k=>{t(26,e=we(we({},e),Se(k))),"scrollParent"in k&&t(8,i=k.scrollParent),"target"in k&&t(9,c=k.target),"allowedHeadings"in k&&t(10,E=k.allowedHeadings),"label"in k&&t(0,p=k.label),"width"in k&&t(11,b=k.width),"spacing"in k&&t(12,h=k.spacing),"text"in k&&t(13,g=k.text),"hover"in k&&t(14,_=k.hover),"active"in k&&t(1,n=k.active),"rounded"in k&&t(15,v=k.rounded),"regionLabel"in k&&t(16,y=k.regionLabel),"regionList"in k&&t(17,w=k.regionList)},s.$$.update=()=>{var k;t(7,l=`${b} ${h} ${(k=e.class)!=null?k:""}`),s.$$.dirty&65536&&t(6,r=`${xt} ${y}`),s.$$.dirty&131072&&t(5,f=`${Wt} ${w}`),s.$$.dirty&57344&&t(4,o=`${Xt} ${g} ${_} ${v}`)},e=Se(e),[p,n,S,C,o,f,r,l,i,c,E,b,h,g,_,v,y,w,Z,J,K]}class Qt extends Le{constructor(e){super(),Me(this,e,Kt,Ut,Ie,{scrollParent:8,target:9,allowedHeadings:10,label:0,width:11,spacing:12,text:13,hover:14,active:1,rounded:15,regionLabel:16,regionList:17})}}function Zt(s){let e;const t=s[2].default,l=Nt(t,s,s[3],null);return{c(){l&&l.c()},l(r){l&&l.l(r)},m(r,f){l&&l.m(r,f),e=!0},p(r,f){l&&l.p&&(!e||f&8)&&Ht(l,t,r,r[3],e?Vt(t,r[3],f,null):At(r[3]),null)},i(r){e||(R(l,r),e=!0)},o(r){P(l,r),e=!1},d(r){l&&l.d(r)}}}function $t(s){let e,t;const l=[{name:"blinds"},s[1],{iconNode:s[0]}];let r={$$slots:{default:[Zt]},$$scope:{ctx:s}};for(let f=0;f<l.length;f+=1)r=we(r,l[f]);return e=new Pt({props:r}),{c(){ge(e.$$.fragment)},l(f){_e(e.$$.fragment,f)},m(f,o){me(e,f,o),t=!0},p(f,[o]){const i=o&3?It(l,[l[0],o&2&&Bt(f[1]),o&1&&{iconNode:f[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:f}),e.$set(i)},i(f){t||(R(e.$$.fragment,f),t=!0)},o(f){P(e.$$.fragment,f),t=!1},d(f){be(e,f)}}}function el(s,e,t){let{$$slots:l={},$$scope:r}=e;const f=[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]];return s.$$set=o=>{t(1,e=we(we({},e),Se(o))),"$$scope"in o&&t(3,r=o.$$scope)},e=Se(e),[f,e,l,r]}class tl extends Le{constructor(e){super(),Me(this,e,el,$t,Ie,{})}}const ll=tl;function rl(s){let e,t,l,r,f,o,i,c,E,p,b,h,g;return{c(){e=x("svg"),t=x("ellipse"),l=x("defs"),r=x("filter"),f=x("feGaussianBlur"),o=x("feOffset"),i=x("feFlood"),c=x("feComposite"),E=x("feMerge"),p=x("feMergeNode"),b=x("feMergeNode"),h=x("circle"),g=x("polygon"),this.h()},l(_){e=W(_,"svg",{xmlns:!0,viewBox:!0,class:!0});var n=m(e);t=W(n,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0}),m(t).forEach(d),l=W(n,"defs",{});var v=m(l);r=W(v,"filter",{id:!0,x:!0,y:!0,width:!0,height:!0});var y=m(r);f=W(y,"feGaussianBlur",{in:!0,stdDeviation:!0}),m(f).forEach(d),o=W(y,"feOffset",{dx:!0,dy:!0,result:!0}),m(o).forEach(d),i=W(y,"feFlood",{"flood-color":!0}),m(i).forEach(d),c=W(y,"feComposite",{in2:!0,operator:!0}),m(c).forEach(d),E=W(y,"feMerge",{});var w=m(E);p=W(w,"feMergeNode",{}),m(p).forEach(d),b=W(w,"feMergeNode",{in:!0}),m(b).forEach(d),w.forEach(d),y.forEach(d),v.forEach(d),h=W(n,"circle",{cx:!0,cy:!0,r:!0,fill:!0,filter:!0}),m(h).forEach(d),g=W(n,"polygon",{points:!0,fill:!0,filter:!0}),m(g).forEach(d),n.forEach(d),this.h()},h(){u(t,"cx","400"),u(t,"cy","700"),u(t,"rx","350"),u(t,"ry","100"),u(t,"fill","rgba(0,0,0,0.1)"),u(f,"in","SourceAlpha"),u(f,"stdDeviation","10"),u(o,"dx","10"),u(o,"dy","10"),u(o,"result","offsetblur"),u(i,"flood-color","rgba(0,0,0,0.5)"),u(c,"in2","offsetblur"),u(c,"operator","in"),u(b,"in","SourceGraphic"),u(r,"id","shadow"),u(r,"x","-20%"),u(r,"y","-20%"),u(r,"width","140%"),u(r,"height","140%"),u(h,"cx","400"),u(h,"cy","400"),u(h,"r","350"),u(h,"fill","rgb(var(--color-pomodoro-500))"),u(h,"filter","url(#shadow)"),u(g,"points","400,100 460,360 200,240 600,240 340,360"),u(g,"fill","rgb(5,150,105)"),u(g,"filter","url(#shadow)"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 800 800"),u(e,"class","w-[24px] h-[24px]")},m(_,n){G(_,e,n),a(e,t),a(e,l),a(l,r),a(r,f),a(r,o),a(r,i),a(r,c),a(r,E),a(E,p),a(E,b),a(e,h),a(e,g)},p:ie,i:ie,o:ie,d(_){_&&d(e)}}}class sl extends Le{constructor(e){super(),Me(this,e,null,rl,Ie,{})}}function al(s){let e,t,l,r,f,o,i,c=Ce(s[1]).format("MMM Do")+"",E,p,b,h,g,_,n,v,y=s[2].url.pathname+"",w,L,O;return{c(){e=D("div"),t=D("ol"),l=D("li"),r=I("›"),f=N(),o=D("li"),i=D("button"),E=I(c),p=N(),b=D("li"),h=I("›"),g=N(),_=D("li"),n=D("button"),v=I("select todo! "),w=I(y),this.h()},l(S){e=T(S,"DIV",{class:!0});var C=m(e);t=T(C,"OL",{class:!0});var A=m(t);l=T(A,"LI",{class:!0,"aria-hidden":!0});var z=m(l);r=B(z,"›"),z.forEach(d),f=H(A),o=T(A,"LI",{});var X=m(o);i=T(X,"BUTTON",{});var Z=m(i);E=B(Z,c),Z.forEach(d),X.forEach(d),p=H(A),b=T(A,"LI",{class:!0,"aria-hidden":!0});var J=m(b);h=B(J,"›"),J.forEach(d),g=H(A),_=T(A,"LI",{class:!0});var K=m(_);n=T(K,"BUTTON",{class:!0});var k=m(n);v=B(k,"select todo! "),w=B(k,y),k.forEach(d),K.forEach(d),A.forEach(d),C.forEach(d),this.h()},h(){u(l,"class","crumb-separator"),u(l,"aria-hidden",""),u(b,"class","crumb-separator"),u(b,"aria-hidden",""),u(n,"class","anchor"),u(_,"class","crumb"),u(t,"class","breadcrumb relative h-full"),u(e,"class","w-full h-full relative left-7 top-1")},m(S,C){G(S,e,C),a(e,t),a(t,l),a(l,r),a(t,f),a(t,o),a(o,i),a(i,E),a(t,p),a(t,b),a(b,h),a(t,g),a(t,_),a(_,n),a(n,v),a(n,w),L||(O=[Te(i,"click",s[3]),Te(n,"click",s[4])],L=!0)},p(S,[C]){C&2&&c!==(c=Ce(S[1]).format("MMM Do")+"")&&j(E,c),C&4&&y!==(y=S[2].url.pathname+"")&&j(w,y)},i:ie,o:ie,d(S){S&&d(e),L=!1,Dt(O)}}}function ol(s,e,t){let l,r;Ke(s,Tt,c=>t(1,l=c)),Ke(s,Ft,c=>t(2,r=c));let{showDailyLog:f}=e;const o=()=>t(0,f=!0),i=()=>t(0,f=!1);return s.$$set=c=>{"showDailyLog"in c&&t(0,f=c.showDailyLog)},[f,l,r,o,i]}class il extends Le{constructor(e){super(),Me(this,e,ol,al,Ie,{showDailyLog:0})}}function vt(s,e,t){const l=s.slice();return l[9]=e[t],l[11]=t,l}function pt(s,e,t){const l=s.slice();return l[12]=e[t],l[11]=t,l}function nl(s){let e,t,l,r,f,o,i,c,E,p,b;return c=new ll({props:{strokeWidth:"1.5",size:26}}),p=new Qt({props:{target:"#toc-target"}}),{c(){e=D("div"),t=D("div"),l=I("tooltip"),r=N(),f=D("textarea"),o=N(),i=D("button"),ge(c.$$.fragment),E=N(),ge(p.$$.fragment),this.h()},l(h){e=T(h,"DIV",{class:!0});var g=m(e);t=T(g,"DIV",{class:!0});var _=m(t);l=B(_,"tooltip"),_.forEach(d),r=H(g),f=T(g,"TEXTAREA",{class:!0}),m(f).forEach(d),g.forEach(d),o=H(h),i=T(h,"BUTTON",{type:!0,class:!0});var n=m(i);_e(c.$$.fragment,n),E=H(n),_e(p.$$.fragment,n),n.forEach(d),this.h()},h(){u(t,"class","absolute left-3 top-3 text-lg font-semibold"),u(f,"class","w-full h-[calc(100%-46px)] absolute bottom-0 rounded-xl border-0 border-t border-primary-400-500-token text-surface-900-50-token bg-white/75 dark:bg-black/50"),f.value="Note",u(e,"class","w-full h-full bg-white/40 dark:bg-black/30 relative border-0 rounded-xl mt-0.5"),u(i,"type","button"),u(i,"class","btn-icon variant-ghost-primary absolute right-2 top-[3.57rem] scale-[85%] !rounded-b lg:top-[3.4rem] lg:scale-[98%]")},m(h,g){G(h,e,g),a(e,t),a(t,l),a(e,r),a(e,f),G(h,o,g),G(h,i,g),me(c,i,null),a(i,E),me(p,i,null),b=!0},p:ie,i(h){b||(R(c.$$.fragment,h),R(p.$$.fragment,h),b=!0)},o(h){P(c.$$.fragment,h),P(p.$$.fragment,h),b=!1},d(h){h&&d(e),h&&d(o),h&&d(i),be(c),be(p)}}}function cl(s){let e,t,l,r,f,o,i,c,E,p,b=Ce(s[5]).format("MMMM Do YYYY")+"",h,g,_,n;t=new jt({});let v=s[4]&&Et(s);return{c(){e=D("div"),ge(t.$$.fragment),l=N(),r=D("div"),f=D("div"),o=D("code"),i=I(s[6]),c=N(),E=D("div"),p=D("div"),h=I(b),g=N(),_=D("div"),v&&v.c(),this.h()},l(y){e=T(y,"DIV",{class:!0});var w=m(e);_e(t.$$.fragment,w),w.forEach(d),l=H(y),r=T(y,"DIV",{class:!0});var L=m(r);f=T(L,"DIV",{class:!0});var O=m(f);o=T(O,"CODE",{class:!0});var S=m(o);i=B(S,s[6]),S.forEach(d),O.forEach(d),c=H(L),E=T(L,"DIV",{class:!0});var C=m(E);p=T(C,"DIV",{class:!0});var A=m(p);h=B(A,b),A.forEach(d),g=H(C),_=T(C,"DIV",{class:!0});var z=m(_);v&&v.l(z),z.forEach(d),C.forEach(d),L.forEach(d),this.h()},h(){u(e,"class","w-1/3 min-w-[320px] max-w-[360px] h-full"),u(o,"class","relative bottom-1.5 code text-lg font-digital font-bold"),u(f,"class","flex space-x-2 absolute right-0 top-1 text-lg z-10"),u(p,"class","absolute left-3 top-3 text-lg font-semibold"),u(_,"class","w-full h-[calc(100%-46px)] max-h-[calc(100%-46px)] overflow-y-scroll hide-scrollbar absolute bottom-0 border-0 rounded-xl flex flex-wrap justify-center text-surface-900-50-token bg-white/75 dark:bg-black/50"),u(E,"class","w-full h-full bg-white/40 dark:bg-black/30 relative border-0 rounded-xl"),u(r,"class","flex-col relative w-full h-full ml-4 mt-0.5")},m(y,w){G(y,e,w),me(t,e,null),G(y,l,w),G(y,r,w),a(r,f),a(f,o),a(o,i),a(r,c),a(r,E),a(E,p),a(p,h),a(E,g),a(E,_),v&&v.m(_,null),n=!0},p(y,w){(!n||w&64)&&j(i,y[6]),(!n||w&32)&&b!==(b=Ce(y[5]).format("MMMM Do YYYY")+"")&&j(h,b),y[4]?v?(v.p(y,w),w&16&&R(v,1)):(v=Et(y),v.c(),R(v,1),v.m(_,null)):v&&(Oe(),P(v,1,1,()=>{v=null}),Re())},i(y){n||(R(t.$$.fragment,y),R(v),n=!0)},o(y){P(t.$$.fragment,y),P(v),n=!1},d(y){y&&d(e),be(t),y&&d(l),y&&d(r),v&&v.d()}}}function Et(s){let e,t,l=s[4],r=[];for(let o=0;o<l.length;o+=1)r[o]=kt(vt(s,l,o));const f=o=>P(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=Ve()},l(o){for(let i=0;i<r.length;i+=1)r[i].l(o);e=Ve()},m(o,i){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(o,i);G(o,e,i),t=!0},p(o,i){if(i&30){l=o[4];let c;for(c=0;c<l.length;c+=1){const E=vt(o,l,c);r[c]?(r[c].p(E,i),R(r[c],1)):(r[c]=kt(E),r[c].c(),R(r[c],1),r[c].m(e.parentNode,e))}for(Oe(),c=l.length;c<r.length;c+=1)f(c);Re()}},i(o){if(!t){for(let i=0;i<l.length;i+=1)R(r[i]);t=!0}},o(o){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)P(r[i]);t=!1},d(o){Ze(r,o),o&&d(e)}}}function yt(s){let e,t,l=s[11]+1+"",r,f,o,i=s[12].start+"",c,E,p,b=s[12].end+"",h,g,_,n=Qe(s[12].studyTime)+"",v,y;return{c(){e=D("tr"),t=D("td"),r=I(l),f=N(),o=D("td"),c=I(i),E=N(),p=D("td"),h=I(b),g=N(),_=D("td"),v=I(n),y=N(),this.h()},l(w){e=T(w,"TR",{class:!0});var L=m(e);t=T(L,"TD",{class:!0});var O=m(t);r=B(O,l),O.forEach(d),f=H(L),o=T(L,"TD",{class:!0});var S=m(o);c=B(S,i),S.forEach(d),E=H(L),p=T(L,"TD",{class:!0});var C=m(p);h=B(C,b),C.forEach(d),g=H(L),_=T(L,"TD",{class:!0});var A=m(_);v=B(A,n),A.forEach(d),y=H(L),L.forEach(d),this.h()},h(){u(t,"class","!py-2 !px-0 border-r"),u(o,"class","!py-2 border-r"),u(p,"class","!py-2 border-r"),u(_,"class","!py-2"),u(e,"class","")},m(w,L){G(w,e,L),a(e,t),a(t,r),a(e,f),a(e,o),a(o,c),a(e,E),a(e,p),a(p,h),a(e,g),a(e,_),a(_,v),a(e,y)},p(w,L){L&16&&i!==(i=w[12].start+"")&&j(c,i),L&16&&b!==(b=w[12].end+"")&&j(h,b),L&16&&n!==(n=Qe(w[12].studyTime)+"")&&j(v,n)},d(w){w&&d(e)}}}function kt(s){let e,t,l,r=s[11]+1+"",f,o,i,c=s[2][s[11]]+"",E,p,b=s[3][s[11]]+"",h,g,_,n,v,y,w,L=s[9].working+"",O,S,C,A,z,X,Z,J=s[9].breaking+"",K,k,$,U,ee,F,re,se,ae,qe,ne,Ye,Ge,ce,Pe,ze,fe,Fe,je,ue,Ue,ve,te,oe,xe,We,pe,Ee=s[1][s[11]]+"",Be,Xe,Q;ae=new sl({});let de=s[9].cycles,q=[];for(let M=0;M<de.length;M+=1)q[M]=yt(pt(s,de,M));return{c(){e=D("div"),t=D("header"),l=D("big"),f=I(r),o=N(),i=D("big"),E=I(c),p=I(" - "),h=I(b),g=N(),_=D("div"),n=D("small"),v=D("span"),y=I("Working:"),w=N(),O=I(L),S=I("min"),C=N(),A=D("small"),z=D("span"),X=I("Breaking:"),Z=N(),K=I(J),k=I("min"),$=N(),U=D("table"),ee=D("thead"),F=D("tr"),re=D("th"),se=D("span"),ge(ae.$$.fragment),qe=N(),ne=D("th"),Ye=I("start"),Ge=N(),ce=D("th"),Pe=I("end"),ze=N(),fe=D("th"),Fe=I("study time"),je=N(),ue=D("tbody");for(let M=0;M<q.length;M+=1)q[M].c();Ue=N(),ve=D("tfoot"),te=D("tr"),oe=D("td"),xe=I("Total Study Time."),We=N(),pe=D("td"),Be=I(Ee),Xe=N(),this.h()},l(M){e=T(M,"DIV",{class:!0});var Y=m(e);t=T(Y,"HEADER",{class:!0});var V=m(t);l=T(V,"BIG",{class:!0});var ye=m(l);f=B(ye,r),ye.forEach(d),o=H(V),i=T(V,"BIG",{class:!0});var Ne=m(i);E=B(Ne,c),p=B(Ne," - "),h=B(Ne,b),Ne.forEach(d),g=H(V),_=T(V,"DIV",{class:!0});var He=m(_);n=T(He,"SMALL",{class:!0});var ke=m(n);v=T(ke,"SPAN",{class:!0});var $e=m(v);y=B($e,"Working:"),$e.forEach(d),w=H(ke),O=B(ke,L),S=B(ke,"min"),ke.forEach(d),C=H(He),A=T(He,"SMALL",{class:!0});var De=m(A);z=T(De,"SPAN",{class:!0});var et=m(z);X=B(et,"Breaking:"),et.forEach(d),Z=H(De),K=B(De,J),k=B(De,"min"),De.forEach(d),He.forEach(d),V.forEach(d),$=H(Y),U=T(Y,"TABLE",{class:!0});var he=m(U);ee=T(he,"THEAD",{});var tt=m(ee);F=T(tt,"TR",{class:!0});var le=m(F);re=T(le,"TH",{class:!0});var lt=m(re);se=T(lt,"SPAN",{class:!0});var rt=m(se);_e(ae.$$.fragment,rt),rt.forEach(d),lt.forEach(d),qe=H(le),ne=T(le,"TH",{class:!0});var st=m(ne);Ye=B(st,"start"),st.forEach(d),Ge=H(le),ce=T(le,"TH",{class:!0});var at=m(ce);Pe=B(at,"end"),at.forEach(d),ze=H(le),fe=T(le,"TH",{class:!0});var ot=m(fe);Fe=B(ot,"study time"),ot.forEach(d),le.forEach(d),tt.forEach(d),je=H(he),ue=T(he,"TBODY",{});var it=m(ue);for(let Je=0;Je<q.length;Je+=1)q[Je].l(it);it.forEach(d),Ue=H(he),ve=T(he,"TFOOT",{});var nt=m(ve);te=T(nt,"TR",{class:!0});var Ae=m(te);oe=T(Ae,"TD",{colspan:!0,class:!0});var ct=m(oe);xe=B(ct,"Total Study Time."),ct.forEach(d),We=H(Ae),pe=T(Ae,"TD",{});var ft=m(pe);Be=B(ft,Ee),ft.forEach(d),Ae.forEach(d),nt.forEach(d),he.forEach(d),Xe=H(Y),Y.forEach(d),this.h()},h(){u(l,"class","font-bold px-3 py-1.5 shadow shadow-sm shadow-primary-600"),u(i,"class","font-bold"),u(v,"class","text-tertiary-500"),u(n,"class","opacity-75 block"),u(z,"class","text-secondary-600"),u(A,"class","opacity-75 block"),u(_,"class","flex-col"),u(t,"class","flex justify-between items-center"),u(se,"class","absolute left-1 top-1.5"),u(re,"class","!py-1.5 relative px-2"),u(ne,"class","!py-1.5"),u(ce,"class","!py-1.5"),u(fe,"class","!py-1.5"),u(F,"class","border"),u(oe,"colspan","3"),u(oe,"class","!py-2 text-[rgb(var(--color-pomodoro-700))] dark:text-[rgb(var(--color-pomodoro-100))]"),u(te,"class","border"),u(U,"class","w-full text-center border"),u(e,"class","card p-4 rounded-tr-none space-y-2 m-3 variant-ringed-surface w-full lg:w-1/4 2xl:w-1/6 min-w-[300px] h-auto ")},m(M,Y){G(M,e,Y),a(e,t),a(t,l),a(l,f),a(t,o),a(t,i),a(i,E),a(i,p),a(i,h),a(t,g),a(t,_),a(_,n),a(n,v),a(v,y),a(n,w),a(n,O),a(n,S),a(_,C),a(_,A),a(A,z),a(z,X),a(A,Z),a(A,K),a(A,k),a(e,$),a(e,U),a(U,ee),a(ee,F),a(F,re),a(re,se),me(ae,se,null),a(F,qe),a(F,ne),a(ne,Ye),a(F,Ge),a(F,ce),a(ce,Pe),a(F,ze),a(F,fe),a(fe,Fe),a(U,je),a(U,ue);for(let V=0;V<q.length;V+=1)q[V]&&q[V].m(ue,null);a(U,Ue),a(U,ve),a(ve,te),a(te,oe),a(oe,xe),a(te,We),a(te,pe),a(pe,Be),a(e,Xe),Q=!0},p(M,Y){if((!Q||Y&4)&&c!==(c=M[2][M[11]]+"")&&j(E,c),(!Q||Y&8)&&b!==(b=M[3][M[11]]+"")&&j(h,b),(!Q||Y&16)&&L!==(L=M[9].working+"")&&j(O,L),(!Q||Y&16)&&J!==(J=M[9].breaking+"")&&j(K,J),Y&16){de=M[9].cycles;let V;for(V=0;V<de.length;V+=1){const ye=pt(M,de,V);q[V]?q[V].p(ye,Y):(q[V]=yt(ye),q[V].c(),q[V].m(ue,null))}for(;V<q.length;V+=1)q[V].d(1);q.length=de.length}(!Q||Y&2)&&Ee!==(Ee=M[1][M[11]]+"")&&j(Be,Ee)},i(M){Q||(R(ae.$$.fragment,M),Q=!0)},o(M){P(ae.$$.fragment,M),Q=!1},d(M){M&&d(e),be(ae),Ze(q,M)}}}function fl(s){let e,t,l,r,f,o,i,c,E;function p(n){s[8](n)}let b={};s[0]!==void 0&&(b.showDailyLog=s[0]),l=new il({props:b}),St.push(()=>Ct(l,"showDailyLog",p));const h=[cl,nl],g=[];function _(n,v){return n[0]?0:1}return i=_(s),c=g[i]=h[i](s),{c(){e=D("div"),t=D("div"),ge(l.$$.fragment),f=N(),o=D("div"),c.c(),this.h()},l(n){e=T(n,"DIV",{class:!0});var v=m(e);t=T(v,"DIV",{class:!0});var y=m(t);_e(l.$$.fragment,y),y.forEach(d),f=H(v),o=T(v,"DIV",{class:!0});var w=m(o);c.l(w),w.forEach(d),v.forEach(d),this.h()},h(){u(t,"class","h-10 w-full"),u(o,"class","flex w-full h-[calc(100%-50px)]"),u(e,"class","flex-col space-y-2 items-center justify-center w-full h-full relative")},m(n,v){G(n,e,v),a(e,t),me(l,t,null),a(e,f),a(e,o),g[i].m(o,null),E=!0},p(n,[v]){const y={};!r&&v&1&&(r=!0,y.showDailyLog=n[0],Ot(()=>r=!1)),l.$set(y);let w=i;i=_(n),i===w?g[i].p(n,v):(Oe(),P(g[w],1,1,()=>{g[w]=null}),Re(),c=g[i],c?c.p(n,v):(c=g[i]=h[i](n),c.c()),R(c,1),c.m(o,null))},i(n){E||(R(l.$$.fragment,n),R(c),E=!0)},o(n){P(l.$$.fragment,n),P(c),E=!1},d(n){n&&d(e),be(l),g[i].d()}}}function ul(s,e,t){let l,r,f=ie,o=()=>(f(),f=qt(l,_=>t(4,r=_)),l),i;Ke(s,Tt,_=>t(5,i=_)),s.$$.on_destroy.push(()=>f());let{showDailyLog:c=!0}=e,E=0,p=[],b=[],h=[];Rt(()=>{t(6,E=0),t(1,p=[]),t(2,b=[]),t(3,h=[])});function g(_){c=_,t(0,c)}return s.$$set=_=>{"showDailyLog"in _&&t(0,c=_.showDailyLog)},s.$$.update=()=>{s.$$.dirty&32&&o(t(7,l=Yt(()=>Gt.timers.where("date").equals(i).toArray()))),s.$$.dirty&30&&r&&(r.forEach(_=>{let n=0;_.cycles.forEach(v=>{n+=v.studyTime}),p.push(Qe(n))}),r.forEach(_=>{b.push(_.cycles[0].start)}),r.forEach(_=>{h.push(_.cycles[_.cycles.length-1].end)}),t(6,E=zt(p)))},[c,p,b,h,r,i,E,l,g]}class Dl extends Le{constructor(e){super(),Me(this,e,ul,fl,Ie,{showDailyLog:0})}}export{Dl as component};