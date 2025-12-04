/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var z_ = Object.create;
    var nn = Object.defineProperty;
    var K_ = Object.getOwnPropertyDescriptor;
    var Y_ = Object.getOwnPropertyNames;
    var $_ = Object.getPrototypeOf,
        Q_ = Object.prototype.hasOwnProperty;
    var he = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Fe = (e, t) => {
            for (var r in t) nn(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ns = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of Y_(t)) !Q_.call(e, i) && i !== r && nn(e, i, {
                    get: () => t[i],
                    enumerable: !(n = K_(t, i)) || n.enumerable
                });
            return e
        };
    var le = (e, t, r) => (r = e != null ? z_($_(e)) : {}, Ns(t || !e || !e.__esModule ? nn(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        tt = e => Ns(nn({}, "__esModule", {
            value: !0
        }), e);
    var Ni = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(l, y) {
                var T = new U.Bare;
                return T.init(l, y)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }

            function n(l) {
                var y = parseInt(l.slice(1), 16),
                    T = y >> 16 & 255,
                    S = y >> 8 & 255,
                    b = 255 & y;
                return [T, S, b]
            }

            function i(l, y, T) {
                return "#" + (1 << 24 | l << 16 | y << 8 | T).toString(16).slice(1)
            }

            function o() {}

            function a(l, y) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y)
            }

            function s(l, y, T) {
                f("Units do not match [" + l + "]: " + y + ", " + T)
            }

            function u(l, y, T) {
                if (y !== void 0 && (T = y), l === void 0) return T;
                var S = T;
                return St.test(l) || !lt.test(l) ? S = parseInt(l, 10) : lt.test(l) && (S = 1e3 * parseFloat(l)), 0 > S && (S = 0), S === S ? S : T
            }

            function f(l) {
                se.debug && window && window.console.warn(l)
            }

            function h(l) {
                for (var y = -1, T = l ? l.length : 0, S = []; ++y < T;) {
                    var b = l[y];
                    b && S.push(b)
                }
                return S
            }
            var p = function(l, y, T) {
                    function S(ie) {
                        return typeof ie == "object"
                    }

                    function b(ie) {
                        return typeof ie == "function"
                    }

                    function x() {}

                    function Z(ie, pe) {
                        function k() {
                            var Re = new ae;
                            return b(Re.init) && Re.init.apply(Re, arguments), Re
                        }

                        function ae() {}
                        pe === T && (pe = ie, ie = Object), k.Bare = ae;
                        var ue, be = x[l] = ie[l],
                            et = ae[l] = k[l] = new x;
                        return et.constructor = k, k.mixin = function(Re) {
                            return ae[l] = k[l] = Z(k, Re)[l], k
                        }, k.open = function(Re) {
                            if (ue = {}, b(Re) ? ue = Re.call(k, et, be, k, ie) : S(Re) && (ue = Re), S(ue))
                                for (var yr in ue) y.call(ue, yr) && (et[yr] = ue[yr]);
                            return b(et.init) || (et.init = ie), k
                        }, k.open(pe)
                    }
                    return Z
                }("prototype", {}.hasOwnProperty),
                d = {
                    ease: ["ease", function(l, y, T, S) {
                        var b = (l /= S) * l,
                            x = b * l;
                        return y + T * (-2.75 * x * b + 11 * b * b + -15.5 * x + 8 * b + .25 * l)
                    }],
                    "ease-in": ["ease-in", function(l, y, T, S) {
                        var b = (l /= S) * l,
                            x = b * l;
                        return y + T * (-1 * x * b + 3 * b * b + -3 * x + 2 * b)
                    }],
                    "ease-out": ["ease-out", function(l, y, T, S) {
                        var b = (l /= S) * l,
                            x = b * l;
                        return y + T * (.3 * x * b + -1.6 * b * b + 2.2 * x + -1.8 * b + 1.9 * l)
                    }],
                    "ease-in-out": ["ease-in-out", function(l, y, T, S) {
                        var b = (l /= S) * l,
                            x = b * l;
                        return y + T * (2 * x * b + -5 * b * b + 2 * x + 2 * b)
                    }],
                    linear: ["linear", function(l, y, T, S) {
                        return T * l / S + y
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, y, T, S) {
                        return T * (l /= S) * l + y
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, y, T, S) {
                        return -T * (l /= S) * (l - 2) + y
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, y, T, S) {
                        return (l /= S / 2) < 1 ? T / 2 * l * l + y : -T / 2 * (--l * (l - 2) - 1) + y
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, y, T, S) {
                        return T * (l /= S) * l * l + y
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, y, T, S) {
                        return T * ((l = l / S - 1) * l * l + 1) + y
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, y, T, S) {
                        return (l /= S / 2) < 1 ? T / 2 * l * l * l + y : T / 2 * ((l -= 2) * l * l + 2) + y
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, y, T, S) {
                        return T * (l /= S) * l * l * l + y
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, y, T, S) {
                        return -T * ((l = l / S - 1) * l * l * l - 1) + y
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, y, T, S) {
                        return (l /= S / 2) < 1 ? T / 2 * l * l * l * l + y : -T / 2 * ((l -= 2) * l * l * l - 2) + y
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, y, T, S) {
                        return T * (l /= S) * l * l * l * l + y
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, y, T, S) {
                        return T * ((l = l / S - 1) * l * l * l * l + 1) + y
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, y, T, S) {
                        return (l /= S / 2) < 1 ? T / 2 * l * l * l * l * l + y : T / 2 * ((l -= 2) * l * l * l * l + 2) + y
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, y, T, S) {
                        return -T * Math.cos(l / S * (Math.PI / 2)) + T + y
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, y, T, S) {
                        return T * Math.sin(l / S * (Math.PI / 2)) + y
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, y, T, S) {
                        return -T / 2 * (Math.cos(Math.PI * l / S) - 1) + y
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, y, T, S) {
                        return l === 0 ? y : T * Math.pow(2, 10 * (l / S - 1)) + y
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, y, T, S) {
                        return l === S ? y + T : T * (-Math.pow(2, -10 * l / S) + 1) + y
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, y, T, S) {
                        return l === 0 ? y : l === S ? y + T : (l /= S / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + y : T / 2 * (-Math.pow(2, -10 * --l) + 2) + y
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, y, T, S) {
                        return -T * (Math.sqrt(1 - (l /= S) * l) - 1) + y
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, y, T, S) {
                        return T * Math.sqrt(1 - (l = l / S - 1) * l) + y
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, y, T, S) {
                        return (l /= S / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + y : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + y
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, y, T, S, b) {
                        return b === void 0 && (b = 1.70158), T * (l /= S) * l * ((b + 1) * l - b) + y
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, y, T, S, b) {
                        return b === void 0 && (b = 1.70158), T * ((l = l / S - 1) * l * ((b + 1) * l + b) + 1) + y
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, y, T, S, b) {
                        return b === void 0 && (b = 1.70158), (l /= S / 2) < 1 ? T / 2 * l * l * (((b *= 1.525) + 1) * l - b) + y : T / 2 * ((l -= 2) * l * (((b *= 1.525) + 1) * l + b) + 2) + y
                    }]
                },
                E = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                I = document,
                _ = window,
                w = "bkwld-tram",
                m = /[\-\.0-9]/g,
                C = /[A-Z]/,
                A = "number",
                R = /^(rgb|#)/,
                P = /(em|cm|mm|in|pt|pc|px)$/,
                L = /(em|cm|mm|in|pt|pc|px|%)$/,
                H = /(deg|rad|turn)$/,
                z = "unitless",
                $ = /(all|none) 0s ease 0s/,
                J = /^(width|height)$/,
                te = " ",
                M = I.createElement("a"),
                O = ["Webkit", "Moz", "O", "ms"],
                q = ["-webkit-", "-moz-", "-o-", "-ms-"],
                K = function(l) {
                    if (l in M.style) return {
                        dom: l,
                        css: l
                    };
                    var y, T, S = "",
                        b = l.split("-");
                    for (y = 0; y < b.length; y++) S += b[y].charAt(0).toUpperCase() + b[y].slice(1);
                    for (y = 0; y < O.length; y++)
                        if (T = O[y] + S, T in M.style) return {
                            dom: T,
                            css: q[y] + l
                        }
                },
                B = t.support = {
                    bind: Function.prototype.bind,
                    transform: K("transform"),
                    transition: K("transition"),
                    backface: K("backface-visibility"),
                    timing: K("transition-timing-function")
                };
            if (B.transition) {
                var re = B.timing.dom;
                if (M.style[re] = d["ease-in-back"][0], !M.style[re])
                    for (var ne in E) d[ne][0] = E[ne]
            }
            var F = t.frame = function() {
                    var l = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return l && B.bind ? l.bind(_) : function(y) {
                        _.setTimeout(y, 16)
                    }
                }(),
                X = t.now = function() {
                    var l = _.performance,
                        y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return y && B.bind ? y.bind(l) : Date.now || function() {
                        return +new Date
                    }
                }(),
                Y = p(function(l) {
                    function y(ee, ce) {
                        var ye = h(("" + ee).split(te)),
                            fe = ye[0];
                        ce = ce || {};
                        var Ne = j[fe];
                        if (!Ne) return f("Unsupported property: " + fe);
                        if (!ce.weak || !this.props[fe]) {
                            var We = Ne[0],
                                Me = this.props[fe];
                            return Me || (Me = this.props[fe] = new We.Bare), Me.init(this.$el, ye, Ne, ce), Me
                        }
                    }

                    function T(ee, ce, ye) {
                        if (ee) {
                            var fe = typeof ee;
                            if (ce || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), fe == "number" && ce) return this.timer = new oe({
                                duration: ee,
                                context: this,
                                complete: x
                            }), void(this.active = !0);
                            if (fe == "string" && ce) {
                                switch (ee) {
                                    case "hide":
                                        k.call(this);
                                        break;
                                    case "stop":
                                        Z.call(this);
                                        break;
                                    case "redraw":
                                        ae.call(this);
                                        break;
                                    default:
                                        y.call(this, ee, ye && ye[1])
                                }
                                return x.call(this)
                            }
                            if (fe == "function") return void ee.call(this, this);
                            if (fe == "object") {
                                var Ne = 0;
                                et.call(this, ee, function(Te, j_) {
                                    Te.span > Ne && (Ne = Te.span), Te.stop(), Te.animate(j_)
                                }, function(Te) {
                                    "wait" in Te && (Ne = u(Te.wait, 0))
                                }), be.call(this), Ne > 0 && (this.timer = new oe({
                                    duration: Ne,
                                    context: this
                                }), this.active = !0, ce && (this.timer.complete = x));
                                var We = this,
                                    Me = !1,
                                    rn = {};
                                F(function() {
                                    et.call(We, ee, function(Te) {
                                        Te.active && (Me = !0, rn[Te.name] = Te.nextStyle)
                                    }), Me && We.$el.css(rn)
                                })
                            }
                        }
                    }

                    function S(ee) {
                        ee = u(ee, 0), this.active ? this.queue.push({
                            options: ee
                        }) : (this.timer = new oe({
                            duration: ee,
                            context: this,
                            complete: x
                        }), this.active = !0)
                    }

                    function b(ee) {
                        return this.active ? (this.queue.push({
                            options: ee,
                            args: arguments
                        }), void(this.timer.complete = x)) : f("No active transition timer. Use start() or wait() before then().")
                    }

                    function x() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ee = this.queue.shift();
                            T.call(this, ee.options, !0, ee.args)
                        }
                    }

                    function Z(ee) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ce;
                        typeof ee == "string" ? (ce = {}, ce[ee] = 1) : ce = typeof ee == "object" && ee != null ? ee : this.props, et.call(this, ce, Re), be.call(this)
                    }

                    function ie(ee) {
                        Z.call(this, ee), et.call(this, ee, yr, W_)
                    }

                    function pe(ee) {
                        typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                    }

                    function k() {
                        Z.call(this), this.el.style.display = "none"
                    }

                    function ae() {
                        this.el.offsetHeight
                    }

                    function ue() {
                        Z.call(this), e.removeData(this.el, w), this.$el = this.el = null
                    }

                    function be() {
                        var ee, ce, ye = [];
                        this.upstream && ye.push(this.upstream);
                        for (ee in this.props) ce = this.props[ee], ce.active && ye.push(ce.string);
                        ye = ye.join(","), this.style !== ye && (this.style = ye, this.el.style[B.transition.dom] = ye)
                    }

                    function et(ee, ce, ye) {
                        var fe, Ne, We, Me, rn = ce !== Re,
                            Te = {};
                        for (fe in ee) We = ee[fe], fe in ge ? (Te.transform || (Te.transform = {}), Te.transform[fe] = We) : (C.test(fe) && (fe = r(fe)), fe in j ? Te[fe] = We : (Me || (Me = {}), Me[fe] = We));
                        for (fe in Te) {
                            if (We = Te[fe], Ne = this.props[fe], !Ne) {
                                if (!rn) continue;
                                Ne = y.call(this, fe)
                            }
                            ce.call(this, Ne, We)
                        }
                        ye && Me && ye.call(this, Me)
                    }

                    function Re(ee) {
                        ee.stop()
                    }

                    function yr(ee, ce) {
                        ee.set(ce)
                    }

                    function W_(ee) {
                        this.$el.css(ee)
                    }

                    function He(ee, ce) {
                        l[ee] = function() {
                            return this.children ? X_.call(this, ce, arguments) : (this.el && ce.apply(this, arguments), this)
                        }
                    }

                    function X_(ee, ce) {
                        var ye, fe = this.children.length;
                        for (ye = 0; fe > ye; ye++) ee.apply(this.children[ye], ce);
                        return this
                    }
                    l.init = function(ee) {
                        if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
                            var ce = G(this.el, "transition");
                            ce && !$.test(ce) && (this.upstream = ce)
                        }
                        B.backface && se.hideBackface && g(this.el, B.backface.css, "hidden")
                    }, He("add", y), He("start", T), He("wait", S), He("then", b), He("next", x), He("stop", Z), He("set", ie), He("show", pe), He("hide", k), He("redraw", ae), He("destroy", ue)
                }),
                U = p(Y, function(l) {
                    function y(T, S) {
                        var b = e.data(T, w) || e.data(T, w, new Y.Bare);
                        return b.el || b.init(T), S ? b.start(S) : b
                    }
                    l.init = function(T, S) {
                        var b = e(T);
                        if (!b.length) return this;
                        if (b.length === 1) return y(b[0], S);
                        var x = [];
                        return b.each(function(Z, ie) {
                            x.push(y(ie, S))
                        }), this.children = x, this
                    }
                }),
                D = p(function(l) {
                    function y() {
                        var x = this.get();
                        this.update("auto");
                        var Z = this.get();
                        return this.update(x), Z
                    }

                    function T(x, Z, ie) {
                        return Z !== void 0 && (ie = Z), x in d ? x : ie
                    }

                    function S(x) {
                        var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
                        return (Z ? i(Z[1], Z[2], Z[3]) : x).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var b = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    l.init = function(x, Z, ie, pe) {
                        this.$el = x, this.el = x[0];
                        var k = Z[0];
                        ie[2] && (k = ie[2]), Q[k] && (k = Q[k]), this.name = k, this.type = ie[1], this.duration = u(Z[1], this.duration, b.duration), this.ease = T(Z[2], this.ease, b.ease), this.delay = u(Z[3], this.delay, b.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = J.test(this.name), this.unit = pe.unit || this.unit || se.defaultUnit, this.angle = pe.angle || this.angle || se.defaultAngle, se.fallback || pe.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + te + this.duration + "ms" + (this.ease != "ease" ? te + d[this.ease][0] : "") + (this.delay ? te + this.delay + "ms" : ""))
                    }, l.set = function(x) {
                        x = this.convert(x, this.type), this.update(x), this.redraw()
                    }, l.transition = function(x) {
                        this.active = !0, x = this.convert(x, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), x == "auto" && (x = y.call(this))), this.nextStyle = x
                    }, l.fallback = function(x) {
                        var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                        x = this.convert(x, this.type), this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)), x == "auto" && (x = y.call(this))), this.tween = new N({
                            from: Z,
                            to: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.get = function() {
                        return G(this.el, this.name)
                    }, l.update = function(x) {
                        g(this.el, this.name, x)
                    }, l.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, g(this.el, this.name, this.get()));
                        var x = this.tween;
                        x && x.context && x.destroy()
                    }, l.convert = function(x, Z) {
                        if (x == "auto" && this.auto) return x;
                        var ie, pe = typeof x == "number",
                            k = typeof x == "string";
                        switch (Z) {
                            case A:
                                if (pe) return x;
                                if (k && x.replace(m, "") === "") return +x;
                                ie = "number(unitless)";
                                break;
                            case R:
                                if (k) {
                                    if (x === "" && this.original) return this.original;
                                    if (Z.test(x)) return x.charAt(0) == "#" && x.length == 7 ? x : S(x)
                                }
                                ie = "hex or rgb string";
                                break;
                            case P:
                                if (pe) return x + this.unit;
                                if (k && Z.test(x)) return x;
                                ie = "number(px) or string(unit)";
                                break;
                            case L:
                                if (pe) return x + this.unit;
                                if (k && Z.test(x)) return x;
                                ie = "number(px) or string(unit or %)";
                                break;
                            case H:
                                if (pe) return x + this.angle;
                                if (k && Z.test(x)) return x;
                                ie = "number(deg) or string(angle)";
                                break;
                            case z:
                                if (pe || k && L.test(x)) return x;
                                ie = "number(unitless) or string(unit or %)"
                        }
                        return a(ie, x), x
                    }, l.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                v = p(D, function(l, y) {
                    l.init = function() {
                        y.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), R))
                    }
                }),
                V = p(D, function(l, y) {
                    l.init = function() {
                        y.init.apply(this, arguments), this.animate = this.fallback
                    }, l.get = function() {
                        return this.$el[this.name]()
                    }, l.update = function(T) {
                        this.$el[this.name](T)
                    }
                }),
                W = p(D, function(l, y) {
                    function T(S, b) {
                        var x, Z, ie, pe, k;
                        for (x in S) pe = ge[x], ie = pe[0], Z = pe[1] || x, k = this.convert(S[x], ie), b.call(this, Z, k, ie)
                    }
                    l.init = function() {
                        y.init.apply(this, arguments), this.current || (this.current = {}, ge.perspective && se.perspective && (this.current.perspective = se.perspective, g(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, l.set = function(S) {
                        T.call(this, S, function(b, x) {
                            this.current[b] = x
                        }), g(this.el, this.name, this.style(this.current)), this.redraw()
                    }, l.transition = function(S) {
                        var b = this.values(S);
                        this.tween = new _e({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var x, Z = {};
                        for (x in this.current) Z[x] = x in b ? b[x] : this.current[x];
                        this.active = !0, this.nextStyle = this.style(Z)
                    }, l.fallback = function(S) {
                        var b = this.values(S);
                        this.tween = new _e({
                            current: this.current,
                            values: b,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, l.update = function() {
                        g(this.el, this.name, this.style(this.current))
                    }, l.style = function(S) {
                        var b, x = "";
                        for (b in S) x += b + "(" + S[b] + ") ";
                        return x
                    }, l.values = function(S) {
                        var b, x = {};
                        return T.call(this, S, function(Z, ie, pe) {
                            x[Z] = ie, this.current[Z] === void 0 && (b = 0, ~Z.indexOf("scale") && (b = 1), this.current[Z] = this.convert(b, pe))
                        }), x
                    }
                }),
                N = p(function(l) {
                    function y(k) {
                        ie.push(k) === 1 && F(T)
                    }

                    function T() {
                        var k, ae, ue, be = ie.length;
                        if (be)
                            for (F(T), ae = X(), k = be; k--;) ue = ie[k], ue && ue.render(ae)
                    }

                    function S(k) {
                        var ae, ue = e.inArray(k, ie);
                        ue >= 0 && (ae = ie.slice(ue + 1), ie.length = ue, ae.length && (ie = ie.concat(ae)))
                    }

                    function b(k) {
                        return Math.round(k * pe) / pe
                    }

                    function x(k, ae, ue) {
                        return i(k[0] + ue * (ae[0] - k[0]), k[1] + ue * (ae[1] - k[1]), k[2] + ue * (ae[2] - k[2]))
                    }
                    var Z = {
                        ease: d.ease[1],
                        from: 0,
                        to: 1
                    };
                    l.init = function(k) {
                        this.duration = k.duration || 0, this.delay = k.delay || 0;
                        var ae = k.ease || Z.ease;
                        d[ae] && (ae = d[ae][1]), typeof ae != "function" && (ae = Z.ease), this.ease = ae, this.update = k.update || o, this.complete = k.complete || o, this.context = k.context || this, this.name = k.name;
                        var ue = k.from,
                            be = k.to;
                        ue === void 0 && (ue = Z.from), be === void 0 && (be = Z.to), this.unit = k.unit || "", typeof ue == "number" && typeof be == "number" ? (this.begin = ue, this.change = be - ue) : this.format(be, ue), this.value = this.begin + this.unit, this.start = X(), k.autoplay !== !1 && this.play()
                    }, l.play = function() {
                        this.active || (this.start || (this.start = X()), this.active = !0, y(this))
                    }, l.stop = function() {
                        this.active && (this.active = !1, S(this))
                    }, l.render = function(k) {
                        var ae, ue = k - this.start;
                        if (this.delay) {
                            if (ue <= this.delay) return;
                            ue -= this.delay
                        }
                        if (ue < this.duration) {
                            var be = this.ease(ue, 0, 1, this.duration);
                            return ae = this.startRGB ? x(this.startRGB, this.endRGB, be) : b(this.begin + be * this.change), this.value = ae + this.unit, void this.update.call(this.context, this.value)
                        }
                        ae = this.endHex || this.begin + this.change, this.value = ae + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, l.format = function(k, ae) {
                        if (ae += "", k += "", k.charAt(0) == "#") return this.startRGB = n(ae), this.endRGB = n(k), this.endHex = k, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ue = ae.replace(m, ""),
                                be = k.replace(m, "");
                            ue !== be && s("tween", ae, k), this.unit = ue
                        }
                        ae = parseFloat(ae), k = parseFloat(k), this.begin = this.value = ae, this.change = k - ae
                    }, l.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ie = [],
                        pe = 1e3
                }),
                oe = p(N, function(l) {
                    l.init = function(y) {
                        this.duration = y.duration || 0, this.complete = y.complete || o, this.context = y.context, this.play()
                    }, l.render = function(y) {
                        var T = y - this.start;
                        T < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                _e = p(N, function(l, y) {
                    l.init = function(T) {
                        this.context = T.context, this.update = T.update, this.tweens = [], this.current = T.current;
                        var S, b;
                        for (S in T.values) b = T.values[S], this.current[S] !== b && this.tweens.push(new N({
                            name: S,
                            from: this.current[S],
                            to: b,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, l.render = function(T) {
                        var S, b, x = this.tweens.length,
                            Z = !1;
                        for (S = x; S--;) b = this.tweens[S], b.context && (b.render(T), this.current[b.name] = b.value, Z = !0);
                        return Z ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, l.destroy = function() {
                        if (y.destroy.call(this), this.tweens) {
                            var T, S = this.tweens.length;
                            for (T = S; T--;) this.tweens[T].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                se = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !B.transition,
                    agentTests: []
                };
            t.fallback = function(l) {
                if (!B.transition) return se.fallback = !0;
                se.agentTests.push("(" + l + ")");
                var y = new RegExp(se.agentTests.join("|"), "i");
                se.fallback = y.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
                return new N(l)
            }, t.delay = function(l, y, T) {
                return new oe({
                    complete: y,
                    duration: l,
                    context: T
                })
            }, e.fn.tram = function(l) {
                return t.call(null, this, l)
            };
            var g = e.style,
                G = e.css,
                Q = {
                    transform: B.transform && B.transform.css
                },
                j = {
                    color: [v, R],
                    background: [v, R, "background-color"],
                    "outline-color": [v, R],
                    "border-color": [v, R],
                    "border-top-color": [v, R],
                    "border-right-color": [v, R],
                    "border-bottom-color": [v, R],
                    "border-left-color": [v, R],
                    "border-width": [D, P],
                    "border-top-width": [D, P],
                    "border-right-width": [D, P],
                    "border-bottom-width": [D, P],
                    "border-left-width": [D, P],
                    "border-spacing": [D, P],
                    "letter-spacing": [D, P],
                    margin: [D, P],
                    "margin-top": [D, P],
                    "margin-right": [D, P],
                    "margin-bottom": [D, P],
                    "margin-left": [D, P],
                    padding: [D, P],
                    "padding-top": [D, P],
                    "padding-right": [D, P],
                    "padding-bottom": [D, P],
                    "padding-left": [D, P],
                    "outline-width": [D, P],
                    opacity: [D, A],
                    top: [D, L],
                    right: [D, L],
                    bottom: [D, L],
                    left: [D, L],
                    "font-size": [D, L],
                    "text-indent": [D, L],
                    "word-spacing": [D, L],
                    width: [D, L],
                    "min-width": [D, L],
                    "max-width": [D, L],
                    height: [D, L],
                    "min-height": [D, L],
                    "max-height": [D, L],
                    "line-height": [D, z],
                    "scroll-top": [V, A, "scrollTop"],
                    "scroll-left": [V, A, "scrollLeft"]
                },
                ge = {};
            B.transform && (j.transform = [W], ge = {
                x: [L, "translateX"],
                y: [L, "translateY"],
                rotate: [H],
                rotateX: [H],
                rotateY: [H],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [H],
                skewX: [H],
                skewY: [H]
            }), B.transform && B.backface && (ge.z = [L, "translateZ"], ge.rotateZ = [H], ge.scaleZ = [A], ge.perspective = [P]);
            var St = /ms/,
                lt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ps = c((UV, Ls) => {
        "use strict";
        var Z_ = window.$,
            J_ = Ni() && Z_.tram;
        Ls.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                u = n.toString,
                f = n.hasOwnProperty,
                h = r.forEach,
                p = r.map,
                d = r.reduce,
                E = r.reduceRight,
                I = r.filter,
                _ = r.every,
                w = r.some,
                m = r.indexOf,
                C = r.lastIndexOf,
                A = Array.isArray,
                R = Object.keys,
                P = i.bind,
                L = e.each = e.forEach = function(O, q, K) {
                    if (O == null) return O;
                    if (h && O.forEach === h) O.forEach(q, K);
                    else if (O.length === +O.length) {
                        for (var B = 0, re = O.length; B < re; B++)
                            if (q.call(K, O[B], B, O) === t) return
                    } else
                        for (var ne = e.keys(O), B = 0, re = ne.length; B < re; B++)
                            if (q.call(K, O[ne[B]], ne[B], O) === t) return;
                    return O
                };
            e.map = e.collect = function(O, q, K) {
                var B = [];
                return O == null ? B : p && O.map === p ? O.map(q, K) : (L(O, function(re, ne, F) {
                    B.push(q.call(K, re, ne, F))
                }), B)
            }, e.find = e.detect = function(O, q, K) {
                var B;
                return H(O, function(re, ne, F) {
                    if (q.call(K, re, ne, F)) return B = re, !0
                }), B
            }, e.filter = e.select = function(O, q, K) {
                var B = [];
                return O == null ? B : I && O.filter === I ? O.filter(q, K) : (L(O, function(re, ne, F) {
                    q.call(K, re, ne, F) && B.push(re)
                }), B)
            };
            var H = e.some = e.any = function(O, q, K) {
                q || (q = e.identity);
                var B = !1;
                return O == null ? B : w && O.some === w ? O.some(q, K) : (L(O, function(re, ne, F) {
                    if (B || (B = q.call(K, re, ne, F))) return t
                }), !!B)
            };
            e.contains = e.include = function(O, q) {
                return O == null ? !1 : m && O.indexOf === m ? O.indexOf(q) != -1 : H(O, function(K) {
                    return K === q
                })
            }, e.delay = function(O, q) {
                var K = a.call(arguments, 2);
                return setTimeout(function() {
                    return O.apply(null, K)
                }, q)
            }, e.defer = function(O) {
                return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(O) {
                var q, K, B;
                return function() {
                    q || (q = !0, K = arguments, B = this, J_.frame(function() {
                        q = !1, O.apply(B, K)
                    }))
                }
            }, e.debounce = function(O, q, K) {
                var B, re, ne, F, X, Y = function() {
                    var U = e.now() - F;
                    U < q ? B = setTimeout(Y, q - U) : (B = null, K || (X = O.apply(ne, re), ne = re = null))
                };
                return function() {
                    ne = this, re = arguments, F = e.now();
                    var U = K && !B;
                    return B || (B = setTimeout(Y, q)), U && (X = O.apply(ne, re), ne = re = null), X
                }
            }, e.defaults = function(O) {
                if (!e.isObject(O)) return O;
                for (var q = 1, K = arguments.length; q < K; q++) {
                    var B = arguments[q];
                    for (var re in B) O[re] === void 0 && (O[re] = B[re])
                }
                return O
            }, e.keys = function(O) {
                if (!e.isObject(O)) return [];
                if (R) return R(O);
                var q = [];
                for (var K in O) e.has(O, K) && q.push(K);
                return q
            }, e.has = function(O, q) {
                return f.call(O, q)
            }, e.isObject = function(O) {
                return O === Object(O)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var z = /(.)^/,
                $ = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                J = /\\|'|\r|\n|\u2028|\u2029/g,
                te = function(O) {
                    return "\\" + $[O]
                },
                M = /^\s*(\w|\$)+\s*$/;
            return e.template = function(O, q, K) {
                !q && K && (q = K), q = e.defaults({}, q, e.templateSettings);
                var B = RegExp([(q.escape || z).source, (q.interpolate || z).source, (q.evaluate || z).source].join("|") + "|$", "g"),
                    re = 0,
                    ne = "__p+='";
                O.replace(B, function(U, D, v, V, W) {
                    return ne += O.slice(re, W).replace(J, te), re = W + U.length, D ? ne += `'+
((__t=(` + D + `))==null?'':_.escape(__t))+
'` : v ? ne += `'+
((__t=(` + v + `))==null?'':__t)+
'` : V && (ne += `';
` + V + `
__p+='`), U
                }), ne += `';
`;
                var F = q.variable;
                if (F) {
                    if (!M.test(F)) throw new Error("variable is not a bare identifier: " + F)
                } else ne = `with(obj||{}){
` + ne + `}
`, F = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var X;
                try {
                    X = new Function(q.variable || "obj", "_", ne)
                } catch (U) {
                    throw U.source = ne, U
                }
                var Y = function(U) {
                    return X.call(this, U, e)
                };
                return Y.source = "function(" + F + `){
` + ne + "}", Y
            }, e
        }()
    });
    var Ve = c((kV, Vs) => {
        "use strict";
        var de = {},
            kt = {},
            Vt = [],
            Pi = window.Webflow || [],
            yt = window.jQuery,
            je = yt(window),
            eb = yt(document),
            rt = yt.isFunction,
            Xe = de._ = Ps(),
            Ms = de.tram = Ni() && yt.tram,
            an = !1,
            qi = !1;
        Ms.config.hideBackface = !1;
        Ms.config.keepInherited = !0;
        de.define = function(e, t, r) {
            kt[e] && Ds(kt[e]);
            var n = kt[e] = t(yt, Xe, r) || {};
            return Fs(n), n
        };
        de.require = function(e) {
            return kt[e]
        };

        function Fs(e) {
            de.env() && (rt(e.design) && je.on("__wf_design", e.design), rt(e.preview) && je.on("__wf_preview", e.preview)), rt(e.destroy) && je.on("__wf_destroy", e.destroy), e.ready && rt(e.ready) && tb(e)
        }

        function tb(e) {
            if (an) {
                e.ready();
                return
            }
            Xe.contains(Vt, e.ready) || Vt.push(e.ready)
        }

        function Ds(e) {
            rt(e.design) && je.off("__wf_design", e.design), rt(e.preview) && je.off("__wf_preview", e.preview), rt(e.destroy) && je.off("__wf_destroy", e.destroy), e.ready && rt(e.ready) && rb(e)
        }

        function rb(e) {
            Vt = Xe.filter(Vt, function(t) {
                return t !== e.ready
            })
        }
        de.push = function(e) {
            if (an) {
                rt(e) && e();
                return
            }
            Pi.push(e)
        };
        de.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var on = navigator.userAgent.toLowerCase(),
            Gs = de.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            nb = de.env.chrome = /chrome/.test(on) && /Google/.test(navigator.vendor) && parseInt(on.match(/chrome\/(\d+)\./)[1], 10),
            ib = de.env.ios = /(ipod|iphone|ipad)/.test(on);
        de.env.safari = /safari/.test(on) && !nb && !ib;
        var Li;
        Gs && eb.on("touchstart mousedown", function(e) {
            Li = e.target
        });
        de.validClick = Gs ? function(e) {
            return e === Li || yt.contains(e, Li)
        } : function() {
            return !0
        };
        var Us = "resize.webflow orientationchange.webflow load.webflow",
            ob = "scroll.webflow " + Us;
        de.resize = Mi(je, Us);
        de.scroll = Mi(je, ob);
        de.redraw = Mi();

        function Mi(e, t) {
            var r = [],
                n = {};
            return n.up = Xe.throttle(function(i) {
                Xe.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Xe.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Xe.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        de.location = function(e) {
            window.location = e
        };
        de.env() && (de.location = function() {});
        de.ready = function() {
            an = !0, qi ? ab() : Xe.each(Vt, qs), Xe.each(Pi, qs), de.resize.up()
        };

        function qs(e) {
            rt(e) && e()
        }

        function ab() {
            qi = !1, Xe.each(kt, Fs)
        }
        var xt;
        de.load = function(e) {
            xt.then(e)
        };

        function ks() {
            xt && (xt.reject(), je.off("load", xt.resolve)), xt = new yt.Deferred, je.on("load", xt.resolve)
        }
        de.destroy = function(e) {
            e = e || {}, qi = !0, je.triggerHandler("__wf_destroy"), e.domready != null && (an = e.domready), Xe.each(kt, Ds), de.resize.off(), de.scroll.off(), de.redraw.off(), Vt = [], Pi = [], xt.state() === "pending" && ks()
        };
        yt(de.ready);
        ks();
        Vs.exports = window.Webflow = de
    });
    var Ws = c((VV, Hs) => {
        "use strict";
        var Bs = Ve();
        Bs.define("brand", Hs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                f;
            t.ready = function() {
                var E = n.attr("data-wf-status"),
                    I = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(I) && a.hostname !== I && (E = !0), E && !s && (f = f || p(), d(), setTimeout(d, 500), e(r).off(u, h).on(u, h))
            };

            function h() {
                var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", E ? "display: none !important;" : "")
            }

            function p() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(I, _), E[0]
            }

            function d() {
                var E = i.children(o),
                    I = E.length && E.get(0) === f,
                    _ = Bs.env("editor");
                if (I) {
                    _ && E.remove();
                    return
                }
                E.length && E.remove(), _ || i.append(f)
            }
            return t
        })
    });
    var js = c((BV, Xs) => {
        "use strict";
        var Fi = Ve();
        Fi.define("edit", Xs.exports = function(e, t, r) {
            if (r = r || {}, (Fi.env("test") || Fi.env("frame")) && !r.fixture && !sb()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, f = r.load || d,
                h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            h ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(s, p).triggerHandler(s);

            function p() {
                u || /\?edit/.test(a.hash) && f()
            }

            function d() {
                u = !0, window.WebflowEditor = !0, i.off(s, p), C(function(R) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(R)
                    })
                })
            }

            function E(R) {
                return function(P) {
                    if (!P) {
                        console.error("Could not load editor data");
                        return
                    }
                    P.thirdPartyCookiesSupported = R, I(w(P.scriptPath), function() {
                        window.WebflowEditor(P)
                    })
                }
            }

            function I(R, P) {
                e.ajax({
                    type: "GET",
                    url: R,
                    dataType: "script",
                    cache: !0
                }).then(P, _)
            }

            function _(R, P, L) {
                throw console.error("Could not load editor script: " + P), L
            }

            function w(R) {
                return R.indexOf("//") >= 0 ? R : m("https://editor-api.webflow.com" + R)
            }

            function m(R) {
                return R.replace(/([^:])\/\//g, "$1/")
            }

            function C(R) {
                var P = window.document.createElement("iframe");
                P.src = "https://webflow.com/site/third-party-cookie-check.html", P.style.display = "none", P.sandbox = "allow-scripts allow-same-origin";
                var L = function(H) {
                    H.data === "WF_third_party_cookies_unsupported" ? (A(P, L), R(!1)) : H.data === "WF_third_party_cookies_supported" && (A(P, L), R(!0))
                };
                P.onerror = function() {
                    A(P, L), R(!1)
                }, window.addEventListener("message", L, !1), window.document.body.appendChild(P)
            }

            function A(R, P) {
                window.removeEventListener("message", P, !1), R.remove()
            }
            return n
        });

        function sb() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Ks = c((HV, zs) => {
        "use strict";
        var ub = Ve();
        ub.define("focus-visible", zs.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
                }

                function u(A) {
                    var R = A.type,
                        P = A.tagName;
                    return !!(P === "INPUT" && a[R] && !A.readOnly || P === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }

                function f(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }

                function h(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }

                function p(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
                }

                function d() {
                    n = !1
                }

                function E(A) {
                    s(A.target) && (n || u(A.target)) && f(A.target)
                }

                function I(A) {
                    s(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), h(A.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0), w())
                }

                function w() {
                    document.addEventListener("mousemove", C), document.addEventListener("mousedown", C), document.addEventListener("mouseup", C), document.addEventListener("pointermove", C), document.addEventListener("pointerdown", C), document.addEventListener("pointerup", C), document.addEventListener("touchmove", C), document.addEventListener("touchstart", C), document.addEventListener("touchend", C)
                }

                function m() {
                    document.removeEventListener("mousemove", C), document.removeEventListener("mousedown", C), document.removeEventListener("mouseup", C), document.removeEventListener("pointermove", C), document.removeEventListener("pointerdown", C), document.removeEventListener("pointerup", C), document.removeEventListener("touchmove", C), document.removeEventListener("touchstart", C), document.removeEventListener("touchend", C)
                }

                function C(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (n = !1, m())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", _, !0), w(), r.addEventListener("focus", E, !0), r.addEventListener("blur", I, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Qs = c((WV, $s) => {
        "use strict";
        var Ys = Ve();
        Ys.define("focus", $s.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ys.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var eu = c((XV, Js) => {
        "use strict";
        var Di = window.jQuery,
            nt = {},
            sn = [],
            Zs = ".w-ix",
            un = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Di(t).triggerHandler(nt.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Di(t).triggerHandler(nt.types.OUTRO))
                }
            };
        nt.triggers = {};
        nt.types = {
            INTRO: "w-ix-intro" + Zs,
            OUTRO: "w-ix-outro" + Zs
        };
        nt.init = function() {
            for (var e = sn.length, t = 0; t < e; t++) {
                var r = sn[t];
                r[0](0, r[1])
            }
            sn = [], Di.extend(nt.triggers, un)
        };
        nt.async = function() {
            for (var e in un) {
                var t = un[e];
                un.hasOwnProperty(e) && (nt.triggers[e] = function(r, n) {
                    sn.push([t, n])
                })
            }
        };
        nt.async();
        Js.exports = nt
    });
    var ln = c((jV, nu) => {
        "use strict";
        var Gi = eu();

        function tu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var cb = window.jQuery,
            cn = {},
            ru = ".w-ix",
            lb = {
                reset: function(e, t) {
                    Gi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Gi.triggers.intro(e, t), tu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Gi.triggers.outro(e, t), tu(t, "COMPONENT_INACTIVE")
                }
            };
        cn.triggers = {};
        cn.types = {
            INTRO: "w-ix-intro" + ru,
            OUTRO: "w-ix-outro" + ru
        };
        cb.extend(cn.triggers, lb);
        nu.exports = cn
    });
    var iu = c((zV, ft) => {
        function Ui(e) {
            return ft.exports = Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ft.exports.__esModule = !0, ft.exports.default = ft.exports, Ui(e)
        }
        ft.exports = Ui, ft.exports.__esModule = !0, ft.exports.default = ft.exports
    });
    var fn = c((KV, mr) => {
        var fb = iu().default;

        function ou(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (ou = function(i) {
                return i ? r : t
            })(e)
        }

        function db(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || fb(e) != "object" && typeof e != "function") return {
                default: e
            };
            var r = ou(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        mr.exports = db, mr.exports.__esModule = !0, mr.exports.default = mr.exports
    });
    var au = c((YV, _r) => {
        function pb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        _r.exports = pb, _r.exports.__esModule = !0, _r.exports.default = _r.exports
    });
    var Ee = c(($V, su) => {
        var dn = function(e) {
            return e && e.Math == Math && e
        };
        su.exports = dn(typeof globalThis == "object" && globalThis) || dn(typeof window == "object" && window) || dn(typeof self == "object" && self) || dn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Bt = c((QV, uu) => {
        uu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ct = c((ZV, cu) => {
        var gb = Bt();
        cu.exports = !gb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var pn = c((JV, lu) => {
        var br = Function.prototype.call;
        lu.exports = br.bind ? br.bind(br) : function() {
            return br.apply(br, arguments)
        }
    });
    var gu = c(pu => {
        "use strict";
        var fu = {}.propertyIsEnumerable,
            du = Object.getOwnPropertyDescriptor,
            vb = du && !fu.call({
                1: 2
            }, 1);
        pu.f = vb ? function(t) {
            var r = du(this, t);
            return !!r && r.enumerable
        } : fu
    });
    var ki = c((tB, vu) => {
        vu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var ze = c((rB, Eu) => {
        var hu = Function.prototype,
            Vi = hu.bind,
            Bi = hu.call,
            hb = Vi && Vi.bind(Bi);
        Eu.exports = Vi ? function(e) {
            return e && hb(Bi, e)
        } : function(e) {
            return e && function() {
                return Bi.apply(e, arguments)
            }
        }
    });
    var _u = c((nB, mu) => {
        var yu = ze(),
            Eb = yu({}.toString),
            yb = yu("".slice);
        mu.exports = function(e) {
            return yb(Eb(e), 8, -1)
        }
    });
    var Tu = c((iB, bu) => {
        var mb = Ee(),
            _b = ze(),
            bb = Bt(),
            Tb = _u(),
            Hi = mb.Object,
            Ib = _b("".split);
        bu.exports = bb(function() {
            return !Hi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Tb(e) == "String" ? Ib(e, "") : Hi(e)
        } : Hi
    });
    var Wi = c((oB, Iu) => {
        var Ob = Ee(),
            wb = Ob.TypeError;
        Iu.exports = function(e) {
            if (e == null) throw wb("Can't call method on " + e);
            return e
        }
    });
    var Tr = c((aB, Ou) => {
        var Ab = Tu(),
            Sb = Wi();
        Ou.exports = function(e) {
            return Ab(Sb(e))
        }
    });
    var it = c((sB, wu) => {
        wu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Ht = c((uB, Au) => {
        var xb = it();
        Au.exports = function(e) {
            return typeof e == "object" ? e !== null : xb(e)
        }
    });
    var Ir = c((cB, Su) => {
        var Xi = Ee(),
            Cb = it(),
            Rb = function(e) {
                return Cb(e) ? e : void 0
            };
        Su.exports = function(e, t) {
            return arguments.length < 2 ? Rb(Xi[e]) : Xi[e] && Xi[e][t]
        }
    });
    var Cu = c((lB, xu) => {
        var Nb = ze();
        xu.exports = Nb({}.isPrototypeOf)
    });
    var Nu = c((fB, Ru) => {
        var Lb = Ir();
        Ru.exports = Lb("navigator", "userAgent") || ""
    });
    var Gu = c((dB, Du) => {
        var Fu = Ee(),
            ji = Nu(),
            Lu = Fu.process,
            Pu = Fu.Deno,
            qu = Lu && Lu.versions || Pu && Pu.version,
            Mu = qu && qu.v8,
            Ke, gn;
        Mu && (Ke = Mu.split("."), gn = Ke[0] > 0 && Ke[0] < 4 ? 1 : +(Ke[0] + Ke[1]));
        !gn && ji && (Ke = ji.match(/Edge\/(\d+)/), (!Ke || Ke[1] >= 74) && (Ke = ji.match(/Chrome\/(\d+)/), Ke && (gn = +Ke[1])));
        Du.exports = gn
    });
    var zi = c((pB, ku) => {
        var Uu = Gu(),
            Pb = Bt();
        ku.exports = !!Object.getOwnPropertySymbols && !Pb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Uu && Uu < 41
        })
    });
    var Ki = c((gB, Vu) => {
        var qb = zi();
        Vu.exports = qb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Yi = c((vB, Bu) => {
        var Mb = Ee(),
            Fb = Ir(),
            Db = it(),
            Gb = Cu(),
            Ub = Ki(),
            kb = Mb.Object;
        Bu.exports = Ub ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Fb("Symbol");
            return Db(t) && Gb(t.prototype, kb(e))
        }
    });
    var Wu = c((hB, Hu) => {
        var Vb = Ee(),
            Bb = Vb.String;
        Hu.exports = function(e) {
            try {
                return Bb(e)
            } catch {
                return "Object"
            }
        }
    });
    var ju = c((EB, Xu) => {
        var Hb = Ee(),
            Wb = it(),
            Xb = Wu(),
            jb = Hb.TypeError;
        Xu.exports = function(e) {
            if (Wb(e)) return e;
            throw jb(Xb(e) + " is not a function")
        }
    });
    var Ku = c((yB, zu) => {
        var zb = ju();
        zu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : zb(r)
        }
    });
    var $u = c((mB, Yu) => {
        var Kb = Ee(),
            $i = pn(),
            Qi = it(),
            Zi = Ht(),
            Yb = Kb.TypeError;
        Yu.exports = function(e, t) {
            var r, n;
            if (t === "string" && Qi(r = e.toString) && !Zi(n = $i(r, e)) || Qi(r = e.valueOf) && !Zi(n = $i(r, e)) || t !== "string" && Qi(r = e.toString) && !Zi(n = $i(r, e))) return n;
            throw Yb("Can't convert object to primitive value")
        }
    });
    var Zu = c((_B, Qu) => {
        Qu.exports = !1
    });
    var vn = c((bB, ec) => {
        var Ju = Ee(),
            $b = Object.defineProperty;
        ec.exports = function(e, t) {
            try {
                $b(Ju, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Ju[e] = t
            }
            return t
        }
    });
    var hn = c((TB, rc) => {
        var Qb = Ee(),
            Zb = vn(),
            tc = "__core-js_shared__",
            Jb = Qb[tc] || Zb(tc, {});
        rc.exports = Jb
    });
    var Ji = c((IB, ic) => {
        var eT = Zu(),
            nc = hn();
        (ic.exports = function(e, t) {
            return nc[e] || (nc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: eT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var ac = c((OB, oc) => {
        var tT = Ee(),
            rT = Wi(),
            nT = tT.Object;
        oc.exports = function(e) {
            return nT(rT(e))
        }
    });
    var mt = c((wB, sc) => {
        var iT = ze(),
            oT = ac(),
            aT = iT({}.hasOwnProperty);
        sc.exports = Object.hasOwn || function(t, r) {
            return aT(oT(t), r)
        }
    });
    var eo = c((AB, uc) => {
        var sT = ze(),
            uT = 0,
            cT = Math.random(),
            lT = sT(1.toString);
        uc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + lT(++uT + cT, 36)
        }
    });
    var to = c((SB, pc) => {
        var fT = Ee(),
            dT = Ji(),
            cc = mt(),
            pT = eo(),
            lc = zi(),
            dc = Ki(),
            Wt = dT("wks"),
            Rt = fT.Symbol,
            fc = Rt && Rt.for,
            gT = dc ? Rt : Rt && Rt.withoutSetter || pT;
        pc.exports = function(e) {
            if (!cc(Wt, e) || !(lc || typeof Wt[e] == "string")) {
                var t = "Symbol." + e;
                lc && cc(Rt, e) ? Wt[e] = Rt[e] : dc && fc ? Wt[e] = fc(t) : Wt[e] = gT(t)
            }
            return Wt[e]
        }
    });
    var Ec = c((xB, hc) => {
        var vT = Ee(),
            hT = pn(),
            gc = Ht(),
            vc = Yi(),
            ET = Ku(),
            yT = $u(),
            mT = to(),
            _T = vT.TypeError,
            bT = mT("toPrimitive");
        hc.exports = function(e, t) {
            if (!gc(e) || vc(e)) return e;
            var r = ET(e, bT),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = hT(r, e, t), !gc(n) || vc(n)) return n;
                throw _T("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), yT(e, t)
        }
    });
    var ro = c((CB, yc) => {
        var TT = Ec(),
            IT = Yi();
        yc.exports = function(e) {
            var t = TT(e, "string");
            return IT(t) ? t : t + ""
        }
    });
    var io = c((RB, _c) => {
        var OT = Ee(),
            mc = Ht(),
            no = OT.document,
            wT = mc(no) && mc(no.createElement);
        _c.exports = function(e) {
            return wT ? no.createElement(e) : {}
        }
    });
    var oo = c((NB, bc) => {
        var AT = Ct(),
            ST = Bt(),
            xT = io();
        bc.exports = !AT && !ST(function() {
            return Object.defineProperty(xT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var ao = c(Ic => {
        var CT = Ct(),
            RT = pn(),
            NT = gu(),
            LT = ki(),
            PT = Tr(),
            qT = ro(),
            MT = mt(),
            FT = oo(),
            Tc = Object.getOwnPropertyDescriptor;
        Ic.f = CT ? Tc : function(t, r) {
            if (t = PT(t), r = qT(r), FT) try {
                return Tc(t, r)
            } catch {}
            if (MT(t, r)) return LT(!RT(NT.f, t, r), t[r])
        }
    });
    var Or = c((PB, wc) => {
        var Oc = Ee(),
            DT = Ht(),
            GT = Oc.String,
            UT = Oc.TypeError;
        wc.exports = function(e) {
            if (DT(e)) return e;
            throw UT(GT(e) + " is not an object")
        }
    });
    var wr = c(xc => {
        var kT = Ee(),
            VT = Ct(),
            BT = oo(),
            Ac = Or(),
            HT = ro(),
            WT = kT.TypeError,
            Sc = Object.defineProperty;
        xc.f = VT ? Sc : function(t, r, n) {
            if (Ac(t), r = HT(r), Ac(n), BT) try {
                return Sc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw WT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var En = c((MB, Cc) => {
        var XT = Ct(),
            jT = wr(),
            zT = ki();
        Cc.exports = XT ? function(e, t, r) {
            return jT.f(e, t, zT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var uo = c((FB, Rc) => {
        var KT = ze(),
            YT = it(),
            so = hn(),
            $T = KT(Function.toString);
        YT(so.inspectSource) || (so.inspectSource = function(e) {
            return $T(e)
        });
        Rc.exports = so.inspectSource
    });
    var Pc = c((DB, Lc) => {
        var QT = Ee(),
            ZT = it(),
            JT = uo(),
            Nc = QT.WeakMap;
        Lc.exports = ZT(Nc) && /native code/.test(JT(Nc))
    });
    var co = c((GB, Mc) => {
        var eI = Ji(),
            tI = eo(),
            qc = eI("keys");
        Mc.exports = function(e) {
            return qc[e] || (qc[e] = tI(e))
        }
    });
    var yn = c((UB, Fc) => {
        Fc.exports = {}
    });
    var Bc = c((kB, Vc) => {
        var rI = Pc(),
            kc = Ee(),
            lo = ze(),
            nI = Ht(),
            iI = En(),
            fo = mt(),
            po = hn(),
            oI = co(),
            aI = yn(),
            Dc = "Object already initialized",
            vo = kc.TypeError,
            sI = kc.WeakMap,
            mn, Ar, _n, uI = function(e) {
                return _n(e) ? Ar(e) : mn(e, {})
            },
            cI = function(e) {
                return function(t) {
                    var r;
                    if (!nI(t) || (r = Ar(t)).type !== e) throw vo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        rI || po.state ? (_t = po.state || (po.state = new sI), Gc = lo(_t.get), go = lo(_t.has), Uc = lo(_t.set), mn = function(e, t) {
            if (go(_t, e)) throw new vo(Dc);
            return t.facade = e, Uc(_t, e, t), t
        }, Ar = function(e) {
            return Gc(_t, e) || {}
        }, _n = function(e) {
            return go(_t, e)
        }) : (Nt = oI("state"), aI[Nt] = !0, mn = function(e, t) {
            if (fo(e, Nt)) throw new vo(Dc);
            return t.facade = e, iI(e, Nt, t), t
        }, Ar = function(e) {
            return fo(e, Nt) ? e[Nt] : {}
        }, _n = function(e) {
            return fo(e, Nt)
        });
        var _t, Gc, go, Uc, Nt;
        Vc.exports = {
            set: mn,
            get: Ar,
            has: _n,
            enforce: uI,
            getterFor: cI
        }
    });
    var Xc = c((VB, Wc) => {
        var ho = Ct(),
            lI = mt(),
            Hc = Function.prototype,
            fI = ho && Object.getOwnPropertyDescriptor,
            Eo = lI(Hc, "name"),
            dI = Eo && function() {}.name === "something",
            pI = Eo && (!ho || ho && fI(Hc, "name").configurable);
        Wc.exports = {
            EXISTS: Eo,
            PROPER: dI,
            CONFIGURABLE: pI
        }
    });
    var $c = c((BB, Yc) => {
        var gI = Ee(),
            jc = it(),
            vI = mt(),
            zc = En(),
            hI = vn(),
            EI = uo(),
            Kc = Bc(),
            yI = Xc().CONFIGURABLE,
            mI = Kc.get,
            _I = Kc.enforce,
            bI = String(String).split("String");
        (Yc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                u;
            if (jc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!vI(r, "name") || yI && r.name !== s) && zc(r, "name", s), u = _I(r), u.source || (u.source = bI.join(typeof s == "string" ? s : ""))), e === gI) {
                o ? e[t] = r : hI(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : zc(e, t, r)
        })(Function.prototype, "toString", function() {
            return jc(this) && mI(this).source || EI(this)
        })
    });
    var yo = c((HB, Qc) => {
        var TI = Math.ceil,
            II = Math.floor;
        Qc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? II : TI)(t)
        }
    });
    var Jc = c((WB, Zc) => {
        var OI = yo(),
            wI = Math.max,
            AI = Math.min;
        Zc.exports = function(e, t) {
            var r = OI(e);
            return r < 0 ? wI(r + t, 0) : AI(r, t)
        }
    });
    var tl = c((XB, el) => {
        var SI = yo(),
            xI = Math.min;
        el.exports = function(e) {
            return e > 0 ? xI(SI(e), 9007199254740991) : 0
        }
    });
    var nl = c((jB, rl) => {
        var CI = tl();
        rl.exports = function(e) {
            return CI(e.length)
        }
    });
    var mo = c((zB, ol) => {
        var RI = Tr(),
            NI = Jc(),
            LI = nl(),
            il = function(e) {
                return function(t, r, n) {
                    var i = RI(t),
                        o = LI(i),
                        a = NI(n, o),
                        s;
                    if (e && r != r) {
                        for (; o > a;)
                            if (s = i[a++], s != s) return !0
                    } else
                        for (; o > a; a++)
                            if ((e || a in i) && i[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        ol.exports = {
            includes: il(!0),
            indexOf: il(!1)
        }
    });
    var bo = c((KB, sl) => {
        var PI = ze(),
            _o = mt(),
            qI = Tr(),
            MI = mo().indexOf,
            FI = yn(),
            al = PI([].push);
        sl.exports = function(e, t) {
            var r = qI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !_o(FI, o) && _o(r, o) && al(i, o);
            for (; t.length > n;) _o(r, o = t[n++]) && (~MI(i, o) || al(i, o));
            return i
        }
    });
    var bn = c((YB, ul) => {
        ul.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var ll = c(cl => {
        var DI = bo(),
            GI = bn(),
            UI = GI.concat("length", "prototype");
        cl.f = Object.getOwnPropertyNames || function(t) {
            return DI(t, UI)
        }
    });
    var dl = c(fl => {
        fl.f = Object.getOwnPropertySymbols
    });
    var gl = c((ZB, pl) => {
        var kI = Ir(),
            VI = ze(),
            BI = ll(),
            HI = dl(),
            WI = Or(),
            XI = VI([].concat);
        pl.exports = kI("Reflect", "ownKeys") || function(t) {
            var r = BI.f(WI(t)),
                n = HI.f;
            return n ? XI(r, n(t)) : r
        }
    });
    var hl = c((JB, vl) => {
        var jI = mt(),
            zI = gl(),
            KI = ao(),
            YI = wr();
        vl.exports = function(e, t) {
            for (var r = zI(t), n = YI.f, i = KI.f, o = 0; o < r.length; o++) {
                var a = r[o];
                jI(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var yl = c((eH, El) => {
        var $I = Bt(),
            QI = it(),
            ZI = /#|\.prototype\./,
            Sr = function(e, t) {
                var r = eO[JI(e)];
                return r == rO ? !0 : r == tO ? !1 : QI(t) ? $I(t) : !!t
            },
            JI = Sr.normalize = function(e) {
                return String(e).replace(ZI, ".").toLowerCase()
            },
            eO = Sr.data = {},
            tO = Sr.NATIVE = "N",
            rO = Sr.POLYFILL = "P";
        El.exports = Sr
    });
    var _l = c((tH, ml) => {
        var To = Ee(),
            nO = ao().f,
            iO = En(),
            oO = $c(),
            aO = vn(),
            sO = hl(),
            uO = yl();
        ml.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, a, s, u, f, h;
            if (n ? a = To : i ? a = To[r] || aO(r, {}) : a = (To[r] || {}).prototype, a)
                for (s in t) {
                    if (f = t[s], e.noTargetGet ? (h = nO(a, s), u = h && h.value) : u = a[s], o = uO(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
                        if (typeof f == typeof u) continue;
                        sO(f, u)
                    }(e.sham || u && u.sham) && iO(f, "sham", !0), oO(a, s, f, e)
                }
        }
    });
    var Tl = c((rH, bl) => {
        var cO = bo(),
            lO = bn();
        bl.exports = Object.keys || function(t) {
            return cO(t, lO)
        }
    });
    var Ol = c((nH, Il) => {
        var fO = Ct(),
            dO = wr(),
            pO = Or(),
            gO = Tr(),
            vO = Tl();
        Il.exports = fO ? Object.defineProperties : function(t, r) {
            pO(t);
            for (var n = gO(r), i = vO(r), o = i.length, a = 0, s; o > a;) dO.f(t, s = i[a++], n[s]);
            return t
        }
    });
    var Al = c((iH, wl) => {
        var hO = Ir();
        wl.exports = hO("document", "documentElement")
    });
    var ql = c((oH, Pl) => {
        var EO = Or(),
            yO = Ol(),
            Sl = bn(),
            mO = yn(),
            _O = Al(),
            bO = io(),
            TO = co(),
            xl = ">",
            Cl = "<",
            Oo = "prototype",
            wo = "script",
            Nl = TO("IE_PROTO"),
            Io = function() {},
            Ll = function(e) {
                return Cl + wo + xl + e + Cl + "/" + wo + xl
            },
            Rl = function(e) {
                e.write(Ll("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            IO = function() {
                var e = bO("iframe"),
                    t = "java" + wo + ":",
                    r;
                return e.style.display = "none", _O.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Ll("document.F=Object")), r.close(), r.F
            },
            Tn, In = function() {
                try {
                    Tn = new ActiveXObject("htmlfile")
                } catch {}
                In = typeof document < "u" ? document.domain && Tn ? Rl(Tn) : IO() : Rl(Tn);
                for (var e = Sl.length; e--;) delete In[Oo][Sl[e]];
                return In()
            };
        mO[Nl] = !0;
        Pl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Io[Oo] = EO(t), n = new Io, Io[Oo] = null, n[Nl] = t) : n = In(), r === void 0 ? n : yO(n, r)
        }
    });
    var Fl = c((aH, Ml) => {
        var OO = to(),
            wO = ql(),
            AO = wr(),
            Ao = OO("unscopables"),
            So = Array.prototype;
        So[Ao] == null && AO.f(So, Ao, {
            configurable: !0,
            value: wO(null)
        });
        Ml.exports = function(e) {
            So[Ao][e] = !0
        }
    });
    var Dl = c(() => {
        "use strict";
        var SO = _l(),
            xO = mo().includes,
            CO = Fl();
        SO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return xO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        CO("includes")
    });
    var Ul = c((cH, Gl) => {
        var RO = Ee(),
            NO = ze();
        Gl.exports = function(e, t) {
            return NO(RO[e].prototype[t])
        }
    });
    var Vl = c((lH, kl) => {
        Dl();
        var LO = Ul();
        kl.exports = LO("Array", "includes")
    });
    var Hl = c((fH, Bl) => {
        var PO = Vl();
        Bl.exports = PO
    });
    var Xl = c((dH, Wl) => {
        var qO = Hl();
        Wl.exports = qO
    });
    var xo = c((pH, jl) => {
        var MO = typeof global == "object" && global && global.Object === Object && global;
        jl.exports = MO
    });
    var Ye = c((gH, zl) => {
        var FO = xo(),
            DO = typeof self == "object" && self && self.Object === Object && self,
            GO = FO || DO || Function("return this")();
        zl.exports = GO
    });
    var Xt = c((vH, Kl) => {
        var UO = Ye(),
            kO = UO.Symbol;
        Kl.exports = kO
    });
    var Zl = c((hH, Ql) => {
        var Yl = Xt(),
            $l = Object.prototype,
            VO = $l.hasOwnProperty,
            BO = $l.toString,
            xr = Yl ? Yl.toStringTag : void 0;

        function HO(e) {
            var t = VO.call(e, xr),
                r = e[xr];
            try {
                e[xr] = void 0;
                var n = !0
            } catch {}
            var i = BO.call(e);
            return n && (t ? e[xr] = r : delete e[xr]), i
        }
        Ql.exports = HO
    });
    var ef = c((EH, Jl) => {
        var WO = Object.prototype,
            XO = WO.toString;

        function jO(e) {
            return XO.call(e)
        }
        Jl.exports = jO
    });
    var bt = c((yH, nf) => {
        var tf = Xt(),
            zO = Zl(),
            KO = ef(),
            YO = "[object Null]",
            $O = "[object Undefined]",
            rf = tf ? tf.toStringTag : void 0;

        function QO(e) {
            return e == null ? e === void 0 ? $O : YO : rf && rf in Object(e) ? zO(e) : KO(e)
        }
        nf.exports = QO
    });
    var Co = c((mH, of ) => {
        function ZO(e, t) {
            return function(r) {
                return e(t(r))
            }
        } of .exports = ZO
    });
    var Ro = c((_H, af) => {
        var JO = Co(),
            e0 = JO(Object.getPrototypeOf, Object);
        af.exports = e0
    });
    var dt = c((bH, sf) => {
        function t0(e) {
            return e != null && typeof e == "object"
        }
        sf.exports = t0
    });
    var No = c((TH, cf) => {
        var r0 = bt(),
            n0 = Ro(),
            i0 = dt(),
            o0 = "[object Object]",
            a0 = Function.prototype,
            s0 = Object.prototype,
            uf = a0.toString,
            u0 = s0.hasOwnProperty,
            c0 = uf.call(Object);

        function l0(e) {
            if (!i0(e) || r0(e) != o0) return !1;
            var t = n0(e);
            if (t === null) return !0;
            var r = u0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && uf.call(r) == c0
        }
        cf.exports = l0
    });
    var lf = c(Lo => {
        "use strict";
        Object.defineProperty(Lo, "__esModule", {
            value: !0
        });
        Lo.default = f0;

        function f0(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var ff = c((qo, Po) => {
        "use strict";
        Object.defineProperty(qo, "__esModule", {
            value: !0
        });
        var d0 = lf(),
            p0 = g0(d0);

        function g0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var jt;
        typeof self < "u" ? jt = self : typeof window < "u" ? jt = window : typeof global < "u" ? jt = global : typeof Po < "u" ? jt = Po : jt = Function("return this")();
        var v0 = (0, p0.default)(jt);
        qo.default = v0
    });
    var Mo = c(Cr => {
        "use strict";
        Cr.__esModule = !0;
        Cr.ActionTypes = void 0;
        Cr.default = vf;
        var h0 = No(),
            E0 = gf(h0),
            y0 = ff(),
            df = gf(y0);

        function gf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var pf = Cr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function vf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(vf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function f() {
                s === a && (s = a.slice())
            }

            function h() {
                return o
            }

            function p(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var w = !0;
                return f(), s.push(_),
                    function() {
                        if (w) {
                            w = !1, f();
                            var C = s.indexOf(_);
                            s.splice(C, 1)
                        }
                    }
            }

            function d(_) {
                if (!(0, E0.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var w = a = s, m = 0; m < w.length; m++) w[m]();
                return _
            }

            function E(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, d({
                    type: pf.INIT
                })
            }

            function I() {
                var _, w = p;
                return _ = {
                    subscribe: function(C) {
                        if (typeof C != "object") throw new TypeError("Expected the observer to be an object.");

                        function A() {
                            C.next && C.next(h())
                        }
                        A();
                        var R = w(A);
                        return {
                            unsubscribe: R
                        }
                    }
                }, _[df.default] = function() {
                    return this
                }, _
            }
            return d({
                type: pf.INIT
            }), n = {
                dispatch: d,
                subscribe: p,
                getState: h,
                replaceReducer: E
            }, n[df.default] = I, n
        }
    });
    var Do = c(Fo => {
        "use strict";
        Fo.__esModule = !0;
        Fo.default = m0;

        function m0(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var yf = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = O0;
        var hf = Mo(),
            _0 = No(),
            AH = Ef(_0),
            b0 = Do(),
            SH = Ef(b0);

        function Ef(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function T0(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function I0(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: hf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + hf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function O0(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                I0(r)
            } catch (u) {
                s = u
            }
            return function() {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    h = arguments[1];
                if (s) throw s;
                if (!1) var p;
                for (var d = !1, E = {}, I = 0; I < o.length; I++) {
                    var _ = o[I],
                        w = r[_],
                        m = f[_],
                        C = w(m, h);
                    if (typeof C > "u") {
                        var A = T0(_, h);
                        throw new Error(A)
                    }
                    E[_] = C, d = d || C !== m
                }
                return d ? E : f
            }
        }
    });
    var _f = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = w0;

        function mf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function w0(e, t) {
            if (typeof e == "function") return mf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = mf(a, t))
            }
            return n
        }
    });
    var Vo = c(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = A0;

        function A0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var bf = c(Bo => {
        "use strict";
        Bo.__esModule = !0;
        var S0 = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Bo.default = N0;
        var x0 = Vo(),
            C0 = R0(x0);

        function R0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function N0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a),
                        u = s.dispatch,
                        f = [],
                        h = {
                            getState: s.getState,
                            dispatch: function(d) {
                                return u(d)
                            }
                        };
                    return f = t.map(function(p) {
                        return p(h)
                    }), u = C0.default.apply(void 0, f)(s.dispatch), S0({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Ho = c(Be => {
        "use strict";
        Be.__esModule = !0;
        Be.compose = Be.applyMiddleware = Be.bindActionCreators = Be.combineReducers = Be.createStore = void 0;
        var L0 = Mo(),
            P0 = zt(L0),
            q0 = yf(),
            M0 = zt(q0),
            F0 = _f(),
            D0 = zt(F0),
            G0 = bf(),
            U0 = zt(G0),
            k0 = Vo(),
            V0 = zt(k0),
            B0 = Do(),
            LH = zt(B0);

        function zt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Be.createStore = P0.default;
        Be.combineReducers = M0.default;
        Be.bindActionCreators = D0.default;
        Be.applyMiddleware = U0.default;
        Be.compose = V0.default
    });
    var $e, Wo, ot, H0, W0, On, X0, Xo = he(() => {
        "use strict";
        $e = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Wo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, ot = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, H0 = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, W0 = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, On = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, X0 = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var De, j0, wn = he(() => {
        "use strict";
        De = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, j0 = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var z0, Tf = he(() => {
        "use strict";
        z0 = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var K0, Y0, $0, Q0, Z0, J0, ew, jo, If = he(() => {
        "use strict";
        wn();
        ({
            TRANSFORM_MOVE: K0,
            TRANSFORM_SCALE: Y0,
            TRANSFORM_ROTATE: $0,
            TRANSFORM_SKEW: Q0,
            STYLE_SIZE: Z0,
            STYLE_FILTER: J0,
            STYLE_FONT_VARIATION: ew
        } = De), jo = {
            [K0]: !0,
            [Y0]: !0,
            [$0]: !0,
            [Q0]: !0,
            [Z0]: !0,
            [J0]: !0,
            [ew]: !0
        }
    });
    var Ie = {};
    Fe(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Ew,
        IX2_ANIMATION_FRAME_CHANGED: () => fw,
        IX2_CLEAR_REQUESTED: () => uw,
        IX2_ELEMENT_STATE_CHANGED: () => hw,
        IX2_EVENT_LISTENER_ADDED: () => cw,
        IX2_EVENT_STATE_CHANGED: () => lw,
        IX2_INSTANCE_ADDED: () => pw,
        IX2_INSTANCE_REMOVED: () => vw,
        IX2_INSTANCE_STARTED: () => gw,
        IX2_MEDIA_QUERIES_DEFINED: () => mw,
        IX2_PARAMETER_CHANGED: () => dw,
        IX2_PLAYBACK_REQUESTED: () => aw,
        IX2_PREVIEW_REQUESTED: () => ow,
        IX2_RAW_DATA_IMPORTED: () => tw,
        IX2_SESSION_INITIALIZED: () => rw,
        IX2_SESSION_STARTED: () => nw,
        IX2_SESSION_STOPPED: () => iw,
        IX2_STOP_REQUESTED: () => sw,
        IX2_TEST_FRAME_RENDERED: () => _w,
        IX2_VIEWPORT_WIDTH_CHANGED: () => yw
    });
    var tw, rw, nw, iw, ow, aw, sw, uw, cw, lw, fw, dw, pw, gw, vw, hw, Ew, yw, mw, _w, Of = he(() => {
        "use strict";
        tw = "IX2_RAW_DATA_IMPORTED", rw = "IX2_SESSION_INITIALIZED", nw = "IX2_SESSION_STARTED", iw = "IX2_SESSION_STOPPED", ow = "IX2_PREVIEW_REQUESTED", aw = "IX2_PLAYBACK_REQUESTED", sw = "IX2_STOP_REQUESTED", uw = "IX2_CLEAR_REQUESTED", cw = "IX2_EVENT_LISTENER_ADDED", lw = "IX2_EVENT_STATE_CHANGED", fw = "IX2_ANIMATION_FRAME_CHANGED", dw = "IX2_PARAMETER_CHANGED", pw = "IX2_INSTANCE_ADDED", gw = "IX2_INSTANCE_STARTED", vw = "IX2_INSTANCE_REMOVED", hw = "IX2_ELEMENT_STATE_CHANGED", Ew = "IX2_ACTION_LIST_PLAYBACK_CHANGED", yw = "IX2_VIEWPORT_WIDTH_CHANGED", mw = "IX2_MEDIA_QUERIES_DEFINED", _w = "IX2_TEST_FRAME_RENDERED"
    });
    var Ce = {};
    Fe(Ce, {
        ABSTRACT_NODE: () => yA,
        AUTO: () => sA,
        BACKGROUND: () => tA,
        BACKGROUND_COLOR: () => eA,
        BAR_DELIMITER: () => lA,
        BORDER_COLOR: () => rA,
        BOUNDARY_SELECTOR: () => ww,
        CHILDREN: () => fA,
        COLON_DELIMITER: () => cA,
        COLOR: () => nA,
        COMMA_DELIMITER: () => uA,
        CONFIG_UNIT: () => Pw,
        CONFIG_VALUE: () => Cw,
        CONFIG_X_UNIT: () => Rw,
        CONFIG_X_VALUE: () => Aw,
        CONFIG_Y_UNIT: () => Nw,
        CONFIG_Y_VALUE: () => Sw,
        CONFIG_Z_UNIT: () => Lw,
        CONFIG_Z_VALUE: () => xw,
        DISPLAY: () => iA,
        FILTER: () => $w,
        FLEX: () => oA,
        FONT_VARIATION_SETTINGS: () => Qw,
        HEIGHT: () => Jw,
        HTML_ELEMENT: () => hA,
        IMMEDIATE_CHILDREN: () => dA,
        IX2_ID_DELIMITER: () => bw,
        OPACITY: () => Yw,
        PARENT: () => gA,
        PLAIN_OBJECT: () => EA,
        PRESERVE_3D: () => vA,
        RENDER_GENERAL: () => _A,
        RENDER_PLUGIN: () => TA,
        RENDER_STYLE: () => bA,
        RENDER_TRANSFORM: () => mA,
        ROTATE_X: () => Hw,
        ROTATE_Y: () => Ww,
        ROTATE_Z: () => Xw,
        SCALE_3D: () => Bw,
        SCALE_X: () => Uw,
        SCALE_Y: () => kw,
        SCALE_Z: () => Vw,
        SIBLINGS: () => pA,
        SKEW: () => jw,
        SKEW_X: () => zw,
        SKEW_Y: () => Kw,
        TRANSFORM: () => qw,
        TRANSLATE_3D: () => Gw,
        TRANSLATE_X: () => Mw,
        TRANSLATE_Y: () => Fw,
        TRANSLATE_Z: () => Dw,
        WF_PAGE: () => Tw,
        WIDTH: () => Zw,
        WILL_CHANGE: () => aA,
        W_MOD_IX: () => Ow,
        W_MOD_JS: () => Iw
    });
    var bw, Tw, Iw, Ow, ww, Aw, Sw, xw, Cw, Rw, Nw, Lw, Pw, qw, Mw, Fw, Dw, Gw, Uw, kw, Vw, Bw, Hw, Ww, Xw, jw, zw, Kw, Yw, $w, Qw, Zw, Jw, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, gA, vA, hA, EA, yA, mA, _A, bA, TA, wf = he(() => {
        "use strict";
        bw = "|", Tw = "data-wf-page", Iw = "w-mod-js", Ow = "w-mod-ix", ww = ".w-dyn-item", Aw = "xValue", Sw = "yValue", xw = "zValue", Cw = "value", Rw = "xUnit", Nw = "yUnit", Lw = "zUnit", Pw = "unit", qw = "transform", Mw = "translateX", Fw = "translateY", Dw = "translateZ", Gw = "translate3d", Uw = "scaleX", kw = "scaleY", Vw = "scaleZ", Bw = "scale3d", Hw = "rotateX", Ww = "rotateY", Xw = "rotateZ", jw = "skew", zw = "skewX", Kw = "skewY", Yw = "opacity", $w = "filter", Qw = "font-variation-settings", Zw = "width", Jw = "height", eA = "backgroundColor", tA = "background", rA = "borderColor", nA = "color", iA = "display", oA = "flex", aA = "willChange", sA = "AUTO", uA = ",", cA = ":", lA = "|", fA = "CHILDREN", dA = "IMMEDIATE_CHILDREN", pA = "SIBLINGS", gA = "PARENT", vA = "preserve-3d", hA = "HTML_ELEMENT", EA = "PLAIN_OBJECT", yA = "ABSTRACT_NODE", mA = "RENDER_TRANSFORM", _A = "RENDER_GENERAL", bA = "RENDER_STYLE", TA = "RENDER_PLUGIN"
    });
    var Af = {};
    Fe(Af, {
        ActionAppliesTo: () => j0,
        ActionTypeConsts: () => De,
        EventAppliesTo: () => Wo,
        EventBasedOn: () => ot,
        EventContinuousMouseAxes: () => H0,
        EventLimitAffectedElements: () => W0,
        EventTypeConsts: () => $e,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => z0,
        QuickEffectDirectionConsts: () => X0,
        QuickEffectIds: () => On,
        ReducedMotionTypes: () => jo
    });
    var Ge = he(() => {
        "use strict";
        Xo();
        wn();
        Tf();
        If();
        Of();
        wf();
        wn();
        Xo()
    });
    var IA, Sf, xf = he(() => {
        "use strict";
        Ge();
        ({
            IX2_RAW_DATA_IMPORTED: IA
        } = Ie), Sf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case IA:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Kt = c(me => {
        "use strict";
        Object.defineProperty(me, "__esModule", {
            value: !0
        });
        var OA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        me.clone = Sn;
        me.addLast = Nf;
        me.addFirst = Lf;
        me.removeLast = Pf;
        me.removeFirst = qf;
        me.insert = Mf;
        me.removeAt = Ff;
        me.replaceAt = Df;
        me.getIn = xn;
        me.set = Cn;
        me.setIn = Rn;
        me.update = Uf;
        me.updateIn = kf;
        me.merge = Vf;
        me.mergeDeep = Bf;
        me.mergeIn = Hf;
        me.omit = Wf;
        me.addDefaults = Xf;
        var Cf = "INVALID_ARGS";

        function Rf(e) {
            throw new Error(e)
        }

        function zo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var wA = {}.hasOwnProperty;

        function Sn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = zo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ue(e, t, r) {
            var n = r;
            n == null && Rf(Cf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var f = a[u];
                if (f != null) {
                    var h = zo(f);
                    if (h.length)
                        for (var p = 0; p <= h.length; p++) {
                            var d = h[p];
                            if (!(e && n[d] !== void 0)) {
                                var E = f[d];
                                t && An(n[d]) && An(E) && (E = Ue(e, t, n[d], E)), !(E === void 0 || E === n[d]) && (i || (i = !0, n = Sn(n)), n[d] = E)
                            }
                        }
                }
            }
            return n
        }

        function An(e) {
            var t = typeof e > "u" ? "undefined" : OA(e);
            return e != null && (t === "object" || t === "function")
        }

        function Nf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Lf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Pf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function qf(e) {
            return e.length ? e.slice(1) : e
        }

        function Mf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Ff(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Df(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function xn(e, t) {
            if (!Array.isArray(t) && Rf(Cf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Cn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Sn(i);
            return o[t] = r, o
        }

        function Gf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Gf(a, t, r, n + 1)
            }
            return Cn(e, o, i)
        }

        function Rn(e, t, r) {
            return t.length ? Gf(e, t, r, 0) : r
        }

        function Uf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Cn(e, t, i)
        }

        function kf(e, t, r) {
            var n = xn(e, t),
                i = r(n);
            return Rn(e, t, i)
        }

        function Vf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ue(!1, !1, e, t, r, n, i, o)
        }

        function Bf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ue(!1, !0, e, t, r, n, i, o)
        }

        function Hf(e, t, r, n, i, o, a) {
            var s = xn(e, t);
            s == null && (s = {});
            for (var u = void 0, f = arguments.length, h = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) h[p - 7] = arguments[p];
            return h.length ? u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(h)) : u = Ue(!1, !1, s, r, n, i, o, a), Rn(e, t, u)
        }

        function Wf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (wA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = zo(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Xf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ue(!0, !1, e, t, r, n, i, o)
        }
        var AA = {
            clone: Sn,
            addLast: Nf,
            addFirst: Lf,
            removeLast: Pf,
            removeFirst: qf,
            insert: Mf,
            removeAt: Ff,
            replaceAt: Df,
            getIn: xn,
            set: Cn,
            setIn: Rn,
            update: Uf,
            updateIn: kf,
            merge: Vf,
            mergeDeep: Bf,
            mergeIn: Hf,
            omit: Wf,
            addDefaults: Xf
        };
        me.default = AA
    });
    var zf, SA, xA, CA, RA, NA, jf, Kf, Yf = he(() => {
        "use strict";
        Ge();
        zf = le(Kt()), {
            IX2_PREVIEW_REQUESTED: SA,
            IX2_PLAYBACK_REQUESTED: xA,
            IX2_STOP_REQUESTED: CA,
            IX2_CLEAR_REQUESTED: RA
        } = Ie, NA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, jf = Object.create(null, {
            [SA]: {
                value: "preview"
            },
            [xA]: {
                value: "playback"
            },
            [CA]: {
                value: "stop"
            },
            [RA]: {
                value: "clear"
            }
        }), Kf = (e = NA, t) => {
            if (t.type in jf) {
                let r = [jf[t.type]];
                return (0, zf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Le, LA, PA, qA, MA, FA, DA, GA, UA, kA, VA, $f, BA, Qf, Zf = he(() => {
        "use strict";
        Ge();
        Le = le(Kt()), {
            IX2_SESSION_INITIALIZED: LA,
            IX2_SESSION_STARTED: PA,
            IX2_TEST_FRAME_RENDERED: qA,
            IX2_SESSION_STOPPED: MA,
            IX2_EVENT_LISTENER_ADDED: FA,
            IX2_EVENT_STATE_CHANGED: DA,
            IX2_ANIMATION_FRAME_CHANGED: GA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: UA,
            IX2_VIEWPORT_WIDTH_CHANGED: kA,
            IX2_MEDIA_QUERIES_DEFINED: VA
        } = Ie, $f = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, BA = 20, Qf = (e = $f, t) => {
            switch (t.type) {
                case LA:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Le.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case PA:
                    return (0, Le.set)(e, "active", !0);
                case qA:
                    {
                        let {
                            payload: {
                                step: r = BA
                            }
                        } = t;
                        return (0, Le.set)(e, "tick", e.tick + r)
                    }
                case MA:
                    return $f;
                case GA:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Le.set)(e, "tick", r)
                    }
                case FA:
                    {
                        let r = (0, Le.addLast)(e.eventListeners, t.payload);
                        return (0, Le.set)(e, "eventListeners", r)
                    }
                case DA:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Le.setIn)(e, ["eventState", r], n)
                    }
                case UA:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Le.setIn)(e, ["playbackState", r], n)
                    }
                case kA:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: s,
                                min: u,
                                max: f
                            } = n[a];
                            if (r >= u && r <= f) {
                                o = s;
                                break
                            }
                        }
                        return (0, Le.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case VA:
                    return (0, Le.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var ed = c((ZH, Jf) => {
        function HA() {
            this.__data__ = [], this.size = 0
        }
        Jf.exports = HA
    });
    var Nn = c((JH, td) => {
        function WA(e, t) {
            return e === t || e !== e && t !== t
        }
        td.exports = WA
    });
    var Rr = c((e5, rd) => {
        var XA = Nn();

        function jA(e, t) {
            for (var r = e.length; r--;)
                if (XA(e[r][0], t)) return r;
            return -1
        }
        rd.exports = jA
    });
    var id = c((t5, nd) => {
        var zA = Rr(),
            KA = Array.prototype,
            YA = KA.splice;

        function $A(e) {
            var t = this.__data__,
                r = zA(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : YA.call(t, r, 1), --this.size, !0
        }
        nd.exports = $A
    });
    var ad = c((r5, od) => {
        var QA = Rr();

        function ZA(e) {
            var t = this.__data__,
                r = QA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        od.exports = ZA
    });
    var ud = c((n5, sd) => {
        var JA = Rr();

        function eS(e) {
            return JA(this.__data__, e) > -1
        }
        sd.exports = eS
    });
    var ld = c((i5, cd) => {
        var tS = Rr();

        function rS(e, t) {
            var r = this.__data__,
                n = tS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        cd.exports = rS
    });
    var Nr = c((o5, fd) => {
        var nS = ed(),
            iS = id(),
            oS = ad(),
            aS = ud(),
            sS = ld();

        function Yt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Yt.prototype.clear = nS;
        Yt.prototype.delete = iS;
        Yt.prototype.get = oS;
        Yt.prototype.has = aS;
        Yt.prototype.set = sS;
        fd.exports = Yt
    });
    var pd = c((a5, dd) => {
        var uS = Nr();

        function cS() {
            this.__data__ = new uS, this.size = 0
        }
        dd.exports = cS
    });
    var vd = c((s5, gd) => {
        function lS(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        gd.exports = lS
    });
    var Ed = c((u5, hd) => {
        function fS(e) {
            return this.__data__.get(e)
        }
        hd.exports = fS
    });
    var md = c((c5, yd) => {
        function dS(e) {
            return this.__data__.has(e)
        }
        yd.exports = dS
    });
    var at = c((l5, _d) => {
        function pS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        _d.exports = pS
    });
    var Ko = c((f5, bd) => {
        var gS = bt(),
            vS = at(),
            hS = "[object AsyncFunction]",
            ES = "[object Function]",
            yS = "[object GeneratorFunction]",
            mS = "[object Proxy]";

        function _S(e) {
            if (!vS(e)) return !1;
            var t = gS(e);
            return t == ES || t == yS || t == hS || t == mS
        }
        bd.exports = _S
    });
    var Id = c((d5, Td) => {
        var bS = Ye(),
            TS = bS["__core-js_shared__"];
        Td.exports = TS
    });
    var Ad = c((p5, wd) => {
        var Yo = Id(),
            Od = function() {
                var e = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function IS(e) {
            return !!Od && Od in e
        }
        wd.exports = IS
    });
    var $o = c((g5, Sd) => {
        var OS = Function.prototype,
            wS = OS.toString;

        function AS(e) {
            if (e != null) {
                try {
                    return wS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Sd.exports = AS
    });
    var Cd = c((v5, xd) => {
        var SS = Ko(),
            xS = Ad(),
            CS = at(),
            RS = $o(),
            NS = /[\\^$.*+?()[\]{}|]/g,
            LS = /^\[object .+?Constructor\]$/,
            PS = Function.prototype,
            qS = Object.prototype,
            MS = PS.toString,
            FS = qS.hasOwnProperty,
            DS = RegExp("^" + MS.call(FS).replace(NS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function GS(e) {
            if (!CS(e) || xS(e)) return !1;
            var t = SS(e) ? DS : LS;
            return t.test(RS(e))
        }
        xd.exports = GS
    });
    var Nd = c((h5, Rd) => {
        function US(e, t) {
            return e ? .[t]
        }
        Rd.exports = US
    });
    var Tt = c((E5, Ld) => {
        var kS = Cd(),
            VS = Nd();

        function BS(e, t) {
            var r = VS(e, t);
            return kS(r) ? r : void 0
        }
        Ld.exports = BS
    });
    var Ln = c((y5, Pd) => {
        var HS = Tt(),
            WS = Ye(),
            XS = HS(WS, "Map");
        Pd.exports = XS
    });
    var Lr = c((m5, qd) => {
        var jS = Tt(),
            zS = jS(Object, "create");
        qd.exports = zS
    });
    var Dd = c((_5, Fd) => {
        var Md = Lr();

        function KS() {
            this.__data__ = Md ? Md(null) : {}, this.size = 0
        }
        Fd.exports = KS
    });
    var Ud = c((b5, Gd) => {
        function YS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Gd.exports = YS
    });
    var Vd = c((T5, kd) => {
        var $S = Lr(),
            QS = "__lodash_hash_undefined__",
            ZS = Object.prototype,
            JS = ZS.hasOwnProperty;

        function ex(e) {
            var t = this.__data__;
            if ($S) {
                var r = t[e];
                return r === QS ? void 0 : r
            }
            return JS.call(t, e) ? t[e] : void 0
        }
        kd.exports = ex
    });
    var Hd = c((I5, Bd) => {
        var tx = Lr(),
            rx = Object.prototype,
            nx = rx.hasOwnProperty;

        function ix(e) {
            var t = this.__data__;
            return tx ? t[e] !== void 0 : nx.call(t, e)
        }
        Bd.exports = ix
    });
    var Xd = c((O5, Wd) => {
        var ox = Lr(),
            ax = "__lodash_hash_undefined__";

        function sx(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = ox && t === void 0 ? ax : t, this
        }
        Wd.exports = sx
    });
    var zd = c((w5, jd) => {
        var ux = Dd(),
            cx = Ud(),
            lx = Vd(),
            fx = Hd(),
            dx = Xd();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = ux;
        $t.prototype.delete = cx;
        $t.prototype.get = lx;
        $t.prototype.has = fx;
        $t.prototype.set = dx;
        jd.exports = $t
    });
    var $d = c((A5, Yd) => {
        var Kd = zd(),
            px = Nr(),
            gx = Ln();

        function vx() {
            this.size = 0, this.__data__ = {
                hash: new Kd,
                map: new(gx || px),
                string: new Kd
            }
        }
        Yd.exports = vx
    });
    var Zd = c((S5, Qd) => {
        function hx(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Qd.exports = hx
    });
    var Pr = c((x5, Jd) => {
        var Ex = Zd();

        function yx(e, t) {
            var r = e.__data__;
            return Ex(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Jd.exports = yx
    });
    var tp = c((C5, ep) => {
        var mx = Pr();

        function _x(e) {
            var t = mx(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        ep.exports = _x
    });
    var np = c((R5, rp) => {
        var bx = Pr();

        function Tx(e) {
            return bx(this, e).get(e)
        }
        rp.exports = Tx
    });
    var op = c((N5, ip) => {
        var Ix = Pr();

        function Ox(e) {
            return Ix(this, e).has(e)
        }
        ip.exports = Ox
    });
    var sp = c((L5, ap) => {
        var wx = Pr();

        function Ax(e, t) {
            var r = wx(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        ap.exports = Ax
    });
    var Pn = c((P5, up) => {
        var Sx = $d(),
            xx = tp(),
            Cx = np(),
            Rx = op(),
            Nx = sp();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = Sx;
        Qt.prototype.delete = xx;
        Qt.prototype.get = Cx;
        Qt.prototype.has = Rx;
        Qt.prototype.set = Nx;
        up.exports = Qt
    });
    var lp = c((q5, cp) => {
        var Lx = Nr(),
            Px = Ln(),
            qx = Pn(),
            Mx = 200;

        function Fx(e, t) {
            var r = this.__data__;
            if (r instanceof Lx) {
                var n = r.__data__;
                if (!Px || n.length < Mx - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new qx(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        cp.exports = Fx
    });
    var Qo = c((M5, fp) => {
        var Dx = Nr(),
            Gx = pd(),
            Ux = vd(),
            kx = Ed(),
            Vx = md(),
            Bx = lp();

        function Zt(e) {
            var t = this.__data__ = new Dx(e);
            this.size = t.size
        }
        Zt.prototype.clear = Gx;
        Zt.prototype.delete = Ux;
        Zt.prototype.get = kx;
        Zt.prototype.has = Vx;
        Zt.prototype.set = Bx;
        fp.exports = Zt
    });
    var pp = c((F5, dp) => {
        var Hx = "__lodash_hash_undefined__";

        function Wx(e) {
            return this.__data__.set(e, Hx), this
        }
        dp.exports = Wx
    });
    var vp = c((D5, gp) => {
        function Xx(e) {
            return this.__data__.has(e)
        }
        gp.exports = Xx
    });
    var Ep = c((G5, hp) => {
        var jx = Pn(),
            zx = pp(),
            Kx = vp();

        function qn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new jx; ++t < r;) this.add(e[t])
        }
        qn.prototype.add = qn.prototype.push = zx;
        qn.prototype.has = Kx;
        hp.exports = qn
    });
    var mp = c((U5, yp) => {
        function Yx(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        yp.exports = Yx
    });
    var bp = c((k5, _p) => {
        function $x(e, t) {
            return e.has(t)
        }
        _p.exports = $x
    });
    var Zo = c((V5, Tp) => {
        var Qx = Ep(),
            Zx = mp(),
            Jx = bp(),
            eC = 1,
            tC = 2;

        function rC(e, t, r, n, i, o) {
            var a = r & eC,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var f = o.get(e),
                h = o.get(t);
            if (f && h) return f == t && h == e;
            var p = -1,
                d = !0,
                E = r & tC ? new Qx : void 0;
            for (o.set(e, t), o.set(t, e); ++p < s;) {
                var I = e[p],
                    _ = t[p];
                if (n) var w = a ? n(_, I, p, t, e, o) : n(I, _, p, e, t, o);
                if (w !== void 0) {
                    if (w) continue;
                    d = !1;
                    break
                }
                if (E) {
                    if (!Zx(t, function(m, C) {
                            if (!Jx(E, C) && (I === m || i(I, m, r, n, o))) return E.push(C)
                        })) {
                        d = !1;
                        break
                    }
                } else if (!(I === _ || i(I, _, r, n, o))) {
                    d = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), d
        }
        Tp.exports = rC
    });
    var Op = c((B5, Ip) => {
        var nC = Ye(),
            iC = nC.Uint8Array;
        Ip.exports = iC
    });
    var Ap = c((H5, wp) => {
        function oC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        wp.exports = oC
    });
    var xp = c((W5, Sp) => {
        function aC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Sp.exports = aC
    });
    var Pp = c((X5, Lp) => {
        var Cp = Xt(),
            Rp = Op(),
            sC = Nn(),
            uC = Zo(),
            cC = Ap(),
            lC = xp(),
            fC = 1,
            dC = 2,
            pC = "[object Boolean]",
            gC = "[object Date]",
            vC = "[object Error]",
            hC = "[object Map]",
            EC = "[object Number]",
            yC = "[object RegExp]",
            mC = "[object Set]",
            _C = "[object String]",
            bC = "[object Symbol]",
            TC = "[object ArrayBuffer]",
            IC = "[object DataView]",
            Np = Cp ? Cp.prototype : void 0,
            Jo = Np ? Np.valueOf : void 0;

        function OC(e, t, r, n, i, o, a) {
            switch (r) {
                case IC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case TC:
                    return !(e.byteLength != t.byteLength || !o(new Rp(e), new Rp(t)));
                case pC:
                case gC:
                case EC:
                    return sC(+e, +t);
                case vC:
                    return e.name == t.name && e.message == t.message;
                case yC:
                case _C:
                    return e == t + "";
                case hC:
                    var s = cC;
                case mC:
                    var u = n & fC;
                    if (s || (s = lC), e.size != t.size && !u) return !1;
                    var f = a.get(e);
                    if (f) return f == t;
                    n |= dC, a.set(e, t);
                    var h = uC(s(e), s(t), n, i, o, a);
                    return a.delete(e), h;
                case bC:
                    if (Jo) return Jo.call(e) == Jo.call(t)
            }
            return !1
        }
        Lp.exports = OC
    });
    var Mn = c((j5, qp) => {
        function wC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        qp.exports = wC
    });
    var Oe = c((z5, Mp) => {
        var AC = Array.isArray;
        Mp.exports = AC
    });
    var ea = c((K5, Fp) => {
        var SC = Mn(),
            xC = Oe();

        function CC(e, t, r) {
            var n = t(e);
            return xC(e) ? n : SC(n, r(e))
        }
        Fp.exports = CC
    });
    var Gp = c((Y5, Dp) => {
        function RC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Dp.exports = RC
    });
    var ta = c(($5, Up) => {
        function NC() {
            return []
        }
        Up.exports = NC
    });
    var ra = c((Q5, Vp) => {
        var LC = Gp(),
            PC = ta(),
            qC = Object.prototype,
            MC = qC.propertyIsEnumerable,
            kp = Object.getOwnPropertySymbols,
            FC = kp ? function(e) {
                return e == null ? [] : (e = Object(e), LC(kp(e), function(t) {
                    return MC.call(e, t)
                }))
            } : PC;
        Vp.exports = FC
    });
    var Hp = c((Z5, Bp) => {
        function DC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Bp.exports = DC
    });
    var Xp = c((J5, Wp) => {
        var GC = bt(),
            UC = dt(),
            kC = "[object Arguments]";

        function VC(e) {
            return UC(e) && GC(e) == kC
        }
        Wp.exports = VC
    });
    var qr = c((eW, Kp) => {
        var jp = Xp(),
            BC = dt(),
            zp = Object.prototype,
            HC = zp.hasOwnProperty,
            WC = zp.propertyIsEnumerable,
            XC = jp(function() {
                return arguments
            }()) ? jp : function(e) {
                return BC(e) && HC.call(e, "callee") && !WC.call(e, "callee")
            };
        Kp.exports = XC
    });
    var $p = c((tW, Yp) => {
        function jC() {
            return !1
        }
        Yp.exports = jC
    });
    var Fn = c((Mr, Jt) => {
        var zC = Ye(),
            KC = $p(),
            Jp = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
            Qp = Jp && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
            YC = Qp && Qp.exports === Jp,
            Zp = YC ? zC.Buffer : void 0,
            $C = Zp ? Zp.isBuffer : void 0,
            QC = $C || KC;
        Jt.exports = QC
    });
    var Dn = c((rW, eg) => {
        var ZC = 9007199254740991,
            JC = /^(?:0|[1-9]\d*)$/;

        function eR(e, t) {
            var r = typeof e;
            return t = t ? ? ZC, !!t && (r == "number" || r != "symbol" && JC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        eg.exports = eR
    });
    var Gn = c((nW, tg) => {
        var tR = 9007199254740991;

        function rR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tR
        }
        tg.exports = rR
    });
    var ng = c((iW, rg) => {
        var nR = bt(),
            iR = Gn(),
            oR = dt(),
            aR = "[object Arguments]",
            sR = "[object Array]",
            uR = "[object Boolean]",
            cR = "[object Date]",
            lR = "[object Error]",
            fR = "[object Function]",
            dR = "[object Map]",
            pR = "[object Number]",
            gR = "[object Object]",
            vR = "[object RegExp]",
            hR = "[object Set]",
            ER = "[object String]",
            yR = "[object WeakMap]",
            mR = "[object ArrayBuffer]",
            _R = "[object DataView]",
            bR = "[object Float32Array]",
            TR = "[object Float64Array]",
            IR = "[object Int8Array]",
            OR = "[object Int16Array]",
            wR = "[object Int32Array]",
            AR = "[object Uint8Array]",
            SR = "[object Uint8ClampedArray]",
            xR = "[object Uint16Array]",
            CR = "[object Uint32Array]",
            ve = {};
        ve[bR] = ve[TR] = ve[IR] = ve[OR] = ve[wR] = ve[AR] = ve[SR] = ve[xR] = ve[CR] = !0;
        ve[aR] = ve[sR] = ve[mR] = ve[uR] = ve[_R] = ve[cR] = ve[lR] = ve[fR] = ve[dR] = ve[pR] = ve[gR] = ve[vR] = ve[hR] = ve[ER] = ve[yR] = !1;

        function RR(e) {
            return oR(e) && iR(e.length) && !!ve[nR(e)]
        }
        rg.exports = RR
    });
    var og = c((oW, ig) => {
        function NR(e) {
            return function(t) {
                return e(t)
            }
        }
        ig.exports = NR
    });
    var sg = c((Fr, er) => {
        var LR = xo(),
            ag = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
            Dr = ag && typeof er == "object" && er && !er.nodeType && er,
            PR = Dr && Dr.exports === ag,
            na = PR && LR.process,
            qR = function() {
                try {
                    var e = Dr && Dr.require && Dr.require("util").types;
                    return e || na && na.binding && na.binding("util")
                } catch {}
            }();
        er.exports = qR
    });
    var Un = c((aW, lg) => {
        var MR = ng(),
            FR = og(),
            ug = sg(),
            cg = ug && ug.isTypedArray,
            DR = cg ? FR(cg) : MR;
        lg.exports = DR
    });
    var ia = c((sW, fg) => {
        var GR = Hp(),
            UR = qr(),
            kR = Oe(),
            VR = Fn(),
            BR = Dn(),
            HR = Un(),
            WR = Object.prototype,
            XR = WR.hasOwnProperty;

        function jR(e, t) {
            var r = kR(e),
                n = !r && UR(e),
                i = !r && !n && VR(e),
                o = !r && !n && !i && HR(e),
                a = r || n || i || o,
                s = a ? GR(e.length, String) : [],
                u = s.length;
            for (var f in e)(t || XR.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || BR(f, u))) && s.push(f);
            return s
        }
        fg.exports = jR
    });
    var kn = c((uW, dg) => {
        var zR = Object.prototype;

        function KR(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || zR;
            return e === r
        }
        dg.exports = KR
    });
    var gg = c((cW, pg) => {
        var YR = Co(),
            $R = YR(Object.keys, Object);
        pg.exports = $R
    });
    var Vn = c((lW, vg) => {
        var QR = kn(),
            ZR = gg(),
            JR = Object.prototype,
            eN = JR.hasOwnProperty;

        function tN(e) {
            if (!QR(e)) return ZR(e);
            var t = [];
            for (var r in Object(e)) eN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        vg.exports = tN
    });
    var Lt = c((fW, hg) => {
        var rN = Ko(),
            nN = Gn();

        function iN(e) {
            return e != null && nN(e.length) && !rN(e)
        }
        hg.exports = iN
    });
    var Gr = c((dW, Eg) => {
        var oN = ia(),
            aN = Vn(),
            sN = Lt();

        function uN(e) {
            return sN(e) ? oN(e) : aN(e)
        }
        Eg.exports = uN
    });
    var mg = c((pW, yg) => {
        var cN = ea(),
            lN = ra(),
            fN = Gr();

        function dN(e) {
            return cN(e, fN, lN)
        }
        yg.exports = dN
    });
    var Tg = c((gW, bg) => {
        var _g = mg(),
            pN = 1,
            gN = Object.prototype,
            vN = gN.hasOwnProperty;

        function hN(e, t, r, n, i, o) {
            var a = r & pN,
                s = _g(e),
                u = s.length,
                f = _g(t),
                h = f.length;
            if (u != h && !a) return !1;
            for (var p = u; p--;) {
                var d = s[p];
                if (!(a ? d in t : vN.call(t, d))) return !1
            }
            var E = o.get(e),
                I = o.get(t);
            if (E && I) return E == t && I == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var w = a; ++p < u;) {
                d = s[p];
                var m = e[d],
                    C = t[d];
                if (n) var A = a ? n(C, m, d, t, e, o) : n(m, C, d, e, t, o);
                if (!(A === void 0 ? m === C || i(m, C, r, n, o) : A)) {
                    _ = !1;
                    break
                }
                w || (w = d == "constructor")
            }
            if (_ && !w) {
                var R = e.constructor,
                    P = t.constructor;
                R != P && "constructor" in e && "constructor" in t && !(typeof R == "function" && R instanceof R && typeof P == "function" && P instanceof P) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        bg.exports = hN
    });
    var Og = c((vW, Ig) => {
        var EN = Tt(),
            yN = Ye(),
            mN = EN(yN, "DataView");
        Ig.exports = mN
    });
    var Ag = c((hW, wg) => {
        var _N = Tt(),
            bN = Ye(),
            TN = _N(bN, "Promise");
        wg.exports = TN
    });
    var xg = c((EW, Sg) => {
        var IN = Tt(),
            ON = Ye(),
            wN = IN(ON, "Set");
        Sg.exports = wN
    });
    var oa = c((yW, Cg) => {
        var AN = Tt(),
            SN = Ye(),
            xN = AN(SN, "WeakMap");
        Cg.exports = xN
    });
    var Bn = c((mW, Fg) => {
        var aa = Og(),
            sa = Ln(),
            ua = Ag(),
            ca = xg(),
            la = oa(),
            Mg = bt(),
            tr = $o(),
            Rg = "[object Map]",
            CN = "[object Object]",
            Ng = "[object Promise]",
            Lg = "[object Set]",
            Pg = "[object WeakMap]",
            qg = "[object DataView]",
            RN = tr(aa),
            NN = tr(sa),
            LN = tr(ua),
            PN = tr(ca),
            qN = tr(la),
            Pt = Mg;
        (aa && Pt(new aa(new ArrayBuffer(1))) != qg || sa && Pt(new sa) != Rg || ua && Pt(ua.resolve()) != Ng || ca && Pt(new ca) != Lg || la && Pt(new la) != Pg) && (Pt = function(e) {
            var t = Mg(e),
                r = t == CN ? e.constructor : void 0,
                n = r ? tr(r) : "";
            if (n) switch (n) {
                case RN:
                    return qg;
                case NN:
                    return Rg;
                case LN:
                    return Ng;
                case PN:
                    return Lg;
                case qN:
                    return Pg
            }
            return t
        });
        Fg.exports = Pt
    });
    var Wg = c((_W, Hg) => {
        var fa = Qo(),
            MN = Zo(),
            FN = Pp(),
            DN = Tg(),
            Dg = Bn(),
            Gg = Oe(),
            Ug = Fn(),
            GN = Un(),
            UN = 1,
            kg = "[object Arguments]",
            Vg = "[object Array]",
            Hn = "[object Object]",
            kN = Object.prototype,
            Bg = kN.hasOwnProperty;

        function VN(e, t, r, n, i, o) {
            var a = Gg(e),
                s = Gg(t),
                u = a ? Vg : Dg(e),
                f = s ? Vg : Dg(t);
            u = u == kg ? Hn : u, f = f == kg ? Hn : f;
            var h = u == Hn,
                p = f == Hn,
                d = u == f;
            if (d && Ug(e)) {
                if (!Ug(t)) return !1;
                a = !0, h = !1
            }
            if (d && !h) return o || (o = new fa), a || GN(e) ? MN(e, t, r, n, i, o) : FN(e, t, u, r, n, i, o);
            if (!(r & UN)) {
                var E = h && Bg.call(e, "__wrapped__"),
                    I = p && Bg.call(t, "__wrapped__");
                if (E || I) {
                    var _ = E ? e.value() : e,
                        w = I ? t.value() : t;
                    return o || (o = new fa), i(_, w, r, n, o)
                }
            }
            return d ? (o || (o = new fa), DN(e, t, r, n, i, o)) : !1
        }
        Hg.exports = VN
    });
    var da = c((bW, zg) => {
        var BN = Wg(),
            Xg = dt();

        function jg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Xg(e) && !Xg(t) ? e !== e && t !== t : BN(e, t, r, n, jg, i)
        }
        zg.exports = jg
    });
    var Yg = c((TW, Kg) => {
        var HN = Qo(),
            WN = da(),
            XN = 1,
            jN = 2;

        function zN(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0],
                    f = e[u],
                    h = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var p = new HN;
                    if (n) var d = n(f, h, u, e, t, p);
                    if (!(d === void 0 ? WN(h, f, XN | jN, n, p) : d)) return !1
                }
            }
            return !0
        }
        Kg.exports = zN
    });
    var pa = c((IW, $g) => {
        var KN = at();

        function YN(e) {
            return e === e && !KN(e)
        }
        $g.exports = YN
    });
    var Zg = c((OW, Qg) => {
        var $N = pa(),
            QN = Gr();

        function ZN(e) {
            for (var t = QN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, $N(i)]
            }
            return t
        }
        Qg.exports = ZN
    });
    var ga = c((wW, Jg) => {
        function JN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Jg.exports = JN
    });
    var tv = c((AW, ev) => {
        var eL = Yg(),
            tL = Zg(),
            rL = ga();

        function nL(e) {
            var t = tL(e);
            return t.length == 1 && t[0][2] ? rL(t[0][0], t[0][1]) : function(r) {
                return r === e || eL(r, e, t)
            }
        }
        ev.exports = nL
    });
    var Ur = c((SW, rv) => {
        var iL = bt(),
            oL = dt(),
            aL = "[object Symbol]";

        function sL(e) {
            return typeof e == "symbol" || oL(e) && iL(e) == aL
        }
        rv.exports = sL
    });
    var Wn = c((xW, nv) => {
        var uL = Oe(),
            cL = Ur(),
            lL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            fL = /^\w*$/;

        function dL(e, t) {
            if (uL(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || cL(e) ? !0 : fL.test(e) || !lL.test(e) || t != null && e in Object(t)
        }
        nv.exports = dL
    });
    var av = c((CW, ov) => {
        var iv = Pn(),
            pL = "Expected a function";

        function va(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(pL);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(va.Cache || iv), r
        }
        va.Cache = iv;
        ov.exports = va
    });
    var uv = c((RW, sv) => {
        var gL = av(),
            vL = 500;

        function hL(e) {
            var t = gL(e, function(n) {
                    return r.size === vL && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        sv.exports = hL
    });
    var lv = c((NW, cv) => {
        var EL = uv(),
            yL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            mL = /\\(\\)?/g,
            _L = EL(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(yL, function(r, n, i, o) {
                    t.push(i ? o.replace(mL, "$1") : n || r)
                }), t
            });
        cv.exports = _L
    });
    var ha = c((LW, fv) => {
        function bL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        fv.exports = bL
    });
    var Ev = c((PW, hv) => {
        var dv = Xt(),
            TL = ha(),
            IL = Oe(),
            OL = Ur(),
            wL = 1 / 0,
            pv = dv ? dv.prototype : void 0,
            gv = pv ? pv.toString : void 0;

        function vv(e) {
            if (typeof e == "string") return e;
            if (IL(e)) return TL(e, vv) + "";
            if (OL(e)) return gv ? gv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -wL ? "-0" : t
        }
        hv.exports = vv
    });
    var mv = c((qW, yv) => {
        var AL = Ev();

        function SL(e) {
            return e == null ? "" : AL(e)
        }
        yv.exports = SL
    });
    var kr = c((MW, _v) => {
        var xL = Oe(),
            CL = Wn(),
            RL = lv(),
            NL = mv();

        function LL(e, t) {
            return xL(e) ? e : CL(e, t) ? [e] : RL(NL(e))
        }
        _v.exports = LL
    });
    var rr = c((FW, bv) => {
        var PL = Ur(),
            qL = 1 / 0;

        function ML(e) {
            if (typeof e == "string" || PL(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -qL ? "-0" : t
        }
        bv.exports = ML
    });
    var Xn = c((DW, Tv) => {
        var FL = kr(),
            DL = rr();

        function GL(e, t) {
            t = FL(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[DL(t[r++])];
            return r && r == n ? e : void 0
        }
        Tv.exports = GL
    });
    var jn = c((GW, Iv) => {
        var UL = Xn();

        function kL(e, t, r) {
            var n = e == null ? void 0 : UL(e, t);
            return n === void 0 ? r : n
        }
        Iv.exports = kL
    });
    var wv = c((UW, Ov) => {
        function VL(e, t) {
            return e != null && t in Object(e)
        }
        Ov.exports = VL
    });
    var Sv = c((kW, Av) => {
        var BL = kr(),
            HL = qr(),
            WL = Oe(),
            XL = Dn(),
            jL = Gn(),
            zL = rr();

        function KL(e, t, r) {
            t = BL(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = zL(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && jL(i) && XL(a, i) && (WL(e) || HL(e)))
        }
        Av.exports = KL
    });
    var Cv = c((VW, xv) => {
        var YL = wv(),
            $L = Sv();

        function QL(e, t) {
            return e != null && $L(e, t, YL)
        }
        xv.exports = QL
    });
    var Nv = c((BW, Rv) => {
        var ZL = da(),
            JL = jn(),
            eP = Cv(),
            tP = Wn(),
            rP = pa(),
            nP = ga(),
            iP = rr(),
            oP = 1,
            aP = 2;

        function sP(e, t) {
            return tP(e) && rP(t) ? nP(iP(e), t) : function(r) {
                var n = JL(r, e);
                return n === void 0 && n === t ? eP(r, e) : ZL(t, n, oP | aP)
            }
        }
        Rv.exports = sP
    });
    var zn = c((HW, Lv) => {
        function uP(e) {
            return e
        }
        Lv.exports = uP
    });
    var Ea = c((WW, Pv) => {
        function cP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Pv.exports = cP
    });
    var Mv = c((XW, qv) => {
        var lP = Xn();

        function fP(e) {
            return function(t) {
                return lP(t, e)
            }
        }
        qv.exports = fP
    });
    var Dv = c((jW, Fv) => {
        var dP = Ea(),
            pP = Mv(),
            gP = Wn(),
            vP = rr();

        function hP(e) {
            return gP(e) ? dP(vP(e)) : pP(e)
        }
        Fv.exports = hP
    });
    var It = c((zW, Gv) => {
        var EP = tv(),
            yP = Nv(),
            mP = zn(),
            _P = Oe(),
            bP = Dv();

        function TP(e) {
            return typeof e == "function" ? e : e == null ? mP : typeof e == "object" ? _P(e) ? yP(e[0], e[1]) : EP(e) : bP(e)
        }
        Gv.exports = TP
    });
    var ya = c((KW, Uv) => {
        var IP = It(),
            OP = Lt(),
            wP = Gr();

        function AP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!OP(t)) {
                    var o = IP(r, 3);
                    t = wP(t), r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Uv.exports = AP
    });
    var ma = c((YW, kv) => {
        function SP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        kv.exports = SP
    });
    var Bv = c(($W, Vv) => {
        var xP = /\s/;

        function CP(e) {
            for (var t = e.length; t-- && xP.test(e.charAt(t)););
            return t
        }
        Vv.exports = CP
    });
    var Wv = c((QW, Hv) => {
        var RP = Bv(),
            NP = /^\s+/;

        function LP(e) {
            return e && e.slice(0, RP(e) + 1).replace(NP, "")
        }
        Hv.exports = LP
    });
    var Kn = c((ZW, zv) => {
        var PP = Wv(),
            Xv = at(),
            qP = Ur(),
            jv = 0 / 0,
            MP = /^[-+]0x[0-9a-f]+$/i,
            FP = /^0b[01]+$/i,
            DP = /^0o[0-7]+$/i,
            GP = parseInt;

        function UP(e) {
            if (typeof e == "number") return e;
            if (qP(e)) return jv;
            if (Xv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Xv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = PP(e);
            var r = FP.test(e);
            return r || DP.test(e) ? GP(e.slice(2), r ? 2 : 8) : MP.test(e) ? jv : +e
        }
        zv.exports = UP
    });
    var $v = c((JW, Yv) => {
        var kP = Kn(),
            Kv = 1 / 0,
            VP = 17976931348623157e292;

        function BP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = kP(e), e === Kv || e === -Kv) {
                var t = e < 0 ? -1 : 1;
                return t * VP
            }
            return e === e ? e : 0
        }
        Yv.exports = BP
    });
    var _a = c((eX, Qv) => {
        var HP = $v();

        function WP(e) {
            var t = HP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Qv.exports = WP
    });
    var Jv = c((tX, Zv) => {
        var XP = ma(),
            jP = It(),
            zP = _a(),
            KP = Math.max;

        function YP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : zP(r);
            return i < 0 && (i = KP(n + i, 0)), XP(e, jP(t, 3), i)
        }
        Zv.exports = YP
    });
    var ba = c((rX, eh) => {
        var $P = ya(),
            QP = Jv(),
            ZP = $P(QP);
        eh.exports = ZP
    });
    var nh = {};
    Fe(nh, {
        ELEMENT_MATCHES: () => JP,
        FLEX_PREFIXED: () => Ta,
        IS_BROWSER_ENV: () => Qe,
        TRANSFORM_PREFIXED: () => Ot,
        TRANSFORM_STYLE_PREFIXED: () => $n,
        withBrowser: () => Yn
    });
    var rh, Qe, Yn, JP, Ta, Ot, th, $n, Qn = he(() => {
        "use strict";
        rh = le(ba()), Qe = typeof window < "u", Yn = (e, t) => Qe ? e() : t, JP = Yn(() => (0, rh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ta = Yn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), Ot = Yn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), th = Ot.split("transform")[0], $n = th ? th + "TransformStyle" : "transformStyle"
    });
    var Ia = c((nX, uh) => {
        var eq = 4,
            tq = .001,
            rq = 1e-7,
            nq = 10,
            Vr = 11,
            Zn = 1 / (Vr - 1),
            iq = typeof Float32Array == "function";

        function ih(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function oh(e, t) {
            return 3 * t - 6 * e
        }

        function ah(e) {
            return 3 * e
        }

        function Jn(e, t, r) {
            return ((ih(t, r) * e + oh(t, r)) * e + ah(t)) * e
        }

        function sh(e, t, r) {
            return 3 * ih(t, r) * e * e + 2 * oh(t, r) * e + ah(t)
        }

        function oq(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = Jn(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > rq && ++s < nq);
            return a
        }

        function aq(e, t, r, n) {
            for (var i = 0; i < eq; ++i) {
                var o = sh(t, r, n);
                if (o === 0) return t;
                var a = Jn(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        uh.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = iq ? new Float32Array(Vr) : new Array(Vr);
            if (t !== r || n !== i)
                for (var a = 0; a < Vr; ++a) o[a] = Jn(a * Zn, t, n);

            function s(u) {
                for (var f = 0, h = 1, p = Vr - 1; h !== p && o[h] <= u; ++h) f += Zn;
                --h;
                var d = (u - o[h]) / (o[h + 1] - o[h]),
                    E = f + d * Zn,
                    I = sh(E, t, n);
                return I >= tq ? aq(u, E, t, n) : I === 0 ? E : oq(u, f, f + Zn, t, n)
            }
            return function(f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : Jn(s(f), r, i)
            }
        }
    });
    var Hr = {};
    Fe(Hr, {
        bounce: () => Bq,
        bouncePast: () => Hq,
        ease: () => sq,
        easeIn: () => uq,
        easeInOut: () => lq,
        easeOut: () => cq,
        inBack: () => Pq,
        inCirc: () => Cq,
        inCubic: () => gq,
        inElastic: () => Fq,
        inExpo: () => Aq,
        inOutBack: () => Mq,
        inOutCirc: () => Nq,
        inOutCubic: () => hq,
        inOutElastic: () => Gq,
        inOutExpo: () => xq,
        inOutQuad: () => pq,
        inOutQuart: () => mq,
        inOutQuint: () => Tq,
        inOutSine: () => wq,
        inQuad: () => fq,
        inQuart: () => Eq,
        inQuint: () => _q,
        inSine: () => Iq,
        outBack: () => qq,
        outBounce: () => Lq,
        outCirc: () => Rq,
        outCubic: () => vq,
        outElastic: () => Dq,
        outExpo: () => Sq,
        outQuad: () => dq,
        outQuart: () => yq,
        outQuint: () => bq,
        outSine: () => Oq,
        swingFrom: () => kq,
        swingFromTo: () => Uq,
        swingTo: () => Vq
    });

    function fq(e) {
        return Math.pow(e, 2)
    }

    function dq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function pq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function gq(e) {
        return Math.pow(e, 3)
    }

    function vq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function hq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Eq(e) {
        return Math.pow(e, 4)
    }

    function yq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function mq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function _q(e) {
        return Math.pow(e, 5)
    }

    function bq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Tq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Iq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Oq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function wq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Aq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Sq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function xq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Cq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Rq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Nq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Lq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Pq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function qq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Mq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Fq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Dq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Gq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Uq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function kq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Vq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Bq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Hq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Br, pt, sq, uq, cq, lq, Oa = he(() => {
        "use strict";
        Br = le(Ia()), pt = 1.70158, sq = (0, Br.default)(.25, .1, .25, 1), uq = (0, Br.default)(.42, 0, 1, 1), cq = (0, Br.default)(0, 0, .58, 1), lq = (0, Br.default)(.42, 0, .58, 1)
    });
    var lh = {};
    Fe(lh, {
        applyEasing: () => Xq,
        createBezierEasing: () => Wq,
        optimizeFloat: () => Wr
    });

    function Wr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Wq(e) {
        return (0, ch.default)(...e)
    }

    function Xq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Wr(r ? t > 0 ? r(t) : t : t > 0 && e && Hr[e] ? Hr[e](t) : t)
    }
    var ch, wa = he(() => {
        "use strict";
        Oa();
        ch = le(Ia())
    });
    var ph = {};
    Fe(ph, {
        createElementState: () => dh,
        ixElements: () => oM,
        mergeActionState: () => Aa
    });

    function dh(e, t, r, n, i) {
        let o = r === jq ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, nr.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Aa(e, t, r, n, i) {
        let o = sM(i);
        return (0, nr.mergeIn)(e, [t, iM, r], n, o)
    }

    function sM(e) {
        let {
            config: t
        } = e;
        return aM.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (r[o] = s), r
        }, {})
    }
    var nr, oX, jq, aX, zq, Kq, Yq, $q, Qq, Zq, Jq, eM, tM, rM, nM, fh, iM, oM, aM, gh = he(() => {
        "use strict";
        nr = le(Kt());
        Ge();
        ({
            HTML_ELEMENT: oX,
            PLAIN_OBJECT: jq,
            ABSTRACT_NODE: aX,
            CONFIG_X_VALUE: zq,
            CONFIG_Y_VALUE: Kq,
            CONFIG_Z_VALUE: Yq,
            CONFIG_VALUE: $q,
            CONFIG_X_UNIT: Qq,
            CONFIG_Y_UNIT: Zq,
            CONFIG_Z_UNIT: Jq,
            CONFIG_UNIT: eM
        } = Ce), {
            IX2_SESSION_STOPPED: tM,
            IX2_INSTANCE_ADDED: rM,
            IX2_ELEMENT_STATE_CHANGED: nM
        } = Ie, fh = {}, iM = "refState", oM = (e = fh, t = {}) => {
            switch (t.type) {
                case tM:
                    return fh;
                case rM:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: s
                        } = o,
                        u = e;
                        return (0, nr.getIn)(u, [r, n]) !== n && (u = dh(u, n, a, r, o)),
                        Aa(u, r, s, i, o)
                    }
                case nM:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Aa(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        aM = [
            [zq, Qq],
            [Kq, Zq],
            [Yq, Jq],
            [$q, eM]
        ]
    });
    var vh = c(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.renderPlugin = we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
        var uM = e => e.value;
        we.getPluginConfig = uM;
        var cM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        we.getPluginDuration = cM;
        var lM = e => e || {
            value: 0
        };
        we.getPluginOrigin = lM;
        var fM = e => ({
            value: e.value
        });
        we.getPluginDestination = fM;
        var dM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        we.createPluginInstance = dM;
        var pM = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        we.renderPlugin = pM;
        var gM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        we.clearPlugin = gM
    });
    var Eh = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var vM = e => document.querySelector(`[data-w-id="${e}"]`),
            hM = () => window.Webflow.require("spline"),
            EM = (e, t) => e.filter(r => !t.includes(r)),
            yM = (e, t) => e.value[t];
        Ae.getPluginConfig = yM;
        var mM = () => null;
        Ae.getPluginDuration = mM;
        var hh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            _M = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = EM(n, o);
                    return a.length ? a.reduce((u, f) => (u[f] = hh[f], u), e) : e
                }
                return n.reduce((o, a) => (o[a] = hh[a], o), {})
            };
        Ae.getPluginOrigin = _M;
        var bM = e => e.value;
        Ae.getPluginDestination = bM;
        var TM = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? vM(n) : null
        };
        Ae.createPluginInstance = TM;
        var IM = (e, t, r) => {
            let n = hM(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                a = s => {
                    if (!s) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && s.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: f
                    } = t;
                    f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
                };
            i ? a(i.spline) : n.setLoadHandler(e, a)
        };
        Ae.renderPlugin = IM;
        var OM = () => null;
        Ae.clearPlugin = OM
    });
    var xa = c(Sa => {
        "use strict";
        Object.defineProperty(Sa, "__esModule", {
            value: !0
        });
        Sa.normalizeColor = wM;
        var yh = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function wM(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof yh[o] == "string" ? yh[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(u[0]),
                    h = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * p - 1)) * h,
                    E = d * (1 - Math.abs(f / 60 % 2 - 1)),
                    I = p - d / 2,
                    _, w, m;
                f >= 0 && f < 60 ? (_ = d, w = E, m = 0) : f >= 60 && f < 120 ? (_ = E, w = d, m = 0) : f >= 120 && f < 180 ? (_ = 0, w = d, m = E) : f >= 180 && f < 240 ? (_ = 0, w = E, m = d) : f >= 240 && f < 300 ? (_ = E, w = 0, m = d) : (_ = d, w = 0, m = E), t = Math.round((_ + I) * 255), r = Math.round((w + I) * 255), n = Math.round((m + I) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
                    f = parseFloat(u[0]),
                    h = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * p - 1)) * h,
                    E = d * (1 - Math.abs(f / 60 % 2 - 1)),
                    I = p - d / 2,
                    _, w, m;
                f >= 0 && f < 60 ? (_ = d, w = E, m = 0) : f >= 60 && f < 120 ? (_ = E, w = d, m = 0) : f >= 120 && f < 180 ? (_ = 0, w = d, m = E) : f >= 180 && f < 240 ? (_ = 0, w = E, m = d) : f >= 240 && f < 300 ? (_ = E, w = 0, m = d) : (_ = d, w = 0, m = E), t = Math.round((_ + I) * 255), r = Math.round((w + I) * 255), n = Math.round((m + I) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var mh = c(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var AM = xa(),
            SM = (e, t) => e.value[t];
        Se.getPluginConfig = SM;
        var xM = () => null;
        Se.getPluginDuration = xM;
        var CM = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, AM.normalizeColor)(i)
        };
        Se.getPluginOrigin = CM;
        var RM = e => e.value;
        Se.getPluginDestination = RM;
        var NM = () => null;
        Se.createPluginInstance = NM;
        var LM = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: a,
                    red: s,
                    green: u,
                    blue: f,
                    alpha: h
                } = o,
                p;
            a != null && (p = a + i), s != null && f != null && u != null && h != null && (p = `rgba(${s}, ${u}, ${f}, ${h})`), p != null && document.documentElement.style.setProperty(n, p)
        };
        Se.renderPlugin = LM;
        var PM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Se.clearPlugin = PM
    });
    var _h = c(ei => {
        "use strict";
        var Ra = fn().default;
        Object.defineProperty(ei, "__esModule", {
            value: !0
        });
        ei.pluginMethodMap = void 0;
        var Ca = (Ge(), tt(Af)),
            qM = Ra(vh()),
            MM = Ra(Eh()),
            FM = Ra(mh()),
            fX = ei.pluginMethodMap = new Map([
                [Ca.ActionTypeConsts.PLUGIN_LOTTIE, { ...qM
                }],
                [Ca.ActionTypeConsts.PLUGIN_SPLINE, { ...MM
                }],
                [Ca.ActionTypeConsts.PLUGIN_VARIABLE, { ...FM
                }]
            ])
    });
    var bh = {};
    Fe(bh, {
        clearPlugin: () => Fa,
        createPluginInstance: () => GM,
        getPluginConfig: () => La,
        getPluginDestination: () => qa,
        getPluginDuration: () => DM,
        getPluginOrigin: () => Pa,
        isPluginType: () => qt,
        renderPlugin: () => Ma
    });

    function qt(e) {
        return Na.pluginMethodMap.has(e)
    }
    var Na, Mt, La, Pa, DM, qa, GM, Ma, Fa, Da = he(() => {
        "use strict";
        Qn();
        Na = le(_h());
        Mt = e => t => {
            if (!Qe) return () => null;
            let r = Na.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, La = Mt("getPluginConfig"), Pa = Mt("getPluginOrigin"), DM = Mt("getPluginDuration"), qa = Mt("getPluginDestination"), GM = Mt("createPluginInstance"), Ma = Mt("renderPlugin"), Fa = Mt("clearPlugin")
    });
    var Ih = c((gX, Th) => {
        function UM(e, t) {
            return e == null || e !== e ? t : e
        }
        Th.exports = UM
    });
    var wh = c((vX, Oh) => {
        function kM(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Oh.exports = kM
    });
    var Sh = c((hX, Ah) => {
        function VM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Ah.exports = VM
    });
    var Ch = c((EX, xh) => {
        var BM = Sh(),
            HM = BM();
        xh.exports = HM
    });
    var Ga = c((yX, Rh) => {
        var WM = Ch(),
            XM = Gr();

        function jM(e, t) {
            return e && WM(e, t, XM)
        }
        Rh.exports = jM
    });
    var Lh = c((mX, Nh) => {
        var zM = Lt();

        function KM(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!zM(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        Nh.exports = KM
    });
    var Ua = c((_X, Ph) => {
        var YM = Ga(),
            $M = Lh(),
            QM = $M(YM);
        Ph.exports = QM
    });
    var Mh = c((bX, qh) => {
        function ZM(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }
        qh.exports = ZM
    });
    var Dh = c((TX, Fh) => {
        var JM = wh(),
            eF = Ua(),
            tF = It(),
            rF = Mh(),
            nF = Oe();

        function iF(e, t, r) {
            var n = nF(e) ? JM : rF,
                i = arguments.length < 3;
            return n(e, tF(t, 4), r, i, eF)
        }
        Fh.exports = iF
    });
    var Uh = c((IX, Gh) => {
        var oF = ma(),
            aF = It(),
            sF = _a(),
            uF = Math.max,
            cF = Math.min;

        function lF(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = sF(r), i = r < 0 ? uF(n + i, 0) : cF(i, n - 1)), oF(e, aF(t, 3), i, !0)
        }
        Gh.exports = lF
    });
    var Vh = c((OX, kh) => {
        var fF = ya(),
            dF = Uh(),
            pF = fF(dF);
        kh.exports = pF
    });

    function Bh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function gF(e, t) {
        if (Bh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Bh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var ka, Hh = he(() => {
        "use strict";
        ka = gF
    });
    var sE = {};
    Fe(sE, {
        cleanupHTMLElement: () => fD,
        clearAllStyles: () => lD,
        clearObjectCache: () => NF,
        getActionListProgress: () => pD,
        getAffectedElements: () => Xa,
        getComputedStyle: () => UF,
        getDestinationValues: () => jF,
        getElementId: () => MF,
        getInstanceId: () => PF,
        getInstanceOrigin: () => BF,
        getItemConfigByKey: () => XF,
        getMaxDurationItemIndex: () => aE,
        getNamespacedParameterId: () => hD,
        getRenderType: () => nE,
        getStyleProp: () => zF,
        mediaQueriesEqual: () => yD,
        observeStore: () => GF,
        reduceListToGroup: () => gD,
        reifyState: () => FF,
        renderHTMLElement: () => KF,
        shallowEqual: () => ka,
        shouldAllowMediaQuery: () => ED,
        shouldNamespaceEventParameter: () => vD,
        stringifyTarget: () => mD
    });

    function NF() {
        ti.clear()
    }

    function PF() {
        return "i" + LF++
    }

    function MF(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + qF++
    }

    function FF({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, oi.default)(e, (a, s) => {
                let {
                    eventTypeId: u
                } = s;
                return a[u] || (a[u] = {}), a[u][s.id] = s, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function GF({
        store: e,
        select: t,
        onChange: r,
        comparator: n = DF
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            n(f, s) || (s = f, r(s, e))
        }
        return a
    }

    function jh(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function Xa({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((M, O) => M.concat(Xa({
            config: {
                target: O
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: f,
            getSiblingElements: h,
            matchSelector: p,
            elementContains: d,
            isSiblingNode: E
        } = i, {
            target: I
        } = e;
        if (!I) return [];
        let {
            id: _,
            objectId: w,
            selector: m,
            selectorGuids: C,
            appliesTo: A,
            useEventTarget: R
        } = jh(I);
        if (w) return [ti.has(w) ? ti.get(w) : ti.set(w, {}).get(w)];
        if (A === Wo.PAGE) {
            let M = a(_);
            return M ? [M] : []
        }
        let L = (t ? .action ? .config ? .affectedElements ? ? {})[_ || m] || {},
            H = !!(L.id || L.selector),
            z, $, J, te = t && s(jh(t.target));
        if (H ? (z = L.limitAffectedElements, $ = te, J = s(L)) : $ = J = s({
                id: _,
                selector: m,
                selectorGuids: C
            }), t && R) {
            let M = r && (J || R === !0) ? [r] : u(te);
            if (J) {
                if (R === xF) return u(J).filter(O => M.some(q => d(O, q)));
                if (R === Wh) return u(J).filter(O => M.some(q => d(q, O)));
                if (R === Xh) return u(J).filter(O => M.some(q => E(q, O)))
            }
            return M
        }
        return $ == null || J == null ? [] : Qe && n ? u(J).filter(M => n.contains(M)) : z === Wh ? u($, J) : z === SF ? f(u($)).filter(p(J)) : z === Xh ? h(u($)).filter(p(J)) : u(J)
    }

    function UF({
        element: e,
        actionItem: t
    }) {
        if (!Qe) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case ur:
            case cr:
            case lr:
            case fr:
            case si:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function BF(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (qt(a)) return Pa(a)(t[a], n);
        switch (n.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr:
                return t[n.actionTypeId] || ja[n.actionTypeId];
            case Yr:
                return kF(t[n.actionTypeId], n.config.filters);
            case $r:
                return VF(t[n.actionTypeId], n.config.fontVariations);
            case eE:
                return {
                    value: (0, gt.default)(parseFloat(o(e, ni)), 1)
                };
            case ur:
                {
                    let s = o(e, st),
                        u = o(e, ut),
                        f, h;
                    return n.config.widthUnit === wt ? f = zh.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, gt.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === wt ? h = zh.test(u) ? parseFloat(u) : parseFloat(r.height) : h = (0, gt.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: f,
                        heightValue: h
                    }
                }
            case cr:
            case lr:
            case fr:
                return sD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case si:
                return {
                    value: (0, gt.default)(o(e, ii), r.display)
                };
            case RF:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function jF({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (qt(t.actionTypeId)) return qa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case ur:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: a,
                        heightUnit: s
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: f
                    } = t.config;
                    if (!Qe) return {
                        widthValue: u,
                        heightValue: f
                    };
                    if (a === wt) {
                        let h = n(e, st);
                        i(e, st, ""), u = o(e, "offsetWidth"), i(e, st, h)
                    }
                    if (s === wt) {
                        let h = n(e, ut);
                        i(e, ut, ""), f = o(e, "offsetHeight"), i(e, ut, h)
                    }
                    return {
                        widthValue: u,
                        heightValue: f
                    }
                }
            case cr:
            case lr:
            case fr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a,
                        globalSwatchId: s
                    } = t.config;
                    if (s && s.startsWith("--")) {
                        let {
                            getStyle: u
                        } = r, f = u(e, s), h = (0, $h.normalizeColor)(f);
                        return {
                            rValue: h.red,
                            gValue: h.green,
                            bValue: h.blue,
                            aValue: h.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case Yr:
                return t.config.filters.reduce(HF, {});
            case $r:
                return t.config.fontVariations.reduce(WF, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function nE(e) {
        if (/^TRANSFORM_/.test(e)) return Zh;
        if (/^STYLE_/.test(e)) return Ha;
        if (/^GENERAL_/.test(e)) return Ba;
        if (/^PLUGIN_/.test(e)) return Jh
    }

    function zF(e, t) {
        return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function KF(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case Zh:
                return JF(e, t, r, i, a);
            case Ha:
                return uD(e, t, r, i, o, a);
            case Ba:
                return cD(e, i, a);
            case Jh:
                {
                    let {
                        actionTypeId: f
                    } = i;
                    if (qt(f)) return Ma(f)(u, t, i)
                }
        }
    }

    function JF(e, t, r, n, i) {
        let o = ZF.map(s => {
                let u = ja[s],
                    {
                        xValue: f = u.xValue,
                        yValue: h = u.yValue,
                        zValue: p = u.zValue,
                        xUnit: d = "",
                        yUnit: E = "",
                        zUnit: I = ""
                    } = t[s] || {};
                switch (s) {
                    case or:
                        return `${EF}(${f}${d}, ${h}${E}, ${p}${I})`;
                    case ar:
                        return `${yF}(${f}${d}, ${h}${E}, ${p}${I})`;
                    case sr:
                        return `${mF}(${f}${d}) ${_F}(${h}${E}) ${bF}(${p}${I})`;
                    case Kr:
                        return `${TF}(${f}${d}, ${h}${E})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        Ft(e, Ot, i), a(e, Ot, o), rD(n, r) && a(e, $n, IF)
    }

    function eD(e, t, r, n) {
        let i = (0, oi.default)(t, (a, s, u) => `${a} ${u}(${s}${QF(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Ft(e, Xr, n), o(e, Xr, i)
    }

    function tD(e, t, r, n) {
        let i = (0, oi.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        Ft(e, jr, n), o(e, jr, i)
    }

    function rD({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === or && n !== void 0 || e === ar && n !== void 0 || e === sr && (t !== void 0 || r !== void 0)
    }

    function aD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function sD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = Wa[t],
            o = n(e, i),
            a = iD.test(o) ? o : r[i],
            s = aD(oD, a).split(zr);
        return {
            rValue: (0, gt.default)(parseInt(s[0], 10), 255),
            gValue: (0, gt.default)(parseInt(s[1], 10), 255),
            bValue: (0, gt.default)(parseInt(s[2], 10), 255),
            aValue: (0, gt.default)(parseFloat(s[3]), 1)
        }
    }

    function uD(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case ur:
                {
                    let {
                        widthUnit: s = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: f,
                        heightValue: h
                    } = r;f !== void 0 && (s === wt && (s = "px"), Ft(e, st, o), a(e, st, f + s)),
                    h !== void 0 && (u === wt && (u = "px"), Ft(e, ut, o), a(e, ut, h + u));
                    break
                }
            case Yr:
                {
                    eD(e, r, n.config, o);
                    break
                }
            case $r:
                {
                    tD(e, r, n.config, o);
                    break
                }
            case cr:
            case lr:
            case fr:
                {
                    let s = Wa[n.actionTypeId],
                        u = Math.round(r.rValue),
                        f = Math.round(r.gValue),
                        h = Math.round(r.bValue),
                        p = r.aValue;Ft(e, s, o),
                    a(e, s, p >= 1 ? `rgb(${u},${f},${h})` : `rgba(${u},${f},${h},${p})`);
                    break
                }
            default:
                {
                    let {
                        unit: s = ""
                    } = n.config;Ft(e, i, o),
                    a(e, i, r.value + s);
                    break
                }
        }
    }

    function cD(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case si:
                {
                    let {
                        value: i
                    } = t.config;i === OF && Qe ? n(e, ii, Ta) : n(e, ii, i);
                    return
                }
        }
    }

    function Ft(e, t, r) {
        if (!Qe) return;
        let n = rE[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, ir);
        if (!a) {
            o(e, ir, n);
            return
        }
        let s = a.split(zr).map(tE);
        s.indexOf(n) === -1 && o(e, ir, s.concat(n).join(zr))
    }

    function iE(e, t, r) {
        if (!Qe) return;
        let n = rE[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, ir);
        !a || a.indexOf(n) === -1 || o(e, ir, a.split(zr).map(tE).filter(s => s !== n).join(zr))
    }

    function lD({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                f = i[u];
            f && Kh({
                actionList: f,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Kh({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Kh({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Yh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                Yh({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Yh({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            qt(o) ? s = u => Fa(o)(u, i) : s = oE({
                effect: dD,
                actionTypeId: o,
                elementApi: r
            }), Xa({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        })
    }

    function fD(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === ur) {
            let {
                config: a
            } = t;
            a.widthUnit === wt && n(e, st, ""), a.heightUnit === wt && n(e, ut, "")
        }
        i(e, ir) && oE({
            effect: iE,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function dD(e, t, r) {
        let {
            setStyle: n
        } = r;
        iE(e, t, r), n(e, t, ""), t === Ot && n(e, $n, "")
    }

    function aE(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function pD(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {
                actionItems: h
            } = u, p = h[aE(h)], {
                config: d,
                actionTypeId: E
            } = p;
            i.id === p.id && (s = a + o);
            let I = nE(E) === Ba ? 0 : d.duration;
            a += d.delay + I
        }), a > 0 ? Wr(s / a) : 0
    }

    function gD({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, ai.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return n && n.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: f
            }) => f.some(a))
        }), (0, ai.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function vD(e, {
        basedOn: t
    }) {
        return e === $e.SCROLLING_IN_VIEW && (t === ot.ELEMENT || t == null) || e === $e.MOUSE_MOVE && t === ot.ELEMENT
    }

    function hD(e, t) {
        return e + CF + t
    }

    function ED(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function yD(e, t) {
        return ka(e && e.sort(), t && t.sort())
    }

    function mD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Va + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Va + r + Va + n
    }
    var gt, oi, ri, ai, $h, vF, hF, EF, yF, mF, _F, bF, TF, IF, OF, ni, Xr, jr, st, ut, Qh, wF, AF, Wh, SF, Xh, xF, ii, ir, wt, zr, CF, Va, Zh, Ba, Ha, Jh, or, ar, sr, Kr, eE, Yr, $r, ur, cr, lr, fr, si, RF, tE, Wa, rE, ti, LF, qF, DF, zh, kF, VF, HF, WF, XF, ja, YF, $F, QF, ZF, nD, iD, oD, oE, uE = he(() => {
        "use strict";
        gt = le(Ih()), oi = le(Dh()), ri = le(Vh()), ai = le(Kt());
        Ge();
        Hh();
        wa();
        $h = le(xa());
        Da();
        Qn();
        ({
            BACKGROUND: vF,
            TRANSFORM: hF,
            TRANSLATE_3D: EF,
            SCALE_3D: yF,
            ROTATE_X: mF,
            ROTATE_Y: _F,
            ROTATE_Z: bF,
            SKEW: TF,
            PRESERVE_3D: IF,
            FLEX: OF,
            OPACITY: ni,
            FILTER: Xr,
            FONT_VARIATION_SETTINGS: jr,
            WIDTH: st,
            HEIGHT: ut,
            BACKGROUND_COLOR: Qh,
            BORDER_COLOR: wF,
            COLOR: AF,
            CHILDREN: Wh,
            IMMEDIATE_CHILDREN: SF,
            SIBLINGS: Xh,
            PARENT: xF,
            DISPLAY: ii,
            WILL_CHANGE: ir,
            AUTO: wt,
            COMMA_DELIMITER: zr,
            COLON_DELIMITER: CF,
            BAR_DELIMITER: Va,
            RENDER_TRANSFORM: Zh,
            RENDER_GENERAL: Ba,
            RENDER_STYLE: Ha,
            RENDER_PLUGIN: Jh
        } = Ce), {
            TRANSFORM_MOVE: or,
            TRANSFORM_SCALE: ar,
            TRANSFORM_ROTATE: sr,
            TRANSFORM_SKEW: Kr,
            STYLE_OPACITY: eE,
            STYLE_FILTER: Yr,
            STYLE_FONT_VARIATION: $r,
            STYLE_SIZE: ur,
            STYLE_BACKGROUND_COLOR: cr,
            STYLE_BORDER: lr,
            STYLE_TEXT_COLOR: fr,
            GENERAL_DISPLAY: si,
            OBJECT_VALUE: RF
        } = De, tE = e => e.trim(), Wa = Object.freeze({
            [cr]: Qh,
            [lr]: wF,
            [fr]: AF
        }), rE = Object.freeze({
            [Ot]: hF,
            [Qh]: vF,
            [ni]: ni,
            [Xr]: Xr,
            [st]: st,
            [ut]: ut,
            [jr]: jr
        }), ti = new Map;
        LF = 1;
        qF = 1;
        DF = (e, t) => e === t;
        zh = /px/, kF = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = YF[n.type]), r), e || {}), VF = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = $F[n.type] || n.defaultValue || 0), r), e || {});
        HF = (e, t) => (t && (e[t.type] = t.value || 0), e), WF = (e, t) => (t && (e[t.type] = t.value || 0), e), XF = (e, t, r) => {
            if (qt(e)) return La(e)(r, t);
            switch (e) {
                case Yr:
                    {
                        let n = (0, ri.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case $r:
                    {
                        let n = (0, ri.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        ja = {
            [or]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ar]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [sr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Kr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, YF = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), $F = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), QF = (e, t) => {
            let r = (0, ri.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, ZF = Object.keys(ja);
        nD = "\\(([^)]+)\\)", iD = /^rgb/, oD = RegExp(`rgba?${nD}`);
        oE = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case or:
                case ar:
                case sr:
                case Kr:
                    e(n, Ot, r);
                    break;
                case Yr:
                    e(n, Xr, r);
                    break;
                case $r:
                    e(n, jr, r);
                    break;
                case eE:
                    e(n, ni, r);
                    break;
                case ur:
                    e(n, st, r), e(n, ut, r);
                    break;
                case cr:
                case lr:
                case fr:
                    e(n, Wa[t], r);
                    break;
                case si:
                    e(n, ii, r);
                    break
            }
        }
    });
    var Dt = c(Pe => {
        "use strict";
        var dr = fn().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
        var _D = dr((Qn(), tt(nh)));
        Pe.IX2BrowserSupport = _D;
        var bD = dr((Oa(), tt(Hr)));
        Pe.IX2Easings = bD;
        var TD = dr((wa(), tt(lh)));
        Pe.IX2EasingUtils = TD;
        var ID = dr((gh(), tt(ph)));
        Pe.IX2ElementsReducer = ID;
        var OD = dr((Da(), tt(bh)));
        Pe.IX2VanillaPlugins = OD;
        var wD = dr((uE(), tt(sE)));
        Pe.IX2VanillaUtils = wD
    });
    var ci, vt, AD, SD, xD, CD, RD, ND, ui, cE, LD, PD, za, qD, MD, FD, DD, lE, fE = he(() => {
        "use strict";
        Ge();
        ci = le(Dt()), vt = le(Kt()), {
            IX2_RAW_DATA_IMPORTED: AD,
            IX2_SESSION_STOPPED: SD,
            IX2_INSTANCE_ADDED: xD,
            IX2_INSTANCE_STARTED: CD,
            IX2_INSTANCE_REMOVED: RD,
            IX2_ANIMATION_FRAME_CHANGED: ND
        } = Ie, {
            optimizeFloat: ui,
            applyEasing: cE,
            createBezierEasing: LD
        } = ci.IX2EasingUtils, {
            RENDER_GENERAL: PD
        } = Ce, {
            getItemConfigByKey: za,
            getRenderType: qD,
            getStyleProp: MD
        } = ci.IX2VanillaUtils, FD = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: f,
                skipMotion: h,
                skipToValue: p
            } = e, {
                parameters: d
            } = t.payload, E = Math.max(1 - a, .01), I = d[n];
            I == null && (E = 1, I = s);
            let _ = Math.max(I, 0) || 0,
                w = ui(_ - r),
                m = h ? p : ui(r + w * E),
                C = m * 100;
            if (m === r && e.current) return e;
            let A, R, P, L;
            for (let z = 0, {
                    length: $
                } = i; z < $; z++) {
                let {
                    keyframe: J,
                    actionItems: te
                } = i[z];
                if (z === 0 && (A = te[0]), C >= J) {
                    A = te[0];
                    let M = i[z + 1],
                        O = M && C !== J;
                    R = O ? M.actionItems[0] : null, O && (P = J / 100, L = (M.keyframe - J) / 100)
                }
            }
            let H = {};
            if (A && !R)
                for (let z = 0, {
                        length: $
                    } = o; z < $; z++) {
                    let J = o[z];
                    H[J] = za(u, J, A.config)
                } else if (A && R && P !== void 0 && L !== void 0) {
                    let z = (m - P) / L,
                        $ = A.config.easing,
                        J = cE($, z, f);
                    for (let te = 0, {
                            length: M
                        } = o; te < M; te++) {
                        let O = o[te],
                            q = za(u, O, A.config),
                            re = (za(u, O, R.config) - q) * J + q;
                        H[O] = re
                    }
                }
            return (0, vt.merge)(e, {
                position: m,
                current: H
            })
        }, DD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: f,
                destinationKeys: h,
                pluginDuration: p,
                instanceDelay: d,
                customEasingFn: E,
                skipMotion: I
            } = e, _ = u.config.easing, {
                duration: w,
                delay: m
            } = u.config;
            p != null && (w = p), m = d ? ? m, a === PD ? w = 0 : (o || I) && (w = m = 0);
            let {
                now: C
            } = t.payload;
            if (r && n) {
                let A = C - (i + m);
                if (s) {
                    let z = C - i,
                        $ = w + m,
                        J = ui(Math.min(Math.max(0, z / $), 1));
                    e = (0, vt.set)(e, "verboseTimeElapsed", $ * J)
                }
                if (A < 0) return e;
                let R = ui(Math.min(Math.max(0, A / w), 1)),
                    P = cE(_, R, E),
                    L = {},
                    H = null;
                return h.length && (H = h.reduce((z, $) => {
                    let J = f[$],
                        te = parseFloat(n[$]) || 0,
                        O = (parseFloat(J) - te) * P + te;
                    return z[$] = O, z
                }, {})), L.current = H, L.position = R, R === 1 && (L.active = !1, L.complete = !0), (0, vt.merge)(e, L)
            }
            return e
        }, lE = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case AD:
                    return t.payload.ixInstances || Object.freeze({});
                case SD:
                    return Object.freeze({});
                case xD:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: f,
                            isCarrier: h,
                            origin: p,
                            destination: d,
                            immediate: E,
                            verbose: I,
                            continuous: _,
                            parameterId: w,
                            actionGroups: m,
                            smoothing: C,
                            restingValue: A,
                            pluginInstance: R,
                            pluginDuration: P,
                            instanceDelay: L,
                            skipMotion: H,
                            skipToValue: z
                        } = t.payload,
                        {
                            actionTypeId: $
                        } = i,
                        J = qD($),
                        te = MD(J, $),
                        M = Object.keys(d).filter(q => d[q] != null && typeof d[q] != "string"),
                        {
                            easing: O
                        } = i.config;
                        return (0, vt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: d,
                            destinationKeys: M,
                            immediate: E,
                            verbose: I,
                            current: null,
                            actionItem: i,
                            actionTypeId: $,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: f,
                            renderType: J,
                            isCarrier: h,
                            styleProp: te,
                            continuous: _,
                            parameterId: w,
                            actionGroups: m,
                            smoothing: C,
                            restingValue: A,
                            pluginInstance: R,
                            pluginDuration: P,
                            instanceDelay: L,
                            skipMotion: H,
                            skipToValue: z,
                            customEasingFn: Array.isArray(O) && O.length === 4 ? LD(O) : void 0
                        })
                    }
                case CD:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, vt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case RD:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let s = i[a];
                            s !== r && (n[s] = e[s])
                        }
                        return n
                    }
                case ND:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let a = n[o],
                                s = e[a],
                                u = s.continuous ? FD : DD;
                            r = (0, vt.set)(r, a, u(s, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var GD, UD, kD, dE, pE = he(() => {
        "use strict";
        Ge();
        ({
            IX2_RAW_DATA_IMPORTED: GD,
            IX2_SESSION_STOPPED: UD,
            IX2_PARAMETER_CHANGED: kD
        } = Ie), dE = (e = {}, t) => {
            switch (t.type) {
                case GD:
                    return t.payload.ixParameters || {};
                case UD:
                    return {};
                case kD:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var hE = {};
    Fe(hE, {
        default: () => BD
    });
    var gE, vE, VD, BD, EE = he(() => {
        "use strict";
        gE = le(Ho());
        xf();
        Yf();
        Zf();
        vE = le(Dt());
        fE();
        pE();
        ({
            ixElements: VD
        } = vE.IX2ElementsReducer), BD = (0, gE.combineReducers)({
            ixData: Sf,
            ixRequest: Kf,
            ixSession: Qf,
            ixElements: VD,
            ixInstances: lE,
            ixParameters: dE
        })
    });
    var mE = c((VX, yE) => {
        var HD = bt(),
            WD = Oe(),
            XD = dt(),
            jD = "[object String]";

        function zD(e) {
            return typeof e == "string" || !WD(e) && XD(e) && HD(e) == jD
        }
        yE.exports = zD
    });
    var bE = c((BX, _E) => {
        var KD = Ea(),
            YD = KD("length");
        _E.exports = YD
    });
    var IE = c((HX, TE) => {
        var $D = "\\ud800-\\udfff",
            QD = "\\u0300-\\u036f",
            ZD = "\\ufe20-\\ufe2f",
            JD = "\\u20d0-\\u20ff",
            e1 = QD + ZD + JD,
            t1 = "\\ufe0e\\ufe0f",
            r1 = "\\u200d",
            n1 = RegExp("[" + r1 + $D + e1 + t1 + "]");

        function i1(e) {
            return n1.test(e)
        }
        TE.exports = i1
    });
    var LE = c((WX, NE) => {
        var wE = "\\ud800-\\udfff",
            o1 = "\\u0300-\\u036f",
            a1 = "\\ufe20-\\ufe2f",
            s1 = "\\u20d0-\\u20ff",
            u1 = o1 + a1 + s1,
            c1 = "\\ufe0e\\ufe0f",
            l1 = "[" + wE + "]",
            Ka = "[" + u1 + "]",
            Ya = "\\ud83c[\\udffb-\\udfff]",
            f1 = "(?:" + Ka + "|" + Ya + ")",
            AE = "[^" + wE + "]",
            SE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            xE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            d1 = "\\u200d",
            CE = f1 + "?",
            RE = "[" + c1 + "]?",
            p1 = "(?:" + d1 + "(?:" + [AE, SE, xE].join("|") + ")" + RE + CE + ")*",
            g1 = RE + CE + p1,
            v1 = "(?:" + [AE + Ka + "?", Ka, SE, xE, l1].join("|") + ")",
            OE = RegExp(Ya + "(?=" + Ya + ")|" + v1 + g1, "g");

        function h1(e) {
            for (var t = OE.lastIndex = 0; OE.test(e);) ++t;
            return t
        }
        NE.exports = h1
    });
    var qE = c((XX, PE) => {
        var E1 = bE(),
            y1 = IE(),
            m1 = LE();

        function _1(e) {
            return y1(e) ? m1(e) : E1(e)
        }
        PE.exports = _1
    });
    var FE = c((jX, ME) => {
        var b1 = Vn(),
            T1 = Bn(),
            I1 = Lt(),
            O1 = mE(),
            w1 = qE(),
            A1 = "[object Map]",
            S1 = "[object Set]";

        function x1(e) {
            if (e == null) return 0;
            if (I1(e)) return O1(e) ? w1(e) : e.length;
            var t = T1(e);
            return t == A1 || t == S1 ? e.size : b1(e).length
        }
        ME.exports = x1
    });
    var GE = c((zX, DE) => {
        var C1 = "Expected a function";

        function R1(e) {
            if (typeof e != "function") throw new TypeError(C1);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        DE.exports = R1
    });
    var $a = c((KX, UE) => {
        var N1 = Tt(),
            L1 = function() {
                try {
                    var e = N1(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        UE.exports = L1
    });
    var Qa = c((YX, VE) => {
        var kE = $a();

        function P1(e, t, r) {
            t == "__proto__" && kE ? kE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        VE.exports = P1
    });
    var HE = c(($X, BE) => {
        var q1 = Qa(),
            M1 = Nn(),
            F1 = Object.prototype,
            D1 = F1.hasOwnProperty;

        function G1(e, t, r) {
            var n = e[t];
            (!(D1.call(e, t) && M1(n, r)) || r === void 0 && !(t in e)) && q1(e, t, r)
        }
        BE.exports = G1
    });
    var jE = c((QX, XE) => {
        var U1 = HE(),
            k1 = kr(),
            V1 = Dn(),
            WE = at(),
            B1 = rr();

        function H1(e, t, r, n) {
            if (!WE(e)) return e;
            t = k1(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = B1(t[i]),
                    f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var h = s[u];
                    f = n ? n(h, u, s) : void 0, f === void 0 && (f = WE(h) ? h : V1(t[i + 1]) ? [] : {})
                }
                U1(s, u, f), s = s[u]
            }
            return e
        }
        XE.exports = H1
    });
    var KE = c((ZX, zE) => {
        var W1 = Xn(),
            X1 = jE(),
            j1 = kr();

        function z1(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = W1(e, a);
                r(s, a) && X1(o, j1(a, e), s)
            }
            return o
        }
        zE.exports = z1
    });
    var $E = c((JX, YE) => {
        var K1 = Mn(),
            Y1 = Ro(),
            $1 = ra(),
            Q1 = ta(),
            Z1 = Object.getOwnPropertySymbols,
            J1 = Z1 ? function(e) {
                for (var t = []; e;) K1(t, $1(e)), e = Y1(e);
                return t
            } : Q1;
        YE.exports = J1
    });
    var ZE = c((ej, QE) => {
        function e2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        QE.exports = e2
    });
    var ey = c((tj, JE) => {
        var t2 = at(),
            r2 = kn(),
            n2 = ZE(),
            i2 = Object.prototype,
            o2 = i2.hasOwnProperty;

        function a2(e) {
            if (!t2(e)) return n2(e);
            var t = r2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !o2.call(e, n)) || r.push(n);
            return r
        }
        JE.exports = a2
    });
    var ry = c((rj, ty) => {
        var s2 = ia(),
            u2 = ey(),
            c2 = Lt();

        function l2(e) {
            return c2(e) ? s2(e, !0) : u2(e)
        }
        ty.exports = l2
    });
    var iy = c((nj, ny) => {
        var f2 = ea(),
            d2 = $E(),
            p2 = ry();

        function g2(e) {
            return f2(e, p2, d2)
        }
        ny.exports = g2
    });
    var ay = c((ij, oy) => {
        var v2 = ha(),
            h2 = It(),
            E2 = KE(),
            y2 = iy();

        function m2(e, t) {
            if (e == null) return {};
            var r = v2(y2(e), function(n) {
                return [n]
            });
            return t = h2(t), E2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        oy.exports = m2
    });
    var uy = c((oj, sy) => {
        var _2 = It(),
            b2 = GE(),
            T2 = ay();

        function I2(e, t) {
            return T2(e, b2(_2(t)))
        }
        sy.exports = I2
    });
    var ly = c((aj, cy) => {
        var O2 = Vn(),
            w2 = Bn(),
            A2 = qr(),
            S2 = Oe(),
            x2 = Lt(),
            C2 = Fn(),
            R2 = kn(),
            N2 = Un(),
            L2 = "[object Map]",
            P2 = "[object Set]",
            q2 = Object.prototype,
            M2 = q2.hasOwnProperty;

        function F2(e) {
            if (e == null) return !0;
            if (x2(e) && (S2(e) || typeof e == "string" || typeof e.splice == "function" || C2(e) || N2(e) || A2(e))) return !e.length;
            var t = w2(e);
            if (t == L2 || t == P2) return !e.size;
            if (R2(e)) return !O2(e).length;
            for (var r in e)
                if (M2.call(e, r)) return !1;
            return !0
        }
        cy.exports = F2
    });
    var dy = c((sj, fy) => {
        var D2 = Qa(),
            G2 = Ga(),
            U2 = It();

        function k2(e, t) {
            var r = {};
            return t = U2(t, 3), G2(e, function(n, i, o) {
                D2(r, i, t(n, i, o))
            }), r
        }
        fy.exports = k2
    });
    var gy = c((uj, py) => {
        function V2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        py.exports = V2
    });
    var hy = c((cj, vy) => {
        var B2 = zn();

        function H2(e) {
            return typeof e == "function" ? e : B2
        }
        vy.exports = H2
    });
    var yy = c((lj, Ey) => {
        var W2 = gy(),
            X2 = Ua(),
            j2 = hy(),
            z2 = Oe();

        function K2(e, t) {
            var r = z2(e) ? W2 : X2;
            return r(e, j2(t))
        }
        Ey.exports = K2
    });
    var _y = c((fj, my) => {
        var Y2 = Ye(),
            $2 = function() {
                return Y2.Date.now()
            };
        my.exports = $2
    });
    var Iy = c((dj, Ty) => {
        var Q2 = at(),
            Za = _y(),
            by = Kn(),
            Z2 = "Expected a function",
            J2 = Math.max,
            eG = Math.min;

        function tG(e, t, r) {
            var n, i, o, a, s, u, f = 0,
                h = !1,
                p = !1,
                d = !0;
            if (typeof e != "function") throw new TypeError(Z2);
            t = by(t) || 0, Q2(r) && (h = !!r.leading, p = "maxWait" in r, o = p ? J2(by(r.maxWait) || 0, t) : o, d = "trailing" in r ? !!r.trailing : d);

            function E(L) {
                var H = n,
                    z = i;
                return n = i = void 0, f = L, a = e.apply(z, H), a
            }

            function I(L) {
                return f = L, s = setTimeout(m, t), h ? E(L) : a
            }

            function _(L) {
                var H = L - u,
                    z = L - f,
                    $ = t - H;
                return p ? eG($, o - z) : $
            }

            function w(L) {
                var H = L - u,
                    z = L - f;
                return u === void 0 || H >= t || H < 0 || p && z >= o
            }

            function m() {
                var L = Za();
                if (w(L)) return C(L);
                s = setTimeout(m, _(L))
            }

            function C(L) {
                return s = void 0, d && n ? E(L) : (n = i = void 0, a)
            }

            function A() {
                s !== void 0 && clearTimeout(s), f = 0, n = u = i = s = void 0
            }

            function R() {
                return s === void 0 ? a : C(Za())
            }

            function P() {
                var L = Za(),
                    H = w(L);
                if (n = arguments, i = this, u = L, H) {
                    if (s === void 0) return I(u);
                    if (p) return clearTimeout(s), s = setTimeout(m, t), E(u)
                }
                return s === void 0 && (s = setTimeout(m, t)), a
            }
            return P.cancel = A, P.flush = R, P
        }
        Ty.exports = tG
    });
    var wy = c((pj, Oy) => {
        var rG = Iy(),
            nG = at(),
            iG = "Expected a function";

        function oG(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(iG);
            return nG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), rG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Oy.exports = oG
    });
    var Sy = {};
    Fe(Sy, {
        actionListPlaybackChanged: () => gr,
        animationFrameChanged: () => fi,
        clearRequested: () => RG,
        elementStateChanged: () => as,
        eventListenerAdded: () => li,
        eventStateChanged: () => ns,
        instanceAdded: () => is,
        instanceRemoved: () => os,
        instanceStarted: () => di,
        mediaQueriesDefined: () => us,
        parameterChanged: () => pr,
        playbackRequested: () => xG,
        previewRequested: () => SG,
        rawDataImported: () => Ja,
        sessionInitialized: () => es,
        sessionStarted: () => ts,
        sessionStopped: () => rs,
        stopRequested: () => CG,
        testFrameRendered: () => NG,
        viewportWidthChanged: () => ss
    });
    var Ay, aG, sG, uG, cG, lG, fG, dG, pG, gG, vG, hG, EG, yG, mG, _G, bG, TG, IG, OG, wG, AG, Ja, es, ts, rs, SG, xG, CG, RG, li, NG, ns, fi, pr, is, di, os, as, gr, ss, us, pi = he(() => {
        "use strict";
        Ge();
        Ay = le(Dt()), {
            IX2_RAW_DATA_IMPORTED: aG,
            IX2_SESSION_INITIALIZED: sG,
            IX2_SESSION_STARTED: uG,
            IX2_SESSION_STOPPED: cG,
            IX2_PREVIEW_REQUESTED: lG,
            IX2_PLAYBACK_REQUESTED: fG,
            IX2_STOP_REQUESTED: dG,
            IX2_CLEAR_REQUESTED: pG,
            IX2_EVENT_LISTENER_ADDED: gG,
            IX2_TEST_FRAME_RENDERED: vG,
            IX2_EVENT_STATE_CHANGED: hG,
            IX2_ANIMATION_FRAME_CHANGED: EG,
            IX2_PARAMETER_CHANGED: yG,
            IX2_INSTANCE_ADDED: mG,
            IX2_INSTANCE_STARTED: _G,
            IX2_INSTANCE_REMOVED: bG,
            IX2_ELEMENT_STATE_CHANGED: TG,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: IG,
            IX2_VIEWPORT_WIDTH_CHANGED: OG,
            IX2_MEDIA_QUERIES_DEFINED: wG
        } = Ie, {
            reifyState: AG
        } = Ay.IX2VanillaUtils, Ja = e => ({
            type: aG,
            payload: { ...AG(e)
            }
        }), es = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: sG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), ts = () => ({
            type: uG
        }), rs = () => ({
            type: cG
        }), SG = ({
            rawData: e,
            defer: t
        }) => ({
            type: lG,
            payload: {
                defer: t,
                rawData: e
            }
        }), xG = ({
            actionTypeId: e = De.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: fG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), CG = e => ({
            type: dG,
            payload: {
                actionListId: e
            }
        }), RG = () => ({
            type: pG
        }), li = (e, t) => ({
            type: gG,
            payload: {
                target: e,
                listenerParams: t
            }
        }), NG = (e = 1) => ({
            type: vG,
            payload: {
                step: e
            }
        }), ns = (e, t) => ({
            type: hG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), fi = (e, t) => ({
            type: EG,
            payload: {
                now: e,
                parameters: t
            }
        }), pr = (e, t) => ({
            type: yG,
            payload: {
                key: e,
                value: t
            }
        }), is = e => ({
            type: mG,
            payload: { ...e
            }
        }), di = (e, t) => ({
            type: _G,
            payload: {
                instanceId: e,
                time: t
            }
        }), os = e => ({
            type: bG,
            payload: {
                instanceId: e
            }
        }), as = (e, t, r, n) => ({
            type: TG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), gr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: IG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), ss = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: OG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), us = () => ({
            type: wG
        })
    });
    var qe = {};
    Fe(qe, {
        elementContains: () => fs,
        getChildElements: () => VG,
        getClosestElement: () => Qr,
        getProperty: () => FG,
        getQuerySelector: () => ls,
        getRefType: () => ds,
        getSiblingElements: () => BG,
        getStyle: () => MG,
        getValidDocument: () => GG,
        isSiblingNode: () => kG,
        matchSelector: () => DG,
        queryDocument: () => UG,
        setStyle: () => qG
    });

    function qG(e, t, r) {
        e.style[t] = r
    }

    function MG(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function FG(e, t) {
        return e[t]
    }

    function DG(e) {
        return t => t[cs](e)
    }

    function ls({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(xy) !== -1) {
                let n = e.split(xy),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Ry)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function GG(e) {
        return e == null || e === document.documentElement.getAttribute(Ry) ? document : null
    }

    function UG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function fs(e, t) {
        return e.contains(t)
    }

    function kG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function VG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function BG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function ds(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? LG : PG : null
    }
    var Cy, cs, xy, LG, PG, Ry, Qr, Ny = he(() => {
        "use strict";
        Cy = le(Dt());
        Ge();
        ({
            ELEMENT_MATCHES: cs
        } = Cy.IX2BrowserSupport), {
            IX2_ID_DELIMITER: xy,
            HTML_ELEMENT: LG,
            PLAIN_OBJECT: PG,
            WF_PAGE: Ry
        } = Ce;
        Qr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[cs] && r[cs](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ps = c((hj, Py) => {
        var HG = at(),
            Ly = Object.create,
            WG = function() {
                function e() {}
                return function(t) {
                    if (!HG(t)) return {};
                    if (Ly) return Ly(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Py.exports = WG
    });
    var gi = c((Ej, qy) => {
        function XG() {}
        qy.exports = XG
    });
    var hi = c((yj, My) => {
        var jG = ps(),
            zG = gi();

        function vi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        vi.prototype = jG(zG.prototype);
        vi.prototype.constructor = vi;
        My.exports = vi
    });
    var Uy = c((mj, Gy) => {
        var Fy = Xt(),
            KG = qr(),
            YG = Oe(),
            Dy = Fy ? Fy.isConcatSpreadable : void 0;

        function $G(e) {
            return YG(e) || KG(e) || !!(Dy && e && e[Dy])
        }
        Gy.exports = $G
    });
    var By = c((_j, Vy) => {
        var QG = Mn(),
            ZG = Uy();

        function ky(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = ZG), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? ky(s, t - 1, r, n, i) : QG(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Vy.exports = ky
    });
    var Wy = c((bj, Hy) => {
        var JG = By();

        function eU(e) {
            var t = e == null ? 0 : e.length;
            return t ? JG(e, 1) : []
        }
        Hy.exports = eU
    });
    var jy = c((Tj, Xy) => {
        function tU(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Xy.exports = tU
    });
    var Yy = c((Ij, Ky) => {
        var rU = jy(),
            zy = Math.max;

        function nU(e, t, r) {
            return t = zy(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = zy(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return s[t] = r(a), rU(e, this, s)
                }
        }
        Ky.exports = nU
    });
    var Qy = c((Oj, $y) => {
        function iU(e) {
            return function() {
                return e
            }
        }
        $y.exports = iU
    });
    var em = c((wj, Jy) => {
        var oU = Qy(),
            Zy = $a(),
            aU = zn(),
            sU = Zy ? function(e, t) {
                return Zy(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: oU(t),
                    writable: !0
                })
            } : aU;
        Jy.exports = sU
    });
    var rm = c((Aj, tm) => {
        var uU = 800,
            cU = 16,
            lU = Date.now;

        function fU(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = lU(),
                    i = cU - (n - r);
                if (r = n, i > 0) {
                    if (++t >= uU) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        tm.exports = fU
    });
    var im = c((Sj, nm) => {
        var dU = em(),
            pU = rm(),
            gU = pU(dU);
        nm.exports = gU
    });
    var am = c((xj, om) => {
        var vU = Wy(),
            hU = Yy(),
            EU = im();

        function yU(e) {
            return EU(hU(e, void 0, vU), e + "")
        }
        om.exports = yU
    });
    var cm = c((Cj, um) => {
        var sm = oa(),
            mU = sm && new sm;
        um.exports = mU
    });
    var fm = c((Rj, lm) => {
        function _U() {}
        lm.exports = _U
    });
    var gs = c((Nj, pm) => {
        var dm = cm(),
            bU = fm(),
            TU = dm ? function(e) {
                return dm.get(e)
            } : bU;
        pm.exports = TU
    });
    var vm = c((Lj, gm) => {
        var IU = {};
        gm.exports = IU
    });
    var vs = c((Pj, Em) => {
        var hm = vm(),
            OU = Object.prototype,
            wU = OU.hasOwnProperty;

        function AU(e) {
            for (var t = e.name + "", r = hm[t], n = wU.call(hm, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        Em.exports = AU
    });
    var yi = c((qj, ym) => {
        var SU = ps(),
            xU = gi(),
            CU = 4294967295;

        function Ei(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = CU, this.__views__ = []
        }
        Ei.prototype = SU(xU.prototype);
        Ei.prototype.constructor = Ei;
        ym.exports = Ei
    });
    var _m = c((Mj, mm) => {
        function RU(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        mm.exports = RU
    });
    var Tm = c((Fj, bm) => {
        var NU = yi(),
            LU = hi(),
            PU = _m();

        function qU(e) {
            if (e instanceof NU) return e.clone();
            var t = new LU(e.__wrapped__, e.__chain__);
            return t.__actions__ = PU(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        bm.exports = qU
    });
    var wm = c((Dj, Om) => {
        var MU = yi(),
            Im = hi(),
            FU = gi(),
            DU = Oe(),
            GU = dt(),
            UU = Tm(),
            kU = Object.prototype,
            VU = kU.hasOwnProperty;

        function mi(e) {
            if (GU(e) && !DU(e) && !(e instanceof MU)) {
                if (e instanceof Im) return e;
                if (VU.call(e, "__wrapped__")) return UU(e)
            }
            return new Im(e)
        }
        mi.prototype = FU.prototype;
        mi.prototype.constructor = mi;
        Om.exports = mi
    });
    var Sm = c((Gj, Am) => {
        var BU = yi(),
            HU = gs(),
            WU = vs(),
            XU = wm();

        function jU(e) {
            var t = WU(e),
                r = XU[t];
            if (typeof r != "function" || !(t in BU.prototype)) return !1;
            if (e === r) return !0;
            var n = HU(r);
            return !!n && e === n[0]
        }
        Am.exports = jU
    });
    var Nm = c((Uj, Rm) => {
        var xm = hi(),
            zU = am(),
            KU = gs(),
            hs = vs(),
            YU = Oe(),
            Cm = Sm(),
            $U = "Expected a function",
            QU = 8,
            ZU = 32,
            JU = 128,
            ek = 256;

        function tk(e) {
            return zU(function(t) {
                var r = t.length,
                    n = r,
                    i = xm.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError($U);
                    if (i && !a && hs(o) == "wrapper") var a = new xm([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = hs(o),
                        u = s == "wrapper" ? KU(o) : void 0;
                    u && Cm(u[0]) && u[1] == (JU | QU | ZU | ek) && !u[4].length && u[9] == 1 ? a = a[hs(u[0])].apply(a, u[3]) : a = o.length == 1 && Cm(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var f = arguments,
                        h = f[0];
                    if (a && f.length == 1 && YU(h)) return a.plant(h).value();
                    for (var p = 0, d = r ? t[p].apply(this, f) : h; ++p < r;) d = t[p].call(this, d);
                    return d
                }
            })
        }
        Rm.exports = tk
    });
    var Pm = c((kj, Lm) => {
        var rk = Nm(),
            nk = rk();
        Lm.exports = nk
    });
    var Mm = c((Vj, qm) => {
        function ik(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        qm.exports = ik
    });
    var Dm = c((Bj, Fm) => {
        var ok = Mm(),
            Es = Kn();

        function ak(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Es(r), r = r === r ? r : 0), t !== void 0 && (t = Es(t), t = t === t ? t : 0), ok(Es(e), t, r)
        }
        Fm.exports = ak
    });
    var jm, zm, Km, Ym, sk, uk, ck, lk, fk, dk, pk, gk, vk, hk, Ek, yk, mk, _k, bk, $m, Qm, Tk, Ik, Ok, Zm, wk, Ak, Jm, Sk, ys, e_, Gm, Um, t_, Jr, xk, ct, r_, Ck, ke, Ze, en, n_, ms, km, _s, Rk, Zr, Nk, Lk, Pk, i_, Vm, qk, Bm, Mk, Fk, Dk, Hm, _i, bi, Wm, Xm, o_, a_ = he(() => {
        "use strict";
        jm = le(Pm()), zm = le(jn()), Km = le(Dm());
        Ge();
        bs();
        pi();
        Ym = le(Dt()), {
            MOUSE_CLICK: sk,
            MOUSE_SECOND_CLICK: uk,
            MOUSE_DOWN: ck,
            MOUSE_UP: lk,
            MOUSE_OVER: fk,
            MOUSE_OUT: dk,
            DROPDOWN_CLOSE: pk,
            DROPDOWN_OPEN: gk,
            SLIDER_ACTIVE: vk,
            SLIDER_INACTIVE: hk,
            TAB_ACTIVE: Ek,
            TAB_INACTIVE: yk,
            NAVBAR_CLOSE: mk,
            NAVBAR_OPEN: _k,
            MOUSE_MOVE: bk,
            PAGE_SCROLL_DOWN: $m,
            SCROLL_INTO_VIEW: Qm,
            SCROLL_OUT_OF_VIEW: Tk,
            PAGE_SCROLL_UP: Ik,
            SCROLLING_IN_VIEW: Ok,
            PAGE_FINISH: Zm,
            ECOMMERCE_CART_CLOSE: wk,
            ECOMMERCE_CART_OPEN: Ak,
            PAGE_START: Jm,
            PAGE_SCROLL: Sk
        } = $e, ys = "COMPONENT_ACTIVE", e_ = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Gm
        } = Ce, {
            getNamespacedParameterId: Um
        } = Ym.IX2VanillaUtils, t_ = e => t => typeof t == "object" && e(t) ? !0 : t, Jr = t_(({
            element: e,
            nativeEvent: t
        }) => e === t.target), xk = t_(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), ct = (0, jm.default)([Jr, xk]), r_ = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !Rk[i.eventTypeId]) return i
            }
            return null
        }, Ck = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!r_(e, n)
        }, ke = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, f = r_(e, u);
            return f && vr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Gm + n.split(Gm)[1],
                actionListId: (0, zm.default)(f, "action.config.actionListId")
            }), vr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), tn({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), i
        }, Ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, en = {
            handler: Ze(ct, ke)
        }, n_ = { ...en,
            types: [ys, e_].join(" ")
        }, ms = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], km = "mouseover mouseout", _s = {
            types: ms
        }, Rk = {
            PAGE_START: Jm,
            PAGE_FINISH: Zm
        }, Zr = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, Km.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), Nk = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), Lk = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, Pk = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Zr(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return Nk(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, i_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [ys, e_].indexOf(n) !== -1 ? n === ys : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Vm = e => (t, r) => {
            let n = {
                elementHovered: Lk(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, qk = e => (t, r) => {
            let n = { ...r,
                elementVisible: Pk(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Bm = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Zr(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: f
            } = a, h = f === "PX", p = i - o, d = Number((n / p).toFixed(2));
            if (r && r.percentTop === d) return r;
            let E = (h ? u : o * (u || 0) / 100) / p,
                I, _, w = 0;
            r && (I = d > r.percentTop, _ = r.scrollingDown !== I, w = _ ? d : r.anchorTop);
            let m = s === $m ? d >= w + E : d <= w - E,
                C = { ...r,
                    percentTop: d,
                    inBounds: m,
                    anchorTop: w,
                    scrollingDown: I
                };
            return r && m && (_ || C.inBounds !== r.inBounds) && e(t, C) || C
        }, Mk = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, Fk = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, Dk = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Hm = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, _i = (e = !0) => ({ ...n_,
            handler: Ze(e ? ct : Jr, i_((t, r) => r.isActive ? en.handler(t, r) : r))
        }), bi = (e = !0) => ({ ...n_,
            handler: Ze(e ? ct : Jr, i_((t, r) => r.isActive ? r : en.handler(t, r)))
        }), Wm = { ..._s,
            handler: qk((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Qm === r ? (ke(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Xm = .05, o_ = {
            [vk]: _i(),
            [hk]: bi(),
            [gk]: _i(),
            [pk]: bi(),
            [_k]: _i(!1),
            [mk]: bi(!1),
            [Ek]: _i(),
            [yk]: bi(),
            [Ak]: {
                types: "ecommerce-cart-open",
                handler: Ze(ct, ke)
            },
            [wk]: {
                types: "ecommerce-cart-close",
                handler: Ze(ct, ke)
            },
            [sk]: {
                types: "click",
                handler: Ze(ct, Hm((e, {
                    clickCount: t
                }) => {
                    Ck(e) ? t === 1 && ke(e) : ke(e)
                }))
            },
            [uk]: {
                types: "click",
                handler: Ze(ct, Hm((e, {
                    clickCount: t
                }) => {
                    t === 2 && ke(e)
                }))
            },
            [ck]: { ...en,
                types: "mousedown"
            },
            [lk]: { ...en,
                types: "mouseup"
            },
            [fk]: {
                types: km,
                handler: Ze(ct, Vm((e, t) => {
                    t.elementHovered && ke(e)
                }))
            },
            [dk]: {
                types: km,
                handler: Ze(ct, Vm((e, t) => {
                    t.elementHovered || ke(e)
                }))
            },
            [bk]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: f,
                        restingState: h = 0
                    } = r, {
                        clientX: p = o.clientX,
                        clientY: d = o.clientY,
                        pageX: E = o.pageX,
                        pageY: I = o.pageY
                    } = n, _ = s === "X_AXIS", w = n.type === "mouseout", m = h / 100, C = u, A = !1;
                    switch (a) {
                        case ot.VIEWPORT:
                            {
                                m = _ ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case ot.PAGE:
                            {
                                let {
                                    scrollLeft: R,
                                    scrollTop: P,
                                    scrollWidth: L,
                                    scrollHeight: H
                                } = Zr();m = _ ? Math.min(R + E, L) / L : Math.min(P + I, H) / H;
                                break
                            }
                        case ot.ELEMENT:
                        default:
                            {
                                C = Um(i, u);
                                let R = n.type.indexOf("mouse") === 0;
                                if (R && ct({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let P = t.getBoundingClientRect(),
                                    {
                                        left: L,
                                        top: H,
                                        width: z,
                                        height: $
                                    } = P;
                                if (!R && !Mk({
                                        left: p,
                                        top: d
                                    }, P)) break;A = !0,
                                m = _ ? (p - L) / z : (d - H) / $;
                                break
                            }
                    }
                    return w && (m > 1 - Xm || m < Xm) && (m = Math.round(m)), (a !== ot.ELEMENT || A || A !== o.elementHovered) && (m = f ? 1 - m : m, e.dispatch(pr(C, m))), {
                        elementHovered: A,
                        clientX: p,
                        clientY: d,
                        pageX: E,
                        pageY: I
                    }
                }
            },
            [Sk]: {
                types: ms,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = Zr(), s = i / (o - a);
                    s = n ? 1 - s : s, e.dispatch(pr(r, s))
                }
            },
            [Ok]: {
                types: ms,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: f
                    } = Zr(), {
                        basedOn: h,
                        selectedAxis: p,
                        continuousParameterGroupId: d,
                        startsEntering: E,
                        startsExiting: I,
                        addEndOffset: _,
                        addStartOffset: w,
                        addOffsetValue: m = 0,
                        endOffsetValue: C = 0
                    } = r, A = p === "X_AXIS";
                    if (h === ot.VIEWPORT) {
                        let R = A ? o / s : a / u;
                        return R !== i.scrollPercent && t.dispatch(pr(d, R)), {
                            scrollPercent: R
                        }
                    } else {
                        let R = Um(n, d),
                            P = e.getBoundingClientRect(),
                            L = (w ? m : 0) / 100,
                            H = (_ ? C : 0) / 100;
                        L = E ? L : 1 - L, H = I ? H : 1 - H;
                        let z = P.top + Math.min(P.height * L, f),
                            J = P.top + P.height * H - z,
                            te = Math.min(f + J, u),
                            O = Math.min(Math.max(0, f - z), te) / te;
                        return O !== i.scrollPercent && t.dispatch(pr(R, O)), {
                            scrollPercent: O
                        }
                    }
                }
            },
            [Qm]: Wm,
            [Tk]: Wm,
            [$m]: { ..._s,
                handler: Bm((e, t) => {
                    t.scrollingDown && ke(e)
                })
            },
            [Ik]: { ..._s,
                handler: Bm((e, t) => {
                    t.scrollingDown || ke(e)
                })
            },
            [Zm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ze(Jr, Fk(ke))
            },
            [Jm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ze(Jr, Dk(ke))
            }
        }
    });
    var I_ = {};
    Fe(I_, {
        observeRequests: () => nV,
        startActionGroup: () => tn,
        startEngine: () => Si,
        stopActionGroup: () => vr,
        stopAllActionGroups: () => __,
        stopEngine: () => xi
    });

    function nV(e) {
        Gt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: aV
        }), Gt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: sV
        }), Gt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: uV
        }), Gt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: cV
        })
    }

    function iV(e) {
        Gt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                xi(e), h_({
                    store: e,
                    elementApi: qe
                }), Si({
                    store: e,
                    allowEvents: !0
                }), E_()
            }
        })
    }

    function oV(e, t) {
        let r = Gt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function aV({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Si({
                store: r,
                rawData: e,
                allowEvents: !0
            }), E_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function E_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function sV(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: f = !0
        } = e, {
            rawData: h
        } = e;
        if (n && i && h && s) {
            let p = h.actionLists[n];
            p && (h = jk({
                actionList: p,
                actionItemId: i,
                rawData: h
            }))
        }
        if (Si({
                store: t,
                rawData: h,
                allowEvents: a,
                testManual: u
            }), n && r === De.GENERAL_START_ACTION || Ts(r)) {
            vr({
                store: t,
                actionListId: n
            }), m_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = tn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: f
            });
            f && p && t.dispatch(gr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }

    function uV({
        actionListId: e
    }, t) {
        e ? vr({
            store: t,
            actionListId: e
        }) : __({
            store: t
        }), xi(t)
    }

    function cV(e, t) {
        xi(t), h_({
            store: t,
            elementApi: qe
        })
    }

    function Si({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Ja(t)), i.active || (e.dispatch(es({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (vV(e), lV(), e.getState().ixSession.hasDefinedMediaQueries && iV(e)), e.dispatch(ts()), fV(e, n))
    }

    function lV() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(s_) === -1 && (e.className += ` ${s_}`)
    }

    function fV(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(fi(n, o)), t ? oV(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function xi(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(dV), $k(), e.dispatch(rs())
        }
    }

    function dV({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function pV({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: f,
            ixSession: h
        } = e.getState(), {
            events: p
        } = f, d = p[n], {
            eventTypeId: E
        } = d, I = {}, _ = {}, w = [], {
            continuousActionGroups: m
        } = a, {
            id: C
        } = a;
        zk(E, i) && (C = Kk(t, C));
        let A = h.hasBoundaryNodes && r ? Qr(r, Ii) : null;
        m.forEach(R => {
            let {
                keyframe: P,
                actionItems: L
            } = R;
            L.forEach(H => {
                let {
                    actionTypeId: z
                } = H, {
                    target: $
                } = H.config;
                if (!$) return;
                let J = $.boundaryMode ? A : null,
                    te = Qk($) + Is + z;
                if (_[te] = gV(_[te], P, H), !I[te]) {
                    I[te] = !0;
                    let {
                        config: M
                    } = H;
                    Oi({
                        config: M,
                        event: d,
                        eventTarget: r,
                        elementRoot: J,
                        elementApi: qe
                    }).forEach(O => {
                        w.push({
                            element: O,
                            key: te
                        })
                    })
                }
            })
        }), w.forEach(({
            element: R,
            key: P
        }) => {
            let L = _[P],
                H = (0, ht.default)(L, "[0].actionItems[0]", {}),
                {
                    actionTypeId: z
                } = H,
                $ = Ai(z) ? ws(z)(R, H) : null,
                J = Os({
                    element: R,
                    actionItem: H,
                    elementApi: qe
                }, $);
            As({
                store: e,
                element: R,
                eventId: n,
                actionListId: o,
                actionItem: H,
                destination: J,
                continuous: !0,
                parameterId: C,
                actionGroups: L,
                smoothing: s,
                restingValue: u,
                pluginInstance: $
            })
        })
    }

    function gV(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function vV(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        y_(e), (0, hr.default)(r, (i, o) => {
            let a = o_[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            bV({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && EV(e)
    }

    function EV(e) {
        let t = () => {
            y_(e)
        };
        hV.forEach(r => {
            window.addEventListener(r, t), e.dispatch(li(window, [r, t]))
        }), t()
    }

    function y_(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(ss({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function bV({
        logic: e,
        store: t,
        events: r
    }) {
        TV(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = yV(r, _V);
        if (!(0, l_.default)(s)) return;
        (0, hr.default)(s, (p, d) => {
            let E = r[d],
                {
                    action: I,
                    id: _,
                    mediaQueries: w = o.mediaQueryKeys
                } = E,
                {
                    actionListId: m
                } = I.config;
            Zk(w, o.mediaQueryKeys) || t.dispatch(us()), I.actionTypeId === De.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(A => {
                let {
                    continuousParameterGroupId: R
                } = A, P = (0, ht.default)(a, `${m}.continuousParameterGroups`, []), L = (0, c_.default)(P, ({
                    id: $
                }) => $ === R), H = (A.smoothing || 0) / 100, z = (A.restingState || 0) / 100;
                L && p.forEach(($, J) => {
                    let te = _ + Is + J;
                    pV({
                        store: t,
                        eventStateKey: te,
                        eventTarget: $,
                        eventId: _,
                        eventConfig: A,
                        actionListId: m,
                        parameterGroup: L,
                        smoothing: H,
                        restingValue: z
                    })
                })
            }), (I.actionTypeId === De.GENERAL_START_ACTION || Ts(I.actionTypeId)) && m_({
                store: t,
                actionListId: m,
                eventId: _
            })
        });
        let u = p => {
                let {
                    ixSession: d
                } = t.getState();
                mV(s, (E, I, _) => {
                    let w = r[I],
                        m = d.eventState[_],
                        {
                            action: C,
                            mediaQueries: A = o.mediaQueryKeys
                        } = w;
                    if (!wi(A, d.mediaQueryKey)) return;
                    let R = (P = {}) => {
                        let L = i({
                            store: t,
                            element: E,
                            event: w,
                            eventConfig: P,
                            nativeEvent: p,
                            eventStateKey: _
                        }, m);
                        Jk(L, m) || t.dispatch(ns(_, L))
                    };
                    C.actionTypeId === De.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(w.config) ? w.config : [w.config]).forEach(R) : R()
                })
            },
            f = (0, g_.default)(u, rV),
            h = ({
                target: p = document,
                types: d,
                throttle: E
            }) => {
                d.split(" ").filter(Boolean).forEach(I => {
                    let _ = E ? f : u;
                    p.addEventListener(I, _), t.dispatch(li(p, [I, _]))
                })
            };
        Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e)
    }

    function TV(e) {
        if (!tV) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = ls(o);
            t[a] || (i === $e.MOUSE_CLICK || i === $e.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function m_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, s = a[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, ht.default)(u, "actionItemGroups[0].actionItems", []),
                h = (0, ht.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!wi(h, i.mediaQueryKey)) return;
            f.forEach(p => {
                let {
                    config: d,
                    actionTypeId: E
                } = p, I = d ? .target ? .useEventTarget === !0 && d ? .target ? .objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : d, _ = Oi({
                    config: I,
                    event: s,
                    elementApi: qe
                }), w = Ai(E);
                _.forEach(m => {
                    let C = w ? ws(E)(m, p) : null;
                    As({
                        destination: Os({
                            element: m,
                            actionItem: p,
                            elementApi: qe
                        }, C),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: C
                    })
                })
            })
        }
    }

    function __({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, hr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Ss(r, e), i && e.dispatch(gr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function vr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && r ? Qr(r, Ii) : null;
        (0, hr.default)(o, u => {
            let f = (0, ht.default)(u, "actionItem.config.target.boundaryMode"),
                h = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && h) {
                if (s && f && !fs(s, u.element)) return;
                Ss(u, e), u.verbose && e.dispatch(gr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function tn({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: f
        } = e.getState(), {
            events: h
        } = u, p = h[t] || {}, {
            mediaQueries: d = u.mediaQueryKeys
        } = p, E = (0, ht.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: I,
            useFirstGroupAsInitialState: _
        } = E;
        if (!I || !I.length) return !1;
        o >= I.length && (0, ht.default)(p, "config.loop") && (o = 0), o === 0 && _ && o++;
        let m = (o === 0 || o === 1 && _) && Ts(p.action ? .actionTypeId) ? p.config.delay : void 0,
            C = (0, ht.default)(I, [o, "actionItems"], []);
        if (!C.length || !wi(d, f.mediaQueryKey)) return !1;
        let A = f.hasBoundaryNodes && r ? Qr(r, Ii) : null,
            R = Hk(C),
            P = !1;
        return C.forEach((L, H) => {
            let {
                config: z,
                actionTypeId: $
            } = L, J = Ai($), {
                target: te
            } = z;
            if (!te) return;
            let M = te.boundaryMode ? A : null;
            Oi({
                config: z,
                event: p,
                eventTarget: r,
                elementRoot: M,
                elementApi: qe
            }).forEach((q, K) => {
                let B = J ? ws($)(q, L) : null,
                    re = J ? eV($)(q, L) : null;
                P = !0;
                let ne = R === H && K === 0,
                    F = Wk({
                        element: q,
                        actionItem: L
                    }),
                    X = Os({
                        element: q,
                        actionItem: L,
                        elementApi: qe
                    }, B);
                As({
                    store: e,
                    element: q,
                    actionItem: L,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ne,
                    computedStyle: F,
                    destination: X,
                    immediate: a,
                    verbose: s,
                    pluginInstance: B,
                    pluginDuration: re,
                    instanceDelay: m
                })
            })
        }), P
    }

    function As(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: f,
            eventId: h
        } = n, p = !u, d = Vk(), {
            ixElements: E,
            ixSession: I,
            ixData: _
        } = t.getState(), w = kk(E, i), {
            refState: m
        } = E[w] || {}, C = ds(i), A = I.reducedMotion && jo[o.actionTypeId], R;
        if (A && u) switch (_.events[h] ? .eventTypeId) {
            case $e.MOUSE_MOVE:
            case $e.MOUSE_MOVE_IN_VIEWPORT:
                R = f;
                break;
            default:
                R = .5;
                break
        }
        let P = Xk(i, m, r, o, qe, s);
        if (t.dispatch(is({
                instanceId: d,
                elementId: w,
                origin: P,
                refType: C,
                skipMotion: A,
                skipToValue: R,
                ...n
            })), b_(document.body, "ix2-animation-started", d), a) {
            IV(t, d);
            return
        }
        Gt({
            store: t,
            select: ({
                ixInstances: L
            }) => L[d],
            onChange: T_
        }), p && t.dispatch(di(d, I.tick))
    }

    function Ss(e, t) {
        b_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === v_ && Yk(o, n, qe), t.dispatch(os(e.id))
    }

    function b_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function IV(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(di(t, 0)), e.dispatch(fi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        T_(n[t], e)
    }

    function T_(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: f,
            groupIndex: h,
            eventId: p,
            eventTarget: d,
            eventStateKey: E,
            actionListId: I,
            isCarrier: _,
            styleProp: w,
            verbose: m,
            pluginInstance: C
        } = e, {
            ixData: A,
            ixSession: R
        } = t.getState(), {
            events: P
        } = A, L = P[p] || {}, {
            mediaQueries: H = A.mediaQueryKeys
        } = L;
        if (wi(H, R.mediaQueryKey) && (n || r || i)) {
            if (f || u === Uk && i) {
                t.dispatch(as(o, s, f, a));
                let {
                    ixElements: z
                } = t.getState(), {
                    ref: $,
                    refType: J,
                    refState: te
                } = z[o] || {}, M = te && te[s];
                (J === v_ || Ai(s)) && Bk($, te, M, p, a, w, qe, u, C)
            }
            if (i) {
                if (_) {
                    let z = tn({
                        store: t,
                        eventId: p,
                        eventTarget: d,
                        eventStateKey: E,
                        actionListId: I,
                        groupIndex: h + 1,
                        verbose: m
                    });
                    m && !z && t.dispatch(gr({
                        actionListId: I,
                        isPlaying: !1
                    }))
                }
                Ss(e, t)
            }
        }
    }
    var c_, ht, l_, f_, d_, p_, hr, g_, Ti, Gk, Ts, Is, Ii, v_, Uk, s_, Oi, kk, Os, Gt, Vk, Bk, h_, Hk, Wk, Xk, jk, zk, Kk, wi, Yk, $k, Qk, Zk, Jk, Ai, ws, eV, u_, tV, rV, hV, yV, mV, _V, bs = he(() => {
        "use strict";
        c_ = le(ba()), ht = le(jn()), l_ = le(FE()), f_ = le(uy()), d_ = le(ly()), p_ = le(dy()), hr = le(yy()), g_ = le(wy());
        Ge();
        Ti = le(Dt());
        pi();
        Ny();
        a_();
        Gk = Object.keys(On), Ts = e => Gk.includes(e), {
            COLON_DELIMITER: Is,
            BOUNDARY_SELECTOR: Ii,
            HTML_ELEMENT: v_,
            RENDER_GENERAL: Uk,
            W_MOD_IX: s_
        } = Ce, {
            getAffectedElements: Oi,
            getElementId: kk,
            getDestinationValues: Os,
            observeStore: Gt,
            getInstanceId: Vk,
            renderHTMLElement: Bk,
            clearAllStyles: h_,
            getMaxDurationItemIndex: Hk,
            getComputedStyle: Wk,
            getInstanceOrigin: Xk,
            reduceListToGroup: jk,
            shouldNamespaceEventParameter: zk,
            getNamespacedParameterId: Kk,
            shouldAllowMediaQuery: wi,
            cleanupHTMLElement: Yk,
            clearObjectCache: $k,
            stringifyTarget: Qk,
            mediaQueriesEqual: Zk,
            shallowEqual: Jk
        } = Ti.IX2VanillaUtils, {
            isPluginType: Ai,
            createPluginInstance: ws,
            getPluginDuration: eV
        } = Ti.IX2VanillaPlugins, u_ = navigator.userAgent, tV = u_.match(/iPad/i) || u_.match(/iPhone/), rV = 12;
        hV = ["resize", "orientationchange"];
        yV = (e, t) => (0, f_.default)((0, p_.default)(e, t), d_.default), mV = (e, t) => {
            (0, hr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + Is + o;
                    t(i, n, a)
                })
            })
        }, _V = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Oi({
                config: t,
                elementApi: qe
            })
        }
    });
    var w_ = c(Et => {
        "use strict";
        var OV = fn().default,
            wV = au().default;
        Object.defineProperty(Et, "__esModule", {
            value: !0
        });
        Et.actions = void 0;
        Et.destroy = O_;
        Et.init = RV;
        Et.setEnv = CV;
        Et.store = void 0;
        Xl();
        var AV = Ho(),
            SV = wV((EE(), tt(hE))),
            xs = (bs(), tt(I_)),
            xV = OV((pi(), tt(Sy)));
        Et.actions = xV;
        var Cs = Et.store = (0, AV.createStore)(SV.default);

        function CV(e) {
            e() && (0, xs.observeRequests)(Cs)
        }

        function RV(e) {
            O_(), (0, xs.startEngine)({
                store: Cs,
                rawData: e,
                allowEvents: !0
            })
        }

        function O_() {
            (0, xs.stopEngine)(Cs)
        }
    });
    var C_ = c((Qj, x_) => {
        "use strict";
        var A_ = Ve(),
            S_ = w_();
        S_.setEnv(A_.env);
        A_.define("ix2", x_.exports = function() {
            return S_
        })
    });
    var N_ = c((Zj, R_) => {
        "use strict";
        var Er = Ve();
        Er.define("links", R_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Er.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                f = /index\.(html|php)$/,
                h = /\/$/,
                p, d;
            r.ready = r.design = r.preview = E;

            function E() {
                i = o && Er.env("design"), d = Er.env("slug") || a.pathname || "", Er.scroll.off(_), p = [];
                for (var m = document.links, C = 0; C < m.length; ++C) I(m[C]);
                p.length && (Er.scroll.on(_), _())
            }

            function I(m) {
                if (!m.getAttribute("hreflang")) {
                    var C = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (s.href = C, !(C.indexOf(":") >= 0)) {
                        var A = e(m);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var R = e(s.hash);
                            R.length && p.push({
                                link: A,
                                sec: R,
                                active: !1
                            });
                            return
                        }
                        if (!(C === "#" || C === "")) {
                            var P = s.href === a.href || C === d || f.test(C) && h.test(d);
                            w(A, u, P)
                        }
                    }
                }
            }

            function _() {
                var m = n.scrollTop(),
                    C = n.height();
                t.each(p, function(A) {
                    if (!A.link.attr("hreflang")) {
                        var R = A.link,
                            P = A.sec,
                            L = P.offset().top,
                            H = P.outerHeight(),
                            z = C * .5,
                            $ = P.is(":visible") && L + H - z >= m && L + z <= m + C;
                        A.active !== $ && (A.active = $, w(R, u, $))
                    }
                })
            }

            function w(m, C, A) {
                var R = m.hasClass(C);
                A && R || !A && !R || (A ? m.addClass(C) : m.removeClass(C))
            }
            return r
        })
    });
    var P_ = c((Jj, L_) => {
        "use strict";
        var Ci = Ve();
        Ci.define("scroll", L_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = I() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(M) {
                    window.setTimeout(M, 15)
                },
                u = Ci.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                h = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
                d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                E = document.createElement("style");
            E.appendChild(document.createTextNode(d));

            function I() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function w(M) {
                return _.test(M.hash) && M.host + M.pathname === r.host + r.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function C() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }

            function A(M, O) {
                var q;
                switch (O) {
                    case "add":
                        q = M.attr("tabindex"), q ? M.attr("data-wf-tabindex-swap", q) : M.attr("tabindex", "-1");
                        break;
                    case "remove":
                        q = M.attr("data-wf-tabindex-swap"), q ? (M.attr("tabindex", q), M.removeAttr("data-wf-tabindex-swap")) : M.removeAttr("tabindex");
                        break
                }
                M.toggleClass("wf-force-outline-none", O === "add")
            }

            function R(M) {
                var O = M.currentTarget;
                if (!(Ci.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                    var q = w(O) ? O.hash : "";
                    if (q !== "") {
                        var K = e(q);
                        K.length && (M && (M.preventDefault(), M.stopPropagation()), P(q, M), window.setTimeout(function() {
                            L(K, function() {
                                A(K, "add"), K.get(0).focus({
                                    preventScroll: !0
                                }), A(K, "remove")
                            })
                        }, M ? 0 : 300))
                    }
                }
            }

            function P(M) {
                if (r.hash !== M && n && n.pushState && !(Ci.env.chrome && r.protocol === "file:")) {
                    var O = n.state && n.state.hash;
                    O !== M && n.pushState({
                        hash: M
                    }, "", M)
                }
            }

            function L(M, O) {
                var q = i.scrollTop(),
                    K = H(M);
                if (q !== K) {
                    var B = z(M, q, K),
                        re = Date.now(),
                        ne = function() {
                            var F = Date.now() - re;
                            window.scroll(0, $(q, K, F, B)), F <= B ? s(ne) : typeof O == "function" && O()
                        };
                    s(ne)
                }
            }

            function H(M) {
                var O = e(f),
                    q = O.css("position") === "fixed" ? O.outerHeight() : 0,
                    K = M.offset().top - q;
                if (M.data("scroll") === "mid") {
                    var B = i.height() - q,
                        re = M.outerHeight();
                    re < B && (K -= Math.round((B - re) / 2))
                }
                return K
            }

            function z(M, O, q) {
                if (C()) return 0;
                var K = 1;
                return a.add(M).each(function(B, re) {
                    var ne = parseFloat(re.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (K = ne)
                }), (472.143 * Math.log(Math.abs(O - q) + 125) - 2e3) * K
            }

            function $(M, O, q, K) {
                return q > K ? O : M + (O - M) * J(q / K)
            }

            function J(M) {
                return M < .5 ? 4 * M * M * M : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1
            }

            function te() {
                var {
                    WF_CLICK_EMPTY: M,
                    WF_CLICK_SCROLL: O
                } = t;
                o.on(O, p, R), o.on(M, h, function(q) {
                    q.preventDefault()
                }), document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: te
            }
        })
    });
    var M_ = c((ez, q_) => {
        "use strict";
        var NV = Ve();
        NV.define("touch", q_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    f, h;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", d, !1), o.addEventListener("touchend", E, !1), o.addEventListener("touchcancel", I, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", d, !1), o.addEventListener("mouseup", E, !1), o.addEventListener("mouseout", I, !1);

                function p(w) {
                    var m = w.touches;
                    m && m.length > 1 || (a = !0, m ? (s = !0, f = m[0].clientX) : f = w.clientX, h = f)
                }

                function d(w) {
                    if (a) {
                        if (s && w.type === "mousemove") {
                            w.preventDefault(), w.stopPropagation();
                            return
                        }
                        var m = w.touches,
                            C = m ? m[0].clientX : w.clientX,
                            A = C - h;
                        h = C, Math.abs(A) > u && r && String(r()) === "" && (i("swipe", w, {
                            direction: A > 0 ? "right" : "left"
                        }), I())
                    }
                }

                function E(w) {
                    if (a && (a = !1, s && w.type === "mouseup")) {
                        w.preventDefault(), w.stopPropagation(), s = !1;
                        return
                    }
                }

                function I() {
                    a = !1
                }

                function _() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", d, !1), o.removeEventListener("touchend", E, !1), o.removeEventListener("touchcancel", I, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", d, !1), o.removeEventListener("mouseup", E, !1), o.removeEventListener("mouseout", I, !1), o = null
                }
                this.destroy = _
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var G_ = c((tz, D_) => {
        "use strict";
        var Ut = Ve(),
            LV = ln(),
            Je = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            F_ = !0,
            PV = /^#[a-zA-Z0-9\-_]+$/;
        Ut.define("dropdown", D_.exports = function(e, t) {
            var r = t.debounce,
                n = {},
                i = Ut.env(),
                o = !1,
                a, s = Ut.env.touch,
                u = ".w-dropdown",
                f = "w--open",
                h = LV.triggers,
                p = 900,
                d = "focusout" + u,
                E = "keydown" + u,
                I = "mouseenter" + u,
                _ = "mousemove" + u,
                w = "mouseleave" + u,
                m = (s ? "click" : "mouseup") + u,
                C = "w-close" + u,
                A = "setting" + u,
                R = e(document),
                P;
            n.ready = L, n.design = function() {
                o && O(), o = !1, L()
            }, n.preview = function() {
                o = !0, L()
            };

            function L() {
                a = i && Ut.env("design"), P = R.find(u), P.each(H)
            }

            function H(v, V) {
                var W = e(V),
                    N = e.data(V, u);
                N || (N = e.data(V, u, {
                    open: !1,
                    el: W,
                    config: {},
                    selectedIdx: -1
                })), N.toggle = N.el.children(".w-dropdown-toggle"), N.list = N.el.children(".w-dropdown-list"), N.links = N.list.find("a:not(.w-dropdown .w-dropdown a)"), N.complete = B(N), N.mouseLeave = ne(N), N.mouseUpOutside = K(N), N.mouseMoveOutside = F(N), z(N);
                var oe = N.toggle.attr("id"),
                    _e = N.list.attr("id");
                oe || (oe = "w-dropdown-toggle-" + v), _e || (_e = "w-dropdown-list-" + v), N.toggle.attr("id", oe), N.toggle.attr("aria-controls", _e), N.toggle.attr("aria-haspopup", "menu"), N.toggle.attr("aria-expanded", "false"), N.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), N.toggle.prop("tagName") !== "BUTTON" && (N.toggle.attr("role", "button"), N.toggle.attr("tabindex") || N.toggle.attr("tabindex", "0")), N.list.attr("id", _e), N.list.attr("aria-labelledby", oe), N.links.each(function(g, G) {
                    G.hasAttribute("tabindex") || G.setAttribute("tabindex", "0"), PV.test(G.hash) && G.addEventListener("click", M.bind(null, N))
                }), N.el.off(u), N.toggle.off(u), N.nav && N.nav.off(u);
                var se = J(N, F_);
                a && N.el.on(A, $(N)), a || (i && (N.hovering = !1, M(N)), N.config.hover && N.toggle.on(I, re(N)), N.el.on(C, se), N.el.on(E, X(N)), N.el.on(d, D(N)), N.toggle.on(m, se), N.toggle.on(E, U(N)), N.nav = N.el.closest(".w-nav"), N.nav.on(C, se))
            }

            function z(v) {
                var V = Number(v.el.css("z-index"));
                v.manageZ = V === p || V === p + 1, v.config = {
                    hover: v.el.attr("data-hover") === "true" && !s,
                    delay: v.el.attr("data-delay")
                }
            }

            function $(v) {
                return function(V, W) {
                    W = W || {}, z(v), W.open === !0 && te(v, !0), W.open === !1 && M(v, {
                        immediate: !0
                    })
                }
            }

            function J(v, V) {
                return r(function(W) {
                    if (v.open || W && W.type === "w-close") return M(v, {
                        forceClose: V
                    });
                    te(v)
                })
            }

            function te(v) {
                if (!v.open) {
                    q(v), v.open = !0, v.list.addClass(f), v.toggle.addClass(f), v.toggle.attr("aria-expanded", "true"), h.intro(0, v.el[0]), Ut.redraw.up(), v.manageZ && v.el.css("z-index", p + 1);
                    var V = Ut.env("editor");
                    a || R.on(m, v.mouseUpOutside), v.hovering && !V && v.el.on(w, v.mouseLeave), v.hovering && V && R.on(_, v.mouseMoveOutside), window.clearTimeout(v.delayId)
                }
            }

            function M(v, {
                immediate: V,
                forceClose: W
            } = {}) {
                if (v.open && !(v.config.hover && v.hovering && !W)) {
                    v.toggle.attr("aria-expanded", "false"), v.open = !1;
                    var N = v.config;
                    if (h.outro(0, v.el[0]), R.off(m, v.mouseUpOutside), R.off(_, v.mouseMoveOutside), v.el.off(w, v.mouseLeave), window.clearTimeout(v.delayId), !N.delay || V) return v.complete();
                    v.delayId = window.setTimeout(v.complete, N.delay)
                }
            }

            function O() {
                R.find(u).each(function(v, V) {
                    e(V).triggerHandler(C)
                })
            }

            function q(v) {
                var V = v.el[0];
                P.each(function(W, N) {
                    var oe = e(N);
                    oe.is(V) || oe.has(V).length || oe.triggerHandler(C)
                })
            }

            function K(v) {
                return v.mouseUpOutside && R.off(m, v.mouseUpOutside), r(function(V) {
                    if (v.open) {
                        var W = e(V.target);
                        if (!W.closest(".w-dropdown-toggle").length) {
                            var N = e.inArray(v.el[0], W.parents(u)) === -1,
                                oe = Ut.env("editor");
                            if (N) {
                                if (oe) {
                                    var _e = W.parents().length === 1 && W.parents("svg").length === 1,
                                        se = W.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (_e || se) return
                                }
                                M(v)
                            }
                        }
                    }
                })
            }

            function B(v) {
                return function() {
                    v.list.removeClass(f), v.toggle.removeClass(f), v.manageZ && v.el.css("z-index", "")
                }
            }

            function re(v) {
                return function() {
                    v.hovering = !0, te(v)
                }
            }

            function ne(v) {
                return function() {
                    v.hovering = !1, v.links.is(":focus") || M(v)
                }
            }

            function F(v) {
                return r(function(V) {
                    if (v.open) {
                        var W = e(V.target),
                            N = e.inArray(v.el[0], W.parents(u)) === -1;
                        if (N) {
                            var oe = W.parents(".w-editor-bem-EditorHoverControls").length,
                                _e = W.parents(".w-editor-bem-RTToolbar").length,
                                se = e(".w-editor-bem-EditorOverlay"),
                                g = se.find(".w-editor-edit-outline").length || se.find(".w-editor-bem-RTToolbar").length;
                            if (oe || _e || g) return;
                            v.hovering = !1, M(v)
                        }
                    }
                })
            }

            function X(v) {
                return function(V) {
                    if (!(a || !v.open)) switch (v.selectedIdx = v.links.index(document.activeElement), V.keyCode) {
                        case Je.HOME:
                            return v.open ? (v.selectedIdx = 0, Y(v), V.preventDefault()) : void 0;
                        case Je.END:
                            return v.open ? (v.selectedIdx = v.links.length - 1, Y(v), V.preventDefault()) : void 0;
                        case Je.ESCAPE:
                            return M(v), v.toggle.focus(), V.stopPropagation();
                        case Je.ARROW_RIGHT:
                        case Je.ARROW_DOWN:
                            return v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1), Y(v), V.preventDefault();
                        case Je.ARROW_LEFT:
                        case Je.ARROW_UP:
                            return v.selectedIdx = Math.max(-1, v.selectedIdx - 1), Y(v), V.preventDefault()
                    }
                }
            }

            function Y(v) {
                v.links[v.selectedIdx] && v.links[v.selectedIdx].focus()
            }

            function U(v) {
                var V = J(v, F_);
                return function(W) {
                    if (!a) {
                        if (!v.open) switch (W.keyCode) {
                            case Je.ARROW_UP:
                            case Je.ARROW_DOWN:
                                return W.stopPropagation()
                        }
                        switch (W.keyCode) {
                            case Je.SPACE:
                            case Je.ENTER:
                                return V(), W.stopPropagation(), W.preventDefault()
                        }
                    }
                }
            }

            function D(v) {
                return r(function(V) {
                    var {
                        relatedTarget: W,
                        target: N
                    } = V, oe = v.el[0], _e = oe.contains(W) || oe.contains(N);
                    return _e || M(v), V.stopPropagation()
                })
            }
            return n
        })
    });
    var U_ = c(Rs => {
        "use strict";
        Object.defineProperty(Rs, "__esModule", {
            value: !0
        });
        Rs.default = qV;

        function qV(e, t, r, n, i, o, a, s, u, f, h, p, d) {
            return function(E) {
                e(E);
                var I = E.form,
                    _ = {
                        name: I.attr("data-name") || I.attr("name") || "Untitled Form",
                        pageId: I.attr("data-wf-page-id") || "",
                        elementId: I.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(I.html()),
                        trackingCookies: n()
                    };
                let w = I.attr("data-wf-flow");
                w && (_.wfFlow = w), i(E);
                var m = o(I, _.fields);
                if (m) return a(m);
                if (_.fileUploads = s(I), u(E), !f) {
                    h(E);
                    return
                }
                p.ajax({
                    url: d,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(C) {
                    C && C.code === 200 && (E.success = !0), h(E)
                }).fail(function() {
                    h(E)
                })
            }
        }
    });
    var V_ = c((nz, k_) => {
        "use strict";
        var Ri = Ve();
        Ri.define("forms", k_.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                u, f = /e(-)?mail/i,
                h = /^\S+@\S+$/,
                p = window.alert,
                d = Ri.env(),
                E, I, _, w = /list-manage[1-9]?.com/i,
                m = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                C(), !d && !E && R()
            };

            function C() {
                u = e("html").attr("data-wf-site"), I = "https://webflow.com/api/v1/form/" + u, a && I.indexOf("https://webflow.com") >= 0 && (I = I.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${I}/signFile`, i = e(s + " form"), i.length && i.each(A)
            }

            function A(F, X) {
                var Y = e(X),
                    U = e.data(X, s);
                U || (U = e.data(X, s, {
                    form: Y
                })), P(U);
                var D = Y.closest("div.w-form");
                U.done = D.find("> .w-form-done"), U.fail = D.find("> .w-form-fail"), U.fileUploads = D.find(".w-file-upload"), U.fileUploads.each(function(W) {
                    B(W, U)
                });
                var v = U.form.attr("aria-label") || U.form.attr("data-name") || "Form";
                U.done.attr("aria-label") || U.form.attr("aria-label", v), U.done.attr("tabindex", "-1"), U.done.attr("role", "region"), U.done.attr("aria-label") || U.done.attr("aria-label", v + " success"), U.fail.attr("tabindex", "-1"), U.fail.attr("role", "region"), U.fail.attr("aria-label") || U.fail.attr("aria-label", v + " failure");
                var V = U.action = Y.attr("action");
                if (U.handler = null, U.redirect = Y.attr("data-redirect"), w.test(V)) {
                    U.handler = O;
                    return
                }
                if (!V) {
                    if (u) {
                        U.handler = (() => {
                            let W = U_().default;
                            return W(P, o, Ri, J, K, H, p, z, L, u, q, e, I)
                        })();
                        return
                    }
                    m()
                }
            }

            function R() {
                E = !0, n.on("submit", s + " form", function(W) {
                    var N = e.data(this, s);
                    N.handler && (N.evt = W, N.handler(N))
                });
                let F = ".w-checkbox-input",
                    X = ".w-radio-input",
                    Y = "w--redirected-checked",
                    U = "w--redirected-focus",
                    D = "w--redirected-focus-visible",
                    v = ":focus-visible, [data-wf-focus-visible]",
                    V = [
                        ["checkbox", F],
                        ["radio", X]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + F + ")", W => {
                    e(W.target).siblings(F).toggleClass(Y)
                }), n.on("change", s + ' form input[type="radio"]', W => {
                    e(`input[name="${W.target.name}"]:not(${F})`).map((oe, _e) => e(_e).siblings(X).removeClass(Y));
                    let N = e(W.target);
                    N.hasClass("w-radio-input") || N.siblings(X).addClass(Y)
                }), V.forEach(([W, N]) => {
                    n.on("focus", s + ` form input[type="${W}"]:not(` + N + ")", oe => {
                        e(oe.target).siblings(N).addClass(U), e(oe.target).filter(v).siblings(N).addClass(D)
                    }), n.on("blur", s + ` form input[type="${W}"]:not(` + N + ")", oe => {
                        e(oe.target).siblings(N).removeClass(`${U} ${D}`)
                    })
                })
            }

            function P(F) {
                var X = F.btn = F.form.find(':input[type="submit"]');
                F.wait = F.btn.attr("data-wait") || null, F.success = !1, X.prop("disabled", !1), F.label && X.val(F.label)
            }

            function L(F) {
                var X = F.btn,
                    Y = F.wait;
                X.prop("disabled", !0), Y && (F.label = X.val(), X.val(Y))
            }

            function H(F, X) {
                var Y = null;
                return X = X || {}, F.find(':input:not([type="submit"]):not([type="file"])').each(function(U, D) {
                    var v = e(D),
                        V = v.attr("type"),
                        W = v.attr("data-name") || v.attr("name") || "Field " + (U + 1);
                    W = encodeURIComponent(W);
                    var N = v.val();
                    if (V === "checkbox") N = v.is(":checked");
                    else if (V === "radio") {
                        if (X[W] === null || typeof X[W] == "string") return;
                        N = F.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof N == "string" && (N = e.trim(N)), X[W] = N, Y = Y || te(v, V, W, N)
                }), Y
            }

            function z(F) {
                var X = {};
                return F.find(':input[type="file"]').each(function(Y, U) {
                    var D = e(U),
                        v = D.attr("data-name") || D.attr("name") || "File " + (Y + 1),
                        V = D.attr("data-value");
                    typeof V == "string" && (V = e.trim(V)), X[v] = V
                }), X
            }
            let $ = {
                _mkto_trk: "marketo"
            };

            function J() {
                return document.cookie.split("; ").reduce(function(X, Y) {
                    let U = Y.split("="),
                        D = U[0];
                    if (D in $) {
                        let v = $[D],
                            V = U.slice(1).join("=");
                        X[v] = V
                    }
                    return X
                }, {})
            }

            function te(F, X, Y, U) {
                var D = null;
                return X === "password" ? D = "Passwords cannot be submitted." : F.attr("required") ? U ? f.test(F.attr("type")) && (h.test(U) || (D = "Please enter a valid email address for: " + Y)) : D = "Please fill out the required field: " + Y : Y === "g-recaptcha-response" && !U && (D = "Please confirm you\u2019re not a robot."), D
            }

            function M(F) {
                K(F), q(F)
            }

            function O(F) {
                P(F);
                var X = F.form,
                    Y = {};
                if (/^https/.test(o.href) && !/^https/.test(F.action)) {
                    X.attr("method", "post");
                    return
                }
                K(F);
                var U = H(X, Y);
                if (U) return p(U);
                L(F);
                var D;
                t.each(Y, function(N, oe) {
                    f.test(oe) && (Y.EMAIL = N), /^((full[ _-]?)?name)$/i.test(oe) && (D = N), /^(first[ _-]?name)$/i.test(oe) && (Y.FNAME = N), /^(last[ _-]?name)$/i.test(oe) && (Y.LNAME = N)
                }), D && !Y.FNAME && (D = D.split(" "), Y.FNAME = D[0], Y.LNAME = Y.LNAME || D[1]);
                var v = F.action.replace("/post?", "/post-json?") + "&c=?",
                    V = v.indexOf("u=") + 2;
                V = v.substring(V, v.indexOf("&", V));
                var W = v.indexOf("id=") + 3;
                W = v.substring(W, v.indexOf("&", W)), Y["b_" + V + "_" + W] = "", e.ajax({
                    url: v,
                    data: Y,
                    dataType: "jsonp"
                }).done(function(N) {
                    F.success = N.result === "success" || /already/.test(N.msg), F.success || console.info("MailChimp error: " + N.msg), q(F)
                }).fail(function() {
                    q(F)
                })
            }

            function q(F) {
                var X = F.form,
                    Y = F.redirect,
                    U = F.success;
                if (U && Y) {
                    Ri.location(Y);
                    return
                }
                F.done.toggle(U), F.fail.toggle(!U), U ? F.done.focus() : F.fail.focus(), X.toggle(!U), P(F)
            }

            function K(F) {
                F.evt && F.evt.preventDefault(), F.evt = null
            }

            function B(F, X) {
                if (!X.fileUploads || !X.fileUploads[F]) return;
                var Y, U = e(X.fileUploads[F]),
                    D = U.find("> .w-file-upload-default"),
                    v = U.find("> .w-file-upload-uploading"),
                    V = U.find("> .w-file-upload-success"),
                    W = U.find("> .w-file-upload-error"),
                    N = D.find(".w-file-upload-input"),
                    oe = D.find(".w-file-upload-label"),
                    _e = oe.children(),
                    se = W.find(".w-file-upload-error-msg"),
                    g = V.find(".w-file-upload-file"),
                    G = V.find(".w-file-remove-link"),
                    Q = g.find(".w-file-upload-file-name"),
                    j = se.attr("data-w-size-error"),
                    ge = se.attr("data-w-type-error"),
                    St = se.attr("data-w-generic-error");
                if (d || oe.on("click keydown", function(b) {
                        b.type === "keydown" && b.which !== 13 && b.which !== 32 || (b.preventDefault(), N.click())
                    }), oe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), G.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), d) N.on("click", function(b) {
                    b.preventDefault()
                }), oe.on("click", function(b) {
                    b.preventDefault()
                }), _e.on("click", function(b) {
                    b.preventDefault()
                });
                else {
                    G.on("click keydown", function(b) {
                        if (b.type === "keydown") {
                            if (b.which !== 13 && b.which !== 32) return;
                            b.preventDefault()
                        }
                        N.removeAttr("data-value"), N.val(""), Q.html(""), D.toggle(!0), V.toggle(!1), oe.focus()
                    }), N.on("change", function(b) {
                        Y = b.target && b.target.files && b.target.files[0], Y && (D.toggle(!1), W.toggle(!1), v.toggle(!0), v.focus(), Q.text(Y.name), S() || L(X), X.fileUploads[F].uploading = !0, re(Y, y))
                    });
                    var lt = oe.outerHeight();
                    N.height(lt), N.width(1)
                }

                function l(b) {
                    var x = b.responseJSON && b.responseJSON.msg,
                        Z = St;
                    typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0 ? Z = ge : typeof x == "string" && x.indexOf("MaxFileSizeError") === 0 && (Z = j), se.text(Z), N.removeAttr("data-value"), N.val(""), v.toggle(!1), D.toggle(!0), W.toggle(!0), W.focus(), X.fileUploads[F].uploading = !1, S() || P(X)
                }

                function y(b, x) {
                    if (b) return l(b);
                    var Z = x.fileName,
                        ie = x.postData,
                        pe = x.fileId,
                        k = x.s3Url;
                    N.attr("data-value", pe), ne(k, ie, Y, Z, T)
                }

                function T(b) {
                    if (b) return l(b);
                    v.toggle(!1), V.css("display", "inline-block"), V.focus(), X.fileUploads[F].uploading = !1, S() || P(X)
                }

                function S() {
                    var b = X.fileUploads && X.fileUploads.toArray() || [];
                    return b.some(function(x) {
                        return x.uploading
                    })
                }
            }

            function re(F, X) {
                var Y = new URLSearchParams({
                    name: F.name,
                    size: F.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${Y}`,
                    crossDomain: !0
                }).done(function(U) {
                    X(null, U)
                }).fail(function(U) {
                    X(U)
                })
            }

            function ne(F, X, Y, U, D) {
                var v = new FormData;
                for (var V in X) v.append(V, X[V]);
                v.append("file", Y, U), e.ajax({
                    type: "POST",
                    url: F,
                    data: v,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    D(null)
                }).fail(function(W) {
                    D(W)
                })
            }
            return r
        })
    });
    var H_ = c((iz, B_) => {
        "use strict";
        var At = Ve(),
            MV = ln(),
            xe = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        At.define("navbar", B_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, u, f, h, p = At.env(),
                d = '<div class="w-nav-overlay" data-wf-ignore />',
                E = ".w-nav",
                I = "w--open",
                _ = "w--nav-dropdown-open",
                w = "w--nav-dropdown-toggle-open",
                m = "w--nav-dropdown-list-open",
                C = "w--nav-link-open",
                A = MV.triggers,
                R = e();
            r.ready = r.design = r.preview = P, r.destroy = function() {
                R = e(), L(), u && u.length && u.each(J)
            };

            function P() {
                f = p && At.env("design"), h = At.env("editor"), s = e(document.body), u = o.find(E), u.length && (u.each($), L(), H())
            }

            function L() {
                At.resize.off(z)
            }

            function H() {
                At.resize.on(z)
            }

            function z() {
                u.each(D)
            }

            function $(g, G) {
                var Q = e(G),
                    j = e.data(G, E);
                j || (j = e.data(G, E, {
                    open: !1,
                    el: Q,
                    config: {},
                    selectedIdx: -1
                })), j.menu = Q.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = Q.find(".w-nav-button"), j.container = Q.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + g, j.outside = Y(j);
                var ge = Q.find(".w-nav-brand");
                ge && ge.attr("href") === "/" && ge.attr("aria-label") == null && ge.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(E), j.button.off(E), j.menu.off(E), O(j), f ? (te(j), j.el.on("setting" + E, q(j))) : (M(j), j.button.on("click" + E, F(j)), j.menu.on("click" + E, "a", X(j)), j.button.on("keydown" + E, K(j)), j.el.on("keydown" + E, B(j))), D(g, G)
            }

            function J(g, G) {
                var Q = e.data(G, E);
                Q && (te(Q), e.removeData(G, E))
            }

            function te(g) {
                g.overlay && (se(g, !0), g.overlay.remove(), g.overlay = null)
            }

            function M(g) {
                g.overlay || (g.overlay = e(d).appendTo(g.el), g.overlay.attr("id", g.overlayContainerId), g.parent = g.menu.parent(), se(g, !0))
            }

            function O(g) {
                var G = {},
                    Q = g.config || {},
                    j = G.animation = g.el.attr("data-animation") || "default";
                G.animOver = /^over/.test(j), G.animDirect = /left$/.test(j) ? -1 : 1, Q.animation !== j && g.open && t.defer(ne, g), G.easing = g.el.attr("data-easing") || "ease", G.easing2 = g.el.attr("data-easing2") || "ease";
                var ge = g.el.attr("data-duration");
                G.duration = ge != null ? Number(ge) : 400, G.docHeight = g.el.attr("data-doc-height"), g.config = G
            }

            function q(g) {
                return function(G, Q) {
                    Q = Q || {};
                    var j = i.width();
                    O(g), Q.open === !0 && oe(g, !0), Q.open === !1 && se(g, !0), g.open && t.defer(function() {
                        j !== i.width() && ne(g)
                    })
                }
            }

            function K(g) {
                return function(G) {
                    switch (G.keyCode) {
                        case xe.SPACE:
                        case xe.ENTER:
                            return F(g)(), G.preventDefault(), G.stopPropagation();
                        case xe.ESCAPE:
                            return se(g), G.preventDefault(), G.stopPropagation();
                        case xe.ARROW_RIGHT:
                        case xe.ARROW_DOWN:
                        case xe.HOME:
                        case xe.END:
                            return g.open ? (G.keyCode === xe.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, re(g), G.preventDefault(), G.stopPropagation()) : (G.preventDefault(), G.stopPropagation())
                    }
                }
            }

            function B(g) {
                return function(G) {
                    if (g.open) switch (g.selectedIdx = g.links.index(document.activeElement), G.keyCode) {
                        case xe.HOME:
                        case xe.END:
                            return G.keyCode === xe.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, re(g), G.preventDefault(), G.stopPropagation();
                        case xe.ESCAPE:
                            return se(g), g.button.focus(), G.preventDefault(), G.stopPropagation();
                        case xe.ARROW_LEFT:
                        case xe.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1), re(g), G.preventDefault(), G.stopPropagation();
                        case xe.ARROW_RIGHT:
                        case xe.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1), re(g), G.preventDefault(), G.stopPropagation()
                    }
                }
            }

            function re(g) {
                if (g.links[g.selectedIdx]) {
                    var G = g.links[g.selectedIdx];
                    G.focus(), X(G)
                }
            }

            function ne(g) {
                g.open && (se(g, !0), oe(g, !0))
            }

            function F(g) {
                return a(function() {
                    g.open ? se(g) : oe(g)
                })
            }

            function X(g) {
                return function(G) {
                    var Q = e(this),
                        j = Q.attr("href");
                    if (!At.validClick(G.currentTarget)) {
                        G.preventDefault();
                        return
                    }
                    j && j.indexOf("#") === 0 && g.open && se(g)
                }
            }

            function Y(g) {
                return g.outside && o.off("click" + E, g.outside),
                    function(G) {
                        var Q = e(G.target);
                        h && Q.closest(".w-editor-bem-EditorOverlay").length || U(g, Q)
                    }
            }
            var U = a(function(g, G) {
                if (g.open) {
                    var Q = G.closest(".w-nav-menu");
                    g.menu.is(Q) || se(g)
                }
            });

            function D(g, G) {
                var Q = e.data(G, E),
                    j = Q.collapsed = Q.button.css("display") !== "none";
                if (Q.open && !j && !f && se(Q, !0), Q.container.length) {
                    var ge = V(Q);
                    Q.links.each(ge), Q.dropdowns.each(ge)
                }
                Q.open && _e(Q)
            }
            var v = "max-width";

            function V(g) {
                var G = g.container.css(v);
                return G === "none" && (G = ""),
                    function(Q, j) {
                        j = e(j), j.css(v, ""), j.css(v) === "none" && j.css(v, G)
                    }
            }

            function W(g, G) {
                G.setAttribute("data-nav-menu-open", "")
            }

            function N(g, G) {
                G.removeAttribute("data-nav-menu-open")
            }

            function oe(g, G) {
                if (g.open) return;
                g.open = !0, g.menu.each(W), g.links.addClass(C), g.dropdowns.addClass(_), g.dropdownToggle.addClass(w), g.dropdownList.addClass(m), g.button.addClass(I);
                var Q = g.config,
                    j = Q.animation;
                (j === "none" || !n.support.transform || Q.duration <= 0) && (G = !0);
                var ge = _e(g),
                    St = g.menu.outerHeight(!0),
                    lt = g.menu.outerWidth(!0),
                    l = g.el.height(),
                    y = g.el[0];
                if (D(0, y), A.intro(0, y), At.redraw.up(), f || o.on("click" + E, g.outside), G) {
                    b();
                    return
                }
                var T = "transform " + Q.duration + "ms " + Q.easing;
                if (g.overlay && (R = g.menu.prev(), g.overlay.show().append(g.menu)), Q.animOver) {
                    n(g.menu).add(T).set({
                        x: Q.animDirect * lt,
                        height: ge
                    }).start({
                        x: 0
                    }).then(b), g.overlay && g.overlay.width(lt);
                    return
                }
                var S = l + St;
                n(g.menu).add(T).set({
                    y: -S
                }).start({
                    y: 0
                }).then(b);

                function b() {
                    g.button.attr("aria-expanded", "true")
                }
            }

            function _e(g) {
                var G = g.config,
                    Q = G.docHeight ? o.height() : s.height();
                return G.animOver ? g.menu.height(Q) : g.el.css("position") !== "fixed" && (Q -= g.el.outerHeight(!0)), g.overlay && g.overlay.height(Q), Q
            }

            function se(g, G) {
                if (!g.open) return;
                g.open = !1, g.button.removeClass(I);
                var Q = g.config;
                if ((Q.animation === "none" || !n.support.transform || Q.duration <= 0) && (G = !0), A.outro(0, g.el[0]), o.off("click" + E, g.outside), G) {
                    n(g.menu).stop(), y();
                    return
                }
                var j = "transform " + Q.duration + "ms " + Q.easing2,
                    ge = g.menu.outerHeight(!0),
                    St = g.menu.outerWidth(!0),
                    lt = g.el.height();
                if (Q.animOver) {
                    n(g.menu).add(j).start({
                        x: St * Q.animDirect
                    }).then(y);
                    return
                }
                var l = lt + ge;
                n(g.menu).add(j).start({
                    y: -l
                }).then(y);

                function y() {
                    g.menu.height(""), n(g.menu).set({
                        x: 0,
                        y: 0
                    }), g.menu.each(N), g.links.removeClass(C), g.dropdowns.removeClass(_), g.dropdownToggle.removeClass(w), g.dropdownList.removeClass(m), g.overlay && g.overlay.children().length && (R.length ? g.menu.insertAfter(R) : g.menu.prependTo(g.parent), g.overlay.attr("style", "").hide()), g.el.triggerHandler("w-close"), g.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    Ws();
    js();
    Ks();
    Qs();
    ln();
    C_();
    N_();
    P_();
    M_();
    G_();
    V_();
    H_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706707803848
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706950262319
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1706950298085
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-dropdown",
                "originalId": "6578952ef40def8d2602e3b1|9af0e6c0-5a75-0d03-b4e4-dd90f815cca6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-dropdown",
                "originalId": "6578952ef40def8d2602e3b1|9af0e6c0-5a75-0d03-b4e4-dd90f815cca6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676445881955
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-dropdown",
                "originalId": "6578952ef40def8d2602e3b1|9af0e6c0-5a75-0d03-b4e4-dd90f815cca6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-dropdown",
                "originalId": "6578952ef40def8d2602e3b1|9af0e6c0-5a75-0d03-b4e4-dd90f815cca6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1676445881955
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|091ec503-ed7f-1f60-9984-f88ad2121cd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|091ec503-ed7f-1f60-9984-f88ad2121cd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707228031575
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".light-right",
                "originalId": "661fa8c48456bfac79f572c9|ab4e6180-df41-01f3-410c-f058dc7cef76",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".light-right",
                "originalId": "661fa8c48456bfac79f572c9|ab4e6180-df41-01f3-410c-f058dc7cef76",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707228060418
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".light-left",
                "originalId": "661fa8c48456bfac79f572c9|5f1dee04-2979-b723-6b27-228a1f8c20df",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".light-left",
                "originalId": "661fa8c48456bfac79f572c9|5f1dee04-2979-b723-6b27-228a1f8c20df",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707228154274
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|a29af642-904c-0491-4af9-b7bf7fc03a53",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|a29af642-904c-0491-4af9-b7bf7fc03a53",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707249464837
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|b250e2da-a56a-e0b7-733a-41e9cc8c156b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|b250e2da-a56a-e0b7-733a-41e9cc8c156b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707249496769
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|f26fb5c7-b9c2-7f79-888b-3cd7cfc300b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|f26fb5c7-b9c2-7f79-888b-3cd7cfc300b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707249736945
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|4f210dc1-bed6-151e-b87b-b13bb8f2aac3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|4f210dc1-bed6-151e-b87b-b13bb8f2aac3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707249746345
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707249780964
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|6a23e066-6cc5-c106-43d6-1d82018288d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|6a23e066-6cc5-c106-43d6-1d82018288d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707249868167
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|c927e8fb-d6f7-1029-e55f-7a744cea4d43",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|c927e8fb-d6f7-1029-e55f-7a744cea4d43",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250072660
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|790d920b-b905-7274-43a4-3f813ab2129d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|790d920b-b905-7274-43a4-3f813ab2129d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250081767
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|33154870-32b4-58ad-8d67-e1e8a4492fd1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|33154870-32b4-58ad-8d67-e1e8a4492fd1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250092209
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|47f790a0-ede9-6fe6-5e04-0fe74b2d6ff0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|47f790a0-ede9-6fe6-5e04-0fe74b2d6ff0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250119823
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|13b72e93-2ac7-a9b6-148e-8023872677e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|13b72e93-2ac7-a9b6-148e-8023872677e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250125634
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|e2eff136-1a6f-3f24-9c87-e8b3e947170d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|e2eff136-1a6f-3f24-9c87-e8b3e947170d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250132244
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "eee5e1d6-e9bf-867e-eab4-9244e7761753",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "eee5e1d6-e9bf-867e-eab4-9244e7761753",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250195901
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "eee5e1d6-e9bf-867e-eab4-9244e776175a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "eee5e1d6-e9bf-867e-eab4-9244e776175a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250203885
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "38617db4-e05b-3e02-29bd-bfc4fc1f8d5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "38617db4-e05b-3e02-29bd-bfc4fc1f8d5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250215083
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-secondary",
                "originalId": "23da1563-1018-bc61-d640-42cf2e89f45f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-secondary",
                "originalId": "23da1563-1018-bc61-d640-42cf2e89f45f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250481567
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-secondary",
                "originalId": "23da1563-1018-bc61-d640-42cf2e89f45f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-secondary",
                "originalId": "23da1563-1018-bc61-d640-42cf2e89f45f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250481568
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572cd|c394c78f-e00e-8a08-a1b8-46beb3a8fdcd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572cd|c394c78f-e00e-8a08-a1b8-46beb3a8fdcd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250626501
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572cc|65c059a7e6e9943ba165b55200000000000b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572cc|65c059a7e6e9943ba165b55200000000000b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250635648
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572cc|6cf8fec7-4ad8-4a2a-ef83-b8ea822e2d4e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572cc|6cf8fec7-4ad8-4a2a-ef83-b8ea822e2d4e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1707250641673
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|a543689a-e359-cbc1-7650-22a01830496f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|a543689a-e359-cbc1-7650-22a01830496f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290282898
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|1f7bd00b-476d-d093-09cd-898024f2b05a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|1f7bd00b-476d-d093-09cd-898024f2b05a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290284375
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|a84e57a9-8601-3a2c-ad1d-1dbbfe42004f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|a84e57a9-8601-3a2c-ad1d-1dbbfe42004f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290285045
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|3a2c91c8-13b5-7a29-2ddf-4b53f91ef5f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|3a2c91c8-13b5-7a29-2ddf-4b53f91ef5f0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290285830
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|f66569be-5329-f3e9-bc35-2aeeebf1f2e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|f66569be-5329-f3e9-bc35-2aeeebf1f2e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290286387
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|ee722d13-5ae7-c9d0-47f2-3237ee5ab3b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|ee722d13-5ae7-c9d0-47f2-3237ee5ab3b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290287083
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|e867c38f-c84c-a10f-e62b-3a802cd5a26f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|e867c38f-c84c-a10f-e62b-3a802cd5a26f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290323233
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|7fb86a00-257e-f763-217e-e5ae39de598c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|7fb86a00-257e-f763-217e-e5ae39de598c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290323876
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|6490663a-4844-e81c-55f6-5fac0c70484b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|6490663a-4844-e81c-55f6-5fac0c70484b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290324329
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|0af7d226-e4df-d124-40f8-c6c7682baea8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|0af7d226-e4df-d124-40f8-c6c7682baea8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290953627
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|0af7d226-e4df-d124-40f8-c6c7682baeaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|0af7d226-e4df-d124-40f8-c6c7682baeaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713290953627
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|17ca1476-5315-786d-2489-d88a7a1c96e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|17ca1476-5315-786d-2489-d88a7a1c96e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713294892156
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|4df33247-5683-7fc0-23b8-3b1c46dc9528",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|4df33247-5683-7fc0-23b8-3b1c46dc9528",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713300540339
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|4df33247-5683-7fc0-23b8-3b1c46dc952a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|4df33247-5683-7fc0-23b8-3b1c46dc952a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713300540339
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|4df33247-5683-7fc0-23b8-3b1c46dc9531",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|4df33247-5683-7fc0-23b8-3b1c46dc9531",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713300540339
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda4094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda4094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713257091365
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda4094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda4094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713257091365
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda40c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda40c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713257091365
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda40c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572ce|c067e28c-37f4-e9d5-86b5-8106cdda40c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713257091365
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|49d1198f-68de-40ed-d431-d5c46b530c4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|49d1198f-68de-40ed-d431-d5c46b530c4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713347918858
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "661fa8c48456bfac79f572c9|c7328cc6-4496-c6e3-5216-cf4fddca69d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "661fa8c48456bfac79f572c9|c7328cc6-4496-c6e3-5216-cf4fddca69d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1713349028655
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "23da1563-1018-bc61-d640-42cf2e89f460",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "23da1563-1018-bc61-d640-42cf2e89f460",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1716274241799
        }
    },
    "actionLists": {
        "a-6": {
            "id": "a-6",
            "title": "Carousel",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|b250e2da-a56a-e0b7-733a-41e9cc8c156a"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 44000,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|b250e2da-a56a-e0b7-733a-41e9cc8c156a"
                        },
                        "xValue": -50,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|b250e2da-a56a-e0b7-733a-41e9cc8c156a"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706707806814
        },
        "a-7": {
            "id": "a-7",
            "title": "Carousel Logo",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|f9c122b0-8313-b053-ee98-d3b55596a971"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 44000,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|f9c122b0-8313-b053-ee98-d3b55596a971"
                        },
                        "xValue": -50,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|f9c122b0-8313-b053-ee98-d3b55596a971"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706707806814
        },
        "a-8": {
            "id": "a-8",
            "title": "Carousel Logo -> Reverse",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|70358f3e-6004-b686-948e-0c2803141c77"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 44000,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|70358f3e-6004-b686-948e-0c2803141c77"
                        },
                        "xValue": 50,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|70358f3e-6004-b686-948e-0c2803141c77"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1706707806814
        },
        "a-9": {
            "id": "a-9",
            "title": "FAQ -> Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-dropdown-list",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82735"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".plus",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f8272e"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".minus",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82730"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-answer",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82739"]
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-answer",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82739"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-dropdown-list",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82735"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-answer",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82739"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-answer",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82739"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".minus",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82730"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".plus",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f8272e"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1676445884244
        },
        "a-10": {
            "id": "a-10",
            "title": "FAQ -> Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-dropdown-list",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82735"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "selector": ".plus",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f8272e"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "id": "eee5e1d6-e9bf-867e-eab4-9244e7761764"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-answer",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82739"]
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-answer",
                            "selectorGuids": ["16960870-0b17-35de-e4ce-51ec76f82739"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1676445884244
        },
        "a": {
            "id": "a",
            "title": "Scroll View -> 01",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "yValue": 32,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665929437809
        },
        "a-12": {
            "id": "a-12",
            "title": "Lights",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "easeOut",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707227798257
        },
        "a-14": {
            "id": "a-14",
            "title": "Fade In -> 02",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "easeOut",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707227798257
        },
        "a-15": {
            "id": "a-15",
            "title": "Circle Dash Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|369e000a-a66d-91bc-8dc0-58c19293330b"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 22000,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|369e000a-a66d-91bc-8dc0-58c19293330b"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "661fa8c48456bfac79f572c9|369e000a-a66d-91bc-8dc0-58c19293330b"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707249784601
        },
        "a-16": {
            "id": "a-16",
            "title": "Fade In -> 03",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "easeOut",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707227798257
        },
        "a-11": {
            "id": "a-11",
            "title": "Fade In -> 01",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "23da1563-1018-bc61-d640-42cf2e89f44f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707227798257
        },
        "a-2": {
            "id": "a-2",
            "title": "Scroll View -> 02",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "yValue": 44,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665929437809
        },
        "a-3": {
            "id": "a-3",
            "title": "Scroll View -> 03",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "yValue": 44,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-3-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": true,
                            "id": "6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665929437809
        },
        "a-17": {
            "id": "a-17",
            "title": "Button Secondary -> Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["d9e01ad9-13e8-41d2-2481-b0fb30597db1"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.12
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["d9e01ad9-13e8-41d2-2481-b0fb30597db1"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.08
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1707250354532
        },
        "a-18": {
            "id": "a-18",
            "title": "Button Secondary -> Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button",
                            "selectorGuids": ["d9e01ad9-13e8-41d2-2481-b0fb30597db1"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.12
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1707250354532
        },
        "a-19": {
            "id": "a-19",
            "title": "Animation Shape 1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuad",
                        "duration": 500,
                        "target": {
                            "selector": ".shape-3",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de55"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuad",
                        "duration": 500,
                        "target": {
                            "selector": ".shape-3",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de55"]
                        },
                        "zValue": 40,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 9000,
                        "target": {
                            "selector": ".shape-3",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de55"]
                        },
                        "xValue": 30,
                        "yValue": 40,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 9000,
                        "target": {
                            "selector": ".shape-3",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de55"]
                        },
                        "zValue": -150,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 6000,
                        "target": {
                            "selector": ".shape-3",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de55"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 6000,
                        "target": {
                            "selector": ".shape-3",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de55"]
                        },
                        "zValue": 40,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692004320884
        },
        "a-20": {
            "id": "a-20",
            "title": "Animation Shape 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 4000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".shape-1",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de4d"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 6000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".shape-1",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de4d"]
                        },
                        "xValue": 0,
                        "yValue": 30,
                        "xUnit": "px",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuad",
                        "duration": 9000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".shape-1",
                            "selectorGuids": ["add88ef3-f769-3fa8-d89e-a7211050de4d"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692007062051
        },
        "a-21": {
            "id": "a-21",
            "title": "home page btutton hover shrinks",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 200,
                        "target": {},
                        "xValue": 0.98,
                        "yValue": 0.98,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699824793976
        },
        "a-22": {
            "id": "a-22",
            "title": "home page button hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": 0.98,
                        "yValue": 0.98,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 200,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699824950321
        },
        "a-23": {
            "id": "a-23",
            "title": "New Timed Animation",
            "actionItemGroups": [],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1716274248414
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});