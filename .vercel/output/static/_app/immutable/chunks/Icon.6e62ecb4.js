import{S as J,i as O,s as j,N as Q,a as v,a3 as q,J as b,a4 as w,g as A,l as k,a5 as N,p as S,r as X,O as F,P as G,Q as H,B as D,z as K,w as L,X as M,D as C,E}from"./index.62fc0439.js";const I={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function B(i,t,o){const s=i.slice();return s[10]=t[o][0],s[11]=t[o][1],s}function W(i){let t,o=[i[11]],s={};for(let l=0;l<o.length;l+=1)s=v(s,o[l]);return{c(){t=q(i[10]),this.h()},l(l){t=w(l,i[10],{}),A(t).forEach(k),this.h()},h(){N(t,s)},m(l,n){S(l,t,n)},p(l,n){N(t,s=D(o,[n&32&&l[11]]))},d(l){l&&k(t)}}}function P(i){let t=i[10],o,s=i[10]&&W(i);return{c(){s&&s.c(),o=b()},l(l){s&&s.l(l),o=b()},m(l,n){s&&s.m(l,n),S(l,o,n)},p(l,n){l[10]?t?j(t,l[10])?(s.d(1),s=W(l),t=l[10],s.c(),s.m(o.parentNode,o)):s.p(l,n):(s=W(l),t=l[10],s.c(),s.m(o.parentNode,o)):t&&(s.d(1),s=null,t=l[10])},d(l){l&&k(o),s&&s.d(l)}}}function R(i){var g;let t,o,s,l,n,_=i[5],a=[];for(let e=0;e<_.length;e+=1)a[e]=P(B(i,_,e));const d=i[9].default,r=Q(d,i,i[8],null);let m=[I,i[6],{width:i[2]},{height:i[2]},{stroke:i[1]},{"stroke-width":s=i[4]?Number(i[3])*24/Number(i[2]):i[3]},{class:l=`lucide-icon lucide lucide-${i[0]} ${(g=i[7].class)!=null?g:""}`}],c={};for(let e=0;e<m.length;e+=1)c=v(c,m[e]);return{c(){t=q("svg");for(let e=0;e<a.length;e+=1)a[e].c();o=b(),r&&r.c(),this.h()},l(e){t=w(e,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var h=A(t);for(let f=0;f<a.length;f+=1)a[f].l(h);o=b(),r&&r.l(h),h.forEach(k),this.h()},h(){N(t,c)},m(e,h){S(e,t,h);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(t,null);X(t,o),r&&r.m(t,null),n=!0},p(e,[h]){var f;if(h&32){_=e[5];let u;for(u=0;u<_.length;u+=1){const z=B(e,_,u);a[u]?a[u].p(z,h):(a[u]=P(z),a[u].c(),a[u].m(t,o))}for(;u<a.length;u+=1)a[u].d(1);a.length=_.length}r&&r.p&&(!n||h&256)&&F(r,d,e,e[8],n?H(d,e[8],h,null):G(e[8]),null),N(t,c=D(m,[I,h&64&&e[6],(!n||h&4)&&{width:e[2]},(!n||h&4)&&{height:e[2]},(!n||h&2)&&{stroke:e[1]},(!n||h&28&&s!==(s=e[4]?Number(e[3])*24/Number(e[2]):e[3]))&&{"stroke-width":s},(!n||h&129&&l!==(l=`lucide-icon lucide lucide-${e[0]} ${(f=e[7].class)!=null?f:""}`))&&{class:l}]))},i(e){n||(K(r,e),n=!0)},o(e){L(r,e),n=!1},d(e){e&&k(t),M(a,e),r&&r.d(e)}}}function T(i,t,o){const s=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let l=C(t,s),{$$slots:n={},$$scope:_}=t,{name:a}=t,{color:d="currentColor"}=t,{size:r=24}=t,{strokeWidth:m=2}=t,{absoluteStrokeWidth:c=!1}=t,{iconNode:g}=t;return i.$$set=e=>{o(7,t=v(v({},t),E(e))),o(6,l=C(t,s)),"name"in e&&o(0,a=e.name),"color"in e&&o(1,d=e.color),"size"in e&&o(2,r=e.size),"strokeWidth"in e&&o(3,m=e.strokeWidth),"absoluteStrokeWidth"in e&&o(4,c=e.absoluteStrokeWidth),"iconNode"in e&&o(5,g=e.iconNode),"$$scope"in e&&o(8,_=e.$$scope)},t=E(t),[a,d,r,m,c,g,l,t,_,n]}class U extends J{constructor(t){super(),O(this,t,T,R,j,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const Y=U;export{Y as I};
