/*! For license information please see files_pdfviewer-main.js.LICENSE.txt */
(()=>{var t={9753:(t,e,r)=>{"use strict";e.nu=void 0,r(5306);const n=(t,e,r)=>{const n=Object.assign({escape:!0},r||{});return"/"!==t.charAt(0)&&(t="/"+t),o=(o=e||{})||{},t.replace(/{([^{}]*)}/g,(function(t,e){var r=o[e];return n.escape?"string"==typeof r||"number"==typeof r?encodeURIComponent(r.toString()):encodeURIComponent(t):"string"==typeof r||"number"==typeof r?r.toString():t}));var o};e.nu=(t,e,r)=>{const o=Object.assign({noRewrite:!1},r||{});return!0!==OC.config.modRewriteWorking||o.noRewrite?i()+"/index.php"+n(t,e,r):i()+n(t,e,r)};const o=(t,e,r)=>{const n=-1!==OC.coreApps.indexOf(t);let o=i();return"php"!==r.substring(r.length-3)||n?"php"===r.substring(r.length-3)||n?(o+="settings"!==t&&"core"!==t&&"search"!==t||"ajax"!==e?"/":"/index.php/",n||(o+="apps/"),""!==t&&(o+=t+="/"),e&&(o+=e+"/"),o+=r):(o=OC.appswebroots[t],e&&(o+="/"+e+"/"),"/"!==o.substring(o.length-1)&&(o+="/"),o+=r):(o+="/index.php/apps/"+t,"index.php"!==r&&(o+="/",e&&(o+=encodeURI(e+"/")),o+=r)),o};const i=()=>OC.webroot},1530:(t,e,r)=>{"use strict";var n=r(8710).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),i=r(1400),a=function(t){return function(e,r,a){var c,s=n(e),u=o(s.length),l=i(a,u);if(t&&r!=r){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),c=a.f,s=i.f,u=0;u<r.length;u++){var l=r[u];n(t,l)||c(t,l,s(e,l))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),c=i.process,s=c&&c.versions,u=s&&s.v8;u?o=(n=u.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),c=r(3505),s=r(9920),u=r(4705);t.exports=function(t,e){var r,l,p,f,v,d=t.target,h=t.global,g=t.stat;if(r=h?n:g?n[d]||c(d,{}):(n[d]||{}).prototype)for(l in e){if(f=e[l],p=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!u(h?l:d+(g?".":"#")+l,t.forced)&&void 0!==p){if(typeof f==typeof p)continue;s(f,p)}(t.sham||p&&p.sham)&&i(f,"sham",!0),a(r,l,f,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,e,r)=>{"use strict";r(4916);var n=r(1320),o=r(2261),i=r(7293),a=r(5112),c=r(8880),s=a("species"),u=RegExp.prototype,l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p="$0"==="a".replace(/./,"$0"),f=a("replace"),v=!!/./[f]&&""===/./[f]("a","$0"),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var h=a(t),g=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),x=g&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[s]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!g||!x||"replace"===t&&(!l||!p||v)||"split"===t&&!d){var y=/./[h],m=r(h,""[t],(function(t,e,r,n,i){var a=e.exec;return a===o||a===u.exec?g&&!i?{done:!0,value:y.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),b=m[0],S=m[1];n(String.prototype,t,b),n(u,h,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}f&&c(u[h],"sham",!0)}},5005:(t,e,r)=>{var n=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},647:(t,e,r)=>{var n=r(7908),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,s,u,l){var p=r+t.length,f=s.length,v=c;return void 0!==u&&(u=n(u),v=a),i.call(l,v,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(p);case"<":a=u[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>f){var l=o(c/10);return 0===l?n:l<=f?void 0===s[l-1]?i.charAt(1):s[l-1]+i.charAt(1):n}a=s[c-1]}return void 0===a?"":a}))}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:(t,e,r)=>{var n=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(8536),c=r(7854),s=r(111),u=r(8880),l=r(6656),p=r(5465),f=r(6200),v=r(3501),d="Object already initialized",h=c.WeakMap;if(a||p.state){var g=p.state||(p.state=new h),x=g.get,y=g.has,m=g.set;n=function(t,e){if(y.call(g,t))throw new TypeError(d);return e.facade=t,m.call(g,t,e),e},o=function(t){return x.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var b=f("state");v[b]=!0,n=function(t,e){if(l(t,b))throw new TypeError(d);return e.facade=t,u(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==u||r!=s&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(9670),a=r(7593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),i=r(9114),a=r(5656),c=r(7593),s=r(6656),u=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),i=r(1318).indexOf,a=r(3501);t.exports=function(t,e){var r,c=o(t),s=0,u=[];for(r in c)!n(a,r)&&n(c,r)&&u.push(r);for(;e.length>s;)n(c,r=e[s++])&&(~i(u,r)||u.push(r));return u}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:(t,e,r)=>{var n=r(5005),o=r(8006),i=r(5181),a=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),i=r(6656),a=r(3505),c=r(2788),s=r(9909),u=s.get,l=s.enforce,p=String(String).split("String");(t.exports=function(t,e,r,c){var s,u=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(s=l(r)).source||(s.source=p.join("string"==typeof e?e:""))),t!==n?(u?!v&&t[e]&&(f=!0):delete t[e],f?t[e]=r:o(t,e,r)):f?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},7651:(t,e,r)=>{var n=r(4326),o=r(2261);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},2261:(t,e,r)=>{"use strict";var n,o,i=r(7066),a=r(2999),c=r(2309),s=RegExp.prototype.exec,u=c("native-string-replace",String.prototype.replace),l=s,p=(n=/a/,o=/b*/g,s.call(n,"a"),s.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1];(p||v||f)&&(l=function(t){var e,r,n,o,a=this,c=f&&a.sticky,l=i.call(a),d=a.source,h=0,g=t;return c&&(-1===(l=l.replace("y","")).indexOf("g")&&(l+="g"),g=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),r=new RegExp("^(?:"+d+")",l)),v&&(r=new RegExp("^"+d+"$(?!\\s)",l)),p&&(e=a.lastIndex),n=s.call(c?r:a,g),c?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:p&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),v&&n&&n.length>1&&u.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=l},7066:(t,e,r)=>{"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:(t,e,r)=>{"use strict";var n=r(7293);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.14.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:(t,e,r)=>{var n=r(9958),o=r(4488),i=function(t){return function(e,r){var i,a,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},1400:(t,e,r)=>{var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(6656),a=r(9711),c=r(133),s=r(3307),u=o("wks"),l=n.Symbol,p=s?l:l&&l.withoutSetter||a;t.exports=function(t){return i(u,t)&&(c||"string"==typeof u[t])||(c&&i(l,t)?u[t]=l[t]:u[t]=p("Symbol."+t)),u[t]}},4916:(t,e,r)=>{"use strict";var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},5306:(t,e,r)=>{"use strict";var n=r(7007),o=r(9670),i=r(7466),a=r(9958),c=r(4488),s=r(1530),u=r(647),l=r(7651),p=Math.max,f=Math.min;n("replace",2,(function(t,e,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=n.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(r,n){var o=c(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!v&&d||"string"==typeof n&&-1===n.indexOf(h)){var c=r(e,t,this,n);if(c.done)return c.value}var g=o(t),x=String(this),y="function"==typeof n;y||(n=String(n));var m=g.global;if(m){var b=g.unicode;g.lastIndex=0}for(var S=[];;){var w=l(g,x);if(null===w)break;if(S.push(w),!m)break;""===String(w[0])&&(g.lastIndex=s(x,i(g.lastIndex),b))}for(var E,A="",O=0,C=0;C<S.length;C++){w=S[C];for(var _=String(w[0]),R=p(f(a(w.index),x.length),0),T=[],j=1;j<w.length;j++)T.push(void 0===(E=w[j])?E:String(E));var I=w.groups;if(y){var P=[_].concat(T,R,x);void 0!==I&&P.push(I);var $=String(n.apply(void 0,P))}else $=u(_,x,R,T,I,n);R>=O&&(A+=x.slice(O,R)+$,O=R+_.length)}return A+x.slice(O)}]}))},5002:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var n=r(7537),o=r.n(n),i=r(3645),a=r.n(i)()(o());a.push([t.id,"iframe[data-v-7229e1f8]{width:100%;top:50px;position:absolute;height:calc(100vh - 50px)}","",{version:3,sources:["webpack://./src/views/PDFView.vue"],names:[],mappings:"AAoDA,wBACC,UAAA,CACA,QAAA,CACA,iBAAA,CACA,yBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\niframe {\n\twidth: 100%;\n\ttop: 50px;\n\tposition: absolute;\n\theight: calc(100vh - 50px);\n}\n"],sourceRoot:""}]);const c=a},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},7537:t=>{"use strict";t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(o," */"),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},3379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=n.base?s[0]+n.base:s[0],l=i[u]||0,p="".concat(u," ").concat(l);i[u]=l+1;var f=r(p),v={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(v);else{var d=o(v,n);n.byIndex=c,e.splice(c,0,{identifier:p,updater:d,references:1})}a.push(p)}return a}function o(t,e){var r=e.domAPI(e);r.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=n(t,o),u=0;u<i.length;u++){var l=r(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(9753),e=document.getElementById("hideDownload");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}const o={name:"PDFView",computed:{iframeSrc:function(){return(0,t.nu)("/apps/files_pdfviewer/?file={file}&canDownload={canDownload}",{canDownload:!e||e&&"true"!==e.value?1:0,file:this.davPath})}},mounted:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.doneLoading(),e.$nextTick((function(){this.$el.focus()}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))})()}};var i=r(3379),a=r.n(i),c=r(7795),s=r.n(c),u=r(569),l=r.n(u),p=r(3565),f=r.n(p),v=r(9216),d=r.n(v),h=r(4589),g=r.n(h),x=r(5002),y={};y.styleTagTransform=g(),y.setAttributes=f(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=d();a()(x.Z,y);x.Z&&x.Z.locals&&x.Z.locals;const m=function(t,e,r,n,o,i,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,e){return s.call(e),l(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,s):[s]}return{exports:t,options:u}}(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{attrs:{src:t.iframeSrc}})}),[],!1,null,"7229e1f8",null).exports;OCA.Viewer.registerHandler({id:"pdf",mimes:["application/pdf","application/illustrator"],component:m})})()})();
//# sourceMappingURL=files_pdfviewer-main.js.map?v=ade7955d340e4a30e8ad