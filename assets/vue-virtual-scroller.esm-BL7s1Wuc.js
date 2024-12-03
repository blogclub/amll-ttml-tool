import{aE as he,aF as de,C as Y,l as S,G as V,aG as ue,h as fe,q as me,aH as pe,E as G,af as ve,ag as ye,n as A,aI as w,V as X,H as I,F as be,_ as ge,aJ as J,m as Q,aK as ze,ar as $e,a3 as Z,b as _e,aL as Se,aM as we}from"./naive-ui-B1s3zDcz.js";function Oe(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var i=e.indexOf("Trident/");if(i>0){var s=e.indexOf("rv:");return parseInt(e.substring(s+3,e.indexOf(".",s)),10)}var r=e.indexOf("Edge/");return r>0?parseInt(e.substring(r+5,e.indexOf(".",r)),10):-1}let M;function H(){H.init||(H.init=!0,M=Oe()!==-1)}var U={name:"ResizeObserver",props:{emitOnMount:{type:Boolean,default:!1},ignoreWidth:{type:Boolean,default:!1},ignoreHeight:{type:Boolean,default:!1}},emits:["notify"],mounted(){H(),Y(()=>{this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitOnMount&&this.emitSize()});const e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",M&&this.$el.appendChild(e),e.data="about:blank",M||this.$el.appendChild(e)},beforeUnmount(){this.removeResizeHandlers()},methods:{compareAndNotify(){(!this.ignoreWidth&&this._w!==this.$el.offsetWidth||!this.ignoreHeight&&this._h!==this.$el.offsetHeight)&&(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.emitSize())},emitSize(){this.$emit("notify",{width:this._w,height:this._h})},addResizeHandlers(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers(){this._resizeObject&&this._resizeObject.onload&&(!M&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),this.$el.removeChild(this._resizeObject),this._resizeObject.onload=null,this._resizeObject=null)}}};const Ie=ue();he("data-v-b329ee4c");const Te={class:"resize-observer",tabindex:"-1"};de();const xe=Ie((e,t,i,s,r,l)=>(S(),V("div",Te)));U.render=xe,U.__scopeId="data-v-b329ee4c",U.__file="src/components/ResizeObserver.vue";function P(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?P=function(t){return typeof t}:P=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}function Re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ke(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function De(e,t,i){return t&&ke(e.prototype,t),e}function ee(e){return Ve(e)||Ae(e)||Me(e)||Ue()}function Ve(e){if(Array.isArray(e))return F(e)}function Ae(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function Me(e,t){if(e){if(typeof e=="string")return F(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return F(e,t)}}function F(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function Ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e){var t;return typeof e=="function"?t={callback:e}:t=e,t}function He(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,r,l,n=function(o){for(var a=arguments.length,d=new Array(a>1?a-1:0),p=1;p<a;p++)d[p-1]=arguments[p];if(l=d,!(s&&o===r)){var $=i.leading;typeof $=="function"&&($=$(o,r)),(!s||o!==r)&&$&&e.apply(void 0,[o].concat(ee(l))),r=o,clearTimeout(s),s=setTimeout(function(){e.apply(void 0,[o].concat(ee(l))),s=0},t)}};return n._clear=function(){clearTimeout(s),s=null},n}function te(e,t){if(e===t)return!0;if(P(e)==="object"){for(var i in e)if(!te(e[i],t[i]))return!1;return!0}return!1}var Fe=function(){function e(t,i,s){Re(this,e),this.el=t,this.observer=null,this.frozen=!1,this.createObserver(i,s)}return De(e,[{key:"createObserver",value:function(t,i){var s=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=Pe(t),this.callback=function(n,o){s.options.callback(n,o),n&&s.options.once&&(s.frozen=!0,s.destroyObserver())},this.callback&&this.options.throttle){var r=this.options.throttleOptions||{},l=r.leading;this.callback=He(this.callback,this.options.throttle,{leading:function(n){return l==="both"||l==="visible"&&n||l==="hidden"&&!n}})}this.oldResult=void 0,this.observer=new IntersectionObserver(function(n){var o=n[0];if(n.length>1){var a=n.find(function(p){return p.isIntersecting});a&&(o=a)}if(s.callback){var d=o.isIntersecting&&o.intersectionRatio>=s.threshold;if(d===s.oldResult)return;s.oldResult=d,s.callback(d,o)}},this.options.intersection),Y(function(){s.observer&&s.observer.observe(s.el)})}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&typeof this.options.intersection.threshold=="number"?this.options.intersection.threshold:0}}]),e}();function ie(e,t,i){var s=t.value;if(s)if(typeof IntersectionObserver>"u")console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var r=new Fe(e,s,i);e._vue_visibilityState=r}}function Ee(e,t,i){var s=t.value,r=t.oldValue;if(!te(s,r)){var l=e._vue_visibilityState;if(!s){se(e);return}l?l.createObserver(s,i):ie(e,{value:s},i)}}function se(e){var t=e._vue_visibilityState;t&&(t.destroyObserver(),delete e._vue_visibilityState)}var Le={beforeMount:ie,updated:Ee,unmounted:se};function Ne(e){return{all:e=e||new Map,on:function(t,i){var s=e.get(t);s&&s.push(i)||e.set(t,[i])},off:function(t,i){var s=e.get(t);s&&s.splice(s.indexOf(i)>>>0,1)},emit:function(t,i){(e.get(t)||[]).slice().map(function(s){s(i)}),(e.get("*")||[]).slice().map(function(s){s(t,i)})}}}var je={itemsLimit:1e3},Be=/(auto|scroll)/;function re(e,t){return e.parentNode===null?t:re(e.parentNode,t.concat([e]))}var E=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},Ce=function(e){return E(e,"overflow")+E(e,"overflow-y")+E(e,"overflow-x")},We=function(e){return Be.test(Ce(e))};function ne(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var t=re(e.parentNode,[]),i=0;i<t.length;i+=1)if(We(t[i]))return t[i];return document.scrollingElement||document.documentElement}}function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}var oe={items:{type:Array,required:!0},keyField:{type:String,default:"id"},direction:{type:String,default:"vertical",validator:function(e){return["vertical","horizontal"].includes(e)}},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"}};function le(){return this.items.length&&L(this.items[0])!=="object"}var N=!1;if(typeof window<"u"){N=!1;try{var qe=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,qe)}catch{}}let Ke=0;var j={name:"RecycleScroller",components:{ResizeObserver:U},directives:{ObserveVisibility:Le},props:{...oe,itemSize:{type:Number,default:null},gridItems:{type:Number,default:void 0},itemSecondarySize:{type:Number,default:void 0},minItemSize:{type:[Number,String],default:null},sizeField:{type:String,default:"size"},typeField:{type:String,default:"type"},buffer:{type:Number,default:200},pageMode:{type:Boolean,default:!1},prerender:{type:Number,default:0},emitUpdate:{type:Boolean,default:!1},updateInterval:{type:Number,default:0},skipHover:{type:Boolean,default:!1},listTag:{type:String,default:"div"},itemTag:{type:String,default:"div"},listClass:{type:[String,Object,Array],default:""},itemClass:{type:[String,Object,Array],default:""}},emits:["resize","visible","hidden","update","scroll-start","scroll-end"],data(){return{pool:[],totalSize:0,ready:!1,hoverKey:null}},computed:{sizes(){if(this.itemSize===null){const e={"-1":{accumulator:0}},t=this.items,i=this.sizeField,s=this.minItemSize;let r=1e4,l=0,n;for(let o=0,a=t.length;o<a;o++)n=t[o][i]||s,n<r&&(r=n),l+=n,e[o]={accumulator:l,size:n};return this.$_computedMinItemSize=r,e}return[]},simpleArray:le,itemIndexByKey(){const{keyField:e,items:t}=this,i={};for(let s=0,r=t.length;s<r;s++)i[t[s][e]]=s;return i}},watch:{items(){this.updateVisibleItems(!0)},pageMode(){this.applyPageMode(),this.updateVisibleItems(!1)},sizes:{handler(){this.updateVisibleItems(!1)},deep:!0},gridItems(){this.updateVisibleItems(!0)},itemSecondarySize(){this.updateVisibleItems(!0)}},created(){this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1,this.$_lastUpdateScrollPosition=0,this.prerender&&(this.$_prerender=!0,this.updateVisibleItems(!1)),this.gridItems&&!this.itemSize&&console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems")},mounted(){this.applyPageMode(),this.$nextTick(()=>{this.$_prerender=!1,this.updateVisibleItems(!0),this.ready=!0})},activated(){const e=this.$_lastUpdateScrollPosition;typeof e=="number"&&this.$nextTick(()=>{this.scrollToPosition(e)})},beforeUnmount(){this.removeListeners()},methods:{addView(e,t,i,s,r){const l=me({id:Ke++,index:t,used:!0,key:s,type:r}),n=pe({item:i,position:0,nr:l});return e.push(n),n},unuseView(e,t=!1){const i=this.$_unusedViews,s=e.nr.type;let r=i.get(s);r||(r=[],i.set(s,r)),r.push(e),t||(e.nr.used=!1,e.position=-9999)},handleResize(){this.$emit("resize"),this.ready&&this.updateVisibleItems(!1)},handleScroll(e){if(!this.$_scrollDirty){if(this.$_scrollDirty=!0,this.$_updateTimeout)return;const t=()=>requestAnimationFrame(()=>{this.$_scrollDirty=!1;const{continuous:i}=this.updateVisibleItems(!1,!0);i||(clearTimeout(this.$_refreshTimout),this.$_refreshTimout=setTimeout(this.handleScroll,this.updateInterval+100))});t(),this.updateInterval&&(this.$_updateTimeout=setTimeout(()=>{this.$_updateTimeout=0,this.$_scrollDirty&&t()},this.updateInterval))}},handleVisibilityChange(e,t){this.ready&&(e||t.boundingClientRect.width!==0||t.boundingClientRect.height!==0?(this.$emit("visible"),requestAnimationFrame(()=>{this.updateVisibleItems(!1)})):this.$emit("hidden"))},updateVisibleItems(e,t=!1){const i=this.itemSize,s=this.gridItems||1,r=this.itemSecondarySize||i,l=this.$_computedMinItemSize,n=this.typeField,o=this.simpleArray?null:this.keyField,a=this.items,d=a.length,p=this.sizes,$=this.$_views,C=this.$_unusedViews,R=this.pool,ce=this.itemIndexByKey;let v,u,T,g,z;if(!d)v=u=g=z=T=0;else if(this.$_prerender)v=g=0,u=z=Math.min(this.prerender,a.length),T=null;else{const c=this.getScroll();if(t){let m=c.start-this.$_lastUpdateScrollPosition;if(m<0&&(m=-m),i===null&&m<l||m<i)return{continuous:!0}}this.$_lastUpdateScrollPosition=c.start;const y=this.buffer;c.start-=y,c.end+=y;let f=0;if(this.$refs.before&&(f=this.$refs.before.scrollHeight,c.start-=f),this.$refs.after){const m=this.$refs.after.scrollHeight;c.end+=m}if(i===null){let m,x=0,q=d-1,b=~~(d/2),K;do K=b,m=p[b].accumulator,m<c.start?x=b:b<d-1&&p[b+1].accumulator>c.start&&(q=b),b=~~((x+q)/2);while(b!==K);for(b<0&&(b=0),v=b,T=p[d-1].accumulator,u=b;u<d&&p[u].accumulator<c.end;u++);for(u===-1?u=a.length-1:(u++,u>d&&(u=d)),g=v;g<d&&f+p[g].accumulator<c.start;g++);for(z=g;z<d&&f+p[z].accumulator<c.end;z++);}else{v=~~(c.start/i*s);const m=v%s;v-=m,u=Math.ceil(c.end/i*s),g=Math.max(0,Math.floor((c.start-f)/i*s)),z=Math.floor((c.end-f)/i*s),v<0&&(v=0),u>d&&(u=d),g<0&&(g=0),z>d&&(z=d),T=Math.ceil(d/s)*i}}u-v>je.itemsLimit&&this.itemsLimitError(),this.totalSize=T;let h;const k=v<=this.$_endIndex&&u>=this.$_startIndex;if(k)for(let c=0,y=R.length;c<y;c++)h=R[c],h.nr.used&&(e&&(h.nr.index=ce[h.item[o]]),(h.nr.index==null||h.nr.index<v||h.nr.index>=u)&&this.unuseView(h));const W=k?null:new Map;let O,_,D;for(let c=v;c<u;c++){O=a[c];const y=o?O[o]:O;if(y==null)throw new Error(`Key is ${y} on item (keyField is '${o}')`);if(h=$.get(y),!i&&!p[c].size){h&&this.unuseView(h);continue}_=O[n];let f=C.get(_),m=!1;if(!h)k?f&&f.length?h=f.pop():h=this.addView(R,c,O,y,_):(D=W.get(_)||0,(!f||D>=f.length)&&(h=this.addView(R,c,O,y,_),this.unuseView(h,!0),f=C.get(_)),h=f[D],W.set(_,D+1)),$.delete(h.nr.key),h.nr.used=!0,h.nr.index=c,h.nr.key=y,h.nr.type=_,$.set(y,h),m=!0;else if(!h.nr.used&&(h.nr.used=!0,m=!0,f)){const x=f.indexOf(h);x!==-1&&f.splice(x,1)}h.item=O,m&&(c===a.length-1&&this.$emit("scroll-end"),c===0&&this.$emit("scroll-start")),i===null?(h.position=p[c-1].accumulator,h.offset=0):(h.position=Math.floor(c/s)*i,h.offset=c%s*r)}return this.$_startIndex=v,this.$_endIndex=u,this.emitUpdate&&this.$emit("update",v,u,g,z),clearTimeout(this.$_sortTimer),this.$_sortTimer=setTimeout(this.sortViews,this.updateInterval+300),{continuous:k}},getListenerTarget(){let e=ne(this.$el);return window.document&&(e===window.document.documentElement||e===window.document.body)&&(e=window),e},getScroll(){const{$el:e,direction:t}=this,i=t==="vertical";let s;if(this.pageMode){const r=e.getBoundingClientRect(),l=i?r.height:r.width;let n=-(i?r.top:r.left),o=i?window.innerHeight:window.innerWidth;n<0&&(o+=n,n=0),n+o>l&&(o=l-n),s={start:n,end:n+o}}else i?s={start:e.scrollTop,end:e.scrollTop+e.clientHeight}:s={start:e.scrollLeft,end:e.scrollLeft+e.clientWidth};return s},applyPageMode(){this.pageMode?this.addListeners():this.removeListeners()},addListeners(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,N?{passive:!0}:!1),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners(){this.listenerTarget&&(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem(e){let t;const i=this.gridItems||1;this.itemSize===null?t=e>0?this.sizes[e-1].accumulator:0:t=Math.floor(e/i)*this.itemSize,this.scrollToPosition(t)},scrollToPosition(e){const t=this.direction==="vertical"?{scroll:"scrollTop",start:"top"}:{scroll:"scrollLeft",start:"left"};let i,s,r;if(this.pageMode){const l=ne(this.$el),n=l.tagName==="HTML"?0:l[t.scroll],o=l.getBoundingClientRect(),a=this.$el.getBoundingClientRect()[t.start]-o[t.start];i=l,s=t.scroll,r=e+n+a}else i=this.$el,s=t.scroll,r=e;i[s]=r},itemsLimitError(){throw setTimeout(()=>{console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",this.$el),console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")}),new Error("Rendered items limit reached")},sortViews(){this.pool.sort((e,t)=>e.nr.index-t.nr.index)}}};const Ye={key:0,ref:"before",class:"vue-recycle-scroller__slot"},Ge={key:1,ref:"after",class:"vue-recycle-scroller__slot"};function Xe(e,t,i,s,r,l){const n=G("ResizeObserver"),o=ve("observe-visibility");return ye((S(),A("div",{class:Z(["vue-recycle-scroller",{ready:r.ready,"page-mode":i.pageMode,[`direction-${e.direction}`]:!0}]),onScrollPassive:t[0]||(t[0]=(...a)=>l.handleScroll&&l.handleScroll(...a))},[e.$slots.before?(S(),A("div",Ye,[w(e.$slots,"before")],512)):X("v-if",!0),(S(),V(J(i.listTag),{ref:"wrapper",style:$e({[e.direction==="vertical"?"minHeight":"minWidth"]:r.totalSize+"px"}),class:Z(["vue-recycle-scroller__item-wrapper",i.listClass])},{default:I(()=>[(S(!0),A(be,null,ge(r.pool,a=>(S(),V(J(i.itemTag),Q({key:a.nr.id,style:r.ready?{transform:`translate${e.direction==="vertical"?"Y":"X"}(${a.position}px) translate${e.direction==="vertical"?"X":"Y"}(${a.offset}px)`,width:i.gridItems?`${e.direction==="vertical"&&i.itemSecondarySize||i.itemSize}px`:void 0,height:i.gridItems?`${e.direction==="horizontal"&&i.itemSecondarySize||i.itemSize}px`:void 0}:null,class:["vue-recycle-scroller__item-view",[i.itemClass,{hover:!i.skipHover&&r.hoverKey===a.nr.key}]]},ze(i.skipHover?{}:{mouseenter:()=>{r.hoverKey=a.nr.key},mouseleave:()=>{r.hoverKey=null}})),{default:I(()=>[w(e.$slots,"default",{item:a.item,index:a.nr.index,active:a.nr.used})]),_:2},1040,["style","class"]))),128)),w(e.$slots,"empty")]),_:3},8,["style","class"])),e.$slots.after?(S(),A("div",Ge,[w(e.$slots,"after")],512)):X("v-if",!0),_e(n,{onNotify:l.handleResize},null,8,["onNotify"])],34)),[[o,l.handleVisibilityChange]])}j.render=Xe,j.__file="src/components/RecycleScroller.vue";var B={name:"DynamicScroller",components:{RecycleScroller:j},provide(){return typeof ResizeObserver<"u"&&(this.$_resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{if(Array.isArray(e)){for(const t of e)if(t.target&&t.target.$_vs_onResize){let i,s;if(t.borderBoxSize){const r=t.borderBoxSize[0];i=r.inlineSize,s=r.blockSize}else i=t.contentRect.width,s=t.contentRect.height;t.target.$_vs_onResize(t.target.$_vs_id,i,s)}}})})),{vscrollData:this.vscrollData,vscrollParent:this,vscrollResizeObserver:this.$_resizeObserver}},inheritAttrs:!1,props:{...oe,minItemSize:{type:[Number,String],required:!0}},emits:["resize","visible"],data(){return{vscrollData:{active:!0,sizes:{},keyField:this.keyField,simpleArray:!1}}},computed:{simpleArray:le,itemsWithSize(){const e=[],{items:t,keyField:i,simpleArray:s}=this,r=this.vscrollData.sizes,l=t.length;for(let n=0;n<l;n++){const o=t[n],a=s?n:o[i];let d=r[a];typeof d>"u"&&!this.$_undefinedMap[a]&&(d=0),e.push({item:o,id:a,size:d})}return e}},watch:{items(){this.forceUpdate()},simpleArray:{handler(e){this.vscrollData.simpleArray=e},immediate:!0},direction(e){this.forceUpdate(!0)},itemsWithSize(e,t){const i=this.$el.scrollTop;let s=0,r=0;const l=Math.min(e.length,t.length);for(let o=0;o<l&&!(s>=i);o++)s+=t[o].size||this.minItemSize,r+=e[o].size||this.minItemSize;const n=r-s;n!==0&&(this.$el.scrollTop+=n)}},beforeCreate(){this.$_updates=[],this.$_undefinedSizes=0,this.$_undefinedMap={},this.$_events=Ne()},activated(){this.vscrollData.active=!0},deactivated(){this.vscrollData.active=!1},unmounted(){this.$_events.all.clear()},methods:{onScrollerResize(){this.$refs.scroller&&this.forceUpdate(),this.$emit("resize")},onScrollerVisible(){this.$_events.emit("vscroll:update",{force:!1}),this.$emit("visible")},forceUpdate(e=!1){(e||this.simpleArray)&&(this.vscrollData.sizes={}),this.$_events.emit("vscroll:update",{force:!0})},scrollToItem(e){const t=this.$refs.scroller;t&&t.scrollToItem(e)},getItemSize(e,t=void 0){const i=this.simpleArray?t??this.items.indexOf(e):e[this.keyField];return this.vscrollData.sizes[i]||0},scrollToBottom(){if(this.$_scrollingToBottom)return;this.$_scrollingToBottom=!0;const e=this.$el;this.$nextTick(()=>{e.scrollTop=e.scrollHeight+5e3;const t=()=>{e.scrollTop=e.scrollHeight+5e3,requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight+5e3,this.$_undefinedSizes===0?this.$_scrollingToBottom=!1:requestAnimationFrame(t)})};requestAnimationFrame(t)})}}};function Je(e,t,i,s,r,l){const n=G("RecycleScroller");return S(),V(n,Q({ref:"scroller",items:l.itemsWithSize,"min-item-size":i.minItemSize,direction:e.direction,"key-field":"id","list-tag":e.listTag,"item-tag":e.itemTag},e.$attrs,{onResize:l.onScrollerResize,onVisible:l.onScrollerVisible}),{default:I(({item:o,index:a,active:d})=>[w(e.$slots,"default",Se(we({item:o.item,index:a,active:d,itemWithSize:o})))]),before:I(()=>[w(e.$slots,"before")]),after:I(()=>[w(e.$slots,"after")]),empty:I(()=>[w(e.$slots,"empty")]),_:3},16,["items","min-item-size","direction","list-tag","item-tag","onResize","onVisible"])}B.render=Je,B.__file="src/components/DynamicScroller.vue";var ae={name:"DynamicScrollerItem",inject:["vscrollData","vscrollParent","vscrollResizeObserver"],props:{item:{required:!0},watchData:{type:Boolean,default:!1},active:{type:Boolean,required:!0},index:{type:Number,default:void 0},sizeDependencies:{type:[Array,Object],default:null},emitResize:{type:Boolean,default:!1},tag:{type:String,default:"div"}},emits:["resize"],computed:{id(){if(this.vscrollData.simpleArray)return this.index;if(this.vscrollData.keyField in this.item)return this.item[this.vscrollData.keyField];throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`)},size(){return this.vscrollData.sizes[this.id]||0},finalActive(){return this.active&&this.vscrollData.active}},watch:{watchData:"updateWatchData",id(e,t){if(this.$el.$_vs_id=this.id,this.size||this.onDataUpdate(),this.$_sizeObserved){const i=this.vscrollData.sizes[t],s=this.vscrollData.sizes[e];i!=null&&i!==s&&this.applySize(i)}},finalActive(e){this.size||(e?this.vscrollParent.$_undefinedMap[this.id]||(this.vscrollParent.$_undefinedSizes++,this.vscrollParent.$_undefinedMap[this.id]=!0):this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=!1)),this.vscrollResizeObserver?e?this.observeSize():this.unobserveSize():e&&this.$_pendingVScrollUpdate===this.id&&this.updateSize()}},created(){if(!this.$isServer&&(this.$_forceNextVScrollUpdate=null,this.updateWatchData(),!this.vscrollResizeObserver)){for(const e in this.sizeDependencies)this.$watch(()=>this.sizeDependencies[e],this.onDataUpdate);this.vscrollParent.$_events.on("vscroll:update",this.onVscrollUpdate)}},mounted(){this.finalActive&&(this.updateSize(),this.observeSize())},beforeUnmount(){this.vscrollParent.$_events.off("vscroll:update",this.onVscrollUpdate),this.unobserveSize()},methods:{updateSize(){this.finalActive?this.$_pendingSizeUpdate!==this.id&&(this.$_pendingSizeUpdate=this.id,this.$_forceNextVScrollUpdate=null,this.$_pendingVScrollUpdate=null,this.computeSize(this.id)):this.$_forceNextVScrollUpdate=this.id},updateWatchData(){this.watchData&&!this.vscrollResizeObserver?this.$_watchData=this.$watch("item",()=>{this.onDataUpdate()},{deep:!0}):this.$_watchData&&(this.$_watchData(),this.$_watchData=null)},onVscrollUpdate({force:e}){!this.finalActive&&e&&(this.$_pendingVScrollUpdate=this.id),(this.$_forceNextVScrollUpdate===this.id||e||!this.size)&&this.updateSize()},onDataUpdate(){this.updateSize()},computeSize(e){this.$nextTick(()=>{if(this.id===e){const t=this.$el.offsetWidth,i=this.$el.offsetHeight;this.applyWidthHeight(t,i)}this.$_pendingSizeUpdate=null})},applyWidthHeight(e,t){const i=~~(this.vscrollParent.direction==="vertical"?t:e);i&&this.size!==i&&this.applySize(i)},applySize(e){this.vscrollParent.$_undefinedMap[this.id]&&(this.vscrollParent.$_undefinedSizes--,this.vscrollParent.$_undefinedMap[this.id]=void 0),this.vscrollData.sizes[this.id]=e,this.emitResize&&this.$emit("resize",this.id)},observeSize(){this.vscrollResizeObserver&&(this.$_sizeObserved||(this.vscrollResizeObserver.observe(this.$el),this.$el.$_vs_id=this.id,this.$el.$_vs_onResize=this.onResize,this.$_sizeObserved=!0))},unobserveSize(){this.vscrollResizeObserver&&this.$_sizeObserved&&(this.vscrollResizeObserver.unobserve(this.$el),this.$el.$_vs_onResize=void 0,this.$_sizeObserved=!1)},onResize(e,t,i){this.id===e&&this.applyWidthHeight(t,i)}},render(){return fe(this.tag,this.$slots.default())}};ae.__file="src/components/DynamicScrollerItem.vue";export{B as a,ae as s};
