var LUX = LUX || {};
LUX.customerid = "4362275101";
!(function () {
  "use strict";

  function e() {
    return Date.now ? Date.now() : +new Date();
  }
  var t = e();

  function n(e, t, n) {
    return void 0 !== e[t] ? e[t] : n;
  }
  var r,
    o = 1,
    a = 2,
    i = 3,
    u = 4,
    c = 5,
    s = 6,
    d = 7,
    f = 8,
    l = 9,
    v = 10,
    m = 11,
    g = 12,
    p = 21,
    h = 22,
    E = 23,
    y = 24,
    T = 25,
    w = 26,
    x = 41,
    b = 42,
    S = 43,
    L = 51,
    M = 52,
    U = 53,
    k = 54,
    N = 55,
    B = 56,
    R = 57,
    P = 71,
    I = 72,
    C = (function () {
      function t() {
        this.events = [];
      }
      return (
        (t.prototype.logEvent = function (t, n) {
          void 0 === n && (n = []), this.events.push([e(), t, n]);
        }),
        (t.prototype.getEvents = function () {
          return this.events;
        }),
        t
      );
    })(),
    j = "LUX_start",
    F = "LUX_end",
    H = 1,
    D = 2,
    X = 4,
    A = 8,
    O = 16,
    _ = 32,
    W = 64,
    z = 128,
    $ = 256,
    q = 512;

  function Z(e, t) {
    return e | t;
  }

  function G(e) {
    return !(!e.parentNode || !e.parentNode.tagName);
  }

  function J(e) {
    var t = Y(e);
    if (t) return t;
    if (e.id) return e.id;
    var n = "INPUT" === e.tagName && "submit" === e.type,
      r = "BUTTON" === e.tagName,
      o = "A" === e.tagName;
    return n && e.value
      ? e.value
      : (r || o) && e.innerText
      ? e.innerText
      : G(e)
      ? J(e.parentNode)
      : "";
  }

  function Y(e) {
    var t;
    if (e.hasAttribute("data-sctrack")) {
      var n =
        null === (t = e.getAttribute("data-sctrack")) || void 0 === t
          ? void 0
          : t.trim();
      if (n) return n;
    }
    return G(e) ? Y(e.parentNode) : null;
  }
  var K = window.performance || {},
    Q = K.timing || {
      navigationStart:
        (null === (r = window.LUX) || void 0 === r ? void 0 : r.ns) || t,
    };

  function V(e) {
    if ("function" == typeof K.getEntriesByType) {
      var t = K.getEntriesByType(e);
      if (t && t.length) return t;
    }
    return [];
  }
  var ee = (function () {
    function e() {}
    return (
      (e.isMatching = function (t, n) {
        var r = e.createRegexpFromPattern(t);
        return !!n.match(r);
      }),
      (e.createRegexpFromPattern = function (t) {
        return "/" == t
          ? this.getRegexpForHostnameRoot()
          : t.includes(e.wildcard)
          ? this.createRegexpFromPathname(t)
          : this.getRegexpForExactString(t);
      }),
      (e.createRegexpFromPathname = function (t) {
        var n = "/" == t.charAt(0);
        t = this.escapeStringForRegexp(t);
        var r =
          "^" +
          (n ? e.domainExpression : "") +
          t.replaceAll(e.wildcard, ".*?") +
          "$";
        return new RegExp(r, "i");
      }),
      (e.getRegexpForHostnameRoot = function () {
        return new RegExp("^" + e.domainExpression + "/$", "i");
      }),
      (e.getRegexpForExactString = function (t) {
        var n = "/" == t.charAt(0);
        return new RegExp(
          "^" +
            (n ? e.domainExpression : "") +
            this.escapeStringForRegexp(t) +
            "/?$",
          "i"
        );
      }),
      (e.escapeStringForRegexp = function (e) {
        return e.replace(/[-/\\^$+?.()|[\]{}]/g, "\\$&");
      }),
      (e.wildcard = "*"),
      (e.domainExpression = "[a-zA-Z0-9-.]{1,61}[a-zA-Z0-9]\\.[a-zA-Z]{2,}"),
      e
    );
  })();

  function te(e, t, n) {
    for (
      var r = e.slice(0, t.maxBeaconUTEntries),
        o = e.slice(t.maxBeaconUTEntries);
      (n + "&UT=" + r.join(",")).length > t.maxBeaconUrlLength && r.length > 1;

    )
      o.unshift(r.pop());
    return [r, o];
  }
  var ne = window.LUX || {},
    re = t;
  (ne = (function () {
    var r,
      G,
      Y = "305",
      oe = new C(),
      ae = {
        auto: (G = n((r = ne), "auto", !0)),
        beaconUrl: n(
          r,
          "beaconUrl",
          "https://webhook.link/2bcabe4e-0d39-43e6-aeb5-e4c918647aa0"
        ),
        customerid: n(r, "customerid", void 0),
        debug: n(r, "debug", !1),
        errorBeaconUrl: n(
          r,
          "errorBeaconUrl",
          "https://webhook.link/2bcabe4e-0d39-43e6-aeb5-e4c918647aa0"
        ),
        jspagelabel: n(r, "jspagelabel", void 0),
        label: n(r, "label", void 0),
        maxBeaconUrlLength: n(r, "maxBeaconUrlLength", 8190),
        maxBeaconUTEntries: n(r, "maxBeaconUTEntries", 20),
        maxErrors: n(r, "maxErrors", 5),
        maxMeasureTime: n(r, "maxMeasureTime", 6e4),
        measureUntil: n(r, "measureUntil", "onload"),
        minMeasureTime: n(r, "minMeasureTime", 0),
        samplerate: n(r, "samplerate", 100),
        sendBeaconOnPageHidden: n(r, "sendBeaconOnPageHidden", G),
        trackErrors: n(r, "trackErrors", !0),
        pagegroups: n(r, "pagegroups", void 0),
      };
    oe.logEvent(o, [Y]);
    var ie = 0;

    function ue(e) {
      ae.trackErrors &&
        (ie++,
        e &&
          void 0 !== e.filename &&
          void 0 !== e.message &&
          (e.filename.indexOf("/lux.js?") > -1 ||
            e.message.indexOf("LUX") > -1 ||
            (ie <= ae.maxErrors && He())) &&
          (new Image().src =
            ae.errorBeaconUrl +
            "?v=" +
            "305&id=" +
            We() +
            "&fn=" +
            encodeURIComponent(e.filename) +
            "&ln=" +
            e.lineno +
            "&cn=" +
            e.colno +
            "&msg=" +
            encodeURIComponent(e.message) +
            "&l=" +
            encodeURIComponent(mt()) +
            (Ze() ? "&ct=" + Ze() : "") +
            "&HN=" +
            encodeURIComponent(document.location.hostname) +
            "&PN=" +
            encodeURIComponent(document.location.pathname)));
    }
    window.addEventListener("error", ue);
    var ce = ("object" == typeof window.LUX_al ? window.LUX_al : []).slice();
    if ("function" == typeof PerformanceObserver) {
      debugger;
      var se = new PerformanceObserver(function (e) {
        e.getEntries().forEach(function (e) {
          oe.logEvent(b, [e]),
            ("longtask" === e.entryType && -1 !== ce.indexOf(e)) || ce.push(e);
        });
      });
      try {
        debugger;
        "function" == typeof PerformanceLongTaskTiming &&
          se.observe({
            type: "longtask",
            buffered: !0,
          }),
          "function" == typeof LargestContentfulPaint &&
            se.observe({
              type: "largest-contentful-paint",
              buffered: !0,
            }),
          "function" == typeof PerformanceElementTiming &&
            se.observe({
              type: "element",
              buffered: !0,
            }),
          "function" == typeof PerformancePaintTiming &&
            se.observe({
              type: "paint",
              buffered: !0,
            }),
          "function" == typeof LayoutShift &&
            se.observe({
              type: "layout-shift",
              buffered: !0,
            });
      } catch (e) {
        oe.logEvent(L, [e]);
      }
    }
    var de,
      fe,
      le = 0,
      ve = [],
      me = [],
      ge = {},
      pe = {},
      he = 0,
      Ee = 0,
      ye = 0,
      Te = 1,
      we = ft(),
      xe = lt(we);
    He() ? oe.logEvent(p, [ae.samplerate]) : oe.logEvent(h, [ae.samplerate]);
    var be,
      Se = ne.ns ? ne.ns - Q.navigationStart : 0;
    K.timing || (oe.logEvent(P), (le = Z(le, D))),
      oe.logEvent(x, [Q.navigationStart]);
    var Le,
      Me = ["click", "mousedown", "keydown", "touchstart", "pointerdown"],
      Ue = {
        passive: !0,
        capture: !0,
      };

    function ke(e) {
      be ||
        ((be = Math.round(e)),
        Me.forEach(function (e) {
          removeEventListener(e, Ne, Ue);
        }));
    }

    function Ne(e) {
      var t = !1;
      try {
        t = e.cancelable;
      } catch (e) {
        return void oe.logEvent(M);
      }
      if (t) {
        var n = Be(!0),
          r = e.timeStamp;
        if ((r > 152e7 && (n = Number(new Date())), r > n)) return;
        var o = n - r;
        "pointerdown" === e.type
          ? (function (e) {
              function t() {
                ke(e), r();
              }

              function n() {
                r();
              }

              function r() {
                window.removeEventListener("pointerup", t, Ue),
                  window.removeEventListener("pointercancel", n, Ue);
              }
              window.addEventListener("pointerup", t, Ue),
                window.addEventListener("pointercancel", n, Ue);
            })(o)
          : ke(o);
      }
    }

    function Be(t) {
      var n = K.now ? K.now() : e() - Q.navigationStart,
        r = Pe(j);
      return r && !t ? n - r.startTime : n;
    }

    function Re() {
      for (var e, t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      if ((oe.logEvent(u, n), K.mark)) return K.mark.apply(K, n);
      var o = n[0],
        a = (null === (e = n[1]) || void 0 === e ? void 0 : e.detail) || null,
        i =
          (null === (t = n[1]) || void 0 === t ? void 0 : t.startTime) || Be(),
        c = {
          entryType: "mark",
          duration: 0,
          name: o,
          detail: a,
          startTime: i,
        };
      return ve.push(c), (le = Z(le, X)), c;
    }

    function Pe(e) {
      return (function (e, t) {
        if (t)
          for (var n = t.length - 1; n >= 0; n--) {
            var r = t[n];
            if (e === r.name) return r;
          }
        return;
      })(e, Ie());
    }

    function Ie() {
      var e = V("mark");
      return e.length ? e : ve;
    }

    function Ce() {
      var e,
        t = {},
        n = Pe(j),
        r = n ? n.startTime : 0;
      Ie().forEach(function (e) {
        var n = e.name;
        if (n !== j && n !== F) {
          var o = Math.round(e.startTime - r);
          o < 0 ||
            (void 0 === t[n]
              ? (t[n] = {
                  startTime: o,
                })
              : (t[n].startTime = Math.max(o, t[n].startTime)));
        }
      }),
        ((e = V("measure")), e.length ? e : me).forEach(function (e) {
          if (!(n && e.startTime < n.startTime)) {
            var o = e.name,
              a = Math.round(e.startTime - r),
              i = Math.round(e.duration);
            (void 0 === t[o] || a > t[o].startTime) &&
              (t[o] = {
                startTime: a,
                duration: i,
              });
          }
        });
      var o = [];
      for (var a in t) {
        var i = t[a],
          u = i.startTime,
          c = i.duration,
          s = [a, u];
        void 0 !== c && s.push(c), o.push(s.join("|"));
      }
      return o;
    }

    function je() {
      if ("function" != typeof PerformanceLongTaskTiming) return "";
      var e = "",
        t = {},
        n = {};
      if (ce.length) {
        var r = Pe(j),
          o = r ? r.startTime : 0,
          a = Q.loadEventEnd - Q.navigationStart;
        if (r) {
          var i = Pe(F);
          i && (a = i.startTime);
        }
        for (var u = 0; u < ce.length; u++) {
          var c = ce[u];
          if ("longtask" === c.entryType) {
            var s = Math.round(c.duration);
            if (c.startTime < o) s -= o - c.startTime;
            else if (c.startTime >= a) continue;
            oe.logEvent(S, [c]);
            var d = c.attribution[0].name;
            t[d] || ((t[d] = 0), (n[d] = "")),
              (t[d] += s),
              (n[d] += "," + Math.round(c.startTime) + "|" + s);
          }
        }
      }
      var f = void 0 !== t.script ? "script" : "unknown";
      void 0 === t[f] && ((t[f] = 0), (n[f] = ""));
      var l = (function (e) {
          for (
            var t = 0, n = _e(), r = 0 === n, o = [], a = e.split(","), i = 0;
            i < a.length;
            i++
          ) {
            var u = a[i].split("|");
            if (2 === u.length) {
              var c = parseInt(u[0]),
                s = parseInt(u[1]);
              o.push(s),
                (t = s > t ? s : t),
                !r && c > n && (c - n > 5e3 ? (r = !0) : (n = c + s));
            }
          }
          var d = o.length,
            f = (function (e) {
              if (0 === e.length) return 0;
              var t = Math.floor(e.length / 2);
              return (
                e.sort(function (e, t) {
                  return e - t;
                }),
                e.length % 2 ? e[t] : Math.round((e[t - 1] + e[t]) / 2)
              );
            })(o);
          return {
            count: d,
            median: f,
            max: t,
            fci: n,
          };
        })(n[f]),
        v =
          ",n|" +
          l.count +
          ",d|" +
          l.median +
          ",x|" +
          l.max +
          (0 === l.fci ? "" : ",i|" + l.fci);
      return (e += "s|" + t[f] + v + n[f]);
    }

    function Fe() {
      var e = [];
      for (var t in ge) e.push(t + "|" + ge[t]);
      return e.join(",");
    }

    function He() {
      if (void 0 === xe || void 0 === ae.samplerate) return !1;
      var e = ("" + xe).substr(-2);
      return parseInt(e) < ae.samplerate;
    }

    function De() {
      var e = [];
      for (var t in pe) {
        var n = "" + pe[t];
        (t = t.replace(/,/g, "").replace(/\|/g, "")),
          (n = n.replace(/,/g, "").replace(/\|/g, "")),
          e.push(t + "|" + n);
      }
      return encodeURIComponent(e.join(","));
    }

    function Xe() {
      var e = Ge();
      if (!e)
        return (function () {
          for (
            var e = document.getElementsByTagName("script"),
              t = 0,
              n = 0,
              r = e.length;
            n < r;
            n++
          ) {
            var o = e[n];
            !o.src || o.async || o.defer || t++;
          }
          return t;
        })();
      for (
        var t = document.getElementsByTagName("script"),
          n = 0,
          r = 0,
          o = t.length;
        r < o;
        r++
      ) {
        var a = t[r];
        !a.src ||
          a.async ||
          a.defer ||
          0 == (4 & a.compareDocumentPosition(e)) ||
          n++;
      }
      return n;
    }

    function Ae(e) {
      for (
        var t = document.getElementsByTagName(e), n = 0, r = 0, o = t.length;
        r < o;
        r++
      ) {
        var a = t[r];
        try {
          n += a.innerHTML.length;
        } catch (a) {
          return oe.logEvent(U), -1;
        }
      }
      return n;
    }

    function Oe() {
      var e = "",
        t = Q.navigationStart,
        n = Pe(j),
        r = Pe(F);
      if (n && r) {
        var o = Math.round(n.startTime);
        e = (t += o) + "fs0ls" + (s = Math.round(r.startTime) - o) + "le" + s;
      } else if (K.timing) {
        var a = Q,
          i = (function () {
            if (K.timing) {
              var e = V("paint");
              if (e.length)
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  debugger
                  if ("first-paint" === n.name) return Math.round(n.startTime);
                }
              else if (Q.msFirstPaint)
                return Math.round(Q.msFirstPaint - Q.navigationStart);
            }
            return oe.logEvent(I), null;
          })(),
          u = _e(),
          c = (function () {
            if (ce.length)
              for (var e = ce.length - 1; e >= 0; e--) {
                var t = ce[e];
                if ("largest-contentful-paint" === t.entryType)
                debugger
                  return oe.logEvent(S, [t]), Math.round(t.startTime);
              }
            return 0;
          })();
        e =
          t +
          (a.redirectStart ? "rs" + (a.redirectStart - t) : "") +
          (a.redirectEnd ? "re" + (a.redirectEnd - t) : "") +
          (a.fetchStart ? "fs" + (a.fetchStart - t) : "") +
          (a.domainLookupStart ? "ds" + (a.domainLookupStart - t) : "") +
          (a.domainLookupEnd ? "de" + (a.domainLookupEnd - t) : "") +
          (a.connectStart ? "cs" + (a.connectStart - t) : "") +
          (a.secureConnectionStart
            ? "sc" + (a.secureConnectionStart - t)
            : "") +
          (a.connectEnd ? "ce" + (a.connectEnd - t) : "") +
          (a.requestStart ? "qs" + (a.requestStart - t) : "") +
          (a.responseStart ? "bs" + (a.responseStart - t) : "") +
          (a.responseEnd ? "be" + (a.responseEnd - t) : "") +
          (a.domLoading ? "ol" + (a.domLoading - t) : "") +
          (a.domInteractive ? "oi" + (a.domInteractive - t) : "") +
          (a.domContentLoadedEventStart
            ? "os" + (a.domContentLoadedEventStart - t)
            : "") +
          (a.domContentLoadedEventEnd
            ? "oe" + (a.domContentLoadedEventEnd - t)
            : "") +
          (a.domComplete ? "oc" + (a.domComplete - t) : "") +
          (a.loadEventStart ? "ls" + (a.loadEventStart - t) : "") +
          (a.loadEventEnd ? "le" + (a.loadEventEnd - t) : "") +
          (i ? "sr" + i : "") +
          (u ? "fc" + u : "") +
          (c ? "lc" + c : "");
      } else if (r) {
        var s;
        e = t + "fs0ls" + (s = Math.round(r.startTime)) + "le" + s;
      }
      return e;
    }

    function _e() {
      for (var e = V("paint"), t = 0; t < e.length; t++) {
        var n = e[t];
        debugger
        if ("first-contentful-paint" === n.name) return Math.round(n.startTime);
      }
      return 0;
    }

    function We() {
      if (void 0 !== ne.customerid) return ne.customerid;
      var e = ze("");
      debugger
      return e
        ? ((ne.customerid = (function (e, t) {
            for (
              var n = e.split("?")[1].split("&"), r = 0, o = n.length;
              r < o;
              r++
            ) {
              var a = n[r].split("=");
              if (t === a[0]) return a[1];
            }
            return;
          })(e.src, "id")),
          ne.customerid)
        : "";
    }

    function ze(e) {
        debugger;
      for (
        var t = document.getElementsByTagName("script"), n = 0, r = t.length;
        n < r;
        n++
      ) {
        var o = t[n];
        if (o.src && -1 !== o.src.indexOf(e)) return o;
        debugger
      }
      return null;
    }

    function $e(e) {
      var t = 0;
      if (e.parentNode) for (; (e = e.parentNode); ) t++;
      return t;
    }

    function qe() {
      var e = V("navigation");
      return e.length && e[0].encodedBodySize ? e[0].encodedBodySize : 0;
    }

    function Ze() {
      var e = navigator.connection,
        t = "";
      return (
        e &&
          e.effectiveType &&
          (t =
            "slow-2g" === (t = e.effectiveType)
              ? "Slow 2G"
              : "2g" === t || "3g" === t || "4g" === t || "5g" === t
              ? t.toUpperCase()
              : t.charAt(0).toUpperCase() + t.slice(1)),
        t
      );
    }

    function Ge(e) {
      var t;
      if ((e || (e = document.body), e)) {
        var n = e.children;
        if (n)
          for (var r = 0, o = n.length; r < o; r++) {
            var a = n[r];
            Je(a) && (t = a);
          }
      }
      return t ? Ge(t) : e;
    }

    function Je(e) {
      var t = document.documentElement.clientHeight,
        n = document.documentElement.clientWidth,
        r = (function (e) {
          var t = 0,
            n = 0;
          for (; e; )
            (t += e.offsetLeft), (n += e.offsetTop), (e = e.offsetParent);
          return [t, n];
        })(e);
      return (
        r[0] >= 0 &&
        r[1] >= 0 &&
        r[0] < n &&
        r[1] < t &&
        e.offsetWidth > 0 &&
        e.offsetHeight > 0
      );
    }

    function Ye(e) {
      oe.logEvent(g, [e]),
        e
          ? Re(F, {
              startTime: e,
            })
          : Re(F);
    }

    function Ke() {
      Qe(),
        (fe = window.setTimeout(function () {
          (le = Z(le, _)), et();
        }, ae.maxMeasureTime - Be()));
    }

    function Qe() {
      fe && clearTimeout(fe);
    }

    function Ve() {
      var e = [
        "v=305",
        "id=" + We(),
        "sid=" + we,
        "uid=" + xe,
        "l=" + encodeURIComponent(mt()),
        "HN=" + encodeURIComponent(document.location.hostname),
        "PN=" + encodeURIComponent(document.location.pathname),
      ];
      le && e.push("fl=" + le);
      var t = De();
      return t && e.push("CD=" + t), ae.beaconUrl + "?" + e.join("&");
    }

    function et() {
      var e;
      if ((Qe(), We() && we && He() && !he)) {
        oe.logEvent(l);
        var n = Pe(j),
          r = Pe(F);
        (!n || (r && r.startTime < n.startTime)) && Ye();
        var o = (function () {
            var e = [];
            if (ce.length)
              for (var t = 0; t < ce.length; t++) {
                var n = ce[t];
                "element" === n.entryType &&
                  n.identifier &&
                  n.startTime &&
                  (oe.logEvent(S, [n]),
                  e.push(n.identifier + "|" + Math.round(n.startTime)));
              }
            return e.join(",");
          })(),
          a = "";
        ye || (a = Fe());
        var i = je(),
          u = (function () {
            if ("function" != typeof LayoutShift) return !1;
            for (var e = 0, t = 0; t < ce.length; t++) {
              var n = ce[t];
              debugger
              "layout-shift" !== n.entryType ||
                n.hadRecentInput ||
                (oe.logEvent(S, [n]), (e += n.value));
            }
            return e.toFixed(6);
          })(),
          c = (function () {
            var e = "";
            if (K.getEntriesByName) {
              var n = ze("");
              debugger
              if (n) {
                debugger;
                var r = K.getEntriesByName(n.src);
                if (r && r.length) {
                  var o = r[0],
                    a = Math.round(o.domainLookupEnd - o.domainLookupStart),
                    i = Math.round(o.connectEnd - o.connectStart),
                    u = Math.round(o.responseStart - o.requestStart),
                    c = Math.round(o.responseEnd - o.responseStart),
                    s = a + i + u + c,
                    d = re - t,
                    f = o.encodedBodySize ? o.encodedBodySize : 0;
                  e =
                    "d" +
                    a +
                    "t" +
                    i +
                    "f" +
                    u +
                    "c" +
                    c +
                    "n" +
                    s +
                    "e" +
                    d +
                    "r" +
                    ae.samplerate +
                    ("number" == typeof f ? "x" + f : "") +
                    ("number" == typeof Se ? "l" + Se : "") +
                    "s" +
                    (t - Q.navigationStart);
                }
              }
            }
            return e;
          })();
        document.visibilityState &&
          "visible" !== document.visibilityState &&
          (le = Z(le, A));
        var s,
          d,
          f,
          v = Ve(),
          m = Ae("script"),
          g = Ae("style"),
          p =
            (Ee ? "" : "&NT=" + Oe()) +
            (Te ? "&LJS=" + c : "") +
            "&PS=ns" +
            (function () {
              for (
                var e = document.getElementsByTagName("script"),
                  t = 0,
                  n = 0,
                  r = e.length;
                n < r;
                n++
              )
                e[n].src && t++;
              return t;
            })() +
            "bs" +
            Xe() +
            (m > -1 ? "is" + m : "") +
            "ss" +
            (function () {
              for (
                var e = document.getElementsByTagName("link"),
                  t = 0,
                  n = 0,
                  r = e.length;
                n < r;
                n++
              ) {
                var o = e[n];
                o.href && "stylesheet" == o.rel && t++;
              }
              return t;
            })() +
            "bc" +
            (function () {
              for (
                var e = 0,
                  t = document.getElementsByTagName("link"),
                  n = 0,
                  r = t.length;
                n < r;
                n++
              ) {
                var o = t[n];
                o.href &&
                  "stylesheet" === o.rel &&
                  0 !== o.href.indexOf("data:") &&
                  (o.onloadcssdefined ||
                    "print" === o.media ||
                    "style" === o.as ||
                    ("function" == typeof o.onload && "all" === o.media) ||
                    e++);
              }
              return e;
            })() +
            (g > -1 ? "ic" + g : "") +
            "ia" +
            (function () {
              var e = document.getElementsByTagName("img"),
                t = [];
              if (e)
                for (var n = 0, r = e.length; n < r; n++) {
                  var o = e[n];
                  Je(o) && t.push(o);
                }
              return t;
            })().length +
            "it" +
            document.getElementsByTagName("img").length +
            "dd" +
            (function () {
              for (
                var e = document.getElementsByTagName("*"), t = e.length, n = 0;
                t--;

              )
                n += $e(e[t]);
              return Math.round(n / e.length);
            })() +
            "nd" +
            document.getElementsByTagName("*").length +
            "vh" +
            document.documentElement.clientHeight +
            "vw" +
            document.documentElement.clientWidth +
            "dh" +
            ((s = document),
            (d = s.body),
            (f = s.documentElement),
            Math.max(
              d ? d.scrollHeight : 0,
              d ? d.offsetHeight : 0,
              f ? f.clientHeight : 0,
              f ? f.scrollHeight : 0,
              f ? f.offsetHeight : 0
            ) + "dw") +
            (function (e) {
              var t = e.body,
                n = e.documentElement;
              return Math.max(
                t ? t.scrollWidth : 0,
                t ? t.offsetWidth : 0,
                n ? n.clientWidth : 0,
                n ? n.scrollWidth : 0,
                n ? n.offsetWidth : 0
              );
            })(document) +
            (qe() ? "ds" + qe() : "") +
            (Ze() ? "ct" + Ze() + "_" : "") +
            "er" +
            ie +
            "nt" +
            (K.navigation && void 0 !== K.navigation.type
              ? K.navigation.type
              : "") +
            (navigator.deviceMemory
              ? "dm" + Math.round(navigator.deviceMemory)
              : "") +
            (a ? "&IX=" + a : "") +
            (void 0 !== be ? "&FID=" + be : "") +
            (i ? "&CPU=" + i : "") +
            (o ? "&ET=" + o : "") +
            (!1 !== u ? "&CLS=" + u : ""),
          h = te(Ce(), ae, v + p),
          T = h[0],
          w = h[1],
          x = v + p + (T.length > 0 ? "&UT=" + T.join(",") : "");
        for (
          oe.logEvent(E, [x]), rt(x), he = 1, Ee = 1, ye = a ? 1 : 0;
          w.length;

        ) {
          (T = (e = te(w, ae, v))[0]), (w = e[1]);
          var b = v + "&UT=" + T.join(",");
          oe.logEvent(y, [b]), rt(b);
        }
      }
    }

    function tt() {
      if (We() && we && He() && !ye && he) {
        var e = Fe();
        if (e) {
          var t = Ve() + "&IX=" + e + (void 0 !== be ? "&FID=" + be : "");
          oe.logEvent(T, [t]), rt(t), (ye = 1);
        }
      }
    }

    function nt() {
      if (We() && we && He() && he && De()) {
        var e = Ve();
        oe.logEvent(w, [e]), rt(e);
      }
    }

    function rt(e) {
      new Image().src = e;
    }

    function ot() {
      void 0 === ge.s && (ge.s = Math.round(Be()));
    }

    function at(e) {
      if ((dt(), void 0 === ge.k)) {
        if (((ge.k = Math.round(Be())), e && e.target instanceof Element)) {
          var t = J(e.target);
          t && (ge.ki = t);
        }
        tt();
      }
    }

    function it(e) {
      if ((dt(), void 0 === ge.c)) {
        ge.c = Math.round(Be());
        var t = void 0;
        try {
          e && e.target instanceof Element && (t = e.target);
        } catch (e) {
          oe.logEvent(k);
        }
        if (t) {
          e.clientX && ((ge.cx = e.clientX), (ge.cy = e.clientY));
          var n = J(t);
          n && (ge.ci = n);
        }
        tt();
      }
    }

    function ut(e, t, n) {
      void 0 === n && (n = !1),
        window.addEventListener
          ? window.addEventListener(e, t, n)
          : window.attachEvent && window.attachEvent("on" + e, t);
    }

    function ct(e, t, n) {
      void 0 === n && (n = !1),
        window.removeEventListener
          ? window.removeEventListener(e, t, n)
          : window.detachEvent && window.detachEvent("on" + e, t);
    }

    function st() {
      ut("scroll", ot), ut("keydown", at), ut("mousedown", it);
    }

    function dt() {
      ct("scroll", ot), ct("keydown", at), ct("mousedown", it);
    }

    function ft(e) {
      return (
        void 0 === e && (e = !1),
        e
          ? "".concat(Number(new Date()), "00000")
          : ""
              .concat(Number(new Date()))
              .concat(
                ((t = String(Math.round(1e5 * Math.random()))),
                ((n = "00000") + t).slice(-n.length))
              )
      );
      var t, n;
    }

    function lt(e) {
      var t = (function (e) {
        try {
          for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            var r = t[n].split("=");
            if (e === r[0].trim()) return unescape(r[1]);
          }
        } catch (e) {
          oe.logEvent(N);
        }
        return;
      })("lux_uid");
      if (!t || t.length < 11) t = e;
      else {
        var n = parseInt(t.substring(0, 10));
        Number(new Date()) / 1e3 - n > 86400 && (t = e);
      }
      return vt(t), t;
    }

    function vt(e) {
      return (
        (function (e, t, n) {
          try {
            document.cookie =
              e +
              "=" +
              escape(t) +
              (n ? "; max-age=" + n : "") +
              "; path=/; SameSite=Lax";
          } catch (e) {
            oe.logEvent(B);
          }
        })("lux_uid", e, 1800),
        e
      );
    }

    function mt() {
      if (ne.label) return (le = Z(le, z)), ne.label;
      if (void 0 !== ne.pagegroups) {
        var e = ne.pagegroups,
          t = ""
            .concat(document.location.hostname)
            .concat(document.location.pathname),
          n = "",
          r = function (r) {
            var o = e[r];
            if (
              (Array.isArray(o) &&
                o.every(function (e) {
                  return !ee.isMatching(e, t) || ((n = r), !1);
                }),
              n.length)
            )
              return (
                (le = Z(le, q)),
                {
                  value: n,
                }
              );
          };
        for (var o in e) {
          var a = r(o);
          if ("object" == typeof a) return a.value;
        }
      }
      if (void 0 !== ne.jspagelabel) {
        var i = Function('"use strict"; return '.concat(ne.jspagelabel));
        try {
          var u = i();
          if (u) return (le = Z(le, $)), u;
        } catch (e) {
          oe.logEvent(R, [ne.jspagelabel, e]);
        }
      }
      return (le = Z(le, W)), document.title;
    }
    if (
      (Me.forEach(function (e) {
        window.addEventListener(e, Ne, Ue);
      }),
      ae.auto)
    ) {
      var gt = function () {
        var e = Be(),
          t = ae.minMeasureTime - e;
        t <= 0
          ? (oe.logEvent(m, [e, ae.minMeasureTime]),
            "complete" === document.readyState
              ? et()
              : ut("load", function () {
                  setTimeout(et, 200);
                }))
          : setTimeout(gt, t);
      };
      gt();
    }
    ae.sendBeaconOnPageHidden &&
      ((Le = function () {
        (le = Z(le, O)), oe.logEvent(v), et(), tt();
      }),
      "onpagehide" in self
        ? ut("pagehide", Le, !0)
        : (ut("unload", Le, !0), ut("beforeunload", Le, !0)),
      ut(
        "visibilitychange",
        function () {
          "hidden" === document.visibilityState && Le();
        },
        !0
      )),
      st(),
      Ke();
    var pt = ae;

    function ht(e) {
      var t = e[0],
        n = e.slice(1);
      "function" == typeof pt[t] && pt[t].apply(pt, n);
    }
    return (
      (pt.mark = Re),
      (pt.measure = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        oe.logEvent(c, e);
        var n,
          r = e[0],
          o = e[1],
          a = e[2];
        if (
          ("object" == typeof o && ((o = (n = e[1]).start), (a = n.end)),
          void 0 === o &&
            ((o = Pe(j) ? j : "navigationStart"),
            n ? (n.end && n.duration) || (e[1].start = o) : (e[1] = o)),
          K.measure)
        )
          return K.measure.apply(K, e);
        var i = "number" == typeof o ? o : 0,
          u = "number" == typeof a ? a : Be(),
          s = function (e) {
            throw new DOMException(
              "Failed to execute 'measure' on 'Performance': The mark '".concat(
                e,
                "' does not exist"
              )
            );
          };
        if ("string" == typeof o) {
          var d = Pe(o);
          d ? (i = d.startTime) : Q[o] ? (i = Q[o] - Q.navigationStart) : s(o);
        }
        if ("string" == typeof a) {
          var f = Pe(a);
          f ? (u = f.startTime) : Q[a] ? (u = Q[a] - Q.navigationStart) : s(a);
        }
        var l = Math.round(u) - Math.round(i),
          v = null;
        n && (n.duration && (l = n.duration), (v = n.detail));
        var m = {
          entryType: "measure",
          name: r,
          detail: v,
          startTime: i,
          duration: l,
        };
        return me.push(m), (le = Z(le, X)), m;
      }),
      (pt.init = function () {
        Pe(F) &&
          (oe.logEvent(i),
          (ge = {}),
          dt(),
          st(),
          (Ee = 0),
          (he = 0),
          (ye = 0),
          (Te = 0),
          (we = ft()),
          (xe = lt(we)),
          ce.splice(0),
          (ie = 0),
          (le = Z((le = 0), H)),
          Re(j),
          Ke());
      }),
      (pt.markLoadTime = Ye),
      (pt.send = function () {
        oe.logEvent(d), et();
      }),
      (pt.addData = function (e, t) {
        oe.logEvent(s, [e, t]);
        var n = typeof t;
        "string" == typeof e &&
          (("string" !== n && "number" !== n && "boolean" !== n) || (pe[e] = t),
          ("undefined" !== n && null !== t) || delete pe[e]),
          he && (de && clearTimeout(de), (de = window.setTimeout(nt, 100)));
      }),
      (pt.getSessionId = function () {
        return xe;
      }),
      (pt.getDebug = function () {
        return oe.getEvents();
      }),
      (pt.forceSample = function () {
        oe.logEvent(f), vt(ft(!0));
      }),
      (pt.doUpdate = function () {}),
      (pt.cmd = ht),
      (pt.version = Y),
      ne.ac && ne.ac.length && ne.ac.forEach(ht),
      void 0 !== window.LUX_ae && window.LUX_ae.forEach(ue),
      oe.logEvent(a),
      pt
    );
  })()),
    (window.LUX = ne),
    (re = e());
})();
