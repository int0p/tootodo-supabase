import{w as f}from"./index.f9064b73.js";import{u as s}from"./Modal.svelte_svelte_type_style_lang.10e906d4.js";function d(){const{subscribe:c,update:i}=f([]);function r({type:t,message:e,id:o,timeout:a=3e3}){i(u=>[{type:t,message:e,id:o},...u]),a&&setTimeout(()=>{n(o)},a)}function n(t){i(e=>e.filter(o=>o.id!==t))}return{subscribe:c,info:(t,e)=>r({type:"info",message:t,timeout:e,id:s()}),warning:(t,e)=>r({type:"warning",message:t,timeout:e,id:s()}),error:(t,e)=>r({type:"error",message:t,timeout:e,id:s()}),success:(t,e)=>r({type:"success",message:t,timeout:e,id:s()}),remove:t=>n(t)}}const w=d();export{w as t};