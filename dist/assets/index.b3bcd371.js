(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ss="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ls=qr(ss);function Li(e){return!!e||e===""}function Vr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?us(r):Vr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(ee(e))return e}}const cs=/;(?![^(]*\))/g,fs=/:(.+)/;function us(e){const t={};return e.split(cs).forEach(n=>{if(n){const r=n.split(fs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xr(e){let t="";if(ne(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Xr(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const st=e=>ne(e)?e:e==null?"":F(e)||ee(e)&&(e.toString===Di||!R(e.toString))?JSON.stringify(e,Ri,2):String(e),Ri=(e,t)=>t&&t.__v_isRef?Ri(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ji(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!F(t)&&!$i(t)?String(t):t,Y={},kt=[],Oe=()=>{},ds=()=>!1,ms=/^on[^a-z]/,Bn=e=>ms.test(e),Gr=e=>e.startsWith("onUpdate:"),le=Object.assign,Jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ps=Object.prototype.hasOwnProperty,D=(e,t)=>ps.call(e,t),F=Array.isArray,At=e=>Wn(e)==="[object Map]",ji=e=>Wn(e)==="[object Set]",R=e=>typeof e=="function",ne=e=>typeof e=="string",Zr=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",zi=e=>ee(e)&&R(e.then)&&R(e.catch),Di=Object.prototype.toString,Wn=e=>Di.call(e),hs=e=>Wn(e).slice(8,-1),$i=e=>Wn(e)==="[object Object]",Qr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gs=/-(\w)/g,Fe=Yn(e=>e.replace(gs,(t,n)=>n?n.toUpperCase():"")),vs=/\B([A-Z])/g,It=Yn(e=>e.replace(vs,"-$1").toLowerCase()),Kn=Yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Yn(e=>e?`on${Kn(e)}`:""),Nn=(e,t)=>!Object.is(e,t),cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},bs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const ys=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class ws{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ie&&(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function _s(e,t=Ie){t&&t.active&&t.effects.push(e)}const ea=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Hi=e=>(e.w&Ze)>0,Ui=e=>(e.n&Ze)>0,xs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},ks=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Hi(a)&&!Ui(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},vr=new WeakMap;let zt=0,Ze=1;const br=30;let we;const ft=Symbol(""),yr=Symbol("");class ta{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_s(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Ge=!0,Ze=1<<++zt,zt<=br?xs(this):Ra(this),this.fn()}finally{zt<=br&&ks(this),Ze=1<<--zt,we=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const Bi=[];function St(){Bi.push(Ge),Ge=!1}function Nt(){const e=Bi.pop();Ge=e===void 0?!0:e}function he(e,t,n){if(Ge&&we){let r=vr.get(e);r||vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ea()),Wi(a)}}function Wi(e,t){let n=!1;zt<=br?Ui(e)||(e.n|=Ze,n=!Hi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function ze(e,t,n,r,a,i){const o=vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Qr(n)&&s.push(o.get("length")):(s.push(o.get(ft)),At(e)&&s.push(o.get(yr)));break;case"delete":F(e)||(s.push(o.get(ft)),At(e)&&s.push(o.get(yr)));break;case"set":At(e)&&s.push(o.get(ft));break}if(s.length===1)s[0]&&wr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);wr(ea(l))}}function wr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&ja(r);for(const r of n)r.computed||ja(r)}function ja(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const As=qr("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Zr)),Es=na(),Os=na(!1,!0),Ps=na(!0),za=Cs();function Cs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=H(this)[t].apply(this,n);return Nt(),r}}),e}function na(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ws:Gi:t?Xi:Vi).get(r))return r;const o=F(r);if(!e&&o&&D(za,a))return Reflect.get(za,a,i);const s=Reflect.get(r,a,i);return(Zr(a)?Yi.has(a):As(a))||(e||he(r,"get",a),t)?s:se(s)?o&&Qr(a)?s:s.value:ee(s)?e?Ji(s):ia(s):s}}const Ts=Ki(),Is=Ki(!0);function Ki(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&se(o)&&!se(a))return!1;if(!e&&!Vt(a)&&(_r(a)||(a=H(a),o=H(o)),!F(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=F(n)&&Qr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Nn(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Ss(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Ns(e,t){const n=Reflect.has(e,t);return(!Zr(t)||!Yi.has(t))&&he(e,"has",t),n}function Ms(e){return he(e,"iterate",F(e)?"length":ft),Reflect.ownKeys(e)}const qi={get:Es,set:Ts,deleteProperty:Ss,has:Ns,ownKeys:Ms},Fs={get:Ps,set(e,t){return!0},deleteProperty(e,t){return!0}},Ls=le({},qi,{get:Os,set:Is}),ra=e=>e,qn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=qn(a),s=r?ra:n?la:sa;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function mn(e,t=!1){return e=e.__v_raw,!t&&he(H(e),"iterate",ft),Reflect.get(e,"size",e)}function Da(e){e=H(e);const t=H(this);return qn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function $a(e,t){t=H(t);const n=H(this),{has:r,get:a}=qn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Nn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Ha(e){const t=H(this),{has:n,get:r}=qn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Ua(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?ra:e?la:sa;return!e&&he(s,"iterate",ft),o.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=At(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),d=n?ra:t?la:sa;return!t&&he(i,"iterate",l?yr:ft),{next(){const{value:m,done:v}=f.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Rs(){const e={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:Da,set:$a,delete:Ha,clear:Ua,forEach:pn(!1,!1)},t={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:Da,set:$a,delete:Ha,clear:Ua,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[js,zs,Ds,$s]=Rs();function aa(e,t){const n=t?e?$s:Ds:e?zs:js;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Hs={get:aa(!1,!1)},Us={get:aa(!1,!0)},Bs={get:aa(!0,!1)},Vi=new WeakMap,Xi=new WeakMap,Gi=new WeakMap,Ws=new WeakMap;function Ys(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ks(e){return e.__v_skip||!Object.isExtensible(e)?0:Ys(hs(e))}function ia(e){return Vt(e)?e:oa(e,!1,qi,Hs,Vi)}function qs(e){return oa(e,!1,Ls,Us,Xi)}function Ji(e){return oa(e,!0,Fs,Bs,Gi)}function oa(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ks(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Et(e){return Vt(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function _r(e){return!!(e&&e.__v_isShallow)}function Zi(e){return Et(e)||Vt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Qi(e){return Mn(e,"__v_skip",!0),e}const sa=e=>ee(e)?ia(e):e,la=e=>ee(e)?Ji(e):e;function Vs(e){Ge&&we&&(e=H(e),Wi(e.dep||(e.dep=ea())))}function Xs(e,t){e=H(e),e.dep&&wr(e.dep)}function se(e){return!!(e&&e.__v_isRef===!0)}function Gs(e){return se(e)?e.value:e}const Js={get:(e,t,n)=>Gs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return Et(e)?e:new Proxy(e,Js)}class Zs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ta(t,()=>{this._dirty||(this._dirty=!0,Xs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Vs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qs(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Zs(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Vn(i,t,n)}return a}function Pe(e,t,n,r){if(R(e)){const i=Je(e,t,n,r);return i&&zi(i)&&i.catch(o=>{Vn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function Vn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}el(e,n,a,r)}function el(e,t,n,r=!0){console.error(e)}let Fn=!1,xr=!1;const pe=[];let je=0;const Ut=[];let Dt=null,bt=0;const Bt=[];let Ve=null,yt=0;const to=Promise.resolve();let ca=null,kr=null;function tl(e){const t=ca||to;return e?t.then(this?e.bind(this):e):t}function nl(e){let t=je+1,n=pe.length;for(;t<n;){const r=t+n>>>1;Xt(pe[r])<e?t=r+1:n=r}return t}function no(e){(!pe.length||!pe.includes(e,Fn&&e.allowRecurse?je+1:je))&&e!==kr&&(e.id==null?pe.push(e):pe.splice(nl(e.id),0,e),ro())}function ro(){!Fn&&!xr&&(xr=!0,ca=to.then(oo))}function rl(e){const t=pe.indexOf(e);t>je&&pe.splice(t,1)}function ao(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),ro()}function al(e){ao(e,Dt,Ut,bt)}function il(e){ao(e,Ve,Bt,yt)}function Xn(e,t=null){if(Ut.length){for(kr=t,Dt=[...new Set(Ut)],Ut.length=0,bt=0;bt<Dt.length;bt++)Dt[bt]();Dt=null,bt=0,kr=null,Xn(e,t)}}function io(e){if(Xn(),Bt.length){const t=[...new Set(Bt)];if(Bt.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>Xt(n)-Xt(r)),yt=0;yt<Ve.length;yt++)Ve[yt]();Ve=null,yt=0}}const Xt=e=>e.id==null?1/0:e.id;function oo(e){xr=!1,Fn=!0,Xn(e),pe.sort((n,r)=>Xt(n)-Xt(r));const t=Oe;try{for(je=0;je<pe.length;je++){const n=pe[je];n&&n.active!==!1&&Je(n,null,14)}}finally{je=0,pe.length=0,io(),Fn=!1,ca=null,(pe.length||Ut.length||Bt.length)&&oo(e)}}function ol(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||Y;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(bs))}let s,l=r[s=lr(t)]||r[s=lr(Fe(t))];!l&&i&&(l=r[s=lr(It(t))]),l&&Pe(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(f,e,6,a)}}function so(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=f=>{const d=so(f,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):le(o,i),r.set(e,o),o)}function Gn(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,It(t))||D(e,t))}let Ne=null,Jn=null;function Ln(e){const t=Ne;return Ne=e,Jn=e&&e.type.__scopeId||null,t}function sl(e){Jn=e}function ll(){Jn=null}function cl(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Za(-1);const i=Ln(t),o=e(...a);return Ln(i),r._d&&Za(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:d,renderCache:m,data:v,setupState:k,ctx:L,inheritAttrs:j}=e;let S,y;const O=Ln(e);try{if(n.shapeFlag&4){const z=a||r;S=Se(d.call(z,z,m,i,k,v,L)),y=l}else{const z=t;S=Se(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),y=t.props?l:fl(l)}}catch(z){Wt.length=0,Vn(z,e,1),S=Q(Gt)}let M=S;if(y&&j!==!1){const z=Object.keys(y),{shapeFlag:W}=M;z.length&&W&7&&(o&&z.some(Gr)&&(y=ul(y,o)),M=Pt(M,y))}return n.dirs&&(M=Pt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),S=M,Ln(O),S}const fl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},ul=(e,t)=>{const n={};for(const r in e)(!Gr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,o,f):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Gn(f,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ba(r,o,f):!0:!!o;return!1}function Ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Gn(n,i))return!0}return!1}function ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pl=e=>e.__isSuspense;function hl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):il(e)}function gl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function ur(e,t,n=!1){const r=re||Ne;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Wa={};function On(e,t,n){return lo(e,t,n)}function lo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=re;let l,f=!1,d=!1;if(se(e)?(l=()=>e.value,f=_r(e)):Et(e)?(l=()=>e,r=!0):F(e)?(d=!0,f=e.some(y=>Et(y)||_r(y)),l=()=>e.map(y=>{if(se(y))return y.value;if(Et(y))return wt(y);if(R(y))return Je(y,s,2)})):R(e)?t?l=()=>Je(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Pe(e,s,3,[v])}:l=Oe,t&&r){const y=l;l=()=>wt(y())}let m,v=y=>{m=S.onStop=()=>{Je(y,s,4)}};if(Zt)return v=Oe,t?n&&Pe(t,s,3,[l(),d?[]:void 0,v]):l(),Oe;let k=d?[]:Wa;const L=()=>{if(!!S.active)if(t){const y=S.run();(r||f||(d?y.some((O,M)=>Nn(O,k[M])):Nn(y,k)))&&(m&&m(),Pe(t,s,3,[y,k===Wa?void 0:k,v]),k=y)}else S.run()};L.allowRecurse=!!t;let j;a==="sync"?j=L:a==="post"?j=()=>de(L,s&&s.suspense):j=()=>al(L);const S=new ta(l,j);return t?n?L():k=S.run():a==="post"?de(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Jr(s.scope.effects,S)}}function vl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?co(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=re;Ct(this);const s=lo(a,i.bind(r),n);return o?Ct(o):ut(),s}function co(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function wt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))wt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)wt(e[n],t);else if(ji(e)||At(e))e.forEach(n=>{wt(n,t)});else if($i(e))for(const n in e)wt(e[n],t);return e}function fa(e){return R(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive;function bl(e,t){uo(e,"a",t)}function yl(e,t){uo(e,"da",t)}function uo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Zn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)fo(a.parent.vnode)&&wl(r,t,n,a),a=a.parent}}function wl(e,t,n,r){const a=Zn(t,e,r,!0);mo(()=>{Jr(r[t],a)},n)}function Zn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Ct(n);const s=Pe(t,n,e,o);return ut(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=re)=>(!Zt||e==="sp")&&Zn(e,t,n),_l=Ue("bm"),xl=Ue("m"),kl=Ue("bu"),Al=Ue("u"),El=Ue("bum"),mo=Ue("um"),Ol=Ue("sp"),Pl=Ue("rtg"),Cl=Ue("rtc");function Tl(e,t=re){Zn("ec",e,t)}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Pe(l,n,8,[e.el,s,e,t]),Nt())}}const po="components";function $t(e,t){return Sl(po,e,!0,t)||e}const Il=Symbol();function Sl(e,t,n=!0,r=!1){const a=Ne||re;if(a){const i=a.type;if(e===po){const s=lc(i,!1);if(s&&(s===t||s===Fe(t)||s===Kn(Fe(t))))return i}const o=Ya(a[e]||i[e],t)||Ya(a.appContext[e],t);return!o&&r?i:o}}function Ya(e,t){return e&&(e[t]||e[Fe(t)]||e[Kn(Fe(t))])}function Ar(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ee(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Er=e=>e?Eo(e)?pa(e)||e.proxy:Er(e.parent):null,Rn=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$emit:e=>e.emit,$options:e=>go(e),$forceUpdate:e=>e.f||(e.f=()=>no(e.update)),$nextTick:e=>e.n||(e.n=tl.bind(e.proxy)),$watch:e=>vl.bind(e)}),Nl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&D(r,t))return o[t]=1,r[t];if(a!==Y&&D(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&D(f,t))return o[t]=3,i[t];if(n!==Y&&D(n,t))return o[t]=4,n[t];Or&&(o[t]=0)}}const d=Rn[t];let m,v;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&D(a,t)?(a[t]=n,!0):r!==Y&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&D(e,o)||t!==Y&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Rn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Or=!0;function Ml(e){const t=go(e),n=e.proxy,r=e.ctx;Or=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:L,activated:j,deactivated:S,beforeDestroy:y,beforeUnmount:O,destroyed:M,unmounted:z,render:W,renderTracked:ce,renderTriggered:ie,errorCaptured:We,serverPrefetch:ae,expose:nt,inheritAttrs:pt,components:Ft,directives:cn,filters:Ta}=t;if(f&&Fl(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const q=o[J];R(q)&&(r[J]=q.bind(n))}if(a){const J=a.call(n,n);ee(J)&&(e.data=ia(J))}if(Or=!0,i)for(const J in i){const q=i[J],Le=R(q)?q.bind(n,n):R(q.get)?q.get.bind(n,n):Oe,ir=!R(q)&&R(q.set)?q.set.bind(n):Oe,Lt=be({get:Le,set:ir});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:ht=>Lt.value=ht})}if(s)for(const J in s)ho(s[J],r,n,J);if(l){const J=R(l)?l.call(n):l;Reflect.ownKeys(J).forEach(q=>{gl(q,J[q])})}d&&Ka(d,e,"c");function fe(J,q){F(q)?q.forEach(Le=>J(Le.bind(n))):q&&J(q.bind(n))}if(fe(_l,m),fe(xl,v),fe(kl,k),fe(Al,L),fe(bl,j),fe(yl,S),fe(Tl,We),fe(Cl,ce),fe(Pl,ie),fe(El,O),fe(mo,z),fe(Ol,ae),F(nt))if(nt.length){const J=e.exposed||(e.exposed={});nt.forEach(q=>{Object.defineProperty(J,q,{get:()=>n[q],set:Le=>n[q]=Le})})}else e.exposed||(e.exposed={});W&&e.render===Oe&&(e.render=W),pt!=null&&(e.inheritAttrs=pt),Ft&&(e.components=Ft),cn&&(e.directives=cn)}function Fl(e,t,n=Oe,r=!1){F(e)&&(e=Pr(e));for(const a in e){const i=e[a];let o;ee(i)?"default"in i?o=ur(i.from||a,i.default,!0):o=ur(i.from||a):o=ur(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ka(e,t,n){Pe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ho(e,t,n,r){const a=r.includes(".")?co(n,r):()=>n[r];if(ne(e)){const i=t[e];R(i)&&On(a,i)}else if(R(e))On(a,e.bind(n));else if(ee(e))if(F(e))e.forEach(i=>ho(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&On(a,i,e)}}function go(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>jn(l,f,o,!0)),jn(l,t,o)),i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ll={data:qa,props:it,emits:it,methods:it,computed:it,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:it,directives:it,watch:jl,provide:qa,inject:Rl};function qa(e,t){return t?e?function(){return le(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Rl(e,t){return it(Pr(e),Pr(t))}function Pr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?le(le(Object.create(null),e),t):t}function jl(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function zl(e,t,n,r=!1){const a={},i={};Mn(i,Qn,1),e.propsDefaults=Object.create(null),vo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:qs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Dl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Gn(e.emitsOptions,v))continue;const k=t[v];if(l)if(D(i,v))k!==i[v]&&(i[v]=k,f=!0);else{const L=Fe(v);a[L]=Cr(l,s,L,k,e,!1)}else k!==i[v]&&(i[v]=k,f=!0)}}}else{vo(e,t,a,i)&&(f=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=It(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],f=!0)}f&&ze(e,"set","$attrs")}function vo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(En(l))continue;const f=t[l];let d;a&&D(a,d=Fe(l))?!i||!i.includes(d)?n[d]=f:(s||(s={}))[d]=f:Gn(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=H(n),f=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Cr(a,l,m,f[m],e,!D(f,m))}}return o}function Cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ct(a),r=f[n]=l.call(null,t),ut())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[v,k]=bo(m,t,!0);le(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,kt),kt;if(F(i))for(let d=0;d<i.length;d++){const m=Fe(i[d]);Va(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Fe(d);if(Va(m)){const v=i[d],k=o[m]=F(v)||R(v)?{type:v}:v;if(k){const L=Ja(Boolean,k.type),j=Ja(String,k.type);k[0]=L>-1,k[1]=j<0||L<j,(L>-1||D(k,"default"))&&s.push(m)}}}const f=[o,s];return r.set(e,f),f}function Va(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ga(e,t){return Xa(e)===Xa(t)}function Ja(e,t){return F(t)?t.findIndex(n=>Ga(n,e)):R(t)&&Ga(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",ua=e=>F(e)?e.map(Se):[Se(e)],$l=(e,t,n)=>{if(t._n)return t;const r=cl((...a)=>ua(t(...a)),n);return r._c=!1,r},wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(yo(a))continue;const i=e[a];if(R(i))t[a]=$l(a,i,r);else if(i!=null){const o=ua(i);t[a]=()=>o}}},_o=(e,t)=>{const n=ua(t);e.slots.default=()=>n},Hl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Mn(t,"_",n)):wo(t,e.slots={})}else e.slots={},t&&_o(e,t);Mn(e.slots,Qn,1)},Ul=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,wo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!yo(s)&&!(s in o)&&delete a[s]};function xo(){return{app:null,config:{isNativeTag:ds,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bl=0;function Wl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!ee(a)&&(a=null);const i=xo(),o=new Set;let s=!1;const l=i.app={_uid:Bl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:fc,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&R(f.install)?(o.add(f),f.install(l,...d)):R(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!s){const v=Q(r,a);return v.appContext=i,d&&t?t(v,f):e(v,f,m),s=!0,l._container=f,f.__vue_app__=l,pa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l}};return l}}function Tr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,k)=>Tr(v,t&&(F(t)?t[k]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?pa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(ne(f)?(d[f]=null,D(m,f)&&(m[f]=null)):se(f)&&(f.value=null)),R(l))Je(l,s,12,[o,d]);else{const v=ne(l),k=se(l);if(v||k){const L=()=>{if(e.f){const j=v?d[l]:l.value;a?F(j)&&Jr(j,i):F(j)?j.includes(i)||j.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,de(L,n)):L()}}}const de=hl;function Yl(e){return Kl(e)}function Kl(e,t){const n=ys();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Oe,cloneNode:L,insertStaticContent:j}=e,S=(c,u,p,g=null,h=null,_=null,A=!1,w=null,x=!!u.dynamicChildren)=>{if(c===u)return;c&&!jt(c,u)&&(g=fn(c),Ye(c,h,_,!0),c=null),u.patchFlag===-2&&(x=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case da:y(c,u,p,g);break;case Gt:O(c,u,p,g);break;case Cn:c==null&&M(u,p,g,A);break;case ve:cn(c,u,p,g,h,_,A,w,x);break;default:P&1?ce(c,u,p,g,h,_,A,w,x):P&6?Ta(c,u,p,g,h,_,A,w,x):(P&64||P&128)&&b.process(c,u,p,g,h,_,A,w,x,gt)}T!=null&&h&&Tr(T,c&&c.ref,_,u||c,!u)},y=(c,u,p,g)=>{if(c==null)r(u.el=s(u.children),p,g);else{const h=u.el=c.el;u.children!==c.children&&f(h,u.children)}},O=(c,u,p,g)=>{c==null?r(u.el=l(u.children||""),p,g):u.el=c.el},M=(c,u,p,g)=>{[c.el,c.anchor]=j(c.children,u,p,g,c.el,c.anchor)},z=({el:c,anchor:u},p,g)=>{let h;for(;c&&c!==u;)h=v(c),r(c,p,g),c=h;r(u,p,g)},W=({el:c,anchor:u})=>{let p;for(;c&&c!==u;)p=v(c),a(c),c=p;a(u)},ce=(c,u,p,g,h,_,A,w,x)=>{A=A||u.type==="svg",c==null?ie(u,p,g,h,_,A,w,x):nt(c,u,h,_,A,w,x)},ie=(c,u,p,g,h,_,A,w)=>{let x,b;const{type:T,props:P,shapeFlag:I,transition:N,patchFlag:$,dirs:U}=c;if(c.el&&L!==void 0&&$===-1)x=c.el=L(c.el);else{if(x=c.el=o(c.type,_,P&&P.is,P),I&8?d(x,c.children):I&16&&ae(c.children,x,null,g,h,_&&T!=="foreignObject",A,w),U&&rt(c,null,g,"created"),P){for(const V in P)V!=="value"&&!En(V)&&i(x,V,null,P[V],_,c.children,g,h,Re);"value"in P&&i(x,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Te(b,g,c)}We(x,c,c.scopeId,A,g)}U&&rt(c,null,g,"beforeMount");const B=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;B&&N.beforeEnter(x),r(x,u,p),((b=P&&P.onVnodeMounted)||B||U)&&de(()=>{b&&Te(b,g,c),B&&N.enter(x),U&&rt(c,null,g,"mounted")},h)},We=(c,u,p,g,h)=>{if(p&&k(c,p),g)for(let _=0;_<g.length;_++)k(c,g[_]);if(h){let _=h.subTree;if(u===_){const A=h.vnode;We(c,A,A.scopeId,A.slotScopeIds,h.parent)}}},ae=(c,u,p,g,h,_,A,w,x=0)=>{for(let b=x;b<c.length;b++){const T=c[b]=w?Xe(c[b]):Se(c[b]);S(null,T,u,p,g,h,_,A,w)}},nt=(c,u,p,g,h,_,A)=>{const w=u.el=c.el;let{patchFlag:x,dynamicChildren:b,dirs:T}=u;x|=c.patchFlag&16;const P=c.props||Y,I=u.props||Y;let N;p&&at(p,!1),(N=I.onVnodeBeforeUpdate)&&Te(N,p,u,c),T&&rt(u,c,p,"beforeUpdate"),p&&at(p,!0);const $=h&&u.type!=="foreignObject";if(b?pt(c.dynamicChildren,b,w,p,g,$,_):A||Le(c,u,w,null,p,g,$,_,!1),x>0){if(x&16)Ft(w,u,P,I,p,g,h);else if(x&2&&P.class!==I.class&&i(w,"class",null,I.class,h),x&4&&i(w,"style",P.style,I.style,h),x&8){const U=u.dynamicProps;for(let B=0;B<U.length;B++){const V=U[B],ye=P[V],vt=I[V];(vt!==ye||V==="value")&&i(w,V,ye,vt,h,c.children,p,g,Re)}}x&1&&c.children!==u.children&&d(w,u.children)}else!A&&b==null&&Ft(w,u,P,I,p,g,h);((N=I.onVnodeUpdated)||T)&&de(()=>{N&&Te(N,p,u,c),T&&rt(u,c,p,"updated")},g)},pt=(c,u,p,g,h,_,A)=>{for(let w=0;w<u.length;w++){const x=c[w],b=u[w],T=x.el&&(x.type===ve||!jt(x,b)||x.shapeFlag&70)?m(x.el):p;S(x,b,T,null,g,h,_,A,!0)}},Ft=(c,u,p,g,h,_,A)=>{if(p!==g){for(const w in g){if(En(w))continue;const x=g[w],b=p[w];x!==b&&w!=="value"&&i(c,w,b,x,A,u.children,h,_,Re)}if(p!==Y)for(const w in p)!En(w)&&!(w in g)&&i(c,w,p[w],null,A,u.children,h,_,Re);"value"in g&&i(c,"value",p.value,g.value)}},cn=(c,u,p,g,h,_,A,w,x)=>{const b=u.el=c?c.el:s(""),T=u.anchor=c?c.anchor:s("");let{patchFlag:P,dynamicChildren:I,slotScopeIds:N}=u;N&&(w=w?w.concat(N):N),c==null?(r(b,p,g),r(T,p,g),ae(u.children,p,T,h,_,A,w,x)):P>0&&P&64&&I&&c.dynamicChildren?(pt(c.dynamicChildren,I,p,h,_,A,w),(u.key!=null||h&&u===h.subTree)&&ko(c,u,!0)):Le(c,u,p,T,h,_,A,w,x)},Ta=(c,u,p,g,h,_,A,w,x)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,x):ar(u,p,g,h,_,A,x):fe(c,u,x)},ar=(c,u,p,g,h,_,A)=>{const w=c.component=rc(c,g,h);if(fo(c)&&(w.ctx.renderer=gt),ac(w),w.asyncDep){if(h&&h.registerDep(w,J),!c.el){const x=w.subTree=Q(Gt);O(null,x,u,p)}return}J(w,c,u,p,h,_,A)},fe=(c,u,p)=>{const g=u.component=c.component;if(dl(c,u,p))if(g.asyncDep&&!g.asyncResolved){q(g,u,p);return}else g.next=u,rl(g.update),g.update();else u.el=c.el,g.vnode=u},J=(c,u,p,g,h,_,A)=>{const w=()=>{if(c.isMounted){let{next:T,bu:P,u:I,parent:N,vnode:$}=c,U=T,B;at(c,!1),T?(T.el=$.el,q(c,T,A)):T=$,P&&cr(P),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Te(B,N,T,$),at(c,!0);const V=fr(c),ye=c.subTree;c.subTree=V,S(ye,V,m(ye.el),fn(ye),c,h,_),T.el=V.el,U===null&&ml(c,V.el),I&&de(I,h),(B=T.props&&T.props.onVnodeUpdated)&&de(()=>Te(B,N,T,$),h)}else{let T;const{el:P,props:I}=u,{bm:N,m:$,parent:U}=c,B=Pn(u);if(at(c,!1),N&&cr(N),!B&&(T=I&&I.onVnodeBeforeMount)&&Te(T,U,u),at(c,!0),P&&sr){const V=()=>{c.subTree=fr(c),sr(P,c.subTree,c,h,null)};B?u.type.__asyncLoader().then(()=>!c.isUnmounted&&V()):V()}else{const V=c.subTree=fr(c);S(null,V,p,g,c,h,_),u.el=V.el}if($&&de($,h),!B&&(T=I&&I.onVnodeMounted)){const V=u;de(()=>Te(T,U,V),h)}(u.shapeFlag&256||U&&Pn(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&de(c.a,h),c.isMounted=!0,u=p=g=null}},x=c.effect=new ta(w,()=>no(b),c.scope),b=c.update=()=>x.run();b.id=c.uid,at(c,!0),b()},q=(c,u,p)=>{u.component=c;const g=c.vnode.props;c.vnode=u,c.next=null,Dl(c,u.props,g,p),Ul(c,u.children,p),St(),Xn(void 0,c.update),Nt()},Le=(c,u,p,g,h,_,A,w,x=!1)=>{const b=c&&c.children,T=c?c.shapeFlag:0,P=u.children,{patchFlag:I,shapeFlag:N}=u;if(I>0){if(I&128){Lt(b,P,p,g,h,_,A,w,x);return}else if(I&256){ir(b,P,p,g,h,_,A,w,x);return}}N&8?(T&16&&Re(b,h,_),P!==b&&d(p,P)):T&16?N&16?Lt(b,P,p,g,h,_,A,w,x):Re(b,h,_,!0):(T&8&&d(p,""),N&16&&ae(P,p,g,h,_,A,w,x))},ir=(c,u,p,g,h,_,A,w,x)=>{c=c||kt,u=u||kt;const b=c.length,T=u.length,P=Math.min(b,T);let I;for(I=0;I<P;I++){const N=u[I]=x?Xe(u[I]):Se(u[I]);S(c[I],N,p,null,h,_,A,w,x)}b>T?Re(c,h,_,!0,!1,P):ae(u,p,g,h,_,A,w,x,P)},Lt=(c,u,p,g,h,_,A,w,x)=>{let b=0;const T=u.length;let P=c.length-1,I=T-1;for(;b<=P&&b<=I;){const N=c[b],$=u[b]=x?Xe(u[b]):Se(u[b]);if(jt(N,$))S(N,$,p,null,h,_,A,w,x);else break;b++}for(;b<=P&&b<=I;){const N=c[P],$=u[I]=x?Xe(u[I]):Se(u[I]);if(jt(N,$))S(N,$,p,null,h,_,A,w,x);else break;P--,I--}if(b>P){if(b<=I){const N=I+1,$=N<T?u[N].el:g;for(;b<=I;)S(null,u[b]=x?Xe(u[b]):Se(u[b]),p,$,h,_,A,w,x),b++}}else if(b>I)for(;b<=P;)Ye(c[b],h,_,!0),b++;else{const N=b,$=b,U=new Map;for(b=$;b<=I;b++){const me=u[b]=x?Xe(u[b]):Se(u[b]);me.key!=null&&U.set(me.key,b)}let B,V=0;const ye=I-$+1;let vt=!1,Na=0;const Rt=new Array(ye);for(b=0;b<ye;b++)Rt[b]=0;for(b=N;b<=P;b++){const me=c[b];if(V>=ye){Ye(me,h,_,!0);continue}let Ce;if(me.key!=null)Ce=U.get(me.key);else for(B=$;B<=I;B++)if(Rt[B-$]===0&&jt(me,u[B])){Ce=B;break}Ce===void 0?Ye(me,h,_,!0):(Rt[Ce-$]=b+1,Ce>=Na?Na=Ce:vt=!0,S(me,u[Ce],p,null,h,_,A,w,x),V++)}const Ma=vt?ql(Rt):kt;for(B=Ma.length-1,b=ye-1;b>=0;b--){const me=$+b,Ce=u[me],Fa=me+1<T?u[me+1].el:g;Rt[b]===0?S(null,Ce,p,Fa,h,_,A,w,x):vt&&(B<0||b!==Ma[B]?ht(Ce,p,Fa,2):B--)}}},ht=(c,u,p,g,h=null)=>{const{el:_,type:A,transition:w,children:x,shapeFlag:b}=c;if(b&6){ht(c.component.subTree,u,p,g);return}if(b&128){c.suspense.move(u,p,g);return}if(b&64){A.move(c,u,p,gt);return}if(A===ve){r(_,u,p);for(let P=0;P<x.length;P++)ht(x[P],u,p,g);r(c.anchor,u,p);return}if(A===Cn){z(c,u,p);return}if(g!==2&&b&1&&w)if(g===0)w.beforeEnter(_),r(_,u,p),de(()=>w.enter(_),h);else{const{leave:P,delayLeave:I,afterLeave:N}=w,$=()=>r(_,u,p),U=()=>{P(_,()=>{$(),N&&N()})};I?I(_,$,U):U()}else r(_,u,p)},Ye=(c,u,p,g=!1,h=!1)=>{const{type:_,props:A,ref:w,children:x,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:I}=c;if(w!=null&&Tr(w,null,p,c,!0),T&256){u.ctx.deactivate(c);return}const N=T&1&&I,$=!Pn(c);let U;if($&&(U=A&&A.onVnodeBeforeUnmount)&&Te(U,u,c),T&6)os(c.component,p,g);else{if(T&128){c.suspense.unmount(p,g);return}N&&rt(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,p,h,gt,g):b&&(_!==ve||P>0&&P&64)?Re(b,u,p,!1,!0):(_===ve&&P&384||!h&&T&16)&&Re(x,u,p),g&&Ia(c)}($&&(U=A&&A.onVnodeUnmounted)||N)&&de(()=>{U&&Te(U,u,c),N&&rt(c,null,u,"unmounted")},p)},Ia=c=>{const{type:u,el:p,anchor:g,transition:h}=c;if(u===ve){is(p,g);return}if(u===Cn){W(c);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:w}=h,x=()=>A(p,_);w?w(c.el,_,x):x()}else _()},is=(c,u)=>{let p;for(;c!==u;)p=v(c),a(c),c=p;a(u)},os=(c,u,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:w}=c;g&&cr(g),h.stop(),_&&(_.active=!1,Ye(A,c,u,p)),w&&de(w,u),de(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(c,u,p,g=!1,h=!1,_=0)=>{for(let A=_;A<c.length;A++)Ye(c[A],u,p,g,h)},fn=c=>c.shapeFlag&6?fn(c.component.subTree):c.shapeFlag&128?c.suspense.next():v(c.anchor||c.el),Sa=(c,u,p)=>{c==null?u._vnode&&Ye(u._vnode,null,null,!0):S(u._vnode||null,c,u,null,null,null,p),io(),u._vnode=c},gt={p:S,um:Ye,m:ht,r:Ia,mt:ar,mc:ae,pc:Le,pbc:pt,n:fn,o:e};let or,sr;return t&&([or,sr]=t(gt)),{render:Sa,hydrate:or,createApp:Wl(Sa,or)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ko(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||ko(o,s))}}function ql(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vl=e=>e.__isTeleport,ve=Symbol(void 0),da=Symbol(void 0),Gt=Symbol(void 0),Cn=Symbol(void 0),Wt=[];let Ae=null;function _e(e=!1){Wt.push(Ae=e?null:[])}function Xl(){Wt.pop(),Ae=Wt[Wt.length-1]||null}let Jt=1;function Za(e){Jt+=e}function Gl(e){return e.dynamicChildren=Jt>0?Ae||kt:null,Xl(),Jt>0&&Ae&&Ae.push(e),e}function xe(e,t,n,r,a,i){return Gl(K(e,t,n,r,a,i,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function jt(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Ao=({key:e})=>e!=null?e:null,Tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||se(e)||R(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function K(e,t=null,n=null,r=0,a=null,i=e===ve?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&Tn(t),scopeId:Jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ma(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Jt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const Q=Jl;function Jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Il)&&(e=Gt),Ir(e)){const s=Pt(e,t,!0);return n&&ma(s,n),Jt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(cc(e)&&(e=e.__vccOpts),t){t=Zl(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Xr(s)),ee(l)&&(Zi(l)&&!F(l)&&(l=le({},l)),t.style=Vr(l))}const o=ne(e)?1:pl(e)?128:Vl(e)?64:ee(e)?4:R(e)?2:0;return K(e,t,n,r,a,o,i,!0)}function Zl(e){return e?Zi(e)||Qn in e?le({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ec(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ao(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor}}function Sr(e=" ",t=0){return Q(da,null,e,t)}function Ql(e,t){const n=Q(Cn,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?Q(Gt):F(e)?Q(ve,null,e.slice()):typeof e=="object"?Xe(e):Q(da,null,String(e))}function Xe(e){return e.el===null||e.memo?e:Pt(e)}function ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ma(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Qn in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[Sr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ec(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Xr([t.class,r.class]));else if(a==="style")t.style=Vr([t.style,r.style]);else if(Bn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){Pe(e,t,7,[n,r])}const tc=xo();let nc=0;function rc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||tc,i={uid:nc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:so(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ol.bind(null,i),e.ce&&e.ce(i),i}let re=null;const Ct=e=>{re=e,e.scope.on()},ut=()=>{re&&re.scope.off(),re=null};function Eo(e){return e.vnode.shapeFlag&4}let Zt=!1;function ac(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,a=Eo(e);zl(e,n,a,t),Hl(e,r);const i=a?ic(e,t):void 0;return Zt=!1,i}function ic(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qi(new Proxy(e.ctx,Nl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?sc(e):null;Ct(e),St();const i=Je(r,e,0,[e.props,a]);if(Nt(),ut(),zi(i)){if(i.then(ut,ut),t)return i.then(o=>{Qa(e,o,t)}).catch(o=>{Vn(o,e,0)});e.asyncDep=i}else Qa(e,i,t)}else Oo(e,t)}function Qa(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=eo(t)),Oo(e,n)}let ei;function Oo(e,t,n){const r=e.type;if(!e.render){if(!t&&ei&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=le(le({isCustomElement:i,delimiters:s},o),l);r.render=ei(a,f)}}e.render=r.render||Oe}Ct(e),St(),Ml(e),Nt(),ut()}function oc(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function sc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=oc(e))},slots:e.slots,emit:e.emit,expose:t}}function pa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rn)return Rn[n](e)}}))}function lc(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function cc(e){return R(e)&&"__vccOpts"in e}const be=(e,t)=>Qs(e,t,Zt);function Po(e,t,n){const r=arguments.length;return r===2?ee(t)&&!F(t)?Ir(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),Q(e,t,n))}const fc="3.2.37",uc="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,ti=ot&&ot.createElement("template"),dc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(uc,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ti.innerHTML=r?`<svg>${e}</svg>`:e;const s=ti.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function mc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pc(e,t,n){const r=e.style,a=ne(n);if(n&&!a){for(const i in n)Nr(r,i,n[i]);if(t&&!ne(t))for(const i in t)n[i]==null&&Nr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ni=/\s*!important$/;function Nr(e,t,n){if(F(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hc(e,t);ni.test(n)?e.setProperty(It(r),n.replace(ni,""),"important"):e[r]=n}}const ri=["Webkit","Moz","ms"],dr={};function hc(e,t){const n=dr[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return dr[t]=r;r=Kn(r);for(let a=0;a<ri.length;a++){const i=ri[a]+r;if(i in e)return dr[t]=i}return t}const ai="http://www.w3.org/1999/xlink";function gc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ai,t.slice(6,t.length)):e.setAttributeNS(ai,t,n);else{const i=ls(t);n==null||i&&!Li(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function vc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Li(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Co,bc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Mr=0;const yc=Promise.resolve(),wc=()=>{Mr=0},_c=()=>Mr||(yc.then(wc),Mr=Co());function xc(e,t,n,r){e.addEventListener(t,n,r)}function kc(e,t,n,r){e.removeEventListener(t,n,r)}function Ac(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ec(t);if(r){const f=i[t]=Oc(r,a);xc(e,s,f,l)}else o&&(kc(e,s,o,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function Ec(e){let t;if(ii.test(e)){t={};let n;for(;n=e.match(ii);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[It(e.slice(2)),t]}function Oc(e,t){const n=r=>{const a=r.timeStamp||Co();(bc||a>=n.attached-1)&&Pe(Pc(r,n.value),t,5,[r])};return n.value=e,n.attached=_c(),n}function Pc(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const oi=/^on[a-z]/,Cc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?mc(e,r,a):t==="style"?pc(e,n,r):Bn(t)?Gr(t)||Ac(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tc(e,t,r,a))?vc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gc(e,t,r,a))};function Tc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&oi.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oi.test(t)&&ne(n)?!1:t in e}const Ic=le({patchProp:Cc},dc);let si;function Sc(){return si||(si=Yl(Ic))}const Nc=(...e)=>{const t=Sc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Mc(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Mc(e){return ne(e)?document.querySelector(e):e}const Fc="/assets/viajes_precandidatos.ef777ed9.gif",Lc="/assets/gif_inflacion.7bfff75e.gif",Rc="/assets/cromanion_2.5ea5cefa.gif",jc="/assets/Scatter-captura.4a364e36.png",zc="/assets/gif_calculadora.2cb83080.gif",Dc="/assets/gral_paso_diferencia.3a9b4359.png",$c="/assets/debate_presidencial_captura.644387f5.png",Hc="/assets/discursos.d6cbfcde.gif",Uc="/assets/mapa_temperatura.80609977.gif",Bc="/assets/mapa-electoral-generales.b8f3c45e.gif",Wc="/assets/proyecto-calle-1.37a4a32c.png",Yc="/assets/argendata.66ef681d.png";const an=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Kc={name:"ProjectsLN",data(){return{articles:[{title:"Argendata",image:Yc,alt:"argendata_captura",link:"https://argendata.fund.ar/",published:"Fundar",role:["Data visualization"]},{title:"Simulation. This Is How The Covid-19 Can Spread In Public Transport.",image:"https://resizer.glanacion.com/resizer/wsH9qhqEmYUDAbfMZo3pgMNQyM8=/1200x746/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4VT6FVWGRJEMZNGRDOFAWME4GA.gif",alt:"simulacion_particulas_colectivo_gif",link:"https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/",published:"La Nacion",role:["Reporting"]},{title:"Justice, Mauricio Macri, Debt and Abortion: Year by Year, Which Theme was the Most Clapped in Each of the President's Speech in Congress.",image:"https://resizer.glanacion.com/resizer/bgzZwVQheMcpBo7UsqTz3HjbJMU=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PYNUBRJEH5HBTCJEBF3RWG4HXA.jpg",alt:"alberto_fernandez_speech",link:"https://www.lanacion.com.ar/politica/macri-deuda-y-aborto-aplausometro-ano-a-ano-cuanto-y-por-que-aplaudieron-a-alberto-fernandez-en-el-nid01032023/",published:"La Nacion",role:["Data analysis","Reporting"]},{title:"Do you Know How Much Milk and Gasoline Cost? Test your Notion of Prices in Times of Uncontrolled Inflation.",image:Lc,alt:"test_inflacion_captura_home",link:"https://www.lanacion.com.ar/economia/sabes-cuanto-vale-la-leche-y-la-nafta-testea-tu-nocion-de-los-precios-en-tiempos-de-inflacion-nid07092022/",published:"La Nacion",role:["Reporting","Web development"]},{title:"Who Elected Milei? The Economic Analysis of the Libertarian Vote ",image:jc,alt:"graficos_dispersion_milei",link:"https://www.lanacion.com.ar/sociedad/quien-eligio-a-milei-el-analisis-economico-del-voto-libertario-y-el-grafico-revelador-que-implosiono-nid07092023/#/",published:"La Nacion",role:["Data Visualization"]},{title:"How the Covid-19 Vaccines Work",image:"https://resizer.glanacion.com/resizer/1efleqADafaG5DwG7uvgaRMDt6U=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WXIM3KE6QFDTNPNMTLEBTK2BTE.gif",alt:"plataformas_vacunas_covid19_gif",link:"https://www.lanacion.com.ar/sociedad/asi-actuan-vacunas-carrera-coronavirus-nid2406017/",published:"La Nacion",role:["Reporting"]},{title:"Can Javier Milei Win in the First Round? The Feat that he Seeks and that Challenges Electoral Statistics",image:Dc,alt:"dif_general_paso_captura",link:"https://www.lanacion.com.ar/politica/puede-ganar-en-primera-vuelta-la-hazana-que-busca-javier-milei-y-que-desafia-a-las-estadisticas-nid21102023/",published:"La Nacion",role:["Data visualization"]},{title:"The New Political Map: the Results of the 2023 General Elections",image:Bc,alt:"mapa_resultados_en_el_pais_2023",link:"https://www.lanacion.com.ar/politica/elecciones-2023-los-resultados-de-los-comicios-presidenciales-en-todo-el-pais-nid22102023/#/presidente",published:"La Nacion",role:["data reporting"]},{title:"Mayor Map: Winners and Losers in the Districts of the Buenos Aires Province",image:"https://resizer.glanacion.com/resizer/v2/-G7FFCPNQCFBAFN6VMGJZ72O4EY.jpg?auth=f941ef7bd17d0fc74925b07468c7a0bf40ceb391d72339f20fa186a36f3b98d3&width=768&quality=70&smart=false",alt:"mayor-map-image",link:"https://www.lanacion.com.ar/politica/elecciones-2023-el-nuevo-mapa-de-intendentes-bonaerenses-nid22102023/#/intendentes",published:"La Nacion",role:["Reporting"]},{title:"Campaign Log. Thousands of Kilometers, Crossed Strategies and an Abrupt Ending",image:Fc,alt:"viajes_de_precandidatos_en_todo_el_pais",link:"https://www.lanacion.com.ar/politica/elecciones-2023-como-fue-la-campana-de-los-principales-candidatos-para-las-paso-nid12082023/",published:"La Nacion",role:["Web development"]},{title:"First the Moon, then Mars. Half a Century after Apollo XI, United States wants to conquer space again.",image:"https://resizer.glanacion.com/resizer/N82f4Ap-wiyxWgJjUVbVfiVuBIg=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/XOJ3AB4RPVBBTPUNWPMT7S622E.jpg",alt:"artemis_captura_home",link:"https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/",published:"La Nacion",role:["Reporting"]},{title:"Plaza de Mayo in Flames. 24 hours of Anger, Repression and Death that Changed History.",image:"https://resizer.glanacion.com/resizer/2wmHNtkS2PsATDxKmOi_Ox8s2Lk=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4F3ACEW52VBSRMZDEME2YJVHHQ.gif",alt:"plaza_de_mayo_gif",link:"https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/",published:"La Nacion",role:["Reporting"]},{title:"Living in the Streets: What Do people who Don't Have a Bed to Spend the Night Dream About?",image:Wc,alt:"proyecto_calle",link:"https://www.lanacion.com.ar/comunidad/con-que-suenan-las-personas-que-no-tienen-ni-una-cama-donde-pasar-la-noche-nid29062024/#/",published:"La Nacion",role:["web development"]},{title:"Who Won the Presidential Debate? The Evaluation of LA NACION's Reporters on the Candidates' Performance",image:$c,alt:"dif_general_paso_captura",link:"https://www.lanacion.com.ar/politica/quien-gano-el-debate-presidencial-2023-los-aciertos-y-errores-de-los-candidatos-segun-los-columnitas-nid02102023/#/",published:"La Nacion",role:["Web development"]},{title:"From N\xE9stor Kirchner to Javier Milei: Comparison of Presidential Inaugural Speeches",image:Hc,alt:"gif_comparacion_discursos_asuncion",link:"https://www.lanacion.com.ar/politica/focos-frases-y-aplausos-de-nestor-kirchner-a-javier-milei-comparativo-de-discursos-de-asuncion-nid10122023/",published:"La Nacion",role:["Web development"]},{title:"Dengue. This is How the Virus Acts Inside your Body and How it Spreads",image:"https://resizer.glanacion.com/resizer/ZBq-a_kAPECZPeFZmXtKvRg02vA=/375x250/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/IWZGCFVLKNFNJLJDFF7RZA3WDE.jpg",alt:"mosquito",link:"https://www.lanacion.com.ar/sociedad/dengue-viaje-al-interior-de-la-epidemia-asi-actua-el-virus-dentro-de-tu-cuerpo-y-asi-se-propaga-nid11042024/#/",published:"La Nacion",role:["Reporting"]},{title:"Heat Islands: These Are the Corners in Buenos Aires Where the Temperature is Hell",image:Uc,alt:"heat-islands-gif",link:"https://www.lanacion.com.ar/sociedad/islas-de-calor-portenas-tenes-calor-entonces-ni-te-asomes-a-estas-esquinas-portenas-donde-la-nid06022024/#/",published:"La Nacion",role:["Web development"]},{title:"Will There be a Ballottage or Will it be Defined in the First Round? Predict How the Votes will Rearrange in October in the General Election",image:zc,alt:"calculator_gif",link:"https://www.lanacion.com.ar/politica/elecciones-2023-la-calculadora-para-proyectar-como-se-reacomodaran-los-votos-en-la-primera-vuelta-nid26082023/",published:"La Nacion",role:["Reporting"]},{title:"SARS-CoV-2: Day by Day, How the Virus Affect the Body",image:"https://buckets3.glanacion.com/lntools/anexos/fotos/66/18866.svg",alt:"covid19_virus_attack_body_img",link:"https://www.lanacion.com.ar/sociedad/dia-dia-como-actua-virus-organismo-nid2358830/",published:"La Nacion",role:["Reporting"]},{title:"15th Anniversary of Croma\xF1\xF3n Tragedy",image:Rc,alt:"cromanion_sinister_maze_gif",link:"https://especialess3.lanacion.com.ar/19/12/3d-cromanon/",published:"La Nacion",role:["Reporting"]}]}}},qc={class:"projects"},Vc=K("h3",null,"Selected work",-1),Xc={class:"container"},Gc=["href"],Jc=["src","alt"],Zc={class:"texto_project"},Qc={class:"publisher"},ef={class:"rolesContainer"};function tf(e,t,n,r,a,i){return _e(),xe("div",null,[K("section",qc,[Vc,K("div",Xc,[(_e(!0),xe(ve,null,Ar(a.articles,(o,s)=>(_e(),xe("article",{key:s},[K("a",{href:a.articles[s].link,target:"_blank"},[K("figure",null,[K("img",{src:a.articles[s].image,alt:a.articles[s].alt},null,8,Jc)]),K("h4",Zc,st(a.articles[s].title),1),K("h5",Qc,st(a.articles[s].published),1),K("div",ef,[(_e(!0),xe(ve,null,Ar(a.articles[s].role,(l,f)=>(_e(),xe("p",{key:f,class:"roles"},st(l),1))),128))])],8,Gc)]))),128))])])])}const nf=an(Kc,[["render",tf]]);const rf={name:"AboutMe"},af=Ql('<section id="myBio" data-v-4c498f48><p data-v-4c498f48>\u{1F44B} \xA1Hola!</p><p data-v-4c498f48> \u{1F4C8} I am a journalist specialized in Data Visualization and Visual Storytelling based in Buenos Aires, Argentina. </p><p data-v-4c498f48> \u{1F575} I work at the Visual Storytelling and Graphics team in LA NACION, one of the largest national news media outlet in Argentina, where I produce and develop interactive projects. </p><p data-v-4c498f48> \u{1F469}\u200D\u{1F4BB} I am also an Assistant Professor at the Universidad Torcuato Di Tella&#39;s Design School, where I teach introductory coding and data visualization classes. </p><p data-v-4c498f48>\u{1F469} My pronouns are she/her.</p><p data-v-4c498f48> \u{1F4F1} You can <a href="mailto:copellojuana@gmail.com" target="_blank" data-v-4c498f48>email</a> me or find me on <a href="https://twitter.com/copellojuana" target="_blank" data-v-4c498f48>twitter</a> and <a href="https://www.linkedin.com/in/juanacopello" target="_blank" data-v-4c498f48>linkedin</a>. </p></section>',1),of=[af];function sf(e,t,n,r,a,i){return _e(),xe("div",null,of)}const lf=an(rf,[["render",sf],["__scopeId","data-v-4c498f48"]]);const cf={name:"Icons"},ff={class:"socialMedia"},uf={href:"https://twitter.com/copellojuana",target:"_blank"},df={href:"https://www.linkedin.com/in/juanacopello",target:"_blank"},mf={href:"mailto:copellojuana@gmail.com",target:"_blank"};function pf(e,t,n,r,a,i){const o=$t("font-awesome-icon");return _e(),xe("div",null,[K("div",ff,[K("a",uf,[Q(o,{icon:"fa-brands fa-twitter"})]),K("a",df,[Q(o,{icon:"fa-brands fa-linkedin-in"})]),K("a",mf,[Q(o,{icon:"fa-solid fa-envelope"})])])])}const hf=an(cf,[["render",pf],["__scopeId","data-v-3fc214e3"]]);const gf={name:"Awards",data(){return{listAwards:[{year:2023,type:"Silver",organization:"Society for News Design",publicationText:"Presidential Debates in Argentina",publicationUrl:"https://www.lanacion.com.ar/politica/quien-gano-el-debate-presidencial-2023-los-aciertos-y-errores-de-los-candidatos-segun-los-columnitas-nid02102023/#/"},{year:2023,type:"First place",organization:"Grupo de Diarios Am\xE9rica",publicationText:"Rosario, a Drug Feud",publicationUrl:"https://www.lanacion.com.ar/politica/rosario-feudo-narco-el-imperio-criminal-que-se-administra-detras-de-las-rejas-con-complicidad-nid30102022/#/"},{year:2022,type:"Award of Excellence",organization:"Society for News Design",publicationText:"Incriminating Messages. This is How the Attack against Cristina Kirchner was Planned and Carried Out",publicationUrl:"https://www.lanacion.com.ar/politica/mensajes-delatores-asi-se-planifico-y-ejecuto-el-atentado-contra-cristina-kirchner-nid17092022/#/"},{year:2021,type:"First Place",organization:"Sociedad Interamericana de Prensa",publicationText:"Step by Step, The Artemis Mission Plan to Return the Man to the Moon",publicationUrl:"https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/"},{year:2021,type:"Award of Excellence",organization:"Society for News Design",publicationText:"Plaza de Mayo on Fire. How the Five Deaths that Changed Argentina's History Took Place",publicationUrl:"https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/"},{year:2021,type:"Award of Excellence",organization:"Society for News Design",publicationText:"Simulation. This is How the Virus can Spread in Public Transport",publicationUrl:"https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/"},{year:2021,type:"Award of Excellence",organization:"Society for News Design",publicationText:"How the Covid-19 Vaccines Work",publicationUrl:"https://www.lanacion.com.ar/sociedad/asi-actuan-vacunas-carrera-coronavirus-nid2406017/"},{year:2020,type:"Award of Excellence",organization:"Society for News Design",publicationText:"15th Anniversary of Croma\xF1on's Tragedy",publicationUrl:"https://especialess3.lanacion.com.ar/19/12/3d-cromanon/"}]}}},vf={class:"projects"},bf=K("h3",null,"Awards",-1),yf={class:"list-container"},wf=["href"];function _f(e,t,n,r,a,i){return _e(),xe("div",null,[K("section",vf,[bf,K("div",yf,[K("ul",null,[(_e(!0),xe(ve,null,Ar(a.listAwards,(o,s)=>(_e(),xe("li",{key:s},[Sr(st(o.year)+" | ",1),K("span",null,st(o.type),1),Sr(" | "+st(o.organization)+" | ",1),K("a",{class:"awarded-project-url",href:o.publicationUrl,target:"_blank"},st(o.publicationText),9,wf)]))),128))])])])])}const xf=an(gf,[["render",_f]]);const kf={name:"app",components:{ProjectsLN:nf,AboutMe:lf,Icons:hf,Awards:xf}},Af=e=>(sl("data-v-c9ac4610"),e=e(),ll(),e),Ef=Af(()=>K("header",{class:"bio"},[K("h1",null,"Juana Copello"),K("h2",null,"visual journalist & dataviz developer")],-1)),Of={class:"main-container"};function Pf(e,t,n,r,a,i){const o=$t("AboutMe"),s=$t("ProjectsLN"),l=$t("Awards"),f=$t("Icons");return _e(),xe("div",null,[Ef,K("main",Of,[Q(o),Q(s),Q(l)]),K("footer",null,[Q(f)])])}const Cf=an(kf,[["render",Pf],["__scopeId","data-v-c9ac4610"]]);function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Tf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ci(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function If(e,t,n){return t&&ci(e.prototype,t),n&&ci(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ha(e,t){return Nf(e)||Ff(e,t)||To(e,t)||Rf()}function on(e){return Sf(e)||Mf(e)||To(e)||Lf()}function Sf(e){if(Array.isArray(e))return Fr(e)}function Nf(e){if(Array.isArray(e))return e}function Mf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ff(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function To(e,t){if(!!e){if(typeof e=="string")return Fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(e,t)}}function Fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fi=function(){},ga={},Io={},So=null,No={mark:fi,measure:fi};try{typeof window<"u"&&(ga=window),typeof document<"u"&&(Io=document),typeof MutationObserver<"u"&&(So=MutationObserver),typeof performance<"u"&&(No=performance)}catch{}var jf=ga.navigator||{},ui=jf.userAgent,di=ui===void 0?"":ui,Qe=ga,G=Io,mi=So,gn=No;Qe.document;var Be=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",Mo=~di.indexOf("MSIE")||~di.indexOf("Trident/"),vn,bn,yn,wn,_n,De="___FONT_AWESOME___",Lr=16,Fo="fa",Lo="svg-inline--fa",dt="data-fa-i2svg",Rr="data-fa-pseudo-element",zf="data-fa-pseudo-element-pending",va="data-prefix",ba="data-icon",pi="fontawesome-i2svg",Df="async",$f=["HTML","HEAD","STYLE","SCRIPT"],Ro=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",ya=[X,Z];function sn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Qt=sn((vn={},te(vn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(vn,Z,{fa:"solid",fass:"solid","fa-solid":"solid"}),vn)),en=sn((bn={},te(bn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(bn,Z,{solid:"fass"}),bn)),tn=sn((yn={},te(yn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(yn,Z,{fass:"fa-solid"}),yn)),Hf=sn((wn={},te(wn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(wn,Z,{"fa-solid":"fass"}),wn)),Uf=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,jo="fa-layers-text",Bf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wf=sn((_n={},te(_n,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(_n,Z,{900:"fass"}),_n)),zo=[1,2,3,4,5,6,7,8,9,10],Yf=zo.concat([11,12,13,14,15,16,17,18,19,20]),Kf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nn=new Set;Object.keys(en[X]).map(nn.add.bind(nn));Object.keys(en[Z]).map(nn.add.bind(nn));var qf=[].concat(ya,on(nn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat(zo.map(function(e){return"".concat(e,"x")})).concat(Yf.map(function(e){return"w-".concat(e)})),Yt=Qe.FontAwesomeConfig||{};function Vf(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Xf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Gf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gf.forEach(function(e){var t=ha(e,2),n=t[0],r=t[1],a=Xf(Vf(n));a!=null&&(Yt[r]=a)})}var Do={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fo,replacementClass:Lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);var Tt=E(E({},Do),Yt);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var C={};Object.keys(Do).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Tt[e]=n,Kt.forEach(function(r){return r(C)})},get:function(){return Tt[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,Kt.forEach(function(n){return n(C)})},get:function(){return Tt.cssPrefix}});Qe.FontAwesomeConfig=C;var Kt=[];function Jf(e){return Kt.push(e),function(){Kt.splice(Kt.indexOf(e),1)}}var qe=Lr,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zf(e){if(!(!e||!Be)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(t,r),e}}var Qf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var e=12,t="";e-- >0;)t+=Qf[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function wa(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $o(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function eu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat($o(e[n]),'" ')},"").trim()}function er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function _a(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function tu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function nu(e){var t=e.transform,n=e.width,r=n===void 0?Lr:n,a=e.height,i=a===void 0?Lr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Mo?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ru=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ho(){var e=Fo,t=Lo,n=C.cssPrefix,r=C.replacementClass,a=ru;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function mr(){C.autoAddCss&&!hi&&(Zf(Ho()),hi=!0)}var au={mixout:function(){return{dom:{css:Ho,insertCss:mr}}},hooks:function(){return{beforeDOMElementCreation:function(){mr()},beforeI2svg:function(){mr()}}}},$e=Qe||{};$e[De]||($e[De]={});$e[De].styles||($e[De].styles={});$e[De].hooks||($e[De].hooks={});$e[De].shims||($e[De].shims=[]);var Ee=$e[De],Uo=[],iu=function e(){G.removeEventListener("DOMContentLoaded",e),Dn=1,Uo.map(function(t){return t()})},Dn=!1;Be&&(Dn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Dn||G.addEventListener("DOMContentLoaded",iu));function ou(e){!Be||(Dn?setTimeout(e,0):Uo.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?$o(e):"<".concat(t," ").concat(eu(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var su=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?su(n,a):n,l,f,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)f=i[l],d=s(d,t[f],f,t);return d};function lu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function jr(e){var t=lu(e);return t.length===1?t[0].toString(16):null}function cu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function zr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,vi(t)):Ee.styles[e]=E(E({},Ee.styles[e]||{}),i),e==="fas"&&zr("fa",t)}var xn,kn,An,_t=Ee.styles,fu=Ee.shims,uu=(xn={},te(xn,X,Object.values(tn[X])),te(xn,Z,Object.values(tn[Z])),xn),xa=null,Bo={},Wo={},Yo={},Ko={},qo={},du=(kn={},te(kn,X,Object.keys(Qt[X])),te(kn,Z,Object.keys(Qt[Z])),kn);function mu(e){return~qf.indexOf(e)}function pu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!mu(a)?a:null}var Vo=function(){var t=function(i){return pr(_t,function(o,s,l){return o[l]=pr(s,i,{}),o},{})};Bo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Wo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in _t||C.autoFetchSvg,r=pr(fu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Yo=r.names,Ko=r.unicodes,xa=tr(C.styleDefault,{family:C.familyDefault})};Jf(function(e){xa=tr(e.styleDefault,{family:C.familyDefault})});Vo();function ka(e,t){return(Bo[e]||{})[t]}function hu(e,t){return(Wo[e]||{})[t]}function ct(e,t){return(qo[e]||{})[t]}function Xo(e){return Yo[e]||{prefix:null,iconName:null}}function gu(e){var t=Ko[e],n=ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return xa}var Aa=function(){return{prefix:null,iconName:null,rest:[]}};function tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Qt[r][e],i=en[r][e]||en[r][a],o=e in Ee.styles?e:null;return i||o||null}var bi=(An={},te(An,X,Object.keys(tn[X])),te(An,Z,Object.keys(tn[Z])),An);function nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,X,"".concat(C.cssPrefix,"-").concat(X)),te(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),o=null,s=X;(e.includes(i[X])||e.some(function(f){return bi[X].includes(f)}))&&(s=X),(e.includes(i[Z])||e.some(function(f){return bi[Z].includes(f)}))&&(s=Z);var l=e.reduce(function(f,d){var m=pu(C.cssPrefix,d);if(_t[d]?(d=uu[s].includes(d)?Hf[s][d]:d,o=d,f.prefix=d):du[s].indexOf(d)>-1?(o=d,f.prefix=tr(d,{family:s})):m?f.iconName=m:d!==C.replacementClass&&d!==i[X]&&d!==i[Z]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var v=o==="fa"?Xo(f.iconName):{},k=ct(f.prefix,f.iconName);v.prefix&&(o=null),f.iconName=v.iconName||k||f.iconName,f.prefix=v.prefix||f.prefix,f.prefix==="far"&&!_t.far&&_t.fas&&!C.autoFetchSvg&&(f.prefix="fas")}return f},Aa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(_t.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var vu=function(){function e(){Tf(this,e),this.definitions={}}return If(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),zr(s,o[s]);var l=tn[X][s];l&&zr(l,o[s]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,d=f[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),yi=[],xt={},Ot={},bu=Object.keys(Ot);function yu(e,t){var n=t.mixoutsTo;return yi=e,xt={},Object.keys(Ot).forEach(function(r){bu.indexOf(r)===-1&&delete Ot[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function Dr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function $r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(!!t)return t=ct(n,t)||t,gi(Go.definitions,n,t)||gi(Ee.styles,n,t)}var Go=new vu,wu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,mt("noAuto")},_u={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(mt("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,ou(function(){ku({autoReplaceSvgRoot:n}),mt("watch",t)})}},xu={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=tr(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(Uf))){var a=nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},ge={noAuto:wu,config:C,dom:_u,parse:xu,library:Go,findIconDefinition:$r,toHtml:ln},ku=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(Ee.styles).length>0||C.autoFetchSvg)&&Be&&C.autoReplaceSvg&&ge.dom.i2svg({node:r})};function rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Be){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Au(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(_a(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=er(E(E({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Eu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ea(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,L=r.found?r:n,j=L.width,S=L.height,y=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ae){return m.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(S)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/S*16*.0625,"em")}:{};k&&(M.attributes[dt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||rn())},children:[l]}),delete M.attributes.title);var W=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:E(E({},z),m.styles)}),ce=r.found&&n.found?He("generateAbstractMask",W)||{children:[],attributes:{}}:He("generateAbstractIcon",W)||{children:[],attributes:{}},ie=ce.children,We=ce.attributes;return W.children=ie,W.attributes=We,s?Eu(W):Au(W)}function wi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[dt]="");var d=E({},o.styles);_a(a)&&(d.transform=nu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=er(d);m.length>0&&(f.style=m);var v=[];return v.push({tag:"span",attributes:f,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Ou(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=Ee.styles;function Hr(e){var t=e[0],n=e[1],r=e.slice(4),a=ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Pu={found:!1,width:512,height:512};function Cu(e,t){!Ro&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ur(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=Xo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&hr[t]&&hr[t][e]){var o=hr[t][e];return r(Hr(o))}Cu(e,t),r(E(E({},Pu),{},{icon:C.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var _i=function(){},Br=C.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:_i,measure:_i},Ht='FA "6.2.0"',Tu=function(t){return Br.mark("".concat(Ht," ").concat(t," begins")),function(){return Jo(t)}},Jo=function(t){Br.mark("".concat(Ht," ").concat(t," ends")),Br.measure("".concat(Ht," ").concat(t),"".concat(Ht," ").concat(t," begins"),"".concat(Ht," ").concat(t," ends"))},Oa={begin:Tu,end:Jo},In=function(){};function xi(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function Iu(e){var t=e.getAttribute?e.getAttribute(va):null,n=e.getAttribute?e.getAttribute(ba):null;return t&&n}function Su(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function Nu(){if(C.autoReplaceSvg===!0)return Sn.replace;var e=Sn[C.autoReplaceSvg];return e||Sn.replace}function Mu(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function Fu(e){return G.createElement(e)}function Zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Mu:Fu:n;if(typeof e=="string")return G.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Zo(o,{ceFn:r}))}),a}function Lu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Zo(a),n)}),n.getAttribute(dt)===null&&C.keepOriginalSource){var r=G.createComment(Lu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~wa(n).indexOf(C.replacementClass))return Sn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ln(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=o}};function ki(e){e()}function Qo(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=ki;C.mutateApproach===Df&&(r=Qe.requestAnimationFrame||ki),r(function(){var a=Nu(),i=Oa.begin("mutate");e.map(a),i(),n()})}}var Pa=!1;function es(){Pa=!0}function Wr(){Pa=!1}var $n=null;function Ai(e){if(!!mi&&!!C.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,o=i===void 0?In:i,s=e.observeMutationsRoot,l=s===void 0?G:s;$n=new mi(function(f){if(!Pa){var d=et();Mt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&xi(m.target)&&~Kf.indexOf(m.attributeName))if(m.attributeName==="class"&&Iu(m.target)){var v=nr(wa(m.target)),k=v.prefix,L=v.iconName;m.target.setAttribute(va,k||d),L&&m.target.setAttribute(ba,L)}else Su(m.target)&&a(m.target)})}}),Be&&$n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ru(){!$n||$n.disconnect()}function ju(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function zu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=nr(wa(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=hu(a.prefix,e.innerText)||ka(a.prefix,jr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Du(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function $u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Du(e),s=Dr("parseNodeAttributes",{},e),l=t.styleParser?ju(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Hu=Ee.styles;function ts(e){var t=C.autoReplaceSvg==="nest"?Ei(e,{styleParser:!1}):Ei(e);return~t.extra.classes.indexOf(jo)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var tt=new Set;ya.map(function(e){tt.add("fa-".concat(e))});Object.keys(Qt[X]).map(tt.add.bind(tt));Object.keys(Qt[Z]).map(tt.add.bind(tt));tt=on(tt);function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=C.autoFetchSvg?tt:ya.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Hu));i.includes("fa")||i.push("fa");var o=[".".concat(jo,":not([").concat(dt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(dt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Mt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Oa.begin("onTree"),f=s.reduce(function(d,m){try{var v=ts(m);v&&d.push(v)}catch(k){Ro||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(v){Qo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Uu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ts(e).then(function(n){n&&Qo([n],t)})}function Bu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:$r(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Wu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,d=f===void 0?null:f,m=n.title,v=m===void 0?null:m,k=n.titleId,L=k===void 0?null:k,j=n.classes,S=j===void 0?[]:j,y=n.attributes,O=y===void 0?{}:y,M=n.styles,z=M===void 0?{}:M;if(!!t){var W=t.prefix,ce=t.iconName,ie=t.icon;return rr(E({type:"icon"},t),function(){return mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(L||rn()):(O["aria-hidden"]="true",O.focusable="false")),Ea({icons:{main:Hr(ie),mask:l?Hr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:E(E({},Me),a),symbol:o,title:v,maskId:d,titleId:L,extra:{attributes:O,styles:z,classes:S}})})}},Yu={mixout:function(){return{icon:Bu(Wu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oi,n.nodeCallback=Uu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return Oi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,L){Promise.all([Ur(a,s),d.iconName?Ur(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var S=ha(j,2),y=S[0],O=S[1];k([n,Ea({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=er(s);l.length>0&&(a.style=l);var f;return _a(o)&&(f=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return rr({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(on(i)).join(" ")},children:o}]})}}}},qu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return rr({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),Ou({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},Vu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return rr({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),wi({content:n,transform:E(E({},Me),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(on(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Mo){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/f,l=d.height/f}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Xu=new RegExp('"',"ug"),Pi=[1105920,1112319];function Gu(e){var t=e.replace(Xu,""),n=cu(t,0),r=n>=Pi[0]&&n<=Pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:jr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(zf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),o=i.filter(function(ie){return ie.getAttribute(Rr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Bf),f=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?en[v][l[2].toLowerCase()]:Wf[v][f],L=Gu(m),j=L.value,S=L.isSecondary,y=l[0].startsWith("FontAwesome"),O=ka(k,j),M=O;if(y){var z=gu(j);z.iconName&&z.prefix&&(O=z.iconName,k=z.prefix)}if(O&&!S&&(!o||o.getAttribute(va)!==k||o.getAttribute(ba)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var W=$u(),ce=W.extra;ce.attributes[Rr]=t,Ur(O,k).then(function(ie){var We=Ea(E(E({},W),{},{icons:{main:ie,mask:Aa()},prefix:k,iconName:M,extra:ce,watchable:!0})),ae=G.createElement("svg");t==="::before"?e.insertBefore(ae,e.firstChild):e.appendChild(ae),ae.outerHTML=We.map(function(nt){return ln(nt)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ju(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function Zu(e){return e.parentNode!==document.head&&!~$f.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ti(e){if(!!Be)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(Zu).map(Ju),a=Oa.begin("searchPseudoElements");es(),Promise.all(r).then(function(){a(),Wr(),t()}).catch(function(){a(),Wr(),n()})})}var Qu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ti,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;C.searchPseudoElements&&Ti(a)}}},Ii=!1,ed={mixout:function(){return{dom:{unwatch:function(){es(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){Ai(Dr("mutationObserverCallbacks",{}))},noAuto:function(){Ru()},watch:function(n){var r=n.observeMutationsRoot;Ii?Wr():Ai(Dr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},td={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},k.outer),children:[{tag:"g",attributes:E({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),k.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nd(e){return e.tag==="g"?e.children:[e]}var rd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?nr(a.split(" ").map(function(o){return o.trim()})):Aa();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,d=i.icon,m=o.width,v=o.icon,k=tu({transform:l,containerWidth:m,iconWidth:f}),L={tag:"rect",attributes:E(E({},gr),{},{fill:"white"})},j=d.children?{children:d.children.map(Ni)}:{},S={tag:"g",attributes:E({},k.inner),children:[Ni(E({tag:d.tag,attributes:E(E({},d.attributes),k.path)},j))]},y={tag:"g",attributes:E({},k.outer),children:[S]},O="mask-".concat(s||rn()),M="clip-".concat(s||rn()),z={tag:"mask",attributes:E(E({},gr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:nd(v)},z]};return r.push(W,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},gr)}),{children:r,attributes:a}}}},ad={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},id={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},od=[au,Yu,Ku,qu,Vu,Qu,ed,td,rd,ad,id];yu(od,{mixoutsTo:ge});ge.noAuto;var ns=ge.config,sd=ge.library;ge.dom;var Hn=ge.parse;ge.findIconDefinition;ge.toHtml;var ld=ge.icon;ge.layer;var cd=ge.text;ge.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ud(e,t){if(e==null)return{};var n=fd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Yr(e){return dd(e)||md(e)||pd(e)||hd()}function dd(e){if(Array.isArray(e))return Kr(e)}function md(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pd(e,t){if(!!e){if(typeof e=="string")return Kr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(e,t)}}function Kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rs={exports:{}};(function(e){(function(t){var n=function(y,O,M){if(!f(O)||m(O)||v(O)||k(O)||l(O))return O;var z,W=0,ce=0;if(d(O))for(z=[],ce=O.length;W<ce;W++)z.push(n(y,O[W],M));else{z={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(z[y(ie,M)]=n(y,O[ie],M))}return z},r=function(y,O){O=O||{};var M=O.separator||"_",z=O.split||/(?=[A-Z])/;return y.split(z).join(M)},a=function(y){return L(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},L=function(y){return y=y-0,y===y},j=function(y,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?y:function(z,W){return M(z,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(j(a,O),y)},decamelizeKeys:function(y,O){return n(j(o,O),y,O)},pascalizeKeys:function(y,O){return n(j(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(gd)})(rs);var vd=rs.exports,bd=["class","style"];function yd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function wd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ca(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var d=e.attributes[f];switch(f){case"class":l.class=wd(d);break;case"style":l.style=yd(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ud(n,bd);return Po(e.tag,ke(ke(ke({},t),{},{class:a.class,style:ke(ke({},a.style),o)},a.attrs),s),r)}var as=!1;try{as=!0}catch{}function _d(){if(!as&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function xd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e&&Un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hn.icon)return Hn.icon(e);if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var kd=fa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return Fi(t.icon)}),i=be(function(){return qt("classes",xd(t))}),o=be(function(){return qt("transform",typeof t.transform=="string"?Hn.transform(t.transform):t.transform)}),s=be(function(){return qt("mask",Fi(t.mask))}),l=be(function(){return ld(a.value,ke(ke(ke(ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});On(l,function(d){if(!d)return _d("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=be(function(){return l.value?Ca(l.value.abstract[0],{},r):null});return function(){return f.value}}});fa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ns.familyPrefix,i=be(function(){return["".concat(a,"-layers")].concat(Yr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Po("div",{class:i.value},r.default?r.default():[])}}});fa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ns.familyPrefix,i=be(function(){return qt("classes",[].concat(Yr(t.counter?["".concat(a,"-layers-counter")]:[]),Yr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=be(function(){return qt("transform",typeof t.transform=="string"?Hn.transform(t.transform):t.transform)}),s=be(function(){var f=cd(t.value.toString(),ke(ke({},o.value),i.value)),d=f.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=be(function(){return Ca(s.value,{},r)});return function(){return l.value}}});var Ad={prefix:"fab",iconName:"github-alt",icon:[480,512,[],"f113","M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"]},Ed={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Od={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Pd={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};sd.add(Od,Ad,Ed,Pd);Nc(Cf).component("font-awesome-icon",kd).mount("#app");
