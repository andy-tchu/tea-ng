"use strict";(self.webpackChunktea_ng=self.webpackChunktea_ng||[]).push([[827],{7827:(Yr,Wt,y)=>{y.r(Wt),y.d(Wt,{MainModule:()=>jr});var T=y(6895),pt=y(9371),o=y(8256),oe=y(9751),Jt=y(515),gt=y(9646),B=y(7579),De=y(8421),Yt=y(5577),gi=y(1144),se=y(576),fi=y(3268);const hi=["addListener","removeListener"],_i=["addEventListener","removeEventListener"],mi=["on","off"];function I(t,n,e,i){if((0,se.m)(e)&&(i=e,e=void 0),i)return I(t,n,e).pipe((0,fi.Z)(i));const[a,s]=function yi(t){return(0,se.m)(t.addEventListener)&&(0,se.m)(t.removeEventListener)}(t)?_i.map(r=>l=>t[r](n,l,e)):function bi(t){return(0,se.m)(t.addListener)&&(0,se.m)(t.removeListener)}(t)?hi.map(zt(t,n)):function vi(t){return(0,se.m)(t.on)&&(0,se.m)(t.off)}(t)?mi.map(zt(t,n)):[];if(!a&&(0,gi.z)(t))return(0,Yt.z)(r=>I(r,n,e))((0,De.Xf)(t));if(!a)throw new TypeError("Invalid event target");return new oe.y(r=>{const l=(...u)=>r.next(1<u.length?u:u[0]);return a(l),()=>s(l)})}function zt(t,n){return e=>i=>t[e](n,i)}var Ni=y(727);class Di extends Ni.w0{constructor(n,e){super()}schedule(n,e=0){return this}}const We={setInterval(t,n,...e){const{delegate:i}=We;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){const{delegate:n}=We;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Ti=y(8737);const Ut={now:()=>(Ut.delegate||Date).now(),delegate:void 0};class ke{constructor(n,e=ke.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}}ke.now=Ut.now;const Oi=new class Ci extends ke{constructor(n,e=ke.now){super(n,e),this.actions=[],this._active=!1}flush(n){const{actions:e}=this;if(this._active)return void e.push(n);let i;this._active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}}(class wi extends Di{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;const a=this.id,s=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(s,a,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(s,this.id,e),this}requestAsyncId(n,e,i=0){return We.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&We.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let a,i=!1;try{this.work(n)}catch(s){i=!0,a=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,Ti.P)(i,this),null!=n&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}});var Si=y(3532);const{isArray:Mi}=Array;function qt(t){return 1===t.length&&Mi(t[0])?t[0]:t}var re=y(5403);y(1135),y(9841);var Je=y(5032);new oe.y(Je.Z);var en=y(3269);function Ye(...t){const n=(0,en.jO)(t),e=qt(t);return e.length?new oe.y(i=>{let a=e.map(()=>[]),s=e.map(()=>!1);i.add(()=>{a=s=null});for(let r=0;!i.closed&&r<e.length;r++)(0,De.Xf)(e[r]).subscribe((0,re.x)(i,l=>{if(a[r].push(l),a.every(u=>u.length)){const u=a.map(c=>c.shift());i.next(n?n(...u):u),a.some((c,d)=>!c.length&&s[d])&&i.complete()}},()=>{s[r]=!0,!a[r].length&&i.complete()}));return()=>{a=s=null}}):Jt.E}var tn=y(7272),ze=y(4482);function M(t){return(0,ze.e)((n,e)=>{(0,De.Xf)(t).subscribe((0,re.x)(e,()=>e.complete(),Je.Z)),!e.closed&&n.subscribe(e)})}var ue=y(9300),V=y(5698),te=y(4004),nn=(y(8675),y(4671)),an=y(3900),on=y(8505);function mt(...t){const n=(0,en.jO)(t);return(0,ze.e)((e,i)=>{const a=t.length,s=new Array(a);let r=t.map(()=>!1),l=!1;for(let u=0;u<a;u++)(0,De.Xf)(t[u]).subscribe((0,re.x)(i,c=>{s[u]=c,!l&&!r[u]&&(r[u]=!0,(l=r.every(nn.y))&&(r=null))},Je.Z));e.subscribe((0,re.x)(i,u=>{if(l){const c=[u,...s];i.next(n?n(...c):c)}}))})}y(9718),y(433),Math,Math,Math;const Ua=["*"],go=["dialog"];function Mt(t){return"string"==typeof t}function pe(t){return null!=t}function Se(t){return(t||document.body).getBoundingClientRect()}const wn={animation:!0,transitionTimerDelayMs:5},rs=()=>{},{transitionTimerDelayMs:ls}=wn,Be=new Map,P=(t,n,e,i)=>{let a=i.context||{};const s=Be.get(n);if(s)switch(i.runningTransition){case"continue":return Jt.E;case"stop":t.run(()=>s.transition$.complete()),a=Object.assign(s.context,a),Be.delete(n)}const r=e(n,i.animation,a)||rs;if(!i.animation||"none"===window.getComputedStyle(n).transitionProperty)return t.run(()=>r()),(0,gt.of)(void 0).pipe(function os(t){return n=>new oe.y(e=>n.subscribe({next:r=>t.run(()=>e.next(r)),error:r=>t.run(()=>e.error(r)),complete:()=>t.run(()=>e.complete())}))}(t));const l=new B.x,u=new B.x,c=l.pipe(function xi(...t){return n=>(0,tn.z)(n,(0,gt.of)(...t))}(!0));Be.set(n,{transition$:l,complete:()=>{u.next(),u.complete()},context:a});const d=function ss(t){const{transitionDelay:n,transitionDuration:e}=window.getComputedStyle(t);return 1e3*(parseFloat(n)+parseFloat(e))}(n);return t.runOutsideAngular(()=>{const g=I(n,"transitionend").pipe(M(c),(0,ue.h)(({target:f})=>f===n));(function Kt(...t){return 1===(t=qt(t)).length?(0,De.Xf)(t[0]):new oe.y(function ki(t){return n=>{let e=[];for(let i=0;e&&!n.closed&&i<t.length;i++)e.push((0,De.Xf)(t[i]).subscribe((0,re.x)(n,a=>{if(e){for(let s=0;s<e.length;s++)s!==i&&e[s].unsubscribe();e=null}n.next(a)})))}}(t))})(function ft(t=0,n,e=Oi){let i=-1;return null!=n&&((0,Si.K)(n)?e=n:i=n),new oe.y(a=>{let s=function Ei(t){return t instanceof Date&&!isNaN(t)}(t)?+t-e.now():t;s<0&&(s=0);let r=0;return e.schedule(function(){a.closed||(a.next(r++),0<=i?this.schedule(void 0,i):a.complete())},s)})}(d+ls).pipe(M(c)),g,u).pipe(M(c)).subscribe(()=>{Be.delete(n),t.run(()=>{r(),l.next(),l.complete()})})}),l.asObservable()};let Xe=(()=>{class t{constructor(){this.animation=wn.animation}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=(()=>{return(t=k||(k={}))[t.Tab=9]="Tab",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.PageUp=33]="PageUp",t[t.PageDown=34]="PageDown",t[t.End=35]="End",t[t.Home=36]="Home",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowRight=39]="ArrowRight",t[t.ArrowDown=40]="ArrowDown",k;var t})();typeof navigator<"u"&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent));const An=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function In(t){const n=Array.from(t.querySelectorAll(An)).filter(e=>-1!==e.tabIndex);return[n[0],n[n.length-1]]}new Date(1882,10,12),new Date(2174,10,25);class _e{constructor(n,e,i){this.nodes=n,this.viewRef=e,this.componentRef=i}}let or=(()=>{class t{constructor(e,i){this._el=e,this._zone=i}ngOnInit(){this._zone.onStable.asObservable().pipe((0,V.q)(1)).subscribe(()=>{P(this._zone,this._el.nativeElement,(e,i)=>{i&&Se(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return P(this._zone,this._el.nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.SBq),o.Y36(o.R0b))},t.\u0275cmp=o.Xpm({type:t,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(e,i){2&e&&(o.Tol("modal-backdrop"+(i.backdropClass?" "+i.backdropClass:"")),o.ekj("show",!i.animation)("fade",i.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},decls:0,vars:0,template:function(e,i){},encapsulation:2}),t})();class Jn{close(n){}dismiss(n){}}class sr{constructor(n,e,i,a){this._windowCmptRef=n,this._contentRef=e,this._backdropCmptRef=i,this._beforeDismiss=a,this._closed=new B.x,this._dismissed=new B.x,this._hidden=new B.x,n.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,r)=>{this._resolve=s,this._reject=r}),this.result.then(null,()=>{})}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(M(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(M(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}close(n){this._windowCmptRef&&(this._closed.next(n),this._resolve(n),this._removeModalElements())}_dismiss(n){this._dismissed.next(n),this._reject(n),this._removeModalElements()}dismiss(n){if(this._windowCmptRef)if(this._beforeDismiss){const e=this._beforeDismiss();!function Tn(t){return t&&t.then}(e)?!1!==e&&this._dismiss(n):e.then(i=>{!1!==i&&this._dismiss(n)},()=>{})}else this._dismiss(n)}_removeModalElements(){const n=this._windowCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():(0,gt.of)(void 0);n.subscribe(()=>{const{nativeElement:i}=this._windowCmptRef.location;i.parentNode.removeChild(i),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){const{nativeElement:i}=this._backdropCmptRef.location;i.parentNode.removeChild(i),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),Ye(n,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}}var $e=(()=>{return(t=$e||($e={}))[t.BACKDROP_CLICK=0]="BACKDROP_CLICK",t[t.ESC=1]="ESC",$e;var t})();let rr=(()=>{class t{constructor(e,i,a){this._document=e,this._elRef=i,this._zone=a,this._closed$=new B.x,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new o.vpe,this.shown=new B.x,this.hidden=new B.x}get fullscreenClass(){return!0===this.fullscreen?" modal-fullscreen":Mt(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe((0,V.q)(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){const{nativeElement:e}=this._elRef,i={animation:this.animation,runningTransition:"stop"},r=Ye(P(this._zone,e,()=>e.classList.remove("show"),i),P(this._zone,this._dialogEl.nativeElement,()=>{},i));return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){const e={animation:this.animation,runningTransition:"continue"};Ye(P(this._zone,this._elRef.nativeElement,(s,r)=>{r&&Se(s),s.classList.add("show")},e),P(this._zone,this._dialogEl.nativeElement,()=>{},e)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){const{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{I(e,"keydown").pipe(M(this._closed$),(0,ue.h)(a=>a.which===k.Escape)).subscribe(a=>{this.keyboard?requestAnimationFrame(()=>{a.defaultPrevented||this._zone.run(()=>this.dismiss($e.ESC))}):"static"===this.backdrop&&this._bumpBackdrop()});let i=!1;I(this._dialogEl.nativeElement,"mousedown").pipe(M(this._closed$),(0,on.b)(()=>i=!1),(0,an.w)(()=>I(e,"mouseup").pipe(M(this._closed$),(0,V.q)(1))),(0,ue.h)(({target:a})=>e===a)).subscribe(()=>{i=!0}),I(e,"click").pipe(M(this._closed$)).subscribe(({target:a})=>{e===a&&("static"===this.backdrop?this._bumpBackdrop():!0===this.backdrop&&!i&&this._zone.run(()=>this.dismiss($e.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){const{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){const i=e.querySelector("[ngbAutofocus]"),a=In(e)[0];(i||a||e).focus()}}_restoreFocus(){const e=this._document.body,i=this._elWithFocus;let a;a=i&&i.focus&&e.contains(i)?i:e,this._zone.runOutsideAngular(()=>{setTimeout(()=>a.focus()),this._elWithFocus=null})}_bumpBackdrop(){"static"===this.backdrop&&P(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(T.K0),o.Y36(o.SBq),o.Y36(o.R0b))},t.\u0275cmp=o.Xpm({type:t,selectors:[["ngb-modal-window"]],viewQuery:function(e,i){if(1&e&&o.Gf(go,7),2&e){let a;o.iGM(a=o.CRH())&&(i._dialogEl=a.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(e,i){2&e&&(o.uIk("aria-modal",!0)("aria-labelledby",i.ariaLabelledBy)("aria-describedby",i.ariaDescribedBy),o.Tol("modal d-block"+(i.windowClass?" "+i.windowClass:"")),o.ekj("fade",i.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},ngContentSelectors:Ua,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(e,i){1&e&&(o.F$t(),o.TgZ(0,"div",0,1)(2,"div",2),o.Hsn(3),o.qZA()()),2&e&&o.Tol("modal-dialog"+(i.size?" modal-"+i.size:"")+(i.centered?" modal-dialog-centered":"")+i.fullscreenClass+(i.scrollable?" modal-dialog-scrollable":"")+(i.modalDialogClass?" "+i.modalDialogClass:""))},styles:["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],encapsulation:2}),t})(),lr=(()=>{class t{constructor(e){this._document=e}hide(){const e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,a=i.style,{overflow:s,paddingRight:r}=a;if(e>0){const l=parseFloat(window.getComputedStyle(i).paddingRight);a.paddingRight=`${l+e}px`}return a.overflow="hidden",()=>{e>0&&(a.paddingRight=r),a.overflow=s}}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(T.K0))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ur=(()=>{class t{constructor(e,i,a,s,r,l){this._applicationRef=e,this._injector=i,this._document=a,this._scrollBar=s,this._rendererFactory=r,this._ngZone=l,this._activeWindowCmptHasChanged=new B.x,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._modalRefs=[],this._windowAttributes=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],this._windowCmpts=[],this._activeInstances=new o.vpe,this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){const u=this._windowCmpts[this._windowCmpts.length-1];((t,n,e,i=!1)=>{this._ngZone.runOutsideAngular(()=>{const a=I(n,"focusin").pipe(M(e),(0,te.U)(s=>s.target));I(n,"keydown").pipe(M(e),(0,ue.h)(s=>s.which===k.Tab),mt(a)).subscribe(([s,r])=>{const[l,u]=In(n);(r===l||r===n)&&s.shiftKey&&(u.focus(),s.preventDefault()),r===u&&!s.shiftKey&&(l.focus(),s.preventDefault())}),i&&I(n,"click").pipe(M(e),mt(a),(0,te.U)(s=>s[1])).subscribe(s=>s.focus())})})(0,u.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(u.location.nativeElement)}})}_restoreScrollBar(){const e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,i,a){const s=a.container instanceof HTMLElement?a.container:pe(a.container)?this._document.querySelector(a.container):this._document.body,r=this._rendererFactory.createRenderer(null,null);if(!s)throw new Error(`The specified modal container "${a.container||"body"}" was not found in the DOM.`);this._hideScrollBar();const l=new Jn,u=this._getContentRef(a.injector||e,i,l,a);let c=!1!==a.backdrop?this._attachBackdrop(s):void 0,d=this._attachWindowComponent(s,u.nodes),g=new sr(d,u,c,a.beforeDismiss);return this._registerModalRef(g),this._registerWindowCmpt(d),g.hidden.pipe((0,V.q)(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(r.removeClass(this._document.body,"modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),l.close=p=>{g.close(p)},l.dismiss=p=>{g.dismiss(p)},this._applyWindowOptions(d.instance,a),1===this._modalRefs.length&&r.addClass(this._document.body,"modal-open"),c&&c.instance&&(this._applyBackdropOptions(c.instance,a),c.changeDetectorRef.detectChanges()),d.changeDetectorRef.detectChanges(),g}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(i=>i.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let i=(0,o.LMc)(or,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),e.appendChild(i.location.nativeElement),i}_attachWindowComponent(e,i){let a=(0,o.LMc)(rr,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(a.hostView),e.appendChild(a.location.nativeElement),a}_applyWindowOptions(e,i){this._windowAttributes.forEach(a=>{pe(i[a])&&(e[a]=i[a])})}_applyBackdropOptions(e,i){this._backdropAttributes.forEach(a=>{pe(i[a])&&(e[a]=i[a])})}_getContentRef(e,i,a,s){return i?i instanceof o.Rgc?this._createFromTemplateRef(i,a):Mt(i)?this._createFromString(i):this._createFromComponent(e,i,a,s):new _e([])}_createFromTemplateRef(e,i){const s=e.createEmbeddedView({$implicit:i,close(r){i.close(r)},dismiss(r){i.dismiss(r)}});return this._applicationRef.attachView(s),new _e([s.rootNodes],s)}_createFromString(e){const i=this._document.createTextNode(`${e}`);return new _e([[i]])}_createFromComponent(e,i,a,s){const r=o.zs3.create({providers:[{provide:Jn,useValue:a}],parent:e}),l=(0,o.LMc)(i,{environmentInjector:this._applicationRef.injector,elementInjector:r}),u=l.location.nativeElement;return s.scrollable&&u.classList.add("component-host-scrollable"),this._applicationRef.attachView(l.hostView),new _e([[u]],l.hostView,l)}_setAriaHidden(e){const i=e.parentElement;i&&e!==this._document.body&&(Array.from(i.children).forEach(a=>{a!==e&&"SCRIPT"!==a.nodeName&&(this._ariaHiddenValues.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,i)=>{e?i.setAttribute("aria-hidden",e):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){const i=()=>{const a=this._modalRefs.indexOf(e);a>-1&&(this._modalRefs.splice(a,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(i,i)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{const i=this._windowCmpts.indexOf(e);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.z2F),o.LFG(o.zs3),o.LFG(T.K0),o.LFG(lr),o.LFG(o.FYo),o.LFG(o.R0b))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),cr=(()=>{class t{constructor(e){this._ngbConfig=e,this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return void 0===this._animation?this._ngbConfig.animation:this._animation}set animation(e){this._animation=e}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(Xe))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Ft=(()=>{class t{constructor(e,i,a){this._injector=e,this._modalStack=i,this._config=a}open(e,i={}){const a={...this._config,animation:this._config.animation,...i};return this._modalStack.open(this._injector,e,a)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.zs3),o.LFG(ur),o.LFG(cr))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();new o.OlP("live announcer delay",{providedIn:"root",factory:function Rr(){return 100}});const Ir=["popup"];function Pr(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"p",4),o._uU(4,"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438!"),o.qZA()(),o.TgZ(5,"div",5)(6,"button",6),o.NdJ("click",function(){o.CHM(e);const a=o.oxw();return o.KtG(a.close())}),o._uU(7,"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c "),o.qZA()()()()}}let ii=(()=>{class t{constructor(e){this.modalService=e}ngOnInit(){}open(){this.modalService.open(this.popup)}close(){this.modalService.dismissAll()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(Ft))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-popup"]],viewQuery:function(e,i){if(1&e&&o.Gf(Ir,5),2&e){let a;o.iGM(a=o.CRH())&&(i.popup=a.first)}},decls:2,vars:0,consts:[["popup",""],[1,"modal-dialog","m-0"],[1,"modal-content"],[1,"modal-body","p-4"],[1,"h5"],[1,"modal-footer","justify-content-start"],["type","button","routerLink","/products",1,"btn","btn-primary",3,"click"]],template:function(e,i){1&e&&o.YNc(0,Pr,8,0,"ng-template",null,0,o.W1O)},dependencies:[pt.rH]}),t})();const Fr=[{path:"",component:(()=>{class t{constructor(e){this.modalService=e,this.subscription=null,this.popupStarter=new oe.y(i=>{setTimeout(()=>{i.next()},1e4)})}ngOnInit(){$(function(){$("#faq-accordion").accordion({icons:{header:"iconClosed",activeHeader:"iconOpen"},heightStyle:"content"})})}ngOnDestroy(){this.subscription?.unsubscribe()}ngAfterViewInit(){this.subscription=this.popupStarter.subscribe(()=>{this.popupComponent.open()})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(Ft))},t.\u0275cmp=o.Xpm({type:t,selectors:[["main-component"]],viewQuery:function(e,i){if(1&e&&o.Gf(ii,5),2&e){let a;o.iGM(a=o.CRH())&&(i.popupComponent=a.first)}},decls:47,vars:0,consts:[[1,"main","container","mt-5","gx-0","pb-4","h-auto"],[1,"main-slick"],[1,"main-discount","position-relative","d-flex"],[1,"discount-info","position-absolute","align-self-center","mx-2","mx-sm-5","px-1","px-sm-5"],[1,"discount-title","h1","mb-1","mb-md-5","mb-sm-3"],[1,"discount-text","h5","py-1","py-md-4","py-sm-3"],[1,"discount-action","mt-1","mt-md-5","mt-sm-3"],[1,"btn","btn-primary","px-5","hvr-grow-shadow"],[1,"faq","container","mt-5","justify-content-center"],[1,"row"],[1,"col-1","col-md-2"],[1,"col-10","col-md-8"],[1,"faq-title","h1","text-center","mb-5"],["id","faq-accordion"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"strong"),o._uU(6,"\u0421\u043a\u0438\u0434\u043a\u0438 \u043d\u0430 \u0442\u0440\u0430\u0432\u044f\u043d\u043d\u044b\u0435 \u0447\u0430\u0438"),o.qZA()(),o.TgZ(7,"div",5),o._uU(8,"\u0423\u0437\u043d\u0430\u0439 \u0432\u0441\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0432 \u0437\u0430\u044f\u0432\u043a\u0443"),o.qZA(),o.TgZ(9,"div",6)(10,"button",7),o._uU(11,"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c"),o.qZA()()()()()(),o.TgZ(12,"div",8)(13,"div",9),o._UZ(14,"div",10),o.TgZ(15,"div",11)(16,"div",12)(17,"strong"),o._uU(18,"\u041e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),o.qZA()(),o.TgZ(19,"div",13)(20,"h3"),o._uU(21,"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043b\u0438 \u0432\u044b \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u0431\u043e\u043a\u0441\u044b?"),o.qZA(),o.TgZ(22,"div")(23,"p"),o._uU(24,"\u0414\u0430, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u0430\u043a\u0430\u044f \u0443\u0441\u043b\u0443\u0433\u0430. \u041c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0439 \u0431\u043e\u043a\u0441 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441, \u043e\u0431\u044a\u0435\u043c \u0438 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c!"),o.qZA()(),o.TgZ(25,"h3"),o._uU(26,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0443 \u0432\u0430\u0441 \u0440\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0435\u0439 \u0447\u0430\u044f?"),o.qZA(),o.TgZ(27,"div")(28,"p"),o._uU(29,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 1500 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u043e\u0440\u0442\u043e\u0432 \u0447\u0430\u044f, \u0440\u0430\u0441\u0442\u0443\u0449\u0438\u0445 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0432 25 \u0441\u0442\u0440\u0430\u043d\u0430\u0445-\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u0445 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0447\u0430\u0439\u043d\u043e\u0433\u043e \u043b\u0438\u0441\u0442\u0430, \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 \u044d\u0442\u043e\u0433\u043e, \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u044e\u0442 \u0447\u0435\u0440\u043d\u044b\u0439, \u0437\u0435\u043b\u0435\u043d\u044b\u0439, \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u0438 \u0436\u0435\u043b\u0442\u044b\u0439 \u0447\u0430\u0439. \u0427\u0435\u0440\u043d\u044b\u0439 \u0447\u0430\u0439 - \u044d\u0442\u043e \u043b\u0438\u0441\u0442, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0439 \u0432\u0441\u0435 \u044d\u0442\u0430\u043f\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (\u0437\u0430\u0432\u044f\u043b\u0438\u0432\u0430\u043d\u0438\u0435, \u0441\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u043d\u0438\u0435, \u0444\u0435\u0440\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f, \u0441\u0443\u0448\u043a\u0430, \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430). \u0417\u0435\u043b\u0435\u043d\u044b\u0439 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0438 \u0441\u0443\u0448\u043a\u0443. \u0415\u0433\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0435\u0449\u0435 \u043d\u0435\u0444\u0435\u0440\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c. \u041c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438 - \u0436\u0435\u043b\u0442\u044b\u0439 \u0438 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u0447\u0430\u0438."),o.qZA()(),o.TgZ(30,"h3"),o._uU(31,"\u0412 \u043a\u0430\u043a\u043e\u0439 \u0441\u0440\u043e\u043a \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430?"),o.qZA(),o.TgZ(32,"div")(33,"p"),o._uU(34,"\u0415\u0441\u043b\u0438 \u0432 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0435 \u0441\u0440\u043e\u043a \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0440\u043e\u043a, \u0442\u043e\u0432\u0430\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u043e\u043c \u0432 \u0440\u0430\u0437\u0443\u043c\u043d\u044b\u0439 \u0441\u0440\u043e\u043a. \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0435 \u0432 \u0440\u0430\u0437\u0443\u043c\u043d\u044b\u0439 \u0441\u0440\u043e\u043a, \u043f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432 7-\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0441\u0440\u043e\u043a \u0441\u043e \u0434\u043d\u044f \u043f\u0440\u0435\u0434\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u043c \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043e \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438. \u0417\u0430 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u043e\u043c \u0441\u0440\u043e\u043a\u043e\u0432 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044e \u043f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u0438\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438."),o.qZA()(),o.TgZ(35,"h3"),o._uU(36,"\u0423 \u0432\u0430\u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442?"),o.qZA(),o.TgZ(37,"div")(38,"p"),o._uU(39,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 \u2014 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0447\u043d\u044f \u0438\u043c\u0435\u044e\u0449\u0438\u0445\u0441\u044f \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0449\u0438\u0435\u0441\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c\u044e \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f. \u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u044d\u0442\u043e\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u043e\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f (\u041a\u043d, %), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0435: \u041a\u043d = (\u041d \xd7 100)/\u0428. \u0433\u0434\u0435 \u041d \u2014 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u043d\u043e\u0432\u0438\u0437\u043d\u044b (\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u044b\u0445 \u0432\u0438\u0434\u043e\u0432 \u0438 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439 \u0442\u043e\u0432\u0430\u0440\u043e\u0432), \u0430 \u0428 \u2014 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0434\u043e\u0432, \u0440\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0439 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0442\u0435\u0445 \u0436\u0435 \u043e\u0434\u043d\u043e\u0440\u043e\u0434\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f."),o.qZA()(),o.TgZ(40,"h3"),o._uU(41,"\u041a\u0430\u043a\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043c\u0430 \u0443 \u0432\u0430\u0441 \u043f\u0430\u0447\u043a\u0438 \u0447\u0430\u044f?"),o.qZA(),o.TgZ(42,"div")(43,"p"),o._uU(44,"\u0418\u0445 \u0444\u0430\u0441\u0443\u044e\u0442 \u0432 \u043f\u0430\u0447\u043a\u0438 \u043f\u043e 100 \u0448\u0442\u0443\u043a. \u0422\u0430\u043a\u0430\u044f \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f, \u0432\u044b\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442 160 \u0433. \u0423 Hyson \u043f\u043e\u043c\u0438\u043c\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0435\u0441\u0442\u044c \u043f\u043e 1,8 \u0433\u0440\u0430\u043c\u043c\u0430 \u0432 \u043f\u0430\u0447\u043a\u0430\u0445 \u043f\u043e 25 \u0438 100 \u0448\u0442\u0443\u043a, \u044d\u0442\u043e 45 \u0438 180 \u0433 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e. \u0410 \u0442\u0430\u043a\u0436\u0435 \u0447\u0430\u0439\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u0438\u043a\u0438 \u0438 \u0432\u043e\u0432\u0441\u0435 \u043f\u043e 1,5 \u0433\u0440\u0430\u043c\u043c\u0430. \u0412 \u043f\u0430\u0447\u043a\u0435 \u0438\u0445 60 \u0448\u0442\u0443\u043a, \u0438\u0442\u043e\u0433\u043e 90 \u0433. \u0423 \u0422\u0418 \u0422\u042d\u041d\u0413 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442 \u0435\u0441\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u0438\u043a\u0438. \u041f\u043e 2,5 \u0433\u0440\u0430\u043c\u043c\u0430. \u0412 \u043f\u0430\u0447\u043a\u0435 25 \u0438\u043b\u0438 100 \u0448\u0442\u0443\u043a, \u0438\u0442\u043e\u0433\u043e 62,5 \u0438\u043b\u0438 250 \u0433. \u0411\u044b\u0432\u0430\u044e\u0442 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0440\u0442\u043e\u0432 \u0447\u0430\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, 6 \u0441\u043e\u0440\u0442\u043e\u0432 \u043f\u043e 10 \u043f\u0430\u043a\u0435\u0442\u0438\u043a\u043e\u0432. \u0418\u0442\u043e\u0433\u043e 60 \u0448\u0442\u0443\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0430\u0434\u0443\u0442 120 \u0433 \u0447\u0430\u044f."),o.qZA()()(),o._UZ(45,"div",10),o.qZA()()(),o._UZ(46,"app-popup"))},dependencies:[ii],styles:[".main[_ngcontent-%COMP%]{position:relative}.main-discount[_ngcontent-%COMP%]{background-image:url(/assets/images/image1.png);max-height:640px;min-height:200px;aspect-ratio:2.0625;background-size:cover;background-repeat:no-repeat}"]}),t})()}];let Br=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[pt.Bz.forChild(Fr),pt.Bz]}),t})();var Gr=y(4466);let jr=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[T.ez,Br,Gr.m]}),t})()}}]);