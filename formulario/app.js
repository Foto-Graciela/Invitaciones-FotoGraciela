var Fr=()=>{};var Br=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Pi=function(e){let t=[],n=0,r=0;for(;n<e.length;){let s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){let i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){let i=e[n++],o=e[n++],l=e[n++],h=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{let i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){let i=e[s],o=s+1<e.length,l=o?e[s+1]:0,h=s+2<e.length,g=h?e[s+2]:0,_=i>>2,b=(i&3)<<4|l>>4,E=(l&15)<<2|g>>6,T=g&63;h||(T=64,o||(E=64)),r.push(n[_],n[b],n[E],n[T])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Br(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Pi(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){let i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;let g=s<e.length?n[e.charAt(s)]:64;++s;let b=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||g==null||b==null)throw new dn;let E=i<<2|l>>4;if(r.push(E),g!==64){let T=l<<4&240|g>>2;if(r.push(T),b!==64){let A=g<<6&192|b;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},dn=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},xi=function(e){let t=Br(e);return qr.encodeByteArray(t,!0)},Gt=function(e){return xi(e).replace(/\./g,"")},jr=function(e){try{return qr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Ci(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Oi=()=>Ci().__FIREBASE_DEFAULTS__,Vi=()=>{if(typeof process>"u"||typeof process.env>"u")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Li=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&jr(e[1]);return t&&JSON.parse(t)},zr=()=>{try{return Fr()||Oi()||Vi()||Li()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ui=e=>zr()?.emulatorHosts?.[e],ge=e=>{let t=Ui(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},fn=()=>zr()?.config;var me=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}};function _e(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Gt(JSON.stringify(n)),Gt(JSON.stringify(o)),""].join(".")}function Hr(){try{return typeof indexedDB=="object"}catch{return!1}}function Gr(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}var Mi="FirebaseError",Q=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Mi,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}},Wt=class{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){let r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Fi(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Q(s,l,r)}};function Fi(e,t){try{let n=0,r="";for(;n<e.length;){let s=e.indexOf("{$",n);if(s===-1){r+=e.substring(n);break}let i=e.indexOf("}",s+2);if(i===-1){r+=e.substring(n);break}let o=e.substring(s+2,i),l=t[o];r+=e.substring(n,s)+(l!=null?String(l):`<${o}?>`),n=i+1}return r}catch{return e}}function bt(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let s of n){if(!r.includes(s))return!1;let i=e[s],o=t[s];if($r(i)&&$r(o)){if(!bt(i,o))return!1}else if(i!==o)return!1}for(let s of r)if(!n.includes(s))return!1;return!0}function $r(e){return e!==null&&typeof e=="object"}var Rc=4*60*60*1e3;function B(e){return e&&e._delegate?e._delegate:e}function Nt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ye(e){return(await fetch(e,{credentials:"include"})).ok}var J=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var Et="[DEFAULT]";var pn=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){let r=new me;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){let n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bi(t))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(n);try{let i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Et){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Et){return this.instances.has(t)}getOptions(t=Et){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[i,o]of this.instancesDeferred.entries()){let l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(t,n){let r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);let i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){let r=this.onInitCallbacks.get(n);if(r)for(let s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$i(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Et){return this.component?this.component.multipleInstances?t:Et:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function $i(e){return e===Et?void 0:e}function Bi(e){return e.instantiationMode==="EAGER"}var be=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let n=new pn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}};var qi=[],N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));var ji={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},zi=N.INFO,Hi={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Gi=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),s=Hi[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},kt=class{constructor(t){this.name=t,this._logLevel=zi,this._logHandler=Gi,this._userLogHandler=null,qi.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ji[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}};var Wi=(e,t)=>t.some(n=>e instanceof n),Wr,Kr;function Ki(){return Wr||(Wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qi(){return Kr||(Kr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Qr=new WeakMap,gn=new WeakMap,Jr=new WeakMap,mn=new WeakMap,yn=new WeakMap;function Ji(e){let t=new Promise((n,r)=>{let s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(tt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Qr.set(n,e)}).catch(()=>{}),yn.set(t,e),t}function Xi(e){if(gn.has(e))return;let t=new Promise((n,r)=>{let s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});gn.set(e,t)}var _n={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return gn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jr.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xr(e){_n=e(_n)}function Yi(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){let r=e.call(Ee(this),t,...n);return Jr.set(r,t.sort?t.sort():[t]),tt(r)}:Qi().includes(e)?function(...t){return e.apply(Ee(this),t),tt(Qr.get(this))}:function(...t){return tt(e.apply(Ee(this),t))}}function Zi(e){return typeof e=="function"?Yi(e):(e instanceof IDBTransaction&&Xi(e),Wi(e,Ki())?new Proxy(e,_n):e)}function tt(e){if(e instanceof IDBRequest)return Ji(e);if(mn.has(e))return mn.get(e);let t=Zi(e);return t!==e&&(mn.set(e,t),yn.set(t,e)),t}var Ee=e=>yn.get(e);function Zr(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){let o=indexedDB.open(e,t),l=tt(o);return r&&o.addEventListener("upgradeneeded",h=>{r(tt(o.result),h.oldVersion,h.newVersion,tt(o.transaction),h)}),n&&o.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),l.then(h=>{i&&h.addEventListener("close",()=>i()),s&&h.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),l}var to=["get","getKey","getAll","getAllKeys","count"],eo=["put","add","delete","clear"],bn=new Map;function Yr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(bn.get(t))return bn.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,s=eo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||to.includes(n)))return;let i=async function(o,...l){let h=this.transaction(o,s?"readwrite":"readonly"),g=h.store;return r&&(g=g.index(l.shift())),(await Promise.all([g[n](...l),s&&h.done]))[0]};return bn.set(t,i),i}Xr(e=>({...e,get:(t,n,r)=>Yr(t,n)||e.get(t,n,r),has:(t,n)=>!!Yr(t,n)||e.has(t,n)}));var wn=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(no(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function no(e){return e.getComponent()?.type==="VERSION"}var vn="@firebase/app",ts="0.16.2";var ct=new kt("@firebase/app"),ro="@firebase/app-compat",so="@firebase/analytics-compat",io="@firebase/analytics",oo="@firebase/app-check-compat",ao="@firebase/app-check",co="@firebase/auth",uo="@firebase/auth-compat",lo="@firebase/database",ho="@firebase/data-connect",fo="@firebase/database-compat",po="@firebase/functions",mo="@firebase/functions-compat",go="@firebase/installations",_o="@firebase/installations-compat",yo="@firebase/messaging",bo="@firebase/messaging-compat",Eo="@firebase/performance",wo="@firebase/performance-compat",vo="@firebase/remote-config",To="@firebase/remote-config-compat",Ao="@firebase/storage",Io="@firebase/storage-compat",Ro="@firebase/firestore",So="@firebase/ai",No="@firebase/firestore-compat",ko="firebase",Do="12.19.0";var Tn="[DEFAULT]",Po={[vn]:"fire-core",[ro]:"fire-core-compat",[io]:"fire-analytics",[so]:"fire-analytics-compat",[ao]:"fire-app-check",[oo]:"fire-app-check-compat",[co]:"fire-auth",[uo]:"fire-auth-compat",[lo]:"fire-rtdb",[ho]:"fire-data-connect",[fo]:"fire-rtdb-compat",[po]:"fire-fn",[mo]:"fire-fn-compat",[go]:"fire-iid",[_o]:"fire-iid-compat",[yo]:"fire-fcm",[bo]:"fire-fcm-compat",[Eo]:"fire-perf",[wo]:"fire-perf-compat",[vo]:"fire-rc",[To]:"fire-rc-compat",[Ao]:"fire-gcs",[Io]:"fire-gcs-compat",[Ro]:"fire-fst",[No]:"fire-fst-compat",[So]:"fire-vertex","fire-js":"fire-js",[ko]:"fire-js-all"};var we=new Map,xo=new Map,An=new Map;function es(e,t){try{e.container.addComponent(t)}catch(n){ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wt(e){let t=e.name;if(An.has(t))return ct.debug(`There were multiple attempts to register component ${t}.`),!1;An.set(t,e);for(let n of we.values())es(n,e);for(let n of xo.values())es(n,e);return!0}function ve(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Te(e){return e==null?!1:e.settings!==void 0}var Co={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new Wt("app","Firebase",Co);var In=class{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new J("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}};var Ae=Do;function Nn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});let r={name:Tn,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw at.create("bad-app-name",{appName:String(s)});if(n||(n=fn()),!n)throw at.create("no-options");let i=we.get(s);if(i)if(bt(n,i.options)){if(bt(r,i.config))return i;throw at.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw at.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(n)});let o=new be(s);for(let h of An.values())o.addComponent(h);let l=new In(n,r,o);return we.set(s,l),l}function Ie(e=Tn){let t=we.get(e);if(!t&&e===Tn&&fn())return Nn();if(!t)throw at.create("no-app",{appName:e});return t}function X(e,t,n){let r=Po[e]??e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){let o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ct.warn(o.join(" "));return}wt(new J(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}var Oo="firebase-heartbeat-database",Vo=1,Kt="firebase-heartbeat-store",En=null;function is(){return En||(En=Zr(Oo,Vo,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Kt)}catch(n){console.warn(n)}}}}).catch(e=>{throw at.create("idb-open",{originalErrorMessage:e.message})})),En}async function Lo(e){try{let n=(await is()).transaction(Kt),r=await n.objectStore(Kt).get(os(e));return await n.done,r}catch(t){if(t instanceof Q)ct.warn(t.message);else{let n=at.create("idb-get",{originalErrorMessage:t?.message});ct.warn(n.message)}}}async function ns(e,t){try{let r=(await is()).transaction(Kt,"readwrite");await r.objectStore(Kt).put(t,os(e)),await r.done}catch(n){if(n instanceof Q)ct.warn(n.message);else{let r=at.create("idb-set",{originalErrorMessage:n?.message});ct.warn(r.message)}}}function os(e){return`${e.name}!${e.options.appId}`}var Uo=1024,Mo=30,Rn=class{constructor(t){this.container=t,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Sn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Mo){let s=$o(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ct.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=rs(),{heartbeatsToSend:n,unsentEntries:r}=Fo(this._heartbeatsCache.heartbeats),s=Gt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ct.warn(t),""}}};function rs(){return new Date().toISOString().substring(0,10)}function Fo(e,t=Uo){let n=[],r=e.slice();for(let s of e){let i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ss(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ss(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Sn=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hr()?Gr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await Lo(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return ns(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return ns(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}};function ss(e){return Gt(JSON.stringify({version:2,heartbeats:e})).length}function $o(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function Bo(e){wt(new J("platform-logger",t=>new wn(t),"PRIVATE")),wt(new J("heartbeat",t=>new Rn(t),"PRIVATE")),X(vn,ts,e),X(vn,ts,"esm2020"),X("fire-js","")}Bo("");var as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cs={};var kn,qo;(function(){var e;function t(d,a){function u(){}u.prototype=a.prototype,d.F=a.prototype,d.prototype=new u,d.prototype.constructor=d,d.D=function(p,f,m){for(var c=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)c[yt-2]=arguments[yt];return a.prototype[f].apply(p,c)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(d,a,u){u||(u=0);let p=Array(16);if(typeof a=="string")for(var f=0;f<16;++f)p[f]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;else for(f=0;f<16;++f)p[f]=a[u++]|a[u++]<<8|a[u++]<<16|a[u++]<<24;a=d.g[0],u=d.g[1],f=d.g[2];let m=d.g[3],c;c=a+(m^u&(f^m))+p[0]+3614090360&4294967295,a=u+(c<<7&4294967295|c>>>25),c=m+(f^a&(u^f))+p[1]+3905402710&4294967295,m=a+(c<<12&4294967295|c>>>20),c=f+(u^m&(a^u))+p[2]+606105819&4294967295,f=m+(c<<17&4294967295|c>>>15),c=u+(a^f&(m^a))+p[3]+3250441966&4294967295,u=f+(c<<22&4294967295|c>>>10),c=a+(m^u&(f^m))+p[4]+4118548399&4294967295,a=u+(c<<7&4294967295|c>>>25),c=m+(f^a&(u^f))+p[5]+1200080426&4294967295,m=a+(c<<12&4294967295|c>>>20),c=f+(u^m&(a^u))+p[6]+2821735955&4294967295,f=m+(c<<17&4294967295|c>>>15),c=u+(a^f&(m^a))+p[7]+4249261313&4294967295,u=f+(c<<22&4294967295|c>>>10),c=a+(m^u&(f^m))+p[8]+1770035416&4294967295,a=u+(c<<7&4294967295|c>>>25),c=m+(f^a&(u^f))+p[9]+2336552879&4294967295,m=a+(c<<12&4294967295|c>>>20),c=f+(u^m&(a^u))+p[10]+4294925233&4294967295,f=m+(c<<17&4294967295|c>>>15),c=u+(a^f&(m^a))+p[11]+2304563134&4294967295,u=f+(c<<22&4294967295|c>>>10),c=a+(m^u&(f^m))+p[12]+1804603682&4294967295,a=u+(c<<7&4294967295|c>>>25),c=m+(f^a&(u^f))+p[13]+4254626195&4294967295,m=a+(c<<12&4294967295|c>>>20),c=f+(u^m&(a^u))+p[14]+2792965006&4294967295,f=m+(c<<17&4294967295|c>>>15),c=u+(a^f&(m^a))+p[15]+1236535329&4294967295,u=f+(c<<22&4294967295|c>>>10),c=a+(f^m&(u^f))+p[1]+4129170786&4294967295,a=u+(c<<5&4294967295|c>>>27),c=m+(u^f&(a^u))+p[6]+3225465664&4294967295,m=a+(c<<9&4294967295|c>>>23),c=f+(a^u&(m^a))+p[11]+643717713&4294967295,f=m+(c<<14&4294967295|c>>>18),c=u+(m^a&(f^m))+p[0]+3921069994&4294967295,u=f+(c<<20&4294967295|c>>>12),c=a+(f^m&(u^f))+p[5]+3593408605&4294967295,a=u+(c<<5&4294967295|c>>>27),c=m+(u^f&(a^u))+p[10]+38016083&4294967295,m=a+(c<<9&4294967295|c>>>23),c=f+(a^u&(m^a))+p[15]+3634488961&4294967295,f=m+(c<<14&4294967295|c>>>18),c=u+(m^a&(f^m))+p[4]+3889429448&4294967295,u=f+(c<<20&4294967295|c>>>12),c=a+(f^m&(u^f))+p[9]+568446438&4294967295,a=u+(c<<5&4294967295|c>>>27),c=m+(u^f&(a^u))+p[14]+3275163606&4294967295,m=a+(c<<9&4294967295|c>>>23),c=f+(a^u&(m^a))+p[3]+4107603335&4294967295,f=m+(c<<14&4294967295|c>>>18),c=u+(m^a&(f^m))+p[8]+1163531501&4294967295,u=f+(c<<20&4294967295|c>>>12),c=a+(f^m&(u^f))+p[13]+2850285829&4294967295,a=u+(c<<5&4294967295|c>>>27),c=m+(u^f&(a^u))+p[2]+4243563512&4294967295,m=a+(c<<9&4294967295|c>>>23),c=f+(a^u&(m^a))+p[7]+1735328473&4294967295,f=m+(c<<14&4294967295|c>>>18),c=u+(m^a&(f^m))+p[12]+2368359562&4294967295,u=f+(c<<20&4294967295|c>>>12),c=a+(u^f^m)+p[5]+4294588738&4294967295,a=u+(c<<4&4294967295|c>>>28),c=m+(a^u^f)+p[8]+2272392833&4294967295,m=a+(c<<11&4294967295|c>>>21),c=f+(m^a^u)+p[11]+1839030562&4294967295,f=m+(c<<16&4294967295|c>>>16),c=u+(f^m^a)+p[14]+4259657740&4294967295,u=f+(c<<23&4294967295|c>>>9),c=a+(u^f^m)+p[1]+2763975236&4294967295,a=u+(c<<4&4294967295|c>>>28),c=m+(a^u^f)+p[4]+1272893353&4294967295,m=a+(c<<11&4294967295|c>>>21),c=f+(m^a^u)+p[7]+4139469664&4294967295,f=m+(c<<16&4294967295|c>>>16),c=u+(f^m^a)+p[10]+3200236656&4294967295,u=f+(c<<23&4294967295|c>>>9),c=a+(u^f^m)+p[13]+681279174&4294967295,a=u+(c<<4&4294967295|c>>>28),c=m+(a^u^f)+p[0]+3936430074&4294967295,m=a+(c<<11&4294967295|c>>>21),c=f+(m^a^u)+p[3]+3572445317&4294967295,f=m+(c<<16&4294967295|c>>>16),c=u+(f^m^a)+p[6]+76029189&4294967295,u=f+(c<<23&4294967295|c>>>9),c=a+(u^f^m)+p[9]+3654602809&4294967295,a=u+(c<<4&4294967295|c>>>28),c=m+(a^u^f)+p[12]+3873151461&4294967295,m=a+(c<<11&4294967295|c>>>21),c=f+(m^a^u)+p[15]+530742520&4294967295,f=m+(c<<16&4294967295|c>>>16),c=u+(f^m^a)+p[2]+3299628645&4294967295,u=f+(c<<23&4294967295|c>>>9),c=a+(f^(u|~m))+p[0]+4096336452&4294967295,a=u+(c<<6&4294967295|c>>>26),c=m+(u^(a|~f))+p[7]+1126891415&4294967295,m=a+(c<<10&4294967295|c>>>22),c=f+(a^(m|~u))+p[14]+2878612391&4294967295,f=m+(c<<15&4294967295|c>>>17),c=u+(m^(f|~a))+p[5]+4237533241&4294967295,u=f+(c<<21&4294967295|c>>>11),c=a+(f^(u|~m))+p[12]+1700485571&4294967295,a=u+(c<<6&4294967295|c>>>26),c=m+(u^(a|~f))+p[3]+2399980690&4294967295,m=a+(c<<10&4294967295|c>>>22),c=f+(a^(m|~u))+p[10]+4293915773&4294967295,f=m+(c<<15&4294967295|c>>>17),c=u+(m^(f|~a))+p[1]+2240044497&4294967295,u=f+(c<<21&4294967295|c>>>11),c=a+(f^(u|~m))+p[8]+1873313359&4294967295,a=u+(c<<6&4294967295|c>>>26),c=m+(u^(a|~f))+p[15]+4264355552&4294967295,m=a+(c<<10&4294967295|c>>>22),c=f+(a^(m|~u))+p[6]+2734768916&4294967295,f=m+(c<<15&4294967295|c>>>17),c=u+(m^(f|~a))+p[13]+1309151649&4294967295,u=f+(c<<21&4294967295|c>>>11),c=a+(f^(u|~m))+p[4]+4149444226&4294967295,a=u+(c<<6&4294967295|c>>>26),c=m+(u^(a|~f))+p[11]+3174756917&4294967295,m=a+(c<<10&4294967295|c>>>22),c=f+(a^(m|~u))+p[2]+718787259&4294967295,f=m+(c<<15&4294967295|c>>>17),c=u+(m^(f|~a))+p[9]+3951481745&4294967295,d.g[0]=d.g[0]+a&4294967295,d.g[1]=d.g[1]+(f+(c<<21&4294967295|c>>>11))&4294967295,d.g[2]=d.g[2]+f&4294967295,d.g[3]=d.g[3]+m&4294967295}r.prototype.v=function(d,a){a===void 0&&(a=d.length);let u=a-this.blockSize,p=this.C,f=this.h,m=0;for(;m<a;){if(f==0)for(;m<=u;)s(this,d,m),m+=this.blockSize;if(typeof d=="string"){for(;m<a;)if(p[f++]=d.charCodeAt(m++),f==this.blockSize){s(this,p),f=0;break}}else for(;m<a;)if(p[f++]=d[m++],f==this.blockSize){s(this,p),f=0;break}}this.h=f,this.o+=a},r.prototype.A=function(){var d=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);d[0]=128;for(var a=1;a<d.length-8;++a)d[a]=0;a=this.o*8;for(var u=d.length-8;u<d.length;++u)d[u]=a&255,a/=256;for(this.v(d),d=Array(16),a=0,u=0;u<4;++u)for(let p=0;p<32;p+=8)d[a++]=this.g[u]>>>p&255;return d};function i(d,a){var u=l;return Object.prototype.hasOwnProperty.call(u,d)?u[d]:u[d]=a(d)}function o(d,a){this.h=a;let u=[],p=!0;for(let f=d.length-1;f>=0;f--){let m=d[f]|0;p&&m==a||(u[f]=m,p=!1)}this.g=u}var l={};function h(d){return-128<=d&&d<128?i(d,function(a){return new o([a|0],a<0?-1:0)}):new o([d|0],d<0?-1:0)}function g(d){if(isNaN(d)||!isFinite(d))return b;if(d<0)return v(g(-d));let a=[],u=1;for(let p=0;d>=u;p++)a[p]=d/u|0,u*=4294967296;return new o(a,0)}function _(d,a){if(d.length==0)throw Error("number format error: empty string");if(a=a||10,a<2||36<a)throw Error("radix out of range: "+a);if(d.charAt(0)=="-")return v(_(d.substring(1),a));if(d.indexOf("-")>=0)throw Error('number format error: interior "-" character');let u=g(Math.pow(a,8)),p=b;for(let m=0;m<d.length;m+=8){var f=Math.min(8,d.length-m);let c=parseInt(d.substring(m,m+f),a);f<8?(f=g(Math.pow(a,f)),p=p.j(f).add(g(c))):(p=p.j(u),p=p.add(g(c)))}return p}var b=h(0),E=h(1),T=h(16777216);e=o.prototype,e.m=function(){if(R(this))return-v(this).m();let d=0,a=1;for(let u=0;u<this.g.length;u++){let p=this.i(u);d+=(p>=0?p:4294967296+p)*a,a*=4294967296}return d},e.toString=function(d){if(d=d||10,d<2||36<d)throw Error("radix out of range: "+d);if(A(this))return"0";if(R(this))return"-"+v(this).toString(d);let a=g(Math.pow(d,6));var u=this;let p="";for(;;){let f=x(u,a).g;u=V(u,f.j(a));let m=((u.g.length>0?u.g[0]:u.h)>>>0).toString(d);if(u=f,A(u))return m+p;for(;m.length<6;)m="0"+m;p=m+p}},e.i=function(d){return d<0?0:d<this.g.length?this.g[d]:this.h};function A(d){if(d.h!=0)return!1;for(let a=0;a<d.g.length;a++)if(d.g[a]!=0)return!1;return!0}function R(d){return d.h==-1}e.l=function(d){return d=V(this,d),R(d)?-1:A(d)?0:1};function v(d){let a=d.g.length,u=[];for(let p=0;p<a;p++)u[p]=~d.g[p];return new o(u,~d.h).add(E)}e.abs=function(){return R(this)?v(this):this},e.add=function(d){let a=Math.max(this.g.length,d.g.length),u=[],p=0;for(let f=0;f<=a;f++){let m=p+(this.i(f)&65535)+(d.i(f)&65535),c=(m>>>16)+(this.i(f)>>>16)+(d.i(f)>>>16);p=c>>>16,m&=65535,c&=65535,u[f]=c<<16|m}return new o(u,u[u.length-1]&-2147483648?-1:0)};function V(d,a){return d.add(v(a))}e.j=function(d){if(A(this)||A(d))return b;if(R(this))return R(d)?v(this).j(v(d)):v(v(this).j(d));if(R(d))return v(this.j(v(d)));if(this.l(T)<0&&d.l(T)<0)return g(this.m()*d.m());let a=this.g.length+d.g.length,u=[];for(var p=0;p<2*a;p++)u[p]=0;for(p=0;p<this.g.length;p++)for(let f=0;f<d.g.length;f++){let m=this.i(p)>>>16,c=this.i(p)&65535,yt=d.i(f)>>>16,Mr=d.i(f)&65535;u[2*p+2*f]+=c*Mr,j(u,2*p+2*f),u[2*p+2*f+1]+=m*Mr,j(u,2*p+2*f+1),u[2*p+2*f+1]+=c*yt,j(u,2*p+2*f+1),u[2*p+2*f+2]+=m*yt,j(u,2*p+2*f+2)}for(d=0;d<a;d++)u[d]=u[2*d+1]<<16|u[2*d];for(d=a;d<2*a;d++)u[d]=0;return new o(u,0)};function j(d,a){for(;(d[a]&65535)!=d[a];)d[a+1]+=d[a]>>>16,d[a]&=65535,a++}function P(d,a){this.g=d,this.h=a}function x(d,a){if(A(a))throw Error("division by zero");if(A(d))return new P(b,b);if(R(d))return a=x(v(d),a),new P(v(a.g),v(a.h));if(R(a))return a=x(d,v(a)),new P(v(a.g),a.h);if(d.g.length>30){if(R(d)||R(a))throw Error("slowDivide_ only works with positive integers.");for(var u=E,p=a;p.l(d)<=0;)u=ot(u),p=ot(p);var f=G(u,1),m=G(p,1);for(p=G(p,2),u=G(u,2);!A(p);){var c=m.add(p);c.l(d)<=0&&(f=f.add(u),m=c),p=G(p,1),u=G(u,1)}return a=V(d,f.j(a)),new P(f,a)}for(f=b;d.l(a)>=0;){for(u=Math.max(1,Math.floor(d.m()/a.m())),p=Math.ceil(Math.log(u)/Math.LN2),p=p<=48?1:Math.pow(2,p-48),m=g(u),c=m.j(a);R(c)||c.l(d)>0;)u-=p,m=g(u),c=m.j(a);A(m)&&(m=E),f=f.add(m),d=V(d,c)}return new P(f,d)}e.B=function(d){return x(this,d).h},e.and=function(d){let a=Math.max(this.g.length,d.g.length),u=[];for(let p=0;p<a;p++)u[p]=this.i(p)&d.i(p);return new o(u,this.h&d.h)},e.or=function(d){let a=Math.max(this.g.length,d.g.length),u=[];for(let p=0;p<a;p++)u[p]=this.i(p)|d.i(p);return new o(u,this.h|d.h)},e.xor=function(d){let a=Math.max(this.g.length,d.g.length),u=[];for(let p=0;p<a;p++)u[p]=this.i(p)^d.i(p);return new o(u,this.h^d.h)};function ot(d){let a=d.g.length+1,u=[];for(let p=0;p<a;p++)u[p]=d.i(p)<<1|d.i(p-1)>>>31;return new o(u,d.h)}function G(d,a){let u=a>>5;a%=32;let p=d.g.length-u,f=[];for(let m=0;m<p;m++)f[m]=a>0?d.i(m+u)>>>a|d.i(m+u+1)<<32-a:d.i(m+u);return new o(f,d.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qo=cs.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=g,o.fromString=_,kn=cs.Integer=o}).apply(typeof as<"u"?as:typeof self<"u"?self:typeof window<"u"?window:{});var M=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};M.UNAUTHENTICATED=new M(null),M.GOOGLE_CREDENTIALS=new M("google-credentials-uid"),M.FIRST_PARTY=new M("first-party-uid"),M.MOCK_USER=new M("mock-user");var Mt="12.19.0";function bs(e){Mt=e}var xt=new kt("@firebase/firestore");function Xt(e,...t){if(xt.logLevel<=N.DEBUG){let n=t.map(dr);xt.debug(`Firestore (${Mt}): ${e}`,...n)}}function Ye(e,...t){if(xt.logLevel<=N.ERROR){let n=t.map(dr);xt.error(`Firestore (${Mt}): ${e}`,...n)}}function Es(e,...t){if(xt.logLevel<=N.WARN){let n=t.map(dr);xt.warn(`Firestore (${Mt}): ${e}`,...n)}}function dr(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}function O(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,ws(e,r,n)}function ws(e,t,n){let r=`FIRESTORE (${Mt}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ye(r),new Error(r)}function W(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||ws(t,s,r)}function vs(e,t){return e}var y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},w=class extends Q{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Ne=class{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},On=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(M.UNAUTHENTICATED))}shutdown(){}},Vn=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},ke=class{constructor(t){this.auth=null,t.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(W(typeof t.accessToken=="string",42297,{Z:t}),new Ne(t.accessToken,new M(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}},Ln=class{constructor(t,n,r){this.ee=t,this.te=n,this.re=r,this.type="FirstParty",this.user=M.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);let t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}},Un=class{constructor(t,n,r){this.ee=t,this.te=n,this.re=r}getToken(){return Promise.resolve(new Ln(this.ee,this.te,this.re))}start(t,n){t.enqueueRetryable(()=>n(M.FIRST_PARTY))}shutdown(){}invalidateToken(){}},De=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Pe=class{constructor(t,n){this.se=n,this.appCheck=null,this.oe=null,Te(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),n.onInit(r=>{this.appCheck=r})}getToken(){return this.oe?Promise.resolve(new De(this.oe)):this.appCheck?this.appCheck.getToken().then(t=>t?(W(typeof t.token=="string",3470,{tokenResult:t}),new De(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}};var Mn=class{constructor(t,n,r,s,i,o,l,h,g,_,b,E,T){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=g,this.isUsingEmulator=_,this.apiKey=b,this._customHeaders=E,this.grpcFlowControlWindow=T}},Fn="(default)",xe=class e{constructor(t,n){this.projectId=t,this.database=n||Fn}static empty(){return new e("","")}get isDefaultDatabase(){return this.database===Fn}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}};function Ts(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new w(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xe(e.options.projectId,t)}function jo(e){let t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}var $n=class{static newId(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let s=jo(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}};function mt(e,t){return e<t?-1:e>t?1:0}function zo(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let s=e.charAt(r),i=t.charAt(r);if(s!==i)return Dn(s)===Dn(i)?mt(s,i):Dn(s)?1:-1}return mt(e.length,t.length)}var Ho=55296,Go=57343;function Dn(e){let t=e.charCodeAt(0);return t>=Ho&&t<=Go}function As(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}var us="__name__",Ce=class e{constructor(t,n,r){n===void 0?n=0:n>t.length&&O(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&O(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return e.comparator(this,t)===0}child(t){let n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){let r=Math.min(t.length,n.length);for(let s=0;s<r;s++){let i=e.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return mt(t.length,n.length)}static compareSegments(t,n){let r=e.isNumericId(t),s=e.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?e.extractNumericId(t).compare(e.extractNumericId(n)):zo(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return kn.fromString(t.substring(4,t.length-2))}},F=class e extends Ce{construct(t,n,r){return new e(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){let n=[];for(let r of t){if(r.indexOf("//")>=0)throw new w(y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new e(n)}static emptyPath(){return new e([])}},Wo=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Yt=class Dt extends Ce{construct(t,n,r){return new Dt(t,n,r)}static isValidIdentifier(t){return Wo.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===us}static keyField(){return new Dt([us])}static fromServerFormat(t){let n=[],r="",s=0,i=()=>{if(r.length===0)throw new w(y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;s<t.length;){let l=t[s];if(l==="\\"){if(s+1===t.length)throw new w(y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new w(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new w(y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dt(n)}static emptyPath(){return new Dt([])}};var rt=class e{constructor(t){this.path=t}static fromPath(t){return new e(F.fromString(t))}static fromName(t){return new e(F.fromString(t).popFirst(5))}static empty(){return new e(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return F.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new e(new F(t.slice()))}};function Ko(e,t,n){if(!n)throw new w(y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ls(e){if(!rt.isDocumentKey(e))throw new w(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Is(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function fr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{let t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":O(12329,{type:typeof e})}function Ze(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=fr(e);throw new w(y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Rs(e){let t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}var Re=null;function Qo(){return Re===null?Re=function(){return 268435456+Math.round(2147483648*Math.random())}():Re++,"0x"+Re.toString(16)}function Oe(e){return e===0&&1/e==-1/0}var Pn="RestConnection",Jo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"},Bn=class{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+t.host,this._e=`projects/${r}/databases/${s}`,this.ce=this.databaseId.database===Fn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}le(t,n,r,s,i){let o=Qo(),l=this.he(t,n.toUriEncodedString());Xt(Pn,`Sending RPC '${t}' ${o}:`,l,r);let h={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.fe(h,s,i);let{host:g}=new URL(l),_=Nt(g);return this.me(t,l,h,r,_).then(b=>(Xt(Pn,`Received RPC '${t}' ${o}: `,b),b),b=>{throw Es(Pn,`RPC '${t}' ${o} failed with error: `,b,"url: ",l,"request:",r),b})}de(t,n,r,s,i,o){return this.le(t,n,r,s,i)}fe(t,n,r){if(t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s),this.databaseInfo._customHeaders)for(let s of Object.keys(this.databaseInfo._customHeaders))t[s]=this.databaseInfo._customHeaders[s]}he(t,n){let r=Jo[t],s=`${this.ue}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}};var hs,I;function ds(e){if(e===void 0)return Ye("RPC_ERROR","HTTP error has no status"),y.UNKNOWN;switch(e){case 200:return y.OK;case 400:return y.FAILED_PRECONDITION;case 401:return y.UNAUTHENTICATED;case 403:return y.PERMISSION_DENIED;case 404:return y.NOT_FOUND;case 409:return y.ABORTED;case 416:return y.OUT_OF_RANGE;case 429:return y.RESOURCE_EXHAUSTED;case 499:return y.CANCELLED;case 500:return y.UNKNOWN;case 501:return y.UNIMPLEMENTED;case 503:return y.UNAVAILABLE;case 504:return y.DEADLINE_EXCEEDED;default:return e>=200&&e<300?y.OK:e>=400&&e<500?y.FAILED_PRECONDITION:e>=500&&e<600?y.INTERNAL:y.UNKNOWN}}(I=hs||(hs={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";var qn=class extends Bn{Ee(t,n){throw new Error("Not supported by FetchConnection")}async me(t,n,r,s,i){let o=JSON.stringify(s),l;try{let h={method:"POST",headers:r,body:o};i&&(h.credentials="include"),l=await fetch(n,h)}catch(h){let g=h,_=g?.message,b=g?.cause?String(g.cause):void 0,E=(_&&b?`${_} (${b})`:_??b)??g?.statusText??String(h);throw new w(ds(g?.status),`Request failed with error: ${E}`)}if(!l.ok){let h=await l.json();Array.isArray(h)&&(h=h[0]);let g=h?.error?.message;throw new w(ds(l.status),`Request failed with error: ${g??l.statusText}`)}return l.json()}};function fs(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ne(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}var jn=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var gt=class e{constructor(t){this.binaryString=t}static fromBase64String(t){let n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jn("Invalid base64 string: "+i):i}}(t);return new e(n)}static fromUint8Array(t){let n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new e(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return mt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}};gt.EMPTY_BYTE_STRING=new gt("");var Xo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(e){if(W(!!e,39018),typeof e=="string"){let t=0,n=Xo.exec(e);if(W(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function zn(e){return typeof e=="string"?gt.fromBase64String(e):gt.fromUint8Array(e)}function K(e,t){let n={typeString:e};return t&&(n.value=t),n}function re(e,t){if(!Is(e))throw new w(y.INVALID_ARGUMENT,"JSON must be an object");let n;for(let r in t)if(t[r]){let s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new w(y.INVALID_ARGUMENT,n);return!0}var ps=-62135596800,ms=1e6,L=class e{static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){let n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*ms);return new e(n,r)}static fromInstant(t){if(!t||typeof t.Te!="bigint")throw new w(y.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return e._fromEpochNanoseconds(t.Te)}static _fromEpochNanoseconds(t){let n,r;if(t>=0n)n=Number(t/1000000000n),r=Number(t%1000000000n);else{let s=t%1000000000n;s===0n?(n=Number(t/1000000000n),r=0):(n=Number(t/1000000000n-1n),r=Number(s+1000000000n))}return new e(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<ps)throw new w(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ms}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new w(y.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");let t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?mt(this.nanoseconds,t.nanoseconds):mt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(re(t,e._jsonSchema))return new e(t.seconds,t.nanoseconds)}valueOf(){let t=this.seconds-ps;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};L._jsonSchemaVersion="firestore/timestamp/1.0",L._jsonSchema={type:K("string",L._jsonSchemaVersion),seconds:K("number"),nanoseconds:K("number")};function Ss(e){return(e?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function Ns(e){let t=e.mapValue.fields.__previous_value__;return Ss(t)?Ns(t):t}function Hn(e){let t=Zt(e.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}var ks="__type__",Yo="__max__";var Ds="__vector__",Ps="value";function Gn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ss(e)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Yo}(e)?9007199254740991:function(n){return(n?.mapValue?.fields||{})[ks]?.stringValue===Ds}(e)?10:11:O(28295,{value:e})}function Wn(e,t,n){if(e===t)return!0;let r=Gn(e);if(r!==Gn(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hn(e).isEqual(Hn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;let l=Zt(i.timestampValue),h=Zt(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,o){return zn(i.bytesValue).isEqual(zn(o.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,o){return z(i.geoPointValue.latitude)===z(o.geoPointValue.latitude)&&z(i.geoPointValue.longitude)===z(o.geoPointValue.longitude)}(e,t);case 2:return function(i,o,l){if("integerValue"in i&&"integerValue"in o)return z(i.integerValue)===z(o.integerValue);let h,g;return!("doubleValue"in i)||!("doubleValue"in o)?!1:(h=z(i.doubleValue),g=z(o.doubleValue),h===g?Oe(h)===Oe(g):!!(l===void 0||l.Pe)&&isNaN(h)&&isNaN(g))}(e,t,n);case 9:return As(e.arrayValue.values||[],t.arrayValue.values||[],(s,i)=>Wn(s,i,n));case 10:case 11:return function(i,o,l){let h=i.mapValue.fields||{},g=o.mapValue.fields||{};if(fs(h)!==fs(g))return!1;for(let _ in h)if(h.hasOwnProperty(_)&&(g[_]===void 0||!Wn(h[_],g[_],l)))return!1;return!0}(e,t,n);default:return O(52216,{left:e})}}function xn(e){return!!e&&"mapValue"in e}function Qt(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return ne(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Qt(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qt(e.arrayValue.values[n]);return t}return{...e}}var q=class e{static fromTimestamp(t){return new e(t)}static min(){return new e(new L(0,0))}static max(){return new e(new L(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Kn=class e{constructor(t,n){this.comparator=t,this.root=n||et.EMPTY}insert(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,et.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){let s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){let t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pt(this.root,t,this.comparator,!0)}},Pt=class{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},et=class e{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??e.RED,this.left=s??e.EMPTY,this.right=i??e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new e(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this,i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});let t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}};et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new et(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Qn=class e{constructor(t){this.comparator=t,this.data=new Kn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){let r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){let s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){let n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ve(this.data.getIterator())}getIteratorFrom(t){return new Ve(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){let s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){let t=[];return this.forEach(n=>{t.push(n)}),t}toString(){let t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){let n=new e(this.comparator);return n.data=t,n}},Ve=class{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Le=class e{constructor(t){this.fields=t,t.sort(Yt.comparator)}static empty(){return new e([])}unionWith(t){let n=new Qn(Yt.comparator);for(let r of this.fields)n=n.add(r);for(let r of t)n=n.add(r);return new e(n.toArray())}covers(t){for(let n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return As(this.fields,t.fields,(n,r)=>n.isEqual(r))}};var Y=class e{constructor(t){this.value=t}static empty(){return new e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!xn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qt(n)}setAll(t){let n=Yt.emptyPath(),r={},s=[];t.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){let h=this.getFieldsMap(n);this.applyChanges(h,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Qt(o):s.push(l.lastSegment())});let i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){let n=this.field(t.popLast());xn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Wn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];xn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){ne(n,(s,i)=>t[s]=i);for(let s of r)delete t[s]}clone(){return new e(Qt(this.value))}};var Ue=class e{constructor(t,n,r,s,i,o,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(t){return new e(t,0,q.min(),q.min(),q.min(),Y.empty(),0)}static newFoundDocument(t,n,r,s){return new e(t,1,n,q.min(),r,s,0)}static newNoDocument(t,n){return new e(t,2,n,q.min(),q.min(),Y.empty(),0)}static newUnknownDocument(t,n){return new e(t,3,n,q.min(),q.min(),Y.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Y.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Y.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Jn=class{constructor(t,n=null,r=[],s=[],i=null,o="F",l=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=h,this.pe=null,this.ye=null,this.we=null,this.startAt,this.endAt}};function xs(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oe(t)?"-0":t}}function Zo(e,t,n){return function(s){return typeof s=="number"&&Number.isInteger(s)&&!Oe(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}(t)?function(s){return{integerValue:""+s}}(t):xs(e,t)}var Ct=class{constructor(){this._=void 0}},Me=class extends Ct{},Xn=class extends Ct{constructor(t){super(),this.elements=t}},Yn=class extends Ct{constructor(t){super(),this.elements=t}},te=class extends Ct{constructor(t,n){super(),this.serializer=t,this.ge=n}},Zn=class extends te{},tr=class extends te{},er=class extends te{};var nr=class{constructor(t,n){this.field=t,this.transform=n}},Fe=class e{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}},Ot=class{},rr=class extends Ot{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}},$e=class extends Ot{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}},Be=class extends Ot{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},qe=class extends Ot{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var sr=class{constructor(t,n){this.databaseId=t,this.useProto3Json=n}};function Se(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ta(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ea(e,t){return Se(e,t.toTimestamp())}function Cn(e){return W(!!e,49232),q.fromTimestamp(function(n){let r=Zt(n);return new L(r.seconds,r.nanos)}(e))}function Cs(e,t){return ir(e,t).canonicalString()}function ir(e,t){let n=function(s){return new F(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function je(e,t){return Cs(e.databaseId,t.path)}function gs(e,t){let n=function(s){let i=F.fromString(s);return W(Os(i),10190,{key:i.toString()}),i}(t);if(n.get(1)!==e.databaseId.projectId)throw new w(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rt(function(s){return W(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}(n))}function _s(e,t,n){return{name:je(e,t),fields:n.value.mapValue.fields}}function na(e,t){return"found"in t?function(r,s){W(!!s.found,43571),s.found.name,s.found.updateTime;let i=gs(r,s.found.name),o=Cn(s.found.updateTime),l=s.found.createTime?Cn(s.found.createTime):q.min(),h=new Y({mapValue:{fields:s.found.fields}});return Ue.newFoundDocument(i,o,l,h)}(e,t):"missing"in t?function(r,s){W(!!s.missing,3894),W(!!s.readTime,22933);let i=gs(r,s.missing),o=Cn(s.readTime);return Ue.newNoDocument(i,o)}(e,t):O(7234,{result:t})}function ra(e,t){let n;if(t instanceof rr)n={update:_s(e,t.key,t.value)};else if(t instanceof Be)n={delete:je(e,t.key)};else if(t instanceof $e)n={update:_s(e,t.key,t.data),updateMask:sa(t.fieldMask)};else{if(!(t instanceof qe))return O(16599,{Fe:t.type});n={verify:je(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){let l=o.transform;if(l instanceof Me)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zn)return{fieldPath:o.field.canonicalString(),increment:l.ge};if(l instanceof tr)return{fieldPath:o.field.canonicalString(),minimum:l.ge};if(l instanceof er)return{fieldPath:o.field.canonicalString(),maximum:l.ge};throw O(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ea(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)}(e,t.precondition)),n}function sa(e){let t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Os(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function Vs(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}function pr(e){return new sr(e,!0)}var or=class{},ar=class extends or{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.be=!1}De(){if(this.be)throw new w(y.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,n,r,s){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.le(t,ir(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(y.UNKNOWN,i.toString())})}de(t,n,r,s,i){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.de(t,ir(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new w(y.UNKNOWN,o.toString())})}terminate(){this.be=!0,this.connection.terminate()}};async function Ls(e,t){let n=vs(e),r={writes:t.map(s=>ra(n.serializer,s))};await n.le("Commit",n.serializer.databaseId,F.emptyPath(),r)}async function Us(e,t){let n=vs(e),r={documents:t.map(l=>je(n.serializer,l))},s=await n.de("BatchGetDocuments",n.serializer.databaseId,F.emptyPath(),r,t.length),i=new Map;s.forEach(l=>{let h=na(n.serializer,l);i.set(h.key.toString(),h)});let o=[];return t.forEach(l=>{let h=i.get(l.toString());W(!!h,55234,{key:l}),o.push(h)}),o}var Ms="ComponentProvider",Jt=new Map;function mr(e){if(e._terminated)throw new w(y.FAILED_PRECONDITION,"The client has already been terminated.");if(!Jt.has(e)){Xt(Ms,"Initializing Datastore");let t=function(i){return new qn(i)}(function(i,o,l,h,g){return new Mn(i,o,l,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Rs(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator,h,g._customHeaders,g.grpcFlowControlWindow)}(e._databaseId,e.app.options.appId||"",e._persistenceKey,e.app.options.apiKey,e._freezeSettings())),n=pr(e._databaseId),r=function(i,o,l,h){return new ar(i,o,l,h)}(e._authCredentials,e._appCheckCredentials,t,n);Jt.set(e,r)}return Jt.get(e)}var ia=1048576,Fs="firestore.googleapis.com",ys=!0,ze=class{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new w(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fs,this.ssl=ys}else this.host=t.host,this.ssl=t.ssl??ys;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ia)throw new w(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if(function(r,s,i,o){if(s===!0&&o===!0)throw new w(y.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rs(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new w(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new w(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new w(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new w(y.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;let i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(let l of i)if(r[l]!==s[l])return!1;return!0}(this._customHeaders,t._customHeaders)}},Vt=class{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ze({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new w(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new w(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ze(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new On;switch(r.type){case"firstParty":return new Un(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let r=Jt.get(n);r&&(Xt(Ms,"Removing Datastore"),Jt.delete(n),r.terminate())}(this),Promise.resolve()}};function gr(e,t){let n=typeof e=="object"?e:Ie(),r=typeof e=="string"?e:t||"(default)",s=ve(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){let i=ge("firestore");i&&$s(s,...i)}return s}function $s(e,t,n,r={}){e=Ze(e,Vt);let s=Nt(t),i=e._getSettings(),o={...i,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&ye(`https://${l}`),i.host!==Fs&&i.host!==l&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let h={...i,host:l,ssl:s,emulatorOptions:r};if(!bt(h,o)&&(e._setSettings(h),r.mockUserToken)){let g,_;if(typeof r.mockUserToken=="string")g=r.mockUserToken,_=M.MOCK_USER;else{g=_e(r.mockUserToken,e._app?.options.projectId);let b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new w(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new M(b)}e._authCredentials=new Vn(new Ne(g,_))}}var He=class e{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new e(this.firestore,t,this._query)}},$=class e{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}toJSON(){return{type:e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(re(n,e._jsonSchema))return new e(t,r||null,new rt(F.fromString(n.referencePath)))}};$._jsonSchemaVersion="firestore/documentReference/1.0",$._jsonSchema={type:K("string",$._jsonSchemaVersion),referencePath:K("string")};var Lt=class e extends He{constructor(t,n,r){super(t,n,function(i){return new Jn(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new $(this.firestore,null,new rt(t))}withConverter(t){return new e(this.firestore,t,this._path)}};function tn(e,t,...n){if(e=B(e),arguments.length===1&&(t=$n.newId()),Ko("doc","path",t),e instanceof Vt){let r=F.fromString(t,...n);return ls(r),new $(e,null,new rt(r))}{if(!(e instanceof $||e instanceof Lt))throw new w(y.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(F.fromString(t,...n));return ls(r),new $(e.firestore,e instanceof Lt?e.converter:null,new rt(r))}}var ut=class e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new e(gt.fromBase64String(t))}catch(n){throw new w(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new e(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(re(t,e._jsonSchema))return e.fromBase64String(t.bytes)}};ut._jsonSchemaVersion="firestore/bytes/1.0",ut._jsonSchema={type:K("string",ut._jsonSchemaVersion),bytes:K("string")};var Ut=class{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};var vt=class{constructor(t){this._methodName=t}};var lt=class e{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return mt(this._lat,t._lat)||mt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:e._jsonSchemaVersion}}static fromJSON(t){if(re(t,e._jsonSchema))return new e(t.latitude,t.longitude)}};lt._jsonSchemaVersion="firestore/geoPoint/1.0",lt._jsonSchema={type:K("string",lt._jsonSchemaVersion),latitude:K("number"),longitude:K("number")};var nt=class e{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(re(t,e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new e(t.vectorValues);throw new w(y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};nt._jsonSchemaVersion="firestore/vectorValue/1.0",nt._jsonSchema={type:K("string",nt._jsonSchemaVersion),vectorValues:K("object")};var oa=/^__.*__$/;var Ge=class{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new $e(t,this.data,this.fieldMask,n,this.fieldTransforms)}};function Bs(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:e})}}var cr=class e{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new e({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){let n=this.path?.child(t),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){let n=this.path?.child(t),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Qe(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Bs(this.dataSource)&&oa.test(t))throw this.createError('Document fields cannot begin and end with "__"')}},ur=class{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||pr(t)}createContext(t,n,r,s=!1){return new cr({dataSource:t,methodName:n,targetDoc:r,path:Yt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function qs(e){let t=e._freezeSettings(),n=pr(e._databaseId);return new ur(e._databaseId,!!t.ignoreUndefinedProperties,n)}var We=class e extends vt{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof e}};var lr=class e extends vt{_toFieldTransform(t){return new nr(t.path,new Me)}isEqual(t){return t instanceof e}};function js(e,t,n,r){let s=e.createContext(1,t,n);Ws("Data must be an object, but it was:",s,r);let i=[],o=Y.empty();ne(r,(h,g)=>{let _=Ks(t,h,n);g=B(g);let b=s.childContextForFieldPath(_);if(g instanceof We)i.push(_);else{let E=en(g,b);E!=null&&(i.push(_),o.set(_,E))}});let l=new Le(i);return new Ge(o,l,s.fieldTransforms)}function zs(e,t,n,r,s,i){let o=e.createContext(1,t,n),l=[Ke(t,r,n)],h=[s];if(i.length%2!=0)throw new w(y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(Ke(t,i[E])),h.push(i[E+1]);let g=[],_=Y.empty();for(let E=l.length-1;E>=0;--E)if(!ua(g,l[E])){let T=l[E],A=h[E];A=B(A);let R=o.childContextForFieldPath(T);if(A instanceof We)g.push(T);else{let v=en(A,R);v!=null&&(g.push(T),_.set(T,v))}}let b=new Le(g);return new Ge(_,b,o.fieldTransforms)}function en(e,t,n){if(Gs(e=B(e)))return Ws("Unsupported field value:",t,e),aa(e,t);if(e instanceof vt)return function(s,i){if(!Bs(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);let o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(s,i){let o=[],l=0;for(let h of s){let g=en(h,i.childContextForArray(l));g==null&&(g={nullValue:"NULL_VALUE"}),o.push(g),l++}return{arrayValue:{values:o}}}(e,t)}return function(s,i,o){if((s=B(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Zo(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){let l=L.fromDate(s);return{timestampValue:Se(i.serializer,l)}}if(s instanceof L){let l=new L(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Se(i.serializer,l)}}if(Hs(s)){let l=L.fromInstant(s),h=new L(l.seconds,1e3*Math.floor(l.nanoseconds/1e3));return{timestampValue:Se(i.serializer,h)}}if(s instanceof lt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ut)return{bytesValue:ta(i.serializer,s._byteString)};if(s instanceof $){let l=i.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw i.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Cs(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof nt)return function(h,g){let _=h instanceof nt?h.toArray():h;return{mapValue:{fields:{[ks]:{stringValue:Ds},[Ps]:{arrayValue:{values:_.map(E=>{if(typeof E!="number")throw g.createError("VectorValues must only contain numeric values.");return xs(g.serializer,E)})}}}}}}(s,i);if(Vs(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${fr(s)}`)}(e,t)}function aa(e,t){let n={};return function(s){for(let i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ne(e,(r,s)=>{let i=en(s,t.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hs(e){if(typeof e!="object"||e===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&e instanceof Temporal.Instant)return!0;let t=e;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.Te=="bigint"}function Gs(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof L||e instanceof lt||e instanceof ut||e instanceof $||e instanceof vt||e instanceof nt||Hs(e)||Vs(e))}function Ws(e,t,n){if(!Gs(n)||!Is(n)){let r=fr(n);throw r==="an object"?t.createError(e+" a custom object"):t.createError(e+" "+r)}}function Ke(e,t,n){if((t=B(t))instanceof Ut)return t._internalPath;if(typeof t=="string")return Ks(e,t);throw Qe("Field path arguments must be of type string or ",e,!1,void 0,n)}var ca=new RegExp("[~\\*/\\[\\]]");function Ks(e,t,n){if(t.search(ca)>=0)throw Qe(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ut(...t.split("."))._internalPath}catch{throw Qe(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Qe(e,t,n,r,s){let i=r&&!r.isEmpty(),o=s!==void 0,l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(i||o)&&(h+=" (found",i&&(h+=` in field ${r}`),o&&(h+=` in document ${s}`),h+=")"),new w(y.INVALID_ARGUMENT,l+e+h)}function ua(e,t){return e.some(n=>n.isEqual(t))}var ee=class{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let t=new Je(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){let n=this._document.data.field(Ke("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}},Je=class extends ee{data(){return super.data()}};var hr=class{convertValue(t,n="none"){switch(Gn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(zn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){let r={};return ne(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){let n=t.fields?.[Ps].arrayValue?.values?.map(r=>z(r.doubleValue));return new nt(n)}convertGeoPoint(t){return new lt(z(t.latitude),z(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":let r=Ns(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hn(t));default:return null}}convertTimestamp(t){let n=Zt(t);return new L(n.seconds,n.nanos)}convertDocumentKey(t,n){let r=F.fromString(t);W(Os(r),9688,{name:t});let s=new xe(r.get(1),r.get(3)),i=new rt(r.popFirst(5));return s.isEqual(n)||Ye(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}};var Xe=class extends hr{constructor(t){super(),this.firestore=t}convertBytes(t){return new ut(t)}convertReference(t){let n=this.convertDocumentKey(t,this.firestore._databaseId);return new $(this.firestore,null,n)}};function nn(e){let t=mr((e=Ze(e,$)).firestore),n=new Xe(e.firestore);return Us(t,[e._key]).then(r=>{W(r.length===1,15618);let s=r[0];return new ee(e.firestore,n,e._key,s.isFoundDocument()?s:null,e.converter)})}function Ft(e,t,n,...r){let s=qs((e=Ze(e,$)).firestore),i;return i=typeof(t=B(t))=="string"||t instanceof Ut?zs(s,"updateDoc",e._key,t,n,r):js(s,"updateDoc",e._key,t),Ls(mr(e.firestore),[i.toMutation(e._key,Fe.exists(!0))])}function Tt(){return new lr("serverTimestamp")}var Qs="4.17.2";(function(){bs(`${Ae}_lite`),wt(new J("firestore/lite",(t,{instanceIdentifier:n,options:r})=>{let s=t.getProvider("app").getImmediate(),i=new Vt(new ke(t.getProvider("auth-internal")),new Pe(s,t.getProvider("app-check-internal")),Ts(s,n),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),X("firestore-lite",Qs,""),X("firestore-lite",Qs,"esm2020")})();var ni="firebasestorage.googleapis.com",ri="storageBucket",la=2*60*1e3,ha=10*60*1e3,da=1e3;var D=class e extends Q{constructor(t,n,r=0){super(_r(t),`Firebase Storage: ${n} (${_r(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,e.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return _r(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},k;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(k||(k={}));function _r(e){return"storage/"+e}function Rr(){let e="An unknown error occurred, please check the error payload for server response.";return new D(k.UNKNOWN,e)}function fa(e){return new D(k.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function pa(e){return new D(k.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ma(){let e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(k.UNAUTHENTICATED,e)}function ga(){return new D(k.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _a(e){return new D(k.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function si(){return new D(k.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ii(){return new D(k.CANCELED,"User canceled the upload/download.")}function ya(e){return new D(k.INVALID_URL,"Invalid URL '"+e+"'.")}function ba(e){return new D(k.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ea(){return new D(k.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ri+"' property when initializing the app?")}function oi(){return new D(k.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wa(){return new D(k.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function va(){return new D(k.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ta(e){return new D(k.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function br(e){return new D(k.INVALID_ARGUMENT,e)}function ai(){return new D(k.APP_DELETED,"The Firebase app was deleted.")}function Aa(e){return new D(k.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ie(e,t){return new D(k.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function se(e){throw new D(k.INTERNAL_ERROR,"Internal error: "+e)}var Z=class e{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=e.makeFromUrl(t,n)}catch{return new e(t,"")}if(r.path==="")return r;throw ba(t)}static makeFromUrl(t,n){let r=null,s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}let o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),h={bucket:1,path:3};function g(x){x.path_=decodeURIComponent(x.path)}let _="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",T=new RegExp(`^https?://${b}/${_}/b/${s}/o${E}`,"i"),A={bucket:1,path:3},R=n===ni?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",V=new RegExp(`^https?://${R}/${s}/${v}`,"i"),P=[{regex:l,indices:h,postModify:i},{regex:T,indices:A,postModify:g},{regex:V,indices:{bucket:1,path:2},postModify:g}];for(let x=0;x<P.length;x++){let ot=P[x],G=ot.regex.exec(t);if(G){let d=G[ot.indices.bucket],a=G[ot.indices.path];a||(a=""),r=new e(d,a),ot.postModify(r);break}}if(r==null)throw ya(t);return r}},Er=class{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}};function Ia(e,t,n){let r=1,s=null,i=null,o=!1,l=0;function h(){return l===2}let g=!1;function _(...v){g||(g=!0,t.apply(null,v))}function b(v){s=setTimeout(()=>{s=null,e(T,h())},v)}function E(){i&&clearTimeout(i)}function T(v,...V){if(g){E();return}if(v){E(),_.call(null,v,...V);return}if(h()||o){E(),_.call(null,v,...V);return}r<64&&(r*=2);let P;l===1?(l=2,P=0):P=(r+Math.random())*1e3,b(P)}let A=!1;function R(v){A||(A=!0,E(),!g&&(s!==null?(v||(l=2),clearTimeout(s),b(0)):v||(l=1)))}return b(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function Ra(e){e(!1)}function Sa(e){return e!==void 0}function Na(e){return typeof e=="function"}function ka(e){return typeof e=="object"&&!Array.isArray(e)}function an(e){return typeof e=="string"||e instanceof String}function Js(e){return Sr()&&e instanceof Blob}function Sr(){return typeof Blob<"u"}function Xs(e,t,n,r){if(r<t)throw br(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw br(`Invalid value for '${e}'. Expected ${n} or less.`)}function zt(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function ci(e){let t=encodeURIComponent,n="?";for(let r in e)if(e.hasOwnProperty(r)){let s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var It;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(It||(It={}));function ui(e,t){let n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}var wr=class{constructor(t,n,r,s,i,o,l,h,g,_,b,E=!0,T=!1){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=h,this.timeout_=g,this.progressCallback_=_,this.connectionFactory_=b,this.retry=E,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,R)=>{this.resolve_=A,this.reject_=R,this.start_()})}start_(){let t=(r,s)=>{if(s){r(!1,new Bt(!1,null,!0));return}let i=this.connectionFactory_();this.pendingConnection_=i;let o=l=>{let h=l.loaded,g=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,g)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;let l=i.getErrorCode()===It.NO_ERROR,h=i.getStatus();if(!l||ui(h,this.additionalRetryCodes_)&&this.retry){let _=i.getErrorCode()===It.ABORT;r(!1,new Bt(!1,null,_));return}let g=this.successCodes_.indexOf(h)!==-1;r(!0,new Bt(g,i))})},n=(r,s)=>{let i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{let h=this.callback_(l,l.getResponse());Sa(h)?i(h):i()}catch(h){o(h)}else if(l!==null){let h=Rr();h.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,h)):o(h)}else if(s.canceled){let h=this.appDelete_?ai():ii();o(h)}else{let h=si();o(h)}};this.canceled_?n(!1,new Bt(!1,null,!0)):this.backoffId_=Ia(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ra(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},Bt=class{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}};function Da(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Pa(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function xa(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Ca(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Oa(e,t,n,r,s,i,o=!0,l=!1){let h=ci(e.urlParams),g=e.url+h,_=Object.assign({},e.headers);return xa(_,t),Da(_,n),Pa(_,i),Ca(_,r),new wr(g,e.method,_,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o,l)}function Va(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function La(...e){let t=Va();if(t!==void 0){let n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Sr())return new Blob(e);throw new D(k.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ua(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}function Ma(e){if(typeof atob>"u")throw Ta("base-64");return atob(e)}var st={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},oe=class{constructor(t,n){this.data=t,this.contentType=n||null}};function Fa(e,t){switch(e){case st.RAW:return new oe(li(t));case st.BASE64:case st.BASE64URL:return new oe(hi(e,t));case st.DATA_URL:return new oe(Ba(t),qa(t))}throw Rr()}function li(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{let i=r,o=e.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function $a(e){let t;try{t=decodeURIComponent(e)}catch{throw ie(st.DATA_URL,"Malformed data URL.")}return li(t)}function hi(e,t){switch(e){case st.BASE64:{let s=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(s||i)throw ie(e,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case st.BASE64URL:{let s=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(s||i)throw ie(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ma(t)}catch(s){throw s.message.includes("polyfill")?s:ie(e,"Invalid character found")}let r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}var sn=class{constructor(t){this.base64=!1,this.contentType=null;let n=t.match(/^data:([^,]+)?,/);if(n===null)throw ie(st.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=n[1]||null;r!=null&&(this.base64=ja(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}};function Ba(e){let t=new sn(e);return t.base64?hi(st.BASE64,t.rest):$a(t.rest)}function qa(e){return new sn(e).contentType}function ja(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}var on=class e{constructor(t,n){let r=0,s="";Js(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,n){if(Js(this.data_)){let r=this.data_,s=Ua(r,t,n);return s===null?null:new e(s)}else{let r=new Uint8Array(this.data_.buffer,t,n-t);return new e(r,!0)}}static getBlob(...t){if(Sr()){let n=t.map(r=>r instanceof e?r.data_:r);return new e(La.apply(null,n))}else{let n=t.map(o=>an(o)?Fa(st.RAW,o).data:o.data_),r=0;n.forEach(o=>{r+=o.byteLength});let s=new Uint8Array(r),i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new e(s,!0)}}uploadData(){return this.data_}};function di(e){let t;try{t=JSON.parse(e)}catch{return null}return ka(t)?t:null}function za(e){if(e.length===0)return null;let t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ha(e,t){let n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function fi(e){let t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}function Ga(e,t){return t}var U=class{constructor(t,n,r,s){this.server=t,this.local=n||t,this.writable=!!r,this.xform=s||Ga}},rn=null;function Wa(e){return!an(e)||e.length<2?e:fi(e)}function pi(){if(rn)return rn;let e=[];e.push(new U("bucket")),e.push(new U("generation")),e.push(new U("metageneration")),e.push(new U("name","fullPath",!0));function t(i,o){return Wa(o)}let n=new U("name");n.xform=t,e.push(n);function r(i,o){return o!==void 0?Number(o):o}let s=new U("size");return s.xform=r,e.push(s),e.push(new U("timeCreated")),e.push(new U("updated")),e.push(new U("md5Hash",null,!0)),e.push(new U("cacheControl",null,!0)),e.push(new U("contentDisposition",null,!0)),e.push(new U("contentEncoding",null,!0)),e.push(new U("contentLanguage",null,!0)),e.push(new U("contentType",null,!0)),e.push(new U("metadata","customMetadata",!0)),rn=e,rn}function Ka(e,t){function n(){let r=e.bucket,s=e.fullPath,i=new Z(r,s);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Qa(e,t,n){let r={};r.type="file";let s=n.length;for(let i=0;i<s;i++){let o=n[i];r[o.local]=o.xform(r,t[o.server])}return Ka(r,e),r}function mi(e,t,n){let r=di(t);return r===null?null:Qa(e,r,n)}function Ja(e,t,n,r){let s=di(t);if(s===null||!an(s.downloadTokens))return null;let i=s.downloadTokens;if(i.length===0)return null;let o=encodeURIComponent;return i.split(",").map(g=>{let _=e.bucket,b=e.fullPath,E="/b/"+o(_)+"/o/"+o(b),T=zt(E,n,r),A=ci({alt:"media",token:g});return T+A})[0]}function gi(e,t){let n={},r=t.length;for(let s=0;s<r;s++){let i=t[s];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}var dt=class{constructor(t,n,r,s){this.url=t,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function ht(e){if(!e)throw Rr()}function Nr(e,t){function n(r,s){let i=mi(e,s,t);return ht(i!==null),i}return n}function Xa(e,t){function n(r,s){let i=mi(e,s,t);return ht(i!==null),Ja(i,s,e.host,e._protocol)}return n}function ce(e){function t(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=ga():s=ma():n.getStatus()===402?s=pa(e.bucket):n.getStatus()===403?s=_a(e.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return t}function kr(e){let t=ce(e);function n(r,s){let i=t(r,s);return r.getStatus()===404&&(i=fa(e.path)),i.serverResponse=s.serverResponse,i}return n}function Ya(e,t,n){let r=t.fullServerUrl(),s=zt(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,l=new dt(s,i,Nr(e,n),o);return l.errorHandler=kr(t),l}function Za(e,t,n){let r=t.fullServerUrl(),s=zt(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,l=new dt(s,i,Xa(e,n),o);return l.errorHandler=kr(t),l}function tc(e,t){let n=t.fullServerUrl(),r=zt(n,e.host,e._protocol),s="DELETE",i=e.maxOperationRetryTime;function o(h,g){}let l=new dt(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=kr(t),l}function ec(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function _i(e,t,n){let r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=ec(null,t)),r}function nc(e,t,n,r,s){let i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let P="";for(let x=0;x<2;x++)P=P+Math.random().toString().slice(2);return P}let h=l();o["Content-Type"]="multipart/related; boundary="+h;let g=_i(t,r,s),_=gi(g,n),b="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+h+`\r
Content-Type: `+g.contentType+`\r
\r
`,E=`\r
--`+h+"--",T=on.getBlob(b,r,E);if(T===null)throw oi();let A={name:g.fullPath},R=zt(i,e.host,e._protocol),v="POST",V=e.maxUploadRetryTime,j=new dt(R,v,Nr(e,n),V);return j.urlParams=A,j.headers=o,j.body=T.uploadData(),j.errorHandler=ce(t),j}var qt=class{constructor(t,n,r,s){this.current=t,this.total=n,this.finalized=!!r,this.metadata=s||null}};function Dr(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{ht(!1)}return ht(!!n&&(t||["active"]).indexOf(n)!==-1),n}function rc(e,t,n,r,s){let i=t.bucketOnlyServerUrl(),o=_i(t,r,s),l={name:o.fullPath},h=zt(i,e.host,e._protocol),g="POST",_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},b=gi(o,n),E=e.maxUploadRetryTime;function T(R){Dr(R);let v;try{v=R.getResponseHeader("X-Goog-Upload-URL")}catch{ht(!1)}return ht(an(v)),v}let A=new dt(h,g,T,E);return A.urlParams=l,A.headers=_,A.body=b,A.errorHandler=ce(t),A}function sc(e,t,n,r){let s={"X-Goog-Upload-Command":"query"};function i(g){let _=Dr(g,["active","final"]),b=null;try{b=g.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ht(!1)}b||ht(!1);let E=Number(b);return ht(!isNaN(E)),new qt(E,r.size(),_==="final")}let o="POST",l=e.maxUploadRetryTime,h=new dt(n,o,i,l);return h.headers=s,h.errorHandler=ce(t),h}var Ys=256*1024;function ic(e,t,n,r,s,i,o,l){let h=new qt(0,0);if(o?(h.current=o.current,h.total=o.total):(h.current=0,h.total=r.size()),r.size()!==h.total)throw wa();let g=h.total-h.current,_=g;s>0&&(_=Math.min(_,s));let b=h.current,E=b+_,T="";_===0?T="finalize":g===_?T="upload, finalize":T="upload";let A={"X-Goog-Upload-Command":T,"X-Goog-Upload-Offset":`${h.current}`},R=r.slice(b,E);if(R===null)throw oi();function v(x,ot){let G=Dr(x,["active","final"]),d=h.current+_,a=r.size(),u;return G==="final"?u=Nr(t,i)(x,ot):u=null,new qt(d,a,G==="final",u)}let V="POST",j=t.maxUploadRetryTime,P=new dt(n,V,v,j);return P.headers=A,P.body=R.uploadData(),P.progressCallback=l||null,P.errorHandler=ce(e),P}var H={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function yr(e){switch(e){case"running":case"pausing":case"canceling":return H.RUNNING;case"paused":return H.PAUSED;case"success":return H.SUCCESS;case"canceled":return H.CANCELED;case"error":return H.ERROR;default:return H.ERROR}}var vr=class{constructor(t,n,r){if(Na(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{let i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}};function $t(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}var Tr=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=It.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=It.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=It.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,s,i){if(this.sent_)throw se("cannot .send() more than once");if(Nt(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(let o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw se("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw se("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw se("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw se("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}},Ar=class extends Tr{initXhr(){this.xhr_.responseType="text"}};function At(){return new Ar}var Ir=class{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=pi(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(k.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let i=this.isExponentialBackoffExpired();if(ui(s.status,[]))if(i)s=si();else{this.sleepTime=Math.max(this.sleepTime*2,da),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(k.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){let t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{let r=rc(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,At,t,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let t=this._uploadUrl;this._resolveToken((n,r)=>{let s=sc(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(s,At,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let t=Ys*this._chunkMultiplier,n=new qt(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=ic(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}let l=this._ref.storage._makeRequest(o,At,s,i,!1);this._request=l,l.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ys*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{let r=Ya(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,At,t,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{let r=nc(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,At,t,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){let n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=ii(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){let t=yr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,s){let i=new vr(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){let n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(yr(this._state)){case H.SUCCESS:$t(this._resolve.bind(null,this.snapshot))();break;case H.CANCELED:case H.ERROR:let n=this._reject;$t(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(yr(this._state)){case H.RUNNING:case H.PAUSED:t.next&&$t(t.next.bind(t,this.snapshot))();break;case H.SUCCESS:t.complete&&$t(t.complete.bind(t))();break;case H.CANCELED:case H.ERROR:t.error&&$t(t.error.bind(t,this._error))();break;default:t.error&&$t(t.error.bind(t,this._error))()}}resume(){let t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){let t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){let t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}};var jt=class e{constructor(t,n){this._service=t,n instanceof Z?this._location=n:this._location=Z.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new e(t,n)}get root(){let t=new Z(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fi(this._location.path)}get storage(){return this._service}get parent(){let t=za(this._location.path);if(t===null)return null;let n=new Z(this._location.bucket,t);return new e(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Aa(t)}};function oc(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Ir(e,new on(t),n)}function ac(e){e._throwIfRoot("getDownloadURL");let t=Za(e.storage,e._location,pi());return e.storage.makeRequestWithTokens(t,At).then(n=>{if(n===null)throw va();return n})}function cc(e){e._throwIfRoot("deleteObject");let t=tc(e.storage,e._location);return e.storage.makeRequestWithTokens(t,At)}function uc(e,t){let n=Ha(e._location.path,t),r=new Z(e._location.bucket,n);return new jt(e.storage,r)}function lc(e){return/^[A-Za-z]+:\/\//.test(e)}function hc(e,t){return new jt(e,t)}function yi(e,t){if(e instanceof ae){let n=e;if(n._bucket==null)throw Ea();let r=new jt(n,n._bucket);return t!=null?yi(r,t):r}else return t!==void 0?uc(e,t):e}function dc(e,t){if(t&&lc(t)){if(e instanceof ae)return hc(e,t);throw br("To use ref(service, url), the first argument must be a Storage instance.")}else return yi(e,t)}function Zs(e,t){let n=t?.[ri];return n==null?null:Z.makeFromBucketSpec(n,e)}function fc(e,t,n,r={}){e.host=`${t}:${n}`;let s=Nt(t);s&&ye(`https://${e.host}/b`),e._isUsingEmulator=!0,e._protocol=s?"https":"http";let{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:_e(i,e.app.options.projectId))}var ae=class{constructor(t,n,r,s,i,o=!1){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=ni,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=la,this._maxUploadRetryTime=ha,this._requests=new Set,s!=null?this._bucket=Z.makeFromBucketSpec(s,this._host):this._bucket=Zs(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Z.makeFromBucketSpec(this._url,t):this._bucket=Zs(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Xs("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Xs("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let t=this._authProvider.getImmediate({optional:!0});if(t){let n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new jt(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new Er(ai());{let o=Oa(t,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){let[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}},ti="@firebase/storage",ei="0.14.5";var bi="storage";function Ei(e,t,n){return e=B(e),oc(e,t,n)}function wi(e){return e=B(e),ac(e)}function vi(e){return e=B(e),cc(e)}function cn(e,t){return e=B(e),dc(e,t)}function Ti(e=Ie(),t){e=B(e);let r=ve(e,bi).getImmediate({identifier:t}),s=ge("storage");return s&&pc(r,...s),r}function pc(e,t,n,r={}){fc(e,t,n,r)}function mc(e,{instanceIdentifier:t}){let n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new ae(n,r,s,t,Ae)}function gc(){wt(new J(bi,mc,"PUBLIC").setMultipleInstances(!0)),X(ti,ei,""),X(ti,ei,"esm2020")}gc();var _c="firebase",yc="12.19.0";X(_c,yc,"app");var bc={apiKey:"AIzaSyBqU09QQwVxfxZFDgcuMnvOCo0oMZ5f5a0",authDomain:"invitaciones-foto-graciela.firebaseapp.com",projectId:"invitaciones-foto-graciela",storageBucket:"invitaciones-foto-graciela.firebasestorage.app",messagingSenderId:"557591079202",appId:"1:557591079202:web:f3612d46e649392cae5d7b"},Ai=Nn(bc),Pr=gr(Ai),ue=Ti(Ai);ue.maxUploadRetryTime=20*60*1e3;var C=e=>document.querySelector(e);var S=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),un=(e,t)=>{try{if(t===void 0)return localStorage.getItem(e);t===null?localStorage.removeItem(e):localStorage.setItem(e,t)}catch{}};function Rt(e,t=2800){let n=document.getElementById("toast");n||(n=document.createElement("div"),n.id="toast",n.className="toast",document.body.appendChild(n)),n.textContent=e,n.classList.add("on"),clearTimeout(Rt.t),Rt.t=setTimeout(()=>n.classList.remove("on"),t)}function ln({titulo:e,texto:t="",campos:n=[],si:r="Aceptar",no:s="Cancelar",peligro:i=!1}){return new Promise(o=>{let l=document.createElement("div");l.className="dlg-fondo",l.innerHTML=`<form class="dlg"><h3>${S(e)}</h3>${t?`<p>${t}</p>`:""}
      ${n.map((_,b)=>`<label class="campo"><span>${S(_.etiqueta)}</span>${_.tipo==="select"?`<select name="c${b}">${_.opciones.map(E=>`<option value="${S(E.v)}"${E.v===_.valor?" selected":""}>${S(E.t)}</option>`).join("")}</select>`:`<input name="c${b}" type="${_.tipo||"text"}" value="${S(_.valor||"")}" placeholder="${S(_.ayuda||"")}" ${_.req?"required":""} ${_.min!=null?`min="${_.min}"`:""}>`}</label>`).join("")}
      <div class="dlg-bts">${s?`<button type="button" class="bt sec" data-no>${S(s)}</button>`:""}<button class="bt ${i?"peligro":"pri"}" type="submit">${S(r)}</button></div></form>`,document.body.appendChild(l);let h=l.querySelector("form");setTimeout(()=>(h.querySelector("input,select")||h.querySelector("[type=submit]")).focus(),50);let g=_=>{l.remove(),o(_)};l.addEventListener("click",_=>{(_.target===l||_.target.closest("[data-no]"))&&g(null)}),h.addEventListener("submit",_=>{_.preventDefault(),g(n.length?n.map((b,E)=>h.elements["c"+E].value):!0)})})}var Ii=e=>e?new Date(e+"T12:00:00").toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"";var le={boda:{nombre:"Boda",principal:["Nombre de la novia","Nombre del novio"],titulo:"Nos casamos",padres:["Padres de la novia","Padres del novio"]},xv:{nombre:"XV a\xF1os",principal:["Nombre de la quincea\xF1era"],titulo:"Mis XV a\xF1os",padres:["Mis pap\xE1s"]},bautizo:{nombre:"Bautizo",principal:["Nombre del beb\xE9"],titulo:"Mi bautizo",padres:["Mis pap\xE1s"]},primera:{nombre:"Primera comuni\xF3n",principal:["Nombre del festejado"],titulo:"Mi primera comuni\xF3n",padres:["Mis pap\xE1s"]},cumple:{nombre:"Cumplea\xF1os",principal:["Nombre del festejado"],titulo:"Mi cumplea\xF1os",padres:[]},otro:{nombre:"Otro evento",principal:["Nombre(s) del evento"],titulo:"",padres:[]}};var Ec=["entrada","musica","cuenta","frase","bienvenida","historia","padres","lugares","vestimenta","ninos","regalos","galeria","calendario"];function Ri(e){let t=le[e.tipo]||le.otro,n=new Set(e.secciones||Ec),r=e.modulos||{},s=[];return s.push({k:"generales",t:"Datos del evento",d:"Lo m\xE1s importante de la invitaci\xF3n.",campos:[...t.principal.map((i,o)=>({k:"nombre"+(o+1),t:i,tipo:"texto",req:!0})),{k:"fecha",t:"Fecha del evento",tipo:"fecha",req:!0},{k:"hora",t:"Hora (de la ceremonia o del inicio)",tipo:"hora"},{k:"ciudad",t:"Ciudad",tipo:"texto",ayuda:"Ej. Iguala de la Independencia, Guerrero"},{k:"titulo",t:"Frase principal de la portada",tipo:"texto",ayuda:t.titulo?`Ej. "${t.titulo}"`:""}]}),n.has("frase")&&s.push({k:"frase",t:"Frase o vers\xEDculo",campos:[{k:"texto",t:"Texto",tipo:"largo",ayuda:'Ej. "Todo lo hizo hermoso en su tiempo\u2026"'},{k:"cita",t:"Autor o cita",tipo:"texto",ayuda:"Ej. Eclesiast\xE9s 3:11"}]}),n.has("bienvenida")&&s.push({k:"bienvenida",t:"Mensaje de bienvenida",campos:[{k:"texto",t:"Mensaje para sus invitados",tipo:"largo"}]}),n.has("historia")&&s.push({k:"historia",t:"Su historia",d:"Momentos importantes (hasta 6).",campos:[{k:"momentos",t:"Momentos",tipo:"lista",max:6,sub:[{k:"titulo",t:"T\xEDtulo",tipo:"texto",ayuda:"Ej. El reencuentro"},{k:"texto",t:"Lo que pas\xF3",tipo:"largo"}]}]}),n.has("padres")&&t.padres.length&&s.push({k:"padres",t:"Padres",campos:t.padres.map((i,o)=>({k:"p"+(o+1),t:i,tipo:"texto",ayuda:"Ej. Nombre & Nombre"}))}),n.has("padrinos")&&s.push({k:"padrinos",t:"Padrinos",campos:[{k:"lista",t:"Padrinos",tipo:"lista",max:20,sub:[{k:"de",t:"Padrinos de\u2026",tipo:"texto",ayuda:"Ej. Anillos, Lazo, Velaci\xF3n"},{k:"nombres",t:"Nombres",tipo:"texto"}]}]}),n.has("lugares")&&s.push({k:"lugares",t:"D\xF3nde y cu\xE1ndo",d:"Pega el link de Google Maps de cada lugar.",campos:[{k:"lista",t:"Lugares",tipo:"lista",max:4,min:1,sub:[{k:"que",t:"\xBFQu\xE9 es?",tipo:"texto",ayuda:"Ceremonia religiosa, Civil, Recepci\xF3n\u2026"},{k:"lugar",t:"Nombre del lugar",tipo:"texto"},{k:"direccion",t:"Direcci\xF3n",tipo:"texto"},{k:"hora",t:"Hora",tipo:"hora"},{k:"mapa",t:"Link de Google Maps",tipo:"texto",ayuda:"https://maps.app.goo.gl/\u2026"}]}]}),n.has("itinerario")&&s.push({k:"itinerario",t:"Itinerario",campos:[{k:"lista",t:"Actividades",tipo:"lista",max:12,sub:[{k:"hora",t:"Hora",tipo:"hora"},{k:"que",t:"Actividad",tipo:"texto",ayuda:"Ej. Vals, Cena, Fiesta"}]}]}),n.has("vestimenta")&&s.push({k:"vestimenta",t:"C\xF3digo de vestimenta",campos:[{k:"codigo",t:"C\xF3digo",tipo:"opcion",opciones:["Formal","Etiqueta","Semi formal","Casual elegante","Casual","Tem\xE1tica"]},{k:"evitar",t:"Colores que piden evitar",tipo:"texto",ayuda:"Ej. Blanco, azul marino"},{k:"nota",t:"Nota",tipo:"texto"}]}),n.has("ninos")&&s.push({k:"ninos",t:"Ni\xF1os",campos:[{k:"aceptan",t:"\xBFLos ni\xF1os son bienvenidos?",tipo:"opcion",opciones:["S\xED, con gusto","Evento solo para adultos","Solo ni\xF1os de la familia"]},{k:"nota",t:"Mensaje",tipo:"texto"}]}),n.has("regalos")&&s.push({k:"regalos",t:"Regalos",campos:[{k:"mesas",t:"Mesas de regalos",tipo:"lista",max:4,sub:[{k:"tienda",t:"Tienda",tipo:"texto",ayuda:"Liverpool, Amazon\u2026"},{k:"numero",t:"N\xFAmero de evento",tipo:"texto"},{k:"link",t:"Link",tipo:"texto"}]},{k:"sobres",t:"\xBFLluvia de sobres?",tipo:"sino"},{k:"nota",t:"Mensaje sobre regalos",tipo:"largo"}]}),n.has("hospedaje")&&s.push({k:"hospedaje",t:"Hospedaje recomendado",campos:[{k:"lista",t:"Hoteles",tipo:"lista",max:4,sub:[{k:"nombre",t:"Hotel",tipo:"texto"},{k:"tel",t:"Tel\xE9fono",tipo:"texto"},{k:"link",t:"Link o mapa",tipo:"texto"},{k:"nota",t:"Nota (c\xF3digo de descuento\u2026)",tipo:"texto"}]}]}),r.confirmacion&&r.confirmacion!=="no"&&s.push({k:"confirmacion",t:"Confirmaci\xF3n de asistencia",campos:[{k:"whatsapp",t:"WhatsApp donde reciben las confirmaciones",tipo:"texto",ayuda:"10 d\xEDgitos",req:r.confirmacion==="whatsapp"},{k:"limite",t:"Fecha l\xEDmite para confirmar",tipo:"fecha"}]}),n.has("musica")&&s.push({k:"musica",t:"Canci\xF3n",d:"Sonar\xE1 al abrir la invitaci\xF3n.",campos:[{k:"cancion",t:"Canci\xF3n y artista",tipo:"texto",ayuda:"Ej. Que te quiero \xB7 Sergio Dalma"},{k:"link",t:"Link de YouTube o Spotify (opcional)",tipo:"texto"},{k:"archivo",t:"O sube el archivo de la canci\xF3n",tipo:"archivos",acepta:"audio/*",max:1}]}),s.push({k:"fotos",t:"Sus fotos",d:"Fotos de ustedes para la portada y el carrusel de su invitaci\xF3n. S\xFAbanlas en la mejor calidad que tengan (las originales, no capturas de pantalla).",campos:[{k:"portada",t:"Foto principal (portada / perfil)",tipo:"archivos",acepta:"image/*",max:1},{k:"galeria",t:"Fotos para el carrusel (de 6 a 25)",tipo:"archivos",acepta:"image/*",max:25,ayuda:"Pueden elegir varias a la vez. Las acomodamos nosotros en un carrusel."}]}),s.push({k:"estilo",t:"Estilo y referencias",d:"\xBFC\xF3mo se imaginan su invitaci\xF3n? Sube capturas o fotos de ideas que les gusten.",campos:[{k:"colores",t:"Colores del evento",tipo:"texto",ayuda:"Ej. Azul polvo, plata, rosa palo"},{k:"tema",t:"Tem\xE1tica o estilo",tipo:"texto",ayuda:"Ej. Elegante, rom\xE1ntico, r\xFAstico, playa\u2026"},{k:"referencias",t:"Im\xE1genes de referencia",tipo:"archivos",acepta:"image/*,application/pdf",max:12},{k:"notas",t:"Algo m\xE1s que quieran contarnos",tipo:"largo"}]}),s}function Si(e,t){let n=[];for(let r of e)for(let s of r.campos){let i=(t[r.k]||{})[s.k];s.req&&(i==null||String(i).trim()==="")&&n.push(`${r.t}: ${s.t}`),s.tipo==="lista"&&s.min&&(!Array.isArray(i)||i.length<s.min)&&n.push(`${r.t}: agrega al menos ${s.min}`)}return n}var St=new URLSearchParams(location.search).get("t")||"",pe=St?tn(Pr,"formularios",St):null,Ht=null,_t=null,pt={},it=[],ft=[],Vr=null,xr=!1,Cr=!1;(async()=>{if(!St)return Or("Esta liga no est\xE1 completa","Pide a Foto Estudio Graciela que te la vuelvan a mandar.");let e;try{e=await nn(pe)}catch{return Or("Sin conexi\xF3n","Revisa tu internet y vuelve a abrir la liga.")}if(!e.exists())return Or("Esta liga ya no existe","Pide a Foto Estudio Graciela una nueva.");_t=e.data(),Ht=(await nn(tn(Pr,"eventos",_t.evento))).data()||{tipo:"otro",nombres:""},pt=_t.datos||{};try{let t=JSON.parse(un("fg-form-"+St)||"null");t&&t.t>(_t.actualizado&&_t.actualizado.toMillis&&_t.actualizado.toMillis()||0)&&(pt=t.datos)}catch{}if(it=_t.refs||[],ft=Ri(Ht),C("#cargando").hidden=!0,C("#titulo").textContent=Ht.nombres||"Su evento",C("#tipoEv").textContent=(le[Ht.tipo]||le.otro).nombre+(Ht.fecha?" \xB7 "+Ii(Ht.fecha):""),_t.estado==="enviado")return Ni(!1);C("#formulario").hidden=!1,wc()})();function Or(e,t){C("#cargando").hidden=!0,C("#mensaje").hidden=!1,C("#msgT").textContent=e,C("#msgD").textContent=t}function Ni(e){C("#formulario").hidden=!0,C("#mensaje").hidden=!1,C("#msgT").textContent=e?"\xA1Gracias! Recibimos todo \u2728":"Ya recibimos sus datos \u2728",C("#msgD").textContent="Comenzaremos a dise\xF1ar su invitaci\xF3n. Si necesitan cambiar algo, escr\xEDbannos por WhatsApp."}var de=(e,t)=>(pt[e]||{})[t],ki=(e,t)=>`<div class="sec-cab"><span class="num">${t+1}</span><div><h2>${S(e.t)}</h2>${e.d?`<p>${S(e.d)}</p>`:""}</div></div>`;function wc(){C("#secciones").innerHTML=ft.map((e,t)=>`<section class="sec card" id="s-${e.k}">${ki(e,t)}${e.campos.map(n=>Di(e,n)).join("")}</section>`).join(""),Ur()}function Di(e,t){let n=`${e.k}.${t.k}`,r=de(e.k,t.k),s=`<span>${S(t.t)}${t.req?" <em>*</em>":""}</span>`,i=`data-s="${e.k}" data-c="${t.k}"`;switch(t.tipo){case"largo":return`<label class="campo">${s}<textarea ${i} placeholder="${S(t.ayuda||"")}">${S(r||"")}</textarea></label>`;case"fecha":return`<label class="campo">${s}<input type="date" ${i} value="${S(r||"")}"></label>`;case"hora":return`<label class="campo">${s}<input type="time" ${i} value="${S(r||"")}"></label>`;case"opcion":return`<label class="campo">${s}<select ${i}><option value="">Elige\u2026</option>${t.opciones.map(o=>`<option${r===o?" selected":""}>${S(o)}</option>`).join("")}</select></label>`;case"sino":return`<div class="campo">${s}<div class="sino" ${i}><button type="button" data-v="1" class="${r===!0?"on":""}">S\xED</button><button type="button" data-v="0" class="${r===!1?"on":""}">No</button></div></div>`;case"lista":{let o=Array.isArray(r)?r:[];return`<div class="campo lista" ${i}>${s}
        ${o.map((l,h)=>`<div class="item"><div class="item-cab"><b>${h+1}</b><button type="button" class="quitar" data-i="${h}" aria-label="Quitar">\u2715</button></div>
          ${t.sub.map(g=>`<label class="campo"><span>${S(g.t)}</span>${g.tipo==="largo"?`<textarea data-l="${n}" data-i="${h}" data-k="${g.k}" placeholder="${S(g.ayuda||"")}">${S(l[g.k]||"")}</textarea>`:`<input type="${g.tipo==="hora"?"time":"text"}" data-l="${n}" data-i="${h}" data-k="${g.k}" value="${S(l[g.k]||"")}" placeholder="${S(g.ayuda||"")}">`}</label>`).join("")}
        </div>`).join("")}
        ${o.length<(t.max||10)?`<button type="button" class="bt chico agregar" data-agregar="${n}">+ Agregar</button>`:""}</div>`}case"archivos":{let o=it.filter(l=>l.campo===t.k);return`<div class="campo arch" ${i}>${s}
        <div class="mini-g">${o.map(l=>`<div class="mg">${(l.tipo||"").startsWith("image")?`<img src="${S(l.url)}" alt="" loading="lazy">`:`<span class="doc">${S(l.nombre)}</span>`}
          <button type="button" class="quitarArch" data-ruta="${S(l.ruta)}" aria-label="Quitar">\u2715</button></div>`).join("")}
          ${o.length<(t.max||10)?`<label class="subir"><input type="file" accept="${S(t.acepta||"*/*")}" ${(t.max||10)>1?"multiple":""} data-subir="${t.k}"><span>+</span><small>${(t.max||10)>1?"Agregar":"Elegir"}</small></label>`:""}
        </div>${t.ayuda?`<small>${S(t.ayuda)}</small>`:""}${t.max>1?`<small>${o.length?`${o.length} de ${t.max} \xB7 `:""}Hasta ${t.max} archivos.</small>`:""}</div>`}default:return`<label class="campo">${s}<input ${i} value="${S(r||"")}" placeholder="${S(t.ayuda||"")}" ${t.k==="whatsapp"?'inputmode="tel"':""}></label>`}}function he(e,t,n){pt[e]={...pt[e]||{},[t]:n},Tc()}var vc=(e,t)=>ft.find(n=>n.k===e).campos.find(n=>n.k===t);C("#secciones").addEventListener("input",e=>{let t=e.target;if(t.dataset.l){let[n,r]=t.dataset.l.split("."),s=[...de(n,r)||[]];return s[+t.dataset.i]={...s[+t.dataset.i],[t.dataset.k]:t.value},he(n,r,s)}t.dataset.s&&t.dataset.c&&!t.dataset.subir&&he(t.dataset.s,t.dataset.c,t.value)});C("#secciones").addEventListener("click",async e=>{let t=e.target.closest(".sino button");if(t){let i=t.parentElement;he(i.dataset.s,i.dataset.c,t.dataset.v==="1"),i.querySelectorAll("button").forEach(o=>o.classList.toggle("on",o===t));return}let n=e.target.closest("[data-agregar]");if(n){let[i,o]=n.dataset.agregar.split(".");he(i,o,[...de(i,o)||[],{}]),hn(i);return}let r=e.target.closest(".quitar");if(r){let i=r.closest(".lista"),o=[...de(i.dataset.s,i.dataset.c)||[]];o.splice(+r.dataset.i,1),he(i.dataset.s,i.dataset.c,o),hn(i.dataset.s);return}let s=e.target.closest(".quitarArch");if(s){if(!await ln({titulo:"\xBFQuitar este archivo?",si:"Quitar",peligro:!0}))return;let i=s.dataset.ruta;it=it.filter(o=>o.ruta!==i),vi(cn(ue,i)).catch(()=>{}),await Ft(pe,{refs:it,actualizado:Tt()}).catch(()=>Rt("No se pudo quitar")),hn(s.closest(".sec").id.slice(2))}});function hn(e){let t=ft.find(n=>n.k===e);C("#s-"+e).innerHTML=ki(t,ft.indexOf(t))+t.campos.map(n=>Di(t,n)).join(""),Ur()}function Tc(){un("fg-form-"+St,JSON.stringify({t:Date.now(),datos:pt})),Lr("Guardando\u2026"),clearTimeout(Vr),Vr=setTimeout(fe,900),Ur()}async function fe(){if(xr){Cr=!0;return}xr=!0;try{await Ft(pe,{datos:pt,actualizado:Tt()}),Lr("Guardado \u2713")}catch(e){console.warn(e),Lr("Sin conexi\xF3n \xB7 se guardar\xE1 al volver"),setTimeout(fe,5e3)}xr=!1,Cr&&(Cr=!1,fe())}function Lr(e){C("#guardado").textContent=e}addEventListener("online",()=>fe());function Ur(){let e=ft.filter(t=>t.campos.some(n=>{let r=n.tipo==="archivos"?it.some(s=>s.campo===n.k):de(t.k,n.k);return Array.isArray(r)?r.length:r!=null&&r!==""})).length;C("#progBar").style.width=Math.round(e/ft.length*100)+"%",C("#progTxt").textContent=`${e} de ${ft.length} secciones`}C("#secciones").addEventListener("change",async e=>{let t=e.target.closest("[data-subir]");if(!t)return;let n=t.dataset.subir,r=[...t.files];t.value="";let s=t.closest(".sec").id.slice(2),o=(vc(s,n).max||10)-it.filter(h=>h.campo===n).length,l=t.closest(".arch");for(let h of r.slice(0,o)){if(h.size>40*1024*1024){Rt(`${h.name} pesa m\xE1s de 40 MB`);continue}let g=Date.now().toString(36)+Math.random().toString(36).slice(2,6),_=h.name.replace(/[^\w.\- ]/g,"_").slice(-80),b=`formularios/${St}/${n}-${g}-${_}`,E=document.createElement("div");E.className="subiendo",E.innerHTML=`<span>${S(_)}</span><i></i>`,l.appendChild(E);try{await new Promise((A,R)=>{Ei(cn(ue,b),h,{contentType:h.type||"application/octet-stream"}).on("state_changed",V=>E.querySelector("i").style.width=V.bytesTransferred/V.totalBytes*100+"%",R,A)});let T=await wi(cn(ue,b));it.push({campo:n,nombre:_,ruta:b,url:T,tipo:h.type||"",tam:h.size}),await Ft(pe,{refs:it,actualizado:Tt()})}catch(T){console.warn(T),Rt("No se pudo subir "+_)}E.remove()}hn(s)});C("#enviar").onclick=async()=>{clearTimeout(Vr),await fe();let e=Si(ft,pt);if(e.length){await ln({titulo:"Falta un poco",texto:"Llenen por favor:<br>\u2022 "+e.map(S).join("<br>\u2022 "),si:"Entendido",no:""});return}if(await ln({titulo:"\xBFEnviar todo?",texto:"Despu\xE9s de enviarlo ya no podr\xE1n editarlo (si necesitan un cambio, nos escriben).",si:"S\xED, enviar"}))try{await Ft(pe,{datos:pt,refs:it,estado:"enviado",enviado:Tt(),actualizado:Tt()}),un("fg-form-"+St,null),Ni(!0),scrollTo({top:0,behavior:"smooth"})}catch(n){console.warn(n),Rt("No se pudo enviar. Revisa tu conexi\xF3n e intenta de nuevo.")}};
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
  * @license
  * Copyright 2017 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
