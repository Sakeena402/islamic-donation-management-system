(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/8069e_next_dist_compiled_next-server_app-route-experimental_runtime_dev_1656e4.js", {

"[project]/node_modules/next/dist/compiled/next-server/app-route-experimental.runtime.dev.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
(()=>{
    var __webpack_modules__ = {
        "./dist/compiled/@edge-runtime/cookies/index.js": (module1)=>{
            "use strict";
            var __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __hasOwnProp = Object.prototype.hasOwnProperty, src_exports = {};
            function stringifyCookie(c) {
                var _a;
                let attrs = [
                    "path" in c && c.path && `Path=${c.path}`,
                    "expires" in c && (c.expires || 0 === c.expires) && `Expires=${("number" == typeof c.expires ? new Date(c.expires) : c.expires).toUTCString()}`,
                    "maxAge" in c && "number" == typeof c.maxAge && `Max-Age=${c.maxAge}`,
                    "domain" in c && c.domain && `Domain=${c.domain}`,
                    "secure" in c && c.secure && "Secure",
                    "httpOnly" in c && c.httpOnly && "HttpOnly",
                    "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
                    "partitioned" in c && c.partitioned && "Partitioned",
                    "priority" in c && c.priority && `Priority=${c.priority}`
                ].filter(Boolean), stringified = `${c.name}=${encodeURIComponent(null != (_a = c.value) ? _a : "")}`;
                return 0 === attrs.length ? stringified : `${stringified}; ${attrs.join("; ")}`;
            }
            function parseCookie(cookie) {
                let map = new Map;
                for (let pair of cookie.split(/; */)){
                    if (!pair) continue;
                    let splitAt = pair.indexOf("=");
                    if (-1 === splitAt) {
                        map.set(pair, "true");
                        continue;
                    }
                    let [key, value1] = [
                        pair.slice(0, splitAt),
                        pair.slice(splitAt + 1)
                    ];
                    try {
                        map.set(key, decodeURIComponent(null != value1 ? value1 : "true"));
                    } catch  {}
                }
                return map;
            }
            function parseSetCookie(setCookie) {
                var string, string1;
                if (!setCookie) return;
                let [[name, value1], ...attributes] = parseCookie(setCookie), { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
                        key.toLowerCase(),
                        value2
                    ]));
                return function(t) {
                    let newT = {};
                    for(let key in t)t[key] && (newT[key] = t[key]);
                    return newT;
                }({
                    name,
                    value: decodeURIComponent(value1),
                    domain,
                    ...expires && {
                        expires: new Date(expires)
                    },
                    ...httponly && {
                        httpOnly: !0
                    },
                    ..."string" == typeof maxage && {
                        maxAge: Number(maxage)
                    },
                    path,
                    ...samesite && {
                        sameSite: SAME_SITE.includes(string = (string = samesite).toLowerCase()) ? string : void 0
                    },
                    ...secure && {
                        secure: !0
                    },
                    ...priority && {
                        priority: PRIORITY.includes(string1 = (string1 = priority).toLowerCase()) ? string1 : void 0
                    },
                    ...partitioned && {
                        partitioned: !0
                    }
                });
            }
            ((target, all)=>{
                for(var name in all)__defProp(target, name, {
                    get: all[name],
                    enumerable: !0
                });
            })(src_exports, {
                RequestCookies: ()=>RequestCookies,
                ResponseCookies: ()=>ResponseCookies,
                parseCookie: ()=>parseCookie,
                parseSetCookie: ()=>parseSetCookie,
                stringifyCookie: ()=>stringifyCookie
            }), module1.exports = ((to, from, except, desc)=>{
                if (from && "object" == typeof from || "function" == typeof from) for (let key of __getOwnPropNames(from))__hasOwnProp.call(to, key) || key === except || __defProp(to, key, {
                    get: ()=>from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
                return to;
            })(__defProp({}, "__esModule", {
                value: !0
            }), src_exports);
            var SAME_SITE = [
                "strict",
                "lax",
                "none"
            ], PRIORITY = [
                "low",
                "medium",
                "high"
            ], RequestCookies = class {
                constructor(requestHeaders){
                    this._parsed = new Map, this._headers = requestHeaders;
                    let header = requestHeaders.get("cookie");
                    if (header) for (let [name, value1] of parseCookie(header))this._parsed.set(name, {
                        name,
                        value: value1
                    });
                }
                [Symbol.iterator]() {
                    return this._parsed[Symbol.iterator]();
                }
                get size() {
                    return this._parsed.size;
                }
                get(...args) {
                    let name = "string" == typeof args[0] ? args[0] : args[0].name;
                    return this._parsed.get(name);
                }
                getAll(...args) {
                    var _a;
                    let all = Array.from(this._parsed);
                    if (!args.length) return all.map(([_, value1])=>value1);
                    let name = "string" == typeof args[0] ? args[0] : null == (_a = args[0]) ? void 0 : _a.name;
                    return all.filter(([n])=>n === name).map(([_, value1])=>value1);
                }
                has(name) {
                    return this._parsed.has(name);
                }
                set(...args) {
                    let [name, value1] = 1 === args.length ? [
                        args[0].name,
                        args[0].value
                    ] : args, map = this._parsed;
                    return map.set(name, {
                        name,
                        value: value1
                    }), this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; ")), this;
                }
                delete(names) {
                    let map = this._parsed, result = Array.isArray(names) ? names.map((name)=>map.delete(name)) : map.delete(names);
                    return this._headers.set("cookie", Array.from(map).map(([_, value1])=>stringifyCookie(value1)).join("; ")), result;
                }
                clear() {
                    return this.delete(Array.from(this._parsed.keys())), this;
                }
                [Symbol.for("edge-runtime.inspect.custom")]() {
                    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
                }
                toString() {
                    return [
                        ...this._parsed.values()
                    ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
                }
            }, ResponseCookies = class {
                constructor(responseHeaders){
                    var _a, _b, _c;
                    this._parsed = new Map, this._headers = responseHeaders;
                    let setCookie = null != (_c = null != (_b = null == (_a = responseHeaders.getSetCookie) ? void 0 : _a.call(responseHeaders)) ? _b : responseHeaders.get("set-cookie")) ? _c : [];
                    for (let cookieString of Array.isArray(setCookie) ? setCookie : function(cookiesString) {
                        if (!cookiesString) return [];
                        var start, ch, lastComma, nextStart, cookiesSeparatorFound, cookiesStrings = [], pos = 0;
                        function skipWhitespace() {
                            for(; pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos));)pos += 1;
                            return pos < cookiesString.length;
                        }
                        for(; pos < cookiesString.length;){
                            for(start = pos, cookiesSeparatorFound = !1; skipWhitespace();)if ("," === (ch = cookiesString.charAt(pos))) {
                                for(lastComma = pos, pos += 1, skipWhitespace(), nextStart = pos; pos < cookiesString.length && "=" !== (ch = cookiesString.charAt(pos)) && ";" !== ch && "," !== ch;)pos += 1;
                                pos < cookiesString.length && "=" === cookiesString.charAt(pos) ? (cookiesSeparatorFound = !0, pos = nextStart, cookiesStrings.push(cookiesString.substring(start, lastComma)), start = pos) : pos = lastComma + 1;
                            } else pos += 1;
                            (!cookiesSeparatorFound || pos >= cookiesString.length) && cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
                        }
                        return cookiesStrings;
                    }(setCookie)){
                        let parsed = parseSetCookie(cookieString);
                        parsed && this._parsed.set(parsed.name, parsed);
                    }
                }
                get(...args) {
                    let key = "string" == typeof args[0] ? args[0] : args[0].name;
                    return this._parsed.get(key);
                }
                getAll(...args) {
                    var _a;
                    let all = Array.from(this._parsed.values());
                    if (!args.length) return all;
                    let key = "string" == typeof args[0] ? args[0] : null == (_a = args[0]) ? void 0 : _a.name;
                    return all.filter((c)=>c.name === key);
                }
                has(name) {
                    return this._parsed.has(name);
                }
                set(...args) {
                    let [name, value1, cookie] = 1 === args.length ? [
                        args[0].name,
                        args[0].value,
                        args[0]
                    ] : args, map = this._parsed;
                    return map.set(name, function(cookie = {
                        name: "",
                        value: ""
                    }) {
                        return "number" == typeof cookie.expires && (cookie.expires = new Date(cookie.expires)), cookie.maxAge && (cookie.expires = new Date(Date.now() + 1e3 * cookie.maxAge)), (null === cookie.path || void 0 === cookie.path) && (cookie.path = "/"), cookie;
                    }({
                        name,
                        value: value1,
                        ...cookie
                    })), function(bag, headers) {
                        for (let [, value1] of (headers.delete("set-cookie"), bag)){
                            let serialized = stringifyCookie(value1);
                            headers.append("set-cookie", serialized);
                        }
                    }(map, this._headers), this;
                }
                delete(...args) {
                    let [name, path, domain] = "string" == typeof args[0] ? [
                        args[0]
                    ] : [
                        args[0].name,
                        args[0].path,
                        args[0].domain
                    ];
                    return this.set({
                        name,
                        path,
                        domain,
                        value: "",
                        expires: new Date(0)
                    });
                }
                [Symbol.for("edge-runtime.inspect.custom")]() {
                    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
                }
                toString() {
                    return [
                        ...this._parsed.values()
                    ].map(stringifyCookie).join("; ");
                }
            };
        },
        "./dist/compiled/cookie/index.js": (module1)=>{
            (()=>{
                "use strict";
                "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = __dirname + "/");
                var e = {};
                (()=>{
                    e.parse = function(e, r) {
                        if ("string" != typeof e) throw TypeError("argument str must be a string");
                        for(var t = {}, o = e.split(a), s = (r || {}).decode || i, p = 0; p < o.length; p++){
                            var f = o[p], u = f.indexOf("=");
                            if (!(u < 0)) {
                                var v = f.substr(0, u).trim(), c = f.substr(++u, f.length).trim();
                                '"' == c[0] && (c = c.slice(1, -1)), void 0 == t[v] && (t[v] = function(e, r) {
                                    try {
                                        return r(e);
                                    } catch (r) {
                                        return e;
                                    }
                                }(c, s));
                            }
                        }
                        return t;
                    }, e.serialize = function(e, r, i) {
                        var a = i || {}, o = a.encode || t;
                        if ("function" != typeof o) throw TypeError("option encode is invalid");
                        if (!n.test(e)) throw TypeError("argument name is invalid");
                        var s = o(r);
                        if (s && !n.test(s)) throw TypeError("argument val is invalid");
                        var p = e + "=" + s;
                        if (null != a.maxAge) {
                            var f = a.maxAge - 0;
                            if (isNaN(f) || !isFinite(f)) throw TypeError("option maxAge is invalid");
                            p += "; Max-Age=" + Math.floor(f);
                        }
                        if (a.domain) {
                            if (!n.test(a.domain)) throw TypeError("option domain is invalid");
                            p += "; Domain=" + a.domain;
                        }
                        if (a.path) {
                            if (!n.test(a.path)) throw TypeError("option path is invalid");
                            p += "; Path=" + a.path;
                        }
                        if (a.expires) {
                            if ("function" != typeof a.expires.toUTCString) throw TypeError("option expires is invalid");
                            p += "; Expires=" + a.expires.toUTCString();
                        }
                        if (a.httpOnly && (p += "; HttpOnly"), a.secure && (p += "; Secure"), a.sameSite) switch("string" == typeof a.sameSite ? a.sameSite.toLowerCase() : a.sameSite){
                            case !0:
                            case "strict":
                                p += "; SameSite=Strict";
                                break;
                            case "lax":
                                p += "; SameSite=Lax";
                                break;
                            case "none":
                                p += "; SameSite=None";
                                break;
                            default:
                                throw TypeError("option sameSite is invalid");
                        }
                        return p;
                    };
                    var i = decodeURIComponent, t = encodeURIComponent, a = /; */, n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
                })(), module1.exports = e;
            })();
        },
        "./dist/compiled/p-queue/index.js": (module1)=>{
            (()=>{
                "use strict";
                var e = {
                    993: (e)=>{
                        var t = Object.prototype.hasOwnProperty, n = "~";
                        function Events() {}
                        function EE(e, t, n) {
                            this.fn = e, this.context = t, this.once = n || !1;
                        }
                        function addListener(e, t, r, i, s) {
                            if ("function" != typeof r) throw TypeError("The listener must be a function");
                            var o = new EE(r, i || e, s), u = n ? n + t : t;
                            return e._events[u] ? e._events[u].fn ? e._events[u] = [
                                e._events[u],
                                o
                            ] : e._events[u].push(o) : (e._events[u] = o, e._eventsCount++), e;
                        }
                        function clearEvent(e, t) {
                            0 == --e._eventsCount ? e._events = new Events : delete e._events[t];
                        }
                        function EventEmitter() {
                            this._events = new Events, this._eventsCount = 0;
                        }
                        Object.create && (Events.prototype = Object.create(null), (new Events).__proto__ || (n = !1)), EventEmitter.prototype.eventNames = function() {
                            var r, i, e = [];
                            if (0 === this._eventsCount) return e;
                            for(i in r = this._events)t.call(r, i) && e.push(n ? i.slice(1) : i);
                            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(r)) : e;
                        }, EventEmitter.prototype.listeners = function(e) {
                            var t = n ? n + e : e, r = this._events[t];
                            if (!r) return [];
                            if (r.fn) return [
                                r.fn
                            ];
                            for(var i = 0, s = r.length, o = Array(s); i < s; i++)o[i] = r[i].fn;
                            return o;
                        }, EventEmitter.prototype.listenerCount = function(e) {
                            var t = n ? n + e : e, r = this._events[t];
                            return r ? r.fn ? 1 : r.length : 0;
                        }, EventEmitter.prototype.emit = function(e, t, r, i, s, o) {
                            var u = n ? n + e : e;
                            if (!this._events[u]) return !1;
                            var c, h, a = this._events[u], l = arguments.length;
                            if (a.fn) {
                                switch(a.once && this.removeListener(e, a.fn, void 0, !0), l){
                                    case 1:
                                        return a.fn.call(a.context), !0;
                                    case 2:
                                        return a.fn.call(a.context, t), !0;
                                    case 3:
                                        return a.fn.call(a.context, t, r), !0;
                                    case 4:
                                        return a.fn.call(a.context, t, r, i), !0;
                                    case 5:
                                        return a.fn.call(a.context, t, r, i, s), !0;
                                    case 6:
                                        return a.fn.call(a.context, t, r, i, s, o), !0;
                                }
                                for(h = 1, c = Array(l - 1); h < l; h++)c[h - 1] = arguments[h];
                                a.fn.apply(a.context, c);
                            } else {
                                var f, _ = a.length;
                                for(h = 0; h < _; h++)switch(a[h].once && this.removeListener(e, a[h].fn, void 0, !0), l){
                                    case 1:
                                        a[h].fn.call(a[h].context);
                                        break;
                                    case 2:
                                        a[h].fn.call(a[h].context, t);
                                        break;
                                    case 3:
                                        a[h].fn.call(a[h].context, t, r);
                                        break;
                                    case 4:
                                        a[h].fn.call(a[h].context, t, r, i);
                                        break;
                                    default:
                                        if (!c) for(f = 1, c = Array(l - 1); f < l; f++)c[f - 1] = arguments[f];
                                        a[h].fn.apply(a[h].context, c);
                                }
                            }
                            return !0;
                        }, EventEmitter.prototype.on = function(e, t, n) {
                            return addListener(this, e, t, n, !1);
                        }, EventEmitter.prototype.once = function(e, t, n) {
                            return addListener(this, e, t, n, !0);
                        }, EventEmitter.prototype.removeListener = function(e, t, r, i) {
                            var s = n ? n + e : e;
                            if (!this._events[s]) return this;
                            if (!t) return clearEvent(this, s), this;
                            var o = this._events[s];
                            if (o.fn) o.fn !== t || i && !o.once || r && o.context !== r || clearEvent(this, s);
                            else {
                                for(var u = 0, a = [], l = o.length; u < l; u++)(o[u].fn !== t || i && !o[u].once || r && o[u].context !== r) && a.push(o[u]);
                                a.length ? this._events[s] = 1 === a.length ? a[0] : a : clearEvent(this, s);
                            }
                            return this;
                        }, EventEmitter.prototype.removeAllListeners = function(e) {
                            var t;
                            return e ? (t = n ? n + e : e, this._events[t] && clearEvent(this, t)) : (this._events = new Events, this._eventsCount = 0), this;
                        }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, EventEmitter.prefixed = n, EventEmitter.EventEmitter = EventEmitter, e.exports = EventEmitter;
                    },
                    213: (e)=>{
                        e.exports = (e, t)=>(t = t || (()=>{}), e.then((e)=>new Promise((e)=>{
                                    e(t());
                                }).then(()=>e), (e)=>new Promise((e)=>{
                                    e(t());
                                }).then(()=>{
                                    throw e;
                                })));
                    },
                    574: (e, t)=>{
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = function(e, t, n) {
                            let r = 0, i = e.length;
                            for(; i > 0;){
                                let s = i / 2 | 0, o = r + s;
                                0 >= n(e[o], t) ? (r = ++o, i -= s + 1) : i = s;
                            }
                            return r;
                        };
                    },
                    821: (e, t, n)=>{
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        let r = n(574);
                        t.default = class {
                            constructor(){
                                this._queue = [];
                            }
                            enqueue(e, t) {
                                let n = {
                                    priority: (t = Object.assign({
                                        priority: 0
                                    }, t)).priority,
                                    run: e
                                };
                                if (this.size && this._queue[this.size - 1].priority >= t.priority) {
                                    this._queue.push(n);
                                    return;
                                }
                                let i = r.default(this._queue, n, (e, t)=>t.priority - e.priority);
                                this._queue.splice(i, 0, n);
                            }
                            dequeue() {
                                let e = this._queue.shift();
                                return null == e ? void 0 : e.run;
                            }
                            filter(e) {
                                return this._queue.filter((t)=>t.priority === e.priority).map((e)=>e.run);
                            }
                            get size() {
                                return this._queue.length;
                            }
                        };
                    },
                    816: (e, t, n)=>{
                        let r = n(213);
                        class TimeoutError extends Error {
                            constructor(e){
                                super(e), this.name = "TimeoutError";
                            }
                        }
                        let pTimeout = (e, t, n)=>new Promise((i, s)=>{
                                if ("number" != typeof t || t < 0) throw TypeError("Expected `milliseconds` to be a positive number");
                                if (t === 1 / 0) {
                                    i(e);
                                    return;
                                }
                                let o = setTimeout(()=>{
                                    if ("function" == typeof n) {
                                        try {
                                            i(n());
                                        } catch (e) {
                                            s(e);
                                        }
                                        return;
                                    }
                                    let r = "string" == typeof n ? n : `Promise timed out after ${t} milliseconds`, o = n instanceof Error ? n : new TimeoutError(r);
                                    "function" == typeof e.cancel && e.cancel(), s(o);
                                }, t);
                                r(e.then(i, s), ()=>{
                                    clearTimeout(o);
                                });
                            });
                        e.exports = pTimeout, e.exports.default = pTimeout, e.exports.TimeoutError = TimeoutError;
                    }
                }, t = {};
                function __nccwpck_require__1(n) {
                    var r = t[n];
                    if (void 0 !== r) return r.exports;
                    var i = t[n] = {
                        exports: {}
                    }, s = !0;
                    try {
                        e[n](i, i.exports, __nccwpck_require__1), s = !1;
                    } finally{
                        s && delete t[n];
                    }
                    return i.exports;
                }
                __nccwpck_require__1.ab = __dirname + "/";
                var n = {};
                (()=>{
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    let t = __nccwpck_require__1(993), r = __nccwpck_require__1(816), i = __nccwpck_require__1(821), empty = ()=>{}, s = new r.TimeoutError;
                    n.default = class extends t {
                        constructor(e){
                            var t, n, r, s;
                            if (super(), this._intervalCount = 0, this._intervalEnd = 0, this._pendingCount = 0, this._resolveEmpty = empty, this._resolveIdle = empty, !("number" == typeof (e = Object.assign({
                                carryoverConcurrencyCount: !1,
                                intervalCap: 1 / 0,
                                interval: 0,
                                concurrency: 1 / 0,
                                autoStart: !0,
                                queueClass: i.default
                            }, e)).intervalCap && e.intervalCap >= 1)) throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null !== (n = null === (t = e.intervalCap) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : ""}\` (${typeof e.intervalCap})`);
                            if (void 0 === e.interval || !(Number.isFinite(e.interval) && e.interval >= 0)) throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null !== (s = null === (r = e.interval) || void 0 === r ? void 0 : r.toString()) && void 0 !== s ? s : ""}\` (${typeof e.interval})`);
                            this._carryoverConcurrencyCount = e.carryoverConcurrencyCount, this._isIntervalIgnored = e.intervalCap === 1 / 0 || 0 === e.interval, this._intervalCap = e.intervalCap, this._interval = e.interval, this._queue = new e.queueClass, this._queueClass = e.queueClass, this.concurrency = e.concurrency, this._timeout = e.timeout, this._throwOnTimeout = !0 === e.throwOnTimeout, this._isPaused = !1 === e.autoStart;
                        }
                        get _doesIntervalAllowAnother() {
                            return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
                        }
                        get _doesConcurrentAllowAnother() {
                            return this._pendingCount < this._concurrency;
                        }
                        _next() {
                            this._pendingCount--, this._tryToStartAnother(), this.emit("next");
                        }
                        _resolvePromises() {
                            this._resolveEmpty(), this._resolveEmpty = empty, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = empty, this.emit("idle"));
                        }
                        _onResumeInterval() {
                            this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = void 0;
                        }
                        _isIntervalPaused() {
                            let e = Date.now();
                            if (void 0 === this._intervalId) {
                                let t = this._intervalEnd - e;
                                if (!(t < 0)) return void 0 === this._timeoutId && (this._timeoutId = setTimeout(()=>{
                                    this._onResumeInterval();
                                }, t)), !0;
                                this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
                            }
                            return !1;
                        }
                        _tryToStartAnother() {
                            if (0 === this._queue.size) return this._intervalId && clearInterval(this._intervalId), this._intervalId = void 0, this._resolvePromises(), !1;
                            if (!this._isPaused) {
                                let e = !this._isIntervalPaused();
                                if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                                    let t = this._queue.dequeue();
                                    return !!t && (this.emit("active"), t(), e && this._initializeIntervalIfNeeded(), !0);
                                }
                            }
                            return !1;
                        }
                        _initializeIntervalIfNeeded() {
                            this._isIntervalIgnored || void 0 !== this._intervalId || (this._intervalId = setInterval(()=>{
                                this._onInterval();
                            }, this._interval), this._intervalEnd = Date.now() + this._interval);
                        }
                        _onInterval() {
                            0 === this._intervalCount && 0 === this._pendingCount && this._intervalId && (clearInterval(this._intervalId), this._intervalId = void 0), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0, this._processQueue();
                        }
                        _processQueue() {
                            for(; this._tryToStartAnother(););
                        }
                        get concurrency() {
                            return this._concurrency;
                        }
                        set concurrency(e) {
                            if (!("number" == typeof e && e >= 1)) throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
                            this._concurrency = e, this._processQueue();
                        }
                        async add(e, t = {}) {
                            return new Promise((n, i)=>{
                                let run = async ()=>{
                                    this._pendingCount++, this._intervalCount++;
                                    try {
                                        let o = void 0 === this._timeout && void 0 === t.timeout ? e() : r.default(Promise.resolve(e()), void 0 === t.timeout ? this._timeout : t.timeout, ()=>{
                                            (void 0 === t.throwOnTimeout ? this._throwOnTimeout : t.throwOnTimeout) && i(s);
                                        });
                                        n(await o);
                                    } catch (e) {
                                        i(e);
                                    }
                                    this._next();
                                };
                                this._queue.enqueue(run, t), this._tryToStartAnother(), this.emit("add");
                            });
                        }
                        async addAll(e, t) {
                            return Promise.all(e.map(async (e)=>this.add(e, t)));
                        }
                        start() {
                            return this._isPaused && (this._isPaused = !1, this._processQueue()), this;
                        }
                        pause() {
                            this._isPaused = !0;
                        }
                        clear() {
                            this._queue = new this._queueClass;
                        }
                        async onEmpty() {
                            if (0 !== this._queue.size) return new Promise((e)=>{
                                let t = this._resolveEmpty;
                                this._resolveEmpty = ()=>{
                                    t(), e();
                                };
                            });
                        }
                        async onIdle() {
                            if (0 !== this._pendingCount || 0 !== this._queue.size) return new Promise((e)=>{
                                let t = this._resolveIdle;
                                this._resolveIdle = ()=>{
                                    t(), e();
                                };
                            });
                        }
                        get size() {
                            return this._queue.size;
                        }
                        sizeBy(e) {
                            return this._queue.filter(e).length;
                        }
                        get pending() {
                            return this._pendingCount;
                        }
                        get isPaused() {
                            return this._isPaused;
                        }
                        get timeout() {
                            return this._timeout;
                        }
                        set timeout(e) {
                            this._timeout = e;
                        }
                    };
                })(), module1.exports = n;
            })();
        },
        "./dist/compiled/react-experimental/cjs/react.development.js": (module1, exports, __webpack_require__)=>{
            "use strict";
            module1 = __webpack_require__.nmd(module1), function() {
                function warnNoop(publicInstance, callerName) {
                    var warningKey = (publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass") + "." + callerName;
                    didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
                }
                function Component(props, context, updater) {
                    this.props = props, this.context = context, this.refs = emptyObject, this.updater = updater || ReactNoopUpdateQueue;
                }
                function ComponentDummy() {}
                function PureComponent(props, context, updater) {
                    this.props = props, this.context = context, this.refs = emptyObject, this.updater = updater || ReactNoopUpdateQueue;
                }
                function checkKeyStringCoercion(value1) {
                    try {
                        var JSCompiler_inline_result = !1;
                    } catch (e) {
                        JSCompiler_inline_result = !0;
                    }
                    if (JSCompiler_inline_result) {
                        var JSCompiler_temp_const = (JSCompiler_inline_result = console).error, JSCompiler_inline_result$jscomp$0 = "function" == typeof Symbol && Symbol.toStringTag && value1[Symbol.toStringTag] || value1.constructor.name || "Object";
                        return JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0), "" + value1;
                    }
                }
                function getComponentNameFromType(type) {
                    if (null == type) return null;
                    if ("function" == typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$1 ? null : type.displayName || type.name || null;
                    if ("string" == typeof type) return type;
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if ("object" == typeof type) switch("number" == typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
                        case REACT_CONTEXT_TYPE:
                            return (type.displayName || "Context") + ".Provider";
                        case REACT_CONSUMER_TYPE:
                            return (type._context.displayName || "Context") + ".Consumer";
                        case REACT_FORWARD_REF_TYPE:
                            var innerType = type.render;
                            return (type = type.displayName) || (type = "" !== (type = innerType.displayName || innerType.name || "") ? "ForwardRef(" + type + ")" : "ForwardRef"), type;
                        case REACT_MEMO_TYPE:
                            return null !== (innerType = type.displayName || null) ? innerType : getComponentNameFromType(type.type) || "Memo";
                        case REACT_LAZY_TYPE:
                            innerType = type._payload, type = type._init;
                            try {
                                return getComponentNameFromType(type(innerType));
                            } catch (x) {}
                    }
                    return null;
                }
                function getOwner() {
                    var dispatcher = ReactSharedInternals.A;
                    return null === dispatcher ? null : dispatcher.getOwner();
                }
                function hasValidKey(config) {
                    if (hasOwnProperty.call(config, "key")) {
                        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                        if (getter && getter.isReactWarning) return !1;
                    }
                    return void 0 !== config.key;
                }
                function elementRefGetterWithDeprecationWarning() {
                    var componentName = getComponentNameFromType(this.type);
                    return didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), void 0 !== (componentName = this.props.ref) ? componentName : null;
                }
                function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
                    return self = props.ref, type = {
                        $$typeof: REACT_ELEMENT_TYPE,
                        type: type,
                        key: key,
                        props: props,
                        _owner: owner
                    }, null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
                        enumerable: !1,
                        get: elementRefGetterWithDeprecationWarning
                    }) : Object.defineProperty(type, "ref", {
                        enumerable: !1,
                        value: null
                    }), type._store = {}, Object.defineProperty(type._store, "validated", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: 0
                    }), Object.defineProperty(type, "_debugInfo", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: null
                    }), Object.defineProperty(type, "_debugStack", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: debugStack
                    }), Object.defineProperty(type, "_debugTask", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: debugTask
                    }), Object.freeze && (Object.freeze(type.props), Object.freeze(type)), type;
                }
                function isValidElement(object) {
                    return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                function getElementKey(element, index) {
                    var key, escaperLookup;
                    return "object" == typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), key = "" + element.key, escaperLookup = {
                        "=": "=0",
                        ":": "=2"
                    }, "$" + key.replace(/[=:]/g, function(match) {
                        return escaperLookup[match];
                    })) : index.toString(36);
                }
                function noop$1() {}
                function mapChildren(children, func, context) {
                    if (null == children) return children;
                    var result = [], count = 0;
                    return function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                        var maybeIterable, type = typeof children;
                        ("undefined" === type || "boolean" === type) && (children = null);
                        var invokeCallback = !1;
                        if (null === children) invokeCallback = !0;
                        else switch(type){
                            case "bigint":
                            case "string":
                            case "number":
                                invokeCallback = !0;
                                break;
                            case "object":
                                switch(children.$$typeof){
                                    case REACT_ELEMENT_TYPE:
                                    case REACT_PORTAL_TYPE:
                                        invokeCallback = !0;
                                        break;
                                    case REACT_LAZY_TYPE:
                                        return mapIntoArray((invokeCallback = children._init)(children._payload), array, escapedPrefix, nameSoFar, callback);
                                }
                        }
                        if (invokeCallback) {
                            callback = callback(invokeCallback = children);
                            var oldElement, newKey, childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
                            return isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                                return c;
                            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), oldElement = callback, newKey = escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey, (newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask))._store.validated = oldElement._store.validated, escapedPrefix = newKey, "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback)), 1;
                        }
                        if (invokeCallback = 0, childKey = "" === nameSoFar ? "." : nameSoFar + ":", isArrayImpl(children)) for(var i = 0; i < children.length; i++)type = childKey + getElementKey(nameSoFar = children[i], i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
                        else if ("function" == typeof (i = null === (maybeIterable = children) || "object" != typeof maybeIterable ? null : "function" == typeof (maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"]) ? maybeIterable : null)) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)type = childKey + getElementKey(nameSoFar = nameSoFar.value, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
                        else if ("object" === type) {
                            if ("function" == typeof children.then) return mapIntoArray(function(thenable) {
                                switch(thenable.status){
                                    case "fulfilled":
                                        return thenable.value;
                                    case "rejected":
                                        throw thenable.reason;
                                    default:
                                        switch("string" == typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                                            "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                                        }, function(error) {
                                            "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                                        })), thenable.status){
                                            case "fulfilled":
                                                return thenable.value;
                                            case "rejected":
                                                throw thenable.reason;
                                        }
                                }
                                throw thenable;
                            }(children), array, escapedPrefix, nameSoFar, callback);
                            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (array = String(children)) ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
                        }
                        return invokeCallback;
                    }(children, result, "", "", function(child) {
                        return func.call(context, child, count++);
                    }), result;
                }
                function lazyInitializer(payload) {
                    if (-1 === payload._status) {
                        var ctor = payload._result;
                        (ctor = ctor()).then(function(moduleObject) {
                            (0 === payload._status || -1 === payload._status) && (payload._status = 1, payload._result = moduleObject);
                        }, function(error) {
                            (0 === payload._status || -1 === payload._status) && (payload._status = 2, payload._result = error);
                        }), -1 === payload._status && (payload._status = 0, payload._result = ctor);
                    }
                    if (1 === payload._status) return void 0 === (ctor = payload._result) && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
                    throw payload._result;
                }
                function resolveDispatcher() {
                    var dispatcher = ReactSharedInternals.H;
                    return null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), dispatcher;
                }
                function useOptimistic(passthrough, reducer) {
                    return resolveDispatcher().useOptimistic(passthrough, reducer);
                }
                function noop() {}
                function enqueueTask(task) {
                    if (null === enqueueTaskImpl) try {
                        var requireString = ("require" + Math.random()).slice(0, 7);
                        enqueueTaskImpl = (module1 && module1[requireString]).call(module1, "timers").setImmediate;
                    } catch (_err) {
                        enqueueTaskImpl = function(callback) {
                            !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" == typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                            var channel = new MessageChannel;
                            channel.port1.onmessage = callback, channel.port2.postMessage(void 0);
                        };
                    }
                    return enqueueTaskImpl(task);
                }
                function aggregateErrors(errors) {
                    return 1 < errors.length && "function" == typeof AggregateError ? AggregateError(errors) : errors[0];
                }
                function popActScope(prevActQueue, prevActScopeDepth) {
                    prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), actScopeDepth = prevActScopeDepth;
                }
                function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                    var queue = ReactSharedInternals.actQueue;
                    if (null !== queue) {
                        if (0 !== queue.length) try {
                            flushActQueue(queue), enqueueTask(function() {
                                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                            });
                            return;
                        } catch (error) {
                            ReactSharedInternals.thrownErrors.push(error);
                        }
                        else ReactSharedInternals.actQueue = null;
                    }
                    0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
                }
                function flushActQueue(queue) {
                    if (!isFlushing) {
                        isFlushing = !0;
                        var i = 0;
                        try {
                            for(; i < queue.length; i++)for(var callback = queue[i];;){
                                ReactSharedInternals.didUsePromise = !1;
                                var continuation = callback(!1);
                                if (null !== continuation) {
                                    if (ReactSharedInternals.didUsePromise) {
                                        queue[i] = callback, queue.splice(0, i);
                                        return;
                                    }
                                    callback = continuation;
                                } else break;
                            }
                            queue.length = 0;
                        } catch (error) {
                            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
                        } finally{
                            isFlushing = !1;
                        }
                    }
                }
                "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
                var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                Symbol.for("react.provider");
                var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), REACT_POSTPONE_TYPE = Symbol.for("react.postpone"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
                    isMounted: function() {
                        return !1;
                    },
                    enqueueForceUpdate: function(publicInstance) {
                        warnNoop(publicInstance, "forceUpdate");
                    },
                    enqueueReplaceState: function(publicInstance) {
                        warnNoop(publicInstance, "replaceState");
                    },
                    enqueueSetState: function(publicInstance) {
                        warnNoop(publicInstance, "setState");
                    }
                }, assign = Object.assign, emptyObject = {};
                Object.freeze(emptyObject), Component.prototype.isReactComponent = {}, Component.prototype.setState = function(partialState, callback) {
                    if ("object" != typeof partialState && "function" != typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, partialState, callback, "setState");
                }, Component.prototype.forceUpdate = function(callback) {
                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                };
                var fnName, deprecatedAPIs = {
                    isMounted: [
                        "isMounted",
                        "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                    ],
                    replaceState: [
                        "replaceState",
                        "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                    ]
                };
                for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && function(methodName, info) {
                    Object.defineProperty(Component.prototype, methodName, {
                        get: function() {
                            console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                        }
                    });
                }(fnName, deprecatedAPIs[fnName]);
                ComponentDummy.prototype = Component.prototype, (deprecatedAPIs = PureComponent.prototype = new ComponentDummy).constructor = PureComponent, assign(deprecatedAPIs, Component.prototype), deprecatedAPIs.isPureReactComponent = !0;
                var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), ReactSharedInternals = {
                    H: null,
                    A: null,
                    T: null,
                    S: null,
                    actQueue: null,
                    isBatchingLegacy: !1,
                    didScheduleLegacyUpdate: !1,
                    didUsePromise: !1,
                    thrownErrors: [],
                    getCurrentStack: null
                }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
                new ("function" == typeof WeakMap ? WeakMap : Map);
                var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime, createTask = console.createTask ? console.createTask : function() {
                    return null;
                }, didWarnAboutElementRef = {}, didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" == typeof reportError ? reportError : function(error) {
                    if ("object" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && "function" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", error);
                        return;
                    }
                    console.error(error);
                }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" == typeof queueMicrotask ? function(callback) {
                    queueMicrotask(function() {
                        return queueMicrotask(callback);
                    });
                } : enqueueTask;
                exports.Children = {
                    map: mapChildren,
                    forEach: function(children, forEachFunc, forEachContext) {
                        mapChildren(children, function() {
                            forEachFunc.apply(this, arguments);
                        }, forEachContext);
                    },
                    count: function(children) {
                        var n = 0;
                        return mapChildren(children, function() {
                            n++;
                        }), n;
                    },
                    toArray: function(children) {
                        return mapChildren(children, function(child) {
                            return child;
                        }) || [];
                    },
                    only: function(children) {
                        if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
                        return children;
                    }
                }, exports.Component = Component, exports.Fragment = REACT_FRAGMENT_TYPE, exports.Profiler = REACT_PROFILER_TYPE, exports.PureComponent = PureComponent, exports.StrictMode = REACT_STRICT_MODE_TYPE, exports.Suspense = REACT_SUSPENSE_TYPE, exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals, exports.__COMPILER_RUNTIME = {
                    c: function(size) {
                        return resolveDispatcher().useMemoCache(size);
                    }
                }, exports.act = function(callback) {
                    var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
                    actScopeDepth++;
                    var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
                    try {
                        var result = callback();
                    } catch (error) {
                        ReactSharedInternals.thrownErrors.push(error);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
                    if (null !== result && "object" == typeof result && "function" == typeof result.then) {
                        var thenable = result;
                        return queueSeveralMicrotasks(function() {
                            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
                        }), {
                            then: function(resolve, reject) {
                                didAwaitActCall = !0, thenable.then(function(returnValue) {
                                    if (popActScope(prevActQueue, prevActScopeDepth), 0 === prevActScopeDepth) {
                                        try {
                                            flushActQueue(queue), enqueueTask(function() {
                                                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                            });
                                        } catch (error$0) {
                                            ReactSharedInternals.thrownErrors.push(error$0);
                                        }
                                        if (0 < ReactSharedInternals.thrownErrors.length) {
                                            var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                            ReactSharedInternals.thrownErrors.length = 0, reject(_thrownError);
                                        }
                                    } else resolve(returnValue);
                                }, function(error) {
                                    popActScope(prevActQueue, prevActScopeDepth), 0 < ReactSharedInternals.thrownErrors.length && (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0), reject(error);
                                });
                            }
                        };
                    }
                    var returnValue$jscomp$0 = result;
                    if (popActScope(prevActQueue, prevActScopeDepth), 0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
                        didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
                    }), ReactSharedInternals.actQueue = null), 0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
                    return {
                        then: function(resolve, reject) {
                            didAwaitActCall = !0, 0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                                return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                            })) : resolve(returnValue$jscomp$0);
                        }
                    };
                }, exports.cache = function(fn) {
                    return function() {
                        return fn.apply(null, arguments);
                    };
                }, exports.captureOwnerStack = function() {
                    var getCurrentStack = ReactSharedInternals.getCurrentStack;
                    return null === getCurrentStack ? null : getCurrentStack();
                }, exports.cloneElement = function(element, config, children) {
                    if (null == element) throw Error("The argument must be a React element, but you passed " + element + ".");
                    var JSCompiler_inline_result, props = assign({}, element.props), key = element.key, owner = element._owner;
                    if (null != config) {
                        a: {
                            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                                JSCompiler_inline_result = !1;
                                break a;
                            }
                            JSCompiler_inline_result = void 0 !== config.ref;
                        }
                        for(propName in JSCompiler_inline_result && (owner = getOwner()), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && ("ref" !== propName || void 0 !== config.ref) && (props[propName] = config[propName]);
                    }
                    var propName = arguments.length - 2;
                    if (1 === propName) props.children = children;
                    else if (1 < propName) {
                        JSCompiler_inline_result = Array(propName);
                        for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
                        props.children = JSCompiler_inline_result;
                    }
                    for(props = ReactElement(element.type, key, void 0, void 0, owner, props, element._debugStack, element._debugTask), key = 2; key < arguments.length; key++)owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
                    return props;
                }, exports.createContext = function(defaultValue) {
                    return (defaultValue = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        _currentValue: defaultValue,
                        _currentValue2: defaultValue,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = defaultValue, defaultValue.Consumer = {
                        $$typeof: REACT_CONSUMER_TYPE,
                        _context: defaultValue
                    }, defaultValue._currentRenderer = null, defaultValue._currentRenderer2 = null, defaultValue;
                }, exports.createElement = function(type, config, children) {
                    for(var propName, i = 2; i < arguments.length; i++){
                        var node = arguments[i];
                        isValidElement(node) && node._store && (node._store.validated = 1);
                    }
                    if (i = {}, node = null, null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
                    var childrenLength = arguments.length - 2;
                    if (1 === childrenLength) i.children = children;
                    else if (1 < childrenLength) {
                        for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
                        Object.freeze && Object.freeze(childArray), i.children = childArray;
                    }
                    if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
                    return node && function(props, displayName) {
                        function warnAboutAccessingKey() {
                            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
                        }
                        warnAboutAccessingKey.isReactWarning = !0, Object.defineProperty(props, "key", {
                            get: warnAboutAccessingKey,
                            configurable: !0
                        });
                    }(i, "function" == typeof type ? type.displayName || type.name || "Unknown" : type), ReactElement(type, node, void 0, void 0, getOwner(), i, Error("react-stack-top-frame"), createTask(function(type) {
                        if (type === REACT_FRAGMENT_TYPE) return "<>";
                        if ("object" == typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
                        try {
                            var name = getComponentNameFromType(type);
                            return name ? "<" + name + ">" : "<...>";
                        } catch (x) {
                            return "<...>";
                        }
                    }(type)));
                }, exports.createRef = function() {
                    var refObject = {
                        current: null
                    };
                    return Object.seal(refObject), refObject;
                }, exports.experimental_useEffectEvent = function(callback) {
                    return resolveDispatcher().useEffectEvent(callback);
                }, exports.experimental_useOptimistic = function(passthrough, reducer) {
                    return console.error("useOptimistic is now in canary. Remove the experimental_ prefix. The prefixed alias will be removed in an upcoming release."), useOptimistic(passthrough, reducer);
                }, exports.forwardRef = function(render) {
                    null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" != typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
                    var ownName, elementType = {
                        $$typeof: REACT_FORWARD_REF_TYPE,
                        render: render
                    };
                    return Object.defineProperty(elementType, "displayName", {
                        enumerable: !1,
                        configurable: !0,
                        get: function() {
                            return ownName;
                        },
                        set: function(name) {
                            ownName = name, render.name || render.displayName || (Object.defineProperty(render, "name", {
                                value: name
                            }), render.displayName = name);
                        }
                    }), elementType;
                }, exports.isValidElement = isValidElement, exports.lazy = function(ctor) {
                    return {
                        $$typeof: REACT_LAZY_TYPE,
                        _payload: {
                            _status: -1,
                            _result: ctor
                        },
                        _init: lazyInitializer
                    };
                }, exports.memo = function(type, compare) {
                    var ownName;
                    return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) || console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type), Object.defineProperty(compare = {
                        $$typeof: REACT_MEMO_TYPE,
                        type: type,
                        compare: void 0 === compare ? null : compare
                    }, "displayName", {
                        enumerable: !1,
                        configurable: !0,
                        get: function() {
                            return ownName;
                        },
                        set: function(name) {
                            ownName = name, type.name || type.displayName || (Object.defineProperty(type, "name", {
                                value: name
                            }), type.displayName = name);
                        }
                    }), compare;
                }, exports.startTransition = function(scope) {
                    var prevTransition = ReactSharedInternals.T, currentTransition = {};
                    ReactSharedInternals.T = currentTransition, currentTransition._updatedFibers = new Set;
                    try {
                        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
                        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue), "object" == typeof returnValue && null !== returnValue && "function" == typeof returnValue.then && returnValue.then(noop, reportGlobalError);
                    } catch (error) {
                        reportGlobalError(error);
                    } finally{
                        null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
                    }
                }, exports.unstable_Activity = REACT_OFFSCREEN_TYPE, exports.unstable_DebugTracingMode = REACT_DEBUG_TRACING_MODE_TYPE, exports.unstable_SuspenseList = REACT_SUSPENSE_LIST_TYPE, exports.unstable_getCacheForType = function(resourceType) {
                    var dispatcher = ReactSharedInternals.A;
                    return dispatcher ? dispatcher.getCacheForType(resourceType) : resourceType();
                }, exports.unstable_postpone = function(reason) {
                    throw (reason = Error(reason)).$$typeof = REACT_POSTPONE_TYPE, reason;
                }, exports.unstable_useCacheRefresh = function() {
                    return resolveDispatcher().useCacheRefresh();
                }, exports.use = function(usable) {
                    return resolveDispatcher().use(usable);
                }, exports.useActionState = function(action, initialState, permalink) {
                    return resolveDispatcher().useActionState(action, initialState, permalink);
                }, exports.useCallback = function(callback, deps) {
                    return resolveDispatcher().useCallback(callback, deps);
                }, exports.useContext = function(Context) {
                    var dispatcher = resolveDispatcher();
                    return Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), dispatcher.useContext(Context);
                }, exports.useDebugValue = function(value1, formatterFn) {
                    return resolveDispatcher().useDebugValue(value1, formatterFn);
                }, exports.useDeferredValue = function(value1, initialValue) {
                    return resolveDispatcher().useDeferredValue(value1, initialValue);
                }, exports.useEffect = function(create, deps) {
                    return resolveDispatcher().useEffect(create, deps);
                }, exports.useId = function() {
                    return resolveDispatcher().useId();
                }, exports.useImperativeHandle = function(ref, create, deps) {
                    return resolveDispatcher().useImperativeHandle(ref, create, deps);
                }, exports.useInsertionEffect = function(create, deps) {
                    return resolveDispatcher().useInsertionEffect(create, deps);
                }, exports.useLayoutEffect = function(create, deps) {
                    return resolveDispatcher().useLayoutEffect(create, deps);
                }, exports.useMemo = function(create, deps) {
                    return resolveDispatcher().useMemo(create, deps);
                }, exports.useOptimistic = useOptimistic, exports.useReducer = function(reducer, initialArg, init) {
                    return resolveDispatcher().useReducer(reducer, initialArg, init);
                }, exports.useRef = function(initialValue) {
                    return resolveDispatcher().useRef(initialValue);
                }, exports.useState = function(initialState) {
                    return resolveDispatcher().useState(initialState);
                }, exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
                    return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                }, exports.useTransition = function() {
                    return resolveDispatcher().useTransition();
                }, exports.version = "19.0.0-experimental-66855b96-20241106", "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
            }();
        },
        "./dist/compiled/react-experimental/index.js": (module1, __unused_webpack_exports, __webpack_require__)=>{
            "use strict";
            module1.exports = __webpack_require__("./dist/compiled/react-experimental/cjs/react.development.js");
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module1 = __webpack_module_cache__[moduleId] = {
            id: moduleId,
            loaded: !1,
            exports: {}
        };
        return __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__), module1.loaded = !0, module1.exports;
    }
    __webpack_require__.n = (module1)=>{
        var getter = module1 && module1.__esModule ? ()=>module1.default : ()=>module1;
        return __webpack_require__.d(getter, {
            a: getter
        }), getter;
    }, __webpack_require__.d = (exports, definition)=>{
        for(var key in definition)__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop), __webpack_require__.r = (exports)=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.nmd = (module1)=>(module1.paths = [], module1.children || (module1.children = []), module1);
    var __webpack_exports__ = {};
    (()=>{
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
            AppRouteRouteModule: ()=>AppRouteRouteModule,
            WrappedNextRouterError: ()=>WrappedNextRouterError,
            default: ()=>app_route_module,
            hasNonStaticMethods: ()=>hasNonStaticMethods,
            trackDynamic: ()=>trackDynamic
        });
        var BaseServerSpan, LoadComponentsSpan, NextServerSpan, constants_NextNodeServerSpan, StartServerSpan, RenderSpan, constants_AppRenderSpan, RouterSpan, constants_NodeSpan, AppRouteRouteHandlersSpan, ResolveMetadataSpan, MiddlewareSpan, types_CachedRouteKind, types_IncrementalCacheKind, route_kind_RouteKind, _globalThis, redirect_status_code_RedirectStatusCode, RedirectType, hooks_server_context_namespaceObject = {};
        __webpack_require__.r(hooks_server_context_namespaceObject), __webpack_require__.d(hooks_server_context_namespaceObject, {
            DynamicServerError: ()=>DynamicServerError,
            isDynamicServerError: ()=>isDynamicServerError
        });
        var app_router_context_shared_runtime_namespaceObject = {};
        __webpack_require__.r(app_router_context_shared_runtime_namespaceObject), __webpack_require__.d(app_router_context_shared_runtime_namespaceObject, {
            AppRouterContext: ()=>AppRouterContext,
            GlobalLayoutRouterContext: ()=>GlobalLayoutRouterContext,
            LayoutRouterContext: ()=>LayoutRouterContext,
            MissingSlotContext: ()=>MissingSlotContext,
            TemplateContext: ()=>TemplateContext
        });
        var shared_modules_namespaceObject = {};
        __webpack_require__.r(shared_modules_namespaceObject), __webpack_require__.d(shared_modules_namespaceObject, {
            appRouterContext: ()=>app_router_context_shared_runtime_namespaceObject
        });
        class RouteModule {
            constructor({ userland, definition }){
                this.userland = userland, this.definition = definition;
            }
        }
        let ACTION_HEADER = "Next-Action", FLIGHT_HEADERS = [
            "RSC",
            "Next-Router-State-Tree",
            "Next-Router-Prefetch",
            "Next-HMR-Refresh",
            "Next-Router-Segment-Prefetch"
        ];
        class ReflectAdapter {
            static get(target, prop, receiver) {
                let value1 = Reflect.get(target, prop, receiver);
                return "function" == typeof value1 ? value1.bind(target) : value1;
            }
            static set(target, prop, value1, receiver) {
                return Reflect.set(target, prop, value1, receiver);
            }
            static has(target, prop) {
                return Reflect.has(target, prop);
            }
            static deleteProperty(target, prop) {
                return Reflect.deleteProperty(target, prop);
            }
        }
        class ReadonlyHeadersError extends Error {
            constructor(){
                super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
            }
            static callable() {
                throw new ReadonlyHeadersError;
            }
        }
        class HeadersAdapter extends Headers {
            constructor(headers){
                super(), this.headers = new Proxy(headers, {
                    get (target, prop, receiver) {
                        if ("symbol" == typeof prop) return ReflectAdapter.get(target, prop, receiver);
                        let lowercased = prop.toLowerCase(), original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                        if (void 0 !== original) return ReflectAdapter.get(target, original, receiver);
                    },
                    set (target, prop, value1, receiver) {
                        if ("symbol" == typeof prop) return ReflectAdapter.set(target, prop, value1, receiver);
                        let lowercased = prop.toLowerCase(), original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                        return ReflectAdapter.set(target, original ?? prop, value1, receiver);
                    },
                    has (target, prop) {
                        if ("symbol" == typeof prop) return ReflectAdapter.has(target, prop);
                        let lowercased = prop.toLowerCase(), original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                        return void 0 !== original && ReflectAdapter.has(target, original);
                    },
                    deleteProperty (target, prop) {
                        if ("symbol" == typeof prop) return ReflectAdapter.deleteProperty(target, prop);
                        let lowercased = prop.toLowerCase(), original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                        return void 0 === original || ReflectAdapter.deleteProperty(target, original);
                    }
                });
            }
            static seal(headers) {
                return new Proxy(headers, {
                    get (target, prop, receiver) {
                        switch(prop){
                            case "append":
                            case "delete":
                            case "set":
                                return ReadonlyHeadersError.callable;
                            default:
                                return ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
            }
            merge(value1) {
                return Array.isArray(value1) ? value1.join(", ") : value1;
            }
            static from(headers) {
                return headers instanceof Headers ? headers : new HeadersAdapter(headers);
            }
            append(name, value1) {
                let existing = this.headers[name];
                "string" == typeof existing ? this.headers[name] = [
                    existing,
                    value1
                ] : Array.isArray(existing) ? existing.push(value1) : this.headers[name] = value1;
            }
            delete(name) {
                delete this.headers[name];
            }
            get(name) {
                let value1 = this.headers[name];
                return void 0 !== value1 ? this.merge(value1) : null;
            }
            has(name) {
                return void 0 !== this.headers[name];
            }
            set(name, value1) {
                this.headers[name] = value1;
            }
            forEach(callbackfn, thisArg) {
                for (let [name, value1] of this.entries())callbackfn.call(thisArg, value1, name, this);
            }
            *entries() {
                for (let key of Object.keys(this.headers)){
                    let name = key.toLowerCase(), value1 = this.get(name);
                    yield [
                        name,
                        value1
                    ];
                }
            }
            *keys() {
                for (let key of Object.keys(this.headers)){
                    let name = key.toLowerCase();
                    yield name;
                }
            }
            *values() {
                for (let key of Object.keys(this.headers)){
                    let value1 = this.get(key);
                    yield value1;
                }
            }
            [Symbol.iterator]() {
                return this.entries();
            }
        }
        var _edge_runtime_cookies = __webpack_require__("./dist/compiled/@edge-runtime/cookies/index.js");
        let work_async_storage_external_js_namespaceObject = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)"), work_unit_async_storage_external_js_namespaceObject = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
        class ReadonlyRequestCookiesError extends Error {
            constructor(){
                super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
            }
            static callable() {
                throw new ReadonlyRequestCookiesError;
            }
        }
        class request_cookies_RequestCookiesAdapter {
            static seal(cookies) {
                return new Proxy(cookies, {
                    get (target, prop, receiver) {
                        switch(prop){
                            case "clear":
                            case "delete":
                            case "set":
                                return ReadonlyRequestCookiesError.callable;
                            default:
                                return ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
            }
        }
        let SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
        function appendMutableCookies(headers, mutableCookies) {
            let modifiedCookieValues = function(cookies) {
                let modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
                return modified && Array.isArray(modified) && 0 !== modified.length ? modified : [];
            }(mutableCookies);
            if (0 === modifiedCookieValues.length) return !1;
            let resCookies = new _edge_runtime_cookies.ResponseCookies(headers), returnedCookies = resCookies.getAll();
            for (let cookie of modifiedCookieValues)resCookies.set(cookie);
            for (let cookie of returnedCookies)resCookies.set(cookie);
            return !0;
        }
        class MutableRequestCookiesAdapter {
            static wrap(cookies, onUpdateCookies) {
                let responseCookies = new _edge_runtime_cookies.ResponseCookies(new Headers);
                for (let cookie of cookies.getAll())responseCookies.set(cookie);
                let modifiedValues = [], modifiedCookies = new Set, updateResponseCookies = ()=>{
                    let workStore = work_async_storage_external_js_namespaceObject.workAsyncStorage.getStore();
                    if (workStore && (workStore.pathWasRevalidated = !0), modifiedValues = responseCookies.getAll().filter((c)=>modifiedCookies.has(c.name)), onUpdateCookies) {
                        let serializedCookies = [];
                        for (let cookie of modifiedValues){
                            let tempCookies = new _edge_runtime_cookies.ResponseCookies(new Headers);
                            tempCookies.set(cookie), serializedCookies.push(tempCookies.toString());
                        }
                        onUpdateCookies(serializedCookies);
                    }
                }, wrappedCookies = new Proxy(responseCookies, {
                    get (target, prop, receiver) {
                        switch(prop){
                            case SYMBOL_MODIFY_COOKIE_VALUES:
                                return modifiedValues;
                            case "delete":
                                return function(...args) {
                                    modifiedCookies.add("string" == typeof args[0] ? args[0] : args[0].name);
                                    try {
                                        return target.delete(...args), wrappedCookies;
                                    } finally{
                                        updateResponseCookies();
                                    }
                                };
                            case "set":
                                return function(...args) {
                                    modifiedCookies.add("string" == typeof args[0] ? args[0] : args[0].name);
                                    try {
                                        return target.set(...args), wrappedCookies;
                                    } finally{
                                        updateResponseCookies();
                                    }
                                };
                            default:
                                return ReflectAdapter.get(target, prop, receiver);
                        }
                    }
                });
                return wrappedCookies;
            }
        }
        function ensureCookiesAreStillMutable(callingExpression) {
            if ("action" !== (0, work_unit_async_storage_external_js_namespaceObject.getExpectedRequestStore)(callingExpression).phase) throw new ReadonlyRequestCookiesError;
        }
        let NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_", WEBPACK_LAYERS_NAMES = {
            shared: "shared",
            reactServerComponents: "rsc",
            serverSideRendering: "ssr",
            actionBrowser: "action-browser",
            api: "api",
            middleware: "middleware",
            instrument: "instrument",
            edgeAsset: "edge-asset",
            appPagesBrowser: "app-pages-browser"
        };
        ({
            ...WEBPACK_LAYERS_NAMES,
            GROUP: {
                builtinReact: [
                    WEBPACK_LAYERS_NAMES.reactServerComponents,
                    WEBPACK_LAYERS_NAMES.actionBrowser
                ],
                serverOnly: [
                    WEBPACK_LAYERS_NAMES.reactServerComponents,
                    WEBPACK_LAYERS_NAMES.actionBrowser,
                    WEBPACK_LAYERS_NAMES.instrument,
                    WEBPACK_LAYERS_NAMES.middleware
                ],
                neutralTarget: [
                    WEBPACK_LAYERS_NAMES.api
                ],
                clientOnly: [
                    WEBPACK_LAYERS_NAMES.serverSideRendering,
                    WEBPACK_LAYERS_NAMES.appPagesBrowser
                ],
                bundled: [
                    WEBPACK_LAYERS_NAMES.reactServerComponents,
                    WEBPACK_LAYERS_NAMES.actionBrowser,
                    WEBPACK_LAYERS_NAMES.serverSideRendering,
                    WEBPACK_LAYERS_NAMES.appPagesBrowser,
                    WEBPACK_LAYERS_NAMES.shared,
                    WEBPACK_LAYERS_NAMES.instrument
                ],
                appPages: [
                    WEBPACK_LAYERS_NAMES.reactServerComponents,
                    WEBPACK_LAYERS_NAMES.serverSideRendering,
                    WEBPACK_LAYERS_NAMES.appPagesBrowser,
                    WEBPACK_LAYERS_NAMES.actionBrowser
                ]
            }
        });
        let tracer_namespaceObject = __turbopack_require__("[project]/node_modules/next/dist/server/lib/trace/tracer.js [app-client] (ecmascript)");
        (function(BaseServerSpan) {
            BaseServerSpan.handleRequest = "BaseServer.handleRequest", BaseServerSpan.run = "BaseServer.run", BaseServerSpan.pipe = "BaseServer.pipe", BaseServerSpan.getStaticHTML = "BaseServer.getStaticHTML", BaseServerSpan.render = "BaseServer.render", BaseServerSpan.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", BaseServerSpan.renderToResponse = "BaseServer.renderToResponse", BaseServerSpan.renderToHTML = "BaseServer.renderToHTML", BaseServerSpan.renderError = "BaseServer.renderError", BaseServerSpan.renderErrorToResponse = "BaseServer.renderErrorToResponse", BaseServerSpan.renderErrorToHTML = "BaseServer.renderErrorToHTML", BaseServerSpan.render404 = "BaseServer.render404";
        })(BaseServerSpan || (BaseServerSpan = {})), function(LoadComponentsSpan) {
            LoadComponentsSpan.loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", LoadComponentsSpan.loadComponents = "LoadComponents.loadComponents";
        }(LoadComponentsSpan || (LoadComponentsSpan = {})), function(NextServerSpan) {
            NextServerSpan.getRequestHandler = "NextServer.getRequestHandler", NextServerSpan.getServer = "NextServer.getServer", NextServerSpan.getServerRequestHandler = "NextServer.getServerRequestHandler", NextServerSpan.createServer = "createServer.createServer";
        }(NextServerSpan || (NextServerSpan = {})), function(NextNodeServerSpan) {
            NextNodeServerSpan.compression = "NextNodeServer.compression", NextNodeServerSpan.getBuildId = "NextNodeServer.getBuildId", NextNodeServerSpan.createComponentTree = "NextNodeServer.createComponentTree", NextNodeServerSpan.clientComponentLoading = "NextNodeServer.clientComponentLoading", NextNodeServerSpan.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", NextNodeServerSpan.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", NextNodeServerSpan.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", NextNodeServerSpan.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", NextNodeServerSpan.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", NextNodeServerSpan.sendRenderResult = "NextNodeServer.sendRenderResult", NextNodeServerSpan.proxyRequest = "NextNodeServer.proxyRequest", NextNodeServerSpan.runApi = "NextNodeServer.runApi", NextNodeServerSpan.render = "NextNodeServer.render", NextNodeServerSpan.renderHTML = "NextNodeServer.renderHTML", NextNodeServerSpan.imageOptimizer = "NextNodeServer.imageOptimizer", NextNodeServerSpan.getPagePath = "NextNodeServer.getPagePath", NextNodeServerSpan.getRoutesManifest = "NextNodeServer.getRoutesManifest", NextNodeServerSpan.findPageComponents = "NextNodeServer.findPageComponents", NextNodeServerSpan.getFontManifest = "NextNodeServer.getFontManifest", NextNodeServerSpan.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", NextNodeServerSpan.getRequestHandler = "NextNodeServer.getRequestHandler", NextNodeServerSpan.renderToHTML = "NextNodeServer.renderToHTML", NextNodeServerSpan.renderError = "NextNodeServer.renderError", NextNodeServerSpan.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", NextNodeServerSpan.render404 = "NextNodeServer.render404", NextNodeServerSpan.startResponse = "NextNodeServer.startResponse", NextNodeServerSpan.route = "route", NextNodeServerSpan.onProxyReq = "onProxyReq", NextNodeServerSpan.apiResolver = "apiResolver", NextNodeServerSpan.internalFetch = "internalFetch";
        }(constants_NextNodeServerSpan || (constants_NextNodeServerSpan = {})), (StartServerSpan || (StartServerSpan = {})).startServer = "startServer.startServer", function(RenderSpan) {
            RenderSpan.getServerSideProps = "Render.getServerSideProps", RenderSpan.getStaticProps = "Render.getStaticProps", RenderSpan.renderToString = "Render.renderToString", RenderSpan.renderDocument = "Render.renderDocument", RenderSpan.createBodyResult = "Render.createBodyResult";
        }(RenderSpan || (RenderSpan = {})), function(AppRenderSpan) {
            AppRenderSpan.renderToString = "AppRender.renderToString", AppRenderSpan.renderToReadableStream = "AppRender.renderToReadableStream", AppRenderSpan.getBodyResult = "AppRender.getBodyResult", AppRenderSpan.fetch = "AppRender.fetch";
        }(constants_AppRenderSpan || (constants_AppRenderSpan = {})), (RouterSpan || (RouterSpan = {})).executeRoute = "Router.executeRoute", (constants_NodeSpan || (constants_NodeSpan = {})).runHandler = "Node.runHandler", (AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {})).runHandler = "AppRouteRouteHandlers.runHandler", function(ResolveMetadataSpan) {
            ResolveMetadataSpan.generateMetadata = "ResolveMetadata.generateMetadata", ResolveMetadataSpan.generateViewport = "ResolveMetadata.generateViewport";
        }(ResolveMetadataSpan || (ResolveMetadataSpan = {})), (MiddlewareSpan || (MiddlewareSpan = {})).execute = "Middleware.execute";
        let COOKIE_NAME_PRERENDER_BYPASS = "__prerender_bypass";
        Symbol("__next_preview_data"), Symbol(COOKIE_NAME_PRERENDER_BYPASS);
        class DraftModeProvider {
            constructor(previewProps, req, cookies, mutableCookies){
                var _cookies_get;
                let isOnDemandRevalidate = previewProps && function(req, previewProps) {
                    let headers = HeadersAdapter.from(req.headers);
                    return {
                        isOnDemandRevalidate: headers.get("x-prerender-revalidate") === previewProps.previewModeId,
                        revalidateOnlyGenerated: headers.has("x-prerender-revalidate-if-generated")
                    };
                }(req, previewProps).isOnDemandRevalidate, cookieValue = null == (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) ? void 0 : _cookies_get.value;
                this.isEnabled = !!(!isOnDemandRevalidate && cookieValue && previewProps && (cookieValue === previewProps.previewModeId || "development-id" === previewProps.previewModeId)), this._previewModeId = null == previewProps ? void 0 : previewProps.previewModeId, this._mutableCookies = mutableCookies;
            }
            enable() {
                if (!this._previewModeId) throw Error("Invariant: previewProps missing previewModeId this should never happen");
                this._mutableCookies.set({
                    name: COOKIE_NAME_PRERENDER_BYPASS,
                    value: this._previewModeId,
                    httpOnly: !0,
                    sameSite: "lax",
                    secure: !1,
                    path: "/"
                });
            }
            disable() {
                this._mutableCookies.set({
                    name: COOKIE_NAME_PRERENDER_BYPASS,
                    value: "",
                    httpOnly: !0,
                    sameSite: "lax",
                    secure: !1,
                    path: "/",
                    expires: new Date(0)
                });
            }
        }
        function mergeMiddlewareCookies(req, existingCookies) {
            if ("x-middleware-set-cookie" in req.headers && "string" == typeof req.headers["x-middleware-set-cookie"]) {
                let setCookieValue = req.headers["x-middleware-set-cookie"], responseHeaders = new Headers;
                for (let cookie of function(cookiesString) {
                    var start, ch, lastComma, nextStart, cookiesSeparatorFound, cookiesStrings = [], pos = 0;
                    function skipWhitespace() {
                        for(; pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos));)pos += 1;
                        return pos < cookiesString.length;
                    }
                    for(; pos < cookiesString.length;){
                        for(start = pos, cookiesSeparatorFound = !1; skipWhitespace();)if ("," === (ch = cookiesString.charAt(pos))) {
                            for(lastComma = pos, pos += 1, skipWhitespace(), nextStart = pos; pos < cookiesString.length && "=" !== (ch = cookiesString.charAt(pos)) && ";" !== ch && "," !== ch;)pos += 1;
                            pos < cookiesString.length && "=" === cookiesString.charAt(pos) ? (cookiesSeparatorFound = !0, pos = nextStart, cookiesStrings.push(cookiesString.substring(start, lastComma)), start = pos) : pos = lastComma + 1;
                        } else pos += 1;
                        (!cookiesSeparatorFound || pos >= cookiesString.length) && cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
                    }
                    return cookiesStrings;
                }(setCookieValue))responseHeaders.append("set-cookie", cookie);
                for (let cookie of new _edge_runtime_cookies.ResponseCookies(responseHeaders).getAll())existingCookies.set(cookie);
            }
        }
        var p_queue = __webpack_require__("./dist/compiled/p-queue/index.js"), p_queue_default = __webpack_require__.n(p_queue);
        class InvariantError extends Error {
            constructor(message, options){
                super("Invariant: " + (message.endsWith(".") ? message : message + ".") + " This is a bug in Next.js.", options), this.name = "InvariantError";
            }
        }
        async function withExecuteRevalidates(store, callback) {
            if (!store) return callback();
            let savedRevalidationState = cloneRevalidationState(store);
            try {
                return await callback();
            } finally{
                let newRevalidates = function(prev, curr) {
                    let prevTags = new Set(prev.revalidatedTags), prevRevalidateWrites = new Set(prev.pendingRevalidateWrites);
                    return {
                        revalidatedTags: curr.revalidatedTags.filter((tag)=>!prevTags.has(tag)),
                        pendingRevalidates: Object.fromEntries(Object.entries(curr.pendingRevalidates).filter(([key])=>!(key in prev.pendingRevalidates))),
                        pendingRevalidateWrites: curr.pendingRevalidateWrites.filter((promise)=>!prevRevalidateWrites.has(promise))
                    };
                }(savedRevalidationState, cloneRevalidationState(store));
                await executeRevalidates(store, newRevalidates);
            }
        }
        function cloneRevalidationState(store) {
            return {
                revalidatedTags: store.revalidatedTags ? [
                    ...store.revalidatedTags
                ] : [],
                pendingRevalidates: {
                    ...store.pendingRevalidates
                },
                pendingRevalidateWrites: store.pendingRevalidateWrites ? [
                    ...store.pendingRevalidateWrites
                ] : []
            };
        }
        async function executeRevalidates(workStore, { revalidatedTags, pendingRevalidates, pendingRevalidateWrites }) {
            var _workStore_incrementalCache;
            return Promise.all([
                null == (_workStore_incrementalCache = workStore.incrementalCache) ? void 0 : _workStore_incrementalCache.revalidateTag(revalidatedTags),
                ...Object.values(pendingRevalidates),
                ...pendingRevalidateWrites
            ]);
        }
        let sharedAsyncLocalStorageNotAvailableError = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
        class FakeAsyncLocalStorage {
            disable() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
            getStore() {}
            run() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
            exit() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
            enterWith() {
                throw sharedAsyncLocalStorageNotAvailableError;
            }
            static bind(fn) {
                return fn;
            }
        }
        let maybeGlobalAsyncLocalStorage = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
        class AfterContext {
            constructor({ waitUntil, onClose, onTaskError }){
                this.workUnitStores = new Set, this.waitUntil = waitUntil, this.onClose = onClose, this.onTaskError = onTaskError, this.callbackQueue = new (p_queue_default()), this.callbackQueue.pause();
            }
            after(task) {
                if (null !== task && "object" == typeof task && "then" in task && "function" == typeof task.then) this.waitUntil || errorWaitUntilNotAvailable(), this.waitUntil(task.catch((error)=>this.reportTaskError(error)));
                else if ("function" == typeof task) this.addCallback(task);
                else throw Error("`unstable_after()`: Argument must be a promise or a function");
            }
            addCallback(callback) {
                var fn;
                if (this.waitUntil || errorWaitUntilNotAvailable(), !this.onClose) throw new InvariantError("unstable_after: Missing `onClose` implementation");
                let workUnitStore = work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage.getStore();
                if (!workUnitStore) throw new InvariantError("Missing workUnitStore in AfterContext.addCallback");
                this.workUnitStores.add(workUnitStore), this.runCallbacksOnClosePromise || (this.runCallbacksOnClosePromise = this.runCallbacksOnClose(), this.waitUntil(this.runCallbacksOnClosePromise));
                let wrappedCallback = (fn = async ()=>{
                    try {
                        await callback();
                    } catch (error) {
                        this.reportTaskError(error);
                    }
                }, maybeGlobalAsyncLocalStorage ? maybeGlobalAsyncLocalStorage.bind(fn) : FakeAsyncLocalStorage.bind(fn));
                this.callbackQueue.add(wrappedCallback);
            }
            async runCallbacksOnClose() {
                return await new Promise((resolve)=>this.onClose(resolve)), this.runCallbacks();
            }
            async runCallbacks() {
                if (0 === this.callbackQueue.size) return;
                for (let workUnitStore of this.workUnitStores)workUnitStore.phase = "after";
                let workStore = work_async_storage_external_js_namespaceObject.workAsyncStorage.getStore();
                if (!workStore) throw new InvariantError("Missing workStore in AfterContext.runCallbacks");
                return withExecuteRevalidates(workStore, ()=>(this.callbackQueue.start(), this.callbackQueue.onIdle()));
            }
            reportTaskError(error) {
                if (console.error("An error occurred in a function passed to `unstable_after()`:", error), this.onTaskError) try {
                    null == this.onTaskError || this.onTaskError.call(this, error);
                } catch (handlerError) {
                    console.error(new InvariantError("`onTaskError` threw while handling an error thrown from an `unstable_after` task", {
                        cause: handlerError
                    }));
                }
            }
        }
        function errorWaitUntilNotAvailable() {
            throw Error("`unstable_after()` will not work correctly, because `waitUntil` is not available in the current environment.");
        }
        let HTTP_METHODS = [
            "GET",
            "HEAD",
            "OPTIONS",
            "POST",
            "PUT",
            "DELETE",
            "PATCH"
        ], getDerivedTags = (pathname)=>{
            let derivedTags = [
                "/layout"
            ];
            if (pathname.startsWith("/")) {
                let pathnameParts = pathname.split("/");
                for(let i = 1; i < pathnameParts.length + 1; i++){
                    let curPathname = pathnameParts.slice(0, i).join("/");
                    curPathname && (curPathname.endsWith("/page") || curPathname.endsWith("/route") || (curPathname = `${curPathname}${curPathname.endsWith("/") ? "" : "/"}layout`), derivedTags.push(curPathname));
                }
            }
            return derivedTags;
        };
        var react_experimental = __webpack_require__("./dist/compiled/react-experimental/index.js"), react_experimental_default = __webpack_require__.n(react_experimental);
        let DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
        class DynamicServerError extends Error {
            constructor(description){
                super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
            }
        }
        function isDynamicServerError(err) {
            return "object" == typeof err && null !== err && "digest" in err && "string" == typeof err.digest && err.digest === DYNAMIC_ERROR_CODE;
        }
        class static_generation_bailout_StaticGenBailoutError extends Error {
            constructor(...args){
                super(...args), this.code = "NEXT_STATIC_GEN_BAILOUT";
            }
        }
        let hasPostpone = "function" == typeof react_experimental_default().unstable_postpone;
        function createDynamicTrackingState(isDebugDynamicAccesses) {
            return {
                isDebugDynamicAccesses,
                dynamicAccesses: [],
                syncDynamicExpression: void 0,
                syncDynamicErrorWithStack: null
            };
        }
        function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
            if ((!workUnitStore || "cache" !== workUnitStore.type && "unstable-cache" !== workUnitStore.type) && !store.forceDynamic && !store.forceStatic) {
                if (store.dynamicShouldError) throw new static_generation_bailout_StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
                if (workUnitStore) {
                    if ("prerender-ppr" === workUnitStore.type) postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
                    else if ("prerender-legacy" === workUnitStore.type) {
                        workUnitStore.revalidate = 0;
                        let err = new DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                        throw store.dynamicUsageDescription = expression, store.dynamicUsageStack = err.stack, err;
                    } else workUnitStore && "request" === workUnitStore.type && (workUnitStore.usedDynamic = !0);
                }
            }
        }
        function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
            let err = new DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            throw prerenderStore.revalidate = 0, store.dynamicUsageDescription = expression, store.dynamicUsageStack = err.stack, err;
        }
        function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
            let dynamicTracking = prerenderStore.dynamicTracking;
            throw dynamicTracking && null === dynamicTracking.syncDynamicErrorWithStack && (dynamicTracking.syncDynamicExpression = expression, dynamicTracking.syncDynamicErrorWithStack = errorWithStack, !0 === prerenderStore.validating && (dynamicTracking.syncDynamicLogged = !0)), function(route, expression, prerenderStore) {
                let error = createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
                prerenderStore.controller.abort(error);
                let dynamicTracking = prerenderStore.dynamicTracking;
                dynamicTracking && dynamicTracking.dynamicAccesses.push({
                    stack: dynamicTracking.isDebugDynamicAccesses ? Error().stack : void 0,
                    expression
                });
            }(route, expression, prerenderStore), createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
        }
        let trackSynchronousRequestDataAccessInDev = function(requestStore) {
            requestStore.prerenderPhase = !1;
        };
        function postponeWithTracking(route, expression, dynamicTracking) {
            (function() {
                if (!hasPostpone) throw Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js");
            })(), dynamicTracking && dynamicTracking.dynamicAccesses.push({
                stack: dynamicTracking.isDebugDynamicAccesses ? Error().stack : void 0,
                expression
            }), react_experimental_default().unstable_postpone(createPostponeReason(route, expression));
        }
        function createPostponeReason(route, expression) {
            return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
        }
        if (!1 === function(reason) {
            return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
        }(createPostponeReason("%%%", "^^^"))) throw Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");
        function createPrerenderInterruptedError(message) {
            let error = Error(message);
            return error.digest = "NEXT_PRERENDER_INTERRUPTED", error;
        }
        function dynamic_rendering_utils_makeHangingPromise(signal, expression) {
            let hangingPromise = new Promise((_, reject)=>{
                signal.addEventListener("abort", ()=>{
                    reject(Error(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`));
                }, {
                    once: !0
                });
            });
            return hangingPromise.catch(ignoreReject), hangingPromise;
        }
        function ignoreReject() {}
        function removeTrailingSlash(route) {
            return route.replace(/\/$/, "") || "/";
        }
        function parsePath(path) {
            let hashIndex = path.indexOf("#"), queryIndex = path.indexOf("?"), hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
            return hasQuery || hashIndex > -1 ? {
                pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
                query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
                hash: hashIndex > -1 ? path.slice(hashIndex) : ""
            } : {
                pathname: path,
                query: "",
                hash: ""
            };
        }
        function addPathPrefix(path, prefix) {
            if (!path.startsWith("/") || !prefix) return path;
            let { pathname, query, hash } = parsePath(path);
            return "" + prefix + pathname + query + hash;
        }
        function addPathSuffix(path, suffix) {
            if (!path.startsWith("/") || !suffix) return path;
            let { pathname, query, hash } = parsePath(path);
            return "" + pathname + suffix + query + hash;
        }
        function pathHasPrefix(path, prefix) {
            if ("string" != typeof path) return !1;
            let { pathname } = parsePath(path);
            return pathname === prefix || pathname.startsWith(prefix + "/");
        }
        function normalizeLocalePath(pathname, locales) {
            let detectedLocale;
            let pathnameParts = pathname.split("/");
            return (locales || []).some((locale)=>!!pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase() && (detectedLocale = locale, pathnameParts.splice(1, 1), pathname = pathnameParts.join("/") || "/", !0)), {
                pathname,
                detectedLocale
            };
        }
        RegExp(`\\n\\s+at __next_metadata_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_viewport_boundary__[\\n\\s]`), RegExp(`\\n\\s+at __next_outlet_boundary__[\\n\\s]`), function(CachedRouteKind) {
            CachedRouteKind.APP_PAGE = "APP_PAGE", CachedRouteKind.APP_ROUTE = "APP_ROUTE", CachedRouteKind.PAGES = "PAGES", CachedRouteKind.FETCH = "FETCH", CachedRouteKind.REDIRECT = "REDIRECT", CachedRouteKind.IMAGE = "IMAGE";
        }(types_CachedRouteKind || (types_CachedRouteKind = {})), function(IncrementalCacheKind) {
            IncrementalCacheKind.APP_PAGE = "APP_PAGE", IncrementalCacheKind.APP_ROUTE = "APP_ROUTE", IncrementalCacheKind.PAGES = "PAGES", IncrementalCacheKind.FETCH = "FETCH", IncrementalCacheKind.IMAGE = "IMAGE";
        }(types_IncrementalCacheKind || (types_IncrementalCacheKind = {})), new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]), new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ]), new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]), new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]), new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]), new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]), new TextEncoder, Symbol.for("NextInternalRequestMeta");
        let REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
        function parseURL(url, base) {
            return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
        }
        let Internal = Symbol("NextURLInternal");
        class NextURL {
            constructor(input, baseOrOpts, opts){
                let base, options;
                "object" == typeof baseOrOpts && "pathname" in baseOrOpts || "string" == typeof baseOrOpts ? (base = baseOrOpts, options = opts || {}) : options = opts || baseOrOpts || {}, this[Internal] = {
                    url: parseURL(input, base ?? options.base),
                    options: options,
                    basePath: ""
                }, this.analyze();
            }
            analyze() {
                var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
                let info = function(pathname, options) {
                    var _options_nextConfig, _result_pathname;
                    let { basePath, i18n, trailingSlash } = null != (_options_nextConfig = options.nextConfig) ? _options_nextConfig : {}, info = {
                        pathname,
                        trailingSlash: "/" !== pathname ? pathname.endsWith("/") : trailingSlash
                    };
                    basePath && pathHasPrefix(info.pathname, basePath) && (info.pathname = function(path, prefix) {
                        if (!pathHasPrefix(path, prefix)) return path;
                        let withoutPrefix = path.slice(prefix.length);
                        return withoutPrefix.startsWith("/") ? withoutPrefix : "/" + withoutPrefix;
                    }(info.pathname, basePath), info.basePath = basePath);
                    let pathnameNoDataPrefix = info.pathname;
                    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
                        let paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"), buildId = paths[0];
                        info.buildId = buildId, pathnameNoDataPrefix = "index" !== paths[1] ? "/" + paths.slice(1).join("/") : "/", !0 === options.parseData && (info.pathname = pathnameNoDataPrefix);
                    }
                    if (i18n) {
                        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : normalizeLocalePath(info.pathname, i18n.locales);
                        info.locale = result.detectedLocale, info.pathname = null != (_result_pathname = result.pathname) ? _result_pathname : info.pathname, !result.detectedLocale && info.buildId && (result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : normalizeLocalePath(pathnameNoDataPrefix, i18n.locales)).detectedLocale && (info.locale = result.detectedLocale);
                    }
                    return info;
                }(this[Internal].url.pathname, {
                    nextConfig: this[Internal].options.nextConfig,
                    parseData: !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
                    i18nProvider: this[Internal].options.i18nProvider
                }), hostname = function(parsed, headers) {
                    let hostname;
                    if ((null == headers ? void 0 : headers.host) && !Array.isArray(headers.host)) hostname = headers.host.toString().split(":", 1)[0];
                    else {
                        if (!parsed.hostname) return;
                        hostname = parsed.hostname;
                    }
                    return hostname.toLowerCase();
                }(this[Internal].url, this[Internal].options.headers);
                this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : function(domainItems, hostname, detectedLocale) {
                    if (domainItems) for (let item of (detectedLocale && (detectedLocale = detectedLocale.toLowerCase()), domainItems)){
                        var _item_domain, _item_locales;
                        if (hostname === (null == (_item_domain = item.domain) ? void 0 : _item_domain.split(":", 1)[0].toLowerCase()) || detectedLocale === item.defaultLocale.toLowerCase() || (null == (_item_locales = item.locales) ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) return item;
                    }
                }(null == (_this_Internal_options_nextConfig = this[Internal].options.nextConfig) ? void 0 : null == (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
                let defaultLocale = (null == (_this_Internal_domainLocale = this[Internal].domainLocale) ? void 0 : _this_Internal_domainLocale.defaultLocale) || (null == (_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) ? void 0 : null == (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
                this[Internal].url.pathname = info.pathname, this[Internal].defaultLocale = defaultLocale, this[Internal].basePath = info.basePath ?? "", this[Internal].buildId = info.buildId, this[Internal].locale = info.locale ?? defaultLocale, this[Internal].trailingSlash = info.trailingSlash;
            }
            formatPathname() {
                var info;
                let pathname;
                return pathname = function(path, locale, defaultLocale, ignorePrefix) {
                    if (!locale || locale === defaultLocale) return path;
                    let lower = path.toLowerCase();
                    return !ignorePrefix && (pathHasPrefix(lower, "/api") || pathHasPrefix(lower, "/" + locale.toLowerCase())) ? path : addPathPrefix(path, "/" + locale);
                }((info = {
                    basePath: this[Internal].basePath,
                    buildId: this[Internal].buildId,
                    defaultLocale: this[Internal].options.forceLocale ? void 0 : this[Internal].defaultLocale,
                    locale: this[Internal].locale,
                    pathname: this[Internal].url.pathname,
                    trailingSlash: this[Internal].trailingSlash
                }).pathname, info.locale, info.buildId ? void 0 : info.defaultLocale, info.ignorePrefix), (info.buildId || !info.trailingSlash) && (pathname = removeTrailingSlash(pathname)), info.buildId && (pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), "/" === info.pathname ? "index.json" : ".json")), pathname = addPathPrefix(pathname, info.basePath), !info.buildId && info.trailingSlash ? pathname.endsWith("/") ? pathname : addPathSuffix(pathname, "/") : removeTrailingSlash(pathname);
            }
            formatSearch() {
                return this[Internal].url.search;
            }
            get buildId() {
                return this[Internal].buildId;
            }
            set buildId(buildId) {
                this[Internal].buildId = buildId;
            }
            get locale() {
                return this[Internal].locale ?? "";
            }
            set locale(locale) {
                var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
                if (!this[Internal].locale || !(null == (_this_Internal_options_nextConfig = this[Internal].options.nextConfig) ? void 0 : null == (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) throw TypeError(`The NextURL configuration includes no locale "${locale}"`);
                this[Internal].locale = locale;
            }
            get defaultLocale() {
                return this[Internal].defaultLocale;
            }
            get domainLocale() {
                return this[Internal].domainLocale;
            }
            get searchParams() {
                return this[Internal].url.searchParams;
            }
            get host() {
                return this[Internal].url.host;
            }
            set host(value1) {
                this[Internal].url.host = value1;
            }
            get hostname() {
                return this[Internal].url.hostname;
            }
            set hostname(value1) {
                this[Internal].url.hostname = value1;
            }
            get port() {
                return this[Internal].url.port;
            }
            set port(value1) {
                this[Internal].url.port = value1;
            }
            get protocol() {
                return this[Internal].url.protocol;
            }
            set protocol(value1) {
                this[Internal].url.protocol = value1;
            }
            get href() {
                let pathname = this.formatPathname(), search = this.formatSearch();
                return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
            }
            set href(url) {
                this[Internal].url = parseURL(url), this.analyze();
            }
            get origin() {
                return this[Internal].url.origin;
            }
            get pathname() {
                return this[Internal].url.pathname;
            }
            set pathname(value1) {
                this[Internal].url.pathname = value1;
            }
            get hash() {
                return this[Internal].url.hash;
            }
            set hash(value1) {
                this[Internal].url.hash = value1;
            }
            get search() {
                return this[Internal].url.search;
            }
            set search(value1) {
                this[Internal].url.search = value1;
            }
            get password() {
                return this[Internal].url.password;
            }
            set password(value1) {
                this[Internal].url.password = value1;
            }
            get username() {
                return this[Internal].url.username;
            }
            set username(value1) {
                this[Internal].url.username = value1;
            }
            get basePath() {
                return this[Internal].basePath;
            }
            set basePath(value1) {
                this[Internal].basePath = value1.startsWith("/") ? value1 : `/${value1}`;
            }
            toString() {
                return this.href;
            }
            toJSON() {
                return this.href;
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
                return {
                    href: this.href,
                    origin: this.origin,
                    protocol: this.protocol,
                    username: this.username,
                    password: this.password,
                    host: this.host,
                    hostname: this.hostname,
                    port: this.port,
                    pathname: this.pathname,
                    search: this.search,
                    searchParams: this.searchParams,
                    hash: this.hash
                };
            }
            clone() {
                return new NextURL(String(this), this[Internal].options);
            }
        }
        Symbol("internal request"), Request, Symbol.for("edge-runtime.inspect.custom"), function(RouteKind) {
            RouteKind.PAGES = "PAGES", RouteKind.PAGES_API = "PAGES_API", RouteKind.APP_PAGE = "APP_PAGE", RouteKind.APP_ROUTE = "APP_ROUTE", RouteKind.IMAGE = "IMAGE";
        }(route_kind_RouteKind || (route_kind_RouteKind = {}));
        let scheduler_scheduleImmediate = (cb)=>{
            setImmediate(cb);
        }, NEXT_PATCH_SYMBOL = Symbol.for("next-patch");
        function trackFetchMetric(workStore, ctx) {
            var _workStore_requestEndedState;
            workStore && (null == (_workStore_requestEndedState = workStore.requestEndedState) || !_workStore_requestEndedState.ended) && ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_DEBUG_BUILD || "1" === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_SSG_FETCH_METRICS) && workStore.isStaticGeneration, workStore.fetchMetrics ??= [], workStore.fetchMetrics.push({
                ...ctx,
                end: performance.timeOrigin + performance.now(),
                idx: workStore.nextFetchId || 0
            }));
        }
        let { env, stdout } = (null == (_globalThis = globalThis) ? void 0 : _globalThis.process) ?? {}, enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (null == stdout ? void 0 : stdout.isTTY) && !env.CI && "dumb" !== env.TERM), replaceClose = (str, close, replace, index)=>{
            let start = str.substring(0, index) + replace, end = str.substring(index + close.length), nextIndex = end.indexOf(close);
            return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
        }, formatter = (open, close, replace = open)=>enabled ? (input)=>{
                let string = "" + input, index = string.indexOf(close, open.length);
                return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
            } : String, bold = formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m");
        formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m"), formatter("\x1b[3m", "\x1b[23m"), formatter("\x1b[4m", "\x1b[24m"), formatter("\x1b[7m", "\x1b[27m"), formatter("\x1b[8m", "\x1b[28m"), formatter("\x1b[9m", "\x1b[29m"), formatter("\x1b[30m", "\x1b[39m");
        let red = formatter("\x1b[31m", "\x1b[39m"), green = formatter("\x1b[32m", "\x1b[39m"), yellow = formatter("\x1b[33m", "\x1b[39m");
        formatter("\x1b[34m", "\x1b[39m");
        let magenta = formatter("\x1b[35m", "\x1b[39m");
        formatter("\x1b[38;2;173;127;168m", "\x1b[39m"), formatter("\x1b[36m", "\x1b[39m");
        let white = formatter("\x1b[37m", "\x1b[39m");
        formatter("\x1b[90m", "\x1b[39m"), formatter("\x1b[40m", "\x1b[49m"), formatter("\x1b[41m", "\x1b[49m"), formatter("\x1b[42m", "\x1b[49m"), formatter("\x1b[43m", "\x1b[49m"), formatter("\x1b[44m", "\x1b[49m"), formatter("\x1b[45m", "\x1b[49m"), formatter("\x1b[46m", "\x1b[49m"), formatter("\x1b[47m", "\x1b[49m");
        let prefixes = {
            wait: white(bold("○")),
            error: red(bold("⨯")),
            warn: yellow(bold("⚠")),
            ready: "▲",
            info: white(bold(" ")),
            event: green(bold("✓")),
            trace: magenta(bold("»"))
        }, LOGGING_METHOD = {
            log: "log",
            warn: "warn",
            error: "error"
        };
        function error(...message) {
            (function(prefixType, ...message) {
                ("" === message[0] || void 0 === message[0]) && 1 === message.length && message.shift();
                let consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : "log", prefix = prefixes[prefixType];
                0 === message.length ? console[consoleMethod]("") : 1 === message.length && "string" == typeof message[0] ? console[consoleMethod](" " + prefix + " " + message[0]) : console[consoleMethod](" " + prefix, ...message);
            })("error", ...message);
        }
        let AUTOMATIC_ROUTE_METHODS = [
            "HEAD",
            "OPTIONS"
        ];
        function handleMethodNotAllowedResponse() {
            return new Response(null, {
                status: 405
            });
        }
        function printDebugThrownValueForProspectiveRender(thrownValue, route) {
            let message;
            if ("object" == typeof thrownValue && null !== thrownValue && "string" == typeof thrownValue.message) {
                if (message = thrownValue.message, "string" == typeof thrownValue.stack) {
                    let originalErrorStack = thrownValue.stack, stackStart = originalErrorStack.indexOf("\n");
                    if (stackStart > -1) {
                        let error = Error(`Route ${route} errored during the prospective render. These errors are normally ignored and may not prevent the route from prerendering but are logged here because build debugging is enabled.
          
Original Error: ${message}`);
                        error.stack = "Error: " + error.message + originalErrorStack.slice(stackStart), console.error(error);
                        return;
                    }
                }
            } else "string" == typeof thrownValue && (message = thrownValue);
            if (message) {
                console.error(`Route ${route} errored during the prospective render. These errors are normally ignored and may not prevent the route from prerendering but are logged here because build debugging is enabled. No stack was provided.
          
Original Message: ${message}`);
                return;
            }
            console.error(`Route ${route} errored during the prospective render. These errors are normally ignored and may not prevent the route from prerendering but are logged here because build debugging is enabled. The thrown value is logged just following this message`), console.error(thrownValue);
        }
        let action_async_storage_external_js_namespaceObject = __turbopack_require__("[project]/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)"), AppRouterContext = react_experimental_default().createContext(null), LayoutRouterContext = react_experimental_default().createContext(null), GlobalLayoutRouterContext = react_experimental_default().createContext(null), TemplateContext = react_experimental_default().createContext(null);
        AppRouterContext.displayName = "AppRouterContext", LayoutRouterContext.displayName = "LayoutRouterContext", GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext", TemplateContext.displayName = "TemplateContext";
        let MissingSlotContext = react_experimental_default().createContext(new Set);
        class CacheSignal {
            constructor(){
                this.count = 0, this.earlyListeners = [], this.listeners = [], this.tickPending = !1, this.taskPending = !1;
            }
            noMorePendingCaches() {
                this.tickPending || (this.tickPending = !0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(()=>{
                    if (this.tickPending = !1, 0 === this.count) {
                        for(let i = 0; i < this.earlyListeners.length; i++)this.earlyListeners[i]();
                        this.earlyListeners.length = 0;
                    }
                })), this.taskPending || (this.taskPending = !0, setTimeout(()=>{
                    if (this.taskPending = !1, 0 === this.count) {
                        for(let i = 0; i < this.listeners.length; i++)this.listeners[i]();
                        this.listeners.length = 0;
                    }
                }, 0));
            }
            inputReady() {
                return new Promise((resolve)=>{
                    this.earlyListeners.push(resolve), 0 === this.count && this.noMorePendingCaches();
                });
            }
            cacheReady() {
                return new Promise((resolve)=>{
                    this.listeners.push(resolve), 0 === this.count && this.noMorePendingCaches();
                });
            }
            beginRead() {
                this.count++;
            }
            endRead() {
                this.count--, 0 === this.count && this.noMorePendingCaches();
            }
        }
        let isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
        function describeStringPropertyAccess(target, prop) {
            return isDefinitelyAValidIdentifier.test(prop) ? `\`${target}.${prop}\`` : `\`${target}[${JSON.stringify(prop)}]\``;
        }
        let wellKnownProperties = new Set([
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toString",
            "valueOf",
            "toLocaleString",
            "then",
            "catch",
            "finally",
            "status",
            "displayName",
            "toJSON",
            "$$typeof",
            "__esModule"
        ]), errorRef = {
            current: null
        }, cache = "function" == typeof react_experimental.cache ? react_experimental.cache : (fn)=>fn, logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : console.warn, flushCurrentErrorIfNew = cache((key)=>{
            try {
                logErrorOrWarn(errorRef.current);
            } finally{
                errorRef.current = null;
            }
        });
        function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
            return function(...args) {
                let message = getMessage(...args);
                {
                    var _stack;
                    let callStackFrames = null == (_stack = Error().stack) ? void 0 : _stack.split("\n");
                    if (void 0 === callStackFrames || callStackFrames.length < 4) logErrorOrWarn(message);
                    else {
                        let key = callStackFrames[4];
                        errorRef.current = message, flushCurrentErrorIfNew(key);
                    }
                }
            };
        }
        let CachedParams = new WeakMap;
        function makeUntrackedExoticParams(underlyingParams) {
            let cachedParams = CachedParams.get(underlyingParams);
            if (cachedParams) return cachedParams;
            let promise = Promise.resolve(underlyingParams);
            return CachedParams.set(underlyingParams, promise), Object.keys(underlyingParams).forEach((prop)=>{
                wellKnownProperties.has(prop) || (promise[prop] = underlyingParams[prop]);
            }), promise;
        }
        function syncIODev(route, expression, missingProperties) {
            let workUnitStore = work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage.getStore();
            workUnitStore && "request" === workUnitStore.type && !0 === workUnitStore.prerenderPhase && trackSynchronousRequestDataAccessInDev(workUnitStore), missingProperties && missingProperties.length > 0 ? warnForIncompleteEnumeration(route, expression, missingProperties) : warnForSyncAccess(route, expression);
        }
        let noop = ()=>{}, warnForSyncAccess = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : createDedupedByCallsiteServerErrorLoggerDev(createParamsAccessError), warnForIncompleteEnumeration = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : createDedupedByCallsiteServerErrorLoggerDev(function(route, expression, missingProperties) {
            let prefix = route ? `Route "${route}" ` : "This route ";
            return Error(`${prefix}used ${expression}. \`params\` should be awaited before using its properties. The following properties were not available through enumeration because they conflict with builtin property names: ${function(properties) {
                switch(properties.length){
                    case 0:
                        throw new InvariantError("Expected describeListOfPropertyNames to be called with a non-empty list of strings.");
                    case 1:
                        return `\`${properties[0]}\``;
                    case 2:
                        return `\`${properties[0]}\` and \`${properties[1]}\``;
                    default:
                        {
                            let description = "";
                            for(let i = 0; i < properties.length - 1; i++)description += `\`${properties[i]}\`, `;
                            return description + `, and \`${properties[properties.length - 1]}\``;
                        }
                }
            }(missingProperties)}. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
        });
        function createParamsAccessError(route, expression) {
            let prefix = route ? `Route "${route}" ` : "This route ";
            return Error(`${prefix}used ${expression}. \`params\` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
        }
        function isRedirectError(error) {
            if ("object" != typeof error || null === error || !("digest" in error) || "string" != typeof error.digest) return !1;
            let digest = error.digest.split(";"), [errorCode, type] = digest, destination = digest.slice(2, -2).join(";"), statusCode = Number(digest.at(-2));
            return "NEXT_REDIRECT" === errorCode && ("replace" === type || "push" === type) && "string" == typeof destination && !isNaN(statusCode) && statusCode in redirect_status_code_RedirectStatusCode;
        }
        (function(RedirectStatusCode) {
            RedirectStatusCode[RedirectStatusCode.SeeOther = 303] = "SeeOther", RedirectStatusCode[RedirectStatusCode.TemporaryRedirect = 307] = "TemporaryRedirect", RedirectStatusCode[RedirectStatusCode.PermanentRedirect = 308] = "PermanentRedirect";
        })(redirect_status_code_RedirectStatusCode || (redirect_status_code_RedirectStatusCode = {})), function(RedirectType) {
            RedirectType.push = "push", RedirectType.replace = "replace";
        }(RedirectType || (RedirectType = {}));
        class WrappedNextRouterError {
            constructor(error, headers){
                this.error = error, this.headers = headers;
            }
        }
        class AppRouteRouteModule extends RouteModule {
            static #_ = this.sharedModules = shared_modules_namespaceObject;
            constructor({ userland, definition, resolvedPagePath, nextConfigOutput }){
                if (super({
                    userland,
                    definition
                }), this.workUnitAsyncStorage = work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage, this.workAsyncStorage = work_async_storage_external_js_namespaceObject.workAsyncStorage, this.serverHooks = hooks_server_context_namespaceObject, this.actionAsyncStorage = action_async_storage_external_js_namespaceObject.actionAsyncStorage, this.resolvedPagePath = resolvedPagePath, this.nextConfigOutput = nextConfigOutput, this.methods = function(handlers) {
                    let methods = HTTP_METHODS.reduce((acc, method)=>({
                            ...acc,
                            [method]: handlers[method] ?? handleMethodNotAllowedResponse
                        }), {}), implemented = new Set(HTTP_METHODS.filter((method)=>handlers[method]));
                    for (let method of AUTOMATIC_ROUTE_METHODS.filter((method)=>!implemented.has(method))){
                        if ("HEAD" === method) {
                            handlers.GET && (methods.HEAD = handlers.GET, implemented.add("HEAD"));
                            continue;
                        }
                        if ("OPTIONS" === method) {
                            let allow = [
                                "OPTIONS",
                                ...implemented
                            ];
                            !implemented.has("HEAD") && implemented.has("GET") && allow.push("HEAD");
                            let headers = {
                                Allow: allow.sort().join(", ")
                            };
                            methods.OPTIONS = ()=>new Response(null, {
                                    status: 204,
                                    headers
                                }), implemented.add("OPTIONS");
                            continue;
                        }
                        throw Error(`Invariant: should handle all automatic implementable methods, got method: ${method}`);
                    }
                    return methods;
                }(userland), this.hasNonStaticMethods = hasNonStaticMethods(userland), this.dynamic = this.userland.dynamic, "export" === this.nextConfigOutput) {
                    if ("force-dynamic" === this.dynamic) throw Error(`export const dynamic = "force-dynamic" on page "${definition.pathname}" cannot be used with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export`);
                    if (!function(mod) {
                        return "force-static" === mod.dynamic || "error" === mod.dynamic || !1 === mod.revalidate || void 0 !== mod.revalidate && mod.revalidate > 0 || "function" == typeof mod.generateStaticParams;
                    }(this.userland) && this.userland.GET) throw Error(`export const dynamic = "force-static"/export const revalidate not configured on route "${definition.pathname}" with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export`);
                    this.dynamic = "error";
                }
                for (let method of HTTP_METHODS.map((method)=>method.toLowerCase()))method in this.userland && error(`Detected lowercase method '${method}' in '${this.resolvedPagePath}'. Export the uppercase '${method.toUpperCase()}' method name to fix this error.`);
                "default" in this.userland && error(`Detected default export in '${this.resolvedPagePath}'. Export a named export for each HTTP method instead.`), HTTP_METHODS.some((method)=>method in this.userland) || error(`No HTTP methods exported in '${this.resolvedPagePath}'. Export a named export for each HTTP method.`);
            }
            resolve(method) {
                return HTTP_METHODS.includes(method) ? this.methods[method] : ()=>new Response(null, {
                        status: 400
                    });
            }
            async do(handler, actionStore, workStore, requestStore, implicitTags, request, context) {
                var _context_renderOpts_experimental, _workStore_incrementalCache, _prerenderStore_tags, trackingState, _trackingState_dynamicAccesses_;
                let res;
                let isStaticGeneration = workStore.isStaticGeneration, dynamicIOEnabled = !!(null == (_context_renderOpts_experimental = context.renderOpts.experimental) ? void 0 : _context_renderOpts_experimental.dynamicIO);
                !function(options) {
                    if (!0 === globalThis[NEXT_PATCH_SYMBOL]) return;
                    let original = function(originalFetch) {
                        let getCacheEntries = react_experimental.cache((url)=>[]);
                        return function(resource, options) {
                            let url, cacheKey, match;
                            if (options && options.signal) return originalFetch(resource, options);
                            if ("string" != typeof resource || options) {
                                let request = "string" == typeof resource || resource instanceof URL ? new Request(resource, options) : resource;
                                if ("GET" !== request.method && "HEAD" !== request.method || request.keepalive) return originalFetch(resource, options);
                                cacheKey = JSON.stringify([
                                    request.method,
                                    Array.from(request.headers.entries()),
                                    request.mode,
                                    request.redirect,
                                    request.credentials,
                                    request.referrer,
                                    request.referrerPolicy,
                                    request.integrity
                                ]), url = request.url;
                            } else cacheKey = '["GET",[],null,"follow",null,null,null,null]', url = resource;
                            let cacheEntries = getCacheEntries(url);
                            if (0 === cacheEntries.length) match = originalFetch(resource, options), cacheEntries.push(cacheKey, match);
                            else {
                                for(let i = 0, l = cacheEntries.length; i < l; i += 2){
                                    let key = cacheEntries[i], value1 = cacheEntries[i + 1];
                                    if (key === cacheKey) return (match = value1).then((response)=>response.clone());
                                }
                                match = originalFetch(resource, options), cacheEntries.push(cacheKey, match);
                            }
                            return match.then((response)=>response.clone());
                        };
                    }(globalThis.fetch);
                    globalThis.fetch = function(originFetch, { workAsyncStorage, workUnitAsyncStorage }) {
                        let patched = async (input, init)=>{
                            var _init_method, _init_next;
                            let url;
                            try {
                                (url = new URL(input instanceof Request ? input.url : input)).username = "", url.password = "";
                            } catch  {
                                url = void 0;
                            }
                            let fetchUrl = (null == url ? void 0 : url.href) ?? "", method = (null == init ? void 0 : null == (_init_method = init.method) ? void 0 : _init_method.toUpperCase()) || "GET", isInternal = (null == init ? void 0 : null == (_init_next = init.next) ? void 0 : _init_next.internal) === !0, hideSpan = "1" === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_OTEL_FETCH_DISABLED, fetchStart = isInternal ? void 0 : performance.timeOrigin + performance.now(), workStore = workAsyncStorage.getStore(), workUnitStore = workUnitAsyncStorage.getStore(), cacheSignal = workUnitStore && "prerender" === workUnitStore.type ? workUnitStore.cacheSignal : null;
                            cacheSignal && cacheSignal.beginRead();
                            let result = (0, tracer_namespaceObject.getTracer)().trace(isInternal ? constants_NextNodeServerSpan.internalFetch : constants_AppRenderSpan.fetch, {
                                hideSpan,
                                kind: tracer_namespaceObject.SpanKind.CLIENT,
                                spanName: [
                                    "fetch",
                                    method,
                                    fetchUrl
                                ].filter(Boolean).join(" "),
                                attributes: {
                                    "http.url": fetchUrl,
                                    "http.method": method,
                                    "net.peer.name": null == url ? void 0 : url.hostname,
                                    "net.peer.port": (null == url ? void 0 : url.port) || void 0
                                }
                            }, async ()=>{
                                var _getRequestMeta;
                                let cacheWarning, cacheKey, cacheReasonOverride, finalRevalidate;
                                if (isInternal || !workStore || workStore.isDraftMode) return originFetch(input, init);
                                let isRequestInput = input && "object" == typeof input && "string" == typeof input.method, getRequestMeta = (field)=>(null == init ? void 0 : init[field]) || (isRequestInput ? input[field] : null), getNextField = (field)=>{
                                    var _init_next, _init_next1, _input_next;
                                    return void 0 !== (null == init ? void 0 : null == (_init_next = init.next) ? void 0 : _init_next[field]) ? null == init ? void 0 : null == (_init_next1 = init.next) ? void 0 : _init_next1[field] : isRequestInput ? null == (_input_next = input.next) ? void 0 : _input_next[field] : void 0;
                                }, currentFetchRevalidate = getNextField("revalidate"), tags = function(tags, description) {
                                    let validTags = [], invalidTags = [];
                                    for(let i = 0; i < tags.length; i++){
                                        let tag = tags[i];
                                        if ("string" != typeof tag ? invalidTags.push({
                                            tag,
                                            reason: "invalid type, must be a string"
                                        }) : tag.length > 256 ? invalidTags.push({
                                            tag,
                                            reason: "exceeded max length of 256"
                                        }) : validTags.push(tag), validTags.length > 64) {
                                            console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(", "));
                                            break;
                                        }
                                    }
                                    if (invalidTags.length > 0) for (let { tag, reason } of (console.warn(`Warning: invalid tags passed to ${description}: `), invalidTags))console.log(`tag: "${tag}" ${reason}`);
                                    return validTags;
                                }(getNextField("tags") || [], `fetch ${input.toString()}`), revalidateStore = workUnitStore && ("cache" === workUnitStore.type || "prerender" === workUnitStore.type || "prerender-ppr" === workUnitStore.type || "prerender-legacy" === workUnitStore.type) ? workUnitStore : void 0;
                                if (revalidateStore && Array.isArray(tags)) {
                                    let collectedTags = revalidateStore.tags ?? (revalidateStore.tags = []);
                                    for (let tag of tags)collectedTags.includes(tag) || collectedTags.push(tag);
                                }
                                let implicitTags = workUnitStore && "unstable-cache" !== workUnitStore.type ? workUnitStore.implicitTags : [], pageFetchCacheMode = workUnitStore && "unstable-cache" === workUnitStore.type ? "force-no-store" : workStore.fetchCache, isUsingNoStore = !!workStore.isUnstableNoStore, currentFetchCacheConfig = getRequestMeta("cache"), cacheReason = "";
                                "string" == typeof currentFetchCacheConfig && void 0 !== currentFetchRevalidate && ("force-cache" === currentFetchCacheConfig && 0 === currentFetchRevalidate || "no-store" === currentFetchCacheConfig && (currentFetchRevalidate > 0 || !1 === currentFetchRevalidate)) && (cacheWarning = `Specified "cache: ${currentFetchCacheConfig}" and "revalidate: ${currentFetchRevalidate}", only one should be specified.`, currentFetchCacheConfig = void 0, currentFetchRevalidate = void 0);
                                let hasExplicitFetchCacheOptOut = "no-cache" === currentFetchCacheConfig || "no-store" === currentFetchCacheConfig || "force-no-store" === pageFetchCacheMode || "only-no-store" === pageFetchCacheMode, noFetchConfigAndForceDynamic = !pageFetchCacheMode && !currentFetchCacheConfig && !currentFetchRevalidate && workStore.forceDynamic;
                                "force-cache" === currentFetchCacheConfig && void 0 === currentFetchRevalidate ? currentFetchRevalidate = !1 : (null == workUnitStore ? void 0 : workUnitStore.type) !== "cache" && (hasExplicitFetchCacheOptOut || noFetchConfigAndForceDynamic) && (currentFetchRevalidate = 0), ("no-cache" === currentFetchCacheConfig || "no-store" === currentFetchCacheConfig) && (cacheReason = `cache: ${currentFetchCacheConfig}`), finalRevalidate = function(revalidateVal, route) {
                                    try {
                                        let normalizedRevalidate;
                                        if (!1 === revalidateVal) normalizedRevalidate = 4294967294;
                                        else if ("number" == typeof revalidateVal && !isNaN(revalidateVal) && revalidateVal > -1) normalizedRevalidate = revalidateVal;
                                        else if (void 0 !== revalidateVal) throw Error(`Invalid revalidate value "${revalidateVal}" on "${route}", must be a non-negative number or false`);
                                        return normalizedRevalidate;
                                    } catch (err) {
                                        if (err instanceof Error && err.message.includes("Invalid revalidate")) throw err;
                                        return;
                                    }
                                }(currentFetchRevalidate, workStore.route);
                                let _headers = getRequestMeta("headers"), initHeaders = "function" == typeof (null == _headers ? void 0 : _headers.get) ? _headers : new Headers(_headers || {}), hasUnCacheableHeader = initHeaders.get("authorization") || initHeaders.get("cookie"), isUnCacheableMethod = ![
                                    "get",
                                    "head"
                                ].includes((null == (_getRequestMeta = getRequestMeta("method")) ? void 0 : _getRequestMeta.toLowerCase()) || "get"), hasNoExplicitCacheConfig = void 0 == pageFetchCacheMode && (void 0 == currentFetchCacheConfig || "default" === currentFetchCacheConfig) && void 0 == currentFetchRevalidate, autoNoCache = hasNoExplicitCacheConfig && !workStore.isPrerendering || (hasUnCacheableHeader || isUnCacheableMethod) && revalidateStore && 0 === revalidateStore.revalidate;
                                if (hasNoExplicitCacheConfig && void 0 !== workUnitStore && "prerender" === workUnitStore.type) return cacheSignal && (cacheSignal.endRead(), cacheSignal = null), dynamic_rendering_utils_makeHangingPromise(workUnitStore.renderSignal, "fetch()");
                                switch(pageFetchCacheMode){
                                    case "force-no-store":
                                        cacheReason = "fetchCache = force-no-store";
                                        break;
                                    case "only-no-store":
                                        if ("force-cache" === currentFetchCacheConfig || void 0 !== finalRevalidate && finalRevalidate > 0) throw Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`);
                                        cacheReason = "fetchCache = only-no-store";
                                        break;
                                    case "only-cache":
                                        if ("no-store" === currentFetchCacheConfig) throw Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`);
                                        break;
                                    case "force-cache":
                                        (void 0 === currentFetchRevalidate || 0 === currentFetchRevalidate) && (cacheReason = "fetchCache = force-cache", finalRevalidate = 4294967294);
                                }
                                if (void 0 === finalRevalidate ? "default-cache" !== pageFetchCacheMode || isUsingNoStore ? "default-no-store" === pageFetchCacheMode ? (finalRevalidate = 0, cacheReason = "fetchCache = default-no-store") : isUsingNoStore ? (finalRevalidate = 0, cacheReason = "noStore call") : autoNoCache ? (finalRevalidate = 0, cacheReason = "auto no cache") : (cacheReason = "auto cache", finalRevalidate = revalidateStore ? revalidateStore.revalidate : 4294967294) : (finalRevalidate = 4294967294, cacheReason = "fetchCache = default-cache") : cacheReason || (cacheReason = `revalidate: ${finalRevalidate}`), !(workStore.forceStatic && 0 === finalRevalidate) && !autoNoCache && revalidateStore && finalRevalidate < revalidateStore.revalidate) {
                                    if (0 === finalRevalidate) {
                                        if (workUnitStore && "prerender" === workUnitStore.type) return cacheSignal && (cacheSignal.endRead(), cacheSignal = null), dynamic_rendering_utils_makeHangingPromise(workUnitStore.renderSignal, "fetch()");
                                        markCurrentScopeAsDynamic(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                                    }
                                    revalidateStore && currentFetchRevalidate === finalRevalidate && (revalidateStore.revalidate = finalRevalidate);
                                }
                                let isCacheableRevalidate = "number" == typeof finalRevalidate && finalRevalidate > 0, { incrementalCache } = workStore, requestStore = void 0 !== workUnitStore && "request" === workUnitStore.type ? workUnitStore : void 0;
                                if (incrementalCache && (isCacheableRevalidate || (null == requestStore ? void 0 : requestStore.serverComponentsHmrCache))) try {
                                    cacheKey = await incrementalCache.generateCacheKey(fetchUrl, isRequestInput ? input : init);
                                } catch (err) {
                                    console.error("Failed to generate cache key for", input);
                                }
                                let fetchIdx = workStore.nextFetchId ?? 1;
                                workStore.nextFetchId = fetchIdx + 1;
                                let handleUnlock = ()=>Promise.resolve(), doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                                    let requestInputFields = [
                                        "cache",
                                        "credentials",
                                        "headers",
                                        "integrity",
                                        "keepalive",
                                        "method",
                                        "mode",
                                        "redirect",
                                        "referrer",
                                        "referrerPolicy",
                                        "window",
                                        "duplex",
                                        ...isStale ? [] : [
                                            "signal"
                                        ]
                                    ];
                                    if (isRequestInput) {
                                        let reqInput = input, reqOptions = {
                                            body: reqInput._ogBody || reqInput.body
                                        };
                                        for (let field of requestInputFields)reqOptions[field] = reqInput[field];
                                        input = new Request(reqInput.url, reqOptions);
                                    } else if (init) {
                                        let { _ogBody, body, signal, ...otherInput } = init;
                                        init = {
                                            ...otherInput,
                                            body: _ogBody || body,
                                            signal: isStale ? void 0 : signal
                                        };
                                    }
                                    let clonedInit = {
                                        ...init,
                                        next: {
                                            ...null == init ? void 0 : init.next,
                                            fetchType: "origin",
                                            fetchIdx
                                        }
                                    };
                                    return originFetch(input, clonedInit).then(async (res)=>{
                                        if (!isStale && fetchStart && trackFetchMetric(workStore, {
                                            start: fetchStart,
                                            url: fetchUrl,
                                            cacheReason: cacheReasonOverride || cacheReason,
                                            cacheStatus: 0 === finalRevalidate || cacheReasonOverride ? "skip" : "miss",
                                            cacheWarning,
                                            status: res.status,
                                            method: clonedInit.method || "GET"
                                        }), 200 === res.status && incrementalCache && cacheKey && (isCacheableRevalidate || (null == requestStore ? void 0 : requestStore.serverComponentsHmrCache))) {
                                            let normalizedRevalidate = finalRevalidate >= 4294967294 ? 31536e3 : finalRevalidate, externalRevalidate = !(finalRevalidate >= 4294967294) && finalRevalidate;
                                            if (!workUnitStore || "prerender" !== workUnitStore.type) return res.clone().arrayBuffer().then(async (arrayBuffer)=>{
                                                var _requestStore_serverComponentsHmrCache;
                                                let bodyBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(arrayBuffer), fetchedData = {
                                                    headers: Object.fromEntries(res.headers.entries()),
                                                    body: bodyBuffer.toString("base64"),
                                                    status: res.status,
                                                    url: res.url
                                                };
                                                null == requestStore || null == (_requestStore_serverComponentsHmrCache = requestStore.serverComponentsHmrCache) || _requestStore_serverComponentsHmrCache.set(cacheKey, fetchedData), isCacheableRevalidate && await incrementalCache.set(cacheKey, {
                                                    kind: types_CachedRouteKind.FETCH,
                                                    data: fetchedData,
                                                    revalidate: normalizedRevalidate
                                                }, {
                                                    fetchCache: !0,
                                                    revalidate: externalRevalidate,
                                                    fetchUrl,
                                                    fetchIdx,
                                                    tags
                                                });
                                            }).catch((error)=>console.warn("Failed to set fetch cache", input, error)).finally(handleUnlock), res;
                                            {
                                                let bodyBuffer = await res.arrayBuffer(), fetchedData = {
                                                    headers: Object.fromEntries(res.headers.entries()),
                                                    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(bodyBuffer).toString("base64"),
                                                    status: res.status,
                                                    url: res.url
                                                };
                                                return await incrementalCache.set(cacheKey, {
                                                    kind: types_CachedRouteKind.FETCH,
                                                    data: fetchedData,
                                                    revalidate: normalizedRevalidate
                                                }, {
                                                    fetchCache: !0,
                                                    revalidate: externalRevalidate,
                                                    fetchUrl,
                                                    fetchIdx,
                                                    tags
                                                }), await handleUnlock(), new Response(bodyBuffer, {
                                                    headers: res.headers,
                                                    status: res.status,
                                                    statusText: res.statusText
                                                });
                                            }
                                        }
                                        return await handleUnlock(), res;
                                    });
                                }, isForegroundRevalidate = !1, isHmrRefreshCache = !1;
                                if (cacheKey && incrementalCache) {
                                    let cachedFetchData;
                                    if ((null == requestStore ? void 0 : requestStore.isHmrRefresh) && requestStore.serverComponentsHmrCache && (cachedFetchData = requestStore.serverComponentsHmrCache.get(cacheKey), isHmrRefreshCache = !0), isCacheableRevalidate && !cachedFetchData) {
                                        handleUnlock = await incrementalCache.lock(cacheKey);
                                        let entry = workStore.isOnDemandRevalidate ? null : await incrementalCache.get(cacheKey, {
                                            kind: types_IncrementalCacheKind.FETCH,
                                            revalidate: finalRevalidate,
                                            fetchUrl,
                                            fetchIdx,
                                            tags,
                                            softTags: implicitTags,
                                            isFallback: !1
                                        });
                                        hasNoExplicitCacheConfig && workUnitStore && "prerender" === workUnitStore.type && await new Promise((r)=>setImmediate(r)), entry ? await handleUnlock() : cacheReasonOverride = "cache-control: no-cache (hard refresh)", (null == entry ? void 0 : entry.value) && entry.value.kind === types_CachedRouteKind.FETCH && (workStore.isRevalidate && entry.isStale ? isForegroundRevalidate = !0 : (entry.isStale && (workStore.pendingRevalidates ??= {}, workStore.pendingRevalidates[cacheKey] || (workStore.pendingRevalidates[cacheKey] = doOriginalFetch(!0).catch(console.error).finally(()=>{
                                            workStore.pendingRevalidates ??= {}, delete workStore.pendingRevalidates[cacheKey || ""];
                                        }))), cachedFetchData = entry.value.data));
                                    }
                                    if (cachedFetchData) {
                                        fetchStart && trackFetchMetric(workStore, {
                                            start: fetchStart,
                                            url: fetchUrl,
                                            cacheReason,
                                            cacheStatus: isHmrRefreshCache ? "hmr" : "hit",
                                            cacheWarning,
                                            status: cachedFetchData.status || 200,
                                            method: (null == init ? void 0 : init.method) || "GET"
                                        });
                                        let response = new Response(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(cachedFetchData.body, "base64"), {
                                            headers: cachedFetchData.headers,
                                            status: cachedFetchData.status
                                        });
                                        return Object.defineProperty(response, "url", {
                                            value: cachedFetchData.url
                                        }), response;
                                    }
                                }
                                if (workStore.isStaticGeneration && init && "object" == typeof init) {
                                    let { cache } = init;
                                    if ("no-store" === cache) {
                                        if (workUnitStore && "prerender" === workUnitStore.type) return cacheSignal && (cacheSignal.endRead(), cacheSignal = null), dynamic_rendering_utils_makeHangingPromise(workUnitStore.renderSignal, "fetch()");
                                        markCurrentScopeAsDynamic(workStore, workUnitStore, `no-store fetch ${input} ${workStore.route}`);
                                    }
                                    let hasNextConfig = "next" in init, { next = {} } = init;
                                    if ("number" == typeof next.revalidate && revalidateStore && next.revalidate < revalidateStore.revalidate) {
                                        if (0 === next.revalidate) {
                                            if (workUnitStore && "prerender" === workUnitStore.type) return dynamic_rendering_utils_makeHangingPromise(workUnitStore.renderSignal, "fetch()");
                                            markCurrentScopeAsDynamic(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                                        }
                                        workStore.forceStatic && 0 === next.revalidate || (revalidateStore.revalidate = next.revalidate);
                                    }
                                    hasNextConfig && delete init.next;
                                }
                                if (!cacheKey || !isForegroundRevalidate) return doOriginalFetch(!1, cacheReasonOverride);
                                {
                                    let pendingRevalidateKey = cacheKey;
                                    workStore.pendingRevalidates ??= {};
                                    let pendingRevalidate = workStore.pendingRevalidates[pendingRevalidateKey];
                                    if (pendingRevalidate) {
                                        let revalidatedResult = await pendingRevalidate;
                                        return new Response(revalidatedResult.body, {
                                            headers: revalidatedResult.headers,
                                            status: revalidatedResult.status,
                                            statusText: revalidatedResult.statusText
                                        });
                                    }
                                    let pendingResponse = doOriginalFetch(!0, cacheReasonOverride), nextRevalidate = pendingResponse.then(async (response)=>{
                                        let clonedResponse = response.clone();
                                        return {
                                            body: await clonedResponse.arrayBuffer(),
                                            headers: clonedResponse.headers,
                                            status: clonedResponse.status,
                                            statusText: clonedResponse.statusText
                                        };
                                    }).finally(()=>{
                                        var _workStore_pendingRevalidates;
                                        (null == (_workStore_pendingRevalidates = workStore.pendingRevalidates) ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey]) && delete workStore.pendingRevalidates[pendingRevalidateKey];
                                    });
                                    return nextRevalidate.catch(()=>{}), workStore.pendingRevalidates[pendingRevalidateKey] = nextRevalidate, pendingResponse;
                                }
                            });
                            if (cacheSignal) try {
                                return await result;
                            } finally{
                                cacheSignal && cacheSignal.endRead();
                            }
                            return result;
                        };
                        return patched.__nextPatched = !0, patched.__nextGetStaticStore = ()=>workAsyncStorage, patched._nextOriginalFetch = originFetch, globalThis[NEXT_PATCH_SYMBOL] = !0, patched;
                    }(original, options);
                }({
                    workAsyncStorage: this.workAsyncStorage,
                    workUnitAsyncStorage: this.workUnitAsyncStorage
                });
                let handlerContext = {
                    params: context.params ? function(underlyingParams, workStore) {
                        let workUnitStore = work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage.getStore();
                        if (workUnitStore) switch(workUnitStore.type){
                            case "prerender":
                            case "prerender-ppr":
                            case "prerender-legacy":
                                return function(underlyingParams, workStore, prerenderStore) {
                                    let fallbackParams = workStore.fallbackRouteParams;
                                    if (fallbackParams) {
                                        let hasSomeFallbackParams = !1;
                                        for(let key in underlyingParams)if (fallbackParams.has(key)) {
                                            hasSomeFallbackParams = !0;
                                            break;
                                        }
                                        if (hasSomeFallbackParams) return "prerender" === prerenderStore.type ? function(underlyingParams, route, prerenderStore) {
                                            let cachedParams = CachedParams.get(underlyingParams);
                                            if (cachedParams) return cachedParams;
                                            let promise = dynamic_rendering_utils_makeHangingPromise(prerenderStore.renderSignal, "`params`");
                                            return CachedParams.set(underlyingParams, promise), Object.keys(underlyingParams).forEach((prop)=>{
                                                wellKnownProperties.has(prop) || Object.defineProperty(promise, prop, {
                                                    get () {
                                                        let expression = describeStringPropertyAccess("params", prop), error = createParamsAccessError(route, expression);
                                                        abortAndThrowOnSynchronousRequestDataAccess(route, expression, error, prerenderStore);
                                                    },
                                                    set (newValue) {
                                                        Object.defineProperty(promise, prop, {
                                                            value: newValue,
                                                            writable: !0,
                                                            enumerable: !0
                                                        });
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0
                                                });
                                            }), promise;
                                        }(underlyingParams, workStore.route, prerenderStore) : function(underlyingParams, fallbackParams, workStore, prerenderStore) {
                                            let cachedParams = CachedParams.get(underlyingParams);
                                            if (cachedParams) return cachedParams;
                                            let augmentedUnderlying = {
                                                ...underlyingParams
                                            }, promise = Promise.resolve(augmentedUnderlying);
                                            return CachedParams.set(underlyingParams, promise), Object.keys(underlyingParams).forEach((prop)=>{
                                                wellKnownProperties.has(prop) || (fallbackParams.has(prop) ? (Object.defineProperty(augmentedUnderlying, prop, {
                                                    get () {
                                                        let expression = describeStringPropertyAccess("params", prop);
                                                        "prerender-ppr" === prerenderStore.type ? postponeWithTracking(workStore.route, expression, prerenderStore.dynamicTracking) : throwToInterruptStaticGeneration(expression, workStore, prerenderStore);
                                                    },
                                                    enumerable: !0
                                                }), Object.defineProperty(promise, prop, {
                                                    get () {
                                                        let expression = describeStringPropertyAccess("params", prop);
                                                        "prerender-ppr" === prerenderStore.type ? postponeWithTracking(workStore.route, expression, prerenderStore.dynamicTracking) : throwToInterruptStaticGeneration(expression, workStore, prerenderStore);
                                                    },
                                                    set (newValue) {
                                                        Object.defineProperty(promise, prop, {
                                                            value: newValue,
                                                            writable: !0,
                                                            enumerable: !0
                                                        });
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0
                                                })) : promise[prop] = underlyingParams[prop]);
                                            }), promise;
                                        }(underlyingParams, fallbackParams, workStore, prerenderStore);
                                    }
                                    return makeUntrackedExoticParams(underlyingParams);
                                }(underlyingParams, workStore, workUnitStore);
                        }
                        return workStore.isPrefetchRequest ? makeUntrackedExoticParams(underlyingParams) : function(underlyingParams, store) {
                            let cachedParams = CachedParams.get(underlyingParams);
                            if (cachedParams) return cachedParams;
                            let promise = new Promise((resolve)=>scheduler_scheduleImmediate(()=>resolve(underlyingParams))), proxiedProperties = new Set, unproxiedProperties = [];
                            Object.keys(underlyingParams).forEach((prop)=>{
                                wellKnownProperties.has(prop) ? unproxiedProperties.push(prop) : (proxiedProperties.add(prop), promise[prop] = underlyingParams[prop]);
                            });
                            let proxiedPromise = new Proxy(promise, {
                                get (target, prop, receiver) {
                                    if ("string" == typeof prop && proxiedProperties.has(prop)) {
                                        let expression = describeStringPropertyAccess("params", prop);
                                        syncIODev(store.route, expression);
                                    }
                                    return ReflectAdapter.get(target, prop, receiver);
                                },
                                set: (target, prop, value1, receiver)=>("string" == typeof prop && proxiedProperties.delete(prop), ReflectAdapter.set(target, prop, value1, receiver)),
                                ownKeys: (target)=>(syncIODev(store.route, "`...params` or similar expression", unproxiedProperties), Reflect.ownKeys(target))
                            });
                            return CachedParams.set(underlyingParams, proxiedPromise), proxiedPromise;
                        }(underlyingParams, workStore);
                    }(function(query) {
                        let params = {};
                        for (let [key, value1] of Object.entries(query))void 0 !== value1 && (params[key] = value1);
                        return params;
                    }(context.params), workStore) : void 0
                }, prerenderStore = null;
                try {
                    if (isStaticGeneration) {
                        let userlandRevalidate = this.userland.revalidate, defaultRevalidate = !1 === userlandRevalidate || void 0 === userlandRevalidate ? 4294967294 : userlandRevalidate;
                        if (dynamicIOEnabled) {
                            let prospectiveResult;
                            let prospectiveController = new AbortController, prospectiveRenderIsDynamic = !1, cacheSignal = new CacheSignal, dynamicTracking = createDynamicTrackingState(void 0), prospectiveRoutePrerenderStore = prerenderStore = {
                                type: "prerender",
                                phase: "action",
                                implicitTags: implicitTags,
                                renderSignal: prospectiveController.signal,
                                controller: prospectiveController,
                                cacheSignal,
                                dynamicTracking,
                                revalidate: defaultRevalidate,
                                expire: 4294967294,
                                stale: 4294967294,
                                tags: [
                                    ...implicitTags
                                ],
                                prerenderResumeDataCache: null
                            };
                            try {
                                prospectiveResult = this.workUnitAsyncStorage.run(prospectiveRoutePrerenderStore, handler, request, handlerContext);
                            } catch (err) {
                                prospectiveController.signal.aborted ? prospectiveRenderIsDynamic = !0 : (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_DEBUG_BUILD || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_VERBOSE_LOGGING) && printDebugThrownValueForProspectiveRender(err, workStore.route);
                            }
                            if ("object" == typeof prospectiveResult && null !== prospectiveResult && "function" == typeof prospectiveResult.then && prospectiveResult.then(()=>{}, (err)=>{
                                prospectiveController.signal.aborted ? prospectiveRenderIsDynamic = !0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_DEBUG_BUILD && printDebugThrownValueForProspectiveRender(err, workStore.route);
                            }), await cacheSignal.cacheReady(), prospectiveRenderIsDynamic) {
                                let dynamicReason = (trackingState = dynamicTracking, null == (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) ? void 0 : _trackingState_dynamicAccesses_.expression);
                                if (dynamicReason) throw new DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used \`${dynamicReason}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                                throw console.error("Expected Next.js to keep track of reason for opting out of static rendering but one was not found. This is a bug in Next.js"), new DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used a dynamic API. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                            }
                            let finalController = new AbortController;
                            dynamicTracking = createDynamicTrackingState(void 0);
                            let finalRoutePrerenderStore = prerenderStore = {
                                type: "prerender",
                                phase: "action",
                                implicitTags: implicitTags,
                                renderSignal: finalController.signal,
                                controller: finalController,
                                cacheSignal: null,
                                dynamicTracking,
                                revalidate: defaultRevalidate,
                                expire: 4294967294,
                                stale: 4294967294,
                                tags: [
                                    ...implicitTags
                                ],
                                prerenderResumeDataCache: null
                            }, responseHandled = !1;
                            if (res = await new Promise((resolve, reject)=>{
                                scheduler_scheduleImmediate(async ()=>{
                                    try {
                                        let result = await this.workUnitAsyncStorage.run(finalRoutePrerenderStore, handler, request, handlerContext);
                                        if (responseHandled) return;
                                        if (!(result instanceof Response)) {
                                            resolve(result);
                                            return;
                                        }
                                        responseHandled = !0;
                                        let bodyHandled = !1;
                                        result.arrayBuffer().then((body)=>{
                                            bodyHandled || (bodyHandled = !0, resolve(new Response(body, {
                                                headers: result.headers,
                                                status: result.status,
                                                statusText: result.statusText
                                            })));
                                        }, reject), scheduler_scheduleImmediate(()=>{
                                            bodyHandled || (bodyHandled = !0, finalController.abort(), reject(createDynamicIOError(workStore.route)));
                                        });
                                    } catch (err) {
                                        reject(err);
                                    }
                                }), scheduler_scheduleImmediate(()=>{
                                    responseHandled || (responseHandled = !0, finalController.abort(), reject(createDynamicIOError(workStore.route)));
                                });
                            }), finalController.signal.aborted) throw createDynamicIOError(workStore.route);
                            finalController.abort();
                        } else prerenderStore = {
                            type: "prerender-legacy",
                            phase: "action",
                            implicitTags: implicitTags,
                            revalidate: defaultRevalidate,
                            expire: 4294967294,
                            stale: 4294967294,
                            tags: [
                                ...implicitTags
                            ]
                        }, res = await work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage.run(prerenderStore, handler, request, handlerContext);
                    } else res = await work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage.run(requestStore, handler, request, handlerContext);
                } catch (err) {
                    if (isRedirectError(err)) {
                        let url = isRedirectError(err) ? err.digest.split(";").slice(2, -2).join(";") : null;
                        if (!url) throw Error("Invariant: Unexpected redirect url format");
                        let headers = new Headers({
                            Location: url
                        });
                        return "request" === requestStore.type && appendMutableCookies(headers, requestStore.mutableCookies), new Response(null, {
                            status: actionStore.isAction ? redirect_status_code_RedirectStatusCode.SeeOther : function(error) {
                                if (!isRedirectError(error)) throw Error("Not a redirect error");
                                return Number(error.digest.split(";").at(-2));
                            }(err),
                            headers
                        });
                    }
                    if ("object" == typeof err && null !== err && "digest" in err && "NEXT_NOT_FOUND" === err.digest) return new Response(null, {
                        status: 404
                    });
                    throw err;
                }
                if (!(res instanceof Response)) throw Error(`No response is returned from route handler '${this.resolvedPagePath}'. Ensure you return a \`Response\` or a \`NextResponse\` in all branches of your handler.`);
                context.renderOpts.fetchMetrics = workStore.fetchMetrics, context.renderOpts.pendingWaitUntil = Promise.all([
                    null == (_workStore_incrementalCache = workStore.incrementalCache) ? void 0 : _workStore_incrementalCache.revalidateTag(workStore.revalidatedTags || []),
                    ...Object.values(workStore.pendingRevalidates || {})
                ]), prerenderStore && (context.renderOpts.collectedTags = null == (_prerenderStore_tags = prerenderStore.tags) ? void 0 : _prerenderStore_tags.join(","), context.renderOpts.collectedRevalidate = prerenderStore.revalidate, context.renderOpts.collectedExpire = prerenderStore.expire, context.renderOpts.collectedStale = prerenderStore.stale);
                let headers = new Headers(res.headers);
                return "request" === requestStore.type && appendMutableCookies(headers, requestStore.mutableCookies) ? new Response(res.body, {
                    status: res.status,
                    statusText: res.statusText,
                    headers
                }) : res;
            }
            async handle(req, context) {
                var url;
                let handler = this.resolve(req.method), staticGenerationContext = {
                    fallbackRouteParams: null,
                    page: this.definition.page,
                    renderOpts: context.renderOpts
                };
                staticGenerationContext.renderOpts.fetchCache = this.userland.fetchCache;
                let actionStore = {
                    isAppRoute: !0,
                    isAction: function(req) {
                        let actionId, contentType;
                        req.headers instanceof Headers ? (actionId = req.headers.get(ACTION_HEADER.toLowerCase()) ?? null, contentType = req.headers.get("content-type")) : (actionId = req.headers[ACTION_HEADER.toLowerCase()] ?? null, contentType = req.headers["content-type"] ?? null);
                        let isURLEncodedAction = !!("POST" === req.method && "application/x-www-form-urlencoded" === contentType), isMultipartAction = !!("POST" === req.method && (null == contentType ? void 0 : contentType.startsWith("multipart/form-data"))), isFetchAction = !!(void 0 !== actionId && "string" == typeof actionId && "POST" === req.method);
                        return {
                            actionId,
                            isURLEncodedAction,
                            isMultipartAction,
                            isFetchAction,
                            isServerAction: !!(isFetchAction || isURLEncodedAction || isMultipartAction)
                        };
                    }(req).isServerAction
                }, implicitTags = function(page, url, fallbackRouteParams) {
                    let newTags = [];
                    for (let tag of getDerivedTags(page))tag = `${NEXT_CACHE_IMPLICIT_TAG_ID}${tag}`, newTags.push(tag);
                    if (url.pathname) {
                        let tag = `${NEXT_CACHE_IMPLICIT_TAG_ID}${url.pathname}`;
                        newTags.push(tag);
                    }
                    return newTags;
                }(this.definition.page, req.nextUrl, 0), requestStore = (url = req.nextUrl, function(phase, req, res, url, implicitTags, onUpdateCookies, renderResumeDataCache, previewProps, isHmrRefresh, serverComponentsHmrCache) {
                    function defaultOnUpdateCookies(cookies) {
                        res && res.setHeader("Set-Cookie", cookies);
                    }
                    let cache = {};
                    return {
                        type: "request",
                        phase,
                        implicitTags: implicitTags ?? [],
                        url: {
                            pathname: url.pathname,
                            search: url.search ?? ""
                        },
                        get headers () {
                            return cache.headers || (cache.headers = function(headers) {
                                let cleaned = HeadersAdapter.from(headers);
                                for (let header of FLIGHT_HEADERS)cleaned.delete(header.toLowerCase());
                                return HeadersAdapter.seal(cleaned);
                            }(req.headers)), cache.headers;
                        },
                        get cookies () {
                            if (!cache.cookies) {
                                let requestCookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(req.headers));
                                mergeMiddlewareCookies(req, requestCookies), cache.cookies = request_cookies_RequestCookiesAdapter.seal(requestCookies);
                            }
                            return cache.cookies;
                        },
                        set cookies (value){
                            cache.cookies = value;
                        },
                        get mutableCookies () {
                            if (!cache.mutableCookies) {
                                let mutableCookies = function(headers, onUpdateCookies) {
                                    let cookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(headers));
                                    return MutableRequestCookiesAdapter.wrap(cookies, onUpdateCookies);
                                }(req.headers, onUpdateCookies || (res ? defaultOnUpdateCookies : void 0));
                                mergeMiddlewareCookies(req, mutableCookies), cache.mutableCookies = mutableCookies;
                            }
                            return cache.mutableCookies;
                        },
                        get userspaceMutableCookies () {
                            if (!cache.userspaceMutableCookies) {
                                let userspaceMutableCookies = function(responseCookies) {
                                    let wrappedCookies = new Proxy(responseCookies, {
                                        get (target, prop, receiver) {
                                            switch(prop){
                                                case "delete":
                                                    return function(...args) {
                                                        return ensureCookiesAreStillMutable("cookies().delete"), target.delete(...args), wrappedCookies;
                                                    };
                                                case "set":
                                                    return function(...args) {
                                                        return ensureCookiesAreStillMutable("cookies().set"), target.set(...args), wrappedCookies;
                                                    };
                                                default:
                                                    return ReflectAdapter.get(target, prop, receiver);
                                            }
                                        }
                                    });
                                    return wrappedCookies;
                                }(this.mutableCookies);
                                cache.userspaceMutableCookies = userspaceMutableCookies;
                            }
                            return cache.userspaceMutableCookies;
                        },
                        get draftMode () {
                            return cache.draftMode || (cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies)), cache.draftMode;
                        },
                        renderResumeDataCache: renderResumeDataCache ?? null,
                        devWarmupPrerenderResumeDataCache: null,
                        isHmrRefresh,
                        serverComponentsHmrCache: serverComponentsHmrCache || globalThis.__serverComponentsHmrCache
                    };
                }("action", req, void 0, url, implicitTags, void 0, void 0, context.prerenderManifest.preview, !1, void 0)), workStore = function({ page, fallbackRouteParams, renderOpts, requestEndedState, isPrefetchRequest }) {
                    var path;
                    let store = {
                        isStaticGeneration: !renderOpts.supportsDynamicResponse && !renderOpts.isDraftMode && !renderOpts.isServerAction,
                        page,
                        fallbackRouteParams,
                        route: (path = page.split("/").reduce((pathname, segment, index, segments)=>segment ? "(" === segment[0] && segment.endsWith(")") || "@" === segment[0] || ("page" === segment || "route" === segment) && index === segments.length - 1 ? pathname : pathname + "/" + segment : pathname, "")).startsWith("/") ? path : "/" + path,
                        incrementalCache: renderOpts.incrementalCache || globalThis.__incrementalCache,
                        cacheLifeProfiles: renderOpts.cacheLifeProfiles,
                        isRevalidate: renderOpts.isRevalidate,
                        isPrerendering: renderOpts.nextExport,
                        fetchCache: renderOpts.fetchCache,
                        isOnDemandRevalidate: renderOpts.isOnDemandRevalidate,
                        isDraftMode: renderOpts.isDraftMode,
                        requestEndedState,
                        isPrefetchRequest,
                        buildId: renderOpts.buildId,
                        reactLoadableManifest: (null == renderOpts ? void 0 : renderOpts.reactLoadableManifest) || {},
                        assetPrefix: (null == renderOpts ? void 0 : renderOpts.assetPrefix) || "",
                        afterContext: function(renderOpts) {
                            var _renderOpts_experimental;
                            if (!(null == renderOpts ? void 0 : null == (_renderOpts_experimental = renderOpts.experimental) ? void 0 : _renderOpts_experimental.after)) return;
                            let { waitUntil, onClose, onAfterTaskError } = renderOpts;
                            return new AfterContext({
                                waitUntil,
                                onClose,
                                onTaskError: onAfterTaskError
                            });
                        }(renderOpts)
                    };
                    return renderOpts.store = store, store;
                }(staticGenerationContext), response = await this.actionAsyncStorage.run(actionStore, ()=>this.workUnitAsyncStorage.run(requestStore, ()=>this.workAsyncStorage.run(workStore, async ()=>{
                            if (this.hasNonStaticMethods && workStore.isStaticGeneration) {
                                let err = new DynamicServerError("Route is configured with methods that cannot be statically generated.");
                                throw workStore.dynamicUsageDescription = err.message, workStore.dynamicUsageStack = err.stack, err;
                            }
                            let request = req;
                            switch(this.dynamic){
                                case "force-dynamic":
                                    workStore.forceDynamic = !0;
                                    break;
                                case "force-static":
                                    workStore.forceStatic = !0, request = new Proxy(req, forceStaticRequestHandlers);
                                    break;
                                case "error":
                                    workStore.dynamicShouldError = !0, workStore.isStaticGeneration && (request = new Proxy(req, requireStaticRequestHandlers));
                                    break;
                                default:
                                    request = function(request, workStore) {
                                        let nextUrlHandlers = {
                                            get (target, prop, receiver) {
                                                switch(prop){
                                                    case "search":
                                                    case "searchParams":
                                                    case "url":
                                                    case "href":
                                                    case "toJSON":
                                                    case "toString":
                                                    case "origin":
                                                        return trackDynamic(workStore, work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage.getStore(), `nextUrl.${prop}`), ReflectAdapter.get(target, prop, receiver);
                                                    case "clone":
                                                        return target[urlCloneSymbol] || (target[urlCloneSymbol] = ()=>new Proxy(target.clone(), nextUrlHandlers));
                                                    default:
                                                        return ReflectAdapter.get(target, prop, receiver);
                                                }
                                            }
                                        }, nextRequestHandlers = {
                                            get (target, prop) {
                                                switch(prop){
                                                    case "nextUrl":
                                                        return target[nextURLSymbol] || (target[nextURLSymbol] = new Proxy(target.nextUrl, nextUrlHandlers));
                                                    case "headers":
                                                    case "cookies":
                                                    case "url":
                                                    case "body":
                                                    case "blob":
                                                    case "json":
                                                    case "text":
                                                    case "arrayBuffer":
                                                    case "formData":
                                                        return trackDynamic(workStore, work_unit_async_storage_external_js_namespaceObject.workUnitAsyncStorage.getStore(), `request.${prop}`), ReflectAdapter.get(target, prop, target);
                                                    case "clone":
                                                        return target[requestCloneSymbol] || (target[requestCloneSymbol] = ()=>new Proxy(target.clone(), nextRequestHandlers));
                                                    default:
                                                        return ReflectAdapter.get(target, prop, target);
                                                }
                                            }
                                        };
                                        return new Proxy(request, nextRequestHandlers);
                                    }(req, workStore);
                            }
                            let route = function(absolutePath) {
                                let appDir = "/app/";
                                absolutePath.includes(appDir) || (appDir = "\\app\\");
                                let [, ...parts] = absolutePath.split(appDir);
                                return (appDir[0] + parts.join(appDir)).split(".").slice(0, -1).join(".");
                            }(this.resolvedPagePath), tracer = (0, tracer_namespaceObject.getTracer)();
                            return tracer.setRootSpanAttribute("next.route", route), tracer.trace(AppRouteRouteHandlersSpan.runHandler, {
                                spanName: `executing api route (app) ${route}`,
                                attributes: {
                                    "next.route": route
                                }
                            }, async ()=>this.do(handler, actionStore, workStore, requestStore, implicitTags, request, context));
                        })));
                if (!(response instanceof Response)) return new Response(null, {
                    status: 500
                });
                if (response.headers.has("x-middleware-rewrite")) throw Error("NextResponse.rewrite() was used in a app route handler, this is not currently supported. Please remove the invocation to continue.");
                if ("1" === response.headers.get("x-middleware-next")) throw Error("NextResponse.next() was used in a app route handler, this is not supported. See here for more info: https://nextjs.org/docs/messages/next-response-next-in-app-route-handler");
                return response;
            }
        }
        let app_route_module = AppRouteRouteModule;
        function hasNonStaticMethods(handlers) {
            return !!handlers.POST || !!handlers.PUT || !!handlers.DELETE || !!handlers.PATCH || !!handlers.OPTIONS;
        }
        let nextURLSymbol = Symbol("nextUrl"), requestCloneSymbol = Symbol("clone"), urlCloneSymbol = Symbol("clone"), searchParamsSymbol = Symbol("searchParams"), hrefSymbol = Symbol("href"), toStringSymbol = Symbol("toString"), headersSymbol = Symbol("headers"), cookiesSymbol = Symbol("cookies"), forceStaticRequestHandlers = {
            get (target, prop, receiver) {
                switch(prop){
                    case "headers":
                        return target[headersSymbol] || (target[headersSymbol] = HeadersAdapter.seal(new Headers({})));
                    case "cookies":
                        return target[cookiesSymbol] || (target[cookiesSymbol] = request_cookies_RequestCookiesAdapter.seal(new _edge_runtime_cookies.RequestCookies(new Headers({}))));
                    case "nextUrl":
                        return target[nextURLSymbol] || (target[nextURLSymbol] = new Proxy(target.nextUrl, forceStaticNextUrlHandlers));
                    case "url":
                        return receiver.nextUrl.href;
                    case "geo":
                    case "ip":
                        return;
                    case "clone":
                        return target[requestCloneSymbol] || (target[requestCloneSymbol] = ()=>new Proxy(target.clone(), forceStaticRequestHandlers));
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        }, forceStaticNextUrlHandlers = {
            get (target, prop, receiver) {
                switch(prop){
                    case "search":
                        return "";
                    case "searchParams":
                        return target[searchParamsSymbol] || (target[searchParamsSymbol] = new URLSearchParams);
                    case "href":
                        return target[hrefSymbol] || (target[hrefSymbol] = function(url) {
                            let u = new URL(url);
                            return u.host = "localhost:3000", u.search = "", u.protocol = "http", u;
                        }(target.href).href);
                    case "toJSON":
                    case "toString":
                        return target[toStringSymbol] || (target[toStringSymbol] = ()=>receiver.href);
                    case "url":
                        return;
                    case "clone":
                        return target[urlCloneSymbol] || (target[urlCloneSymbol] = ()=>new Proxy(target.clone(), forceStaticNextUrlHandlers));
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        }, requireStaticRequestHandlers = {
            get (target, prop, receiver) {
                switch(prop){
                    case "nextUrl":
                        return target[nextURLSymbol] || (target[nextURLSymbol] = new Proxy(target.nextUrl, requireStaticNextUrlHandlers));
                    case "headers":
                    case "cookies":
                    case "url":
                    case "body":
                    case "blob":
                    case "json":
                    case "text":
                    case "arrayBuffer":
                    case "formData":
                        throw new static_generation_bailout_StaticGenBailoutError(`Route ${target.nextUrl.pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`request.${prop}\`.`);
                    case "clone":
                        return target[requestCloneSymbol] || (target[requestCloneSymbol] = ()=>new Proxy(target.clone(), requireStaticRequestHandlers));
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        }, requireStaticNextUrlHandlers = {
            get (target, prop, receiver) {
                switch(prop){
                    case "search":
                    case "searchParams":
                    case "url":
                    case "href":
                    case "toJSON":
                    case "toString":
                    case "origin":
                        throw new static_generation_bailout_StaticGenBailoutError(`Route ${target.pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`nextUrl.${prop}\`.`);
                    case "clone":
                        return target[urlCloneSymbol] || (target[urlCloneSymbol] = ()=>new Proxy(target.clone(), requireStaticNextUrlHandlers));
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        };
        function createDynamicIOError(route) {
            return new DynamicServerError(`Route ${route} couldn't be rendered statically because it used IO that was not cached. See more info here: https://nextjs.org/docs/messages/dynamic-io`);
        }
        function trackDynamic(store, workUnitStore, expression) {
            if (workUnitStore) {
                if ("cache" === workUnitStore.type) throw Error(`Route ${store.route} used "${expression}" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);
                if ("unstable-cache" === workUnitStore.type) throw Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
            }
            if (store.dynamicShouldError) throw new static_generation_bailout_StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
            if (workUnitStore) {
                if ("prerender" === workUnitStore.type) {
                    let error = Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-request`);
                    abortAndThrowOnSynchronousRequestDataAccess(store.route, expression, error, workUnitStore);
                } else if ("prerender-ppr" === workUnitStore.type) postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
                else if ("prerender-legacy" === workUnitStore.type) {
                    workUnitStore.revalidate = 0;
                    let err = new DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                    throw store.dynamicUsageDescription = expression, store.dynamicUsageStack = err.stack, err;
                } else workUnitStore && "request" === workUnitStore.type && (workUnitStore.usedDynamic = !0);
            }
        }
    })(), module.exports = __webpack_exports__;
})(); //# sourceMappingURL=app-route-experimental.runtime.dev.js.map
}}),
}]);

//# sourceMappingURL=8069e_next_dist_compiled_next-server_app-route-experimental_runtime_dev_1656e4.js.map