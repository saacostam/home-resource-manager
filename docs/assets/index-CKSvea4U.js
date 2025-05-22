function ky(l, i) {
  for (var o = 0; o < i.length; o++) {
    const r = i[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in l)) {
          const f = Object.getOwnPropertyDescriptor(r, s);
          f &&
            Object.defineProperty(
              l,
              s,
              f.get ? f : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = o(s);
    fetch(s.href, f);
  }
})();
function iv(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Jc = { exports: {} },
  Si = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dp;
function Ky() {
  if (dp) return Si;
  dp = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function o(r, s, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      s.key !== void 0 && (d = "" + s.key),
      "key" in s)
    ) {
      f = {};
      for (var h in s) h !== "key" && (f[h] = s[h]);
    } else f = s;
    return (
      (s = f.ref),
      { $$typeof: l, type: r, key: d, ref: s !== void 0 ? s : null, props: f }
    );
  }
  return (Si.Fragment = i), (Si.jsx = o), (Si.jsxs = o), Si;
}
var mp;
function Jy() {
  return mp || ((mp = 1), (Jc.exports = Ky())), Jc.exports;
}
var j = Jy(),
  Wc = { exports: {} },
  pt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp;
function Wy() {
  if (hp) return pt;
  hp = 1;
  var l = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function T(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (y && S[y]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    R = {};
  function M(S, N, J) {
    (this.props = S),
      (this.context = N),
      (this.refs = R),
      (this.updater = J || x);
  }
  (M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (S, N) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, N, "setState");
    }),
    (M.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function Y() {}
  Y.prototype = M.prototype;
  function G(S, N, J) {
    (this.props = S),
      (this.context = N),
      (this.refs = R),
      (this.updater = J || x);
  }
  var B = (G.prototype = new Y());
  (B.constructor = G), _(B, M.prototype), (B.isPureReactComponent = !0);
  var X = Array.isArray,
    L = { H: null, A: null, T: null, S: null, V: null },
    W = Object.prototype.hasOwnProperty;
  function P(S, N, J, F, lt, ht) {
    return (
      (J = ht.ref),
      { $$typeof: l, type: S, key: N, ref: J !== void 0 ? J : null, props: ht }
    );
  }
  function et(S, N) {
    return P(S.type, N, void 0, void 0, void 0, S.props);
  }
  function tt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === l;
  }
  function ut(S) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (J) {
        return N[J];
      })
    );
  }
  var mt = /\/+/g;
  function rt(S, N) {
    return typeof S == "object" && S !== null && S.key != null
      ? ut("" + S.key)
      : N.toString(36);
  }
  function ot() {}
  function ct(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(ot, ot)
            : ((S.status = "pending"),
              S.then(
                function (N) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = N));
                },
                function (N) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = N));
                },
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function I(S, N, J, F, lt) {
    var ht = typeof S;
    (ht === "undefined" || ht === "boolean") && (S = null);
    var nt = !1;
    if (S === null) nt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case l:
            case i:
              nt = !0;
              break;
            case b:
              return (nt = S._init), I(nt(S._payload), N, J, F, lt);
          }
      }
    if (nt)
      return (
        (lt = lt(S)),
        (nt = F === "" ? "." + rt(S, 0) : F),
        X(lt)
          ? ((J = ""),
            nt != null && (J = nt.replace(mt, "$&/") + "/"),
            I(lt, N, J, "", function (le) {
              return le;
            }))
          : lt != null &&
            (tt(lt) &&
              (lt = et(
                lt,
                J +
                  (lt.key == null || (S && S.key === lt.key)
                    ? ""
                    : ("" + lt.key).replace(mt, "$&/") + "/") +
                  nt,
              )),
            N.push(lt)),
        1
      );
    nt = 0;
    var Tt = F === "" ? "." : F + ":";
    if (X(S))
      for (var xt = 0; xt < S.length; xt++)
        (F = S[xt]), (ht = Tt + rt(F, xt)), (nt += I(F, N, J, ht, lt));
    else if (((xt = T(S)), typeof xt == "function"))
      for (S = xt.call(S), xt = 0; !(F = S.next()).done; )
        (F = F.value), (ht = Tt + rt(F, xt++)), (nt += I(F, N, J, ht, lt));
    else if (ht === "object") {
      if (typeof S.then == "function") return I(ct(S), N, J, F, lt);
      throw (
        ((N = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return nt;
  }
  function O(S, N, J) {
    if (S == null) return S;
    var F = [],
      lt = 0;
    return (
      I(S, F, "", "", function (ht) {
        return N.call(J, ht, lt++);
      }),
      F
    );
  }
  function $(S) {
    if (S._status === -1) {
      var N = S._result;
      (N = N()),
        N.then(
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = J));
          },
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = J));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = N));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var q =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function K() {}
  return (
    (pt.Children = {
      map: O,
      forEach: function (S, N, J) {
        O(
          S,
          function () {
            N.apply(this, arguments);
          },
          J,
        );
      },
      count: function (S) {
        var N = 0;
        return (
          O(S, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (S) {
        return (
          O(S, function (N) {
            return N;
          }) || []
        );
      },
      only: function (S) {
        if (!tt(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    }),
    (pt.Component = M),
    (pt.Fragment = o),
    (pt.Profiler = s),
    (pt.PureComponent = G),
    (pt.StrictMode = r),
    (pt.Suspense = g),
    (pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
    (pt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return L.H.useMemoCache(S);
      },
    }),
    (pt.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (pt.cloneElement = function (S, N, J) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + ".",
        );
      var F = _({}, S.props),
        lt = S.key,
        ht = void 0;
      if (N != null)
        for (nt in (N.ref !== void 0 && (ht = void 0),
        N.key !== void 0 && (lt = "" + N.key),
        N))
          !W.call(N, nt) ||
            nt === "key" ||
            nt === "__self" ||
            nt === "__source" ||
            (nt === "ref" && N.ref === void 0) ||
            (F[nt] = N[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) F.children = J;
      else if (1 < nt) {
        for (var Tt = Array(nt), xt = 0; xt < nt; xt++)
          Tt[xt] = arguments[xt + 2];
        F.children = Tt;
      }
      return P(S.type, lt, void 0, void 0, ht, F);
    }),
    (pt.createContext = function (S) {
      return (
        (S = {
          $$typeof: d,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: f, _context: S }),
        S
      );
    }),
    (pt.createElement = function (S, N, J) {
      var F,
        lt = {},
        ht = null;
      if (N != null)
        for (F in (N.key !== void 0 && (ht = "" + N.key), N))
          W.call(N, F) &&
            F !== "key" &&
            F !== "__self" &&
            F !== "__source" &&
            (lt[F] = N[F]);
      var nt = arguments.length - 2;
      if (nt === 1) lt.children = J;
      else if (1 < nt) {
        for (var Tt = Array(nt), xt = 0; xt < nt; xt++)
          Tt[xt] = arguments[xt + 2];
        lt.children = Tt;
      }
      if (S && S.defaultProps)
        for (F in ((nt = S.defaultProps), nt))
          lt[F] === void 0 && (lt[F] = nt[F]);
      return P(S, ht, void 0, void 0, null, lt);
    }),
    (pt.createRef = function () {
      return { current: null };
    }),
    (pt.forwardRef = function (S) {
      return { $$typeof: h, render: S };
    }),
    (pt.isValidElement = tt),
    (pt.lazy = function (S) {
      return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: $ };
    }),
    (pt.memo = function (S, N) {
      return { $$typeof: p, type: S, compare: N === void 0 ? null : N };
    }),
    (pt.startTransition = function (S) {
      var N = L.T,
        J = {};
      L.T = J;
      try {
        var F = S(),
          lt = L.S;
        lt !== null && lt(J, F),
          typeof F == "object" &&
            F !== null &&
            typeof F.then == "function" &&
            F.then(K, q);
      } catch (ht) {
        q(ht);
      } finally {
        L.T = N;
      }
    }),
    (pt.unstable_useCacheRefresh = function () {
      return L.H.useCacheRefresh();
    }),
    (pt.use = function (S) {
      return L.H.use(S);
    }),
    (pt.useActionState = function (S, N, J) {
      return L.H.useActionState(S, N, J);
    }),
    (pt.useCallback = function (S, N) {
      return L.H.useCallback(S, N);
    }),
    (pt.useContext = function (S) {
      return L.H.useContext(S);
    }),
    (pt.useDebugValue = function () {}),
    (pt.useDeferredValue = function (S, N) {
      return L.H.useDeferredValue(S, N);
    }),
    (pt.useEffect = function (S, N, J) {
      var F = L.H;
      if (typeof J == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return F.useEffect(S, N);
    }),
    (pt.useId = function () {
      return L.H.useId();
    }),
    (pt.useImperativeHandle = function (S, N, J) {
      return L.H.useImperativeHandle(S, N, J);
    }),
    (pt.useInsertionEffect = function (S, N) {
      return L.H.useInsertionEffect(S, N);
    }),
    (pt.useLayoutEffect = function (S, N) {
      return L.H.useLayoutEffect(S, N);
    }),
    (pt.useMemo = function (S, N) {
      return L.H.useMemo(S, N);
    }),
    (pt.useOptimistic = function (S, N) {
      return L.H.useOptimistic(S, N);
    }),
    (pt.useReducer = function (S, N, J) {
      return L.H.useReducer(S, N, J);
    }),
    (pt.useRef = function (S) {
      return L.H.useRef(S);
    }),
    (pt.useState = function (S) {
      return L.H.useState(S);
    }),
    (pt.useSyncExternalStore = function (S, N, J) {
      return L.H.useSyncExternalStore(S, N, J);
    }),
    (pt.useTransition = function () {
      return L.H.useTransition();
    }),
    (pt.version = "19.1.0"),
    pt
  );
}
var pp;
function Ns() {
  return pp || ((pp = 1), (Wc.exports = Wy())), Wc.exports;
}
var A = Ns();
const cu = iv(A),
  Fy = ky({ __proto__: null, default: cu }, [A]);
var Fc = { exports: {} },
  xi = {},
  Pc = { exports: {} },
  Ic = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp;
function Py() {
  return (
    vp ||
      ((vp = 1),
      (function (l) {
        function i(O, $) {
          var q = O.length;
          O.push($);
          t: for (; 0 < q; ) {
            var K = (q - 1) >>> 1,
              S = O[K];
            if (0 < s(S, $)) (O[K] = $), (O[q] = S), (q = K);
            else break t;
          }
        }
        function o(O) {
          return O.length === 0 ? null : O[0];
        }
        function r(O) {
          if (O.length === 0) return null;
          var $ = O[0],
            q = O.pop();
          if (q !== $) {
            O[0] = q;
            t: for (var K = 0, S = O.length, N = S >>> 1; K < N; ) {
              var J = 2 * (K + 1) - 1,
                F = O[J],
                lt = J + 1,
                ht = O[lt];
              if (0 > s(F, q))
                lt < S && 0 > s(ht, F)
                  ? ((O[K] = ht), (O[lt] = q), (K = lt))
                  : ((O[K] = F), (O[J] = q), (K = J));
              else if (lt < S && 0 > s(ht, q))
                (O[K] = ht), (O[lt] = q), (K = lt);
              else break t;
            }
          }
          return $;
        }
        function s(O, $) {
          var q = O.sortIndex - $.sortIndex;
          return q !== 0 ? q : O.id - $.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          l.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          l.unstable_now = function () {
            return d.now() - h;
          };
        }
        var g = [],
          p = [],
          b = 1,
          y = null,
          T = 3,
          x = !1,
          _ = !1,
          R = !1,
          M = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        function X(O) {
          for (var $ = o(p); $ !== null; ) {
            if ($.callback === null) r(p);
            else if ($.startTime <= O)
              r(p), ($.sortIndex = $.expirationTime), i(g, $);
            else break;
            $ = o(p);
          }
        }
        function L(O) {
          if (((R = !1), X(O), !_))
            if (o(g) !== null) (_ = !0), W || ((W = !0), rt());
            else {
              var $ = o(p);
              $ !== null && I(L, $.startTime - O);
            }
        }
        var W = !1,
          P = -1,
          et = 5,
          tt = -1;
        function ut() {
          return M ? !0 : !(l.unstable_now() - tt < et);
        }
        function mt() {
          if (((M = !1), W)) {
            var O = l.unstable_now();
            tt = O;
            var $ = !0;
            try {
              t: {
                (_ = !1), R && ((R = !1), G(P), (P = -1)), (x = !0);
                var q = T;
                try {
                  e: {
                    for (
                      X(O), y = o(g);
                      y !== null && !(y.expirationTime > O && ut());

                    ) {
                      var K = y.callback;
                      if (typeof K == "function") {
                        (y.callback = null), (T = y.priorityLevel);
                        var S = K(y.expirationTime <= O);
                        if (((O = l.unstable_now()), typeof S == "function")) {
                          (y.callback = S), X(O), ($ = !0);
                          break e;
                        }
                        y === o(g) && r(g), X(O);
                      } else r(g);
                      y = o(g);
                    }
                    if (y !== null) $ = !0;
                    else {
                      var N = o(p);
                      N !== null && I(L, N.startTime - O), ($ = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (T = q), (x = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? rt() : (W = !1);
            }
          }
        }
        var rt;
        if (typeof B == "function")
          rt = function () {
            B(mt);
          };
        else if (typeof MessageChannel < "u") {
          var ot = new MessageChannel(),
            ct = ot.port2;
          (ot.port1.onmessage = mt),
            (rt = function () {
              ct.postMessage(null);
            });
        } else
          rt = function () {
            Y(mt, 0);
          };
        function I(O, $) {
          P = Y(function () {
            O(l.unstable_now());
          }, $);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (l.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (et = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (l.unstable_next = function (O) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = T;
            }
            var q = T;
            T = $;
            try {
              return O();
            } finally {
              T = q;
            }
          }),
          (l.unstable_requestPaint = function () {
            M = !0;
          }),
          (l.unstable_runWithPriority = function (O, $) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var q = T;
            T = O;
            try {
              return $();
            } finally {
              T = q;
            }
          }),
          (l.unstable_scheduleCallback = function (O, $, q) {
            var K = l.unstable_now();
            switch (
              (typeof q == "object" && q !== null
                ? ((q = q.delay),
                  (q = typeof q == "number" && 0 < q ? K + q : K))
                : (q = K),
              O)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = q + S),
              (O = {
                id: b++,
                callback: $,
                priorityLevel: O,
                startTime: q,
                expirationTime: S,
                sortIndex: -1,
              }),
              q > K
                ? ((O.sortIndex = q),
                  i(p, O),
                  o(g) === null &&
                    O === o(p) &&
                    (R ? (G(P), (P = -1)) : (R = !0), I(L, q - K)))
                : ((O.sortIndex = S),
                  i(g, O),
                  _ || x || ((_ = !0), W || ((W = !0), rt()))),
              O
            );
          }),
          (l.unstable_shouldYield = ut),
          (l.unstable_wrapCallback = function (O) {
            var $ = T;
            return function () {
              var q = T;
              T = $;
              try {
                return O.apply(this, arguments);
              } finally {
                T = q;
              }
            };
          });
      })(Ic)),
    Ic
  );
}
var gp;
function Iy() {
  return gp || ((gp = 1), (Pc.exports = Py())), Pc.exports;
}
var ts = { exports: {} },
  re = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp;
function tb() {
  if (yp) return re;
  yp = 1;
  var l = Ns();
  function i(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        p += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(i(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function f(g, p, b) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: g,
      containerInfo: p,
      implementation: b,
    };
  }
  var d = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (re.createPortal = function (g, p) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(i(299));
      return f(g, p, null, b);
    }),
    (re.flushSync = function (g) {
      var p = d.T,
        b = r.p;
      try {
        if (((d.T = null), (r.p = 2), g)) return g();
      } finally {
        (d.T = p), (r.p = b), r.d.f();
      }
    }),
    (re.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        r.d.C(g, p));
    }),
    (re.prefetchDNS = function (g) {
      typeof g == "string" && r.d.D(g);
    }),
    (re.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var b = p.as,
          y = h(b, p.crossOrigin),
          T = typeof p.integrity == "string" ? p.integrity : void 0,
          x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        b === "style"
          ? r.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: y,
              integrity: T,
              fetchPriority: x,
            })
          : b === "script" &&
            r.d.X(g, {
              crossOrigin: y,
              integrity: T,
              fetchPriority: x,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (re.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var b = h(p.as, p.crossOrigin);
            r.d.M(g, {
              crossOrigin: b,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && r.d.M(g);
    }),
    (re.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var b = p.as,
          y = h(b, p.crossOrigin);
        r.d.L(g, b, {
          crossOrigin: y,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (re.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var b = h(p.as, p.crossOrigin);
          r.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: b,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else r.d.m(g);
    }),
    (re.requestFormReset = function (g) {
      r.d.r(g);
    }),
    (re.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (re.useFormState = function (g, p, b) {
      return d.H.useFormState(g, p, b);
    }),
    (re.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (re.version = "19.1.0"),
    re
  );
}
var bp;
function rv() {
  if (bp) return ts.exports;
  bp = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), (ts.exports = tb()), ts.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sp;
function eb() {
  if (Sp) return xi;
  Sp = 1;
  var l = Iy(),
    i = Ns(),
    o = rv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (f(t) !== t) throw Error(r(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((a = u.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === n) return h(u), t;
          if (c === a) return h(u), e;
          c = c.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) (n = u), (a = c);
      else {
        for (var m = !1, v = u.child; v; ) {
          if (v === n) {
            (m = !0), (n = u), (a = c);
            break;
          }
          if (v === a) {
            (m = !0), (a = u), (n = c);
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = c.child; v; ) {
            if (v === n) {
              (m = !0), (n = c), (a = u);
              break;
            }
            if (v === a) {
              (m = !0), (a = c), (n = u);
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    y = Symbol.for("react.element"),
    T = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    R = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    Y = Symbol.for("react.provider"),
    G = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    L = Symbol.for("react.suspense"),
    W = Symbol.for("react.suspense_list"),
    P = Symbol.for("react.memo"),
    et = Symbol.for("react.lazy"),
    tt = Symbol.for("react.activity"),
    ut = Symbol.for("react.memo_cache_sentinel"),
    mt = Symbol.iterator;
  function rt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (mt && t[mt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var ot = Symbol.for("react.client.reference");
  function ct(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ot ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case _:
        return "Fragment";
      case M:
        return "Profiler";
      case R:
        return "StrictMode";
      case L:
        return "Suspense";
      case W:
        return "SuspenseList";
      case tt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case x:
          return "Portal";
        case B:
          return (t.displayName || "Context") + ".Provider";
        case G:
          return (t._context.displayName || "Context") + ".Consumer";
        case X:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case P:
          return (
            (e = t.displayName || null), e !== null ? e : ct(t.type) || "Memo"
          );
        case et:
          (e = t._payload), (t = t._init);
          try {
            return ct(t(e));
          } catch {}
      }
    return null;
  }
  var I = Array.isArray,
    O = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    K = [],
    S = -1;
  function N(t) {
    return { current: t };
  }
  function J(t) {
    0 > S || ((t.current = K[S]), (K[S] = null), S--);
  }
  function F(t, e) {
    S++, (K[S] = t.current), (t.current = e);
  }
  var lt = N(null),
    ht = N(null),
    nt = N(null),
    Tt = N(null);
  function xt(t, e) {
    switch ((F(nt, e), F(ht, t), F(lt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Yh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Yh(e)), (t = qh(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    J(lt), F(lt, t);
  }
  function le() {
    J(lt), J(ht), J(nt);
  }
  function Ft(t) {
    t.memoizedState !== null && F(Tt, t);
    var e = lt.current,
      n = qh(e, t.type);
    e !== n && (F(ht, t), F(lt, n));
  }
  function Ve(t) {
    ht.current === t && (J(lt), J(ht)),
      Tt.current === t && (J(Tt), (pi._currentValue = q));
  }
  var el = Object.prototype.hasOwnProperty,
    An = l.unstable_scheduleCallback,
    Cn = l.unstable_cancelCallback,
    Ea = l.unstable_shouldYield,
    ju = l.unstable_requestPaint,
    Te = l.unstable_now,
    Bu = l.unstable_getCurrentPriorityLevel,
    Li = l.unstable_ImmediatePriority,
    Uu = l.unstable_UserBlockingPriority,
    $i = l.unstable_NormalPriority,
    w0 = l.unstable_LowPriority,
    Ef = l.unstable_IdlePriority,
    O0 = l.log,
    M0 = l.unstable_setDisableYieldValue,
    Ra = null,
    he = null;
  function _n(t) {
    if (
      (typeof O0 == "function" && M0(t),
      he && typeof he.setStrictMode == "function")
    )
      try {
        he.setStrictMode(Ra, t);
      } catch {}
  }
  var pe = Math.clz32 ? Math.clz32 : D0,
    z0 = Math.log,
    N0 = Math.LN2;
  function D0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((z0(t) / N0) | 0)) | 0;
  }
  var Yi = 256,
    qi = 4194304;
  function nl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Gi(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      c = t.suspendedLanes,
      m = t.pingedLanes;
    t = t.warmLanes;
    var v = a & 134217727;
    return (
      v !== 0
        ? ((a = v & ~c),
          a !== 0
            ? (u = nl(a))
            : ((m &= v),
              m !== 0
                ? (u = nl(m))
                : n || ((n = v & ~t), n !== 0 && (u = nl(n)))))
        : ((v = a & ~c),
          v !== 0
            ? (u = nl(v))
            : m !== 0
              ? (u = nl(m))
              : n || ((n = a & ~t), n !== 0 && (u = nl(n)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & c) === 0 &&
            ((c = u & -u),
            (n = e & -e),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? e
          : u
    );
  }
  function Ta(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function j0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rf() {
    var t = Yi;
    return (Yi <<= 1), (Yi & 4194048) === 0 && (Yi = 256), t;
  }
  function Tf() {
    var t = qi;
    return (qi <<= 1), (qi & 62914560) === 0 && (qi = 4194304), t;
  }
  function Hu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Aa(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function B0(t, e, n, a, u, c) {
    var m = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      E = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var V = 31 - pe(n),
        k = 1 << V;
      (v[V] = 0), (E[V] = -1);
      var U = D[V];
      if (U !== null)
        for (D[V] = null, V = 0; V < U.length; V++) {
          var H = U[V];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~k;
    }
    a !== 0 && Af(t, a, 0),
      c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e));
  }
  function Af(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - pe(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 4194090));
  }
  function Cf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - pe(n),
        u = 1 << a;
      (u & e) | (t[a] & e) && (t[a] |= e), (n &= ~u);
    }
  }
  function Lu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function $u(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function _f() {
    var t = $.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : rp(t.type));
  }
  function U0(t, e) {
    var n = $.p;
    try {
      return ($.p = t), e();
    } finally {
      $.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2),
    ae = "__reactFiber$" + wn,
    oe = "__reactProps$" + wn,
    Tl = "__reactContainer$" + wn,
    Yu = "__reactEvents$" + wn,
    H0 = "__reactListeners$" + wn,
    L0 = "__reactHandles$" + wn,
    wf = "__reactResources$" + wn,
    Ca = "__reactMarker$" + wn;
  function qu(t) {
    delete t[ae], delete t[oe], delete t[Yu], delete t[H0], delete t[L0];
  }
  function Al(t) {
    var e = t[ae];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Tl] || n[ae])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Qh(t); t !== null; ) {
            if ((n = t[ae])) return n;
            t = Qh(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Cl(t) {
    if ((t = t[ae] || t[Tl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function _a(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function _l(t) {
    var e = t[wf];
    return (
      e ||
        (e = t[wf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function kt(t) {
    t[Ca] = !0;
  }
  var Of = new Set(),
    Mf = {};
  function ll(t, e) {
    wl(t, e), wl(t + "Capture", e);
  }
  function wl(t, e) {
    for (Mf[t] = e, t = 0; t < e.length; t++) Of.add(e[t]);
  }
  var $0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    zf = {},
    Nf = {};
  function Y0(t) {
    return el.call(Nf, t)
      ? !0
      : el.call(zf, t)
        ? !1
        : $0.test(t)
          ? (Nf[t] = !0)
          : ((zf[t] = !0), !1);
  }
  function Xi(t, e, n) {
    if (Y0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Vi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function en(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  var Gu, Df;
  function Ol(t) {
    if (Gu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Gu = (e && e[1]) || ""),
          (Df =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Gu +
      t +
      Df
    );
  }
  var Xu = !1;
  function Vu(t, e) {
    if (!t || Xu) return "";
    Xu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var k = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(k.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(k, []);
                } catch (H) {
                  var U = H;
                }
                Reflect.construct(t, [], k);
              } else {
                try {
                  k.call();
                } catch (H) {
                  U = H;
                }
                t.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                U = H;
              }
              (k = t()) &&
                typeof k.catch == "function" &&
                k.catch(function () {});
            }
          } catch (H) {
            if (H && U && typeof H.stack == "string") return [H.stack, U.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = a.DetermineComponentFrameRoot(),
        m = c[0],
        v = c[1];
      if (m && v) {
        var E = m.split(`
`),
          D = v.split(`
`);
        for (
          u = a = 0;
          a < E.length && !E[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < D.length && !D[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === E.length || u === D.length)
          for (
            a = E.length - 1, u = D.length - 1;
            1 <= a && 0 <= u && E[a] !== D[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (E[a] !== D[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || E[a] !== D[u])) {
                  var V =
                    `
` + E[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (Xu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Ol(n) : "";
  }
  function q0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ol(t.type);
      case 16:
        return Ol("Lazy");
      case 13:
        return Ol("Suspense");
      case 19:
        return Ol("SuspenseList");
      case 0:
      case 15:
        return Vu(t.type, !1);
      case 11:
        return Vu(t.type.render, !1);
      case 1:
        return Vu(t.type, !0);
      case 31:
        return Ol("Activity");
      default:
        return "";
    }
  }
  function jf(t) {
    try {
      var e = "";
      do (e += q0(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Ae(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Bf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function G0(t) {
    var e = Bf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var u = n.get,
        c = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (m) {
            (a = "" + m), c.call(this, m);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = "" + m;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Qi(t) {
    t._valueTracker || (t._valueTracker = G0(t));
  }
  function Uf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Bf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Zi(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var X0 = /[\n"\\]/g;
  function Ce(t) {
    return t.replace(X0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Qu(t, e, n, a, u, c, m, v) {
    (t.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.type = m)
        : t.removeAttribute("type"),
      e != null
        ? m === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ae(e))
          : t.value !== "" + Ae(e) && (t.value = "" + Ae(e))
        : (m !== "submit" && m !== "reset") || t.removeAttribute("value"),
      e != null
        ? Zu(t, m, Ae(e))
        : n != null
          ? Zu(t, m, Ae(n))
          : a != null && t.removeAttribute("value"),
      u == null && c != null && (t.defaultChecked = !!c),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Ae(v))
        : t.removeAttribute("name");
  }
  function Hf(t, e, n, a, u, c, m, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) return;
      (n = n != null ? "" + Ae(n) : ""),
        (e = e != null ? "" + Ae(e) : n),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = v ? t.checked : !!a),
      (t.defaultChecked = !!a),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (t.name = m);
  }
  function Zu(t, e, n) {
    (e === "number" && Zi(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ml(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < n.length; u++) e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        (u = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== u && (t[n].selected = u),
          u && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ae(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Lf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ae(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ae(n) : "";
  }
  function $f(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (I(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Ae(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a);
  }
  function zl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var V0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Yf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || V0.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function qf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var u in e)
        (a = e[u]), e.hasOwnProperty(u) && n[u] !== a && Yf(t, u, a);
    } else for (var c in e) e.hasOwnProperty(c) && Yf(t, c, e[c]);
  }
  function ku(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Q0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Z0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ki(t) {
    return Z0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ku = null;
  function Ju(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Nl = null,
    Dl = null;
  function Gf(t) {
    var e = Cl(t);
    if (e && (t = e.stateNode)) {
      var n = t[oe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Qu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ce("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var u = a[oe] || null;
                if (!u) throw Error(r(90));
                Qu(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && Uf(a);
          }
          break t;
        case "textarea":
          Lf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ml(t, !!n.multiple, e, !1);
      }
    }
  }
  var Wu = !1;
  function Xf(t, e, n) {
    if (Wu) return t(e, n);
    Wu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Wu = !1),
        (Nl !== null || Dl !== null) &&
          (Nr(), Nl && ((e = Nl), (t = Dl), (Dl = Nl = null), Gf(e), t)))
      )
        for (e = 0; e < t.length; e++) Gf(t[e]);
    }
  }
  function wa(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[oe] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Fu = !1;
  if (nn)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function () {
          Fu = !0;
        },
      }),
        window.addEventListener("test", Oa, Oa),
        window.removeEventListener("test", Oa, Oa);
    } catch {
      Fu = !1;
    }
  var On = null,
    Pu = null,
    Ki = null;
  function Vf() {
    if (Ki) return Ki;
    var t,
      e = Pu,
      n = e.length,
      a,
      u = "value" in On ? On.value : On.textContent,
      c = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++);
    var m = n - t;
    for (a = 1; a <= m && e[n - a] === u[c - a]; a++);
    return (Ki = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ji(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wi() {
    return !0;
  }
  function Qf() {
    return !1;
  }
  function ce(t) {
    function e(n, a, u, c, m) {
      (this._reactName = n),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = m),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((n = t[v]), (this[v] = n ? n(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Wi
          : Qf),
        (this.isPropagationStopped = Qf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Wi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wi));
        },
        persist: function () {},
        isPersistent: Wi,
      }),
      e
    );
  }
  var al = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fi = ce(al),
    Ma = b({}, al, { view: 0, detail: 0 }),
    k0 = ce(Ma),
    Iu,
    to,
    za,
    Pi = b({}, Ma, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: no,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== za &&
              (za && t.type === "mousemove"
                ? ((Iu = t.screenX - za.screenX), (to = t.screenY - za.screenY))
                : (to = Iu = 0),
              (za = t)),
            Iu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : to;
      },
    }),
    Zf = ce(Pi),
    K0 = b({}, Pi, { dataTransfer: 0 }),
    J0 = ce(K0),
    W0 = b({}, Ma, { relatedTarget: 0 }),
    eo = ce(W0),
    F0 = b({}, al, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    P0 = ce(F0),
    I0 = b({}, al, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    tg = ce(I0),
    eg = b({}, al, { data: 0 }),
    kf = ce(eg),
    ng = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    lg = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ag = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ig(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ag[t])
        ? !!e[t]
        : !1;
  }
  function no() {
    return ig;
  }
  var rg = b({}, Ma, {
      key: function (t) {
        if (t.key) {
          var e = ng[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ji(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? lg[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: no,
      charCode: function (t) {
        return t.type === "keypress" ? Ji(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ji(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    ug = ce(rg),
    og = b({}, Pi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kf = ce(og),
    cg = b({}, Ma, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: no,
    }),
    sg = ce(cg),
    fg = b({}, al, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dg = ce(fg),
    mg = b({}, Pi, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    hg = ce(mg),
    pg = b({}, al, { newState: 0, oldState: 0 }),
    vg = ce(pg),
    gg = [9, 13, 27, 32],
    lo = nn && "CompositionEvent" in window,
    Na = null;
  nn && "documentMode" in document && (Na = document.documentMode);
  var yg = nn && "TextEvent" in window && !Na,
    Jf = nn && (!lo || (Na && 8 < Na && 11 >= Na)),
    Wf = " ",
    Ff = !1;
  function Pf(t, e) {
    switch (t) {
      case "keyup":
        return gg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function If(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var jl = !1;
  function bg(t, e) {
    switch (t) {
      case "compositionend":
        return If(e);
      case "keypress":
        return e.which !== 32 ? null : ((Ff = !0), Wf);
      case "textInput":
        return (t = e.data), t === Wf && Ff ? null : t;
      default:
        return null;
    }
  }
  function Sg(t, e) {
    if (jl)
      return t === "compositionend" || (!lo && Pf(t, e))
        ? ((t = Vf()), (Ki = Pu = On = null), (jl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Jf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var xg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function td(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!xg[t.type] : e === "textarea";
  }
  function ed(t, e, n, a) {
    Nl ? (Dl ? Dl.push(a) : (Dl = [a])) : (Nl = a),
      (e = Lr(e, "onChange")),
      0 < e.length &&
        ((n = new Fi("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var Da = null,
    ja = null;
  function Eg(t) {
    Bh(t, 0);
  }
  function Ii(t) {
    var e = _a(t);
    if (Uf(e)) return t;
  }
  function nd(t, e) {
    if (t === "change") return e;
  }
  var ld = !1;
  if (nn) {
    var ao;
    if (nn) {
      var io = "oninput" in document;
      if (!io) {
        var ad = document.createElement("div");
        ad.setAttribute("oninput", "return;"),
          (io = typeof ad.oninput == "function");
      }
      ao = io;
    } else ao = !1;
    ld = ao && (!document.documentMode || 9 < document.documentMode);
  }
  function id() {
    Da && (Da.detachEvent("onpropertychange", rd), (ja = Da = null));
  }
  function rd(t) {
    if (t.propertyName === "value" && Ii(ja)) {
      var e = [];
      ed(e, ja, t, Ju(t)), Xf(Eg, e);
    }
  }
  function Rg(t, e, n) {
    t === "focusin"
      ? (id(), (Da = e), (ja = n), Da.attachEvent("onpropertychange", rd))
      : t === "focusout" && id();
  }
  function Tg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ii(ja);
  }
  function Ag(t, e) {
    if (t === "click") return Ii(e);
  }
  function Cg(t, e) {
    if (t === "input" || t === "change") return Ii(e);
  }
  function _g(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ve = typeof Object.is == "function" ? Object.is : _g;
  function Ba(t, e) {
    if (ve(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var u = n[a];
      if (!el.call(e, u) || !ve(t[u], e[u])) return !1;
    }
    return !0;
  }
  function ud(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function od(t, e) {
    var n = ud(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ud(n);
    }
  }
  function cd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? cd(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function sd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Zi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Zi(t.document);
    }
    return e;
  }
  function ro(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var wg = nn && "documentMode" in document && 11 >= document.documentMode,
    Bl = null,
    uo = null,
    Ua = null,
    oo = !1;
  function fd(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    oo ||
      Bl == null ||
      Bl !== Zi(a) ||
      ((a = Bl),
      "selectionStart" in a && ro(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ua && Ba(Ua, a)) ||
        ((Ua = a),
        (a = Lr(uo, "onSelect")),
        0 < a.length &&
          ((e = new Fi("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = Bl))));
  }
  function il(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ul = {
      animationend: il("Animation", "AnimationEnd"),
      animationiteration: il("Animation", "AnimationIteration"),
      animationstart: il("Animation", "AnimationStart"),
      transitionrun: il("Transition", "TransitionRun"),
      transitionstart: il("Transition", "TransitionStart"),
      transitioncancel: il("Transition", "TransitionCancel"),
      transitionend: il("Transition", "TransitionEnd"),
    },
    co = {},
    dd = {};
  nn &&
    ((dd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ul.animationend.animation,
      delete Ul.animationiteration.animation,
      delete Ul.animationstart.animation),
    "TransitionEvent" in window || delete Ul.transitionend.transition);
  function rl(t) {
    if (co[t]) return co[t];
    if (!Ul[t]) return t;
    var e = Ul[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in dd) return (co[t] = e[n]);
    return t;
  }
  var md = rl("animationend"),
    hd = rl("animationiteration"),
    pd = rl("animationstart"),
    Og = rl("transitionrun"),
    Mg = rl("transitionstart"),
    zg = rl("transitioncancel"),
    vd = rl("transitionend"),
    gd = new Map(),
    so =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  so.push("scrollEnd");
  function Le(t, e) {
    gd.set(t, e), ll(e, [t]);
  }
  var yd = new WeakMap();
  function _e(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = yd.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: jf(e) }), yd.set(t, e), e);
    }
    return { value: t, source: e, stack: jf(e) };
  }
  var we = [],
    Hl = 0,
    fo = 0;
  function tr() {
    for (var t = Hl, e = (fo = Hl = 0); e < t; ) {
      var n = we[e];
      we[e++] = null;
      var a = we[e];
      we[e++] = null;
      var u = we[e];
      we[e++] = null;
      var c = we[e];
      if (((we[e++] = null), a !== null && u !== null)) {
        var m = a.pending;
        m === null ? (u.next = u) : ((u.next = m.next), (m.next = u)),
          (a.pending = u);
      }
      c !== 0 && bd(n, u, c);
    }
  }
  function er(t, e, n, a) {
    (we[Hl++] = t),
      (we[Hl++] = e),
      (we[Hl++] = n),
      (we[Hl++] = a),
      (fo |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function mo(t, e, n, a) {
    return er(t, e, n, a), nr(t);
  }
  function Ll(t, e) {
    return er(t, null, null, e), nr(t);
  }
  function bd(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var u = !1, c = t.return; c !== null; )
      (c.childLanes |= n),
        (a = c.alternate),
        a !== null && (a.childLanes |= n),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = c),
        (c = c.return);
    return t.tag === 3
      ? ((c = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - pe(n)),
          (t = c.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        c)
      : null;
  }
  function nr(t) {
    if (50 < ui) throw ((ui = 0), (bc = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var $l = {};
  function Ng(t, e, n, a) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ge(t, e, n, a) {
    return new Ng(t, e, n, a);
  }
  function ho(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function ln(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = ge(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Sd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function lr(t, e, n, a, u, c) {
    var m = 0;
    if (((a = t), typeof t == "function")) ho(t) && (m = 1);
    else if (typeof t == "string")
      m = jy(t, n, lt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case tt:
          return (t = ge(31, n, e, u)), (t.elementType = tt), (t.lanes = c), t;
        case _:
          return ul(n.children, u, c, e);
        case R:
          (m = 8), (u |= 24);
          break;
        case M:
          return (
            (t = ge(12, n, e, u | 2)), (t.elementType = M), (t.lanes = c), t
          );
        case L:
          return (t = ge(13, n, e, u)), (t.elementType = L), (t.lanes = c), t;
        case W:
          return (t = ge(19, n, e, u)), (t.elementType = W), (t.lanes = c), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Y:
              case B:
                m = 10;
                break t;
              case G:
                m = 9;
                break t;
              case X:
                m = 11;
                break t;
              case P:
                m = 14;
                break t;
              case et:
                (m = 16), (a = null);
                break t;
            }
          (m = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = ge(m, n, e, u)), (e.elementType = t), (e.type = a), (e.lanes = c), e
    );
  }
  function ul(t, e, n, a) {
    return (t = ge(7, t, a, e)), (t.lanes = n), t;
  }
  function po(t, e, n) {
    return (t = ge(6, t, null, e)), (t.lanes = n), t;
  }
  function vo(t, e, n) {
    return (
      (e = ge(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Yl = [],
    ql = 0,
    ar = null,
    ir = 0,
    Oe = [],
    Me = 0,
    ol = null,
    an = 1,
    rn = "";
  function cl(t, e) {
    (Yl[ql++] = ir), (Yl[ql++] = ar), (ar = t), (ir = e);
  }
  function xd(t, e, n) {
    (Oe[Me++] = an), (Oe[Me++] = rn), (Oe[Me++] = ol), (ol = t);
    var a = an;
    t = rn;
    var u = 32 - pe(a) - 1;
    (a &= ~(1 << u)), (n += 1);
    var c = 32 - pe(e) + u;
    if (30 < c) {
      var m = u - (u % 5);
      (c = (a & ((1 << m) - 1)).toString(32)),
        (a >>= m),
        (u -= m),
        (an = (1 << (32 - pe(e) + u)) | (n << u) | a),
        (rn = c + t);
    } else (an = (1 << c) | (n << u) | a), (rn = t);
  }
  function go(t) {
    t.return !== null && (cl(t, 1), xd(t, 1, 0));
  }
  function yo(t) {
    for (; t === ar; )
      (ar = Yl[--ql]), (Yl[ql] = null), (ir = Yl[--ql]), (Yl[ql] = null);
    for (; t === ol; )
      (ol = Oe[--Me]),
        (Oe[Me] = null),
        (rn = Oe[--Me]),
        (Oe[Me] = null),
        (an = Oe[--Me]),
        (Oe[Me] = null);
  }
  var ue = null,
    $t = null,
    Ct = !1,
    sl = null,
    Qe = !1,
    bo = Error(r(519));
  function fl(t) {
    var e = Error(r(418, ""));
    throw ($a(_e(e, t)), bo);
  }
  function Ed(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[ae] = t), (e[oe] = a), n)) {
      case "dialog":
        St("cancel", e), St("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        St("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ci.length; n++) St(ci[n], e);
        break;
      case "source":
        St("error", e);
        break;
      case "img":
      case "image":
      case "link":
        St("error", e), St("load", e);
        break;
      case "details":
        St("toggle", e);
        break;
      case "input":
        St("invalid", e),
          Hf(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          Qi(e);
        break;
      case "select":
        St("invalid", e);
        break;
      case "textarea":
        St("invalid", e), $f(e, a.value, a.defaultValue, a.children), Qi(e);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      $h(e.textContent, n)
        ? (a.popover != null && (St("beforetoggle", e), St("toggle", e)),
          a.onScroll != null && St("scroll", e),
          a.onScrollEnd != null && St("scrollend", e),
          a.onClick != null && (e.onclick = $r),
          (e = !0))
        : (e = !1),
      e || fl(t);
  }
  function Rd(t) {
    for (ue = t.return; ue; )
      switch (ue.tag) {
        case 5:
        case 13:
          Qe = !1;
          return;
        case 27:
        case 3:
          Qe = !0;
          return;
        default:
          ue = ue.return;
      }
  }
  function Ha(t) {
    if (t !== ue) return !1;
    if (!Ct) return Rd(t), (Ct = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Bc(t.type, t.memoizedProps))),
        (n = !n)),
      n && $t && fl(t),
      Rd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                $t = Ye(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        $t = null;
      }
    } else
      e === 27
        ? ((e = $t), Qn(t.type) ? ((t = $c), ($c = null), ($t = t)) : ($t = e))
        : ($t = ue ? Ye(t.stateNode.nextSibling) : null);
    return !0;
  }
  function La() {
    ($t = ue = null), (Ct = !1);
  }
  function Td() {
    var t = sl;
    return (
      t !== null &&
        (de === null ? (de = t) : de.push.apply(de, t), (sl = null)),
      t
    );
  }
  function $a(t) {
    sl === null ? (sl = [t]) : sl.push(t);
  }
  var So = N(null),
    dl = null,
    un = null;
  function Mn(t, e, n) {
    F(So, e._currentValue), (e._currentValue = n);
  }
  function on(t) {
    (t._currentValue = So.current), J(So);
  }
  function xo(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Eo(t, e, n, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var m = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = u;
          for (var E = 0; E < e.length; E++)
            if (v.context === e[E]) {
              (c.lanes |= n),
                (v = c.alternate),
                v !== null && (v.lanes |= n),
                xo(c.return, n, t),
                a || (m = null);
              break t;
            }
          c = v.next;
        }
      } else if (u.tag === 18) {
        if (((m = u.return), m === null)) throw Error(r(341));
        (m.lanes |= n),
          (c = m.alternate),
          c !== null && (c.lanes |= n),
          xo(m, n, t),
          (m = null);
      } else m = u.child;
      if (m !== null) m.return = u;
      else
        for (m = u; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (((u = m.sibling), u !== null)) {
            (u.return = m.return), (m = u);
            break;
          }
          m = m.return;
        }
      u = m;
    }
  }
  function Ya(t, e, n, a) {
    t = null;
    for (var u = e, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var m = u.alternate;
        if (m === null) throw Error(r(387));
        if (((m = m.memoizedProps), m !== null)) {
          var v = u.type;
          ve(u.pendingProps.value, m.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (u === Tt.current) {
        if (((m = u.alternate), m === null)) throw Error(r(387));
        m.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(pi) : (t = [pi]));
      }
      u = u.return;
    }
    t !== null && Eo(e, t, n, a), (e.flags |= 262144);
  }
  function rr(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ve(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ml(t) {
    (dl = t),
      (un = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ie(t) {
    return Ad(dl, t);
  }
  function ur(t, e) {
    return dl === null && ml(t), Ad(t, e);
  }
  function Ad(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), un === null)) {
      if (t === null) throw Error(r(308));
      (un = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else un = un.next = e;
    return n;
  }
  var Dg =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    jg = l.unstable_scheduleCallback,
    Bg = l.unstable_NormalPriority,
    Qt = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ro() {
    return { controller: new Dg(), data: new Map(), refCount: 0 };
  }
  function qa(t) {
    t.refCount--,
      t.refCount === 0 &&
        jg(Bg, function () {
          t.controller.abort();
        });
  }
  var Ga = null,
    To = 0,
    Gl = 0,
    Xl = null;
  function Ug(t, e) {
    if (Ga === null) {
      var n = (Ga = []);
      (To = 0),
        (Gl = Cc()),
        (Xl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return To++, e.then(Cd, Cd), e;
  }
  function Cd() {
    if (--To === 0 && Ga !== null) {
      Xl !== null && (Xl.status = "fulfilled");
      var t = Ga;
      (Ga = null), (Gl = 0), (Xl = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Hg(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var u = 0; u < n.length; u++) (0, n[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        },
      ),
      a
    );
  }
  var _d = O.S;
  O.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Ug(t, e),
      _d !== null && _d(t, e);
  };
  var hl = N(null);
  function Ao() {
    var t = hl.current;
    return t !== null ? t : jt.pooledCache;
  }
  function or(t, e) {
    e === null ? F(hl, hl.current) : F(hl, e.pool);
  }
  function wd() {
    var t = Ao();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var Xa = Error(r(460)),
    Od = Error(r(474)),
    cr = Error(r(542)),
    Co = { then: function () {} };
  function Md(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function sr() {}
  function zd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(sr, sr), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Dd(t), t);
      default:
        if (typeof e.status == "string") e.then(sr, sr);
        else {
          if (((t = jt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = a);
                }
              },
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Dd(t), t);
        }
        throw ((Va = e), Xa);
    }
  }
  var Va = null;
  function Nd() {
    if (Va === null) throw Error(r(459));
    var t = Va;
    return (Va = null), t;
  }
  function Dd(t) {
    if (t === Xa || t === cr) throw Error(r(483));
  }
  var zn = !1;
  function _o(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function wo(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Nn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Dn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (_t & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = nr(t)),
        bd(t, null, n),
        e
      );
    }
    return er(t, a, e, n), nr(t);
  }
  function Qa(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), Cf(t, n);
    }
  }
  function Oo(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var u = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          c === null ? (u = c = m) : (c = c.next = m), (n = n.next);
        } while (n !== null);
        c === null ? (u = c = e) : (c = c.next = e);
      } else u = c = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Mo = !1;
  function Za() {
    if (Mo) {
      var t = Xl;
      if (t !== null) throw t;
    }
  }
  function ka(t, e, n, a) {
    Mo = !1;
    var u = t.updateQueue;
    zn = !1;
    var c = u.firstBaseUpdate,
      m = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var E = v,
        D = E.next;
      (E.next = null), m === null ? (c = D) : (m.next = D), (m = E);
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (v = V.lastBaseUpdate),
        v !== m &&
          (v === null ? (V.firstBaseUpdate = D) : (v.next = D),
          (V.lastBaseUpdate = E)));
    }
    if (c !== null) {
      var k = u.baseState;
      (m = 0), (V = D = E = null), (v = c);
      do {
        var U = v.lane & -536870913,
          H = U !== v.lane;
        if (H ? (Et & U) === U : (a & U) === U) {
          U !== 0 && U === Gl && (Mo = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var dt = t,
              st = v;
            U = e;
            var zt = n;
            switch (st.tag) {
              case 1:
                if (((dt = st.payload), typeof dt == "function")) {
                  k = dt.call(zt, k, U);
                  break t;
                }
                k = dt;
                break t;
              case 3:
                dt.flags = (dt.flags & -65537) | 128;
              case 0:
                if (
                  ((dt = st.payload),
                  (U = typeof dt == "function" ? dt.call(zt, k, U) : dt),
                  U == null)
                )
                  break t;
                k = b({}, k, U);
                break t;
              case 2:
                zn = !0;
            }
          }
          (U = v.callback),
            U !== null &&
              ((t.flags |= 64),
              H && (t.flags |= 8192),
              (H = u.callbacks),
              H === null ? (u.callbacks = [U]) : H.push(U));
        } else
          (H = {
            lane: U,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            V === null ? ((D = V = H), (E = k)) : (V = V.next = H),
            (m |= U);
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          (H = v),
            (v = H.next),
            (H.next = null),
            (u.lastBaseUpdate = H),
            (u.shared.pending = null);
        }
      } while (!0);
      V === null && (E = k),
        (u.baseState = E),
        (u.firstBaseUpdate = D),
        (u.lastBaseUpdate = V),
        c === null && (u.shared.lanes = 0),
        (qn |= m),
        (t.lanes = m),
        (t.memoizedState = k);
    }
  }
  function jd(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Bd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) jd(n[t], e);
  }
  var Vl = N(null),
    fr = N(0);
  function Ud(t, e) {
    (t = pn), F(fr, t), F(Vl, e), (pn = t | e.baseLanes);
  }
  function zo() {
    F(fr, pn), F(Vl, Vl.current);
  }
  function No() {
    (pn = fr.current), J(Vl), J(fr);
  }
  var jn = 0,
    vt = null,
    Ot = null,
    Xt = null,
    dr = !1,
    Ql = !1,
    pl = !1,
    mr = 0,
    Ka = 0,
    Zl = null,
    Lg = 0;
  function qt() {
    throw Error(r(321));
  }
  function Do(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!ve(t[n], e[n])) return !1;
    return !0;
  }
  function jo(t, e, n, a, u, c) {
    return (
      (jn = c),
      (vt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? bm : Sm),
      (pl = !1),
      (c = n(a, u)),
      (pl = !1),
      Ql && (c = Ld(e, n, a, u)),
      Hd(t),
      c
    );
  }
  function Hd(t) {
    O.H = br;
    var e = Ot !== null && Ot.next !== null;
    if (((jn = 0), (Xt = Ot = vt = null), (dr = !1), (Ka = 0), (Zl = null), e))
      throw Error(r(300));
    t === null ||
      Kt ||
      ((t = t.dependencies), t !== null && rr(t) && (Kt = !0));
  }
  function Ld(t, e, n, a) {
    vt = t;
    var u = 0;
    do {
      if ((Ql && (Zl = null), (Ka = 0), (Ql = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Xt = Ot = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (O.H = Qg), (c = e(n, a));
    } while (Ql);
    return c;
  }
  function $g() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ja(e) : e),
      (t = t.useState()[0]),
      (Ot !== null ? Ot.memoizedState : null) !== t && (vt.flags |= 1024),
      e
    );
  }
  function Bo() {
    var t = mr !== 0;
    return (mr = 0), t;
  }
  function Uo(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Ho(t) {
    if (dr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      dr = !1;
    }
    (jn = 0), (Xt = Ot = vt = null), (Ql = !1), (Ka = mr = 0), (Zl = null);
  }
  function se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xt === null ? (vt.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt;
  }
  function Vt() {
    if (Ot === null) {
      var t = vt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ot.next;
    var e = Xt === null ? vt.memoizedState : Xt.next;
    if (e !== null) (Xt = e), (Ot = t);
    else {
      if (t === null)
        throw vt.alternate === null ? Error(r(467)) : Error(r(310));
      (Ot = t),
        (t = {
          memoizedState: Ot.memoizedState,
          baseState: Ot.baseState,
          baseQueue: Ot.baseQueue,
          queue: Ot.queue,
          next: null,
        }),
        Xt === null ? (vt.memoizedState = Xt = t) : (Xt = Xt.next = t);
    }
    return Xt;
  }
  function Lo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ja(t) {
    var e = Ka;
    return (
      (Ka += 1),
      Zl === null && (Zl = []),
      (t = zd(Zl, t, e)),
      (e = vt),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate),
        (O.H = e === null || e.memoizedState === null ? bm : Sm)),
      t
    );
  }
  function hr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ja(t);
      if (t.$$typeof === B) return ie(t);
    }
    throw Error(r(438, String(t)));
  }
  function $o(t) {
    var e = null,
      n = vt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = vt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Lo()), (vt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = ut;
    return e.index++, n;
  }
  function cn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function pr(t) {
    var e = Vt();
    return Yo(e, Ot, t);
  }
  function Yo(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var u = t.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (u !== null) {
        var m = u.next;
        (u.next = c.next), (c.next = m);
      }
      (e.baseQueue = u = c), (a.pending = null);
    }
    if (((c = t.baseState), u === null)) t.memoizedState = c;
    else {
      e = u.next;
      var v = (m = null),
        E = null,
        D = e,
        V = !1;
      do {
        var k = D.lane & -536870913;
        if (k !== D.lane ? (Et & k) === k : (jn & k) === k) {
          var U = D.revertLane;
          if (U === 0)
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              k === Gl && (V = !0);
          else if ((jn & U) === U) {
            (D = D.next), U === Gl && (V = !0);
            continue;
          } else
            (k = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              E === null ? ((v = E = k), (m = c)) : (E = E.next = k),
              (vt.lanes |= U),
              (qn |= U);
          (k = D.action),
            pl && n(c, k),
            (c = D.hasEagerState ? D.eagerState : n(c, k));
        } else
          (U = {
            lane: k,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            E === null ? ((v = E = U), (m = c)) : (E = E.next = U),
            (vt.lanes |= k),
            (qn |= k);
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (E === null ? (m = c) : (E.next = v),
        !ve(c, t.memoizedState) && ((Kt = !0), V && ((n = Xl), n !== null)))
      )
        throw n;
      (t.memoizedState = c),
        (t.baseState = m),
        (t.baseQueue = E),
        (a.lastRenderedState = c);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function qo(t) {
    var e = Vt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      u = n.pending,
      c = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var m = (u = u.next);
      do (c = t(c, m.action)), (m = m.next);
      while (m !== u);
      ve(c, e.memoizedState) || (Kt = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (n.lastRenderedState = c);
    }
    return [c, a];
  }
  function $d(t, e, n) {
    var a = vt,
      u = Vt(),
      c = Ct;
    if (c) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var m = !ve((Ot || u).memoizedState, n);
    m && ((u.memoizedState = n), (Kt = !0)), (u = u.queue);
    var v = Gd.bind(null, a, u, t);
    if (
      (Wa(2048, 8, v, [t]),
      u.getSnapshot !== e || m || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        kl(9, vr(), qd.bind(null, a, u, n, e), null),
        jt === null)
      )
        throw Error(r(349));
      c || (jn & 124) !== 0 || Yd(a, e, n);
    }
    return n;
  }
  function Yd(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = vt.updateQueue),
      e === null
        ? ((e = Lo()), (vt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function qd(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), Xd(e) && Vd(t);
  }
  function Gd(t, e, n) {
    return n(function () {
      Xd(e) && Vd(t);
    });
  }
  function Xd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ve(t, n);
    } catch {
      return !0;
    }
  }
  function Vd(t) {
    var e = Ll(t, 2);
    e !== null && Ee(e, t, 2);
  }
  function Go(t) {
    var e = se();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), pl)) {
        _n(!0);
        try {
          n();
        } finally {
          _n(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Qd(t, e, n, a) {
    return (t.baseState = n), Yo(t, Ot, typeof a == "function" ? a : cn);
  }
  function Yg(t, e, n, a, u) {
    if (yr(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          c.listeners.push(m);
        },
      };
      O.T !== null ? n(!0) : (c.isTransition = !1),
        a(c),
        (n = e.pending),
        n === null
          ? ((c.next = e.pending = c), Zd(e, c))
          : ((c.next = n.next), (e.pending = n.next = c));
    }
  }
  function Zd(t, e) {
    var n = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var c = O.T,
        m = {};
      O.T = m;
      try {
        var v = n(u, a),
          E = O.S;
        E !== null && E(m, v), kd(t, e, v);
      } catch (D) {
        Xo(t, e, D);
      } finally {
        O.T = c;
      }
    } else
      try {
        (c = n(u, a)), kd(t, e, c);
      } catch (D) {
        Xo(t, e, D);
      }
  }
  function kd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Kd(t, e, a);
          },
          function (a) {
            return Xo(t, e, a);
          },
        )
      : Kd(t, e, n);
  }
  function Kd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Jd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Zd(t, n)));
  }
  function Xo(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), Jd(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Jd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Wd(t, e) {
    return e;
  }
  function Fd(t, e) {
    if (Ct) {
      var n = jt.formState;
      if (n !== null) {
        t: {
          var a = vt;
          if (Ct) {
            if ($t) {
              e: {
                for (var u = $t, c = Qe; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (((u = Ye(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (c = u.data), (u = c === "F!" || c === "F" ? u : null);
              }
              if (u) {
                ($t = Ye(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            fl(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = se()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wd,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = vm.bind(null, vt, a)),
      (a.dispatch = n),
      (a = Go(!1)),
      (c = Ko.bind(null, vt, !1, a.queue)),
      (a = se()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (n = Yg.bind(null, vt, u, c, n)),
      (u.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function Pd(t) {
    var e = Vt();
    return Id(e, Ot, t);
  }
  function Id(t, e, n) {
    if (
      ((e = Yo(t, e, Wd)[0]),
      (t = pr(cn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Ja(e);
      } catch (m) {
        throw m === Xa ? cr : m;
      }
    else a = e;
    e = Vt();
    var u = e.queue,
      c = u.dispatch;
    return (
      n !== e.memoizedState &&
        ((vt.flags |= 2048), kl(9, vr(), qg.bind(null, u, n), null)),
      [a, c, t]
    );
  }
  function qg(t, e) {
    t.action = e;
  }
  function tm(t) {
    var e = Vt(),
      n = Ot;
    if (n !== null) return Id(e, n, t);
    Vt(), (e = e.memoizedState), (n = Vt());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function kl(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = vt.updateQueue),
      e === null && ((e = Lo()), (vt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function vr() {
    return { destroy: void 0, resource: void 0 };
  }
  function em() {
    return Vt().memoizedState;
  }
  function gr(t, e, n, a) {
    var u = se();
    (a = a === void 0 ? null : a),
      (vt.flags |= t),
      (u.memoizedState = kl(1 | e, vr(), n, a));
  }
  function Wa(t, e, n, a) {
    var u = Vt();
    a = a === void 0 ? null : a;
    var c = u.memoizedState.inst;
    Ot !== null && a !== null && Do(a, Ot.memoizedState.deps)
      ? (u.memoizedState = kl(e, c, n, a))
      : ((vt.flags |= t), (u.memoizedState = kl(1 | e, c, n, a)));
  }
  function nm(t, e) {
    gr(8390656, 8, t, e);
  }
  function lm(t, e) {
    Wa(2048, 8, t, e);
  }
  function am(t, e) {
    return Wa(4, 2, t, e);
  }
  function im(t, e) {
    return Wa(4, 4, t, e);
  }
  function rm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function um(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Wa(4, 4, rm.bind(null, e, t), n);
  }
  function Vo() {}
  function om(t, e) {
    var n = Vt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Do(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function cm(t, e) {
    var n = Vt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Do(e, a[1])) return a[0];
    if (((a = t()), pl)) {
      _n(!0);
      try {
        t();
      } finally {
        _n(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function Qo(t, e, n) {
    return n === void 0 || (jn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = dh()), (vt.lanes |= t), (qn |= t), n);
  }
  function sm(t, e, n, a) {
    return ve(n, e)
      ? n
      : Vl.current !== null
        ? ((t = Qo(t, n, a)), ve(t, e) || (Kt = !0), t)
        : (jn & 42) === 0
          ? ((Kt = !0), (t.memoizedState = n))
          : ((t = dh()), (vt.lanes |= t), (qn |= t), e);
  }
  function fm(t, e, n, a, u) {
    var c = $.p;
    $.p = c !== 0 && 8 > c ? c : 8;
    var m = O.T,
      v = {};
    (O.T = v), Ko(t, !1, e, n);
    try {
      var E = u(),
        D = O.S;
      if (
        (D !== null && D(v, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var V = Hg(E, a);
        Fa(t, e, V, xe(t));
      } else Fa(t, e, a, xe(t));
    } catch (k) {
      Fa(t, e, { then: function () {}, status: "rejected", reason: k }, xe());
    } finally {
      ($.p = c), (O.T = m);
    }
  }
  function Gg() {}
  function Zo(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = dm(t).queue;
    fm(
      t,
      u,
      e,
      q,
      n === null
        ? Gg
        : function () {
            return mm(t), n(a);
          },
    );
  }
  function dm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: q,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function mm(t) {
    var e = dm(t).next.queue;
    Fa(t, e, {}, xe());
  }
  function ko() {
    return ie(pi);
  }
  function hm() {
    return Vt().memoizedState;
  }
  function pm() {
    return Vt().memoizedState;
  }
  function Xg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = xe();
          t = Nn(n);
          var a = Dn(e, t, n);
          a !== null && (Ee(a, e, n), Qa(a, e, n)),
            (e = { cache: Ro() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Vg(t, e, n) {
    var a = xe();
    (n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      yr(t)
        ? gm(e, n)
        : ((n = mo(t, e, n, a)), n !== null && (Ee(n, t, a), ym(n, e, a)));
  }
  function vm(t, e, n) {
    var a = xe();
    Fa(t, e, n, a);
  }
  function Fa(t, e, n, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yr(t)) gm(e, u);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var m = e.lastRenderedState,
            v = c(m, n);
          if (((u.hasEagerState = !0), (u.eagerState = v), ve(v, m)))
            return er(t, e, u, 0), jt === null && tr(), !1;
        } catch {
        } finally {
        }
      if (((n = mo(t, e, u, a)), n !== null))
        return Ee(n, t, a), ym(n, e, a), !0;
    }
    return !1;
  }
  function Ko(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Cc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yr(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = mo(t, n, a, 2)), e !== null && Ee(e, t, 2);
  }
  function yr(t) {
    var e = t.alternate;
    return t === vt || (e !== null && e === vt);
  }
  function gm(t, e) {
    Ql = dr = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function ym(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), Cf(t, n);
    }
  }
  var br = {
      readContext: ie,
      use: hr,
      useCallback: qt,
      useContext: qt,
      useEffect: qt,
      useImperativeHandle: qt,
      useLayoutEffect: qt,
      useInsertionEffect: qt,
      useMemo: qt,
      useReducer: qt,
      useRef: qt,
      useState: qt,
      useDebugValue: qt,
      useDeferredValue: qt,
      useTransition: qt,
      useSyncExternalStore: qt,
      useId: qt,
      useHostTransitionStatus: qt,
      useFormState: qt,
      useActionState: qt,
      useOptimistic: qt,
      useMemoCache: qt,
      useCacheRefresh: qt,
    },
    bm = {
      readContext: ie,
      use: hr,
      useCallback: function (t, e) {
        return (se().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ie,
      useEffect: nm,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          gr(4194308, 4, rm.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return gr(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        gr(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = se();
        e = e === void 0 ? null : e;
        var a = t();
        if (pl) {
          _n(!0);
          try {
            t();
          } finally {
            _n(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = se();
        if (n !== void 0) {
          var u = n(e);
          if (pl) {
            _n(!0);
            try {
              n(e);
            } finally {
              _n(!1);
            }
          }
        } else u = e;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = Vg.bind(null, vt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = se();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Go(t);
        var e = t.queue,
          n = vm.bind(null, vt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Vo,
      useDeferredValue: function (t, e) {
        var n = se();
        return Qo(n, t, e);
      },
      useTransition: function () {
        var t = Go(!1);
        return (
          (t = fm.bind(null, vt, t.queue, !0, !1)),
          (se().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = vt,
          u = se();
        if (Ct) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), jt === null)) throw Error(r(349));
          (Et & 124) !== 0 || Yd(a, e, n);
        }
        u.memoizedState = n;
        var c = { value: n, getSnapshot: e };
        return (
          (u.queue = c),
          nm(Gd.bind(null, a, c, t), [t]),
          (a.flags |= 2048),
          kl(9, vr(), qd.bind(null, a, c, n, e), null),
          n
        );
      },
      useId: function () {
        var t = se(),
          e = jt.identifierPrefix;
        if (Ct) {
          var n = rn,
            a = an;
          (n = (a & ~(1 << (32 - pe(a) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = mr++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = Lg++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: ko,
      useFormState: Fd,
      useActionState: Fd,
      useOptimistic: function (t) {
        var e = se();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Ko.bind(null, vt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: $o,
      useCacheRefresh: function () {
        return (se().memoizedState = Xg.bind(null, vt));
      },
    },
    Sm = {
      readContext: ie,
      use: hr,
      useCallback: om,
      useContext: ie,
      useEffect: lm,
      useImperativeHandle: um,
      useInsertionEffect: am,
      useLayoutEffect: im,
      useMemo: cm,
      useReducer: pr,
      useRef: em,
      useState: function () {
        return pr(cn);
      },
      useDebugValue: Vo,
      useDeferredValue: function (t, e) {
        var n = Vt();
        return sm(n, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = pr(cn)[0],
          e = Vt().memoizedState;
        return [typeof t == "boolean" ? t : Ja(t), e];
      },
      useSyncExternalStore: $d,
      useId: hm,
      useHostTransitionStatus: ko,
      useFormState: Pd,
      useActionState: Pd,
      useOptimistic: function (t, e) {
        var n = Vt();
        return Qd(n, Ot, t, e);
      },
      useMemoCache: $o,
      useCacheRefresh: pm,
    },
    Qg = {
      readContext: ie,
      use: hr,
      useCallback: om,
      useContext: ie,
      useEffect: lm,
      useImperativeHandle: um,
      useInsertionEffect: am,
      useLayoutEffect: im,
      useMemo: cm,
      useReducer: qo,
      useRef: em,
      useState: function () {
        return qo(cn);
      },
      useDebugValue: Vo,
      useDeferredValue: function (t, e) {
        var n = Vt();
        return Ot === null ? Qo(n, t, e) : sm(n, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = qo(cn)[0],
          e = Vt().memoizedState;
        return [typeof t == "boolean" ? t : Ja(t), e];
      },
      useSyncExternalStore: $d,
      useId: hm,
      useHostTransitionStatus: ko,
      useFormState: tm,
      useActionState: tm,
      useOptimistic: function (t, e) {
        var n = Vt();
        return Ot !== null
          ? Qd(n, Ot, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: $o,
      useCacheRefresh: pm,
    },
    Kl = null,
    Pa = 0;
  function Sr(t) {
    var e = Pa;
    return (Pa += 1), Kl === null && (Kl = []), zd(Kl, t, e);
  }
  function Ia(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function xr(t, e) {
    throw e.$$typeof === y
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function xm(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Em(t) {
    function e(w, C) {
      if (t) {
        var z = w.deletions;
        z === null ? ((w.deletions = [C]), (w.flags |= 16)) : z.push(C);
      }
    }
    function n(w, C) {
      if (!t) return null;
      for (; C !== null; ) e(w, C), (C = C.sibling);
      return null;
    }
    function a(w) {
      for (var C = new Map(); w !== null; )
        w.key !== null ? C.set(w.key, w) : C.set(w.index, w), (w = w.sibling);
      return C;
    }
    function u(w, C) {
      return (w = ln(w, C)), (w.index = 0), (w.sibling = null), w;
    }
    function c(w, C, z) {
      return (
        (w.index = z),
        t
          ? ((z = w.alternate),
            z !== null
              ? ((z = z.index), z < C ? ((w.flags |= 67108866), C) : z)
              : ((w.flags |= 67108866), C))
          : ((w.flags |= 1048576), C)
      );
    }
    function m(w) {
      return t && w.alternate === null && (w.flags |= 67108866), w;
    }
    function v(w, C, z, Q) {
      return C === null || C.tag !== 6
        ? ((C = po(z, w.mode, Q)), (C.return = w), C)
        : ((C = u(C, z)), (C.return = w), C);
    }
    function E(w, C, z, Q) {
      var at = z.type;
      return at === _
        ? V(w, C, z.props.children, Q, z.key)
        : C !== null &&
            (C.elementType === at ||
              (typeof at == "object" &&
                at !== null &&
                at.$$typeof === et &&
                xm(at) === C.type))
          ? ((C = u(C, z.props)), Ia(C, z), (C.return = w), C)
          : ((C = lr(z.type, z.key, z.props, null, w.mode, Q)),
            Ia(C, z),
            (C.return = w),
            C);
    }
    function D(w, C, z, Q) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== z.containerInfo ||
        C.stateNode.implementation !== z.implementation
        ? ((C = vo(z, w.mode, Q)), (C.return = w), C)
        : ((C = u(C, z.children || [])), (C.return = w), C);
    }
    function V(w, C, z, Q, at) {
      return C === null || C.tag !== 7
        ? ((C = ul(z, w.mode, Q, at)), (C.return = w), C)
        : ((C = u(C, z)), (C.return = w), C);
    }
    function k(w, C, z) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return (C = po("" + C, w.mode, z)), (C.return = w), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case T:
            return (
              (z = lr(C.type, C.key, C.props, null, w.mode, z)),
              Ia(z, C),
              (z.return = w),
              z
            );
          case x:
            return (C = vo(C, w.mode, z)), (C.return = w), C;
          case et:
            var Q = C._init;
            return (C = Q(C._payload)), k(w, C, z);
        }
        if (I(C) || rt(C))
          return (C = ul(C, w.mode, z, null)), (C.return = w), C;
        if (typeof C.then == "function") return k(w, Sr(C), z);
        if (C.$$typeof === B) return k(w, ur(w, C), z);
        xr(w, C);
      }
      return null;
    }
    function U(w, C, z, Q) {
      var at = C !== null ? C.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return at !== null ? null : v(w, C, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case T:
            return z.key === at ? E(w, C, z, Q) : null;
          case x:
            return z.key === at ? D(w, C, z, Q) : null;
          case et:
            return (at = z._init), (z = at(z._payload)), U(w, C, z, Q);
        }
        if (I(z) || rt(z)) return at !== null ? null : V(w, C, z, Q, null);
        if (typeof z.then == "function") return U(w, C, Sr(z), Q);
        if (z.$$typeof === B) return U(w, C, ur(w, z), Q);
        xr(w, z);
      }
      return null;
    }
    function H(w, C, z, Q, at) {
      if (
        (typeof Q == "string" && Q !== "") ||
        typeof Q == "number" ||
        typeof Q == "bigint"
      )
        return (w = w.get(z) || null), v(C, w, "" + Q, at);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case T:
            return (
              (w = w.get(Q.key === null ? z : Q.key) || null), E(C, w, Q, at)
            );
          case x:
            return (
              (w = w.get(Q.key === null ? z : Q.key) || null), D(C, w, Q, at)
            );
          case et:
            var yt = Q._init;
            return (Q = yt(Q._payload)), H(w, C, z, Q, at);
        }
        if (I(Q) || rt(Q)) return (w = w.get(z) || null), V(C, w, Q, at, null);
        if (typeof Q.then == "function") return H(w, C, z, Sr(Q), at);
        if (Q.$$typeof === B) return H(w, C, z, ur(C, Q), at);
        xr(C, Q);
      }
      return null;
    }
    function dt(w, C, z, Q) {
      for (
        var at = null, yt = null, it = C, ft = (C = 0), Wt = null;
        it !== null && ft < z.length;
        ft++
      ) {
        it.index > ft ? ((Wt = it), (it = null)) : (Wt = it.sibling);
        var At = U(w, it, z[ft], Q);
        if (At === null) {
          it === null && (it = Wt);
          break;
        }
        t && it && At.alternate === null && e(w, it),
          (C = c(At, C, ft)),
          yt === null ? (at = At) : (yt.sibling = At),
          (yt = At),
          (it = Wt);
      }
      if (ft === z.length) return n(w, it), Ct && cl(w, ft), at;
      if (it === null) {
        for (; ft < z.length; ft++)
          (it = k(w, z[ft], Q)),
            it !== null &&
              ((C = c(it, C, ft)),
              yt === null ? (at = it) : (yt.sibling = it),
              (yt = it));
        return Ct && cl(w, ft), at;
      }
      for (it = a(it); ft < z.length; ft++)
        (Wt = H(it, w, ft, z[ft], Q)),
          Wt !== null &&
            (t &&
              Wt.alternate !== null &&
              it.delete(Wt.key === null ? ft : Wt.key),
            (C = c(Wt, C, ft)),
            yt === null ? (at = Wt) : (yt.sibling = Wt),
            (yt = Wt));
      return (
        t &&
          it.forEach(function (Wn) {
            return e(w, Wn);
          }),
        Ct && cl(w, ft),
        at
      );
    }
    function st(w, C, z, Q) {
      if (z == null) throw Error(r(151));
      for (
        var at = null,
          yt = null,
          it = C,
          ft = (C = 0),
          Wt = null,
          At = z.next();
        it !== null && !At.done;
        ft++, At = z.next()
      ) {
        it.index > ft ? ((Wt = it), (it = null)) : (Wt = it.sibling);
        var Wn = U(w, it, At.value, Q);
        if (Wn === null) {
          it === null && (it = Wt);
          break;
        }
        t && it && Wn.alternate === null && e(w, it),
          (C = c(Wn, C, ft)),
          yt === null ? (at = Wn) : (yt.sibling = Wn),
          (yt = Wn),
          (it = Wt);
      }
      if (At.done) return n(w, it), Ct && cl(w, ft), at;
      if (it === null) {
        for (; !At.done; ft++, At = z.next())
          (At = k(w, At.value, Q)),
            At !== null &&
              ((C = c(At, C, ft)),
              yt === null ? (at = At) : (yt.sibling = At),
              (yt = At));
        return Ct && cl(w, ft), at;
      }
      for (it = a(it); !At.done; ft++, At = z.next())
        (At = H(it, w, ft, At.value, Q)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              it.delete(At.key === null ? ft : At.key),
            (C = c(At, C, ft)),
            yt === null ? (at = At) : (yt.sibling = At),
            (yt = At));
      return (
        t &&
          it.forEach(function (Zy) {
            return e(w, Zy);
          }),
        Ct && cl(w, ft),
        at
      );
    }
    function zt(w, C, z, Q) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === _ &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case T:
            t: {
              for (var at = z.key; C !== null; ) {
                if (C.key === at) {
                  if (((at = z.type), at === _)) {
                    if (C.tag === 7) {
                      n(w, C.sibling),
                        (Q = u(C, z.props.children)),
                        (Q.return = w),
                        (w = Q);
                      break t;
                    }
                  } else if (
                    C.elementType === at ||
                    (typeof at == "object" &&
                      at !== null &&
                      at.$$typeof === et &&
                      xm(at) === C.type)
                  ) {
                    n(w, C.sibling),
                      (Q = u(C, z.props)),
                      Ia(Q, z),
                      (Q.return = w),
                      (w = Q);
                    break t;
                  }
                  n(w, C);
                  break;
                } else e(w, C);
                C = C.sibling;
              }
              z.type === _
                ? ((Q = ul(z.props.children, w.mode, Q, z.key)),
                  (Q.return = w),
                  (w = Q))
                : ((Q = lr(z.type, z.key, z.props, null, w.mode, Q)),
                  Ia(Q, z),
                  (Q.return = w),
                  (w = Q));
            }
            return m(w);
          case x:
            t: {
              for (at = z.key; C !== null; ) {
                if (C.key === at)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === z.containerInfo &&
                    C.stateNode.implementation === z.implementation
                  ) {
                    n(w, C.sibling),
                      (Q = u(C, z.children || [])),
                      (Q.return = w),
                      (w = Q);
                    break t;
                  } else {
                    n(w, C);
                    break;
                  }
                else e(w, C);
                C = C.sibling;
              }
              (Q = vo(z, w.mode, Q)), (Q.return = w), (w = Q);
            }
            return m(w);
          case et:
            return (at = z._init), (z = at(z._payload)), zt(w, C, z, Q);
        }
        if (I(z)) return dt(w, C, z, Q);
        if (rt(z)) {
          if (((at = rt(z)), typeof at != "function")) throw Error(r(150));
          return (z = at.call(z)), st(w, C, z, Q);
        }
        if (typeof z.then == "function") return zt(w, C, Sr(z), Q);
        if (z.$$typeof === B) return zt(w, C, ur(w, z), Q);
        xr(w, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          C !== null && C.tag === 6
            ? (n(w, C.sibling), (Q = u(C, z)), (Q.return = w), (w = Q))
            : (n(w, C), (Q = po(z, w.mode, Q)), (Q.return = w), (w = Q)),
          m(w))
        : n(w, C);
    }
    return function (w, C, z, Q) {
      try {
        Pa = 0;
        var at = zt(w, C, z, Q);
        return (Kl = null), at;
      } catch (it) {
        if (it === Xa || it === cr) throw it;
        var yt = ge(29, it, null, w.mode);
        return (yt.lanes = Q), (yt.return = w), yt;
      } finally {
      }
    };
  }
  var Jl = Em(!0),
    Rm = Em(!1),
    ze = N(null),
    Ze = null;
  function Bn(t) {
    var e = t.alternate;
    F(Zt, Zt.current & 1),
      F(ze, t),
      Ze === null &&
        (e === null || Vl.current !== null || e.memoizedState !== null) &&
        (Ze = t);
  }
  function Tm(t) {
    if (t.tag === 22) {
      if ((F(Zt, Zt.current), F(ze, t), Ze === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ze = t);
      }
    } else Un();
  }
  function Un() {
    F(Zt, Zt.current), F(ze, ze.current);
  }
  function sn(t) {
    J(ze), Ze === t && (Ze = null), J(Zt);
  }
  var Zt = N(0);
  function Er(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Lc(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Jo(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Wo = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = xe(),
        u = Nn(a);
      (u.payload = e),
        n != null && (u.callback = n),
        (e = Dn(t, u, a)),
        e !== null && (Ee(e, t, a), Qa(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = xe(),
        u = Nn(a);
      (u.tag = 1),
        (u.payload = e),
        n != null && (u.callback = n),
        (e = Dn(t, u, a)),
        e !== null && (Ee(e, t, a), Qa(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = xe(),
        a = Nn(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Dn(t, a, n)),
        e !== null && (Ee(e, t, n), Qa(e, t, n));
    },
  };
  function Am(t, e, n, a, u, c, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, c, m)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ba(n, a) || !Ba(u, c)
          : !0
    );
  }
  function Cm(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Wo.enqueueReplaceState(e, e.state, null);
  }
  function vl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var u in t) n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  var Rr =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function _m(t) {
    Rr(t);
  }
  function wm(t) {
    console.error(t);
  }
  function Om(t) {
    Rr(t);
  }
  function Tr(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Mm(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Fo(t, e, n) {
    return (
      (n = Nn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Tr(t, e);
      }),
      n
    );
  }
  function zm(t) {
    return (t = Nn(t)), (t.tag = 3), t;
  }
  function Nm(t, e, n, a) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = a.value;
      (t.payload = function () {
        return u(c);
      }),
        (t.callback = function () {
          Mm(e, n, a);
        });
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (t.callback = function () {
        Mm(e, n, a),
          typeof u != "function" &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this));
        var v = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function Zg(t, e, n, a, u) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ya(e, n, u, !0),
        (n = ze.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Ze === null ? xc() : n.alternate === null && Yt === 0 && (Yt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              a === Co
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  Rc(t, a, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Co
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  Rc(t, a, u)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return Rc(t, a, u), xc(), !1;
    }
    if (Ct)
      return (
        (e = ze.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== bo && ((t = Error(r(422), { cause: a })), $a(_e(t, n))))
          : (a !== bo && ((e = Error(r(423), { cause: a })), $a(_e(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = _e(a, n)),
            (u = Fo(t.stateNode, a, u)),
            Oo(t, u),
            Yt !== 4 && (Yt = 2)),
        !1
      );
    var c = Error(r(520), { cause: a });
    if (
      ((c = _e(c, n)),
      ri === null ? (ri = [c]) : ri.push(c),
      Yt !== 4 && (Yt = 2),
      e === null)
    )
      return !0;
    (a = _e(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = u & -u),
            (n.lanes |= t),
            (t = Fo(n.stateNode, a, t)),
            Oo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Gn === null || !Gn.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = zm(u)),
              Nm(u, t, n, a),
              Oo(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Dm = Error(r(461)),
    Kt = !1;
  function Pt(t, e, n, a) {
    e.child = t === null ? Rm(e, null, n, a) : Jl(e, t.child, n, a);
  }
  function jm(t, e, n, a, u) {
    n = n.render;
    var c = e.ref;
    if ("ref" in a) {
      var m = {};
      for (var v in a) v !== "ref" && (m[v] = a[v]);
    } else m = a;
    return (
      ml(e),
      (a = jo(t, e, n, m, c, u)),
      (v = Bo()),
      t !== null && !Kt
        ? (Uo(t, e, u), fn(t, e, u))
        : (Ct && v && go(e), (e.flags |= 1), Pt(t, e, a, u), e.child)
    );
  }
  function Bm(t, e, n, a, u) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" &&
        !ho(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = c), Um(t, e, c, a, u))
        : ((t = lr(n.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !ic(t, u))) {
      var m = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ba), n(m, a) && t.ref === e.ref)
      )
        return fn(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = ln(c, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Um(t, e, n, a, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Ba(c, a) && t.ref === e.ref)
        if (((Kt = !1), (e.pendingProps = a = c), ic(t, u)))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else return (e.lanes = t.lanes), fn(t, e, u);
    }
    return Po(t, e, n, a, u);
  }
  function Hm(t, e, n) {
    var a = e.pendingProps,
      u = a.children,
      c = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = c !== null ? c.baseLanes | n : n), t !== null)) {
          for (u = e.child = t.child, c = 0; u !== null; )
            (c = c | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = c & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return Lm(t, e, a, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && or(e, c !== null ? c.cachePool : null),
          c !== null ? Ud(e, c) : zo(),
          Tm(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Lm(t, e, c !== null ? c.baseLanes | n : n, n)
        );
    } else
      c !== null
        ? (or(e, c.cachePool), Ud(e, c), Un(), (e.memoizedState = null))
        : (t !== null && or(e, null), zo(), Un());
    return Pt(t, e, u, n), e.child;
  }
  function Lm(t, e, n, a) {
    var u = Ao();
    return (
      (u = u === null ? null : { parent: Qt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: n, cachePool: u }),
      t !== null && or(e, null),
      zo(),
      Tm(e),
      t !== null && Ya(t, e, a, !0),
      null
    );
  }
  function Ar(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Po(t, e, n, a, u) {
    return (
      ml(e),
      (n = jo(t, e, n, a, void 0, u)),
      (a = Bo()),
      t !== null && !Kt
        ? (Uo(t, e, u), fn(t, e, u))
        : (Ct && a && go(e), (e.flags |= 1), Pt(t, e, n, u), e.child)
    );
  }
  function $m(t, e, n, a, u, c) {
    return (
      ml(e),
      (e.updateQueue = null),
      (n = Ld(e, a, n, u)),
      Hd(t),
      (a = Bo()),
      t !== null && !Kt
        ? (Uo(t, e, c), fn(t, e, c))
        : (Ct && a && go(e), (e.flags |= 1), Pt(t, e, n, c), e.child)
    );
  }
  function Ym(t, e, n, a, u) {
    if ((ml(e), e.stateNode === null)) {
      var c = $l,
        m = n.contextType;
      typeof m == "object" && m !== null && (c = ie(m)),
        (c = new n(a, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Wo),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = a),
        (c.state = e.memoizedState),
        (c.refs = {}),
        _o(e),
        (m = n.contextType),
        (c.context = typeof m == "object" && m !== null ? ie(m) : $l),
        (c.state = e.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (Jo(e, n, m, a), (c.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((m = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          m !== c.state && Wo.enqueueReplaceState(c, c.state, null),
          ka(e, a, c, u),
          Za(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps,
        E = vl(n, v);
      c.props = E;
      var D = c.context,
        V = n.contextType;
      (m = $l), typeof V == "object" && V !== null && (m = ie(V));
      var k = n.getDerivedStateFromProps;
      (V =
        typeof k == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        V ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || D !== m) && Cm(e, c, a, m)),
        (zn = !1);
      var U = e.memoizedState;
      (c.state = U),
        ka(e, a, c, u),
        Za(),
        (D = e.memoizedState),
        v || U !== D || zn
          ? (typeof k == "function" && (Jo(e, n, k, a), (D = e.memoizedState)),
            (E = zn || Am(e, n, E, a, U, D, m))
              ? (V ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = D)),
            (c.props = a),
            (c.state = D),
            (c.context = m),
            (a = E))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (c = e.stateNode),
        wo(t, e),
        (m = e.memoizedProps),
        (V = vl(n, m)),
        (c.props = V),
        (k = e.pendingProps),
        (U = c.context),
        (D = n.contextType),
        (E = $l),
        typeof D == "object" && D !== null && (E = ie(D)),
        (v = n.getDerivedStateFromProps),
        (D =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((m !== k || U !== E) && Cm(e, c, a, E)),
        (zn = !1),
        (U = e.memoizedState),
        (c.state = U),
        ka(e, a, c, u),
        Za();
      var H = e.memoizedState;
      m !== k ||
      U !== H ||
      zn ||
      (t !== null && t.dependencies !== null && rr(t.dependencies))
        ? (typeof v == "function" && (Jo(e, n, v, a), (H = e.memoizedState)),
          (V =
            zn ||
            Am(e, n, V, a, U, H, E) ||
            (t !== null && t.dependencies !== null && rr(t.dependencies)))
            ? (D ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(a, H, E),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(a, H, E)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (m === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (m === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = H)),
          (c.props = a),
          (c.state = H),
          (c.context = E),
          (a = V))
        : (typeof c.componentDidUpdate != "function" ||
            (m === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (m === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      Ar(t, e),
      (a = (e.flags & 128) !== 0),
      c || a
        ? ((c = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Jl(e, t.child, null, u)),
              (e.child = Jl(e, null, n, u)))
            : Pt(t, e, n, u),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = fn(t, e, u)),
      t
    );
  }
  function qm(t, e, n, a) {
    return La(), (e.flags |= 256), Pt(t, e, n, a), e.child;
  }
  var Io = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function tc(t) {
    return { baseLanes: t, cachePool: wd() };
  }
  function ec(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ne), t;
  }
  function Gm(t, e, n) {
    var a = e.pendingProps,
      u = !1,
      c = (e.flags & 128) !== 0,
      m;
    if (
      ((m = c) ||
        (m =
          t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0),
      m && ((u = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ct) {
        if ((u ? Bn(e) : Un(), Ct)) {
          var v = $t,
            E;
          if ((E = v)) {
            t: {
              for (E = v, v = Qe; E.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((E = Ye(E.nextSibling)), E === null)) {
                  v = null;
                  break t;
                }
              }
              v = E;
            }
            v !== null
              ? ((e.memoizedState = {
                  dehydrated: v,
                  treeContext: ol !== null ? { id: an, overflow: rn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (E = ge(18, null, null, 0)),
                (E.stateNode = v),
                (E.return = e),
                (e.child = E),
                (ue = e),
                ($t = null),
                (E = !0))
              : (E = !1);
          }
          E || fl(e);
        }
        if (
          ((v = e.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return Lc(v) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        sn(e);
      }
      return (
        (v = a.children),
        (a = a.fallback),
        u
          ? (Un(),
            (u = e.mode),
            (v = Cr({ mode: "hidden", children: v }, u)),
            (a = ul(a, u, n, null)),
            (v.return = e),
            (a.return = e),
            (v.sibling = a),
            (e.child = v),
            (u = e.child),
            (u.memoizedState = tc(n)),
            (u.childLanes = ec(t, m, n)),
            (e.memoizedState = Io),
            a)
          : (Bn(e), nc(e, v))
      );
    }
    if (
      ((E = t.memoizedState), E !== null && ((v = E.dehydrated), v !== null))
    ) {
      if (c)
        e.flags & 256
          ? (Bn(e), (e.flags &= -257), (e = lc(t, e, n)))
          : e.memoizedState !== null
            ? (Un(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Un(),
              (u = a.fallback),
              (v = e.mode),
              (a = Cr({ mode: "visible", children: a.children }, v)),
              (u = ul(u, v, n, null)),
              (u.flags |= 2),
              (a.return = e),
              (u.return = e),
              (a.sibling = u),
              (e.child = a),
              Jl(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = tc(n)),
              (a.childLanes = ec(t, m, n)),
              (e.memoizedState = Io),
              (e = u));
      else if ((Bn(e), Lc(v))) {
        if (((m = v.nextSibling && v.nextSibling.dataset), m)) var D = m.dgst;
        (m = D),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = m),
          $a({ value: a, source: null, stack: null }),
          (e = lc(t, e, n));
      } else if (
        (Kt || Ya(t, e, n, !1), (m = (n & t.childLanes) !== 0), Kt || m)
      ) {
        if (
          ((m = jt),
          m !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : Lu(a)),
            (a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== E.retryLane))
        )
          throw ((E.retryLane = a), Ll(t, a), Ee(m, t, a), Dm);
        v.data === "$?" || xc(), (e = lc(t, e, n));
      } else
        v.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = E.treeContext),
            ($t = Ye(v.nextSibling)),
            (ue = e),
            (Ct = !0),
            (sl = null),
            (Qe = !1),
            t !== null &&
              ((Oe[Me++] = an),
              (Oe[Me++] = rn),
              (Oe[Me++] = ol),
              (an = t.id),
              (rn = t.overflow),
              (ol = e)),
            (e = nc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (Un(),
        (u = a.fallback),
        (v = e.mode),
        (E = t.child),
        (D = E.sibling),
        (a = ln(E, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = E.subtreeFlags & 65011712),
        D !== null ? (u = ln(D, u)) : ((u = ul(u, v, n, null)), (u.flags |= 2)),
        (u.return = e),
        (a.return = e),
        (a.sibling = u),
        (e.child = a),
        (a = u),
        (u = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = tc(n))
          : ((E = v.cachePool),
            E !== null
              ? ((D = Qt._currentValue),
                (E = E.parent !== D ? { parent: D, pool: D } : E))
              : (E = wd()),
            (v = { baseLanes: v.baseLanes | n, cachePool: E })),
        (u.memoizedState = v),
        (u.childLanes = ec(t, m, n)),
        (e.memoizedState = Io),
        a)
      : (Bn(e),
        (n = t.child),
        (t = n.sibling),
        (n = ln(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((m = e.deletions),
          m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function nc(t, e) {
    return (
      (e = Cr({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Cr(t, e) {
    return (
      (t = ge(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function lc(t, e, n) {
    return (
      Jl(e, t.child, null, n),
      (t = nc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Xm(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), xo(t.return, e, n);
  }
  function ac(t, e, n, a, u) {
    var c = t.memoizedState;
    c === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: u,
        })
      : ((c.isBackwards = e),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = a),
        (c.tail = n),
        (c.tailMode = u));
  }
  function Vm(t, e, n) {
    var a = e.pendingProps,
      u = a.revealOrder,
      c = a.tail;
    if ((Pt(t, e, a.children, n), (a = Zt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Xm(t, n, e);
          else if (t.tag === 19) Xm(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((F(Zt, a), u)) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          (t = n.alternate),
            t !== null && Er(t) === null && (u = n),
            (n = n.sibling);
        (n = u),
          n === null
            ? ((u = e.child), (e.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          ac(e, !1, u, n, c);
        break;
      case "backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Er(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = n), (n = u), (u = t);
        }
        ac(e, !0, n, null, c);
        break;
      case "together":
        ac(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function fn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (qn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ya(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = ln(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = ln(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function ic(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && rr(t)));
  }
  function kg(t, e, n) {
    switch (e.tag) {
      case 3:
        xt(e, e.stateNode.containerInfo),
          Mn(e, Qt, t.memoizedState.cache),
          La();
        break;
      case 27:
      case 5:
        Ft(e);
        break;
      case 4:
        xt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Mn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Bn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Gm(t, e, n)
              : (Bn(e), (t = fn(t, e, n)), t !== null ? t.sibling : null);
        Bn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (Ya(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return Vm(t, e, n);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          F(Zt, Zt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Hm(t, e, n);
      case 24:
        Mn(e, Qt, t.memoizedState.cache);
    }
    return fn(t, e, n);
  }
  function Qm(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Kt = !0;
      else {
        if (!ic(t, n) && (e.flags & 128) === 0) return (Kt = !1), kg(t, e, n);
        Kt = (t.flags & 131072) !== 0;
      }
    else (Kt = !1), Ct && (e.flags & 1048576) !== 0 && xd(e, ir, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            u = a._init;
          if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
            ho(a)
              ? ((t = vl(a, t)), (e.tag = 1), (e = Ym(null, e, a, t, n)))
              : ((e.tag = 0), (e = Po(null, e, a, t, n)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === X)) {
                (e.tag = 11), (e = jm(null, e, a, t, n));
                break t;
              } else if (u === P) {
                (e.tag = 14), (e = Bm(null, e, a, t, n));
                break t;
              }
            }
            throw ((e = ct(a) || a), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Po(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (u = vl(a, e.pendingProps)), Ym(t, e, a, u, n);
      case 3:
        t: {
          if ((xt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var c = e.memoizedState;
          (u = c.element), wo(t, e), ka(e, a, null, n);
          var m = e.memoizedState;
          if (
            ((a = m.cache),
            Mn(e, Qt, a),
            a !== c.cache && Eo(e, [Qt], n, !0),
            Za(),
            (a = m.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = qm(t, e, a, n);
              break t;
            } else if (a !== u) {
              (u = _e(Error(r(424)), e)), $a(u), (e = qm(t, e, a, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                $t = Ye(t.firstChild),
                  ue = e,
                  Ct = !0,
                  sl = null,
                  Qe = !0,
                  n = Rm(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((La(), a === u)) {
              e = fn(t, e, n);
              break t;
            }
            Pt(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ar(t, e),
          t === null
            ? (n = Jh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Ct ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Yr(nt.current).createElement(n)),
                (a[ae] = e),
                (a[oe] = t),
                te(a, n, t),
                kt(a),
                (e.stateNode = a))
            : (e.memoizedState = Jh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ft(e),
          t === null &&
            Ct &&
            ((a = e.stateNode = Zh(e.type, e.pendingProps, nt.current)),
            (ue = e),
            (Qe = !0),
            (u = $t),
            Qn(e.type) ? (($c = u), ($t = Ye(a.firstChild))) : ($t = u)),
          Pt(t, e, e.pendingProps.children, n),
          Ar(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ct &&
            ((u = a = $t) &&
              ((a = xy(a, e.type, e.pendingProps, Qe)),
              a !== null
                ? ((e.stateNode = a),
                  (ue = e),
                  ($t = Ye(a.firstChild)),
                  (Qe = !1),
                  (u = !0))
                : (u = !1)),
            u || fl(e)),
          Ft(e),
          (u = e.type),
          (c = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (a = c.children),
          Bc(u, c) ? (a = null) : m !== null && Bc(u, m) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = jo(t, e, $g, null, null, n)), (pi._currentValue = u)),
          Ar(t, e),
          Pt(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ct &&
            ((t = n = $t) &&
              ((n = Ey(n, e.pendingProps, Qe)),
              n !== null
                ? ((e.stateNode = n), (ue = e), ($t = null), (t = !0))
                : (t = !1)),
            t || fl(e)),
          null
        );
      case 13:
        return Gm(t, e, n);
      case 4:
        return (
          xt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Jl(e, null, a, n)) : Pt(t, e, a, n),
          e.child
        );
      case 11:
        return jm(t, e, e.type, e.pendingProps, n);
      case 7:
        return Pt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Mn(e, e.type, a.value),
          Pt(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          ml(e),
          (u = ie(u)),
          (a = a(u)),
          (e.flags |= 1),
          Pt(t, e, a, n),
          e.child
        );
      case 14:
        return Bm(t, e, e.type, e.pendingProps, n);
      case 15:
        return Um(t, e, e.type, e.pendingProps, n);
      case 19:
        return Vm(t, e, n);
      case 31:
        return (
          (a = e.pendingProps),
          (n = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((n = Cr(a, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = ln(t.child, a)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Hm(t, e, n);
      case 24:
        return (
          ml(e),
          (a = ie(Qt)),
          t === null
            ? ((u = Ao()),
              u === null &&
                ((u = jt),
                (c = Ro()),
                (u.pooledCache = c),
                c.refCount++,
                c !== null && (u.pooledCacheLanes |= n),
                (u = c)),
              (e.memoizedState = { parent: a, cache: u }),
              _o(e),
              Mn(e, Qt, u))
            : ((t.lanes & n) !== 0 && (wo(t, e), ka(e, null, null, n), Za()),
              (u = t.memoizedState),
              (c = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Mn(e, Qt, a))
                : ((a = c.cache),
                  Mn(e, Qt, a),
                  a !== u.cache && Eo(e, [Qt], n, !0))),
          Pt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function dn(t) {
    t.flags |= 4;
  }
  function Zm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !tp(e))) {
      if (
        ((e = ze.current),
        e !== null &&
          ((Et & 4194048) === Et
            ? Ze !== null
            : ((Et & 62914560) !== Et && (Et & 536870912) === 0) || e !== Ze))
      )
        throw ((Va = Co), Od);
      t.flags |= 8192;
    }
  }
  function _r(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Tf() : 536870912), (t.lanes |= e), (Il |= e));
  }
  function ti(t, e) {
    if (!Ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Lt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function Kg(t, e, n) {
    var a = e.pendingProps;
    switch ((yo(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Lt(e), null;
      case 1:
        return Lt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          on(Qt),
          le(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ha(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Td())),
          Lt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (dn(e),
              n !== null ? (Lt(e), Zm(e, n)) : (Lt(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (dn(e), Lt(e), Zm(e, n))
                : (Lt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== a && dn(e), Lt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ve(e), (n = nt.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && dn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Lt(e), null;
          }
          (t = lt.current),
            Ha(e) ? Ed(e) : ((t = Zh(u, a, n)), (e.stateNode = t), dn(e));
        }
        return Lt(e), null;
      case 5:
        if ((Ve(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && dn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Lt(e), null;
          }
          if (((t = lt.current), Ha(e))) Ed(e);
          else {
            switch (((u = Yr(nt.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(n, { is: a.is })
                        : u.createElement(n);
                }
            }
            (t[ae] = e), (t[oe] = a);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((te(t, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && dn(e);
          }
        }
        return Lt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && dn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = nt.current), Ha(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (u = ue),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[ae] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                $h(t.nodeValue, n)
              )),
              t || fl(e);
          } else (t = Yr(t).createTextNode(a)), (t[ae] = e), (e.stateNode = t);
        }
        return Lt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ha(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[ae] = e;
            } else
              La(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Lt(e), (u = !1);
          } else
            (u = Td()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return e.flags & 256 ? (sn(e), e) : (sn(e), null);
        }
        if ((sn(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = a !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (a = e.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var c = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (c = a.memoizedState.cachePool.pool),
            c !== u && (a.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          _r(e, e.updateQueue),
          Lt(e),
          null
        );
      case 4:
        return le(), t === null && Mc(e.stateNode.containerInfo), Lt(e), null;
      case 10:
        return on(e.type), Lt(e), null;
      case 19:
        if ((J(Zt), (u = e.memoizedState), u === null)) return Lt(e), null;
        if (((a = (e.flags & 128) !== 0), (c = u.rendering), c === null))
          if (a) ti(u, !1);
          else {
            if (Yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Er(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      ti(u, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      _r(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    Sd(n, t), (n = n.sibling);
                  return F(Zt, (Zt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Te() > Mr &&
              ((e.flags |= 128), (a = !0), ti(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Er(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                _r(e, t),
                ti(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !c.alternate &&
                  !Ct)
              )
                return Lt(e), null;
            } else
              2 * Te() - u.renderingStartTime > Mr &&
                n !== 536870912 &&
                ((e.flags |= 128), (a = !0), ti(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = u.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (u.last = c));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = Te()),
            (e.sibling = null),
            (t = Zt.current),
            F(Zt, a ? (t & 1) | 2 : t & 1),
            e)
          : (Lt(e), null);
      case 22:
      case 23:
        return (
          sn(e),
          No(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Lt(e),
          (n = e.updateQueue),
          n !== null && _r(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && J(hl),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          on(Qt),
          Lt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Jg(t, e) {
    switch ((yo(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          on(Qt),
          le(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ve(e), null;
      case 13:
        if (
          (sn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          La();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return J(Zt), null;
      case 4:
        return le(), null;
      case 10:
        return on(e.type), null;
      case 22:
      case 23:
        return (
          sn(e),
          No(),
          t !== null && J(hl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return on(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function km(t, e) {
    switch ((yo(e), e.tag)) {
      case 3:
        on(Qt), le();
        break;
      case 26:
      case 27:
      case 5:
        Ve(e);
        break;
      case 4:
        le();
        break;
      case 13:
        sn(e);
        break;
      case 19:
        J(Zt);
        break;
      case 10:
        on(e.type);
        break;
      case 22:
      case 23:
        sn(e), No(), t !== null && J(hl);
        break;
      case 24:
        on(Qt);
    }
  }
  function ei(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var c = n.create,
              m = n.inst;
            (a = c()), (m.destroy = a);
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (v) {
      Nt(e, e.return, v);
    }
  }
  function Hn(t, e, n) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            var m = a.inst,
              v = m.destroy;
            if (v !== void 0) {
              (m.destroy = void 0), (u = e);
              var E = n,
                D = v;
              try {
                D();
              } catch (V) {
                Nt(u, E, V);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (V) {
      Nt(e, e.return, V);
    }
  }
  function Km(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Bd(e, n);
      } catch (a) {
        Nt(t, t.return, a);
      }
    }
  }
  function Jm(t, e, n) {
    (n.props = vl(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Nt(t, e, a);
    }
  }
  function ni(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (u) {
      Nt(t, e, u);
    }
  }
  function ke(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          Nt(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Nt(t, e, u);
        }
      else n.current = null;
  }
  function Wm(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (u) {
      Nt(t, t.return, u);
    }
  }
  function rc(t, e, n) {
    try {
      var a = t.stateNode;
      vy(a, t.type, n, e), (a[oe] = e);
    } catch (u) {
      Nt(t, t.return, u);
    }
  }
  function Fm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Qn(t.type)) ||
      t.tag === 4
    );
  }
  function uc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Qn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function oc(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = $r));
    else if (
      a !== 4 &&
      (a === 27 && Qn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (oc(t, e, n), t = t.sibling; t !== null; )
        oc(t, e, n), (t = t.sibling);
  }
  function wr(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Qn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (wr(t, e, n), t = t.sibling; t !== null; )
        wr(t, e, n), (t = t.sibling);
  }
  function Pm(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      te(e, a, n), (e[ae] = t), (e[oe] = n);
    } catch (c) {
      Nt(t, t.return, c);
    }
  }
  var mn = !1,
    Gt = !1,
    cc = !1,
    Im = typeof WeakSet == "function" ? WeakSet : Set,
    Jt = null;
  function Wg(t, e) {
    if (((t = t.containerInfo), (Dc = Zr), (t = sd(t)), ro(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var u = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break t;
            }
            var m = 0,
              v = -1,
              E = -1,
              D = 0,
              V = 0,
              k = t,
              U = null;
            e: for (;;) {
              for (
                var H;
                k !== n || (u !== 0 && k.nodeType !== 3) || (v = m + u),
                  k !== c || (a !== 0 && k.nodeType !== 3) || (E = m + a),
                  k.nodeType === 3 && (m += k.nodeValue.length),
                  (H = k.firstChild) !== null;

              )
                (U = k), (k = H);
              for (;;) {
                if (k === t) break e;
                if (
                  (U === n && ++D === u && (v = m),
                  U === c && ++V === a && (E = m),
                  (H = k.nextSibling) !== null)
                )
                  break;
                (k = U), (U = k.parentNode);
              }
              k = H;
            }
            n = v === -1 || E === -1 ? null : { start: v, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      jc = { focusedElem: t, selectionRange: n }, Zr = !1, Jt = e;
      Jt !== null;

    )
      if (
        ((e = Jt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Jt = t);
      else
        for (; Jt !== null; ) {
          switch (((e = Jt), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                (t = void 0),
                  (n = e),
                  (u = c.memoizedProps),
                  (c = c.memoizedState),
                  (a = n.stateNode);
                try {
                  var dt = vl(n.type, u, n.elementType === n.type);
                  (t = a.getSnapshotBeforeUpdate(dt, c)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (st) {
                  Nt(n, n.return, st);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Hc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Hc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Jt = t);
            break;
          }
          Jt = e.return;
        }
  }
  function th(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ln(t, n), a & 4 && ei(5, n);
        break;
      case 1:
        if ((Ln(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              Nt(n, n.return, m);
            }
          else {
            var u = vl(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Nt(n, n.return, m);
            }
          }
        a & 64 && Km(n), a & 512 && ni(n, n.return);
        break;
      case 3:
        if ((Ln(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Bd(t, e);
          } catch (m) {
            Nt(n, n.return, m);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Pm(n);
      case 26:
      case 5:
        Ln(t, n), e === null && a & 4 && Wm(n), a & 512 && ni(n, n.return);
        break;
      case 12:
        Ln(t, n);
        break;
      case 13:
        Ln(t, n),
          a & 4 && lh(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = iy.bind(null, n)), Ry(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || mn), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Gt), (u = mn);
          var c = Gt;
          (mn = a),
            (Gt = e) && !c ? $n(t, n, (n.subtreeFlags & 8772) !== 0) : Ln(t, n),
            (mn = u),
            (Gt = c);
        }
        break;
      case 30:
        break;
      default:
        Ln(t, n);
    }
  }
  function eh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), eh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && qu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ht = null,
    fe = !1;
  function hn(t, e, n) {
    for (n = n.child; n !== null; ) nh(t, e, n), (n = n.sibling);
  }
  function nh(t, e, n) {
    if (he && typeof he.onCommitFiberUnmount == "function")
      try {
        he.onCommitFiberUnmount(Ra, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Gt || ke(n, e),
          hn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Gt || ke(n, e);
        var a = Ht,
          u = fe;
        Qn(n.type) && ((Ht = n.stateNode), (fe = !1)),
          hn(t, e, n),
          fi(n.stateNode),
          (Ht = a),
          (fe = u);
        break;
      case 5:
        Gt || ke(n, e);
      case 6:
        if (
          ((a = Ht),
          (u = fe),
          (Ht = null),
          hn(t, e, n),
          (Ht = a),
          (fe = u),
          Ht !== null)
        )
          if (fe)
            try {
              (Ht.nodeType === 9
                ? Ht.body
                : Ht.nodeName === "HTML"
                  ? Ht.ownerDocument.body
                  : Ht
              ).removeChild(n.stateNode);
            } catch (c) {
              Nt(n, e, c);
            }
          else
            try {
              Ht.removeChild(n.stateNode);
            } catch (c) {
              Nt(n, e, c);
            }
        break;
      case 18:
        Ht !== null &&
          (fe
            ? ((t = Ht),
              Vh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              bi(t))
            : Vh(Ht, n.stateNode));
        break;
      case 4:
        (a = Ht),
          (u = fe),
          (Ht = n.stateNode.containerInfo),
          (fe = !0),
          hn(t, e, n),
          (Ht = a),
          (fe = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Gt || Hn(2, n, e), Gt || Hn(4, n, e), hn(t, e, n);
        break;
      case 1:
        Gt ||
          (ke(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Jm(n, e, a)),
          hn(t, e, n);
        break;
      case 21:
        hn(t, e, n);
        break;
      case 22:
        (Gt = (a = Gt) || n.memoizedState !== null), hn(t, e, n), (Gt = a);
        break;
      default:
        hn(t, e, n);
    }
  }
  function lh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        bi(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
  }
  function Fg(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Im()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Im()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function sc(t, e) {
    var n = Fg(t);
    e.forEach(function (a) {
      var u = ry.bind(null, t, a);
      n.has(a) || (n.add(a), a.then(u, u));
    });
  }
  function ye(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a],
          c = t,
          m = e,
          v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Qn(v.type)) {
                (Ht = v.stateNode), (fe = !1);
                break t;
              }
              break;
            case 5:
              (Ht = v.stateNode), (fe = !1);
              break t;
            case 3:
            case 4:
              (Ht = v.stateNode.containerInfo), (fe = !0);
              break t;
          }
          v = v.return;
        }
        if (Ht === null) throw Error(r(160));
        nh(c, m, u),
          (Ht = null),
          (fe = !1),
          (c = u.alternate),
          c !== null && (c.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) ah(e, t), (e = e.sibling);
  }
  var $e = null;
  function ah(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ye(e, t),
          be(t),
          a & 4 && (Hn(3, t, t.return), ei(3, t), Hn(5, t, t.return));
        break;
      case 1:
        ye(e, t),
          be(t),
          a & 512 && (Gt || n === null || ke(n, n.return)),
          a & 64 &&
            mn &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var u = $e;
        if (
          (ye(e, t),
          be(t),
          a & 512 && (Gt || n === null || ke(n, n.return)),
          a & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (a) {
                    case "title":
                      (c = u.getElementsByTagName("title")[0]),
                        (!c ||
                          c[Ca] ||
                          c[ae] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = u.createElement(a)),
                          u.head.insertBefore(
                            c,
                            u.querySelector("head > title"),
                          )),
                        te(c, a, n),
                        (c[ae] = t),
                        kt(c),
                        (a = c);
                      break t;
                    case "link":
                      var m = Ph("link", "href", u).get(a + (n.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      (c = u.createElement(a)),
                        te(c, a, n),
                        u.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (m = Ph("meta", "content", u).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      (c = u.createElement(a)),
                        te(c, a, n),
                        u.head.appendChild(c);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  (c[ae] = t), kt(c), (a = c);
                }
                t.stateNode = a;
              } else Ih(u, t.type, t.stateNode);
            else t.stateNode = Fh(u, a, t.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                a === null
                  ? Ih(u, t.type, t.stateNode)
                  : Fh(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                rc(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ye(e, t),
          be(t),
          a & 512 && (Gt || n === null || ke(n, n.return)),
          n !== null && a & 4 && rc(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (ye(e, t),
          be(t),
          a & 512 && (Gt || n === null || ke(n, n.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            zl(u, "");
          } catch (H) {
            Nt(t, t.return, H);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), rc(t, u, n !== null ? n.memoizedProps : u)),
          a & 1024 && (cc = !0);
        break;
      case 6:
        if ((ye(e, t), be(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch (H) {
            Nt(t, t.return, H);
          }
        }
        break;
      case 3:
        if (
          ((Xr = null),
          (u = $e),
          ($e = qr(e.containerInfo)),
          ye(e, t),
          ($e = u),
          be(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            bi(e.containerInfo);
          } catch (H) {
            Nt(t, t.return, H);
          }
        cc && ((cc = !1), ih(t));
        break;
      case 4:
        (a = $e),
          ($e = qr(t.stateNode.containerInfo)),
          ye(e, t),
          be(t),
          ($e = a);
        break;
      case 12:
        ye(e, t), be(t);
        break;
      case 13:
        ye(e, t),
          be(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (vc = Te()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), sc(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          D = mn,
          V = Gt;
        if (
          ((mn = D || u),
          (Gt = V || E),
          ye(e, t),
          (Gt = V),
          (mn = D),
          be(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (n === null || E || mn || Gt || gl(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                E = n = e;
                try {
                  if (((c = E.stateNode), u))
                    (m = c.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none");
                  else {
                    v = E.stateNode;
                    var k = E.memoizedProps.style,
                      U =
                        k != null && k.hasOwnProperty("display")
                          ? k.display
                          : null;
                    v.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (H) {
                  Nt(E, E.return, H);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = u ? "" : E.memoizedProps;
                } catch (H) {
                  Nt(E, E.return, H);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), sc(t, n))));
        break;
      case 19:
        ye(e, t),
          be(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), sc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ye(e, t), be(t);
    }
  }
  function be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Fm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              c = uc(t);
            wr(t, c, u);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (zl(m, ""), (n.flags &= -33));
            var v = uc(t);
            wr(t, v, m);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              D = uc(t);
            oc(t, D, E);
            break;
          default:
            throw Error(r(161));
        }
      } catch (V) {
        Nt(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ih(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ih(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Ln(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) th(t, e.alternate, e), (e = e.sibling);
  }
  function gl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hn(4, e, e.return), gl(e);
          break;
        case 1:
          ke(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Jm(e, e.return, n),
            gl(e);
          break;
        case 27:
          fi(e.stateNode);
        case 26:
        case 5:
          ke(e, e.return), gl(e);
          break;
        case 22:
          e.memoizedState === null && gl(e);
          break;
        case 30:
          gl(e);
          break;
        default:
          gl(e);
      }
      t = t.sibling;
    }
  }
  function $n(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        c = e,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          $n(u, c, n), ei(4, c);
          break;
        case 1:
          if (
            ($n(u, c, n),
            (a = c),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (D) {
              Nt(a, a.return, D);
            }
          if (((a = c), (u = a.updateQueue), u !== null)) {
            var v = a.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  jd(E[u], v);
            } catch (D) {
              Nt(a, a.return, D);
            }
          }
          n && m & 64 && Km(c), ni(c, c.return);
          break;
        case 27:
          Pm(c);
        case 26:
        case 5:
          $n(u, c, n), n && a === null && m & 4 && Wm(c), ni(c, c.return);
          break;
        case 12:
          $n(u, c, n);
          break;
        case 13:
          $n(u, c, n), n && m & 4 && lh(u, c);
          break;
        case 22:
          c.memoizedState === null && $n(u, c, n), ni(c, c.return);
          break;
        case 30:
          break;
        default:
          $n(u, c, n);
      }
      e = e.sibling;
    }
  }
  function fc(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && qa(n));
  }
  function dc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && qa(t));
  }
  function Ke(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) rh(t, e, n, a), (e = e.sibling);
  }
  function rh(t, e, n, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ke(t, e, n, a), u & 2048 && ei(9, e);
        break;
      case 1:
        Ke(t, e, n, a);
        break;
      case 3:
        Ke(t, e, n, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && qa(t)));
        break;
      case 12:
        if (u & 2048) {
          Ke(t, e, n, a), (t = e.stateNode);
          try {
            var c = e.memoizedProps,
              m = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                m,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (E) {
            Nt(e, e.return, E);
          }
        } else Ke(t, e, n, a);
        break;
      case 13:
        Ke(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (c = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? Ke(t, e, n, a)
              : li(t, e)
            : c._visibility & 2
              ? Ke(t, e, n, a)
              : ((c._visibility |= 2),
                Wl(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && fc(m, e);
        break;
      case 24:
        Ke(t, e, n, a), u & 2048 && dc(e.alternate, e);
        break;
      default:
        Ke(t, e, n, a);
    }
  }
  function Wl(t, e, n, a, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t,
        m = e,
        v = n,
        E = a,
        D = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Wl(c, m, v, E, u), ei(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null
            ? V._visibility & 2
              ? Wl(c, m, v, E, u)
              : li(c, m)
            : ((V._visibility |= 2), Wl(c, m, v, E, u)),
            u && D & 2048 && fc(m.alternate, m);
          break;
        case 24:
          Wl(c, m, v, E, u), u && D & 2048 && dc(m.alternate, m);
          break;
        default:
          Wl(c, m, v, E, u);
      }
      e = e.sibling;
    }
  }
  function li(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            li(n, a), u & 2048 && fc(a.alternate, a);
            break;
          case 24:
            li(n, a), u & 2048 && dc(a.alternate, a);
            break;
          default:
            li(n, a);
        }
        e = e.sibling;
      }
  }
  var ai = 8192;
  function Fl(t) {
    if (t.subtreeFlags & ai)
      for (t = t.child; t !== null; ) uh(t), (t = t.sibling);
  }
  function uh(t) {
    switch (t.tag) {
      case 26:
        Fl(t),
          t.flags & ai &&
            t.memoizedState !== null &&
            Uy($e, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Fl(t);
        break;
      case 3:
      case 4:
        var e = $e;
        ($e = qr(t.stateNode.containerInfo)), Fl(t), ($e = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ai), (ai = 16777216), Fl(t), (ai = e))
            : Fl(t));
        break;
      default:
        Fl(t);
    }
  }
  function oh(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function ii(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Jt = a), sh(a, t);
        }
      oh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ch(t), (t = t.sibling);
  }
  function ch(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ii(t), t.flags & 2048 && Hn(9, t, t.return);
        break;
      case 3:
        ii(t);
        break;
      case 12:
        ii(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Or(t))
          : ii(t);
        break;
      default:
        ii(t);
    }
  }
  function Or(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Jt = a), sh(a, t);
        }
      oh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Hn(8, e, e.return), Or(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Or(e));
          break;
        default:
          Or(e);
      }
      t = t.sibling;
    }
  }
  function sh(t, e) {
    for (; Jt !== null; ) {
      var n = Jt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Hn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          qa(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (Jt = a);
      else
        t: for (n = t; Jt !== null; ) {
          a = Jt;
          var u = a.sibling,
            c = a.return;
          if ((eh(a), a === n)) {
            Jt = null;
            break t;
          }
          if (u !== null) {
            (u.return = c), (Jt = u);
            break t;
          }
          Jt = c;
        }
    }
  }
  var Pg = {
      getCacheForType: function (t) {
        var e = ie(Qt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    Ig = typeof WeakMap == "function" ? WeakMap : Map,
    _t = 0,
    jt = null,
    bt = null,
    Et = 0,
    wt = 0,
    Se = null,
    Yn = !1,
    Pl = !1,
    mc = !1,
    pn = 0,
    Yt = 0,
    qn = 0,
    yl = 0,
    hc = 0,
    Ne = 0,
    Il = 0,
    ri = null,
    de = null,
    pc = !1,
    vc = 0,
    Mr = 1 / 0,
    zr = null,
    Gn = null,
    It = 0,
    Xn = null,
    ta = null,
    ea = 0,
    gc = 0,
    yc = null,
    fh = null,
    ui = 0,
    bc = null;
  function xe() {
    if ((_t & 2) !== 0 && Et !== 0) return Et & -Et;
    if (O.T !== null) {
      var t = Gl;
      return t !== 0 ? t : Cc();
    }
    return _f();
  }
  function dh() {
    Ne === 0 && (Ne = (Et & 536870912) === 0 || Ct ? Rf() : 536870912);
    var t = ze.current;
    return t !== null && (t.flags |= 32), Ne;
  }
  function Ee(t, e, n) {
    ((t === jt && (wt === 2 || wt === 9)) || t.cancelPendingCommit !== null) &&
      (na(t, 0), Vn(t, Et, Ne, !1)),
      Aa(t, n),
      ((_t & 2) === 0 || t !== jt) &&
        (t === jt &&
          ((_t & 2) === 0 && (yl |= n), Yt === 4 && Vn(t, Et, Ne, !1)),
        Je(t));
  }
  function mh(t, e, n) {
    if ((_t & 6) !== 0) throw Error(r(327));
    var a = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ta(t, e),
      u = a ? ny(t, e) : Ec(t, e, !0),
      c = a;
    do {
      if (u === 0) {
        Pl && !a && Vn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), c && !ty(n))) {
          (u = Ec(t, e, !1)), (c = !1);
          continue;
        }
        if (u === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var m = 0;
          else
            (m = t.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0);
          if (m !== 0) {
            e = m;
            t: {
              var v = t;
              u = ri;
              var E = v.current.memoizedState.isDehydrated;
              if ((E && (na(v, m).flags |= 256), (m = Ec(v, m, !1)), m !== 2)) {
                if (mc && !E) {
                  (v.errorRecoveryDisabledLanes |= c), (yl |= c), (u = 4);
                  break t;
                }
                (c = de),
                  (de = u),
                  c !== null && (de === null ? (de = c) : de.push.apply(de, c));
              }
              u = m;
            }
            if (((c = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          na(t, 0), Vn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (c = u), c)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Vn(a, e, Ne, !Yn);
              break t;
            case 2:
              de = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((u = vc + 300 - Te()), 10 < u)) {
            if ((Vn(a, e, Ne, !Yn), Gi(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = Gh(
              hh.bind(null, a, n, de, zr, pc, e, Ne, yl, Il, Yn, c, 2, -0, 0),
              u,
            );
            break t;
          }
          hh(a, n, de, zr, pc, e, Ne, yl, Il, Yn, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Je(t);
  }
  function hh(t, e, n, a, u, c, m, v, E, D, V, k, U, H) {
    if (
      ((t.timeoutHandle = -1),
      (k = e.subtreeFlags),
      (k & 8192 || (k & 16785408) === 16785408) &&
        ((hi = { stylesheets: null, count: 0, unsuspend: By }),
        uh(e),
        (k = Hy()),
        k !== null))
    ) {
      (t.cancelPendingCommit = k(
        xh.bind(null, t, e, c, n, a, u, m, v, E, V, 1, U, H),
      )),
        Vn(t, c, m, !D);
      return;
    }
    xh(t, e, c, n, a, u, m, v, E);
  }
  function ty(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var u = n[a],
            c = u.getSnapshot;
          u = u.value;
          try {
            if (!ve(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Vn(t, e, n, a) {
    (e &= ~hc),
      (e &= ~yl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var c = 31 - pe(u),
        m = 1 << c;
      (a[c] = -1), (u &= ~m);
    }
    n !== 0 && Af(t, n, e);
  }
  function Nr() {
    return (_t & 6) === 0 ? (oi(0), !1) : !0;
  }
  function Sc() {
    if (bt !== null) {
      if (wt === 0) var t = bt.return;
      else (t = bt), (un = dl = null), Ho(t), (Kl = null), (Pa = 0), (t = bt);
      for (; t !== null; ) km(t.alternate, t), (t = t.return);
      bt = null;
    }
  }
  function na(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), yy(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      Sc(),
      (jt = t),
      (bt = n = ln(t.current, null)),
      (Et = e),
      (wt = 0),
      (Se = null),
      (Yn = !1),
      (Pl = Ta(t, e)),
      (mc = !1),
      (Il = Ne = hc = yl = qn = Yt = 0),
      (de = ri = null),
      (pc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - pe(a),
          c = 1 << u;
        (e |= t[u]), (a &= ~c);
      }
    return (pn = e), tr(), n;
  }
  function ph(t, e) {
    (vt = null),
      (O.H = br),
      e === Xa || e === cr
        ? ((e = Nd()), (wt = 3))
        : e === Od
          ? ((e = Nd()), (wt = 4))
          : (wt =
              e === Dm
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Se = e),
      bt === null && ((Yt = 1), Tr(t, _e(e, t.current)));
  }
  function vh() {
    var t = O.H;
    return (O.H = br), t === null ? br : t;
  }
  function gh() {
    var t = O.A;
    return (O.A = Pg), t;
  }
  function xc() {
    (Yt = 4),
      Yn || ((Et & 4194048) !== Et && ze.current !== null) || (Pl = !0),
      ((qn & 134217727) === 0 && (yl & 134217727) === 0) ||
        jt === null ||
        Vn(jt, Et, Ne, !1);
  }
  function Ec(t, e, n) {
    var a = _t;
    _t |= 2;
    var u = vh(),
      c = gh();
    (jt !== t || Et !== e) && ((zr = null), na(t, e)), (e = !1);
    var m = Yt;
    t: do
      try {
        if (wt !== 0 && bt !== null) {
          var v = bt,
            E = Se;
          switch (wt) {
            case 8:
              Sc(), (m = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ze.current === null && (e = !0);
              var D = wt;
              if (((wt = 0), (Se = null), la(t, v, E, D), n && Pl)) {
                m = 0;
                break t;
              }
              break;
            default:
              (D = wt), (wt = 0), (Se = null), la(t, v, E, D);
          }
        }
        ey(), (m = Yt);
        break;
      } catch (V) {
        ph(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (un = dl = null),
      (_t = a),
      (O.H = u),
      (O.A = c),
      bt === null && ((jt = null), (Et = 0), tr()),
      m
    );
  }
  function ey() {
    for (; bt !== null; ) yh(bt);
  }
  function ny(t, e) {
    var n = _t;
    _t |= 2;
    var a = vh(),
      u = gh();
    jt !== t || Et !== e
      ? ((zr = null), (Mr = Te() + 500), na(t, e))
      : (Pl = Ta(t, e));
    t: do
      try {
        if (wt !== 0 && bt !== null) {
          e = bt;
          var c = Se;
          e: switch (wt) {
            case 1:
              (wt = 0), (Se = null), la(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (Md(c)) {
                (wt = 0), (Se = null), bh(e);
                break;
              }
              (e = function () {
                (wt !== 2 && wt !== 9) || jt !== t || (wt = 7), Je(t);
              }),
                c.then(e, e);
              break t;
            case 3:
              wt = 7;
              break t;
            case 4:
              wt = 5;
              break t;
            case 7:
              Md(c)
                ? ((wt = 0), (Se = null), bh(e))
                : ((wt = 0), (Se = null), la(t, e, c, 7));
              break;
            case 5:
              var m = null;
              switch (bt.tag) {
                case 26:
                  m = bt.memoizedState;
                case 5:
                case 27:
                  var v = bt;
                  if (!m || tp(m)) {
                    (wt = 0), (Se = null);
                    var E = v.sibling;
                    if (E !== null) bt = E;
                    else {
                      var D = v.return;
                      D !== null ? ((bt = D), Dr(D)) : (bt = null);
                    }
                    break e;
                  }
              }
              (wt = 0), (Se = null), la(t, e, c, 5);
              break;
            case 6:
              (wt = 0), (Se = null), la(t, e, c, 6);
              break;
            case 8:
              Sc(), (Yt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        ly();
        break;
      } catch (V) {
        ph(t, V);
      }
    while (!0);
    return (
      (un = dl = null),
      (O.H = a),
      (O.A = u),
      (_t = n),
      bt !== null ? 0 : ((jt = null), (Et = 0), tr(), Yt)
    );
  }
  function ly() {
    for (; bt !== null && !Ea(); ) yh(bt);
  }
  function yh(t) {
    var e = Qm(t.alternate, t, pn);
    (t.memoizedProps = t.pendingProps), e === null ? Dr(t) : (bt = e);
  }
  function bh(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = $m(n, e, e.pendingProps, e.type, void 0, Et);
        break;
      case 11:
        e = $m(n, e, e.pendingProps, e.type.render, e.ref, Et);
        break;
      case 5:
        Ho(e);
      default:
        km(n, e), (e = bt = Sd(e, pn)), (e = Qm(n, e, pn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Dr(t) : (bt = e);
  }
  function la(t, e, n, a) {
    (un = dl = null), Ho(e), (Kl = null), (Pa = 0);
    var u = e.return;
    try {
      if (Zg(t, u, e, n, Et)) {
        (Yt = 1), Tr(t, _e(n, t.current)), (bt = null);
        return;
      }
    } catch (c) {
      if (u !== null) throw ((bt = u), c);
      (Yt = 1), Tr(t, _e(n, t.current)), (bt = null);
      return;
    }
    e.flags & 32768
      ? (Ct || a === 1
          ? (t = !0)
          : Pl || (Et & 536870912) !== 0
            ? (t = !1)
            : ((Yn = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = ze.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Sh(e, t))
      : Dr(e);
  }
  function Dr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Sh(e, Yn);
        return;
      }
      t = e.return;
      var n = Kg(e.alternate, e, pn);
      if (n !== null) {
        bt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        bt = e;
        return;
      }
      bt = e = t;
    } while (e !== null);
    Yt === 0 && (Yt = 5);
  }
  function Sh(t, e) {
    do {
      var n = Jg(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (bt = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        bt = t;
        return;
      }
      bt = t = n;
    } while (t !== null);
    (Yt = 6), (bt = null);
  }
  function xh(t, e, n, a, u, c, m, v, E) {
    t.cancelPendingCommit = null;
    do jr();
    while (It !== 0);
    if ((_t & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= fo),
        B0(t, n, c, m, v, E),
        t === jt && ((bt = jt = null), (Et = 0)),
        (ta = e),
        (Xn = t),
        (ea = n),
        (gc = c),
        (yc = u),
        (fh = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            uy($i, function () {
              return Ch(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = O.T), (O.T = null), (u = $.p), ($.p = 2), (m = _t), (_t |= 4);
        try {
          Wg(t, e, n);
        } finally {
          (_t = m), ($.p = u), (O.T = a);
        }
      }
      (It = 1), Eh(), Rh(), Th();
    }
  }
  function Eh() {
    if (It === 1) {
      It = 0;
      var t = Xn,
        e = ta,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = O.T), (O.T = null);
        var a = $.p;
        $.p = 2;
        var u = _t;
        _t |= 4;
        try {
          ah(e, t);
          var c = jc,
            m = sd(t.containerInfo),
            v = c.focusedElem,
            E = c.selectionRange;
          if (
            m !== v &&
            v &&
            v.ownerDocument &&
            cd(v.ownerDocument.documentElement, v)
          ) {
            if (E !== null && ro(v)) {
              var D = E.start,
                V = E.end;
              if ((V === void 0 && (V = D), "selectionStart" in v))
                (v.selectionStart = D),
                  (v.selectionEnd = Math.min(V, v.value.length));
              else {
                var k = v.ownerDocument || document,
                  U = (k && k.defaultView) || window;
                if (U.getSelection) {
                  var H = U.getSelection(),
                    dt = v.textContent.length,
                    st = Math.min(E.start, dt),
                    zt = E.end === void 0 ? st : Math.min(E.end, dt);
                  !H.extend && st > zt && ((m = zt), (zt = st), (st = m));
                  var w = od(v, st),
                    C = od(v, zt);
                  if (
                    w &&
                    C &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== w.node ||
                      H.anchorOffset !== w.offset ||
                      H.focusNode !== C.node ||
                      H.focusOffset !== C.offset)
                  ) {
                    var z = k.createRange();
                    z.setStart(w.node, w.offset),
                      H.removeAllRanges(),
                      st > zt
                        ? (H.addRange(z), H.extend(C.node, C.offset))
                        : (z.setEnd(C.node, C.offset), H.addRange(z));
                  }
                }
              }
            }
            for (k = [], H = v; (H = H.parentNode); )
              H.nodeType === 1 &&
                k.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < k.length;
              v++
            ) {
              var Q = k[v];
              (Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top);
            }
          }
          (Zr = !!Dc), (jc = Dc = null);
        } finally {
          (_t = u), ($.p = a), (O.T = n);
        }
      }
      (t.current = e), (It = 2);
    }
  }
  function Rh() {
    if (It === 2) {
      It = 0;
      var t = Xn,
        e = ta,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = O.T), (O.T = null);
        var a = $.p;
        $.p = 2;
        var u = _t;
        _t |= 4;
        try {
          th(t, e.alternate, e);
        } finally {
          (_t = u), ($.p = a), (O.T = n);
        }
      }
      It = 3;
    }
  }
  function Th() {
    if (It === 4 || It === 3) {
      (It = 0), ju();
      var t = Xn,
        e = ta,
        n = ea,
        a = fh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (It = 5)
        : ((It = 0), (ta = Xn = null), Ah(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Gn = null),
        $u(n),
        (e = e.stateNode),
        he && typeof he.onCommitFiberRoot == "function")
      )
        try {
          he.onCommitFiberRoot(Ra, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = O.T), (u = $.p), ($.p = 2), (O.T = null);
        try {
          for (var c = t.onRecoverableError, m = 0; m < a.length; m++) {
            var v = a[m];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          (O.T = e), ($.p = u);
        }
      }
      (ea & 3) !== 0 && jr(),
        Je(t),
        (u = t.pendingLanes),
        (n & 4194090) !== 0 && (u & 42) !== 0
          ? t === bc
            ? ui++
            : ((ui = 0), (bc = t))
          : (ui = 0),
        oi(0);
    }
  }
  function Ah(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), qa(e)));
  }
  function jr(t) {
    return Eh(), Rh(), Th(), Ch();
  }
  function Ch() {
    if (It !== 5) return !1;
    var t = Xn,
      e = gc;
    gc = 0;
    var n = $u(ea),
      a = O.T,
      u = $.p;
    try {
      ($.p = 32 > n ? 32 : n), (O.T = null), (n = yc), (yc = null);
      var c = Xn,
        m = ea;
      if (((It = 0), (ta = Xn = null), (ea = 0), (_t & 6) !== 0))
        throw Error(r(331));
      var v = _t;
      if (
        ((_t |= 4),
        ch(c.current),
        rh(c, c.current, m, n),
        (_t = v),
        oi(0, !1),
        he && typeof he.onPostCommitFiberRoot == "function")
      )
        try {
          he.onPostCommitFiberRoot(Ra, c);
        } catch {}
      return !0;
    } finally {
      ($.p = u), (O.T = a), Ah(t, e);
    }
  }
  function _h(t, e, n) {
    (e = _e(n, e)),
      (e = Fo(t.stateNode, e, 2)),
      (t = Dn(t, e, 2)),
      t !== null && (Aa(t, 2), Je(t));
  }
  function Nt(t, e, n) {
    if (t.tag === 3) _h(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          _h(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(a)))
          ) {
            (t = _e(n, t)),
              (n = zm(2)),
              (a = Dn(e, n, 2)),
              a !== null && (Nm(n, a, e, t), Aa(a, 2), Je(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Rc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Ig();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(n) ||
      ((mc = !0), u.add(n), (t = ay.bind(null, t, e, n)), e.then(t, t));
  }
  function ay(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      jt === t &&
        (Et & n) === n &&
        (Yt === 4 || (Yt === 3 && (Et & 62914560) === Et && 300 > Te() - vc)
          ? (_t & 2) === 0 && na(t, 0)
          : (hc |= n),
        Il === Et && (Il = 0)),
      Je(t);
  }
  function wh(t, e) {
    e === 0 && (e = Tf()), (t = Ll(t, e)), t !== null && (Aa(t, e), Je(t));
  }
  function iy(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), wh(t, n);
  }
  function ry(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), wh(t, n);
  }
  function uy(t, e) {
    return An(t, e);
  }
  var Br = null,
    aa = null,
    Tc = !1,
    Ur = !1,
    Ac = !1,
    bl = 0;
  function Je(t) {
    t !== aa &&
      t.next === null &&
      (aa === null ? (Br = aa = t) : (aa = aa.next = t)),
      (Ur = !0),
      Tc || ((Tc = !0), cy());
  }
  function oi(t, e) {
    if (!Ac && Ur) {
      Ac = !0;
      do
        for (var n = !1, a = Br; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var m = a.suspendedLanes,
                v = a.pingedLanes;
              (c = (1 << (31 - pe(42 | t) + 1)) - 1),
                (c &= u & ~(m & ~v)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((n = !0), Nh(a, c));
          } else
            (c = Et),
              (c = Gi(
                a,
                a === jt ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || Ta(a, c) || ((n = !0), Nh(a, c));
          a = a.next;
        }
      while (n);
      Ac = !1;
    }
  }
  function oy() {
    Oh();
  }
  function Oh() {
    Ur = Tc = !1;
    var t = 0;
    bl !== 0 && (gy() && (t = bl), (bl = 0));
    for (var e = Te(), n = null, a = Br; a !== null; ) {
      var u = a.next,
        c = Mh(a, e);
      c === 0
        ? ((a.next = null),
          n === null ? (Br = u) : (n.next = u),
          u === null && (aa = n))
        : ((n = a), (t !== 0 || (c & 3) !== 0) && (Ur = !0)),
        (a = u);
    }
    oi(t);
  }
  function Mh(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;

    ) {
      var m = 31 - pe(c),
        v = 1 << m,
        E = u[m];
      E === -1
        ? ((v & n) === 0 || (v & a) !== 0) && (u[m] = j0(v, e))
        : E <= e && (t.expiredLanes |= v),
        (c &= ~v);
    }
    if (
      ((e = jt),
      (n = Et),
      (n = Gi(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (wt === 2 || wt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Cn(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ta(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && Cn(a), $u(n))) {
        case 2:
        case 8:
          n = Uu;
          break;
        case 32:
          n = $i;
          break;
        case 268435456:
          n = Ef;
          break;
        default:
          n = $i;
      }
      return (
        (a = zh.bind(null, t)),
        (n = An(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && Cn(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function zh(t, e) {
    if (It !== 0 && It !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (jr() && t.callbackNode !== n) return null;
    var a = Et;
    return (
      (a = Gi(
        t,
        t === jt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (mh(t, a, e),
          Mh(t, Te()),
          t.callbackNode != null && t.callbackNode === n
            ? zh.bind(null, t)
            : null)
    );
  }
  function Nh(t, e) {
    if (jr()) return null;
    mh(t, e, !0);
  }
  function cy() {
    by(function () {
      (_t & 6) !== 0 ? An(Li, oy) : Oh();
    });
  }
  function Cc() {
    return bl === 0 && (bl = Rf()), bl;
  }
  function Dh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : ki("" + t);
  }
  function jh(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function sy(t, e, n, a, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var c = Dh((u[oe] || null).action),
        m = a.submitter;
      m &&
        ((e = (e = m[oe] || null)
          ? Dh(e.formAction)
          : m.getAttribute("formAction")),
        e !== null && ((c = e), (m = null)));
      var v = new Fi("action", "action", null, a, u);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (bl !== 0) {
                  var E = m ? jh(u, m) : new FormData(u);
                  Zo(
                    n,
                    { pending: !0, data: E, method: u.method, action: c },
                    null,
                    E,
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (E = m ? jh(u, m) : new FormData(u)),
                  Zo(
                    n,
                    { pending: !0, data: E, method: u.method, action: c },
                    c,
                    E,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var _c = 0; _c < so.length; _c++) {
    var wc = so[_c],
      fy = wc.toLowerCase(),
      dy = wc[0].toUpperCase() + wc.slice(1);
    Le(fy, "on" + dy);
  }
  Le(md, "onAnimationEnd"),
    Le(hd, "onAnimationIteration"),
    Le(pd, "onAnimationStart"),
    Le("dblclick", "onDoubleClick"),
    Le("focusin", "onFocus"),
    Le("focusout", "onBlur"),
    Le(Og, "onTransitionRun"),
    Le(Mg, "onTransitionStart"),
    Le(zg, "onTransitionCancel"),
    Le(vd, "onTransitionEnd"),
    wl("onMouseEnter", ["mouseout", "mouseover"]),
    wl("onMouseLeave", ["mouseout", "mouseover"]),
    wl("onPointerEnter", ["pointerout", "pointerover"]),
    wl("onPointerLeave", ["pointerout", "pointerover"]),
    ll(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ll(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ll("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ll(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ll(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ll(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var ci =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    my = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ci),
    );
  function Bh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        u = a.event;
      a = a.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var m = a.length - 1; 0 <= m; m--) {
            var v = a[m],
              E = v.instance,
              D = v.currentTarget;
            if (((v = v.listener), E !== c && u.isPropagationStopped()))
              break t;
            (c = v), (u.currentTarget = D);
            try {
              c(u);
            } catch (V) {
              Rr(V);
            }
            (u.currentTarget = null), (c = E);
          }
        else
          for (m = 0; m < a.length; m++) {
            if (
              ((v = a[m]),
              (E = v.instance),
              (D = v.currentTarget),
              (v = v.listener),
              E !== c && u.isPropagationStopped())
            )
              break t;
            (c = v), (u.currentTarget = D);
            try {
              c(u);
            } catch (V) {
              Rr(V);
            }
            (u.currentTarget = null), (c = E);
          }
      }
    }
  }
  function St(t, e) {
    var n = e[Yu];
    n === void 0 && (n = e[Yu] = new Set());
    var a = t + "__bubble";
    n.has(a) || (Uh(e, t, 2, !1), n.add(a));
  }
  function Oc(t, e, n) {
    var a = 0;
    e && (a |= 4), Uh(n, t, a, e);
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function Mc(t) {
    if (!t[Hr]) {
      (t[Hr] = !0),
        Of.forEach(function (n) {
          n !== "selectionchange" && (my.has(n) || Oc(n, !1, t), Oc(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Hr] || ((e[Hr] = !0), Oc("selectionchange", !1, e));
    }
  }
  function Uh(t, e, n, a) {
    switch (rp(e)) {
      case 2:
        var u = Yy;
        break;
      case 8:
        u = qy;
        break;
      default:
        u = Vc;
    }
    (n = u.bind(null, e, n, t)),
      (u = void 0),
      !Fu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: u })
          : t.addEventListener(e, n, !0)
        : u !== void 0
          ? t.addEventListener(e, n, { passive: u })
          : t.addEventListener(e, n, !1);
  }
  function zc(t, e, n, a, u) {
    var c = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var v = a.stateNode.containerInfo;
          if (v === u) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var E = m.tag;
              if ((E === 3 || E === 4) && m.stateNode.containerInfo === u)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (((m = Al(v)), m === null)) return;
            if (((E = m.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              a = c = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        a = a.return;
      }
    Xf(function () {
      var D = c,
        V = Ju(n),
        k = [];
      t: {
        var U = gd.get(t);
        if (U !== void 0) {
          var H = Fi,
            dt = t;
          switch (t) {
            case "keypress":
              if (Ji(n) === 0) break t;
            case "keydown":
            case "keyup":
              H = ug;
              break;
            case "focusin":
              (dt = "focus"), (H = eo);
              break;
            case "focusout":
              (dt = "blur"), (H = eo);
              break;
            case "beforeblur":
            case "afterblur":
              H = eo;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = Zf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = J0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = sg;
              break;
            case md:
            case hd:
            case pd:
              H = P0;
              break;
            case vd:
              H = dg;
              break;
            case "scroll":
            case "scrollend":
              H = k0;
              break;
            case "wheel":
              H = hg;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = tg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Kf;
              break;
            case "toggle":
            case "beforetoggle":
              H = vg;
          }
          var st = (e & 4) !== 0,
            zt = !st && (t === "scroll" || t === "scrollend"),
            w = st ? (U !== null ? U + "Capture" : null) : U;
          st = [];
          for (var C = D, z; C !== null; ) {
            var Q = C;
            if (
              ((z = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                z === null ||
                w === null ||
                ((Q = wa(C, w)), Q != null && st.push(si(C, Q, z))),
              zt)
            )
              break;
            C = C.return;
          }
          0 < st.length &&
            ((U = new H(U, dt, null, n, V)),
            k.push({ event: U, listeners: st }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((U = t === "mouseover" || t === "pointerover"),
            (H = t === "mouseout" || t === "pointerout"),
            U &&
              n !== Ku &&
              (dt = n.relatedTarget || n.fromElement) &&
              (Al(dt) || dt[Tl]))
          )
            break t;
          if (
            (H || U) &&
            ((U =
              V.window === V
                ? V
                : (U = V.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            H
              ? ((dt = n.relatedTarget || n.toElement),
                (H = D),
                (dt = dt ? Al(dt) : null),
                dt !== null &&
                  ((zt = f(dt)),
                  (st = dt.tag),
                  dt !== zt || (st !== 5 && st !== 27 && st !== 6)) &&
                  (dt = null))
              : ((H = null), (dt = D)),
            H !== dt)
          ) {
            if (
              ((st = Zf),
              (Q = "onMouseLeave"),
              (w = "onMouseEnter"),
              (C = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((st = Kf),
                (Q = "onPointerLeave"),
                (w = "onPointerEnter"),
                (C = "pointer")),
              (zt = H == null ? U : _a(H)),
              (z = dt == null ? U : _a(dt)),
              (U = new st(Q, C + "leave", H, n, V)),
              (U.target = zt),
              (U.relatedTarget = z),
              (Q = null),
              Al(V) === D &&
                ((st = new st(w, C + "enter", dt, n, V)),
                (st.target = z),
                (st.relatedTarget = zt),
                (Q = st)),
              (zt = Q),
              H && dt)
            )
              e: {
                for (st = H, w = dt, C = 0, z = st; z; z = ia(z)) C++;
                for (z = 0, Q = w; Q; Q = ia(Q)) z++;
                for (; 0 < C - z; ) (st = ia(st)), C--;
                for (; 0 < z - C; ) (w = ia(w)), z--;
                for (; C--; ) {
                  if (st === w || (w !== null && st === w.alternate)) break e;
                  (st = ia(st)), (w = ia(w));
                }
                st = null;
              }
            else st = null;
            H !== null && Hh(k, U, H, st, !1),
              dt !== null && zt !== null && Hh(k, zt, dt, st, !0);
          }
        }
        t: {
          if (
            ((U = D ? _a(D) : window),
            (H = U.nodeName && U.nodeName.toLowerCase()),
            H === "select" || (H === "input" && U.type === "file"))
          )
            var at = nd;
          else if (td(U))
            if (ld) at = Cg;
            else {
              at = Tg;
              var yt = Rg;
            }
          else
            (H = U.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? D && ku(D.elementType) && (at = nd)
                : (at = Ag);
          if (at && (at = at(t, D))) {
            ed(k, at, n, V);
            break t;
          }
          yt && yt(t, U, D),
            t === "focusout" &&
              D &&
              U.type === "number" &&
              D.memoizedProps.value != null &&
              Zu(U, "number", U.value);
        }
        switch (((yt = D ? _a(D) : window), t)) {
          case "focusin":
            (td(yt) || yt.contentEditable === "true") &&
              ((Bl = yt), (uo = D), (Ua = null));
            break;
          case "focusout":
            Ua = uo = Bl = null;
            break;
          case "mousedown":
            oo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (oo = !1), fd(k, n, V);
            break;
          case "selectionchange":
            if (wg) break;
          case "keydown":
          case "keyup":
            fd(k, n, V);
        }
        var it;
        if (lo)
          t: {
            switch (t) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break t;
              case "compositionend":
                ft = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break t;
            }
            ft = void 0;
          }
        else
          jl
            ? Pf(t, n) && (ft = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (ft = "onCompositionStart");
        ft &&
          (Jf &&
            n.locale !== "ko" &&
            (jl || ft !== "onCompositionStart"
              ? ft === "onCompositionEnd" && jl && (it = Vf())
              : ((On = V),
                (Pu = "value" in On ? On.value : On.textContent),
                (jl = !0))),
          (yt = Lr(D, ft)),
          0 < yt.length &&
            ((ft = new kf(ft, t, null, n, V)),
            k.push({ event: ft, listeners: yt }),
            it
              ? (ft.data = it)
              : ((it = If(n)), it !== null && (ft.data = it)))),
          (it = yg ? bg(t, n) : Sg(t, n)) &&
            ((ft = Lr(D, "onBeforeInput")),
            0 < ft.length &&
              ((yt = new kf("onBeforeInput", "beforeinput", null, n, V)),
              k.push({ event: yt, listeners: ft }),
              (yt.data = it))),
          sy(k, t, D, n, V);
      }
      Bh(k, e);
    });
  }
  function si(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Lr(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var u = t,
        c = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          c === null ||
          ((u = wa(t, n)),
          u != null && a.unshift(si(t, u, c)),
          (u = wa(t, e)),
          u != null && a.push(si(t, u, c))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function ia(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Hh(t, e, n, a, u) {
    for (var c = e._reactName, m = []; n !== null && n !== a; ) {
      var v = n,
        E = v.alternate,
        D = v.stateNode;
      if (((v = v.tag), E !== null && E === a)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        D === null ||
        ((E = D),
        u
          ? ((D = wa(n, c)), D != null && m.unshift(si(n, D, E)))
          : u || ((D = wa(n, c)), D != null && m.push(si(n, D, E)))),
        (n = n.return);
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var hy = /\r\n?/g,
    py = /\u0000|\uFFFD/g;
  function Lh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        hy,
        `
`,
      )
      .replace(py, "");
  }
  function $h(t, e) {
    return (e = Lh(e)), Lh(t) === e;
  }
  function $r() {}
  function Mt(t, e, n, a, u, c) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || zl(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            zl(t, "" + a);
        break;
      case "className":
        Vi(t, "class", a);
        break;
      case "tabIndex":
        Vi(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vi(t, n, a);
        break;
      case "style":
        qf(t, a, c);
        break;
      case "data":
        if (e !== "object") {
          Vi(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = ki("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (e !== "input" && Mt(t, e, "name", u.name, u, null),
                Mt(t, e, "formEncType", u.formEncType, u, null),
                Mt(t, e, "formMethod", u.formMethod, u, null),
                Mt(t, e, "formTarget", u.formTarget, u, null))
              : (Mt(t, e, "encType", u.encType, u, null),
                Mt(t, e, "method", u.method, u, null),
                Mt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = ki("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = $r);
        break;
      case "onScroll":
        a != null && St("scroll", t);
        break;
      case "onScrollEnd":
        a != null && St("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = ki("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        St("beforetoggle", t), St("toggle", t), Xi(t, "popover", a);
        break;
      case "xlinkActuate":
        en(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        en(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        en(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        en(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Xi(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Q0.get(n) || n), Xi(t, n, a));
    }
  }
  function Nc(t, e, n, a, u, c) {
    switch (n) {
      case "style":
        qf(t, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (u.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? zl(t, a)
          : (typeof a == "number" || typeof a == "bigint") && zl(t, "" + a);
        break;
      case "onScroll":
        a != null && St("scroll", t);
        break;
      case "onScrollEnd":
        a != null && St("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = $r);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (e = n.slice(2, u ? n.length - 7 : void 0)),
              (c = t[oe] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && t.removeEventListener(e, c, u),
              typeof a == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, u);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : Xi(t, n, a);
          }
    }
  }
  function te(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        St("error", t), St("load", t);
        var a = !1,
          u = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var m = n[c];
            if (m != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Mt(t, e, c, m, n, null);
              }
          }
        u && Mt(t, e, "srcSet", n.srcSet, n, null),
          a && Mt(t, e, "src", n.src, n, null);
        return;
      case "input":
        St("invalid", t);
        var v = (c = m = u = null),
          E = null,
          D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var V = n[a];
            if (V != null)
              switch (a) {
                case "name":
                  u = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  E = V;
                  break;
                case "defaultChecked":
                  D = V;
                  break;
                case "value":
                  c = V;
                  break;
                case "defaultValue":
                  v = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(r(137, e));
                  break;
                default:
                  Mt(t, e, a, V, n, null);
              }
          }
        Hf(t, c, v, E, D, m, u, !1), Qi(t);
        return;
      case "select":
        St("invalid", t), (a = m = c = null);
        for (u in n)
          if (n.hasOwnProperty(u) && ((v = n[u]), v != null))
            switch (u) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                a = v;
              default:
                Mt(t, e, u, v, n, null);
            }
        (e = c),
          (n = m),
          (t.multiple = !!a),
          e != null ? Ml(t, !!a, e, !1) : n != null && Ml(t, !!a, n, !0);
        return;
      case "textarea":
        St("invalid", t), (c = u = a = null);
        for (m in n)
          if (n.hasOwnProperty(m) && ((v = n[m]), v != null))
            switch (m) {
              case "value":
                a = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                Mt(t, e, m, v, n, null);
            }
        $f(t, a, u, c), Qi(t);
        return;
      case "option":
        for (E in n)
          if (n.hasOwnProperty(E) && ((a = n[E]), a != null))
            switch (E) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Mt(t, e, E, a, n, null);
            }
        return;
      case "dialog":
        St("beforetoggle", t), St("toggle", t), St("cancel", t), St("close", t);
        break;
      case "iframe":
      case "object":
        St("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ci.length; a++) St(ci[a], t);
        break;
      case "image":
        St("error", t), St("load", t);
        break;
      case "details":
        St("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        St("error", t), St("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((a = n[D]), a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Mt(t, e, D, a, n, null);
            }
        return;
      default:
        if (ku(e)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((a = n[V]), a !== void 0 && Nc(t, e, V, a, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((a = n[v]), a != null && Mt(t, e, v, a, n, null));
  }
  function vy(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          c = null,
          m = null,
          v = null,
          E = null,
          D = null,
          V = null;
        for (H in n) {
          var k = n[H];
          if (n.hasOwnProperty(H) && k != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = k;
              default:
                a.hasOwnProperty(H) || Mt(t, e, H, null, a, k);
            }
        }
        for (var U in a) {
          var H = a[U];
          if (((k = n[U]), a.hasOwnProperty(U) && (H != null || k != null)))
            switch (U) {
              case "type":
                c = H;
                break;
              case "name":
                u = H;
                break;
              case "checked":
                D = H;
                break;
              case "defaultChecked":
                V = H;
                break;
              case "value":
                m = H;
                break;
              case "defaultValue":
                v = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(r(137, e));
                break;
              default:
                H !== k && Mt(t, e, U, H, a, k);
            }
        }
        Qu(t, m, v, E, D, V, c, u);
        return;
      case "select":
        H = m = v = U = null;
        for (c in n)
          if (((E = n[c]), n.hasOwnProperty(c) && E != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                H = E;
              default:
                a.hasOwnProperty(c) || Mt(t, e, c, null, a, E);
            }
        for (u in a)
          if (
            ((c = a[u]),
            (E = n[u]),
            a.hasOwnProperty(u) && (c != null || E != null))
          )
            switch (u) {
              case "value":
                U = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== E && Mt(t, e, u, c, a, E);
            }
        (e = v),
          (n = m),
          (a = H),
          U != null
            ? Ml(t, !!n, U, !1)
            : !!a != !!n &&
              (e != null ? Ml(t, !!n, e, !0) : Ml(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        H = U = null;
        for (v in n)
          if (
            ((u = n[v]),
            n.hasOwnProperty(v) && u != null && !a.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Mt(t, e, v, null, a, u);
            }
        for (m in a)
          if (
            ((u = a[m]),
            (c = n[m]),
            a.hasOwnProperty(m) && (u != null || c != null))
          )
            switch (m) {
              case "value":
                U = u;
                break;
              case "defaultValue":
                H = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== c && Mt(t, e, m, u, a, c);
            }
        Lf(t, U, H);
        return;
      case "option":
        for (var dt in n)
          if (
            ((U = n[dt]),
            n.hasOwnProperty(dt) && U != null && !a.hasOwnProperty(dt))
          )
            switch (dt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Mt(t, e, dt, null, a, U);
            }
        for (E in a)
          if (
            ((U = a[E]),
            (H = n[E]),
            a.hasOwnProperty(E) && U !== H && (U != null || H != null))
          )
            switch (E) {
              case "selected":
                t.selected =
                  U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Mt(t, e, E, U, a, H);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var st in n)
          (U = n[st]),
            n.hasOwnProperty(st) &&
              U != null &&
              !a.hasOwnProperty(st) &&
              Mt(t, e, st, null, a, U);
        for (D in a)
          if (
            ((U = a[D]),
            (H = n[D]),
            a.hasOwnProperty(D) && U !== H && (U != null || H != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(r(137, e));
                break;
              default:
                Mt(t, e, D, U, a, H);
            }
        return;
      default:
        if (ku(e)) {
          for (var zt in n)
            (U = n[zt]),
              n.hasOwnProperty(zt) &&
                U !== void 0 &&
                !a.hasOwnProperty(zt) &&
                Nc(t, e, zt, void 0, a, U);
          for (V in a)
            (U = a[V]),
              (H = n[V]),
              !a.hasOwnProperty(V) ||
                U === H ||
                (U === void 0 && H === void 0) ||
                Nc(t, e, V, U, a, H);
          return;
        }
    }
    for (var w in n)
      (U = n[w]),
        n.hasOwnProperty(w) &&
          U != null &&
          !a.hasOwnProperty(w) &&
          Mt(t, e, w, null, a, U);
    for (k in a)
      (U = a[k]),
        (H = n[k]),
        !a.hasOwnProperty(k) ||
          U === H ||
          (U == null && H == null) ||
          Mt(t, e, k, U, a, H);
  }
  var Dc = null,
    jc = null;
  function Yr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Yh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Bc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Uc = null;
  function gy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Uc
        ? !1
        : ((Uc = t), !0)
      : ((Uc = null), !1);
  }
  var Gh = typeof setTimeout == "function" ? setTimeout : void 0,
    yy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xh = typeof Promise == "function" ? Promise : void 0,
    by =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xh < "u"
          ? function (t) {
              return Xh.resolve(null).then(t).catch(Sy);
            }
          : Gh;
  function Sy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Qn(t) {
    return t === "head";
  }
  function Vh(t, e) {
    var n = e,
      a = 0,
      u = 0;
    do {
      var c = n.nextSibling;
      if ((t.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$")) {
          if (0 < a && 8 > a) {
            n = a;
            var m = t.ownerDocument;
            if ((n & 1 && fi(m.documentElement), n & 2 && fi(m.body), n & 4))
              for (n = m.head, fi(n), m = n.firstChild; m; ) {
                var v = m.nextSibling,
                  E = m.nodeName;
                m[Ca] ||
                  E === "SCRIPT" ||
                  E === "STYLE" ||
                  (E === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(m),
                  (m = v);
              }
          }
          if (u === 0) {
            t.removeChild(c), bi(e);
            return;
          }
          u--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? u++
            : (a = n.charCodeAt(0) - 48);
      else a = 0;
      n = c;
    } while (n);
    bi(e);
  }
  function Hc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Hc(n), qu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function xy(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ca])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = Ye(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ey(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Lc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Ry(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Ye(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var $c = null;
  function Qh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Zh(t, e, n) {
    switch (((e = Yr(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function fi(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    qu(t);
  }
  var De = new Map(),
    kh = new Set();
  function qr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var vn = $.d;
  $.d = { f: Ty, r: Ay, D: Cy, C: _y, L: wy, m: Oy, X: zy, S: My, M: Ny };
  function Ty() {
    var t = vn.f(),
      e = Nr();
    return t || e;
  }
  function Ay(t) {
    var e = Cl(t);
    e !== null && e.tag === 5 && e.type === "form" ? mm(e) : vn.r(t);
  }
  var ra = typeof document > "u" ? null : document;
  function Kh(t, e, n) {
    var a = ra;
    if (a && typeof e == "string" && e) {
      var u = Ce(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        kh.has(u) ||
          (kh.add(u),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            te(e, "link", t),
            kt(e),
            a.head.appendChild(e)));
    }
  }
  function Cy(t) {
    vn.D(t), Kh("dns-prefetch", t, null);
  }
  function _y(t, e) {
    vn.C(t, e), Kh("preconnect", t, e);
  }
  function wy(t, e, n) {
    vn.L(t, e, n);
    var a = ra;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + Ce(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + Ce(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + Ce(n.imageSizes) + '"]'))
        : (u += '[href="' + Ce(t) + '"]');
      var c = u;
      switch (e) {
        case "style":
          c = ua(t);
          break;
        case "script":
          c = oa(t);
      }
      De.has(c) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        De.set(c, t),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(di(c))) ||
          (e === "script" && a.querySelector(mi(c))) ||
          ((e = a.createElement("link")),
          te(e, "link", t),
          kt(e),
          a.head.appendChild(e)));
    }
  }
  function Oy(t, e) {
    vn.m(t, e);
    var n = ra;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Ce(a) + '"][href="' + Ce(t) + '"]',
        c = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = oa(t);
      }
      if (
        !De.has(c) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        De.set(c, t),
        n.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(mi(c))) return;
        }
        (a = n.createElement("link")),
          te(a, "link", t),
          kt(a),
          n.head.appendChild(a);
      }
    }
  }
  function My(t, e, n) {
    vn.S(t, e, n);
    var a = ra;
    if (a && t) {
      var u = _l(a).hoistableStyles,
        c = ua(t);
      e = e || "default";
      var m = u.get(c);
      if (!m) {
        var v = { loading: 0, preload: null };
        if ((m = a.querySelector(di(c)))) v.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = De.get(c)) && Yc(t, n);
          var E = (m = a.createElement("link"));
          kt(E),
            te(E, "link", t),
            (E._p = new Promise(function (D, V) {
              (E.onload = D), (E.onerror = V);
            })),
            E.addEventListener("load", function () {
              v.loading |= 1;
            }),
            E.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Gr(m, e, a);
        }
        (m = { type: "stylesheet", instance: m, count: 1, state: v }),
          u.set(c, m);
      }
    }
  }
  function zy(t, e) {
    vn.X(t, e);
    var n = ra;
    if (n && t) {
      var a = _l(n).hoistableScripts,
        u = oa(t),
        c = a.get(u);
      c ||
        ((c = n.querySelector(mi(u))),
        c ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = De.get(u)) && qc(t, e),
          (c = n.createElement("script")),
          kt(c),
          te(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(u, c));
    }
  }
  function Ny(t, e) {
    vn.M(t, e);
    var n = ra;
    if (n && t) {
      var a = _l(n).hoistableScripts,
        u = oa(t),
        c = a.get(u);
      c ||
        ((c = n.querySelector(mi(u))),
        c ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = De.get(u)) && qc(t, e),
          (c = n.createElement("script")),
          kt(c),
          te(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(u, c));
    }
  }
  function Jh(t, e, n, a) {
    var u = (u = nt.current) ? qr(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ua(n.href)),
            (n = _l(u).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ua(n.href);
          var c = _l(u).hoistableStyles,
            m = c.get(t);
          if (
            (m ||
              ((u = u.ownerDocument || u),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, m),
              (c = u.querySelector(di(t))) &&
                !c._p &&
                ((m.instance = c), (m.state.loading = 5)),
              De.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                De.set(t, n),
                c || Dy(u, t, n, m.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return m;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = oa(n)),
              (n = _l(u).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function ua(t) {
    return 'href="' + Ce(t) + '"';
  }
  function di(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Wh(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Dy(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        te(e, "link", n),
        kt(e),
        t.head.appendChild(e));
  }
  function oa(t) {
    return '[src="' + Ce(t) + '"]';
  }
  function mi(t) {
    return "script[async]" + t;
  }
  function Fh(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ce(n.href) + '"]');
          if (a) return (e.instance = a), kt(a), a;
          var u = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            kt(a),
            te(a, "style", u),
            Gr(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          u = ua(n.href);
          var c = t.querySelector(di(u));
          if (c) return (e.state.loading |= 4), (e.instance = c), kt(c), c;
          (a = Wh(n)),
            (u = De.get(u)) && Yc(a, u),
            (c = (t.ownerDocument || t).createElement("link")),
            kt(c);
          var m = c;
          return (
            (m._p = new Promise(function (v, E) {
              (m.onload = v), (m.onerror = E);
            })),
            te(c, "link", a),
            (e.state.loading |= 4),
            Gr(c, n.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = oa(n.src)),
            (u = t.querySelector(mi(c)))
              ? ((e.instance = u), kt(u), u)
              : ((a = n),
                (u = De.get(c)) && ((a = b({}, n)), qc(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                kt(u),
                te(u, "link", a),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Gr(a, n.precedence, t));
    return e.instance;
  }
  function Gr(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        c = u,
        m = 0;
      m < a.length;
      m++
    ) {
      var v = a[m];
      if (v.dataset.precedence === e) c = v;
      else if (c !== u) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Yc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function qc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Xr = null;
  function Ph(t, e, n) {
    if (Xr === null) {
      var a = new Map(),
        u = (Xr = new Map());
      u.set(n, a);
    } else (u = Xr), (a = u.get(n)), a || ((a = new Map()), u.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), u = 0;
      u < n.length;
      u++
    ) {
      var c = n[u];
      if (
        !(
          c[Ca] ||
          c[ae] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = c.getAttribute(e) || "";
        m = t + m;
        var v = a.get(m);
        v ? v.push(c) : a.set(m, [c]);
      }
    }
    return a;
  }
  function Ih(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      );
  }
  function jy(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function tp(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var hi = null;
  function By() {}
  function Uy(t, e, n) {
    if (hi === null) throw Error(r(475));
    var a = hi;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = ua(n.href),
          c = t.querySelector(di(u));
        if (c) {
          (t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Vr.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = c),
            kt(c);
          return;
        }
        (c = t.ownerDocument || t),
          (n = Wh(n)),
          (u = De.get(u)) && Yc(n, u),
          (c = c.createElement("link")),
          kt(c);
        var m = c;
        (m._p = new Promise(function (v, E) {
          (m.onload = v), (m.onerror = E);
        })),
          te(c, "link", n),
          (e.instance = c);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Vr.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Hy() {
    if (hi === null) throw Error(r(475));
    var t = hi;
    return (
      t.stylesheets && t.count === 0 && Gc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Gc(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Vr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Gc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Qr = null;
  function Gc(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Qr = new Map()),
        e.forEach(Ly, t),
        (Qr = null),
        Vr.call(t));
  }
  function Ly(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Qr.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), Qr.set(t, n);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < u.length;
          c++
        ) {
          var m = u[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (a = m));
        }
        a && n.set(null, a);
      }
      (u = e.instance),
        (m = u.getAttribute("data-precedence")),
        (c = n.get(m) || a),
        c === a && n.set(null, u),
        n.set(m, u),
        this.count++,
        (a = Vr.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        c
          ? c.parentNode.insertBefore(u, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var pi = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function $y(t, e, n, a, u, c, m, v) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Hu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Hu(0)),
      (this.hiddenUpdates = Hu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = c),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function ep(t, e, n, a, u, c, m, v, E, D, V, k) {
    return (
      (t = new $y(t, e, n, m, v, E, D, k)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = ge(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Ro()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: a, isDehydrated: n, cache: e }),
      _o(c),
      t
    );
  }
  function np(t) {
    return t ? ((t = $l), t) : $l;
  }
  function lp(t, e, n, a, u, c) {
    (u = np(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Nn(e)),
      (a.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (n = Dn(t, a, e)),
      n !== null && (Ee(n, t, e), Qa(n, t, e));
  }
  function ap(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Xc(t, e) {
    ap(t, e), (t = t.alternate) && ap(t, e);
  }
  function ip(t) {
    if (t.tag === 13) {
      var e = Ll(t, 67108864);
      e !== null && Ee(e, t, 67108864), Xc(t, 67108864);
    }
  }
  var Zr = !0;
  function Yy(t, e, n, a) {
    var u = O.T;
    O.T = null;
    var c = $.p;
    try {
      ($.p = 2), Vc(t, e, n, a);
    } finally {
      ($.p = c), (O.T = u);
    }
  }
  function qy(t, e, n, a) {
    var u = O.T;
    O.T = null;
    var c = $.p;
    try {
      ($.p = 8), Vc(t, e, n, a);
    } finally {
      ($.p = c), (O.T = u);
    }
  }
  function Vc(t, e, n, a) {
    if (Zr) {
      var u = Qc(a);
      if (u === null) zc(t, e, a, kr, n), up(t, a);
      else if (Xy(u, t, e, n, a)) a.stopPropagation();
      else if ((up(t, a), e & 4 && -1 < Gy.indexOf(t))) {
        for (; u !== null; ) {
          var c = Cl(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var m = nl(c.pendingLanes);
                  if (m !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var E = 1 << (31 - pe(m));
                      (v.entanglements[1] |= E), (m &= ~E);
                    }
                    Je(c), (_t & 6) === 0 && ((Mr = Te() + 500), oi(0));
                  }
                }
                break;
              case 13:
                (v = Ll(c, 2)), v !== null && Ee(v, c, 2), Nr(), Xc(c, 2);
            }
          if (((c = Qc(a)), c === null && zc(t, e, a, kr, n), c === u)) break;
          u = c;
        }
        u !== null && a.stopPropagation();
      } else zc(t, e, a, null, n);
    }
  }
  function Qc(t) {
    return (t = Ju(t)), Zc(t);
  }
  var kr = null;
  function Zc(t) {
    if (((kr = null), (t = Al(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (kr = t), null;
  }
  function rp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bu()) {
          case Li:
            return 2;
          case Uu:
            return 8;
          case $i:
          case w0:
            return 32;
          case Ef:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kc = !1,
    Zn = null,
    kn = null,
    Kn = null,
    vi = new Map(),
    gi = new Map(),
    Jn = [],
    Gy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function up(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Zn = null;
        break;
      case "dragenter":
      case "dragleave":
        kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        vi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gi.delete(e.pointerId);
    }
  }
  function yi(t, e, n, a, u, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [u],
        }),
        e !== null && ((e = Cl(e)), e !== null && ip(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function Xy(t, e, n, a, u) {
    switch (e) {
      case "focusin":
        return (Zn = yi(Zn, t, e, n, a, u)), !0;
      case "dragenter":
        return (kn = yi(kn, t, e, n, a, u)), !0;
      case "mouseover":
        return (Kn = yi(Kn, t, e, n, a, u)), !0;
      case "pointerover":
        var c = u.pointerId;
        return vi.set(c, yi(vi.get(c) || null, t, e, n, a, u)), !0;
      case "gotpointercapture":
        return (
          (c = u.pointerId), gi.set(c, yi(gi.get(c) || null, t, e, n, a, u)), !0
        );
    }
    return !1;
  }
  function op(t) {
    var e = Al(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            (t.blockedOn = e),
              U0(t.priority, function () {
                if (n.tag === 13) {
                  var a = xe();
                  a = Lu(a);
                  var u = Ll(n, a);
                  u !== null && Ee(u, n, a), Xc(n, a);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Kr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Qc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (Ku = a), n.target.dispatchEvent(a), (Ku = null);
      } else return (e = Cl(n)), e !== null && ip(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function cp(t, e, n) {
    Kr(t) && n.delete(e);
  }
  function Vy() {
    (kc = !1),
      Zn !== null && Kr(Zn) && (Zn = null),
      kn !== null && Kr(kn) && (kn = null),
      Kn !== null && Kr(Kn) && (Kn = null),
      vi.forEach(cp),
      gi.forEach(cp);
  }
  function Jr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      kc ||
        ((kc = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Vy)));
  }
  var Wr = null;
  function sp(t) {
    Wr !== t &&
      ((Wr = t),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Wr === t && (Wr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (Zc(a || n) === null) continue;
            break;
          }
          var c = Cl(n);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Zo(c, { pending: !0, data: u, method: n.method, action: a }, a, u));
        }
      }));
  }
  function bi(t) {
    function e(E) {
      return Jr(E, t);
    }
    Zn !== null && Jr(Zn, t),
      kn !== null && Jr(kn, t),
      Kn !== null && Jr(Kn, t),
      vi.forEach(e),
      gi.forEach(e);
    for (var n = 0; n < Jn.length; n++) {
      var a = Jn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Jn.length && ((n = Jn[0]), n.blockedOn === null); )
      op(n), n.blockedOn === null && Jn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var u = n[a],
          c = n[a + 1],
          m = u[oe] || null;
        if (typeof c == "function") m || sp(n);
        else if (m) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((u = c), (m = c[oe] || null))) v = m.formAction;
            else if (Zc(u) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? (n[a + 1] = v) : (n.splice(a, 3), (a -= 3)),
            sp(n);
        }
      }
  }
  function Kc(t) {
    this._internalRoot = t;
  }
  (Fr.prototype.render = Kc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        a = xe();
      lp(n, a, t, e, null, null);
    }),
    (Fr.prototype.unmount = Kc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          lp(t.current, 2, null, t, null, null), Nr(), (e[Tl] = null);
        }
      });
  function Fr(t) {
    this._internalRoot = t;
  }
  Fr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = _f();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Jn.length && e !== 0 && e < Jn[n].priority; n++);
      Jn.splice(n, 0, t), n === 0 && op(t);
    }
  };
  var fp = i.version;
  if (fp !== "19.1.0") throw Error(r(527, fp, "19.1.0"));
  $.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Qy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pr.isDisabled && Pr.supportsFiber)
      try {
        (Ra = Pr.inject(Qy)), (he = Pr);
      } catch {}
  }
  return (
    (xi.createRoot = function (t, e) {
      if (!s(t)) throw Error(r(299));
      var n = !1,
        a = "",
        u = _m,
        c = wm,
        m = Om,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (v = e.unstable_transitionCallbacks)),
        (e = ep(t, 1, !1, null, null, n, a, u, c, m, v, null)),
        (t[Tl] = e.current),
        Mc(t),
        new Kc(e)
      );
    }),
    (xi.hydrateRoot = function (t, e, n) {
      if (!s(t)) throw Error(r(299));
      var a = !1,
        u = "",
        c = _m,
        m = wm,
        v = Om,
        E = null,
        D = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (E = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (D = n.formState)),
        (e = ep(t, 1, !0, e, n ?? null, a, u, c, m, v, E, D)),
        (e.context = np(null)),
        (n = e.current),
        (a = xe()),
        (a = Lu(a)),
        (u = Nn(a)),
        (u.callback = null),
        Dn(n, u, a),
        (n = a),
        (e.current.lanes = n),
        Aa(e, n),
        Je(e),
        (t[Tl] = e.current),
        Mc(t),
        new Fr(e)
      );
    }),
    (xi.version = "19.1.0"),
    xi
  );
}
var xp;
function nb() {
  if (xp) return Fc.exports;
  xp = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), (Fc.exports = eb()), Fc.exports;
}
var lb = nb(),
  We = function () {
    return (
      (We =
        Object.assign ||
        function (i) {
          for (var o, r = 1, s = arguments.length; r < s; r++) {
            o = arguments[r];
            for (var f in o)
              Object.prototype.hasOwnProperty.call(o, f) && (i[f] = o[f]);
          }
          return i;
        }),
      We.apply(this, arguments)
    );
  };
function uv(l, i) {
  var o = {};
  for (var r in l)
    Object.prototype.hasOwnProperty.call(l, r) &&
      i.indexOf(r) < 0 &&
      (o[r] = l[r]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(l); s < r.length; s++)
      i.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(l, r[s]) &&
        (o[r[s]] = l[r[s]]);
  return o;
}
function ab(l, i, o) {
  if (o || arguments.length === 2)
    for (var r = 0, s = i.length, f; r < s; r++)
      (f || !(r in i)) &&
        (f || (f = Array.prototype.slice.call(i, 0, r)), (f[r] = i[r]));
  return l.concat(f || Array.prototype.slice.call(i));
}
var iu = "right-scroll-bar-position",
  ru = "width-before-scroll-bar",
  ib = "with-scroll-bars-hidden",
  rb = "--removed-body-scroll-bar-size";
function es(l, i) {
  return typeof l == "function" ? l(i) : l && (l.current = i), l;
}
function ub(l, i) {
  var o = A.useState(function () {
    return {
      value: l,
      callback: i,
      facade: {
        get current() {
          return o.value;
        },
        set current(r) {
          var s = o.value;
          s !== r && ((o.value = r), o.callback(r, s));
        },
      },
    };
  })[0];
  return (o.callback = i), o.facade;
}
var ob = typeof window < "u" ? A.useLayoutEffect : A.useEffect,
  Ep = new WeakMap();
function cb(l, i) {
  var o = ub(null, function (r) {
    return l.forEach(function (s) {
      return es(s, r);
    });
  });
  return (
    ob(
      function () {
        var r = Ep.get(o);
        if (r) {
          var s = new Set(r),
            f = new Set(l),
            d = o.current;
          s.forEach(function (h) {
            f.has(h) || es(h, null);
          }),
            f.forEach(function (h) {
              s.has(h) || es(h, d);
            });
        }
        Ep.set(o, l);
      },
      [l],
    ),
    o
  );
}
function sb(l) {
  return l;
}
function fb(l, i) {
  i === void 0 && (i = sb);
  var o = [],
    r = !1,
    s = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return o.length ? o[o.length - 1] : l;
      },
      useMedium: function (f) {
        var d = i(f, r);
        return (
          o.push(d),
          function () {
            o = o.filter(function (h) {
              return h !== d;
            });
          }
        );
      },
      assignSyncMedium: function (f) {
        for (r = !0; o.length; ) {
          var d = o;
          (o = []), d.forEach(f);
        }
        o = {
          push: function (h) {
            return f(h);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (f) {
        r = !0;
        var d = [];
        if (o.length) {
          var h = o;
          (o = []), h.forEach(f), (d = o);
        }
        var g = function () {
            var b = d;
            (d = []), b.forEach(f);
          },
          p = function () {
            return Promise.resolve().then(g);
          };
        p(),
          (o = {
            push: function (b) {
              d.push(b), p();
            },
            filter: function (b) {
              return (d = d.filter(b)), o;
            },
          });
      },
    };
  return s;
}
function db(l) {
  l === void 0 && (l = {});
  var i = fb(null);
  return (i.options = We({ async: !0, ssr: !1 }, l)), i;
}
var ov = function (l) {
  var i = l.sideCar,
    o = uv(l, ["sideCar"]);
  if (!i)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = i.read();
  if (!r) throw new Error("Sidecar medium not found");
  return A.createElement(r, We({}, o));
};
ov.isSideCarExport = !0;
function mb(l, i) {
  return l.useMedium(i), ov;
}
var cv = db(),
  ns = function () {},
  yu = A.forwardRef(function (l, i) {
    var o = A.useRef(null),
      r = A.useState({
        onScrollCapture: ns,
        onWheelCapture: ns,
        onTouchMoveCapture: ns,
      }),
      s = r[0],
      f = r[1],
      d = l.forwardProps,
      h = l.children,
      g = l.className,
      p = l.removeScrollBar,
      b = l.enabled,
      y = l.shards,
      T = l.sideCar,
      x = l.noRelative,
      _ = l.noIsolation,
      R = l.inert,
      M = l.allowPinchZoom,
      Y = l.as,
      G = Y === void 0 ? "div" : Y,
      B = l.gapMode,
      X = uv(l, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      L = T,
      W = cb([o, i]),
      P = We(We({}, X), s);
    return A.createElement(
      A.Fragment,
      null,
      b &&
        A.createElement(L, {
          sideCar: cv,
          removeScrollBar: p,
          shards: y,
          noRelative: x,
          noIsolation: _,
          inert: R,
          setCallbacks: f,
          allowPinchZoom: !!M,
          lockRef: o,
          gapMode: B,
        }),
      d
        ? A.cloneElement(A.Children.only(h), We(We({}, P), { ref: W }))
        : A.createElement(G, We({}, P, { className: g, ref: W }), h),
    );
  });
yu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
yu.classNames = { fullWidth: ru, zeroRight: iu };
var hb = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function pb() {
  if (!document) return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var i = hb();
  return i && l.setAttribute("nonce", i), l;
}
function vb(l, i) {
  l.styleSheet
    ? (l.styleSheet.cssText = i)
    : l.appendChild(document.createTextNode(i));
}
function gb(l) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(l);
}
var yb = function () {
    var l = 0,
      i = null;
    return {
      add: function (o) {
        l == 0 && (i = pb()) && (vb(i, o), gb(i)), l++;
      },
      remove: function () {
        l--,
          !l && i && (i.parentNode && i.parentNode.removeChild(i), (i = null));
      },
    };
  },
  bb = function () {
    var l = yb();
    return function (i, o) {
      A.useEffect(
        function () {
          return (
            l.add(i),
            function () {
              l.remove();
            }
          );
        },
        [i && o],
      );
    };
  },
  sv = function () {
    var l = bb(),
      i = function (o) {
        var r = o.styles,
          s = o.dynamic;
        return l(r, s), null;
      };
    return i;
  },
  Sb = { left: 0, top: 0, right: 0, gap: 0 },
  ls = function (l) {
    return parseInt(l || "", 10) || 0;
  },
  xb = function (l) {
    var i = window.getComputedStyle(document.body),
      o = i[l === "padding" ? "paddingLeft" : "marginLeft"],
      r = i[l === "padding" ? "paddingTop" : "marginTop"],
      s = i[l === "padding" ? "paddingRight" : "marginRight"];
    return [ls(o), ls(r), ls(s)];
  },
  Eb = function (l) {
    if ((l === void 0 && (l = "margin"), typeof window > "u")) return Sb;
    var i = xb(l),
      o = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: i[0],
      top: i[1],
      right: i[2],
      gap: Math.max(0, r - o + i[2] - i[0]),
    };
  },
  Rb = sv(),
  pa = "data-scroll-locked",
  Tb = function (l, i, o, r) {
    var s = l.left,
      f = l.top,
      d = l.right,
      h = l.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          ib,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          pa,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            i && "position: relative ".concat(r, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  f,
                  `px;
    padding-right: `,
                )
                .concat(
                  d,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(h, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            o === "padding" &&
              "padding-right: ".concat(h, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          iu,
          ` {
    right: `,
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          ru,
          ` {
    margin-right: `,
        )
        .concat(h, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(iu, " .")
        .concat(
          iu,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ru, " .")
        .concat(
          ru,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          pa,
          `] {
    `,
        )
        .concat(rb, ": ")
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  Rp = function () {
    var l = parseInt(document.body.getAttribute(pa) || "0", 10);
    return isFinite(l) ? l : 0;
  },
  Ab = function () {
    A.useEffect(function () {
      return (
        document.body.setAttribute(pa, (Rp() + 1).toString()),
        function () {
          var l = Rp() - 1;
          l <= 0
            ? document.body.removeAttribute(pa)
            : document.body.setAttribute(pa, l.toString());
        }
      );
    }, []);
  },
  Cb = function (l) {
    var i = l.noRelative,
      o = l.noImportant,
      r = l.gapMode,
      s = r === void 0 ? "margin" : r;
    Ab();
    var f = A.useMemo(
      function () {
        return Eb(s);
      },
      [s],
    );
    return A.createElement(Rb, { styles: Tb(f, !i, s, o ? "" : "!important") });
  },
  Ss = !1;
if (typeof window < "u")
  try {
    var Ir = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ss = !0), !0;
      },
    });
    window.addEventListener("test", Ir, Ir),
      window.removeEventListener("test", Ir, Ir);
  } catch {
    Ss = !1;
  }
var ca = Ss ? { passive: !1 } : !1,
  _b = function (l) {
    return l.tagName === "TEXTAREA";
  },
  fv = function (l, i) {
    if (!(l instanceof Element)) return !1;
    var o = window.getComputedStyle(l);
    return (
      o[i] !== "hidden" &&
      !(o.overflowY === o.overflowX && !_b(l) && o[i] === "visible")
    );
  },
  wb = function (l) {
    return fv(l, "overflowY");
  },
  Ob = function (l) {
    return fv(l, "overflowX");
  },
  Tp = function (l, i) {
    var o = i.ownerDocument,
      r = i;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = dv(l, r);
      if (s) {
        var f = mv(l, r),
          d = f[1],
          h = f[2];
        if (d > h) return !0;
      }
      r = r.parentNode;
    } while (r && r !== o.body);
    return !1;
  },
  Mb = function (l) {
    var i = l.scrollTop,
      o = l.scrollHeight,
      r = l.clientHeight;
    return [i, o, r];
  },
  zb = function (l) {
    var i = l.scrollLeft,
      o = l.scrollWidth,
      r = l.clientWidth;
    return [i, o, r];
  },
  dv = function (l, i) {
    return l === "v" ? wb(i) : Ob(i);
  },
  mv = function (l, i) {
    return l === "v" ? Mb(i) : zb(i);
  },
  Nb = function (l, i) {
    return l === "h" && i === "rtl" ? -1 : 1;
  },
  Db = function (l, i, o, r, s) {
    var f = Nb(l, window.getComputedStyle(i).direction),
      d = f * r,
      h = o.target,
      g = i.contains(h),
      p = !1,
      b = d > 0,
      y = 0,
      T = 0;
    do {
      var x = mv(l, h),
        _ = x[0],
        R = x[1],
        M = x[2],
        Y = R - M - f * _;
      (_ || Y) && dv(l, h) && ((y += Y), (T += _)),
        (h = h.parentNode.host || h.parentNode);
    } while ((!g && h !== document.body) || (g && (i.contains(h) || i === h)));
    return ((b && Math.abs(y) < 1) || (!b && Math.abs(T) < 1)) && (p = !0), p;
  },
  tu = function (l) {
    return "changedTouches" in l
      ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY]
      : [0, 0];
  },
  Ap = function (l) {
    return [l.deltaX, l.deltaY];
  },
  Cp = function (l) {
    return l && "current" in l ? l.current : l;
  },
  jb = function (l, i) {
    return l[0] === i[0] && l[1] === i[1];
  },
  Bb = function (l) {
    return `
  .block-interactivity-`
      .concat(
        l,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        l,
        ` {pointer-events: all;}
`,
      );
  },
  Ub = 0,
  sa = [];
function Hb(l) {
  var i = A.useRef([]),
    o = A.useRef([0, 0]),
    r = A.useRef(),
    s = A.useState(Ub++)[0],
    f = A.useState(sv)[0],
    d = A.useRef(l);
  A.useEffect(
    function () {
      d.current = l;
    },
    [l],
  ),
    A.useEffect(
      function () {
        if (l.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var R = ab([l.lockRef.current], (l.shards || []).map(Cp), !0).filter(
            Boolean,
          );
          return (
            R.forEach(function (M) {
              return M.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                R.forEach(function (M) {
                  return M.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [l.inert, l.lockRef.current, l.shards],
    );
  var h = A.useCallback(function (R, M) {
      if (
        ("touches" in R && R.touches.length === 2) ||
        (R.type === "wheel" && R.ctrlKey)
      )
        return !d.current.allowPinchZoom;
      var Y = tu(R),
        G = o.current,
        B = "deltaX" in R ? R.deltaX : G[0] - Y[0],
        X = "deltaY" in R ? R.deltaY : G[1] - Y[1],
        L,
        W = R.target,
        P = Math.abs(B) > Math.abs(X) ? "h" : "v";
      if ("touches" in R && P === "h" && W.type === "range") return !1;
      var et = Tp(P, W);
      if (!et) return !0;
      if ((et ? (L = P) : ((L = P === "v" ? "h" : "v"), (et = Tp(P, W))), !et))
        return !1;
      if (
        (!r.current && "changedTouches" in R && (B || X) && (r.current = L), !L)
      )
        return !0;
      var tt = r.current || L;
      return Db(tt, M, R, tt === "h" ? B : X);
    }, []),
    g = A.useCallback(function (R) {
      var M = R;
      if (!(!sa.length || sa[sa.length - 1] !== f)) {
        var Y = "deltaY" in M ? Ap(M) : tu(M),
          G = i.current.filter(function (L) {
            return (
              L.name === M.type &&
              (L.target === M.target || M.target === L.shadowParent) &&
              jb(L.delta, Y)
            );
          })[0];
        if (G && G.should) {
          M.cancelable && M.preventDefault();
          return;
        }
        if (!G) {
          var B = (d.current.shards || [])
              .map(Cp)
              .filter(Boolean)
              .filter(function (L) {
                return L.contains(M.target);
              }),
            X = B.length > 0 ? h(M, B[0]) : !d.current.noIsolation;
          X && M.cancelable && M.preventDefault();
        }
      }
    }, []),
    p = A.useCallback(function (R, M, Y, G) {
      var B = { name: R, delta: M, target: Y, should: G, shadowParent: Lb(Y) };
      i.current.push(B),
        setTimeout(function () {
          i.current = i.current.filter(function (X) {
            return X !== B;
          });
        }, 1);
    }, []),
    b = A.useCallback(function (R) {
      (o.current = tu(R)), (r.current = void 0);
    }, []),
    y = A.useCallback(function (R) {
      p(R.type, Ap(R), R.target, h(R, l.lockRef.current));
    }, []),
    T = A.useCallback(function (R) {
      p(R.type, tu(R), R.target, h(R, l.lockRef.current));
    }, []);
  A.useEffect(function () {
    return (
      sa.push(f),
      l.setCallbacks({
        onScrollCapture: y,
        onWheelCapture: y,
        onTouchMoveCapture: T,
      }),
      document.addEventListener("wheel", g, ca),
      document.addEventListener("touchmove", g, ca),
      document.addEventListener("touchstart", b, ca),
      function () {
        (sa = sa.filter(function (R) {
          return R !== f;
        })),
          document.removeEventListener("wheel", g, ca),
          document.removeEventListener("touchmove", g, ca),
          document.removeEventListener("touchstart", b, ca);
      }
    );
  }, []);
  var x = l.removeScrollBar,
    _ = l.inert;
  return A.createElement(
    A.Fragment,
    null,
    _ ? A.createElement(f, { styles: Bb(s) }) : null,
    x
      ? A.createElement(Cb, { noRelative: l.noRelative, gapMode: l.gapMode })
      : null,
  );
}
function Lb(l) {
  for (var i = null; l !== null; )
    l instanceof ShadowRoot && ((i = l.host), (l = l.host)), (l = l.parentNode);
  return i;
}
const $b = mb(cv, Hb);
var Ds = A.forwardRef(function (l, i) {
  return A.createElement(yu, We({}, l, { ref: i, sideCar: $b }));
});
Ds.classNames = yu.classNames;
function ee(l) {
  return Object.keys(l);
}
function as(l) {
  return l && typeof l == "object" && !Array.isArray(l);
}
function js(l, i) {
  const o = { ...l },
    r = i;
  return (
    as(l) &&
      as(i) &&
      Object.keys(i).forEach((s) => {
        as(r[s]) && s in l ? (o[s] = js(o[s], r[s])) : (o[s] = r[s]);
      }),
    o
  );
}
function Yb(l) {
  return l.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
}
function qb(l) {
  var i;
  return typeof l != "string" || !l.includes("var(--mantine-scale)")
    ? l
    : (i = l.match(/^calc\((.*?)\)$/)) == null
      ? void 0
      : i[1].split("*")[0].trim();
}
function xs(l) {
  const i = qb(l);
  return typeof i == "number"
    ? i
    : typeof i == "string"
      ? i.includes("calc") || i.includes("var")
        ? i
        : i.includes("px")
          ? Number(i.replace("px", ""))
          : i.includes("rem")
            ? Number(i.replace("rem", "")) * 16
            : i.includes("em")
              ? Number(i.replace("em", "")) * 16
              : Number(i)
      : NaN;
}
function _p(l) {
  return l === "0rem" ? "0rem" : `calc(${l} * var(--mantine-scale))`;
}
function hv(l, { shouldScale: i = !1 } = {}) {
  function o(r) {
    if (r === 0 || r === "0") return `0${l}`;
    if (typeof r == "number") {
      const s = `${r / 16}${l}`;
      return i ? _p(s) : s;
    }
    if (typeof r == "string") {
      if (
        r === "" ||
        r.startsWith("calc(") ||
        r.startsWith("clamp(") ||
        r.includes("rgba(")
      )
        return r;
      if (r.includes(","))
        return r
          .split(",")
          .map((f) => o(f))
          .join(",");
      if (r.includes(" "))
        return r
          .split(" ")
          .map((f) => o(f))
          .join(" ");
      const s = r.replace("px", "");
      if (!Number.isNaN(Number(s))) {
        const f = `${Number(s) / 16}${l}`;
        return i ? _p(f) : f;
      }
    }
    return r;
  }
  return o;
}
const Z = hv("rem", { shouldScale: !0 }),
  su = hv("em");
function bu(l) {
  return Object.keys(l).reduce(
    (i, o) => (l[o] !== void 0 && (i[o] = l[o]), i),
    {},
  );
}
function pv(l) {
  if (typeof l == "number") return !0;
  if (typeof l == "string") {
    if (
      l.startsWith("calc(") ||
      l.startsWith("var(") ||
      (l.includes(" ") && l.trim() !== "")
    )
      return !0;
    const i =
      /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return l
      .trim()
      .split(/\s+/)
      .every((r) => i.test(r));
  }
  return !1;
}
function vv(l) {
  return Array.isArray(l) || l === null
    ? !1
    : typeof l == "object"
      ? l.type !== A.Fragment
      : !1;
}
function Gb(l) {
  const i = A.createContext(null);
  return [
    ({ children: s, value: f }) => j.jsx(i.Provider, { value: f, children: s }),
    () => {
      const s = A.useContext(i);
      if (s === null) throw new Error(l);
      return s;
    },
  ];
}
function Bs(l = null) {
  const i = A.createContext(l);
  return [
    ({ children: s, value: f }) => j.jsx(i.Provider, { value: f, children: s }),
    () => A.useContext(i),
  ];
}
const Xb = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function Us(l) {
  return Xb[l];
}
function ne(l, i = "size", o = !0) {
  if (l !== void 0) return pv(l) ? (o ? Z(l) : l) : `var(--${i}-${l})`;
}
function Hs(l) {
  return ne(l, "mantine-spacing");
}
function Ge(l) {
  return l === void 0
    ? "var(--mantine-radius-default)"
    : ne(l, "mantine-radius");
}
function bn(l) {
  return ne(l, "mantine-font-size");
}
function Vb(l) {
  return ne(l, "mantine-line-height", !1);
}
function Qb(l) {
  if (l) return ne(l, "mantine-shadow", !1);
}
function Ls(l, i) {
  return l in i ? xs(i[l]) : xs(l);
}
function wp(l, i) {
  const o = l.map((r) => ({ value: r, px: Ls(r, i) }));
  return o.sort((r, s) => r.px - s.px), o;
}
function Zb(l = "mantine-") {
  return `${l}${Math.random().toString(36).slice(2, 11)}`;
}
function kb(l, i) {
  try {
    return (
      l.addEventListener("change", i), () => l.removeEventListener("change", i)
    );
  } catch {
    return l.addListener(i), () => l.removeListener(i);
  }
}
function Kb(l, i) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(l).matches
    : !1;
}
function Jb(
  l,
  i,
  { getInitialValueInEffect: o } = { getInitialValueInEffect: !0 },
) {
  const [r, s] = A.useState(o ? i : Kb(l)),
    f = A.useRef(null);
  return (
    A.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (f.current = window.matchMedia(l)),
          s(f.current.matches),
          kb(f.current, (d) => s(d.matches))
        );
    }, [l]),
    r
  );
}
const Oi = typeof document < "u" ? A.useLayoutEffect : A.useEffect;
function fu(l, i) {
  const o = A.useRef(!1);
  A.useEffect(
    () => () => {
      o.current = !1;
    },
    [],
  ),
    A.useEffect(() => {
      if (o.current) return l();
      o.current = !0;
    }, i);
}
const Wb = cu.useId || (() => {});
function Fb() {
  const l = Wb();
  return l ? `mantine-${l.replace(/:/g, "")}` : "";
}
function Su(l) {
  const i = Fb(),
    [o, r] = A.useState(i);
  return (
    Oi(() => {
      r(Zb());
    }, []),
    typeof l == "string" ? l : typeof window > "u" ? i : o
  );
}
function Pb(l, i, o) {
  A.useEffect(
    () => (
      window.addEventListener(l, i, o),
      () => window.removeEventListener(l, i, o)
    ),
    [l, i],
  );
}
function Es(l, i) {
  if (typeof l == "function") return l(i);
  typeof l == "object" && l !== null && "current" in l && (l.current = i);
}
function Ib(...l) {
  const i = new Map();
  return (o) => {
    if (
      (l.forEach((r) => {
        const s = Es(r, o);
        s && i.set(r, s);
      }),
      i.size > 0)
    )
      return () => {
        l.forEach((r) => {
          const s = i.get(r);
          s ? s() : Es(r, null);
        }),
          i.clear();
      };
  };
}
function gv(...l) {
  return A.useCallback(Ib(...l), l);
}
function yv({
  value: l,
  defaultValue: i,
  finalValue: o,
  onChange: r = () => {},
}) {
  const [s, f] = A.useState(i !== void 0 ? i : o),
    d = (h, ...g) => {
      f(h), r == null || r(h, ...g);
    };
  return l !== void 0 ? [l, r, !0] : [s, d, !1];
}
function t1(l, i) {
  return Jb("(prefers-reduced-motion: reduce)", l, i);
}
function Op(l = !1, i) {
  const { onOpen: o, onClose: r } = {},
    [s, f] = A.useState(l),
    d = A.useCallback(() => {
      f((p) => p || (o == null || o(), !0));
    }, [o]),
    h = A.useCallback(() => {
      f((p) => p && (r == null || r(), !1));
    }, [r]),
    g = A.useCallback(() => {
      s ? h() : d();
    }, [h, d, s]);
  return [s, { open: d, close: h, toggle: g }];
}
function bv(l) {
  var o;
  const i = cu.version;
  return typeof cu.version != "string" || i.startsWith("18.")
    ? l == null
      ? void 0
      : l.ref
    : (o = l == null ? void 0 : l.props) == null
      ? void 0
      : o.ref;
}
function Sv(l) {
  var i,
    o,
    r = "";
  if (typeof l == "string" || typeof l == "number") r += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var s = l.length;
      for (i = 0; i < s; i++)
        l[i] && (o = Sv(l[i])) && (r && (r += " "), (r += o));
    } else for (o in l) l[o] && (r && (r += " "), (r += o));
  return r;
}
function El() {
  for (var l, i, o = 0, r = "", s = arguments.length; o < s; o++)
    (l = arguments[o]) && (i = Sv(l)) && (r && (r += " "), (r += i));
  return r;
}
const e1 = {};
function n1(l) {
  const i = {};
  return (
    l.forEach((o) => {
      Object.entries(o).forEach(([r, s]) => {
        i[r] ? (i[r] = El(i[r], s)) : (i[r] = s);
      });
    }),
    i
  );
}
function xu({ theme: l, classNames: i, props: o, stylesCtx: r }) {
  const f = (Array.isArray(i) ? i : [i]).map((d) =>
    typeof d == "function" ? d(l, o, r) : d || e1,
  );
  return n1(f);
}
function du({ theme: l, styles: i, props: o, stylesCtx: r }) {
  return (Array.isArray(i) ? i : [i]).reduce(
    (f, d) =>
      typeof d == "function" ? { ...f, ...d(l, o, r) } : { ...f, ...d },
    {},
  );
}
const xv = A.createContext(null);
function Tn() {
  const l = A.useContext(xv);
  if (!l)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return l;
}
function l1() {
  return Tn().cssVariablesResolver;
}
function a1() {
  return Tn().classNamesPrefix;
}
function $s() {
  return Tn().getStyleNonce;
}
function i1() {
  return Tn().withStaticClasses;
}
function r1() {
  return Tn().headless;
}
function u1() {
  var l;
  return (l = Tn().stylesTransform) == null ? void 0 : l.sx;
}
function o1() {
  var l;
  return (l = Tn().stylesTransform) == null ? void 0 : l.styles;
}
function Ev() {
  return Tn().env || "default";
}
function c1(l) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(l);
}
function s1(l) {
  let i = l.replace("#", "");
  if (i.length === 3) {
    const d = i.split("");
    i = [d[0], d[0], d[1], d[1], d[2], d[2]].join("");
  }
  if (i.length === 8) {
    const d = parseInt(i.slice(6, 8), 16) / 255;
    return {
      r: parseInt(i.slice(0, 2), 16),
      g: parseInt(i.slice(2, 4), 16),
      b: parseInt(i.slice(4, 6), 16),
      a: d,
    };
  }
  const o = parseInt(i, 16),
    r = (o >> 16) & 255,
    s = (o >> 8) & 255,
    f = o & 255;
  return { r, g: s, b: f, a: 1 };
}
function f1(l) {
  const [i, o, r, s] = l
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: i, g: o, b: r, a: s || 1 };
}
function d1(l) {
  const i =
      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    o = l.match(i);
  if (!o) return { r: 0, g: 0, b: 0, a: 1 };
  const r = parseInt(o[1], 10),
    s = parseInt(o[2], 10) / 100,
    f = parseInt(o[3], 10) / 100,
    d = o[5] ? parseFloat(o[5]) : void 0,
    h = (1 - Math.abs(2 * f - 1)) * s,
    g = r / 60,
    p = h * (1 - Math.abs((g % 2) - 1)),
    b = f - h / 2;
  let y, T, x;
  return (
    g >= 0 && g < 1
      ? ((y = h), (T = p), (x = 0))
      : g >= 1 && g < 2
        ? ((y = p), (T = h), (x = 0))
        : g >= 2 && g < 3
          ? ((y = 0), (T = h), (x = p))
          : g >= 3 && g < 4
            ? ((y = 0), (T = p), (x = h))
            : g >= 4 && g < 5
              ? ((y = p), (T = 0), (x = h))
              : ((y = h), (T = 0), (x = p)),
    {
      r: Math.round((y + b) * 255),
      g: Math.round((T + b) * 255),
      b: Math.round((x + b) * 255),
      a: d || 1,
    }
  );
}
function Ys(l) {
  return c1(l)
    ? s1(l)
    : l.startsWith("rgb")
      ? f1(l)
      : l.startsWith("hsl")
        ? d1(l)
        : { r: 0, g: 0, b: 0, a: 1 };
}
function eu(l, i) {
  if (l.startsWith("var("))
    return `color-mix(in srgb, ${l}, black ${i * 100}%)`;
  const { r: o, g: r, b: s, a: f } = Ys(l),
    d = 1 - i,
    h = (g) => Math.round(g * d);
  return `rgba(${h(o)}, ${h(r)}, ${h(s)}, ${f})`;
}
function Ci(l, i) {
  return typeof l.primaryShade == "number"
    ? l.primaryShade
    : i === "dark"
      ? l.primaryShade.dark
      : l.primaryShade.light;
}
function is(l) {
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function m1(l) {
  const i = l.match(/oklch\((.*?)%\s/);
  return i ? parseFloat(i[1]) : null;
}
function h1(l) {
  if (l.startsWith("oklch(")) return (m1(l) || 0) / 100;
  const { r: i, g: o, b: r } = Ys(l),
    s = i / 255,
    f = o / 255,
    d = r / 255,
    h = is(s),
    g = is(f),
    p = is(d);
  return 0.2126 * h + 0.7152 * g + 0.0722 * p;
}
function Ei(l, i = 0.179) {
  return l.startsWith("var(") ? !1 : h1(l) > i;
}
function Rl({ color: l, theme: i, colorScheme: o }) {
  if (typeof l != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof l}`,
    );
  if (l === "bright")
    return {
      color: l,
      value: o === "dark" ? i.white : i.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Ei(o === "dark" ? i.white : i.black, i.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (l === "dimmed")
    return {
      color: l,
      value: o === "dark" ? i.colors.dark[2] : i.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: Ei(
        o === "dark" ? i.colors.dark[2] : i.colors.gray[6],
        i.luminanceThreshold,
      ),
      variable: "--mantine-color-dimmed",
    };
  if (l === "white" || l === "black")
    return {
      color: l,
      value: l === "white" ? i.white : i.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Ei(l === "white" ? i.white : i.black, i.luminanceThreshold),
      variable: `--mantine-color-${l}`,
    };
  const [r, s] = l.split("."),
    f = s ? Number(s) : void 0,
    d = r in i.colors;
  if (d) {
    const h = f !== void 0 ? i.colors[r][f] : i.colors[r][Ci(i, o || "light")];
    return {
      color: r,
      value: h,
      shade: f,
      isThemeColor: d,
      isLight: Ei(h, i.luminanceThreshold),
      variable: s ? `--mantine-color-${r}-${f}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: l,
    value: l,
    isThemeColor: d,
    isLight: Ei(l, i.luminanceThreshold),
    shade: f,
    variable: void 0,
  };
}
function qe(l, i) {
  const o = Rl({ color: l || i.primaryColor, theme: i });
  return o.variable ? `var(${o.variable})` : l;
}
function Rs(l, i) {
  const o = {
      from: (l == null ? void 0 : l.from) || i.defaultGradient.from,
      to: (l == null ? void 0 : l.to) || i.defaultGradient.to,
      deg: (l == null ? void 0 : l.deg) ?? i.defaultGradient.deg ?? 0,
    },
    r = qe(o.from, i),
    s = qe(o.to, i);
  return `linear-gradient(${o.deg}deg, ${r} 0%, ${s} 100%)`;
}
function gn(l, i) {
  if (typeof l != "string" || i > 1 || i < 0) return "rgba(0, 0, 0, 1)";
  if (l.startsWith("var(")) {
    const f = (1 - i) * 100;
    return `color-mix(in srgb, ${l}, transparent ${f}%)`;
  }
  if (l.startsWith("oklch"))
    return l.includes("/")
      ? l.replace(/\/\s*[\d.]+\s*\)/, `/ ${i})`)
      : l.replace(")", ` / ${i})`);
  const { r: o, g: r, b: s } = Ys(l);
  return `rgba(${o}, ${r}, ${s}, ${i})`;
}
const fa = gn,
  p1 = ({ color: l, theme: i, variant: o, gradient: r, autoContrast: s }) => {
    const f = Rl({ color: l, theme: i }),
      d = typeof s == "boolean" ? s : i.autoContrast;
    if (o === "none")
      return {
        background: "transparent",
        hover: "transparent",
        color: "inherit",
        border: "none",
      };
    if (o === "filled") {
      const h =
        d && f.isLight
          ? "var(--mantine-color-black)"
          : "var(--mantine-color-white)";
      return f.isThemeColor
        ? f.shade === void 0
          ? {
              background: `var(--mantine-color-${l}-filled)`,
              hover: `var(--mantine-color-${l}-filled-hover)`,
              color: h,
              border: `${Z(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${f.color}-${f.shade})`,
              hover: `var(--mantine-color-${f.color}-${f.shade === 9 ? 8 : f.shade + 1})`,
              color: h,
              border: `${Z(1)} solid transparent`,
            }
        : {
            background: l,
            hover: eu(l, 0.1),
            color: h,
            border: `${Z(1)} solid transparent`,
          };
    }
    if (o === "light") {
      if (f.isThemeColor) {
        if (f.shade === void 0)
          return {
            background: `var(--mantine-color-${l}-light)`,
            hover: `var(--mantine-color-${l}-light-hover)`,
            color: `var(--mantine-color-${l}-light-color)`,
            border: `${Z(1)} solid transparent`,
          };
        const h = i.colors[f.color][f.shade];
        return {
          background: gn(h, 0.1),
          hover: gn(h, 0.12),
          color: `var(--mantine-color-${f.color}-${Math.min(f.shade, 6)})`,
          border: `${Z(1)} solid transparent`,
        };
      }
      return {
        background: gn(l, 0.1),
        hover: gn(l, 0.12),
        color: l,
        border: `${Z(1)} solid transparent`,
      };
    }
    if (o === "outline")
      return f.isThemeColor
        ? f.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${l}-outline-hover)`,
              color: `var(--mantine-color-${l}-outline)`,
              border: `${Z(1)} solid var(--mantine-color-${l}-outline)`,
            }
          : {
              background: "transparent",
              hover: gn(i.colors[f.color][f.shade], 0.05),
              color: `var(--mantine-color-${f.color}-${f.shade})`,
              border: `${Z(1)} solid var(--mantine-color-${f.color}-${f.shade})`,
            }
        : {
            background: "transparent",
            hover: gn(l, 0.05),
            color: l,
            border: `${Z(1)} solid ${l}`,
          };
    if (o === "subtle") {
      if (f.isThemeColor) {
        if (f.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${l}-light-hover)`,
            color: `var(--mantine-color-${l}-light-color)`,
            border: `${Z(1)} solid transparent`,
          };
        const h = i.colors[f.color][f.shade];
        return {
          background: "transparent",
          hover: gn(h, 0.12),
          color: `var(--mantine-color-${f.color}-${Math.min(f.shade, 6)})`,
          border: `${Z(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: gn(l, 0.12),
        color: l,
        border: `${Z(1)} solid transparent`,
      };
    }
    return o === "transparent"
      ? f.isThemeColor
        ? f.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${l}-light-color)`,
              border: `${Z(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${f.color}-${Math.min(f.shade, 6)})`,
              border: `${Z(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: l,
            border: `${Z(1)} solid transparent`,
          }
      : o === "white"
        ? f.isThemeColor
          ? f.shade === void 0
            ? {
                background: "var(--mantine-color-white)",
                hover: eu(i.white, 0.01),
                color: `var(--mantine-color-${l}-filled)`,
                border: `${Z(1)} solid transparent`,
              }
            : {
                background: "var(--mantine-color-white)",
                hover: eu(i.white, 0.01),
                color: `var(--mantine-color-${f.color}-${f.shade})`,
                border: `${Z(1)} solid transparent`,
              }
          : {
              background: "var(--mantine-color-white)",
              hover: eu(i.white, 0.01),
              color: l,
              border: `${Z(1)} solid transparent`,
            }
        : o === "gradient"
          ? {
              background: Rs(r, i),
              hover: Rs(r, i),
              color: "var(--mantine-color-white)",
              border: "none",
            }
          : o === "default"
            ? {
                background: "var(--mantine-color-default)",
                hover: "var(--mantine-color-default-hover)",
                color: "var(--mantine-color-default-color)",
                border: `${Z(1)} solid var(--mantine-color-default-border)`,
              }
            : {};
  },
  v1 = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  },
  Mp =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  qs = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: v1,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: p1,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: Mp,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: Mp,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: Z(34), lineHeight: "1.3" },
        h2: { fontSize: Z(26), lineHeight: "1.35" },
        h3: { fontSize: Z(22), lineHeight: "1.4" },
        h4: { fontSize: Z(18), lineHeight: "1.45" },
        h5: { fontSize: Z(16), lineHeight: "1.5" },
        h6: { fontSize: Z(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: Z(12), sm: Z(14), md: Z(16), lg: Z(18), xl: Z(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    radius: { xs: Z(2), sm: Z(4), md: Z(8), lg: Z(16), xl: Z(32) },
    spacing: { xs: Z(10), sm: Z(12), md: Z(16), lg: Z(20), xl: Z(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), 0 ${Z(1)} ${Z(2)} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(10)} ${Z(15)} ${Z(-5)}, rgba(0, 0, 0, 0.04) 0 ${Z(7)} ${Z(7)} ${Z(-5)}`,
      md: `0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(20)} ${Z(25)} ${Z(-5)}, rgba(0, 0, 0, 0.04) 0 ${Z(10)} ${Z(10)} ${Z(-5)}`,
      lg: `0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(28)} ${Z(23)} ${Z(-7)}, rgba(0, 0, 0, 0.04) 0 ${Z(12)} ${Z(12)} ${Z(-7)}`,
      xl: `0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(36)} ${Z(28)} ${Z(-7)}, rgba(0, 0, 0, 0.04) 0 ${Z(17)} ${Z(17)} ${Z(-7)}`,
    },
    other: {},
    components: {},
  };
function zp(l) {
  return l === "auto" || l === "dark" || l === "light";
}
function g1({ key: l = "mantine-color-scheme-value" } = {}) {
  let i;
  return {
    get: (o) => {
      if (typeof window > "u") return o;
      try {
        const r = window.localStorage.getItem(l);
        return zp(r) ? r : o;
      } catch {
        return o;
      }
    },
    set: (o) => {
      try {
        window.localStorage.setItem(l, o);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r,
        );
      }
    },
    subscribe: (o) => {
      (i = (r) => {
        r.storageArea === window.localStorage &&
          r.key === l &&
          zp(r.newValue) &&
          o(r.newValue);
      }),
        window.addEventListener("storage", i);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", i);
    },
    clear: () => {
      window.localStorage.removeItem(l);
    },
  };
}
const y1 =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  Np =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function rs(l) {
  return l < 0 || l > 9 ? !1 : parseInt(l.toString(), 10) === l;
}
function Dp(l) {
  if (!(l.primaryColor in l.colors)) throw new Error(y1);
  if (
    typeof l.primaryShade == "object" &&
    (!rs(l.primaryShade.dark) || !rs(l.primaryShade.light))
  )
    throw new Error(Np);
  if (typeof l.primaryShade == "number" && !rs(l.primaryShade))
    throw new Error(Np);
}
function b1(l, i) {
  var r;
  if (!i) return Dp(l), l;
  const o = js(l, i);
  return (
    i.fontFamily &&
      !((r = i.headings) != null && r.fontFamily) &&
      (o.headings.fontFamily = i.fontFamily),
    Dp(o),
    o
  );
}
const Gs = A.createContext(null),
  S1 = () => A.useContext(Gs) || qs;
function Xe() {
  const l = A.useContext(Gs);
  if (!l)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app",
    );
  return l;
}
function Rv({ theme: l, children: i, inherit: o = !0 }) {
  const r = S1(),
    s = A.useMemo(() => b1(o ? r : qs, l), [l, r, o]);
  return j.jsx(Gs.Provider, { value: s, children: i });
}
Rv.displayName = "@mantine/core/MantineThemeProvider";
function x1() {
  const l = Xe(),
    i = $s(),
    o = ee(l.breakpoints).reduce((r, s) => {
      const f = l.breakpoints[s].includes("px"),
        d = xs(l.breakpoints[s]),
        h = f ? `${d - 0.1}px` : su(d - 0.1),
        g = f ? `${d}px` : su(d);
      return `${r}@media (max-width: ${h}) {.mantine-visible-from-${s} {display: none !important;}}@media (min-width: ${g}) {.mantine-hidden-from-${s} {display: none !important;}}`;
    }, "");
  return j.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: i == null ? void 0 : i(),
    dangerouslySetInnerHTML: { __html: o },
  });
}
function us(l) {
  return Object.entries(l)
    .map(([i, o]) => `${i}: ${o};`)
    .join("");
}
function Ri(l, i) {
  return (Array.isArray(l) ? l : [l]).reduce((r, s) => `${s}{${r}}`, i);
}
function E1(l, i) {
  const o = us(l.variables),
    r = o ? Ri(i, o) : "",
    s = us(l.dark),
    f = us(l.light),
    d = s
      ? Ri(
          i === ":host"
            ? `${i}([data-mantine-color-scheme="dark"])`
            : `${i}[data-mantine-color-scheme="dark"]`,
          s,
        )
      : "",
    h = f
      ? Ri(
          i === ":host"
            ? `${i}([data-mantine-color-scheme="light"])`
            : `${i}[data-mantine-color-scheme="light"]`,
          f,
        )
      : "";
  return `${r}${d}${h}`;
}
function Xs({ color: l, theme: i, autoContrast: o }) {
  return (typeof o == "boolean" ? o : i.autoContrast) &&
    Rl({ color: l || i.primaryColor, theme: i }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function jp(l, i) {
  return Xs({
    color: l.colors[l.primaryColor][Ci(l, i)],
    theme: l,
    autoContrast: null,
  });
}
function nu({
  theme: l,
  color: i,
  colorScheme: o,
  name: r = i,
  withColorValues: s = !0,
}) {
  if (!l.colors[i]) return {};
  if (o === "light") {
    const h = Ci(l, "light"),
      g = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${h})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${h === 9 ? 8 : h + 1})`,
        [`--mantine-color-${r}-light`]: fa(l.colors[i][h], 0.1),
        [`--mantine-color-${r}-light-hover`]: fa(l.colors[i][h], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${h})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${h})`,
        [`--mantine-color-${r}-outline-hover`]: fa(l.colors[i][h], 0.05),
      };
    return s
      ? {
          [`--mantine-color-${r}-0`]: l.colors[i][0],
          [`--mantine-color-${r}-1`]: l.colors[i][1],
          [`--mantine-color-${r}-2`]: l.colors[i][2],
          [`--mantine-color-${r}-3`]: l.colors[i][3],
          [`--mantine-color-${r}-4`]: l.colors[i][4],
          [`--mantine-color-${r}-5`]: l.colors[i][5],
          [`--mantine-color-${r}-6`]: l.colors[i][6],
          [`--mantine-color-${r}-7`]: l.colors[i][7],
          [`--mantine-color-${r}-8`]: l.colors[i][8],
          [`--mantine-color-${r}-9`]: l.colors[i][9],
          ...g,
        }
      : g;
  }
  const f = Ci(l, "dark"),
    d = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${f})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${f === 9 ? 8 : f + 1})`,
      [`--mantine-color-${r}-light`]: fa(l.colors[i][Math.max(0, f - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: fa(
        l.colors[i][Math.max(0, f - 2)],
        0.2,
      ),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(f - 5, 0)})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(f - 4, 0)})`,
      [`--mantine-color-${r}-outline-hover`]: fa(
        l.colors[i][Math.max(f - 4, 0)],
        0.05,
      ),
    };
  return s
    ? {
        [`--mantine-color-${r}-0`]: l.colors[i][0],
        [`--mantine-color-${r}-1`]: l.colors[i][1],
        [`--mantine-color-${r}-2`]: l.colors[i][2],
        [`--mantine-color-${r}-3`]: l.colors[i][3],
        [`--mantine-color-${r}-4`]: l.colors[i][4],
        [`--mantine-color-${r}-5`]: l.colors[i][5],
        [`--mantine-color-${r}-6`]: l.colors[i][6],
        [`--mantine-color-${r}-7`]: l.colors[i][7],
        [`--mantine-color-${r}-8`]: l.colors[i][8],
        [`--mantine-color-${r}-9`]: l.colors[i][9],
        ...d,
      }
    : d;
}
function R1(l) {
  return !!l && typeof l == "object" && "mantine-virtual-color" in l;
}
function da(l, i, o) {
  ee(i).forEach((r) => Object.assign(l, { [`--mantine-${o}-${r}`]: i[r] }));
}
const Tv = (l) => {
  const i = Ci(l, "light"),
    o =
      l.defaultRadius in l.radius
        ? l.radius[l.defaultRadius]
        : Z(l.defaultRadius),
    r = {
      variables: {
        "--mantine-scale": l.scale.toString(),
        "--mantine-cursor-type": l.cursorType,
        "--mantine-color-scheme": "light dark",
        "--mantine-webkit-font-smoothing": l.fontSmoothing
          ? "antialiased"
          : "unset",
        "--mantine-moz-font-smoothing": l.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": l.white,
        "--mantine-color-black": l.black,
        "--mantine-line-height": l.lineHeights.md,
        "--mantine-font-family": l.fontFamily,
        "--mantine-font-family-monospace": l.fontFamilyMonospace,
        "--mantine-font-family-headings": l.headings.fontFamily,
        "--mantine-heading-font-weight": l.headings.fontWeight,
        "--mantine-heading-text-wrap": l.headings.textWrap,
        "--mantine-radius-default": o,
        "--mantine-primary-color-filled": `var(--mantine-color-${l.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${l.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${l.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${l.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${l.primaryColor}-light-color)`,
      },
      light: {
        "--mantine-primary-color-contrast": jp(l, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": l.black,
        "--mantine-color-body": l.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${l.primaryColor}-${i})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
        "--mantine-color-disabled": "var(--mantine-color-gray-2)",
        "--mantine-color-disabled-color": "var(--mantine-color-gray-5)",
        "--mantine-color-disabled-border": "var(--mantine-color-gray-3)",
      },
      dark: {
        "--mantine-primary-color-contrast": jp(l, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${l.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
        "--mantine-color-disabled": "var(--mantine-color-dark-6)",
        "--mantine-color-disabled-color": "var(--mantine-color-dark-3)",
        "--mantine-color-disabled-border": "var(--mantine-color-gray-6)",
      },
    };
  da(r.variables, l.breakpoints, "breakpoint"),
    da(r.variables, l.spacing, "spacing"),
    da(r.variables, l.fontSizes, "font-size"),
    da(r.variables, l.lineHeights, "line-height"),
    da(r.variables, l.shadows, "shadow"),
    da(r.variables, l.radius, "radius"),
    l.colors[l.primaryColor].forEach((f, d) => {
      r.variables[`--mantine-primary-color-${d}`] =
        `var(--mantine-color-${l.primaryColor}-${d})`;
    }),
    ee(l.colors).forEach((f) => {
      const d = l.colors[f];
      if (R1(d)) {
        Object.assign(
          r.light,
          nu({
            theme: l,
            name: d.name,
            color: d.light,
            colorScheme: "light",
            withColorValues: !0,
          }),
        ),
          Object.assign(
            r.dark,
            nu({
              theme: l,
              name: d.name,
              color: d.dark,
              colorScheme: "dark",
              withColorValues: !0,
            }),
          );
        return;
      }
      d.forEach((h, g) => {
        r.variables[`--mantine-color-${f}-${g}`] = h;
      }),
        Object.assign(
          r.light,
          nu({ theme: l, color: f, colorScheme: "light", withColorValues: !1 }),
        ),
        Object.assign(
          r.dark,
          nu({ theme: l, color: f, colorScheme: "dark", withColorValues: !1 }),
        );
    });
  const s = l.headings.sizes;
  return (
    ee(s).forEach((f) => {
      (r.variables[`--mantine-${f}-font-size`] = s[f].fontSize),
        (r.variables[`--mantine-${f}-line-height`] = s[f].lineHeight),
        (r.variables[`--mantine-${f}-font-weight`] =
          s[f].fontWeight || l.headings.fontWeight);
    }),
    r
  );
};
function T1({ theme: l, generator: i }) {
  const o = Tv(l),
    r = i == null ? void 0 : i(l);
  return r ? js(o, r) : o;
}
const os = Tv(qs);
function A1(l) {
  const i = { variables: {}, light: {}, dark: {} };
  return (
    ee(l.variables).forEach((o) => {
      os.variables[o] !== l.variables[o] && (i.variables[o] = l.variables[o]);
    }),
    ee(l.light).forEach((o) => {
      os.light[o] !== l.light[o] && (i.light[o] = l.light[o]);
    }),
    ee(l.dark).forEach((o) => {
      os.dark[o] !== l.dark[o] && (i.dark[o] = l.dark[o]);
    }),
    i
  );
}
function C1(l) {
  return `
  ${l}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${l}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Av({ cssVariablesSelector: l, deduplicateCssVariables: i }) {
  const o = Xe(),
    r = $s(),
    s = l1(),
    f = T1({ theme: o, generator: s }),
    d = l === ":root" && i,
    h = d ? A1(f) : f,
    g = E1(h, l);
  return g
    ? j.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${g}${d ? "" : C1(l)}` },
      })
    : null;
}
Av.displayName = "@mantine/CssVariables";
function ma(l, i) {
  var s, f;
  const o =
      typeof window < "u" &&
      "matchMedia" in window &&
      ((s = window.matchMedia("(prefers-color-scheme: dark)")) == null
        ? void 0
        : s.matches),
    r = l !== "auto" ? l : o ? "dark" : "light";
  (f = i()) == null || f.setAttribute("data-mantine-color-scheme", r);
}
function _1({
  manager: l,
  defaultColorScheme: i,
  getRootElement: o,
  forceColorScheme: r,
}) {
  const s = A.useRef(null),
    [f, d] = A.useState(() => l.get(i)),
    h = r || f,
    g = A.useCallback(
      (b) => {
        r || (ma(b, o), d(b), l.set(b));
      },
      [l.set, h, r],
    ),
    p = A.useCallback(() => {
      d(i), ma(i, o), l.clear();
    }, [l.clear, i]);
  return (
    A.useEffect(
      () => (l.subscribe(g), l.unsubscribe),
      [l.subscribe, l.unsubscribe],
    ),
    Oi(() => {
      ma(l.get(i), o);
    }, []),
    A.useEffect(() => {
      var y;
      if (r) return ma(r, o), () => {};
      r === void 0 && ma(f, o),
        typeof window < "u" &&
          "matchMedia" in window &&
          (s.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const b = (T) => {
        f === "auto" && ma(T.matches ? "dark" : "light", o);
      };
      return (
        (y = s.current) == null || y.addEventListener("change", b),
        () => {
          var T;
          return (T = s.current) == null
            ? void 0
            : T.removeEventListener("change", b);
        }
      );
    }, [f, r]),
    { colorScheme: h, setColorScheme: g, clearColorScheme: p }
  );
}
function w1({ respectReducedMotion: l, getRootElement: i }) {
  Oi(() => {
    var o;
    l &&
      ((o = i()) == null ||
        o.setAttribute("data-respect-reduced-motion", "true"));
  }, [l]);
}
function Cv({
  theme: l,
  children: i,
  getStyleNonce: o,
  withStaticClasses: r = !0,
  withGlobalClasses: s = !0,
  deduplicateCssVariables: f = !0,
  withCssVariables: d = !0,
  cssVariablesSelector: h = ":root",
  classNamesPrefix: g = "mantine",
  colorSchemeManager: p = g1(),
  defaultColorScheme: b = "light",
  getRootElement: y = () => document.documentElement,
  cssVariablesResolver: T,
  forceColorScheme: x,
  stylesTransform: _,
  env: R,
}) {
  const {
    colorScheme: M,
    setColorScheme: Y,
    clearColorScheme: G,
  } = _1({
    defaultColorScheme: b,
    forceColorScheme: x,
    manager: p,
    getRootElement: y,
  });
  return (
    w1({
      respectReducedMotion: (l == null ? void 0 : l.respectReducedMotion) || !1,
      getRootElement: y,
    }),
    j.jsx(xv.Provider, {
      value: {
        colorScheme: M,
        setColorScheme: Y,
        clearColorScheme: G,
        getRootElement: y,
        classNamesPrefix: g,
        getStyleNonce: o,
        cssVariablesResolver: T,
        cssVariablesSelector: h,
        withStaticClasses: r,
        stylesTransform: _,
        env: R,
      },
      children: j.jsxs(Rv, {
        theme: l,
        children: [
          d &&
            j.jsx(Av, { cssVariablesSelector: h, deduplicateCssVariables: f }),
          s && j.jsx(x1, {}),
          i,
        ],
      }),
    })
  );
}
Cv.displayName = "@mantine/core/MantineProvider";
function O1({ classNames: l, styles: i, props: o, stylesCtx: r }) {
  const s = Xe();
  return {
    resolvedClassNames: xu({
      theme: s,
      classNames: l,
      props: o,
      stylesCtx: r || void 0,
    }),
    resolvedStyles: du({
      theme: s,
      styles: i,
      props: o,
      stylesCtx: r || void 0,
    }),
  };
}
const M1 = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function z1({ theme: l, options: i, unstyled: o }) {
  return El(
    (i == null ? void 0 : i.focusable) &&
      !o &&
      (l.focusClassName || M1[l.focusRing]),
    (i == null ? void 0 : i.active) && !o && l.activeClassName,
  );
}
function N1({ selector: l, stylesCtx: i, options: o, props: r, theme: s }) {
  return xu({
    theme: s,
    classNames: o == null ? void 0 : o.classNames,
    props: (o == null ? void 0 : o.props) || r,
    stylesCtx: i,
  })[l];
}
function Bp({ selector: l, stylesCtx: i, theme: o, classNames: r, props: s }) {
  return xu({ theme: o, classNames: r, props: s, stylesCtx: i })[l];
}
function D1({ rootSelector: l, selector: i, className: o }) {
  return l === i ? o : void 0;
}
function j1({ selector: l, classes: i, unstyled: o }) {
  return o ? void 0 : i[l];
}
function B1({
  themeName: l,
  classNamesPrefix: i,
  selector: o,
  withStaticClass: r,
}) {
  return r === !1 ? [] : l.map((s) => `${i}-${s}-${o}`);
}
function U1({ themeName: l, theme: i, selector: o, props: r, stylesCtx: s }) {
  return l.map((f) => {
    var d, h;
    return (h = xu({
      theme: i,
      classNames: (d = i.components[f]) == null ? void 0 : d.classNames,
      props: r,
      stylesCtx: s,
    })) == null
      ? void 0
      : h[o];
  });
}
function H1({ options: l, classes: i, selector: o, unstyled: r }) {
  return l != null && l.variant && !r ? i[`${o}--${l.variant}`] : void 0;
}
function L1({
  theme: l,
  options: i,
  themeName: o,
  selector: r,
  classNamesPrefix: s,
  classNames: f,
  classes: d,
  unstyled: h,
  className: g,
  rootSelector: p,
  props: b,
  stylesCtx: y,
  withStaticClasses: T,
  headless: x,
  transformedStyles: _,
}) {
  return El(
    z1({ theme: l, options: i, unstyled: h || x }),
    U1({ theme: l, themeName: o, selector: r, props: b, stylesCtx: y }),
    H1({ options: i, classes: d, selector: r, unstyled: h }),
    Bp({ selector: r, stylesCtx: y, theme: l, classNames: f, props: b }),
    Bp({ selector: r, stylesCtx: y, theme: l, classNames: _, props: b }),
    N1({ selector: r, stylesCtx: y, options: i, props: b, theme: l }),
    D1({ rootSelector: p, selector: r, className: g }),
    j1({ selector: r, classes: d, unstyled: h || x }),
    T &&
      !x &&
      B1({
        themeName: o,
        classNamesPrefix: s,
        selector: r,
        withStaticClass: i == null ? void 0 : i.withStaticClass,
      }),
    i == null ? void 0 : i.className,
  );
}
function $1({ theme: l, themeName: i, props: o, stylesCtx: r, selector: s }) {
  return i
    .map((f) => {
      var d;
      return du({
        theme: l,
        styles: (d = l.components[f]) == null ? void 0 : d.styles,
        props: o,
        stylesCtx: r,
      })[s];
    })
    .reduce((f, d) => ({ ...f, ...d }), {});
}
function Ts({ style: l, theme: i }) {
  return Array.isArray(l)
    ? [...l].reduce((o, r) => ({ ...o, ...Ts({ style: r, theme: i }) }), {})
    : typeof l == "function"
      ? l(i)
      : (l ?? {});
}
function Y1(l) {
  return l.reduce(
    (i, o) => (
      o &&
        Object.keys(o).forEach((r) => {
          i[r] = { ...i[r], ...bu(o[r]) };
        }),
      i
    ),
    {},
  );
}
function q1({
  vars: l,
  varsResolver: i,
  theme: o,
  props: r,
  stylesCtx: s,
  selector: f,
  themeName: d,
  headless: h,
}) {
  var g;
  return (g = Y1([
    h ? {} : i == null ? void 0 : i(o, r, s),
    ...d.map((p) => {
      var b, y, T;
      return (T =
        (y = (b = o.components) == null ? void 0 : b[p]) == null
          ? void 0
          : y.vars) == null
        ? void 0
        : T.call(y, o, r, s);
    }),
    l == null ? void 0 : l(o, r, s),
  ])) == null
    ? void 0
    : g[f];
}
function G1({
  theme: l,
  themeName: i,
  selector: o,
  options: r,
  props: s,
  stylesCtx: f,
  rootSelector: d,
  styles: h,
  style: g,
  vars: p,
  varsResolver: b,
  headless: y,
  withStylesTransform: T,
}) {
  return {
    ...(!T &&
      $1({ theme: l, themeName: i, props: s, stylesCtx: f, selector: o })),
    ...(!T && du({ theme: l, styles: h, props: s, stylesCtx: f })[o]),
    ...(!T &&
      du({
        theme: l,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || s,
        stylesCtx: f,
      })[o]),
    ...q1({
      theme: l,
      props: s,
      stylesCtx: f,
      vars: p,
      varsResolver: b,
      selector: o,
      themeName: i,
      headless: y,
    }),
    ...(d === o ? Ts({ style: g, theme: l }) : null),
    ...Ts({ style: r == null ? void 0 : r.style, theme: l }),
  };
}
function X1({ props: l, stylesCtx: i, themeName: o }) {
  var d;
  const r = Xe(),
    s = (d = o1()) == null ? void 0 : d();
  return {
    getTransformedStyles: (h) =>
      s
        ? [
            ...h.map((p) => s(p, { props: l, theme: r, ctx: i })),
            ...o.map((p) => {
              var b;
              return s((b = r.components[p]) == null ? void 0 : b.styles, {
                props: l,
                theme: r,
                ctx: i,
              });
            }),
          ].filter(Boolean)
        : [],
    withStylesTransform: !!s,
  };
}
function Ut({
  name: l,
  classes: i,
  props: o,
  stylesCtx: r,
  className: s,
  style: f,
  rootSelector: d = "root",
  unstyled: h,
  classNames: g,
  styles: p,
  vars: b,
  varsResolver: y,
}) {
  const T = Xe(),
    x = a1(),
    _ = i1(),
    R = r1(),
    M = (Array.isArray(l) ? l : [l]).filter((B) => B),
    { withStylesTransform: Y, getTransformedStyles: G } = X1({
      props: o,
      stylesCtx: r,
      themeName: M,
    });
  return (B, X) => ({
    className: L1({
      theme: T,
      options: X,
      themeName: M,
      selector: B,
      classNamesPrefix: x,
      classNames: g,
      classes: i,
      unstyled: h,
      className: s,
      rootSelector: d,
      props: o,
      stylesCtx: r,
      withStaticClasses: _,
      headless: R,
      transformedStyles: G([X == null ? void 0 : X.styles, p]),
    }),
    style: G1({
      theme: T,
      themeName: M,
      selector: B,
      options: X,
      props: o,
      stylesCtx: r,
      rootSelector: d,
      styles: p,
      style: f,
      vars: b,
      varsResolver: y,
      headless: R,
      withStylesTransform: Y,
    }),
  });
}
function _v(l, i) {
  return typeof l == "boolean" ? l : i.autoContrast;
}
function gt(l, i, o) {
  var d;
  const r = Xe(),
    s = (d = r.components[l]) == null ? void 0 : d.defaultProps,
    f = typeof s == "function" ? s(r) : s;
  return { ...i, ...f, ...bu(o) };
}
function cs(l) {
  return ee(l)
    .reduce((i, o) => (l[o] !== void 0 ? `${i}${Yb(o)}:${l[o]};` : i), "")
    .trim();
}
function V1({ selector: l, styles: i, media: o, container: r }) {
  const s = i ? cs(i) : "",
    f = Array.isArray(o)
      ? o.map((h) => `@media${h.query}{${l}{${cs(h.styles)}}}`)
      : [],
    d = Array.isArray(r)
      ? r.map((h) => `@container ${h.query}{${l}{${cs(h.styles)}}}`)
      : [];
  return `${s ? `${l}{${s}}` : ""}${f.join("")}${d.join("")}`.trim();
}
function Vs(l) {
  const i = $s();
  return j.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: i == null ? void 0 : i(),
    dangerouslySetInnerHTML: { __html: V1(l) },
  });
}
function Qs(l) {
  const {
    m: i,
    mx: o,
    my: r,
    mt: s,
    mb: f,
    ml: d,
    mr: h,
    me: g,
    ms: p,
    p: b,
    px: y,
    py: T,
    pt: x,
    pb: _,
    pl: R,
    pr: M,
    pe: Y,
    ps: G,
    bd: B,
    bg: X,
    c: L,
    opacity: W,
    ff: P,
    fz: et,
    fw: tt,
    lts: ut,
    ta: mt,
    lh: rt,
    fs: ot,
    tt: ct,
    td: I,
    w: O,
    miw: $,
    maw: q,
    h: K,
    mih: S,
    mah: N,
    bgsz: J,
    bgp: F,
    bgr: lt,
    bga: ht,
    pos: nt,
    top: Tt,
    left: xt,
    bottom: le,
    right: Ft,
    inset: Ve,
    display: el,
    flex: An,
    hiddenFrom: Cn,
    visibleFrom: Ea,
    lightHidden: ju,
    darkHidden: Te,
    sx: Bu,
    ...Li
  } = l;
  return {
    styleProps: bu({
      m: i,
      mx: o,
      my: r,
      mt: s,
      mb: f,
      ml: d,
      mr: h,
      me: g,
      ms: p,
      p: b,
      px: y,
      py: T,
      pt: x,
      pb: _,
      pl: R,
      pr: M,
      pe: Y,
      ps: G,
      bd: B,
      bg: X,
      c: L,
      opacity: W,
      ff: P,
      fz: et,
      fw: tt,
      lts: ut,
      ta: mt,
      lh: rt,
      fs: ot,
      tt: ct,
      td: I,
      w: O,
      miw: $,
      maw: q,
      h: K,
      mih: S,
      mah: N,
      bgsz: J,
      bgp: F,
      bgr: lt,
      bga: ht,
      pos: nt,
      top: Tt,
      left: xt,
      bottom: le,
      right: Ft,
      inset: Ve,
      display: el,
      flex: An,
      hiddenFrom: Cn,
      visibleFrom: Ea,
      lightHidden: ju,
      darkHidden: Te,
      sx: Bu,
    }),
    rest: Li,
  };
}
const Q1 = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" },
};
function Zs(l, i) {
  const o = Rl({ color: l, theme: i });
  return o.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : o.color === "bright"
      ? "var(--mantine-color-bright)"
      : o.variable
        ? `var(${o.variable})`
        : o.color;
}
function Z1(l, i) {
  const o = Rl({ color: l, theme: i });
  return o.isThemeColor && o.shade === void 0
    ? `var(--mantine-color-${o.color}-text)`
    : Zs(l, i);
}
function k1(l, i) {
  if (typeof l == "number") return Z(l);
  if (typeof l == "string") {
    const [o, r, ...s] = l.split(" ").filter((d) => d.trim() !== "");
    let f = `${Z(o)}`;
    return (
      r && (f += ` ${r}`),
      s.length > 0 && (f += ` ${Zs(s.join(" "), i)}`),
      f.trim()
    );
  }
  return l;
}
const Up = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function K1(l) {
  return typeof l == "string" && l in Up ? Up[l] : l;
}
const J1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function W1(l, i) {
  return typeof l == "string" && l in i.fontSizes
    ? `var(--mantine-font-size-${l})`
    : typeof l == "string" && J1.includes(l)
      ? `var(--mantine-${l}-font-size)`
      : typeof l == "number" || typeof l == "string"
        ? Z(l)
        : l;
}
function F1(l) {
  return l;
}
const P1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function I1(l, i) {
  return typeof l == "string" && l in i.lineHeights
    ? `var(--mantine-line-height-${l})`
    : typeof l == "string" && P1.includes(l)
      ? `var(--mantine-${l}-line-height)`
      : l;
}
function tS(l) {
  return typeof l == "number" ? Z(l) : l;
}
function eS(l, i) {
  if (typeof l == "number") return Z(l);
  if (typeof l == "string") {
    const o = l.replace("-", "");
    if (!(o in i.spacing)) return Z(l);
    const r = `--mantine-spacing-${o}`;
    return l.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return l;
}
const ss = {
  color: Zs,
  textColor: Z1,
  fontSize: W1,
  spacing: eS,
  identity: F1,
  size: tS,
  lineHeight: I1,
  fontFamily: K1,
  border: k1,
};
function Hp(l) {
  return l.replace("(min-width: ", "").replace("em)", "");
}
function nS({ media: l, ...i }) {
  const r = Object.keys(l)
    .sort((s, f) => Number(Hp(s)) - Number(Hp(f)))
    .map((s) => ({ query: s, styles: l[s] }));
  return { ...i, media: r };
}
function lS(l) {
  if (typeof l != "object" || l === null) return !1;
  const i = Object.keys(l);
  return !(i.length === 1 && i[0] === "base");
}
function aS(l) {
  return typeof l == "object" && l !== null
    ? "base" in l
      ? l.base
      : void 0
    : l;
}
function iS(l) {
  return typeof l == "object" && l !== null
    ? ee(l).filter((i) => i !== "base")
    : [];
}
function rS(l, i) {
  return typeof l == "object" && l !== null && i in l ? l[i] : l;
}
function wv({ styleProps: l, data: i, theme: o }) {
  return nS(
    ee(l).reduce(
      (r, s) => {
        if (s === "hiddenFrom" || s === "visibleFrom" || s === "sx") return r;
        const f = i[s],
          d = Array.isArray(f.property) ? f.property : [f.property],
          h = aS(l[s]);
        if (!lS(l[s]))
          return (
            d.forEach((p) => {
              r.inlineStyles[p] = ss[f.type](h, o);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const g = iS(l[s]);
        return (
          d.forEach((p) => {
            h && (r.styles[p] = ss[f.type](h, o)),
              g.forEach((b) => {
                const y = `(min-width: ${o.breakpoints[b]})`;
                r.media[y] = { ...r.media[y], [p]: ss[f.type](rS(l[s], b), o) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} },
    ),
  );
}
function Ov() {
  return `__m__-${A.useId().replace(/:/g, "")}`;
}
function Mv(l, i) {
  return Array.isArray(l)
    ? [...l].reduce((o, r) => ({ ...o, ...Mv(r, i) }), {})
    : typeof l == "function"
      ? l(i)
      : (l ?? {});
}
function zv(l) {
  return l.startsWith("data-") ? l : `data-${l}`;
}
function uS(l) {
  return Object.keys(l).reduce((i, o) => {
    const r = l[o];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (i[zv(o)] = l[o]), i
    );
  }, {});
}
function Nv(l) {
  return l
    ? typeof l == "string"
      ? { [zv(l)]: !0 }
      : Array.isArray(l)
        ? [...l].reduce((i, o) => ({ ...i, ...Nv(o) }), {})
        : uS(l)
    : null;
}
function As(l, i) {
  return Array.isArray(l)
    ? [...l].reduce((o, r) => ({ ...o, ...As(r, i) }), {})
    : typeof l == "function"
      ? l(i)
      : (l ?? {});
}
function oS({ theme: l, style: i, vars: o, styleProps: r }) {
  const s = As(i, l),
    f = As(o, l);
  return { ...s, ...f, ...r };
}
const Dv = A.forwardRef(
  (
    {
      component: l,
      style: i,
      __vars: o,
      className: r,
      variant: s,
      mod: f,
      size: d,
      hiddenFrom: h,
      visibleFrom: g,
      lightHidden: p,
      darkHidden: b,
      renderRoot: y,
      __size: T,
      ...x
    },
    _,
  ) => {
    var et;
    const R = Xe(),
      M = l || "div",
      { styleProps: Y, rest: G } = Qs(x),
      B = u1(),
      X = (et = B == null ? void 0 : B()) == null ? void 0 : et(Y.sx),
      L = Ov(),
      W = wv({ styleProps: Y, theme: R, data: Q1 }),
      P = {
        ref: _,
        style: oS({ theme: R, style: i, vars: o, styleProps: W.inlineStyles }),
        className: El(r, X, {
          [L]: W.hasResponsiveStyles,
          "mantine-light-hidden": p,
          "mantine-dark-hidden": b,
          [`mantine-hidden-from-${h}`]: h,
          [`mantine-visible-from-${g}`]: g,
        }),
        "data-variant": s,
        "data-size": pv(d) ? void 0 : d || void 0,
        size: T,
        ...Nv(f),
        ...G,
      };
    return j.jsxs(j.Fragment, {
      children: [
        W.hasResponsiveStyles &&
          j.jsx(Vs, { selector: `.${L}`, styles: W.styles, media: W.media }),
        typeof y == "function" ? y(P) : j.jsx(M, { ...P }),
      ],
    });
  },
);
Dv.displayName = "@mantine/core/Box";
const Rt = Dv;
function jv(l) {
  return l;
}
function Dt(l) {
  const i = A.forwardRef(l);
  return (
    (i.extend = jv),
    (i.withProps = (o) => {
      const r = A.forwardRef((s, f) => j.jsx(i, { ...o, ...s, ref: f }));
      return (
        (r.extend = i.extend),
        (r.displayName = `WithProps(${i.displayName})`),
        r
      );
    }),
    i
  );
}
function In(l) {
  const i = A.forwardRef(l);
  return (
    (i.withProps = (o) => {
      const r = A.forwardRef((s, f) => j.jsx(i, { ...o, ...s, ref: f }));
      return (
        (r.extend = i.extend),
        (r.displayName = `WithProps(${i.displayName})`),
        r
      );
    }),
    (i.extend = jv),
    i
  );
}
const cS = A.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function Bv() {
  return A.useContext(cS);
}
var ks = rv();
const sS = iv(ks);
function Eu() {
  return typeof window < "u";
}
function ya(l) {
  return Uv(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function me(l) {
  var i;
  return (
    (l == null || (i = l.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function tn(l) {
  var i;
  return (i = (Uv(l) ? l.ownerDocument : l.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function Uv(l) {
  return Eu() ? l instanceof Node || l instanceof me(l).Node : !1;
}
function Bt(l) {
  return Eu() ? l instanceof Element || l instanceof me(l).Element : !1;
}
function Re(l) {
  return Eu() ? l instanceof HTMLElement || l instanceof me(l).HTMLElement : !1;
}
function Cs(l) {
  return !Eu() || typeof ShadowRoot > "u"
    ? !1
    : l instanceof ShadowRoot || l instanceof me(l).ShadowRoot;
}
function Mi(l) {
  const { overflow: i, overflowX: o, overflowY: r, display: s } = Be(l);
  return (
    /auto|scroll|overlay|hidden|clip/.test(i + r + o) &&
    !["inline", "contents"].includes(s)
  );
}
function fS(l) {
  return ["table", "td", "th"].includes(ya(l));
}
function Ru(l) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return l.matches(i);
    } catch {
      return !1;
    }
  });
}
function Ks(l) {
  const i = Tu(),
    o = Bt(l) ? Be(l) : l;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      o[r] ? o[r] !== "none" : !1,
    ) ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!i && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!i && (o.filter ? o.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (o.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (o.contain || "").includes(r),
    )
  );
}
function dS(l) {
  let i = xn(l);
  for (; Re(i) && !Pn(i); ) {
    if (Ks(i)) return i;
    if (Ru(i)) return null;
    i = xn(i);
  }
  return null;
}
function Tu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pn(l) {
  return ["html", "body", "#document"].includes(ya(l));
}
function Be(l) {
  return me(l).getComputedStyle(l);
}
function Au(l) {
  return Bt(l)
    ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop }
    : { scrollLeft: l.scrollX, scrollTop: l.scrollY };
}
function xn(l) {
  if (ya(l) === "html") return l;
  const i = l.assignedSlot || l.parentNode || (Cs(l) && l.host) || tn(l);
  return Cs(i) ? i.host : i;
}
function Hv(l) {
  const i = xn(l);
  return Pn(i)
    ? l.ownerDocument
      ? l.ownerDocument.body
      : l.body
    : Re(i) && Mi(i)
      ? i
      : Hv(i);
}
function Sn(l, i, o) {
  var r;
  i === void 0 && (i = []), o === void 0 && (o = !0);
  const s = Hv(l),
    f = s === ((r = l.ownerDocument) == null ? void 0 : r.body),
    d = me(s);
  if (f) {
    const h = _s(d);
    return i.concat(
      d,
      d.visualViewport || [],
      Mi(s) ? s : [],
      h && o ? Sn(h) : [],
    );
  }
  return i.concat(s, Sn(s, [], o));
}
function _s(l) {
  return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function Lp(l) {
  let i = l.activeElement;
  for (
    ;
    ((o = i) == null || (o = o.shadowRoot) == null
      ? void 0
      : o.activeElement) != null;

  ) {
    var o;
    i = i.shadowRoot.activeElement;
  }
  return i;
}
function _i(l, i) {
  if (!l || !i) return !1;
  const o = i.getRootNode == null ? void 0 : i.getRootNode();
  if (l.contains(i)) return !0;
  if (o && Cs(o)) {
    let r = i;
    for (; r; ) {
      if (l === r) return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Lv() {
  const l = navigator.userAgentData;
  return l != null && l.platform ? l.platform : navigator.platform;
}
function $v() {
  const l = navigator.userAgentData;
  return l && Array.isArray(l.brands)
    ? l.brands
        .map((i) => {
          let { brand: o, version: r } = i;
          return o + "/" + r;
        })
        .join(" ")
    : navigator.userAgent;
}
function mS(l) {
  return vS()
    ? !1
    : (!$p() && l.width === 0 && l.height === 0) ||
        ($p() &&
          l.width === 1 &&
          l.height === 1 &&
          l.pressure === 0 &&
          l.detail === 0 &&
          l.pointerType === "mouse") ||
        (l.width < 1 &&
          l.height < 1 &&
          l.pressure === 0 &&
          l.detail === 0 &&
          l.pointerType === "touch");
}
function hS() {
  return /apple/i.test(navigator.vendor);
}
function $p() {
  const l = /android/i;
  return l.test(Lv()) || l.test($v());
}
function pS() {
  return Lv().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function vS() {
  return $v().includes("jsdom/");
}
function ws(l, i) {
  const o = ["mouse", "pen"];
  return o.push("", void 0), o.includes(l);
}
function gS(l) {
  return "nativeEvent" in l;
}
function yS(l) {
  return l.matches("html,body");
}
function Sl(l) {
  return (l == null ? void 0 : l.ownerDocument) || document;
}
function fs(l, i) {
  if (i == null) return !1;
  if ("composedPath" in l) return l.composedPath().includes(i);
  const o = l;
  return o.target != null && i.contains(o.target);
}
function ha(l) {
  return "composedPath" in l ? l.composedPath()[0] : l.target;
}
const bS =
  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function SS(l) {
  return Re(l) && l.matches(bS);
}
const En = Math.min,
  Fe = Math.max,
  mu = Math.round,
  lu = Math.floor,
  Pe = (l) => ({ x: l, y: l }),
  xS = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ES = { start: "end", end: "start" };
function Os(l, i, o) {
  return Fe(l, En(i, o));
}
function ba(l, i) {
  return typeof l == "function" ? l(i) : l;
}
function Rn(l) {
  return l.split("-")[0];
}
function zi(l) {
  return l.split("-")[1];
}
function Yv(l) {
  return l === "x" ? "y" : "x";
}
function Js(l) {
  return l === "y" ? "height" : "width";
}
function Fn(l) {
  return ["top", "bottom"].includes(Rn(l)) ? "y" : "x";
}
function Ws(l) {
  return Yv(Fn(l));
}
function RS(l, i, o) {
  o === void 0 && (o = !1);
  const r = zi(l),
    s = Ws(l),
    f = Js(s);
  let d =
    s === "x"
      ? r === (o ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return i.reference[f] > i.floating[f] && (d = hu(d)), [d, hu(d)];
}
function TS(l) {
  const i = hu(l);
  return [Ms(l), i, Ms(i)];
}
function Ms(l) {
  return l.replace(/start|end/g, (i) => ES[i]);
}
function AS(l, i, o) {
  const r = ["left", "right"],
    s = ["right", "left"],
    f = ["top", "bottom"],
    d = ["bottom", "top"];
  switch (l) {
    case "top":
    case "bottom":
      return o ? (i ? s : r) : i ? r : s;
    case "left":
    case "right":
      return i ? f : d;
    default:
      return [];
  }
}
function CS(l, i, o, r) {
  const s = zi(l);
  let f = AS(Rn(l), o === "start", r);
  return (
    s && ((f = f.map((d) => d + "-" + s)), i && (f = f.concat(f.map(Ms)))), f
  );
}
function hu(l) {
  return l.replace(/left|right|bottom|top/g, (i) => xS[i]);
}
function _S(l) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...l };
}
function Fs(l) {
  return typeof l != "number"
    ? _S(l)
    : { top: l, right: l, bottom: l, left: l };
}
function ga(l) {
  const { x: i, y: o, width: r, height: s } = l;
  return {
    width: r,
    height: s,
    top: o,
    left: i,
    right: i + r,
    bottom: o + s,
    x: i,
    y: o,
  };
}
function Yp(l, i, o) {
  let { reference: r, floating: s } = l;
  const f = Fn(i),
    d = Ws(i),
    h = Js(d),
    g = Rn(i),
    p = f === "y",
    b = r.x + r.width / 2 - s.width / 2,
    y = r.y + r.height / 2 - s.height / 2,
    T = r[h] / 2 - s[h] / 2;
  let x;
  switch (g) {
    case "top":
      x = { x: b, y: r.y - s.height };
      break;
    case "bottom":
      x = { x: b, y: r.y + r.height };
      break;
    case "right":
      x = { x: r.x + r.width, y };
      break;
    case "left":
      x = { x: r.x - s.width, y };
      break;
    default:
      x = { x: r.x, y: r.y };
  }
  switch (zi(i)) {
    case "start":
      x[d] -= T * (o && p ? -1 : 1);
      break;
    case "end":
      x[d] += T * (o && p ? -1 : 1);
      break;
  }
  return x;
}
const wS = async (l, i, o) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: f = [],
      platform: d,
    } = o,
    h = f.filter(Boolean),
    g = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let p = await d.getElementRects({ reference: l, floating: i, strategy: s }),
    { x: b, y } = Yp(p, r, g),
    T = r,
    x = {},
    _ = 0;
  for (let R = 0; R < h.length; R++) {
    const { name: M, fn: Y } = h[R],
      {
        x: G,
        y: B,
        data: X,
        reset: L,
      } = await Y({
        x: b,
        y,
        initialPlacement: r,
        placement: T,
        strategy: s,
        middlewareData: x,
        rects: p,
        platform: d,
        elements: { reference: l, floating: i },
      });
    (b = G ?? b),
      (y = B ?? y),
      (x = { ...x, [M]: { ...x[M], ...X } }),
      L &&
        _ <= 50 &&
        (_++,
        typeof L == "object" &&
          (L.placement && (T = L.placement),
          L.rects &&
            (p =
              L.rects === !0
                ? await d.getElementRects({
                    reference: l,
                    floating: i,
                    strategy: s,
                  })
                : L.rects),
          ({ x: b, y } = Yp(p, T, g))),
        (R = -1));
  }
  return { x: b, y, placement: T, strategy: s, middlewareData: x };
};
async function qv(l, i) {
  var o;
  i === void 0 && (i = {});
  const { x: r, y: s, platform: f, rects: d, elements: h, strategy: g } = l,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: b = "viewport",
      elementContext: y = "floating",
      altBoundary: T = !1,
      padding: x = 0,
    } = ba(i, l),
    _ = Fs(x),
    M = h[T ? (y === "floating" ? "reference" : "floating") : y],
    Y = ga(
      await f.getClippingRect({
        element:
          (o = await (f.isElement == null ? void 0 : f.isElement(M))) == null ||
          o
            ? M
            : M.contextElement ||
              (await (f.getDocumentElement == null
                ? void 0
                : f.getDocumentElement(h.floating))),
        boundary: p,
        rootBoundary: b,
        strategy: g,
      }),
    ),
    G =
      y === "floating"
        ? { x: r, y: s, width: d.floating.width, height: d.floating.height }
        : d.reference,
    B = await (f.getOffsetParent == null
      ? void 0
      : f.getOffsetParent(h.floating)),
    X = (await (f.isElement == null ? void 0 : f.isElement(B)))
      ? (await (f.getScale == null ? void 0 : f.getScale(B))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    L = ga(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: G,
            offsetParent: B,
            strategy: g,
          })
        : G,
    );
  return {
    top: (Y.top - L.top + _.top) / X.y,
    bottom: (L.bottom - Y.bottom + _.bottom) / X.y,
    left: (Y.left - L.left + _.left) / X.x,
    right: (L.right - Y.right + _.right) / X.x,
  };
}
const OS = (l) => ({
    name: "arrow",
    options: l,
    async fn(i) {
      const {
          x: o,
          y: r,
          placement: s,
          rects: f,
          platform: d,
          elements: h,
          middlewareData: g,
        } = i,
        { element: p, padding: b = 0 } = ba(l, i) || {};
      if (p == null) return {};
      const y = Fs(b),
        T = { x: o, y: r },
        x = Ws(s),
        _ = Js(x),
        R = await d.getDimensions(p),
        M = x === "y",
        Y = M ? "top" : "left",
        G = M ? "bottom" : "right",
        B = M ? "clientHeight" : "clientWidth",
        X = f.reference[_] + f.reference[x] - T[x] - f.floating[_],
        L = T[x] - f.reference[x],
        W = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
      let P = W ? W[B] : 0;
      (!P || !(await (d.isElement == null ? void 0 : d.isElement(W)))) &&
        (P = h.floating[B] || f.floating[_]);
      const et = X / 2 - L / 2,
        tt = P / 2 - R[_] / 2 - 1,
        ut = En(y[Y], tt),
        mt = En(y[G], tt),
        rt = ut,
        ot = P - R[_] - mt,
        ct = P / 2 - R[_] / 2 + et,
        I = Os(rt, ct, ot),
        O =
          !g.arrow &&
          zi(s) != null &&
          ct !== I &&
          f.reference[_] / 2 - (ct < rt ? ut : mt) - R[_] / 2 < 0,
        $ = O ? (ct < rt ? ct - rt : ct - ot) : 0;
      return {
        [x]: T[x] + $,
        data: {
          [x]: I,
          centerOffset: ct - I - $,
          ...(O && { alignmentOffset: $ }),
        },
        reset: O,
      };
    },
  }),
  MS = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "flip",
        options: l,
        async fn(i) {
          var o, r;
          const {
              placement: s,
              middlewareData: f,
              rects: d,
              initialPlacement: h,
              platform: g,
              elements: p,
            } = i,
            {
              mainAxis: b = !0,
              crossAxis: y = !0,
              fallbackPlacements: T,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: _ = "none",
              flipAlignment: R = !0,
              ...M
            } = ba(l, i);
          if ((o = f.arrow) != null && o.alignmentOffset) return {};
          const Y = Rn(s),
            G = Fn(h),
            B = Rn(h) === h,
            X = await (g.isRTL == null ? void 0 : g.isRTL(p.floating)),
            L = T || (B || !R ? [hu(h)] : TS(h)),
            W = _ !== "none";
          !T && W && L.push(...CS(h, R, _, X));
          const P = [h, ...L],
            et = await qv(i, M),
            tt = [];
          let ut = ((r = f.flip) == null ? void 0 : r.overflows) || [];
          if ((b && tt.push(et[Y]), y)) {
            const I = RS(s, d, X);
            tt.push(et[I[0]], et[I[1]]);
          }
          if (
            ((ut = [...ut, { placement: s, overflows: tt }]),
            !tt.every((I) => I <= 0))
          ) {
            var mt, rt;
            const I = (((mt = f.flip) == null ? void 0 : mt.index) || 0) + 1,
              O = P[I];
            if (O) {
              var ot;
              const q = y === "alignment" ? G !== Fn(O) : !1,
                K = ((ot = ut[0]) == null ? void 0 : ot.overflows[0]) > 0;
              if (!q || K)
                return {
                  data: { index: I, overflows: ut },
                  reset: { placement: O },
                };
            }
            let $ =
              (rt = ut
                .filter((q) => q.overflows[0] <= 0)
                .sort((q, K) => q.overflows[1] - K.overflows[1])[0]) == null
                ? void 0
                : rt.placement;
            if (!$)
              switch (x) {
                case "bestFit": {
                  var ct;
                  const q =
                    (ct = ut
                      .filter((K) => {
                        if (W) {
                          const S = Fn(K.placement);
                          return S === G || S === "y";
                        }
                        return !0;
                      })
                      .map((K) => [
                        K.placement,
                        K.overflows
                          .filter((S) => S > 0)
                          .reduce((S, N) => S + N, 0),
                      ])
                      .sort((K, S) => K[1] - S[1])[0]) == null
                      ? void 0
                      : ct[0];
                  q && ($ = q);
                  break;
                }
                case "initialPlacement":
                  $ = h;
                  break;
              }
            if (s !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Gv(l) {
  const i = En(...l.map((f) => f.left)),
    o = En(...l.map((f) => f.top)),
    r = Fe(...l.map((f) => f.right)),
    s = Fe(...l.map((f) => f.bottom));
  return { x: i, y: o, width: r - i, height: s - o };
}
function zS(l) {
  const i = l.slice().sort((s, f) => s.y - f.y),
    o = [];
  let r = null;
  for (let s = 0; s < i.length; s++) {
    const f = i[s];
    !r || f.y - r.y > r.height / 2 ? o.push([f]) : o[o.length - 1].push(f),
      (r = f);
  }
  return o.map((s) => ga(Gv(s)));
}
const NS = function (l) {
  return (
    l === void 0 && (l = {}),
    {
      name: "inline",
      options: l,
      async fn(i) {
        const {
            placement: o,
            elements: r,
            rects: s,
            platform: f,
            strategy: d,
          } = i,
          { padding: h = 2, x: g, y: p } = ba(l, i),
          b = Array.from(
            (await (f.getClientRects == null
              ? void 0
              : f.getClientRects(r.reference))) || [],
          ),
          y = zS(b),
          T = ga(Gv(b)),
          x = Fs(h);
        function _() {
          if (
            y.length === 2 &&
            y[0].left > y[1].right &&
            g != null &&
            p != null
          )
            return (
              y.find(
                (M) =>
                  g > M.left - x.left &&
                  g < M.right + x.right &&
                  p > M.top - x.top &&
                  p < M.bottom + x.bottom,
              ) || T
            );
          if (y.length >= 2) {
            if (Fn(o) === "y") {
              const ut = y[0],
                mt = y[y.length - 1],
                rt = Rn(o) === "top",
                ot = ut.top,
                ct = mt.bottom,
                I = rt ? ut.left : mt.left,
                O = rt ? ut.right : mt.right,
                $ = O - I,
                q = ct - ot;
              return {
                top: ot,
                bottom: ct,
                left: I,
                right: O,
                width: $,
                height: q,
                x: I,
                y: ot,
              };
            }
            const M = Rn(o) === "left",
              Y = Fe(...y.map((ut) => ut.right)),
              G = En(...y.map((ut) => ut.left)),
              B = y.filter((ut) => (M ? ut.left === G : ut.right === Y)),
              X = B[0].top,
              L = B[B.length - 1].bottom,
              W = G,
              P = Y,
              et = P - W,
              tt = L - X;
            return {
              top: X,
              bottom: L,
              left: W,
              right: P,
              width: et,
              height: tt,
              x: W,
              y: X,
            };
          }
          return T;
        }
        const R = await f.getElementRects({
          reference: { getBoundingClientRect: _ },
          floating: r.floating,
          strategy: d,
        });
        return s.reference.x !== R.reference.x ||
          s.reference.y !== R.reference.y ||
          s.reference.width !== R.reference.width ||
          s.reference.height !== R.reference.height
          ? { reset: { rects: R } }
          : {};
      },
    }
  );
};
async function DS(l, i) {
  const { placement: o, platform: r, elements: s } = l,
    f = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    d = Rn(o),
    h = zi(o),
    g = Fn(o) === "y",
    p = ["left", "top"].includes(d) ? -1 : 1,
    b = f && g ? -1 : 1,
    y = ba(i, l);
  let {
    mainAxis: T,
    crossAxis: x,
    alignmentAxis: _,
  } = typeof y == "number"
    ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis,
      };
  return (
    h && typeof _ == "number" && (x = h === "end" ? _ * -1 : _),
    g ? { x: x * b, y: T * p } : { x: T * p, y: x * b }
  );
}
const jS = function (l) {
    return (
      l === void 0 && (l = 0),
      {
        name: "offset",
        options: l,
        async fn(i) {
          var o, r;
          const { x: s, y: f, placement: d, middlewareData: h } = i,
            g = await DS(i, l);
          return d === ((o = h.offset) == null ? void 0 : o.placement) &&
            (r = h.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + g.x, y: f + g.y, data: { ...g, placement: d } };
        },
      }
    );
  },
  BS = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "shift",
        options: l,
        async fn(i) {
          const { x: o, y: r, placement: s } = i,
            {
              mainAxis: f = !0,
              crossAxis: d = !1,
              limiter: h = {
                fn: (M) => {
                  let { x: Y, y: G } = M;
                  return { x: Y, y: G };
                },
              },
              ...g
            } = ba(l, i),
            p = { x: o, y: r },
            b = await qv(i, g),
            y = Fn(Rn(s)),
            T = Yv(y);
          let x = p[T],
            _ = p[y];
          if (f) {
            const M = T === "y" ? "top" : "left",
              Y = T === "y" ? "bottom" : "right",
              G = x + b[M],
              B = x - b[Y];
            x = Os(G, x, B);
          }
          if (d) {
            const M = y === "y" ? "top" : "left",
              Y = y === "y" ? "bottom" : "right",
              G = _ + b[M],
              B = _ - b[Y];
            _ = Os(G, _, B);
          }
          const R = h.fn({ ...i, [T]: x, [y]: _ });
          return {
            ...R,
            data: { x: R.x - o, y: R.y - r, enabled: { [T]: f, [y]: d } },
          };
        },
      }
    );
  };
function Xv(l) {
  const i = Be(l);
  let o = parseFloat(i.width) || 0,
    r = parseFloat(i.height) || 0;
  const s = Re(l),
    f = s ? l.offsetWidth : o,
    d = s ? l.offsetHeight : r,
    h = mu(o) !== f || mu(r) !== d;
  return h && ((o = f), (r = d)), { width: o, height: r, $: h };
}
function Ps(l) {
  return Bt(l) ? l : l.contextElement;
}
function va(l) {
  const i = Ps(l);
  if (!Re(i)) return Pe(1);
  const o = i.getBoundingClientRect(),
    { width: r, height: s, $: f } = Xv(i);
  let d = (f ? mu(o.width) : o.width) / r,
    h = (f ? mu(o.height) : o.height) / s;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const US = Pe(0);
function Vv(l) {
  const i = me(l);
  return !Tu() || !i.visualViewport
    ? US
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function HS(l, i, o) {
  return i === void 0 && (i = !1), !o || (i && o !== me(l)) ? !1 : i;
}
function xl(l, i, o, r) {
  i === void 0 && (i = !1), o === void 0 && (o = !1);
  const s = l.getBoundingClientRect(),
    f = Ps(l);
  let d = Pe(1);
  i && (r ? Bt(r) && (d = va(r)) : (d = va(l)));
  const h = HS(f, o, r) ? Vv(f) : Pe(0);
  let g = (s.left + h.x) / d.x,
    p = (s.top + h.y) / d.y,
    b = s.width / d.x,
    y = s.height / d.y;
  if (f) {
    const T = me(f),
      x = r && Bt(r) ? me(r) : r;
    let _ = T,
      R = _s(_);
    for (; R && r && x !== _; ) {
      const M = va(R),
        Y = R.getBoundingClientRect(),
        G = Be(R),
        B = Y.left + (R.clientLeft + parseFloat(G.paddingLeft)) * M.x,
        X = Y.top + (R.clientTop + parseFloat(G.paddingTop)) * M.y;
      (g *= M.x),
        (p *= M.y),
        (b *= M.x),
        (y *= M.y),
        (g += B),
        (p += X),
        (_ = me(R)),
        (R = _s(_));
    }
  }
  return ga({ width: b, height: y, x: g, y: p });
}
function Is(l, i) {
  const o = Au(l).scrollLeft;
  return i ? i.left + o : xl(tn(l)).left + o;
}
function Qv(l, i, o) {
  o === void 0 && (o = !1);
  const r = l.getBoundingClientRect(),
    s = r.left + i.scrollLeft - (o ? 0 : Is(l, r)),
    f = r.top + i.scrollTop;
  return { x: s, y: f };
}
function LS(l) {
  let { elements: i, rect: o, offsetParent: r, strategy: s } = l;
  const f = s === "fixed",
    d = tn(r),
    h = i ? Ru(i.floating) : !1;
  if (r === d || (h && f)) return o;
  let g = { scrollLeft: 0, scrollTop: 0 },
    p = Pe(1);
  const b = Pe(0),
    y = Re(r);
  if (
    (y || (!y && !f)) &&
    ((ya(r) !== "body" || Mi(d)) && (g = Au(r)), Re(r))
  ) {
    const x = xl(r);
    (p = va(r)), (b.x = x.x + r.clientLeft), (b.y = x.y + r.clientTop);
  }
  const T = d && !y && !f ? Qv(d, g, !0) : Pe(0);
  return {
    width: o.width * p.x,
    height: o.height * p.y,
    x: o.x * p.x - g.scrollLeft * p.x + b.x + T.x,
    y: o.y * p.y - g.scrollTop * p.y + b.y + T.y,
  };
}
function $S(l) {
  return Array.from(l.getClientRects());
}
function YS(l) {
  const i = tn(l),
    o = Au(l),
    r = l.ownerDocument.body,
    s = Fe(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth),
    f = Fe(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let d = -o.scrollLeft + Is(l);
  const h = -o.scrollTop;
  return (
    Be(r).direction === "rtl" && (d += Fe(i.clientWidth, r.clientWidth) - s),
    { width: s, height: f, x: d, y: h }
  );
}
function qS(l, i) {
  const o = me(l),
    r = tn(l),
    s = o.visualViewport;
  let f = r.clientWidth,
    d = r.clientHeight,
    h = 0,
    g = 0;
  if (s) {
    (f = s.width), (d = s.height);
    const p = Tu();
    (!p || (p && i === "fixed")) && ((h = s.offsetLeft), (g = s.offsetTop));
  }
  return { width: f, height: d, x: h, y: g };
}
function GS(l, i) {
  const o = xl(l, !0, i === "fixed"),
    r = o.top + l.clientTop,
    s = o.left + l.clientLeft,
    f = Re(l) ? va(l) : Pe(1),
    d = l.clientWidth * f.x,
    h = l.clientHeight * f.y,
    g = s * f.x,
    p = r * f.y;
  return { width: d, height: h, x: g, y: p };
}
function qp(l, i, o) {
  let r;
  if (i === "viewport") r = qS(l, o);
  else if (i === "document") r = YS(tn(l));
  else if (Bt(i)) r = GS(i, o);
  else {
    const s = Vv(l);
    r = { x: i.x - s.x, y: i.y - s.y, width: i.width, height: i.height };
  }
  return ga(r);
}
function Zv(l, i) {
  const o = xn(l);
  return o === i || !Bt(o) || Pn(o)
    ? !1
    : Be(o).position === "fixed" || Zv(o, i);
}
function XS(l, i) {
  const o = i.get(l);
  if (o) return o;
  let r = Sn(l, [], !1).filter((h) => Bt(h) && ya(h) !== "body"),
    s = null;
  const f = Be(l).position === "fixed";
  let d = f ? xn(l) : l;
  for (; Bt(d) && !Pn(d); ) {
    const h = Be(d),
      g = Ks(d);
    !g && h.position === "fixed" && (s = null),
      (
        f
          ? !g && !s
          : (!g &&
              h.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Mi(d) && !g && Zv(l, d))
      )
        ? (r = r.filter((b) => b !== d))
        : (s = h),
      (d = xn(d));
  }
  return i.set(l, r), r;
}
function VS(l) {
  let { element: i, boundary: o, rootBoundary: r, strategy: s } = l;
  const d = [
      ...(o === "clippingAncestors"
        ? Ru(i)
          ? []
          : XS(i, this._c)
        : [].concat(o)),
      r,
    ],
    h = d[0],
    g = d.reduce(
      (p, b) => {
        const y = qp(i, b, s);
        return (
          (p.top = Fe(y.top, p.top)),
          (p.right = En(y.right, p.right)),
          (p.bottom = En(y.bottom, p.bottom)),
          (p.left = Fe(y.left, p.left)),
          p
        );
      },
      qp(i, h, s),
    );
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top,
  };
}
function QS(l) {
  const { width: i, height: o } = Xv(l);
  return { width: i, height: o };
}
function ZS(l, i, o) {
  const r = Re(i),
    s = tn(i),
    f = o === "fixed",
    d = xl(l, !0, f, i);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const g = Pe(0);
  function p() {
    g.x = Is(s);
  }
  if (r || (!r && !f))
    if (((ya(i) !== "body" || Mi(s)) && (h = Au(i)), r)) {
      const x = xl(i, !0, f, i);
      (g.x = x.x + i.clientLeft), (g.y = x.y + i.clientTop);
    } else s && p();
  f && !r && s && p();
  const b = s && !r && !f ? Qv(s, h) : Pe(0),
    y = d.left + h.scrollLeft - g.x - b.x,
    T = d.top + h.scrollTop - g.y - b.y;
  return { x: y, y: T, width: d.width, height: d.height };
}
function ds(l) {
  return Be(l).position === "static";
}
function Gp(l, i) {
  if (!Re(l) || Be(l).position === "fixed") return null;
  if (i) return i(l);
  let o = l.offsetParent;
  return tn(l) === o && (o = o.ownerDocument.body), o;
}
function kv(l, i) {
  const o = me(l);
  if (Ru(l)) return o;
  if (!Re(l)) {
    let s = xn(l);
    for (; s && !Pn(s); ) {
      if (Bt(s) && !ds(s)) return s;
      s = xn(s);
    }
    return o;
  }
  let r = Gp(l, i);
  for (; r && fS(r) && ds(r); ) r = Gp(r, i);
  return r && Pn(r) && ds(r) && !Ks(r) ? o : r || dS(l) || o;
}
const kS = async function (l) {
  const i = this.getOffsetParent || kv,
    o = this.getDimensions,
    r = await o(l.floating);
  return {
    reference: ZS(l.reference, await i(l.floating), l.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function KS(l) {
  return Be(l).direction === "rtl";
}
const JS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: LS,
  getDocumentElement: tn,
  getClippingRect: VS,
  getOffsetParent: kv,
  getElementRects: kS,
  getClientRects: $S,
  getDimensions: QS,
  getScale: va,
  isElement: Bt,
  isRTL: KS,
};
function Kv(l, i) {
  return (
    l.x === i.x && l.y === i.y && l.width === i.width && l.height === i.height
  );
}
function WS(l, i) {
  let o = null,
    r;
  const s = tn(l);
  function f() {
    var h;
    clearTimeout(r), (h = o) == null || h.disconnect(), (o = null);
  }
  function d(h, g) {
    h === void 0 && (h = !1), g === void 0 && (g = 1), f();
    const p = l.getBoundingClientRect(),
      { left: b, top: y, width: T, height: x } = p;
    if ((h || i(), !T || !x)) return;
    const _ = lu(y),
      R = lu(s.clientWidth - (b + T)),
      M = lu(s.clientHeight - (y + x)),
      Y = lu(b),
      B = {
        rootMargin: -_ + "px " + -R + "px " + -M + "px " + -Y + "px",
        threshold: Fe(0, En(1, g)) || 1,
      };
    let X = !0;
    function L(W) {
      const P = W[0].intersectionRatio;
      if (P !== g) {
        if (!X) return d();
        P
          ? d(!1, P)
          : (r = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      P === 1 && !Kv(p, l.getBoundingClientRect()) && d(), (X = !1);
    }
    try {
      o = new IntersectionObserver(L, { ...B, root: s.ownerDocument });
    } catch {
      o = new IntersectionObserver(L, B);
    }
    o.observe(l);
  }
  return d(!0), f;
}
function FS(l, i, o, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: f = !0,
      elementResize: d = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: g = !1,
    } = r,
    p = Ps(l),
    b = s || f ? [...(p ? Sn(p) : []), ...Sn(i)] : [];
  b.forEach((Y) => {
    s && Y.addEventListener("scroll", o, { passive: !0 }),
      f && Y.addEventListener("resize", o);
  });
  const y = p && h ? WS(p, o) : null;
  let T = -1,
    x = null;
  d &&
    ((x = new ResizeObserver((Y) => {
      let [G] = Y;
      G &&
        G.target === p &&
        x &&
        (x.unobserve(i),
        cancelAnimationFrame(T),
        (T = requestAnimationFrame(() => {
          var B;
          (B = x) == null || B.observe(i);
        }))),
        o();
    })),
    p && !g && x.observe(p),
    x.observe(i));
  let _,
    R = g ? xl(l) : null;
  g && M();
  function M() {
    const Y = xl(l);
    R && !Kv(R, Y) && o(), (R = Y), (_ = requestAnimationFrame(M));
  }
  return (
    o(),
    () => {
      var Y;
      b.forEach((G) => {
        s && G.removeEventListener("scroll", o),
          f && G.removeEventListener("resize", o);
      }),
        y == null || y(),
        (Y = x) == null || Y.disconnect(),
        (x = null),
        g && cancelAnimationFrame(_);
    }
  );
}
const PS = jS,
  IS = BS,
  t2 = MS,
  Xp = OS,
  e2 = NS,
  n2 = (l, i, o) => {
    const r = new Map(),
      s = { platform: JS, ...o },
      f = { ...s.platform, _c: r };
    return wS(l, i, { ...s, platform: f });
  };
var uu = typeof document < "u" ? A.useLayoutEffect : A.useEffect;
function pu(l, i) {
  if (l === i) return !0;
  if (typeof l != typeof i) return !1;
  if (typeof l == "function" && l.toString() === i.toString()) return !0;
  let o, r, s;
  if (l && i && typeof l == "object") {
    if (Array.isArray(l)) {
      if (((o = l.length), o !== i.length)) return !1;
      for (r = o; r-- !== 0; ) if (!pu(l[r], i[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(l)), (o = s.length), o !== Object.keys(i).length))
      return !1;
    for (r = o; r-- !== 0; ) if (!{}.hasOwnProperty.call(i, s[r])) return !1;
    for (r = o; r-- !== 0; ) {
      const f = s[r];
      if (!(f === "_owner" && l.$$typeof) && !pu(l[f], i[f])) return !1;
    }
    return !0;
  }
  return l !== l && i !== i;
}
function Jv(l) {
  return typeof window > "u"
    ? 1
    : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vp(l, i) {
  const o = Jv(l);
  return Math.round(i * o) / o;
}
function ms(l) {
  const i = A.useRef(l);
  return (
    uu(() => {
      i.current = l;
    }),
    i
  );
}
function l2(l) {
  l === void 0 && (l = {});
  const {
      placement: i = "bottom",
      strategy: o = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: f, floating: d } = {},
      transform: h = !0,
      whileElementsMounted: g,
      open: p,
    } = l,
    [b, y] = A.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [T, x] = A.useState(r);
  pu(T, r) || x(r);
  const [_, R] = A.useState(null),
    [M, Y] = A.useState(null),
    G = A.useCallback((q) => {
      q !== W.current && ((W.current = q), R(q));
    }, []),
    B = A.useCallback((q) => {
      q !== P.current && ((P.current = q), Y(q));
    }, []),
    X = f || _,
    L = d || M,
    W = A.useRef(null),
    P = A.useRef(null),
    et = A.useRef(b),
    tt = g != null,
    ut = ms(g),
    mt = ms(s),
    rt = ms(p),
    ot = A.useCallback(() => {
      if (!W.current || !P.current) return;
      const q = { placement: i, strategy: o, middleware: T };
      mt.current && (q.platform = mt.current),
        n2(W.current, P.current, q).then((K) => {
          const S = { ...K, isPositioned: rt.current !== !1 };
          ct.current &&
            !pu(et.current, S) &&
            ((et.current = S),
            ks.flushSync(() => {
              y(S);
            }));
        });
    }, [T, i, o, mt, rt]);
  uu(() => {
    p === !1 &&
      et.current.isPositioned &&
      ((et.current.isPositioned = !1), y((q) => ({ ...q, isPositioned: !1 })));
  }, [p]);
  const ct = A.useRef(!1);
  uu(
    () => (
      (ct.current = !0),
      () => {
        ct.current = !1;
      }
    ),
    [],
  ),
    uu(() => {
      if ((X && (W.current = X), L && (P.current = L), X && L)) {
        if (ut.current) return ut.current(X, L, ot);
        ot();
      }
    }, [X, L, ot, ut, tt]);
  const I = A.useMemo(
      () => ({ reference: W, floating: P, setReference: G, setFloating: B }),
      [G, B],
    ),
    O = A.useMemo(() => ({ reference: X, floating: L }), [X, L]),
    $ = A.useMemo(() => {
      const q = { position: o, left: 0, top: 0 };
      if (!O.floating) return q;
      const K = Vp(O.floating, b.x),
        S = Vp(O.floating, b.y);
      return h
        ? {
            ...q,
            transform: "translate(" + K + "px, " + S + "px)",
            ...(Jv(O.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: K, top: S };
    }, [o, h, O.floating, b.x, b.y]);
  return A.useMemo(
    () => ({ ...b, update: ot, refs: I, elements: O, floatingStyles: $ }),
    [b, ot, I, O, $],
  );
}
const a2 = (l) => {
    function i(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: l,
      fn(o) {
        const { element: r, padding: s } = typeof l == "function" ? l(o) : l;
        return r && i(r)
          ? r.current != null
            ? Xp({ element: r.current, padding: s }).fn(o)
            : {}
          : r
            ? Xp({ element: r, padding: s }).fn(o)
            : {};
      },
    };
  },
  i2 = (l, i) => ({ ...PS(l), options: [l, i] }),
  Wv = (l, i) => ({ ...IS(l), options: [l, i] }),
  Qp = (l, i) => ({ ...t2(l), options: [l, i] }),
  hs = (l, i) => ({ ...e2(l), options: [l, i] }),
  r2 = (l, i) => ({ ...a2(l), options: [l, i] }),
  Fv = { ...Fy },
  u2 = Fv.useInsertionEffect,
  o2 = u2 || ((l) => l());
function yn(l) {
  const i = A.useRef(() => {});
  return (
    o2(() => {
      i.current = l;
    }),
    A.useCallback(function () {
      for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
        r[s] = arguments[s];
      return i.current == null ? void 0 : i.current(...r);
    }, [])
  );
}
var Ie = typeof document < "u" ? A.useLayoutEffect : A.useEffect;
let Zp = !1,
  c2 = 0;
const kp = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + c2++;
function s2() {
  const [l, i] = A.useState(() => (Zp ? kp() : void 0));
  return (
    Ie(() => {
      l == null && i(kp());
    }, []),
    A.useEffect(() => {
      Zp = !0;
    }, []),
    l
  );
}
const f2 = Fv.useId,
  Pv = f2 || s2;
function d2() {
  const l = new Map();
  return {
    emit(i, o) {
      var r;
      (r = l.get(i)) == null || r.forEach((s) => s(o));
    },
    on(i, o) {
      l.set(i, [...(l.get(i) || []), o]);
    },
    off(i, o) {
      var r;
      l.set(
        i,
        ((r = l.get(i)) == null ? void 0 : r.filter((s) => s !== o)) || [],
      );
    },
  };
}
const m2 = A.createContext(null),
  h2 = A.createContext(null),
  tf = () => {
    var l;
    return ((l = A.useContext(m2)) == null ? void 0 : l.id) || null;
  },
  ef = () => A.useContext(h2);
function nf(l) {
  return "data-floating-ui-" + l;
}
function ps(l) {
  const i = A.useRef(l);
  return (
    Ie(() => {
      i.current = l;
    }),
    i
  );
}
const Kp = nf("safe-polygon");
function ou(l, i, o) {
  return o && !ws(o) ? 0 : typeof l == "number" ? l : l == null ? void 0 : l[i];
}
function p2(l, i) {
  i === void 0 && (i = {});
  const { open: o, onOpenChange: r, dataRef: s, events: f, elements: d } = l,
    {
      enabled: h = !0,
      delay: g = 0,
      handleClose: p = null,
      mouseOnly: b = !1,
      restMs: y = 0,
      move: T = !0,
    } = i,
    x = ef(),
    _ = tf(),
    R = ps(p),
    M = ps(g),
    Y = ps(o),
    G = A.useRef(),
    B = A.useRef(-1),
    X = A.useRef(),
    L = A.useRef(-1),
    W = A.useRef(!0),
    P = A.useRef(!1),
    et = A.useRef(() => {}),
    tt = A.useRef(!1),
    ut = A.useCallback(() => {
      var $;
      const q = ($ = s.current.openEvent) == null ? void 0 : $.type;
      return (q == null ? void 0 : q.includes("mouse")) && q !== "mousedown";
    }, [s]);
  A.useEffect(() => {
    if (!h) return;
    function $(q) {
      let { open: K } = q;
      K ||
        (clearTimeout(B.current),
        clearTimeout(L.current),
        (W.current = !0),
        (tt.current = !1));
    }
    return (
      f.on("openchange", $),
      () => {
        f.off("openchange", $);
      }
    );
  }, [h, f]),
    A.useEffect(() => {
      if (!h || !R.current || !o) return;
      function $(K) {
        ut() && r(!1, K, "hover");
      }
      const q = Sl(d.floating).documentElement;
      return (
        q.addEventListener("mouseleave", $),
        () => {
          q.removeEventListener("mouseleave", $);
        }
      );
    }, [d.floating, o, r, h, R, ut]);
  const mt = A.useCallback(
      function ($, q, K) {
        q === void 0 && (q = !0), K === void 0 && (K = "hover");
        const S = ou(M.current, "close", G.current);
        S && !X.current
          ? (clearTimeout(B.current),
            (B.current = window.setTimeout(() => r(!1, $, K), S)))
          : q && (clearTimeout(B.current), r(!1, $, K));
      },
      [M, r],
    ),
    rt = yn(() => {
      et.current(), (X.current = void 0);
    }),
    ot = yn(() => {
      if (P.current) {
        const $ = Sl(d.floating).body;
        ($.style.pointerEvents = ""), $.removeAttribute(Kp), (P.current = !1);
      }
    }),
    ct = yn(() =>
      s.current.openEvent
        ? ["click", "mousedown"].includes(s.current.openEvent.type)
        : !1,
    );
  A.useEffect(() => {
    if (!h) return;
    function $(N) {
      if (
        (clearTimeout(B.current),
        (W.current = !1),
        (b && !ws(G.current)) || (y > 0 && !ou(M.current, "open")))
      )
        return;
      const J = ou(M.current, "open", G.current);
      J
        ? (B.current = window.setTimeout(() => {
            Y.current || r(!0, N, "hover");
          }, J))
        : o || r(!0, N, "hover");
    }
    function q(N) {
      if (ct()) return;
      et.current();
      const J = Sl(d.floating);
      if (
        (clearTimeout(L.current),
        (tt.current = !1),
        R.current && s.current.floatingContext)
      ) {
        o || clearTimeout(B.current),
          (X.current = R.current({
            ...s.current.floatingContext,
            tree: x,
            x: N.clientX,
            y: N.clientY,
            onClose() {
              ot(), rt(), ct() || mt(N, !0, "safe-polygon");
            },
          }));
        const lt = X.current;
        J.addEventListener("mousemove", lt),
          (et.current = () => {
            J.removeEventListener("mousemove", lt);
          });
        return;
      }
      (G.current === "touch" ? !_i(d.floating, N.relatedTarget) : !0) && mt(N);
    }
    function K(N) {
      ct() ||
        (s.current.floatingContext &&
          (R.current == null ||
            R.current({
              ...s.current.floatingContext,
              tree: x,
              x: N.clientX,
              y: N.clientY,
              onClose() {
                ot(), rt(), ct() || mt(N);
              },
            })(N)));
    }
    if (Bt(d.domReference)) {
      var S;
      const N = d.domReference;
      return (
        o && N.addEventListener("mouseleave", K),
        (S = d.floating) == null || S.addEventListener("mouseleave", K),
        T && N.addEventListener("mousemove", $, { once: !0 }),
        N.addEventListener("mouseenter", $),
        N.addEventListener("mouseleave", q),
        () => {
          var J;
          o && N.removeEventListener("mouseleave", K),
            (J = d.floating) == null || J.removeEventListener("mouseleave", K),
            T && N.removeEventListener("mousemove", $),
            N.removeEventListener("mouseenter", $),
            N.removeEventListener("mouseleave", q);
        }
      );
    }
  }, [d, h, l, b, y, T, mt, rt, ot, r, o, Y, x, M, R, s, ct]),
    Ie(() => {
      var $;
      if (
        h &&
        o &&
        ($ = R.current) != null &&
        $.__options.blockPointerEvents &&
        ut()
      ) {
        P.current = !0;
        const K = d.floating;
        if (Bt(d.domReference) && K) {
          var q;
          const S = Sl(d.floating).body;
          S.setAttribute(Kp, "");
          const N = d.domReference,
            J =
              x == null ||
              (q = x.nodesRef.current.find((F) => F.id === _)) == null ||
              (q = q.context) == null
                ? void 0
                : q.elements.floating;
          return (
            J && (J.style.pointerEvents = ""),
            (S.style.pointerEvents = "none"),
            (N.style.pointerEvents = "auto"),
            (K.style.pointerEvents = "auto"),
            () => {
              (S.style.pointerEvents = ""),
                (N.style.pointerEvents = ""),
                (K.style.pointerEvents = "");
            }
          );
        }
      }
    }, [h, o, _, d, x, R, ut]),
    Ie(() => {
      o || ((G.current = void 0), (tt.current = !1), rt(), ot());
    }, [o, rt, ot]),
    A.useEffect(
      () => () => {
        rt(), clearTimeout(B.current), clearTimeout(L.current), ot();
      },
      [h, d.domReference, rt, ot],
    );
  const I = A.useMemo(() => {
      function $(q) {
        G.current = q.pointerType;
      }
      return {
        onPointerDown: $,
        onPointerEnter: $,
        onMouseMove(q) {
          const { nativeEvent: K } = q;
          function S() {
            !W.current && !Y.current && r(!0, K, "hover");
          }
          (b && !ws(G.current)) ||
            o ||
            y === 0 ||
            (tt.current && q.movementX ** 2 + q.movementY ** 2 < 2) ||
            (clearTimeout(L.current),
            G.current === "touch"
              ? S()
              : ((tt.current = !0), (L.current = window.setTimeout(S, y))));
        },
      };
    }, [b, r, o, Y, y]),
    O = A.useMemo(
      () => ({
        onMouseEnter() {
          clearTimeout(B.current);
        },
        onMouseLeave($) {
          ct() || mt($.nativeEvent, !1);
        },
      }),
      [mt, ct],
    );
  return A.useMemo(() => (h ? { reference: I, floating: O } : {}), [h, I, O]);
}
const zs = () => {},
  Iv = A.createContext({
    delay: 0,
    initialDelay: 0,
    timeoutMs: 0,
    currentId: null,
    setCurrentId: zs,
    setState: zs,
    isInstantPhase: !1,
  }),
  v2 = () => A.useContext(Iv);
function g2(l) {
  const { children: i, delay: o, timeoutMs: r = 0 } = l,
    [s, f] = A.useReducer((g, p) => ({ ...g, ...p }), {
      delay: o,
      timeoutMs: r,
      initialDelay: o,
      currentId: null,
      isInstantPhase: !1,
    }),
    d = A.useRef(null),
    h = A.useCallback((g) => {
      f({ currentId: g });
    }, []);
  return (
    Ie(() => {
      s.currentId
        ? d.current === null
          ? (d.current = s.currentId)
          : s.isInstantPhase || f({ isInstantPhase: !0 })
        : (s.isInstantPhase && f({ isInstantPhase: !1 }), (d.current = null));
    }, [s.currentId, s.isInstantPhase]),
    A.createElement(
      Iv.Provider,
      {
        value: A.useMemo(
          () => ({ ...s, setState: f, setCurrentId: h }),
          [s, h],
        ),
      },
      i,
    )
  );
}
function y2(l, i) {
  i === void 0 && (i = {});
  const { open: o, onOpenChange: r, floatingId: s } = l,
    { id: f, enabled: d = !0 } = i,
    h = f ?? s,
    g = v2(),
    {
      currentId: p,
      setCurrentId: b,
      initialDelay: y,
      setState: T,
      timeoutMs: x,
    } = g;
  return (
    Ie(() => {
      d &&
        p &&
        (T({ delay: { open: 1, close: ou(y, "close") } }), p !== h && r(!1));
    }, [d, h, r, T, p, y]),
    Ie(() => {
      function _() {
        r(!1), T({ delay: y, currentId: null });
      }
      if (d && p && !o && p === h) {
        if (x) {
          const R = window.setTimeout(_, x);
          return () => {
            clearTimeout(R);
          };
        }
        _();
      }
    }, [d, o, T, p, h, r, y, x]),
    Ie(() => {
      d && (b === zs || !o || b(h));
    }, [d, o, b, h]),
    g
  );
}
function vs(l, i) {
  let o = l.filter((s) => {
      var f;
      return s.parentId === i && ((f = s.context) == null ? void 0 : f.open);
    }),
    r = o;
  for (; r.length; )
    (r = l.filter((s) => {
      var f;
      return (f = r) == null
        ? void 0
        : f.some((d) => {
            var h;
            return (
              s.parentId === d.id && ((h = s.context) == null ? void 0 : h.open)
            );
          });
    })),
      (o = o.concat(r));
  return o;
}
const b2 = "data-floating-ui-focusable",
  S2 = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick",
  },
  x2 = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture",
  },
  Jp = (l) => {
    var i, o;
    return {
      escapeKey:
        typeof l == "boolean"
          ? l
          : (i = l == null ? void 0 : l.escapeKey) != null
            ? i
            : !1,
      outsidePress:
        typeof l == "boolean"
          ? l
          : (o = l == null ? void 0 : l.outsidePress) != null
            ? o
            : !0,
    };
  };
function E2(l, i) {
  i === void 0 && (i = {});
  const { open: o, onOpenChange: r, elements: s, dataRef: f } = l,
    {
      enabled: d = !0,
      escapeKey: h = !0,
      outsidePress: g = !0,
      outsidePressEvent: p = "pointerdown",
      referencePress: b = !1,
      referencePressEvent: y = "pointerdown",
      ancestorScroll: T = !1,
      bubbles: x,
      capture: _,
    } = i,
    R = ef(),
    M = yn(typeof g == "function" ? g : () => !1),
    Y = typeof g == "function" ? M : g,
    G = A.useRef(!1),
    B = A.useRef(!1),
    { escapeKey: X, outsidePress: L } = Jp(x),
    { escapeKey: W, outsidePress: P } = Jp(_),
    et = A.useRef(!1),
    tt = yn((I) => {
      var O;
      if (!o || !d || !h || I.key !== "Escape" || et.current) return;
      const $ = (O = f.current.floatingContext) == null ? void 0 : O.nodeId,
        q = R ? vs(R.nodesRef.current, $) : [];
      if (!X && (I.stopPropagation(), q.length > 0)) {
        let K = !0;
        if (
          (q.forEach((S) => {
            var N;
            if (
              (N = S.context) != null &&
              N.open &&
              !S.context.dataRef.current.__escapeKeyBubbles
            ) {
              K = !1;
              return;
            }
          }),
          !K)
        )
          return;
      }
      r(!1, gS(I) ? I.nativeEvent : I, "escape-key");
    }),
    ut = yn((I) => {
      var O;
      const $ = () => {
        var q;
        tt(I), (q = ha(I)) == null || q.removeEventListener("keydown", $);
      };
      (O = ha(I)) == null || O.addEventListener("keydown", $);
    }),
    mt = yn((I) => {
      var O;
      const $ = G.current;
      G.current = !1;
      const q = B.current;
      if (
        ((B.current = !1),
        (p === "click" && q) || $ || (typeof Y == "function" && !Y(I)))
      )
        return;
      const K = ha(I),
        S = "[" + nf("inert") + "]",
        N = Sl(s.floating).querySelectorAll(S);
      let J = Bt(K) ? K : null;
      for (; J && !Pn(J); ) {
        const nt = xn(J);
        if (Pn(nt) || !Bt(nt)) break;
        J = nt;
      }
      if (
        N.length &&
        Bt(K) &&
        !yS(K) &&
        !_i(K, s.floating) &&
        Array.from(N).every((nt) => !_i(J, nt))
      )
        return;
      if (Re(K) && ct) {
        const nt = K.clientWidth > 0 && K.scrollWidth > K.clientWidth,
          Tt = K.clientHeight > 0 && K.scrollHeight > K.clientHeight;
        let xt = Tt && I.offsetX > K.clientWidth;
        if (
          (Tt &&
            Be(K).direction === "rtl" &&
            (xt = I.offsetX <= K.offsetWidth - K.clientWidth),
          xt || (nt && I.offsetY > K.clientHeight))
        )
          return;
      }
      const F = (O = f.current.floatingContext) == null ? void 0 : O.nodeId,
        lt =
          R &&
          vs(R.nodesRef.current, F).some((nt) => {
            var Tt;
            return fs(
              I,
              (Tt = nt.context) == null ? void 0 : Tt.elements.floating,
            );
          });
      if (fs(I, s.floating) || fs(I, s.domReference) || lt) return;
      const ht = R ? vs(R.nodesRef.current, F) : [];
      if (ht.length > 0) {
        let nt = !0;
        if (
          (ht.forEach((Tt) => {
            var xt;
            if (
              (xt = Tt.context) != null &&
              xt.open &&
              !Tt.context.dataRef.current.__outsidePressBubbles
            ) {
              nt = !1;
              return;
            }
          }),
          !nt)
        )
          return;
      }
      r(!1, I, "outside-press");
    }),
    rt = yn((I) => {
      var O;
      const $ = () => {
        var q;
        mt(I), (q = ha(I)) == null || q.removeEventListener(p, $);
      };
      (O = ha(I)) == null || O.addEventListener(p, $);
    });
  A.useEffect(() => {
    if (!o || !d) return;
    (f.current.__escapeKeyBubbles = X), (f.current.__outsidePressBubbles = L);
    let I = -1;
    function O(N) {
      r(!1, N, "ancestor-scroll");
    }
    function $() {
      window.clearTimeout(I), (et.current = !0);
    }
    function q() {
      I = window.setTimeout(
        () => {
          et.current = !1;
        },
        Tu() ? 5 : 0,
      );
    }
    const K = Sl(s.floating);
    h &&
      (K.addEventListener("keydown", W ? ut : tt, W),
      K.addEventListener("compositionstart", $),
      K.addEventListener("compositionend", q)),
      Y && K.addEventListener(p, P ? rt : mt, P);
    let S = [];
    return (
      T &&
        (Bt(s.domReference) && (S = Sn(s.domReference)),
        Bt(s.floating) && (S = S.concat(Sn(s.floating))),
        !Bt(s.reference) &&
          s.reference &&
          s.reference.contextElement &&
          (S = S.concat(Sn(s.reference.contextElement)))),
      (S = S.filter((N) => {
        var J;
        return N !== ((J = K.defaultView) == null ? void 0 : J.visualViewport);
      })),
      S.forEach((N) => {
        N.addEventListener("scroll", O, { passive: !0 });
      }),
      () => {
        h &&
          (K.removeEventListener("keydown", W ? ut : tt, W),
          K.removeEventListener("compositionstart", $),
          K.removeEventListener("compositionend", q)),
          Y && K.removeEventListener(p, P ? rt : mt, P),
          S.forEach((N) => {
            N.removeEventListener("scroll", O);
          }),
          window.clearTimeout(I);
      }
    );
  }, [f, s, h, Y, p, o, r, T, d, X, L, tt, W, ut, mt, P, rt]),
    A.useEffect(() => {
      G.current = !1;
    }, [Y, p]);
  const ot = A.useMemo(
      () => ({
        onKeyDown: tt,
        [S2[y]]: (I) => {
          b && r(!1, I.nativeEvent, "reference-press");
        },
      }),
      [tt, r, b, y],
    ),
    ct = A.useMemo(
      () => ({
        onKeyDown: tt,
        onMouseDown() {
          B.current = !0;
        },
        onMouseUp() {
          B.current = !0;
        },
        [x2[p]]: () => {
          G.current = !0;
        },
      }),
      [tt, p],
    );
  return A.useMemo(
    () => (d ? { reference: ot, floating: ct } : {}),
    [d, ot, ct],
  );
}
function R2(l) {
  const { open: i = !1, onOpenChange: o, elements: r } = l,
    s = Pv(),
    f = A.useRef({}),
    [d] = A.useState(() => d2()),
    h = tf() != null,
    [g, p] = A.useState(r.reference),
    b = yn((x, _, R) => {
      (f.current.openEvent = x ? _ : void 0),
        d.emit("openchange", { open: x, event: _, reason: R, nested: h }),
        o == null || o(x, _, R);
    }),
    y = A.useMemo(() => ({ setPositionReference: p }), []),
    T = A.useMemo(
      () => ({
        reference: g || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [g, r.reference, r.floating],
    );
  return A.useMemo(
    () => ({
      dataRef: f,
      open: i,
      onOpenChange: b,
      elements: T,
      events: d,
      floatingId: s,
      refs: y,
    }),
    [i, b, T, d, s, y],
  );
}
function t0(l) {
  l === void 0 && (l = {});
  const { nodeId: i } = l,
    o = R2({
      ...l,
      elements: { reference: null, floating: null, ...l.elements },
    }),
    r = l.rootContext || o,
    s = r.elements,
    [f, d] = A.useState(null),
    [h, g] = A.useState(null),
    b = (s == null ? void 0 : s.domReference) || f,
    y = A.useRef(null),
    T = ef();
  Ie(() => {
    b && (y.current = b);
  }, [b]);
  const x = l2({ ...l, elements: { ...s, ...(h && { reference: h }) } }),
    _ = A.useCallback(
      (B) => {
        const X = Bt(B)
          ? {
              getBoundingClientRect: () => B.getBoundingClientRect(),
              contextElement: B,
            }
          : B;
        g(X), x.refs.setReference(X);
      },
      [x.refs],
    ),
    R = A.useCallback(
      (B) => {
        (Bt(B) || B === null) && ((y.current = B), d(B)),
          (Bt(x.refs.reference.current) ||
            x.refs.reference.current === null ||
            (B !== null && !Bt(B))) &&
            x.refs.setReference(B);
      },
      [x.refs],
    ),
    M = A.useMemo(
      () => ({
        ...x.refs,
        setReference: R,
        setPositionReference: _,
        domReference: y,
      }),
      [x.refs, R, _],
    ),
    Y = A.useMemo(() => ({ ...x.elements, domReference: b }), [x.elements, b]),
    G = A.useMemo(
      () => ({ ...x, ...r, refs: M, elements: Y, nodeId: i }),
      [x, M, Y, i, r],
    );
  return (
    Ie(() => {
      r.dataRef.current.floatingContext = G;
      const B = T == null ? void 0 : T.nodesRef.current.find((X) => X.id === i);
      B && (B.context = G);
    }),
    A.useMemo(() => ({ ...x, context: G, refs: M, elements: Y }), [x, M, Y, G])
  );
}
function T2(l, i) {
  i === void 0 && (i = {});
  const { open: o, onOpenChange: r, events: s, dataRef: f, elements: d } = l,
    { enabled: h = !0, visibleOnly: g = !0 } = i,
    p = A.useRef(!1),
    b = A.useRef(),
    y = A.useRef(!0);
  A.useEffect(() => {
    if (!h) return;
    const x = me(d.domReference);
    function _() {
      !o &&
        Re(d.domReference) &&
        d.domReference === Lp(Sl(d.domReference)) &&
        (p.current = !0);
    }
    function R() {
      y.current = !0;
    }
    return (
      x.addEventListener("blur", _),
      x.addEventListener("keydown", R, !0),
      () => {
        x.removeEventListener("blur", _),
          x.removeEventListener("keydown", R, !0);
      }
    );
  }, [d.domReference, o, h]),
    A.useEffect(() => {
      if (!h) return;
      function x(_) {
        let { reason: R } = _;
        (R === "reference-press" || R === "escape-key") && (p.current = !0);
      }
      return (
        s.on("openchange", x),
        () => {
          s.off("openchange", x);
        }
      );
    }, [s, h]),
    A.useEffect(
      () => () => {
        clearTimeout(b.current);
      },
      [],
    );
  const T = A.useMemo(
    () => ({
      onPointerDown(x) {
        mS(x.nativeEvent) || (y.current = !1);
      },
      onMouseLeave() {
        p.current = !1;
      },
      onFocus(x) {
        if (p.current) return;
        const _ = ha(x.nativeEvent);
        if (g && Bt(_))
          try {
            if (hS() && pS()) throw Error();
            if (!_.matches(":focus-visible")) return;
          } catch {
            if (!y.current && !SS(_)) return;
          }
        r(!0, x.nativeEvent, "focus");
      },
      onBlur(x) {
        p.current = !1;
        const _ = x.relatedTarget,
          R = x.nativeEvent,
          M =
            Bt(_) &&
            _.hasAttribute(nf("focus-guard")) &&
            _.getAttribute("data-type") === "outside";
        b.current = window.setTimeout(() => {
          var Y;
          const G = Lp(
            d.domReference ? d.domReference.ownerDocument : document,
          );
          (!_ && G === d.domReference) ||
            _i(
              (Y = f.current.floatingContext) == null
                ? void 0
                : Y.refs.floating.current,
              G,
            ) ||
            _i(d.domReference, G) ||
            M ||
            r(!1, R, "focus");
        });
      },
    }),
    [f, d.domReference, r, g],
  );
  return A.useMemo(() => (h ? { reference: T } : {}), [h, T]);
}
const Wp = "active",
  Fp = "selected";
function gs(l, i, o) {
  const r = new Map(),
    s = o === "item";
  let f = l;
  if (s && l) {
    const { [Wp]: d, [Fp]: h, ...g } = l;
    f = g;
  }
  return {
    ...(o === "floating" && { tabIndex: -1, [b2]: "" }),
    ...f,
    ...i
      .map((d) => {
        const h = d ? d[o] : null;
        return typeof h == "function" ? (l ? h(l) : null) : h;
      })
      .concat(l)
      .reduce(
        (d, h) => (
          h &&
            Object.entries(h).forEach((g) => {
              let [p, b] = g;
              if (!(s && [Wp, Fp].includes(p)))
                if (p.indexOf("on") === 0) {
                  if ((r.has(p) || r.set(p, []), typeof b == "function")) {
                    var y;
                    (y = r.get(p)) == null || y.push(b),
                      (d[p] = function () {
                        for (
                          var T, x = arguments.length, _ = new Array(x), R = 0;
                          R < x;
                          R++
                        )
                          _[R] = arguments[R];
                        return (T = r.get(p)) == null
                          ? void 0
                          : T.map((M) => M(..._)).find((M) => M !== void 0);
                      });
                  }
                } else d[p] = b;
            }),
          d
        ),
        {},
      ),
  };
}
function A2(l) {
  l === void 0 && (l = []);
  const i = l.map((h) => (h == null ? void 0 : h.reference)),
    o = l.map((h) => (h == null ? void 0 : h.floating)),
    r = l.map((h) => (h == null ? void 0 : h.item)),
    s = A.useCallback((h) => gs(h, l, "reference"), i),
    f = A.useCallback((h) => gs(h, l, "floating"), o),
    d = A.useCallback((h) => gs(h, l, "item"), r);
  return A.useMemo(
    () => ({ getReferenceProps: s, getFloatingProps: f, getItemProps: d }),
    [s, f, d],
  );
}
const C2 = new Map([
  ["select", "listbox"],
  ["combobox", "listbox"],
  ["label", !1],
]);
function _2(l, i) {
  var o;
  i === void 0 && (i = {});
  const { open: r, floatingId: s } = l,
    { enabled: f = !0, role: d = "dialog" } = i,
    h = (o = C2.get(d)) != null ? o : d,
    g = Pv(),
    b = tf() != null,
    y = A.useMemo(
      () =>
        h === "tooltip" || d === "label"
          ? {
              ["aria-" + (d === "label" ? "labelledby" : "describedby")]: r
                ? s
                : void 0,
            }
          : {
              "aria-expanded": r ? "true" : "false",
              "aria-haspopup": h === "alertdialog" ? "dialog" : h,
              "aria-controls": r ? s : void 0,
              ...(h === "listbox" && { role: "combobox" }),
              ...(h === "menu" && { id: g }),
              ...(h === "menu" && b && { role: "menuitem" }),
              ...(d === "select" && { "aria-autocomplete": "none" }),
              ...(d === "combobox" && { "aria-autocomplete": "list" }),
            },
      [h, s, b, r, g, d],
    ),
    T = A.useMemo(() => {
      const _ = { id: s, ...(h && { role: h }) };
      return h === "tooltip" || d === "label"
        ? _
        : { ..._, ...(h === "menu" && { "aria-labelledby": g }) };
    }, [h, s, g, d]),
    x = A.useCallback(
      (_) => {
        let { active: R, selected: M } = _;
        const Y = { role: "option", ...(R && { id: s + "-option" }) };
        switch (d) {
          case "select":
            return { ...Y, "aria-selected": R && M };
          case "combobox":
            return { ...Y, ...(R && { "aria-selected": !0 }) };
        }
        return {};
      },
      [s, d],
    );
  return A.useMemo(
    () => (f ? { reference: y, floating: T, item: x } : {}),
    [f, y, T, x],
  );
}
var e0 = { root: "m_87cf2631" };
const w2 = { __staticSelector: "UnstyledButton" },
  Ni = In((l, i) => {
    const o = gt("UnstyledButton", w2, l),
      {
        className: r,
        component: s = "button",
        __staticSelector: f,
        unstyled: d,
        classNames: h,
        styles: g,
        style: p,
        ...b
      } = o,
      y = Ut({
        name: f,
        props: o,
        classes: e0,
        className: r,
        style: p,
        classNames: h,
        styles: g,
        unstyled: d,
      });
    return j.jsx(Rt, {
      ...y("root", { focusable: !0 }),
      component: s,
      ref: i,
      type: s === "button" ? "button" : void 0,
      ...b,
    });
  });
Ni.classes = e0;
Ni.displayName = "@mantine/core/UnstyledButton";
var n0 = { root: "m_1b7284a3" };
const O2 = {},
  M2 = (l, { radius: i, shadow: o }) => ({
    root: {
      "--paper-radius": i === void 0 ? void 0 : Ge(i),
      "--paper-shadow": Qb(o),
    },
  }),
  Ai = In((l, i) => {
    const o = gt("Paper", O2, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        withBorder: g,
        vars: p,
        radius: b,
        shadow: y,
        variant: T,
        mod: x,
        ..._
      } = o,
      R = Ut({
        name: "Paper",
        props: o,
        classes: n0,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: p,
        varsResolver: M2,
      });
    return j.jsx(Rt, {
      ref: i,
      mod: [{ "data-with-border": g }, x],
      ...R("root"),
      variant: T,
      ..._,
    });
  });
Ai.classes = n0;
Ai.displayName = "@mantine/core/Paper";
function z2(l, i) {
  if (l === "rtl" && (i.includes("right") || i.includes("left"))) {
    const [o, r] = i.split("-"),
      s = o === "right" ? "left" : "right";
    return r === void 0 ? s : `${s}-${r}`;
  }
  return i;
}
function Pp(l, i, o, r) {
  return l === "center" || r === "center"
    ? { top: i }
    : l === "end"
      ? { bottom: o }
      : l === "start"
        ? { top: o }
        : {};
}
function Ip(l, i, o, r, s) {
  return l === "center" || r === "center"
    ? { left: i }
    : l === "end"
      ? { [s === "ltr" ? "right" : "left"]: o }
      : l === "start"
        ? { [s === "ltr" ? "left" : "right"]: o }
        : {};
}
const N2 = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function D2({
  position: l,
  arrowSize: i,
  arrowOffset: o,
  arrowRadius: r,
  arrowPosition: s,
  arrowX: f,
  arrowY: d,
  dir: h,
}) {
  const [g, p = "center"] = l.split("-"),
    b = {
      width: i,
      height: i,
      transform: "rotate(45deg)",
      position: "absolute",
      [N2[g]]: r,
    },
    y = -i / 2;
  return g === "left"
    ? {
        ...b,
        ...Pp(p, d, o, s),
        right: y,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      }
    : g === "right"
      ? {
          ...b,
          ...Pp(p, d, o, s),
          left: y,
          borderRightColor: "transparent",
          borderTopColor: "transparent",
          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
        }
      : g === "top"
        ? {
            ...b,
            ...Ip(p, f, o, s, h),
            bottom: y,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
          }
        : g === "bottom"
          ? {
              ...b,
              ...Ip(p, f, o, s, h),
              top: y,
              borderBottomColor: "transparent",
              borderRightColor: "transparent",
              clipPath: "polygon(0 100%, 0 0, 100% 0)",
            }
          : {};
}
const l0 = A.forwardRef(
  (
    {
      position: l,
      arrowSize: i,
      arrowOffset: o,
      arrowRadius: r,
      arrowPosition: s,
      visible: f,
      arrowX: d,
      arrowY: h,
      style: g,
      ...p
    },
    b,
  ) => {
    const { dir: y } = Bv();
    return f
      ? j.jsx("div", {
          ...p,
          ref: b,
          style: {
            ...g,
            ...D2({
              position: l,
              arrowSize: i,
              arrowOffset: o,
              arrowRadius: r,
              arrowPosition: s,
              dir: y,
              arrowX: d,
              arrowY: h,
            }),
          },
        })
      : null;
  },
);
l0.displayName = "@mantine/core/FloatingArrow";
function ys(l) {
  const i = document.createElement("div");
  return (
    i.setAttribute("data-portal", "true"),
    typeof l.className == "string" &&
      i.classList.add(...l.className.split(" ").filter(Boolean)),
    typeof l.style == "object" && Object.assign(i.style, l.style),
    typeof l.id == "string" && i.setAttribute("id", l.id),
    i
  );
}
function j2({ target: l, reuseTargetNode: i, ...o }) {
  if (l) return typeof l == "string" ? document.querySelector(l) || ys(o) : l;
  if (i) {
    const r = document.querySelector("[data-mantine-shared-portal-node]");
    if (r) return r;
    const s = ys(o);
    return (
      s.setAttribute("data-mantine-shared-portal-node", "true"),
      document.body.appendChild(s),
      s
    );
  }
  return ys(o);
}
const B2 = { reuseTargetNode: !0 },
  a0 = Dt((l, i) => {
    const {
        children: o,
        target: r,
        reuseTargetNode: s,
        ...f
      } = gt("Portal", B2, l),
      [d, h] = A.useState(!1),
      g = A.useRef(null);
    return (
      Oi(
        () => (
          h(!0),
          (g.current = j2({ target: r, reuseTargetNode: s, ...f })),
          Es(i, g.current),
          !r && !s && g.current && document.body.appendChild(g.current),
          () => {
            !r && !s && g.current && document.body.removeChild(g.current);
          }
        ),
        [r],
      ),
      !d || !g.current
        ? null
        : ks.createPortal(j.jsx(j.Fragment, { children: o }), g.current)
    );
  });
a0.displayName = "@mantine/core/Portal";
const lf = Dt(({ withinPortal: l = !0, children: i, ...o }, r) =>
  Ev() === "test" || !l
    ? j.jsx(j.Fragment, { children: i })
    : j.jsx(a0, { ref: r, ...o, children: i }),
);
lf.displayName = "@mantine/core/OptionalPortal";
const Ti = (l) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${l === "bottom" ? 10 : -10}px)`,
    },
    transitionProperty: "transform, opacity",
  }),
  au = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-30px)" },
      transitionProperty: "opacity, transform",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: { ...Ti("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...Ti("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...Ti("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...Ti("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...Ti("top"), common: { transformOrigin: "top right" } },
  },
  tv = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function U2({ transition: l, state: i, duration: o, timingFunction: r }) {
  const s = {
    WebkitBackfaceVisibility: "hidden",
    willChange: "transform, opacity",
    transitionDuration: `${o}ms`,
    transitionTimingFunction: r,
  };
  return typeof l == "string"
    ? l in au
      ? {
          transitionProperty: au[l].transitionProperty,
          ...s,
          ...au[l].common,
          ...au[l][tv[i]],
        }
      : {}
    : {
        transitionProperty: l.transitionProperty,
        ...s,
        ...l.common,
        ...l[tv[i]],
      };
}
function H2({
  duration: l,
  exitDuration: i,
  timingFunction: o,
  mounted: r,
  onEnter: s,
  onExit: f,
  onEntered: d,
  onExited: h,
  enterDelay: g,
  exitDelay: p,
}) {
  const b = Xe(),
    y = t1(),
    T = b.respectReducedMotion ? y : !1,
    [x, _] = A.useState(T ? 0 : l),
    [R, M] = A.useState(r ? "entered" : "exited"),
    Y = A.useRef(-1),
    G = A.useRef(-1),
    B = A.useRef(-1);
  function X() {
    window.clearTimeout(Y.current),
      window.clearTimeout(G.current),
      cancelAnimationFrame(B.current);
  }
  const L = (P) => {
      X();
      const et = P ? s : f,
        tt = P ? d : h,
        ut = T ? 0 : P ? l : i;
      _(ut),
        ut === 0
          ? (typeof et == "function" && et(),
            typeof tt == "function" && tt(),
            M(P ? "entered" : "exited"))
          : (B.current = requestAnimationFrame(() => {
              sS.flushSync(() => {
                M(P ? "pre-entering" : "pre-exiting");
              }),
                (B.current = requestAnimationFrame(() => {
                  typeof et == "function" && et(),
                    M(P ? "entering" : "exiting"),
                    (Y.current = window.setTimeout(() => {
                      typeof tt == "function" && tt(),
                        M(P ? "entered" : "exited");
                    }, ut));
                }));
            }));
    },
    W = (P) => {
      if ((X(), typeof (P ? g : p) != "number")) {
        L(P);
        return;
      }
      G.current = window.setTimeout(
        () => {
          L(P);
        },
        P ? g : p,
      );
    };
  return (
    fu(() => {
      W(r);
    }, [r]),
    A.useEffect(
      () => () => {
        X();
      },
      [],
    ),
    {
      transitionDuration: x,
      transitionStatus: R,
      transitionTimingFunction: o || "ease",
    }
  );
}
function i0({
  keepMounted: l,
  transition: i = "fade",
  duration: o = 250,
  exitDuration: r = o,
  mounted: s,
  children: f,
  timingFunction: d = "ease",
  onExit: h,
  onEntered: g,
  onEnter: p,
  onExited: b,
  enterDelay: y,
  exitDelay: T,
}) {
  const x = Ev(),
    {
      transitionDuration: _,
      transitionStatus: R,
      transitionTimingFunction: M,
    } = H2({
      mounted: s,
      exitDuration: r,
      duration: o,
      timingFunction: d,
      onExit: h,
      onEntered: g,
      onEnter: p,
      onExited: b,
      enterDelay: y,
      exitDelay: T,
    });
  return _ === 0 || x === "test"
    ? s
      ? j.jsx(j.Fragment, { children: f({}) })
      : l
        ? f({ display: "none" })
        : null
    : R === "exited"
      ? l
        ? f({ display: "none" })
        : null
      : j.jsx(j.Fragment, {
          children: f(
            U2({ transition: i, duration: _, state: R, timingFunction: M }),
          ),
        });
}
i0.displayName = "@mantine/core/Transition";
function L2({ opened: l, floating: i, position: o, positionDependencies: r }) {
  const [s, f] = A.useState(0);
  A.useEffect(() => {
    if (i.refs.reference.current && i.refs.floating.current && l)
      return FS(i.refs.reference.current, i.refs.floating.current, i.update);
  }, [i.refs.reference.current, i.refs.floating.current, l, s, o]),
    fu(() => {
      i.update();
    }, r),
    fu(() => {
      f((d) => d + 1);
    }, [l]);
}
const r0 = A.forwardRef(
  ({ size: l = "var(--cb-icon-size, 70%)", style: i, ...o }, r) =>
    j.jsx("svg", {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...i, width: l, height: l },
      ref: r,
      ...o,
      children: j.jsx("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    }),
);
r0.displayName = "@mantine/core/CloseIcon";
var u0 = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const $2 = { variant: "subtle" },
  Y2 = (l, { size: i, radius: o, iconSize: r }) => ({
    root: {
      "--cb-size": ne(i, "cb-size"),
      "--cb-radius": o === void 0 ? void 0 : Ge(o),
      "--cb-icon-size": Z(r),
    },
  }),
  Cu = In((l, i) => {
    const o = gt("CloseButton", $2, l),
      {
        iconSize: r,
        children: s,
        vars: f,
        radius: d,
        className: h,
        classNames: g,
        style: p,
        styles: b,
        unstyled: y,
        "data-disabled": T,
        disabled: x,
        variant: _,
        icon: R,
        mod: M,
        __staticSelector: Y,
        ...G
      } = o,
      B = Ut({
        name: Y || "CloseButton",
        props: o,
        className: h,
        style: p,
        classes: u0,
        classNames: g,
        styles: b,
        unstyled: y,
        vars: f,
        varsResolver: Y2,
      });
    return j.jsxs(Ni, {
      ref: i,
      ...G,
      unstyled: y,
      variant: _,
      disabled: x,
      mod: [{ disabled: x || T }, M],
      ...B("root", { variant: _, active: !x && !T }),
      children: [R || j.jsx(r0, {}), s],
    });
  });
Cu.classes = u0;
Cu.displayName = "@mantine/core/CloseButton";
function q2(l) {
  return A.Children.toArray(l).filter(Boolean);
}
var o0 = { root: "m_4081bf90" };
const G2 = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  X2 = (
    l,
    { grow: i, preventGrowOverflow: o, gap: r, align: s, justify: f, wrap: d },
    { childWidth: h },
  ) => ({
    root: {
      "--group-child-width": i && o ? h : void 0,
      "--group-gap": Hs(r),
      "--group-align": s,
      "--group-justify": f,
      "--group-wrap": d,
    },
  }),
  af = Dt((l, i) => {
    const o = gt("Group", G2, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        children: g,
        gap: p,
        align: b,
        justify: y,
        wrap: T,
        grow: x,
        preventGrowOverflow: _,
        vars: R,
        variant: M,
        __size: Y,
        mod: G,
        ...B
      } = o,
      X = q2(g),
      L = X.length,
      W = Hs(p ?? "md"),
      et = { childWidth: `calc(${100 / L}% - (${W} - ${W} / ${L}))` },
      tt = Ut({
        name: "Group",
        props: o,
        stylesCtx: et,
        className: s,
        style: f,
        classes: o0,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: R,
        varsResolver: X2,
      });
    return j.jsx(Rt, {
      ...tt("root"),
      ref: i,
      variant: M,
      mod: [{ grow: x }, G],
      size: Y,
      ...B,
      children: X,
    });
  });
af.classes = o0;
af.displayName = "@mantine/core/Group";
const [V2, Q2] = Bs({ size: "sm" }),
  Z2 = {},
  c0 = Dt((l, i) => {
    const o = gt("InputClearButton", Z2, l),
      { size: r, variant: s, vars: f, classNames: d, styles: h, ...g } = o,
      p = Q2(),
      { resolvedClassNames: b, resolvedStyles: y } = O1({
        classNames: d,
        styles: h,
        props: o,
      });
    return j.jsx(Cu, {
      variant: s || "transparent",
      ref: i,
      size: r || (p == null ? void 0 : p.size) || "sm",
      classNames: b,
      styles: y,
      __staticSelector: "InputClearButton",
      ...g,
    });
  });
c0.displayName = "@mantine/core/InputClearButton";
const [k2, Di] = Bs({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var He = {
  wrapper: "m_6c018570",
  input: "m_8fb7ebe7",
  section: "m_82577fc2",
  placeholder: "m_88bacfd0",
  root: "m_46b77525",
  label: "m_8fdc1311",
  required: "m_78a94662",
  error: "m_8f816625",
  description: "m_fe47ce59",
};
const ev = {},
  K2 = (l, { size: i }) => ({
    description: {
      "--input-description-size":
        i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
  }),
  _u = Dt((l, i) => {
    const o = gt("InputDescription", ev, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        size: p,
        __staticSelector: b,
        __inheritStyles: y = !0,
        variant: T,
        ...x
      } = gt("InputDescription", ev, o),
      _ = Di(),
      R = Ut({
        name: ["InputWrapper", b],
        props: o,
        classes: He,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "description",
        vars: g,
        varsResolver: K2,
      }),
      M = (y && (_ == null ? void 0 : _.getStyles)) || R;
    return j.jsx(Rt, {
      component: "p",
      ref: i,
      variant: T,
      size: p,
      ...M(
        "description",
        _ != null && _.getStyles ? { className: s, style: f } : void 0,
      ),
      ...x,
    });
  });
_u.classes = He;
_u.displayName = "@mantine/core/InputDescription";
const J2 = {},
  W2 = (l, { size: i }) => ({
    error: {
      "--input-error-size": i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
  }),
  wu = Dt((l, i) => {
    const o = gt("InputError", J2, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        size: p,
        __staticSelector: b,
        __inheritStyles: y = !0,
        variant: T,
        ...x
      } = o,
      _ = Ut({
        name: ["InputWrapper", b],
        props: o,
        classes: He,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "error",
        vars: g,
        varsResolver: W2,
      }),
      R = Di(),
      M = (y && (R == null ? void 0 : R.getStyles)) || _;
    return j.jsx(Rt, {
      component: "p",
      ref: i,
      variant: T,
      size: p,
      ...M(
        "error",
        R != null && R.getStyles ? { className: s, style: f } : void 0,
      ),
      ...x,
    });
  });
wu.classes = He;
wu.displayName = "@mantine/core/InputError";
const nv = { labelElement: "label" },
  F2 = (l, { size: i }) => ({
    label: { "--input-label-size": bn(i), "--input-asterisk-color": void 0 },
  }),
  Ou = Dt((l, i) => {
    const o = gt("InputLabel", nv, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        labelElement: p,
        size: b,
        required: y,
        htmlFor: T,
        onMouseDown: x,
        children: _,
        __staticSelector: R,
        variant: M,
        mod: Y,
        ...G
      } = gt("InputLabel", nv, o),
      B = Ut({
        name: ["InputWrapper", R],
        props: o,
        classes: He,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "label",
        vars: g,
        varsResolver: F2,
      }),
      X = Di(),
      L = (X == null ? void 0 : X.getStyles) || B;
    return j.jsxs(Rt, {
      ...L(
        "label",
        X != null && X.getStyles ? { className: s, style: f } : void 0,
      ),
      component: p,
      variant: M,
      size: b,
      ref: i,
      htmlFor: p === "label" ? T : void 0,
      mod: [{ required: y }, Y],
      onMouseDown: (W) => {
        x == null || x(W),
          !W.defaultPrevented && W.detail > 1 && W.preventDefault();
      },
      ...G,
      children: [
        _,
        y &&
          j.jsx("span", {
            ...L("required"),
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
Ou.classes = He;
Ou.displayName = "@mantine/core/InputLabel";
const lv = {},
  rf = Dt((l, i) => {
    const o = gt("InputPlaceholder", lv, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        __staticSelector: p,
        variant: b,
        error: y,
        mod: T,
        ...x
      } = gt("InputPlaceholder", lv, o),
      _ = Ut({
        name: ["InputPlaceholder", p],
        props: o,
        classes: He,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "placeholder",
      });
    return j.jsx(Rt, {
      ..._("placeholder"),
      mod: [{ error: !!y }, T],
      component: "span",
      variant: b,
      ref: i,
      ...x,
    });
  });
rf.classes = He;
rf.displayName = "@mantine/core/InputPlaceholder";
function P2(l, { hasDescription: i, hasError: o }) {
  const r = l.findIndex((g) => g === "input"),
    s = l.slice(0, r),
    f = l.slice(r + 1),
    d = (i && s.includes("description")) || (o && s.includes("error"));
  return {
    offsetBottom:
      (i && f.includes("description")) || (o && f.includes("error")),
    offsetTop: d,
  };
}
const I2 = {
    labelElement: "label",
    inputContainer: (l) => l,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  tx = (l, { size: i }) => ({
    label: { "--input-label-size": bn(i), "--input-asterisk-color": void 0 },
    error: {
      "--input-error-size": i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
    description: {
      "--input-description-size":
        i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
  }),
  uf = Dt((l, i) => {
    const o = gt("InputWrapper", I2, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        size: p,
        variant: b,
        __staticSelector: y,
        inputContainer: T,
        inputWrapperOrder: x,
        label: _,
        error: R,
        description: M,
        labelProps: Y,
        descriptionProps: G,
        errorProps: B,
        labelElement: X,
        children: L,
        withAsterisk: W,
        id: P,
        required: et,
        __stylesApiProps: tt,
        mod: ut,
        ...mt
      } = o,
      rt = Ut({
        name: ["InputWrapper", y],
        props: tt || o,
        classes: He,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: tx,
      }),
      ot = { size: p, variant: b, __staticSelector: y },
      ct = Su(P),
      I = typeof W == "boolean" ? W : et,
      O = (B == null ? void 0 : B.id) || `${ct}-error`,
      $ = (G == null ? void 0 : G.id) || `${ct}-description`,
      q = ct,
      K = !!R && typeof R != "boolean",
      S = !!M,
      N = `${K ? O : ""} ${S ? $ : ""}`,
      J = N.trim().length > 0 ? N.trim() : void 0,
      F = (Y == null ? void 0 : Y.id) || `${ct}-label`,
      lt =
        _ &&
        j.jsx(
          Ou,
          {
            labelElement: X,
            id: F,
            htmlFor: q,
            required: I,
            ...ot,
            ...Y,
            children: _,
          },
          "label",
        ),
      ht =
        S &&
        j.jsx(
          _u,
          {
            ...G,
            ...ot,
            size: (G == null ? void 0 : G.size) || ot.size,
            id: (G == null ? void 0 : G.id) || $,
            children: M,
          },
          "description",
        ),
      nt = j.jsx(A.Fragment, { children: T(L) }, "input"),
      Tt =
        K &&
        A.createElement(
          wu,
          {
            ...B,
            ...ot,
            size: (B == null ? void 0 : B.size) || ot.size,
            key: "error",
            id: (B == null ? void 0 : B.id) || O,
          },
          R,
        ),
      xt = x.map((le) => {
        switch (le) {
          case "label":
            return lt;
          case "input":
            return nt;
          case "description":
            return ht;
          case "error":
            return Tt;
          default:
            return null;
        }
      });
    return j.jsx(k2, {
      value: {
        getStyles: rt,
        describedBy: J,
        inputId: q,
        labelId: F,
        ...P2(x, { hasDescription: S, hasError: K }),
      },
      children: j.jsx(Rt, {
        ref: i,
        variant: b,
        size: p,
        mod: [{ error: !!R }, ut],
        ...rt("root"),
        ...mt,
        children: xt,
      }),
    });
  });
uf.classes = He;
uf.displayName = "@mantine/core/InputWrapper";
const ex = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
  },
  nx = (l, i, o) => ({
    wrapper: {
      "--input-margin-top": o.offsetTop
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-margin-bottom": o.offsetBottom
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-height": ne(i.size, "input-height"),
      "--input-fz": bn(i.size),
      "--input-radius": i.radius === void 0 ? void 0 : Ge(i.radius),
      "--input-left-section-width":
        i.leftSectionWidth !== void 0 ? Z(i.leftSectionWidth) : void 0,
      "--input-right-section-width":
        i.rightSectionWidth !== void 0 ? Z(i.rightSectionWidth) : void 0,
      "--input-padding-y": i.multiline ? ne(i.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": i.leftSectionPointerEvents,
      "--input-right-section-pointer-events": i.rightSectionPointerEvents,
    },
  }),
  Ue = In((l, i) => {
    const o = gt("Input", ex, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        required: g,
        __staticSelector: p,
        __stylesApiProps: b,
        size: y,
        wrapperProps: T,
        error: x,
        disabled: _,
        leftSection: R,
        leftSectionProps: M,
        leftSectionWidth: Y,
        rightSection: G,
        rightSectionProps: B,
        rightSectionWidth: X,
        rightSectionPointerEvents: L,
        leftSectionPointerEvents: W,
        variant: P,
        vars: et,
        pointer: tt,
        multiline: ut,
        radius: mt,
        id: rt,
        withAria: ot,
        withErrorStyles: ct,
        mod: I,
        inputSize: O,
        __clearSection: $,
        __clearable: q,
        __defaultRightSection: K,
        ...S
      } = o,
      { styleProps: N, rest: J } = Qs(S),
      F = Di(),
      lt = {
        offsetBottom: F == null ? void 0 : F.offsetBottom,
        offsetTop: F == null ? void 0 : F.offsetTop,
      },
      ht = Ut({
        name: ["Input", p],
        props: b || o,
        classes: He,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        stylesCtx: lt,
        rootSelector: "wrapper",
        vars: et,
        varsResolver: nx,
      }),
      nt = ot
        ? {
            required: g,
            disabled: _,
            "aria-invalid": !!x,
            "aria-describedby": F == null ? void 0 : F.describedBy,
            id: (F == null ? void 0 : F.inputId) || rt,
          }
        : {},
      Tt = G || (q && $) || K;
    return j.jsx(V2, {
      value: { size: y || "sm" },
      children: j.jsxs(Rt, {
        ...ht("wrapper"),
        ...N,
        ...T,
        mod: [
          {
            error: !!x && ct,
            pointer: tt,
            disabled: _,
            multiline: ut,
            "data-with-right-section": !!Tt,
            "data-with-left-section": !!R,
          },
          I,
        ],
        variant: P,
        size: y,
        children: [
          R &&
            j.jsx("div", {
              ...M,
              "data-position": "left",
              ...ht("section", {
                className: M == null ? void 0 : M.className,
                style: M == null ? void 0 : M.style,
              }),
              children: R,
            }),
          j.jsx(Rt, {
            component: "input",
            ...J,
            ...nt,
            ref: i,
            required: g,
            mod: { disabled: _, error: !!x && ct },
            variant: P,
            __size: O,
            ...ht("input"),
          }),
          Tt &&
            j.jsx("div", {
              ...B,
              "data-position": "right",
              ...ht("section", {
                className: B == null ? void 0 : B.className,
                style: B == null ? void 0 : B.style,
              }),
              children: Tt,
            }),
        ],
      }),
    });
  });
Ue.classes = He;
Ue.Wrapper = uf;
Ue.Label = Ou;
Ue.Error = wu;
Ue.Description = _u;
Ue.Placeholder = rf;
Ue.ClearButton = c0;
Ue.displayName = "@mantine/core/Input";
const lx = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" },
};
var s0 = { root: "m_8bffd616" };
const ax = {},
  Mu = In((l, i) => {
    const o = gt("Flex", ax, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        gap: p,
        rowGap: b,
        columnGap: y,
        align: T,
        justify: x,
        wrap: _,
        direction: R,
        ...M
      } = o,
      Y = Ut({
        name: "Flex",
        classes: s0,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
      }),
      G = Xe(),
      B = Ov(),
      X = wv({
        styleProps: {
          gap: p,
          rowGap: b,
          columnGap: y,
          align: T,
          justify: x,
          wrap: _,
          direction: R,
        },
        theme: G,
        data: lx,
      });
    return j.jsxs(j.Fragment, {
      children: [
        X.hasResponsiveStyles &&
          j.jsx(Vs, { selector: `.${B}`, styles: X.styles, media: X.media }),
        j.jsx(Rt, {
          ref: i,
          ...Y("root", { className: B, style: bu(X.inlineStyles) }),
          ...M,
        }),
      ],
    });
  });
Mu.classes = s0;
Mu.displayName = "@mantine/core/Flex";
var f0 = {
  root: "m_66836ed3",
  wrapper: "m_a5d60502",
  body: "m_667c2793",
  title: "m_6a03f287",
  label: "m_698f4f23",
  icon: "m_667f2a6a",
  message: "m_7fa78076",
  closeButton: "m_87f54839",
};
const ix = {},
  rx = (l, { radius: i, color: o, variant: r, autoContrast: s }) => {
    const f = l.variantColorResolver({
      color: o || l.primaryColor,
      theme: l,
      variant: r || "light",
      autoContrast: s,
    });
    return {
      root: {
        "--alert-radius": i === void 0 ? void 0 : Ge(i),
        "--alert-bg": o || r ? f.background : void 0,
        "--alert-color": f.color,
        "--alert-bd": o || r ? f.border : void 0,
      },
    };
  },
  zu = Dt((l, i) => {
    const o = gt("Alert", ix, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        radius: p,
        color: b,
        title: y,
        children: T,
        id: x,
        icon: _,
        withCloseButton: R,
        onClose: M,
        closeButtonLabel: Y,
        variant: G,
        autoContrast: B,
        ...X
      } = o,
      L = Ut({
        name: "Alert",
        classes: f0,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: rx,
      }),
      W = Su(x),
      P = (y && `${W}-title`) || void 0,
      et = `${W}-body`;
    return j.jsx(Rt, {
      id: W,
      ...L("root", { variant: G }),
      variant: G,
      ref: i,
      ...X,
      role: "alert",
      "aria-describedby": et,
      "aria-labelledby": P,
      children: j.jsxs("div", {
        ...L("wrapper"),
        children: [
          _ && j.jsx("div", { ...L("icon"), children: _ }),
          j.jsxs("div", {
            ...L("body"),
            children: [
              y &&
                j.jsx("div", {
                  ...L("title"),
                  "data-with-close-button": R || void 0,
                  children: j.jsx("span", {
                    id: P,
                    ...L("label"),
                    children: y,
                  }),
                }),
              T &&
                j.jsx("div", {
                  id: et,
                  ...L("message"),
                  "data-variant": G,
                  children: T,
                }),
            ],
          }),
          R &&
            j.jsx(Cu, {
              ...L("closeButton"),
              onClick: M,
              variant: "transparent",
              size: 16,
              iconSize: 16,
              "aria-label": Y,
              unstyled: h,
            }),
        ],
      }),
    });
  });
zu.classes = f0;
zu.displayName = "@mantine/core/Alert";
var d0 = { root: "m_b6d8b162" };
function ux(l) {
  if (l === "start") return "start";
  if (l === "end" || l) return "end";
}
const ox = { inherit: !1 },
  cx = (l, { variant: i, lineClamp: o, gradient: r, size: s, color: f }) => ({
    root: {
      "--text-fz": bn(s),
      "--text-lh": Vb(s),
      "--text-gradient": i === "gradient" ? Rs(r, l) : void 0,
      "--text-line-clamp": typeof o == "number" ? o.toString() : void 0,
      "--text-color": f ? qe(f, l) : void 0,
    },
  }),
  wi = In((l, i) => {
    const o = gt("Text", ox, l),
      {
        lineClamp: r,
        truncate: s,
        inline: f,
        inherit: d,
        gradient: h,
        span: g,
        __staticSelector: p,
        vars: b,
        className: y,
        style: T,
        classNames: x,
        styles: _,
        unstyled: R,
        variant: M,
        mod: Y,
        size: G,
        ...B
      } = o,
      X = Ut({
        name: ["Text", p],
        props: o,
        classes: d0,
        className: y,
        style: T,
        classNames: x,
        styles: _,
        unstyled: R,
        vars: b,
        varsResolver: cx,
      });
    return j.jsx(Rt, {
      ...X("root", { focusable: !0 }),
      ref: i,
      component: g ? "span" : "p",
      variant: M,
      mod: [
        {
          "data-truncate": ux(s),
          "data-line-clamp": typeof r == "number",
          "data-inline": f,
          "data-inherit": d,
        },
        Y,
      ],
      size: G,
      ...B,
    });
  });
wi.classes = d0;
wi.displayName = "@mantine/core/Text";
const [sx, Sa] = Gb("AppShell was not found in tree");
var tl = {
  root: "m_89ab340",
  navbar: "m_45252eee",
  aside: "m_9cdde9a",
  header: "m_3b16f56b",
  main: "m_8983817",
  footer: "m_3840c879",
  section: "m_6dcfc7c7",
};
const fx = {},
  of = Dt((l, i) => {
    const o = gt("AppShellAside", fx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        withBorder: p,
        zIndex: b,
        mod: y,
        ...T
      } = o,
      x = Sa();
    return x.disabled
      ? null
      : j.jsx(Rt, {
          component: "aside",
          ref: i,
          mod: [{ "with-border": p ?? x.withBorder }, y],
          ...x.getStyles("aside", {
            className: s,
            classNames: r,
            styles: d,
            style: f,
          }),
          ...T,
          __vars: { "--app-shell-aside-z-index": `calc(${b ?? x.zIndex} + 1)` },
        });
  });
of.classes = tl;
of.displayName = "@mantine/core/AppShellAside";
const dx = {},
  cf = Dt((l, i) => {
    var _;
    const o = gt("AppShellFooter", dx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        withBorder: p,
        zIndex: b,
        mod: y,
        ...T
      } = o,
      x = Sa();
    return x.disabled
      ? null
      : j.jsx(Rt, {
          component: "footer",
          ref: i,
          mod: [{ "with-border": p ?? x.withBorder }, y],
          ...x.getStyles("footer", {
            className: El({ [Ds.classNames.zeroRight]: x.offsetScrollbars }, s),
            classNames: r,
            styles: d,
            style: f,
          }),
          ...T,
          __vars: {
            "--app-shell-footer-z-index":
              (_ = b ?? x.zIndex) == null ? void 0 : _.toString(),
          },
        });
  });
cf.classes = tl;
cf.displayName = "@mantine/core/AppShellFooter";
const mx = {},
  sf = Dt((l, i) => {
    var _;
    const o = gt("AppShellHeader", mx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        withBorder: p,
        zIndex: b,
        mod: y,
        ...T
      } = o,
      x = Sa();
    return x.disabled
      ? null
      : j.jsx(Rt, {
          component: "header",
          ref: i,
          mod: [{ "with-border": p ?? x.withBorder }, y],
          ...x.getStyles("header", {
            className: El({ [Ds.classNames.zeroRight]: x.offsetScrollbars }, s),
            classNames: r,
            styles: d,
            style: f,
          }),
          ...T,
          __vars: {
            "--app-shell-header-z-index":
              (_ = b ?? x.zIndex) == null ? void 0 : _.toString(),
          },
        });
  });
sf.classes = tl;
sf.displayName = "@mantine/core/AppShellHeader";
const hx = {},
  ff = Dt((l, i) => {
    const o = gt("AppShellMain", hx, l),
      { classNames: r, className: s, style: f, styles: d, vars: h, ...g } = o,
      p = Sa();
    return j.jsx(Rt, {
      component: "main",
      ref: i,
      ...p.getStyles("main", {
        className: s,
        style: f,
        classNames: r,
        styles: d,
      }),
      ...g,
    });
  });
ff.classes = tl;
ff.displayName = "@mantine/core/AppShellMain";
function ji(l) {
  return typeof l == "object" ? l.base : l;
}
function Bi(l) {
  const i =
    typeof l == "object" &&
    l !== null &&
    typeof l.base < "u" &&
    Object.keys(l).length === 1;
  return typeof l == "number" || typeof l == "string" || i;
}
function Ui(l) {
  return !(
    typeof l != "object" ||
    l === null ||
    (Object.keys(l).length === 1 && "base" in l)
  );
}
function px({
  baseStyles: l,
  minMediaStyles: i,
  maxMediaStyles: o,
  aside: r,
  theme: s,
}) {
  var g, p, b;
  const f = r == null ? void 0 : r.width,
    d = "translateX(var(--app-shell-aside-width))",
    h = "translateX(calc(var(--app-shell-aside-width) * -1))";
  if (
    (r != null &&
      r.breakpoint &&
      !((g = r == null ? void 0 : r.collapsed) != null && g.mobile) &&
      ((o[r == null ? void 0 : r.breakpoint] =
        o[r == null ? void 0 : r.breakpoint] || {}),
      (o[r == null ? void 0 : r.breakpoint]["--app-shell-aside-width"] =
        "100%"),
      (o[r == null ? void 0 : r.breakpoint]["--app-shell-aside-offset"] =
        "0px")),
    Bi(f))
  ) {
    const y = Z(ji(f));
    (l["--app-shell-aside-width"] = y), (l["--app-shell-aside-offset"] = y);
  }
  if (
    (Ui(f) &&
      (typeof f.base < "u" &&
        ((l["--app-shell-aside-width"] = Z(f.base)),
        (l["--app-shell-aside-offset"] = Z(f.base))),
      ee(f).forEach((y) => {
        y !== "base" &&
          ((i[y] = i[y] || {}),
          (i[y]["--app-shell-aside-width"] = Z(f[y])),
          (i[y]["--app-shell-aside-offset"] = Z(f[y])));
      })),
    (p = r == null ? void 0 : r.collapsed) != null && p.desktop)
  ) {
    const y = r.breakpoint;
    (i[y] = i[y] || {}),
      (i[y]["--app-shell-aside-transform"] = d),
      (i[y]["--app-shell-aside-transform-rtl"] = h),
      (i[y]["--app-shell-aside-offset"] = "0px !important");
  }
  if ((b = r == null ? void 0 : r.collapsed) != null && b.mobile) {
    const y = Ls(r.breakpoint, s.breakpoints) - 0.1;
    (o[y] = o[y] || {}),
      (o[y]["--app-shell-aside-width"] = "100%"),
      (o[y]["--app-shell-aside-offset"] = "0px"),
      (o[y]["--app-shell-aside-transform"] = d),
      (o[y]["--app-shell-aside-transform-rtl"] = h);
  }
}
function vx({ baseStyles: l, minMediaStyles: i, footer: o }) {
  const r = o == null ? void 0 : o.height,
    s = "translateY(var(--app-shell-footer-height))",
    f = (o == null ? void 0 : o.offset) ?? !0;
  if (Bi(r)) {
    const d = Z(ji(r));
    (l["--app-shell-footer-height"] = d),
      f && (l["--app-shell-footer-offset"] = d);
  }
  Ui(r) &&
    (typeof r.base < "u" &&
      ((l["--app-shell-footer-height"] = Z(r.base)),
      f && (l["--app-shell-footer-offset"] = Z(r.base))),
    ee(r).forEach((d) => {
      d !== "base" &&
        ((i[d] = i[d] || {}),
        (i[d]["--app-shell-footer-height"] = Z(r[d])),
        f && (i[d]["--app-shell-footer-offset"] = Z(r[d])));
    })),
    o != null &&
      o.collapsed &&
      ((l["--app-shell-footer-transform"] = s),
      (l["--app-shell-footer-offset"] = "0px !important"));
}
function gx({ baseStyles: l, minMediaStyles: i, header: o }) {
  const r = o == null ? void 0 : o.height,
    s = "translateY(calc(var(--app-shell-header-height) * -1))",
    f = (o == null ? void 0 : o.offset) ?? !0;
  if (Bi(r)) {
    const d = Z(ji(r));
    (l["--app-shell-header-height"] = d),
      f && (l["--app-shell-header-offset"] = d);
  }
  Ui(r) &&
    (typeof r.base < "u" &&
      ((l["--app-shell-header-height"] = Z(r.base)),
      f && (l["--app-shell-header-offset"] = Z(r.base))),
    ee(r).forEach((d) => {
      d !== "base" &&
        ((i[d] = i[d] || {}),
        (i[d]["--app-shell-header-height"] = Z(r[d])),
        f && (i[d]["--app-shell-header-offset"] = Z(r[d])));
    })),
    o != null &&
      o.collapsed &&
      ((l["--app-shell-header-transform"] = s),
      (l["--app-shell-header-offset"] = "0px !important"));
}
function yx({
  baseStyles: l,
  minMediaStyles: i,
  maxMediaStyles: o,
  navbar: r,
  theme: s,
}) {
  var g, p, b;
  const f = r == null ? void 0 : r.width,
    d = "translateX(calc(var(--app-shell-navbar-width) * -1))",
    h = "translateX(var(--app-shell-navbar-width))";
  if (
    (r != null &&
      r.breakpoint &&
      !((g = r == null ? void 0 : r.collapsed) != null && g.mobile) &&
      ((o[r == null ? void 0 : r.breakpoint] =
        o[r == null ? void 0 : r.breakpoint] || {}),
      (o[r == null ? void 0 : r.breakpoint]["--app-shell-navbar-width"] =
        "100%"),
      (o[r == null ? void 0 : r.breakpoint]["--app-shell-navbar-offset"] =
        "0px")),
    Bi(f))
  ) {
    const y = Z(ji(f));
    (l["--app-shell-navbar-width"] = y), (l["--app-shell-navbar-offset"] = y);
  }
  if (
    (Ui(f) &&
      (typeof f.base < "u" &&
        ((l["--app-shell-navbar-width"] = Z(f.base)),
        (l["--app-shell-navbar-offset"] = Z(f.base))),
      ee(f).forEach((y) => {
        y !== "base" &&
          ((i[y] = i[y] || {}),
          (i[y]["--app-shell-navbar-width"] = Z(f[y])),
          (i[y]["--app-shell-navbar-offset"] = Z(f[y])));
      })),
    (p = r == null ? void 0 : r.collapsed) != null && p.desktop)
  ) {
    const y = r.breakpoint;
    (i[y] = i[y] || {}),
      (i[y]["--app-shell-navbar-transform"] = d),
      (i[y]["--app-shell-navbar-transform-rtl"] = h),
      (i[y]["--app-shell-navbar-offset"] = "0px !important");
  }
  if ((b = r == null ? void 0 : r.collapsed) != null && b.mobile) {
    const y = Ls(r.breakpoint, s.breakpoints) - 0.1;
    (o[y] = o[y] || {}),
      (o[y]["--app-shell-navbar-width"] = "100%"),
      (o[y]["--app-shell-navbar-offset"] = "0px"),
      (o[y]["--app-shell-navbar-transform"] = d),
      (o[y]["--app-shell-navbar-transform-rtl"] = h);
  }
}
function bs(l) {
  return Number(l) === 0 ? "0px" : Hs(l);
}
function bx({ padding: l, baseStyles: i, minMediaStyles: o }) {
  Bi(l) && (i["--app-shell-padding"] = bs(ji(l))),
    Ui(l) &&
      (l.base && (i["--app-shell-padding"] = bs(l.base)),
      ee(l).forEach((r) => {
        r !== "base" &&
          ((o[r] = o[r] || {}), (o[r]["--app-shell-padding"] = bs(l[r])));
      }));
}
function Sx({
  navbar: l,
  header: i,
  footer: o,
  aside: r,
  padding: s,
  theme: f,
}) {
  const d = {},
    h = {},
    g = {};
  yx({
    baseStyles: g,
    minMediaStyles: d,
    maxMediaStyles: h,
    navbar: l,
    theme: f,
  }),
    px({
      baseStyles: g,
      minMediaStyles: d,
      maxMediaStyles: h,
      aside: r,
      theme: f,
    }),
    gx({ baseStyles: g, minMediaStyles: d, header: i }),
    vx({ baseStyles: g, minMediaStyles: d, footer: o }),
    bx({ baseStyles: g, minMediaStyles: d, padding: s });
  const p = wp(ee(d), f.breakpoints).map((T) => ({
      query: `(min-width: ${su(T.px)})`,
      styles: d[T.value],
    })),
    b = wp(ee(h), f.breakpoints).map((T) => ({
      query: `(max-width: ${su(T.px)})`,
      styles: h[T.value],
    })),
    y = [...p, ...b];
  return { baseStyles: g, media: y };
}
function xx({ navbar: l, header: i, aside: o, footer: r, padding: s }) {
  const f = Xe(),
    d = Tn(),
    { media: h, baseStyles: g } = Sx({
      navbar: l,
      header: i,
      footer: r,
      aside: o,
      padding: s,
      theme: f,
    });
  return j.jsx(Vs, { media: h, styles: g, selector: d.cssVariablesSelector });
}
const Ex = {},
  df = Dt((l, i) => {
    const o = gt("AppShellNavbar", Ex, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        withBorder: p,
        zIndex: b,
        mod: y,
        ...T
      } = o,
      x = Sa();
    return x.disabled
      ? null
      : j.jsx(Rt, {
          component: "nav",
          ref: i,
          mod: [{ "with-border": p ?? x.withBorder }, y],
          ...x.getStyles("navbar", {
            className: s,
            classNames: r,
            styles: d,
            style: f,
          }),
          ...T,
          __vars: {
            "--app-shell-navbar-z-index": `calc(${b ?? x.zIndex} + 1)`,
          },
        });
  });
df.classes = tl;
df.displayName = "@mantine/core/AppShellNavbar";
const Rx = {},
  mf = In((l, i) => {
    const o = gt("AppShellSection", Rx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        vars: h,
        grow: g,
        mod: p,
        ...b
      } = o,
      y = Sa();
    return j.jsx(Rt, {
      ref: i,
      mod: [{ grow: g }, p],
      ...y.getStyles("section", {
        className: s,
        style: f,
        classNames: r,
        styles: d,
      }),
      ...b,
    });
  });
mf.classes = tl;
mf.displayName = "@mantine/core/AppShellSection";
function Tx({ transitionDuration: l, disabled: i }) {
  const [o, r] = A.useState(!0),
    s = A.useRef(-1),
    f = A.useRef(-1);
  return (
    Pb("resize", () => {
      r(!0),
        clearTimeout(s.current),
        (s.current = window.setTimeout(
          () =>
            A.startTransition(() => {
              r(!1);
            }),
          200,
        ));
    }),
    Oi(() => {
      r(!0),
        clearTimeout(f.current),
        (f.current = window.setTimeout(
          () =>
            A.startTransition(() => {
              r(!1);
            }),
          l || 0,
        ));
    }, [i, l]),
    o
  );
}
const Ax = {
    withBorder: !0,
    padding: 0,
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    zIndex: Us("app"),
  },
  Cx = (l, { transitionDuration: i, transitionTimingFunction: o }) => ({
    root: {
      "--app-shell-transition-duration": `${i}ms`,
      "--app-shell-transition-timing-function": o,
    },
  }),
  je = Dt((l, i) => {
    const o = gt("AppShell", Ax, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        navbar: p,
        withBorder: b,
        padding: y,
        transitionDuration: T,
        transitionTimingFunction: x,
        header: _,
        zIndex: R,
        layout: M,
        disabled: Y,
        aside: G,
        footer: B,
        offsetScrollbars: X = M !== "alt",
        mod: L,
        ...W
      } = o,
      P = Ut({
        name: "AppShell",
        classes: tl,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Cx,
      }),
      et = Tx({ disabled: Y, transitionDuration: T });
    return j.jsxs(sx, {
      value: {
        getStyles: P,
        withBorder: b,
        zIndex: R,
        disabled: Y,
        offsetScrollbars: X,
      },
      children: [
        j.jsx(xx, { navbar: p, header: _, aside: G, footer: B, padding: y }),
        j.jsx(Rt, {
          ref: i,
          ...P("root"),
          mod: [{ resizing: et, layout: M, disabled: Y }, L],
          ...W,
        }),
      ],
    });
  });
je.classes = tl;
je.displayName = "@mantine/core/AppShell";
je.Navbar = df;
je.Header = sf;
je.Main = ff;
je.Aside = of;
je.Footer = cf;
je.Section = mf;
var m0 = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc",
};
const _x = m0,
  h0 = A.forwardRef(
    (
      {
        __staticSelector: l,
        __stylesApiProps: i,
        className: o,
        classNames: r,
        styles: s,
        unstyled: f,
        children: d,
        label: h,
        description: g,
        id: p,
        disabled: b,
        error: y,
        size: T,
        labelPosition: x = "left",
        bodyElement: _ = "div",
        labelElement: R = "label",
        variant: M,
        style: Y,
        vars: G,
        mod: B,
        ...X
      },
      L,
    ) => {
      const W = Ut({
        name: l,
        props: i,
        className: o,
        style: Y,
        classes: m0,
        classNames: r,
        styles: s,
        unstyled: f,
      });
      return j.jsx(Rt, {
        ...W("root"),
        ref: L,
        __vars: { "--label-fz": bn(T), "--label-lh": ne(T, "label-lh") },
        mod: [{ "label-position": x }, B],
        variant: M,
        size: T,
        ...X,
        children: j.jsxs(Rt, {
          component: _,
          htmlFor: _ === "label" ? p : void 0,
          ...W("body"),
          children: [
            d,
            j.jsxs("div", {
              ...W("labelWrapper"),
              "data-disabled": b || void 0,
              children: [
                h &&
                  j.jsx(Rt, {
                    component: R,
                    htmlFor: R === "label" ? p : void 0,
                    ...W("label"),
                    "data-disabled": b || void 0,
                    children: h,
                  }),
                g &&
                  j.jsx(Ue.Description, {
                    size: T,
                    __inheritStyles: !1,
                    ...W("description"),
                    children: g,
                  }),
                y &&
                  typeof y != "boolean" &&
                  j.jsx(Ue.Error, {
                    size: T,
                    __inheritStyles: !1,
                    ...W("error"),
                    children: y,
                  }),
              ],
            }),
          ],
        }),
      });
    },
  );
h0.displayName = "@mantine/core/InlineInput";
const p0 = A.createContext(null),
  wx = p0.Provider,
  v0 = () => A.useContext(p0),
  [Ox, Mx] = Bs();
var g0 = { card: "m_26775b0a" };
const zx = { withBorder: !0 },
  Nx = (l, { radius: i }) => ({ card: { "--card-radius": Ge(i) } }),
  hf = Dt((l, i) => {
    const o = gt("CheckboxCard", zx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        checked: p,
        mod: b,
        withBorder: y,
        value: T,
        onClick: x,
        defaultChecked: _,
        onChange: R,
        ...M
      } = o,
      Y = Ut({
        name: "CheckboxCard",
        classes: g0,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Nx,
        rootSelector: "card",
      }),
      G = v0(),
      B = typeof p == "boolean" ? p : G ? G.value.includes(T || "") : void 0,
      [X, L] = yv({ value: B, defaultValue: _, finalValue: !1, onChange: R });
    return j.jsx(Ox, {
      value: { checked: X },
      children: j.jsx(Ni, {
        ref: i,
        mod: [{ "with-border": y, checked: X }, b],
        ...Y("card"),
        ...M,
        role: "checkbox",
        "aria-checked": X,
        onClick: (W) => {
          x == null || x(W), G == null || G.onChange(T || ""), L(!X);
        },
      }),
    });
  });
hf.displayName = "@mantine/core/CheckboxCard";
hf.classes = g0;
function Dx({ children: l, role: i }) {
  const o = Di();
  return o
    ? j.jsx("div", {
        role: i,
        "aria-labelledby": o.labelId,
        "aria-describedby": o.describedBy,
        children: l,
      })
    : j.jsx(j.Fragment, { children: l });
}
const jx = {},
  pf = Dt((l, i) => {
    const {
        value: o,
        defaultValue: r,
        onChange: s,
        size: f,
        wrapperProps: d,
        children: h,
        readOnly: g,
        ...p
      } = gt("CheckboxGroup", jx, l),
      [b, y] = yv({ value: o, defaultValue: r, finalValue: [], onChange: s }),
      T = (x) => {
        const _ = typeof x == "string" ? x : x.currentTarget.value;
        !g && y(b.includes(_) ? b.filter((R) => R !== _) : [...b, _]);
      };
    return j.jsx(wx, {
      value: { value: b, onChange: T, size: f },
      children: j.jsx(Ue.Wrapper, {
        size: f,
        ref: i,
        ...d,
        ...p,
        labelElement: "div",
        __staticSelector: "CheckboxGroup",
        children: j.jsx(Dx, { role: "group", children: h }),
      }),
    });
  });
pf.classes = Ue.Wrapper.classes;
pf.displayName = "@mantine/core/CheckboxGroup";
function Bx({ size: l, style: i, ...o }) {
  const r = l !== void 0 ? { width: Z(l), height: Z(l), ...i } : i;
  return j.jsx("svg", {
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: r,
    "aria-hidden": !0,
    ...o,
    children: j.jsx("path", {
      d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
function y0({ indeterminate: l, ...i }) {
  return l
    ? j.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": !0,
        ...i,
        children: j.jsx("rect", {
          width: "32",
          height: "6",
          fill: "currentColor",
          rx: "3",
        }),
      })
    : j.jsx(Bx, { ...i });
}
var b0 = {
  indicator: "m_5e5256ee",
  icon: "m_1b1c543a",
  "indicator--outline": "m_76e20374",
};
const Ux = { icon: y0 },
  Hx = (
    l,
    { radius: i, color: o, size: r, iconColor: s, variant: f, autoContrast: d },
  ) => {
    const h = Rl({ color: o || l.primaryColor, theme: l }),
      g =
        h.isThemeColor && h.shade === void 0
          ? `var(--mantine-color-${h.color}-outline)`
          : h.color;
    return {
      indicator: {
        "--checkbox-size": ne(r, "checkbox-size"),
        "--checkbox-radius": i === void 0 ? void 0 : Ge(i),
        "--checkbox-color": f === "outline" ? g : qe(o, l),
        "--checkbox-icon-color": s
          ? qe(s, l)
          : _v(d, l)
            ? Xs({ color: o, theme: l, autoContrast: d })
            : void 0,
      },
    };
  },
  vf = Dt((l, i) => {
    const o = gt("CheckboxIndicator", Ux, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        icon: p,
        indeterminate: b,
        radius: y,
        color: T,
        iconColor: x,
        autoContrast: _,
        checked: R,
        mod: M,
        variant: Y,
        disabled: G,
        ...B
      } = o,
      X = p,
      L = Ut({
        name: "CheckboxIndicator",
        classes: b0,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Hx,
        rootSelector: "indicator",
      }),
      W = Mx(),
      P =
        typeof R == "boolean" || typeof b == "boolean"
          ? R || b
          : (W == null ? void 0 : W.checked) || !1;
    return j.jsx(Rt, {
      ref: i,
      ...L("indicator", { variant: Y }),
      variant: Y,
      mod: [{ checked: P, disabled: G }, M],
      ...B,
      children: j.jsx(X, { indeterminate: b, ...L("icon") }),
    });
  });
vf.displayName = "@mantine/core/CheckboxIndicator";
vf.classes = b0;
var S0 = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542",
};
const Lx = { labelPosition: "right", icon: y0 },
  $x = (
    l,
    { radius: i, color: o, size: r, iconColor: s, variant: f, autoContrast: d },
  ) => {
    const h = Rl({ color: o || l.primaryColor, theme: l }),
      g =
        h.isThemeColor && h.shade === void 0
          ? `var(--mantine-color-${h.color}-outline)`
          : h.color;
    return {
      root: {
        "--checkbox-size": ne(r, "checkbox-size"),
        "--checkbox-radius": i === void 0 ? void 0 : Ge(i),
        "--checkbox-color": f === "outline" ? g : qe(o, l),
        "--checkbox-icon-color": s
          ? qe(s, l)
          : _v(d, l)
            ? Xs({ color: o, theme: l, autoContrast: d })
            : void 0,
      },
    };
  },
  xa = Dt((l, i) => {
    const o = gt("Checkbox", Lx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        color: p,
        label: b,
        id: y,
        size: T,
        radius: x,
        wrapperProps: _,
        checked: R,
        labelPosition: M,
        description: Y,
        error: G,
        disabled: B,
        variant: X,
        indeterminate: L,
        icon: W,
        rootRef: P,
        iconColor: et,
        onChange: tt,
        autoContrast: ut,
        mod: mt,
        ...rt
      } = o,
      ot = v0(),
      ct = T || (ot == null ? void 0 : ot.size),
      I = W,
      O = Ut({
        name: "Checkbox",
        props: o,
        classes: S0,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: $x,
      }),
      { styleProps: $, rest: q } = Qs(rt),
      K = Su(y),
      S = ot
        ? {
            checked: ot.value.includes(q.value),
            onChange: (F) => {
              ot.onChange(F), tt == null || tt(F);
            },
          }
        : {},
      N = A.useRef(null),
      J = i || N;
    return (
      A.useEffect(() => {
        J && "current" in J && J.current && (J.current.indeterminate = L || !1);
      }, [L, J]),
      j.jsx(h0, {
        ...O("root"),
        __staticSelector: "Checkbox",
        __stylesApiProps: o,
        id: K,
        size: ct,
        labelPosition: M,
        label: b,
        description: Y,
        error: G,
        disabled: B,
        classNames: r,
        styles: d,
        unstyled: h,
        "data-checked": S.checked || R || void 0,
        variant: X,
        ref: P,
        mod: mt,
        ...$,
        ..._,
        children: j.jsxs(Rt, {
          ...O("inner"),
          mod: { "data-label-position": M },
          children: [
            j.jsx(Rt, {
              component: "input",
              id: K,
              ref: J,
              checked: R,
              disabled: B,
              mod: { error: !!G, indeterminate: L },
              ...O("input", { focusable: !0, variant: X }),
              onChange: tt,
              ...q,
              ...S,
              type: "checkbox",
            }),
            j.jsx(I, { indeterminate: L, ...O("icon") }),
          ],
        }),
      })
    );
  });
xa.classes = { ...S0, ..._x };
xa.displayName = "@mantine/core/Checkbox";
xa.Group = pf;
xa.Indicator = vf;
xa.Card = hf;
var x0 = {
  root: "m_347db0ec",
  "root--dot": "m_fbd81e3d",
  label: "m_5add502a",
  section: "m_91fdda9b",
};
const Yx = {},
  qx = (
    l,
    { radius: i, color: o, gradient: r, variant: s, size: f, autoContrast: d },
  ) => {
    const h = l.variantColorResolver({
      color: o || l.primaryColor,
      theme: l,
      gradient: r,
      variant: s || "filled",
      autoContrast: d,
    });
    return {
      root: {
        "--badge-height": ne(f, "badge-height"),
        "--badge-padding-x": ne(f, "badge-padding-x"),
        "--badge-fz": ne(f, "badge-fz"),
        "--badge-radius": i === void 0 ? void 0 : Ge(i),
        "--badge-bg": o || s ? h.background : void 0,
        "--badge-color": o || s ? h.color : void 0,
        "--badge-bd": o || s ? h.border : void 0,
        "--badge-dot-color": s === "dot" ? qe(o, l) : void 0,
      },
    };
  },
  gf = In((l, i) => {
    const o = gt("Badge", Yx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        radius: p,
        color: b,
        gradient: y,
        leftSection: T,
        rightSection: x,
        children: _,
        variant: R,
        fullWidth: M,
        autoContrast: Y,
        circle: G,
        mod: B,
        ...X
      } = o,
      L = Ut({
        name: "Badge",
        props: o,
        classes: x0,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: qx,
      });
    return j.jsxs(Rt, {
      variant: R,
      mod: [
        {
          block: M,
          circle: G,
          "with-right-section": !!x,
          "with-left-section": !!T,
        },
        B,
      ],
      ...L("root", { variant: R }),
      ref: i,
      ...X,
      children: [
        T &&
          j.jsx("span", {
            ...L("section"),
            "data-position": "left",
            children: T,
          }),
        j.jsx("span", { ...L("label"), children: _ }),
        x &&
          j.jsx("span", {
            ...L("section"),
            "data-position": "right",
            children: x,
          }),
      ],
    });
  });
gf.classes = x0;
gf.displayName = "@mantine/core/Badge";
var E0 = { root: "m_fea6bf1a", burger: "m_d4fb9cad" };
const Gx = {},
  Xx = (
    l,
    {
      color: i,
      size: o,
      lineSize: r,
      transitionDuration: s,
      transitionTimingFunction: f,
    },
  ) => ({
    root: {
      "--burger-color": i ? qe(i, l) : void 0,
      "--burger-size": ne(o, "burger-size"),
      "--burger-line-size": r ? Z(r) : void 0,
      "--burger-transition-duration": s === void 0 ? void 0 : `${s}ms`,
      "--burger-transition-timing-function": f,
    },
  }),
  vu = Dt((l, i) => {
    const o = gt("Burger", Gx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        opened: p,
        children: b,
        transitionDuration: y,
        transitionTimingFunction: T,
        lineSize: x,
        ..._
      } = o,
      R = Ut({
        name: "Burger",
        classes: E0,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Xx,
      });
    return j.jsxs(Ni, {
      ...R("root"),
      ref: i,
      ..._,
      children: [
        j.jsx(Rt, { mod: ["reduce-motion", { opened: p }], ...R("burger") }),
        b,
      ],
    });
  });
vu.classes = E0;
vu.displayName = "@mantine/core/Burger";
var R0 = { root: "m_7485cace" };
const Vx = {},
  Qx = (l, { size: i, fluid: o }) => ({
    root: { "--container-size": o ? void 0 : ne(i, "container-size") },
  }),
  yf = Dt((l, i) => {
    const o = gt("Container", Vx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        fluid: p,
        mod: b,
        ...y
      } = o,
      T = Ut({
        name: "Container",
        classes: R0,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Qx,
      });
    return j.jsx(Rt, { ref: i, mod: [{ fluid: p }, b], ...T("root"), ...y });
  });
yf.classes = R0;
yf.displayName = "@mantine/core/Container";
const Zx = { duration: 100, transition: "fade" };
function kx(l, i) {
  return { ...Zx, ...i, ...l };
}
function Kx({ offset: l, position: i, defaultOpened: o }) {
  const [r, s] = A.useState(o),
    f = A.useRef(null),
    {
      x: d,
      y: h,
      elements: g,
      refs: p,
      update: b,
      placement: y,
    } = t0({
      placement: i,
      middleware: [Wv({ crossAxis: !0, padding: 5, rootBoundary: "document" })],
    }),
    T = y.includes("right") ? l : i.includes("left") ? l * -1 : 0,
    x = y.includes("bottom") ? l : i.includes("top") ? l * -1 : 0,
    _ = A.useCallback(
      ({ clientX: R, clientY: M }) => {
        p.setPositionReference({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: R,
              y: M,
              left: R + T,
              top: M + x,
              right: R,
              bottom: M,
            };
          },
        });
      },
      [g.reference],
    );
  return (
    A.useEffect(() => {
      if (p.floating.current) {
        const R = f.current;
        R.addEventListener("mousemove", _);
        const M = Sn(p.floating.current);
        return (
          M.forEach((Y) => {
            Y.addEventListener("scroll", b);
          }),
          () => {
            R.removeEventListener("mousemove", _),
              M.forEach((Y) => {
                Y.removeEventListener("scroll", b);
              });
          }
        );
      }
    }, [g.reference, p.floating.current, b, _, r]),
    {
      handleMouseMove: _,
      x: d,
      y: h,
      opened: r,
      setOpened: s,
      boundaryRef: f,
      floating: p.setFloating,
    }
  );
}
var Nu = { tooltip: "m_1b3c8819", arrow: "m_f898399f" };
const Jx = {
    refProp: "ref",
    withinPortal: !0,
    offset: 10,
    defaultOpened: !1,
    position: "right",
    zIndex: Us("popover"),
  },
  Wx = (l, { radius: i, color: o }) => ({
    tooltip: {
      "--tooltip-radius": i === void 0 ? void 0 : Ge(i),
      "--tooltip-bg": o ? qe(o, l) : void 0,
      "--tooltip-color": o ? "var(--mantine-color-white)" : void 0,
    },
  }),
  bf = Dt((l, i) => {
    const o = gt("TooltipFloating", Jx, l),
      {
        children: r,
        refProp: s,
        withinPortal: f,
        style: d,
        className: h,
        classNames: g,
        styles: p,
        unstyled: b,
        radius: y,
        color: T,
        label: x,
        offset: _,
        position: R,
        multiline: M,
        zIndex: Y,
        disabled: G,
        defaultOpened: B,
        variant: X,
        vars: L,
        portalProps: W,
        ...P
      } = o,
      et = Xe(),
      tt = Ut({
        name: "TooltipFloating",
        props: o,
        classes: Nu,
        className: h,
        style: d,
        classNames: g,
        styles: p,
        unstyled: b,
        rootSelector: "tooltip",
        vars: L,
        varsResolver: Wx,
      }),
      {
        handleMouseMove: ut,
        x: mt,
        y: rt,
        opened: ot,
        boundaryRef: ct,
        floating: I,
        setOpened: O,
      } = Kx({ offset: _, position: R, defaultOpened: B });
    if (!vv(r))
      throw new Error(
        "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
      );
    const $ = gv(ct, bv(r), i),
      q = r.props,
      K = (N) => {
        var J;
        (J = q.onMouseEnter) == null || J.call(q, N), ut(N), O(!0);
      },
      S = (N) => {
        var J;
        (J = q.onMouseLeave) == null || J.call(q, N), O(!1);
      };
    return j.jsxs(j.Fragment, {
      children: [
        j.jsx(lf, {
          ...W,
          withinPortal: f,
          children: j.jsx(Rt, {
            ...P,
            ...tt("tooltip", {
              style: {
                ...Mv(d, et),
                zIndex: Y,
                display: !G && ot ? "block" : "none",
                top: (rt && Math.round(rt)) ?? "",
                left: (mt && Math.round(mt)) ?? "",
              },
            }),
            variant: X,
            ref: I,
            mod: { multiline: M },
            children: x,
          }),
        }),
        A.cloneElement(r, { ...q, [s]: $, onMouseEnter: K, onMouseLeave: S }),
      ],
    });
  });
bf.classes = Nu;
bf.displayName = "@mantine/core/TooltipFloating";
const T0 = A.createContext(!1),
  Fx = T0.Provider,
  Px = () => A.useContext(T0),
  Ix = { openDelay: 0, closeDelay: 0 };
function Sf(l) {
  const {
    openDelay: i,
    closeDelay: o,
    children: r,
  } = gt("TooltipGroup", Ix, l);
  return j.jsx(Fx, {
    value: !0,
    children: j.jsx(g2, { delay: { open: i, close: o }, children: r }),
  });
}
Sf.displayName = "@mantine/core/TooltipGroup";
Sf.extend = (l) => l;
function tE(l) {
  if (l === void 0) return { shift: !0, flip: !0 };
  const i = { ...l };
  return (
    l.shift === void 0 && (i.shift = !0), l.flip === void 0 && (i.flip = !0), i
  );
}
function eE(l) {
  const i = tE(l.middlewares),
    o = [i2(l.offset)];
  return (
    i.shift &&
      o.push(
        Wv(
          typeof i.shift == "boolean"
            ? { padding: 8 }
            : { padding: 8, ...i.shift },
        ),
      ),
    i.flip && o.push(typeof i.flip == "boolean" ? Qp() : Qp(i.flip)),
    o.push(r2({ element: l.arrowRef, padding: l.arrowOffset })),
    i.inline
      ? o.push(typeof i.inline == "boolean" ? hs() : hs(i.inline))
      : l.inline && o.push(hs()),
    o
  );
}
function nE(l) {
  var W, P, et;
  const [i, o] = A.useState(l.defaultOpened),
    s = typeof l.opened == "boolean" ? l.opened : i,
    f = Px(),
    d = Su(),
    h = A.useCallback(
      (tt) => {
        o(tt), tt && G(d);
      },
      [d],
    ),
    {
      x: g,
      y: p,
      context: b,
      refs: y,
      update: T,
      placement: x,
      middlewareData: { arrow: { x: _, y: R } = {} },
    } = t0({
      strategy: l.strategy,
      placement: l.position,
      open: s,
      onOpenChange: h,
      middleware: eE(l),
    }),
    { delay: M, currentId: Y, setCurrentId: G } = y2(b, { id: d }),
    { getReferenceProps: B, getFloatingProps: X } = A2([
      p2(b, {
        enabled: (W = l.events) == null ? void 0 : W.hover,
        delay: f ? M : { open: l.openDelay, close: l.closeDelay },
        mouseOnly: !((P = l.events) != null && P.touch),
      }),
      T2(b, {
        enabled: (et = l.events) == null ? void 0 : et.focus,
        visibleOnly: !0,
      }),
      _2(b, { role: "tooltip" }),
      E2(b, { enabled: typeof l.opened > "u" }),
    ]);
  L2({
    opened: s,
    position: l.position,
    positionDependencies: l.positionDependencies,
    floating: { refs: y, update: T },
  }),
    fu(() => {
      var tt;
      (tt = l.onPositionChange) == null || tt.call(l, x);
    }, [x]);
  const L = s && Y && Y !== d;
  return {
    x: g,
    y: p,
    arrowX: _,
    arrowY: R,
    reference: y.setReference,
    floating: y.setFloating,
    getFloatingProps: X,
    getReferenceProps: B,
    isGroupPhase: L,
    opened: s,
    placement: x,
  };
}
const av = {
    position: "top",
    refProp: "ref",
    withinPortal: !0,
    inline: !1,
    defaultOpened: !1,
    arrowSize: 4,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    offset: 5,
    transitionProps: { duration: 100, transition: "fade" },
    events: { hover: !0, focus: !1, touch: !1 },
    zIndex: Us("popover"),
    positionDependencies: [],
    middlewares: { flip: !0, shift: !0, inline: !1 },
  },
  lE = (l, { radius: i, color: o }) => ({
    tooltip: {
      "--tooltip-radius": i === void 0 ? void 0 : Ge(i),
      "--tooltip-bg": o ? qe(o, l) : void 0,
      "--tooltip-color": o ? "var(--mantine-color-white)" : void 0,
    },
  }),
  Hi = Dt((l, i) => {
    const o = gt("Tooltip", av, l),
      {
        children: r,
        position: s,
        refProp: f,
        label: d,
        openDelay: h,
        closeDelay: g,
        onPositionChange: p,
        opened: b,
        defaultOpened: y,
        withinPortal: T,
        radius: x,
        color: _,
        classNames: R,
        styles: M,
        unstyled: Y,
        style: G,
        className: B,
        withArrow: X,
        arrowSize: L,
        arrowOffset: W,
        arrowRadius: P,
        arrowPosition: et,
        offset: tt,
        transitionProps: ut,
        multiline: mt,
        events: rt,
        zIndex: ot,
        disabled: ct,
        positionDependencies: I,
        onClick: O,
        onMouseEnter: $,
        onMouseLeave: q,
        inline: K,
        variant: S,
        keepMounted: N,
        vars: J,
        portalProps: F,
        mod: lt,
        floatingStrategy: ht,
        middlewares: nt,
        ...Tt
      } = gt("Tooltip", av, o),
      { dir: xt } = Bv(),
      le = A.useRef(null),
      Ft = nE({
        position: z2(xt, s),
        closeDelay: g,
        openDelay: h,
        onPositionChange: p,
        opened: b,
        defaultOpened: y,
        events: rt,
        arrowRef: le,
        arrowOffset: W,
        offset: typeof tt == "number" ? tt + (X ? L / 2 : 0) : tt,
        positionDependencies: [...I, r],
        inline: K,
        strategy: ht,
        middlewares: nt,
      }),
      Ve = Ut({
        name: "Tooltip",
        props: o,
        classes: Nu,
        className: B,
        style: G,
        classNames: R,
        styles: M,
        unstyled: Y,
        rootSelector: "tooltip",
        vars: J,
        varsResolver: lE,
      });
    if (!vv(r))
      throw new Error(
        "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
      );
    const el = gv(Ft.reference, bv(r), i),
      An = kx(ut, { duration: 100, transition: "fade" }),
      Cn = r.props;
    return j.jsxs(j.Fragment, {
      children: [
        j.jsx(lf, {
          ...F,
          withinPortal: T,
          children: j.jsx(i0, {
            ...An,
            keepMounted: N,
            mounted: !ct && !!Ft.opened,
            duration: Ft.isGroupPhase ? 10 : An.duration,
            children: (Ea) =>
              j.jsxs(Rt, {
                ...Tt,
                "data-fixed": ht === "fixed" || void 0,
                variant: S,
                mod: [{ multiline: mt }, lt],
                ...Ft.getFloatingProps({
                  ref: Ft.floating,
                  className: Ve("tooltip").className,
                  style: {
                    ...Ve("tooltip").style,
                    ...Ea,
                    zIndex: ot,
                    top: Ft.y ?? 0,
                    left: Ft.x ?? 0,
                  },
                }),
                children: [
                  d,
                  j.jsx(l0, {
                    ref: le,
                    arrowX: Ft.arrowX,
                    arrowY: Ft.arrowY,
                    visible: X,
                    position: Ft.placement,
                    arrowSize: L,
                    arrowOffset: W,
                    arrowRadius: P,
                    arrowPosition: et,
                    ...Ve("arrow"),
                  }),
                ],
              }),
          }),
        }),
        A.cloneElement(
          r,
          Ft.getReferenceProps({
            onClick: O,
            onMouseEnter: $,
            onMouseLeave: q,
            onMouseMove: o.onMouseMove,
            onPointerDown: o.onPointerDown,
            onPointerEnter: o.onPointerEnter,
            className: El(B, Cn.className),
            ...Cn,
            [f]: el,
          }),
        ),
      ],
    });
  });
Hi.classes = Nu;
Hi.displayName = "@mantine/core/Tooltip";
Hi.Floating = bf;
Hi.Group = Sf;
const aE = {},
  gu = Dt((l, i) => {
    const { w: o, h: r, miw: s, mih: f, ...d } = gt("Space", aE, l);
    return j.jsx(Rt, { ref: i, ...d, w: o, miw: s ?? o, h: r, mih: f ?? r });
  });
gu.displayName = "@mantine/core/Space";
var A0 = { root: "m_7341320d" };
const iE = {},
  rE = (
    l,
    { size: i, radius: o, variant: r, gradient: s, color: f, autoContrast: d },
  ) => {
    const h = l.variantColorResolver({
      color: f || l.primaryColor,
      theme: l,
      gradient: s,
      variant: r || "filled",
      autoContrast: d,
    });
    return {
      root: {
        "--ti-size": ne(i, "ti-size"),
        "--ti-radius": o === void 0 ? void 0 : Ge(o),
        "--ti-bg": f || r ? h.background : void 0,
        "--ti-color": f || r ? h.color : void 0,
        "--ti-bd": f || r ? h.border : void 0,
      },
    };
  },
  xf = Dt((l, i) => {
    const o = gt("ThemeIcon", iE, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        autoContrast: p,
        ...b
      } = o,
      y = Ut({
        name: "ThemeIcon",
        classes: A0,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: rE,
      });
    return j.jsx(Rt, { ref: i, ...y("root"), ...b });
  });
xf.classes = A0;
xf.displayName = "@mantine/core/ThemeIcon";
const uE = ["h1", "h2", "h3", "h4", "h5", "h6"],
  oE = ["xs", "sm", "md", "lg", "xl"];
function cE(l, i) {
  const o = i !== void 0 ? i : `h${l}`;
  return uE.includes(o)
    ? {
        fontSize: `var(--mantine-${o}-font-size)`,
        fontWeight: `var(--mantine-${o}-font-weight)`,
        lineHeight: `var(--mantine-${o}-line-height)`,
      }
    : oE.includes(o)
      ? {
          fontSize: `var(--mantine-font-size-${o})`,
          fontWeight: `var(--mantine-h${l}-font-weight)`,
          lineHeight: `var(--mantine-h${l}-line-height)`,
        }
      : {
          fontSize: Z(o),
          fontWeight: `var(--mantine-h${l}-font-weight)`,
          lineHeight: `var(--mantine-h${l}-line-height)`,
        };
}
var C0 = { root: "m_8a5d1357" };
const sE = { order: 1 },
  fE = (l, { order: i, size: o, lineClamp: r, textWrap: s }) => {
    const f = cE(i, o);
    return {
      root: {
        "--title-fw": f.fontWeight,
        "--title-lh": f.lineHeight,
        "--title-fz": f.fontSize,
        "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
        "--title-text-wrap": s,
      },
    };
  },
  Du = Dt((l, i) => {
    const o = gt("Title", sE, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        order: g,
        vars: p,
        size: b,
        variant: y,
        lineClamp: T,
        textWrap: x,
        mod: _,
        ...R
      } = o,
      M = Ut({
        name: "Title",
        props: o,
        classes: C0,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: p,
        varsResolver: fE,
      });
    return [1, 2, 3, 4, 5, 6].includes(g)
      ? j.jsx(Rt, {
          ...M("root"),
          component: `h${g}`,
          variant: y,
          ref: i,
          mod: [{ order: g, "data-line-clamp": typeof T == "number" }, _],
          size: b,
          ...R,
        })
      : null;
  });
Du.classes = C0;
Du.displayName = "@mantine/core/Title";
function dE() {
  return j.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    children: j.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    }),
  });
}
function _0() {
  return j.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    children: j.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    }),
  });
}
function mE() {
  return j.jsxs(zu, {
    variant: "light",
    color: "blue",
    title: "Feature in Progress",
    icon: j.jsx(_0, {}),
    children: [
      j.jsx(wi, {
        size: "sm",
        children: "This feature is currently being developed.",
      }),
      j.jsx(gu, { h: "sm" }),
      j.jsx(wi, { size: "sm", children: "Be sure to check back soon!" }),
    ],
  });
}
function hE() {
  return j.jsx(Hi, {
    label: "Mock App for Practicing Mantine Library Composition",
    children: j.jsxs(Mu, {
      direction: "row",
      align: "center",
      gap: "xs",
      children: [
        j.jsx(xf, {
          size: "sm",
          variant: "white",
          radius: "sm",
          color: "violet",
          children: j.jsx(dE, {}),
        }),
        j.jsx(Du, {
          order: 2,
          size: "h5",
          c: "violet",
          children: "Home Resource Manager",
        }),
      ],
    }),
  });
}
function pE({ children: l }) {
  const [i, { toggle: o }] = Op(),
    [r, { toggle: s }] = Op(!0);
  return j.jsxs(je, {
    header: { height: 60 },
    navbar: {
      width: 300,
      breakpoint: "sm",
      collapsed: { mobile: !i, desktop: r },
    },
    padding: "md",
    children: [
      j.jsx(je.Header, {
        children: j.jsxs(af, {
          h: "100%",
          px: "md",
          children: [
            j.jsx(vu, {
              opened: i,
              onClick: o,
              hiddenFrom: "sm",
              size: "sm",
              color: "violet",
            }),
            j.jsx(vu, {
              opened: !r,
              onClick: s,
              visibleFrom: "sm",
              size: "sm",
              color: "violet",
            }),
            j.jsx(hE, {}),
          ],
        }),
      }),
      j.jsx(je.Navbar, { p: "md", children: j.jsx(mE, {}) }),
      j.jsx(je.Main, { bg: "violet.0", children: j.jsx(yf, { children: l }) }),
    ],
  });
}
const vE = [
  { label: "Water the Plants", category: "Garden", checked: !0 },
  { label: "Grocery shopping", category: "Personal", checked: !1 },
  { label: "Fix bike tire", category: "Maintenance", checked: !1 },
  { label: "Stretch for 10 min", category: "Health", checked: !1 },
];
function gE() {
  return j.jsx(Cv, {
    children: j.jsx(pE, {
      children: j.jsxs(Ai, {
        p: "md",
        children: [
          j.jsx(Du, {
            size: "h3",
            c: "violet",
            order: 4,
            children: "Today's Tasks",
          }),
          j.jsx(gu, { h: "md" }),
          j.jsx(zu, {
            variant: "light",
            color: "blue",
            title: "Time to Catch Up!",
            icon: j.jsx(_0, {}),
            children:
              "You're almost there! Just a few tasks left—keep up the great work and finish strong.",
          }),
          j.jsx(gu, { h: "xs" }),
          vE.map((l, i) =>
            j.jsx(
              Ai,
              {
                withBorder: !0,
                p: "sm",
                radius: "md",
                mt: "xs",
                children: j.jsxs(Mu, {
                  gap: "sm",
                  align: "center",
                  children: [
                    j.jsx(xa, { color: "violet", defaultChecked: l.checked }),
                    j.jsx(Ai, {
                      style: { flex: 1 },
                      children: j.jsx(wi, { size: "sm", children: l.label }),
                    }),
                    j.jsx(gf, { color: "violet", children: l.category }),
                  ],
                }),
              },
              i,
            ),
          ),
        ],
      }),
    }),
  });
}
lb.createRoot(document.getElementById("root")).render(
  j.jsx(A.StrictMode, { children: j.jsx(gE, {}) }),
);
