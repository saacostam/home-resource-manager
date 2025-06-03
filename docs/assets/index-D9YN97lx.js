function K0(l, i) {
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
function rv(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Kc = { exports: {} },
  xi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp;
function J0() {
  if (mp) return xi;
  mp = 1;
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
  return (xi.Fragment = i), (xi.jsx = o), (xi.jsxs = o), xi;
}
var hp;
function W0() {
  return hp || ((hp = 1), (Kc.exports = J0())), Kc.exports;
}
var j = W0(),
  Jc = { exports: {} },
  pt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp;
function F0() {
  if (pp) return pt;
  pp = 1;
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
    C = Object.assign,
    R = {};
  function O(S, N, J) {
    (this.props = S),
      (this.context = N),
      (this.refs = R),
      (this.updater = J || x);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (S, N) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, N, "setState");
    }),
    (O.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function L() {}
  L.prototype = O.prototype;
  function q(S, N, J) {
    (this.props = S),
      (this.context = N),
      (this.refs = R),
      (this.updater = J || x);
  }
  var B = (q.prototype = new L());
  (B.constructor = q), C(B, O.prototype), (B.isPureReactComponent = !0);
  var X = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
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
      for (var Et = 0; Et < S.length; Et++)
        (F = S[Et]), (ht = Tt + rt(F, Et)), (nt += I(F, N, J, ht, lt));
    else if (((Et = T(S)), typeof Et == "function"))
      for (S = Et.call(S), Et = 0; !(F = S.next()).done; )
        (F = F.value), (ht = Tt + rt(F, Et++)), (nt += I(F, N, J, ht, lt));
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
  function M(S, N, J) {
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
  function Y(S) {
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
  var G =
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
      map: M,
      forEach: function (S, N, J) {
        M(
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
          M(S, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (S) {
        return (
          M(S, function (N) {
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
    (pt.Component = O),
    (pt.Fragment = o),
    (pt.Profiler = s),
    (pt.PureComponent = q),
    (pt.StrictMode = r),
    (pt.Suspense = g),
    (pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (pt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return $.H.useMemoCache(S);
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
      var F = C({}, S.props),
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
        for (var Tt = Array(nt), Et = 0; Et < nt; Et++)
          Tt[Et] = arguments[Et + 2];
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
        for (var Tt = Array(nt), Et = 0; Et < nt; Et++)
          Tt[Et] = arguments[Et + 2];
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
      return { $$typeof: b, _payload: { _status: -1, _result: S }, _init: Y };
    }),
    (pt.memo = function (S, N) {
      return { $$typeof: p, type: S, compare: N === void 0 ? null : N };
    }),
    (pt.startTransition = function (S) {
      var N = $.T,
        J = {};
      $.T = J;
      try {
        var F = S(),
          lt = $.S;
        lt !== null && lt(J, F),
          typeof F == "object" &&
            F !== null &&
            typeof F.then == "function" &&
            F.then(K, G);
      } catch (ht) {
        G(ht);
      } finally {
        $.T = N;
      }
    }),
    (pt.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (pt.use = function (S) {
      return $.H.use(S);
    }),
    (pt.useActionState = function (S, N, J) {
      return $.H.useActionState(S, N, J);
    }),
    (pt.useCallback = function (S, N) {
      return $.H.useCallback(S, N);
    }),
    (pt.useContext = function (S) {
      return $.H.useContext(S);
    }),
    (pt.useDebugValue = function () {}),
    (pt.useDeferredValue = function (S, N) {
      return $.H.useDeferredValue(S, N);
    }),
    (pt.useEffect = function (S, N, J) {
      var F = $.H;
      if (typeof J == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return F.useEffect(S, N);
    }),
    (pt.useId = function () {
      return $.H.useId();
    }),
    (pt.useImperativeHandle = function (S, N, J) {
      return $.H.useImperativeHandle(S, N, J);
    }),
    (pt.useInsertionEffect = function (S, N) {
      return $.H.useInsertionEffect(S, N);
    }),
    (pt.useLayoutEffect = function (S, N) {
      return $.H.useLayoutEffect(S, N);
    }),
    (pt.useMemo = function (S, N) {
      return $.H.useMemo(S, N);
    }),
    (pt.useOptimistic = function (S, N) {
      return $.H.useOptimistic(S, N);
    }),
    (pt.useReducer = function (S, N, J) {
      return $.H.useReducer(S, N, J);
    }),
    (pt.useRef = function (S) {
      return $.H.useRef(S);
    }),
    (pt.useState = function (S) {
      return $.H.useState(S);
    }),
    (pt.useSyncExternalStore = function (S, N, J) {
      return $.H.useSyncExternalStore(S, N, J);
    }),
    (pt.useTransition = function () {
      return $.H.useTransition();
    }),
    (pt.version = "19.1.0"),
    pt
  );
}
var vp;
function zs() {
  return vp || ((vp = 1), (Jc.exports = F0())), Jc.exports;
}
var A = zs();
const cu = rv(A),
  P0 = K0({ __proto__: null, default: cu }, [A]);
var Wc = { exports: {} },
  Ei = {},
  Fc = { exports: {} },
  Pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp;
function I0() {
  return (
    gp ||
      ((gp = 1),
      (function (l) {
        function i(M, Y) {
          var G = M.length;
          M.push(Y);
          t: for (; 0 < G; ) {
            var K = (G - 1) >>> 1,
              S = M[K];
            if (0 < s(S, Y)) (M[K] = Y), (M[G] = S), (G = K);
            else break t;
          }
        }
        function o(M) {
          return M.length === 0 ? null : M[0];
        }
        function r(M) {
          if (M.length === 0) return null;
          var Y = M[0],
            G = M.pop();
          if (G !== Y) {
            M[0] = G;
            t: for (var K = 0, S = M.length, N = S >>> 1; K < N; ) {
              var J = 2 * (K + 1) - 1,
                F = M[J],
                lt = J + 1,
                ht = M[lt];
              if (0 > s(F, G))
                lt < S && 0 > s(ht, F)
                  ? ((M[K] = ht), (M[lt] = G), (K = lt))
                  : ((M[K] = F), (M[J] = G), (K = J));
              else if (lt < S && 0 > s(ht, G))
                (M[K] = ht), (M[lt] = G), (K = lt);
              else break t;
            }
          }
          return Y;
        }
        function s(M, Y) {
          var G = M.sortIndex - Y.sortIndex;
          return G !== 0 ? G : M.id - Y.id;
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
          C = !1,
          R = !1,
          O = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        function X(M) {
          for (var Y = o(p); Y !== null; ) {
            if (Y.callback === null) r(p);
            else if (Y.startTime <= M)
              r(p), (Y.sortIndex = Y.expirationTime), i(g, Y);
            else break;
            Y = o(p);
          }
        }
        function $(M) {
          if (((R = !1), X(M), !C))
            if (o(g) !== null) (C = !0), W || ((W = !0), rt());
            else {
              var Y = o(p);
              Y !== null && I($, Y.startTime - M);
            }
        }
        var W = !1,
          P = -1,
          et = 5,
          tt = -1;
        function ut() {
          return O ? !0 : !(l.unstable_now() - tt < et);
        }
        function mt() {
          if (((O = !1), W)) {
            var M = l.unstable_now();
            tt = M;
            var Y = !0;
            try {
              t: {
                (C = !1), R && ((R = !1), q(P), (P = -1)), (x = !0);
                var G = T;
                try {
                  e: {
                    for (
                      X(M), y = o(g);
                      y !== null && !(y.expirationTime > M && ut());

                    ) {
                      var K = y.callback;
                      if (typeof K == "function") {
                        (y.callback = null), (T = y.priorityLevel);
                        var S = K(y.expirationTime <= M);
                        if (((M = l.unstable_now()), typeof S == "function")) {
                          (y.callback = S), X(M), (Y = !0);
                          break e;
                        }
                        y === o(g) && r(g), X(M);
                      } else r(g);
                      y = o(g);
                    }
                    if (y !== null) Y = !0;
                    else {
                      var N = o(p);
                      N !== null && I($, N.startTime - M), (Y = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (T = G), (x = !1);
                }
                Y = void 0;
              }
            } finally {
              Y ? rt() : (W = !1);
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
            L(mt, 0);
          };
        function I(M, Y) {
          P = L(function () {
            M(l.unstable_now());
          }, Y);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (l.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (et = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (l.unstable_next = function (M) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = T;
            }
            var G = T;
            T = Y;
            try {
              return M();
            } finally {
              T = G;
            }
          }),
          (l.unstable_requestPaint = function () {
            O = !0;
          }),
          (l.unstable_runWithPriority = function (M, Y) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var G = T;
            T = M;
            try {
              return Y();
            } finally {
              T = G;
            }
          }),
          (l.unstable_scheduleCallback = function (M, Y, G) {
            var K = l.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? K + G : K))
                : (G = K),
              M)
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
              (S = G + S),
              (M = {
                id: b++,
                callback: Y,
                priorityLevel: M,
                startTime: G,
                expirationTime: S,
                sortIndex: -1,
              }),
              G > K
                ? ((M.sortIndex = G),
                  i(p, M),
                  o(g) === null &&
                    M === o(p) &&
                    (R ? (q(P), (P = -1)) : (R = !0), I($, G - K)))
                : ((M.sortIndex = S),
                  i(g, M),
                  C || x || ((C = !0), W || ((W = !0), rt()))),
              M
            );
          }),
          (l.unstable_shouldYield = ut),
          (l.unstable_wrapCallback = function (M) {
            var Y = T;
            return function () {
              var G = T;
              T = Y;
              try {
                return M.apply(this, arguments);
              } finally {
                T = G;
              }
            };
          });
      })(Pc)),
    Pc
  );
}
var yp;
function tb() {
  return yp || ((yp = 1), (Fc.exports = I0())), Fc.exports;
}
var Ic = { exports: {} },
  re = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bp;
function eb() {
  if (bp) return re;
  bp = 1;
  var l = zs();
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
var Sp;
function uv() {
  if (Sp) return Ic.exports;
  Sp = 1;
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
  return l(), (Ic.exports = eb()), Ic.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xp;
function nb() {
  if (xp) return Ei;
  xp = 1;
  var l = tb(),
    i = zs(),
    o = uv();
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
    C = Symbol.for("react.fragment"),
    R = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    L = Symbol.for("react.provider"),
    q = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
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
      case C:
        return "Fragment";
      case O:
        return "Profiler";
      case R:
        return "StrictMode";
      case $:
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
        case q:
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
    M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
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
  function Et(t, e) {
    switch ((F(nt, e), F(ht, t), F(lt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? qh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = qh(e)), (t = Gh(e, t));
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
      n = Gh(e, t.type);
    e !== n && (F(ht, t), F(lt, n));
  }
  function Ve(t) {
    ht.current === t && (J(lt), J(ht)),
      Tt.current === t && (J(Tt), (vi._currentValue = G));
  }
  var el = Object.prototype.hasOwnProperty,
    _n = l.unstable_scheduleCallback,
    Cn = l.unstable_cancelCallback,
    Ra = l.unstable_shouldYield,
    Du = l.unstable_requestPaint,
    Te = l.unstable_now,
    ju = l.unstable_getCurrentPriorityLevel,
    Li = l.unstable_ImmediatePriority,
    Bu = l.unstable_UserBlockingPriority,
    $i = l.unstable_NormalPriority,
    Og = l.unstable_LowPriority,
    Rf = l.unstable_IdlePriority,
    Mg = l.log,
    zg = l.unstable_setDisableYieldValue,
    Ta = null,
    he = null;
  function wn(t) {
    if (
      (typeof Mg == "function" && zg(t),
      he && typeof he.setStrictMode == "function")
    )
      try {
        he.setStrictMode(Ta, t);
      } catch {}
  }
  var pe = Math.clz32 ? Math.clz32 : jg,
    Ng = Math.log,
    Dg = Math.LN2;
  function jg(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Ng(t) / Dg) | 0)) | 0;
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
  function Aa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Bg(t, e) {
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
  function Tf() {
    var t = Yi;
    return (Yi <<= 1), (Yi & 4194048) === 0 && (Yi = 256), t;
  }
  function Af() {
    var t = qi;
    return (qi <<= 1), (qi & 62914560) === 0 && (qi = 4194304), t;
  }
  function Uu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function _a(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Ug(t, e, n, a, u, c) {
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
    a !== 0 && _f(t, a, 0),
      c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e));
  }
  function _f(t, e, n) {
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
  function Hu(t) {
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
  function Lu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function wf() {
    var t = Y.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : up(t.type));
  }
  function Hg(t, e) {
    var n = Y.p;
    try {
      return (Y.p = t), e();
    } finally {
      Y.p = n;
    }
  }
  var On = Math.random().toString(36).slice(2),
    ae = "__reactFiber$" + On,
    oe = "__reactProps$" + On,
    Tl = "__reactContainer$" + On,
    $u = "__reactEvents$" + On,
    Lg = "__reactListeners$" + On,
    $g = "__reactHandles$" + On,
    Of = "__reactResources$" + On,
    Ca = "__reactMarker$" + On;
  function Yu(t) {
    delete t[ae], delete t[oe], delete t[$u], delete t[Lg], delete t[$g];
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
          for (t = Zh(t); t !== null; ) {
            if ((n = t[ae])) return n;
            t = Zh(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function _l(t) {
    if ((t = t[ae] || t[Tl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function wa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Cl(t) {
    var e = t[Of];
    return (
      e ||
        (e = t[Of] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function kt(t) {
    t[Ca] = !0;
  }
  var Mf = new Set(),
    zf = {};
  function ll(t, e) {
    wl(t, e), wl(t + "Capture", e);
  }
  function wl(t, e) {
    for (zf[t] = e, t = 0; t < e.length; t++) Mf.add(e[t]);
  }
  var Yg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Nf = {},
    Df = {};
  function qg(t) {
    return el.call(Df, t)
      ? !0
      : el.call(Nf, t)
        ? !1
        : Yg.test(t)
          ? (Df[t] = !0)
          : ((Nf[t] = !0), !1);
  }
  function Xi(t, e, n) {
    if (qg(e))
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
  var qu, jf;
  function Ol(t) {
    if (qu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (qu = (e && e[1]) || ""),
          (jf =
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
      qu +
      t +
      jf
    );
  }
  var Gu = !1;
  function Xu(t, e) {
    if (!t || Gu) return "";
    Gu = !0;
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
      (Gu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? Ol(n) : "";
  }
  function Gg(t) {
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
        return Xu(t.type, !1);
      case 11:
        return Xu(t.type.render, !1);
      case 1:
        return Xu(t.type, !0);
      case 31:
        return Ol("Activity");
      default:
        return "";
    }
  }
  function Bf(t) {
    try {
      var e = "";
      do (e += Gg(t)), (t = t.return);
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
  function Uf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Xg(t) {
    var e = Uf(t) ? "checked" : "value",
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
    t._valueTracker || (t._valueTracker = Xg(t));
  }
  function Hf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Uf(t) ? (t.checked ? "true" : "false") : t.value),
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
  var Vg = /[\n"\\]/g;
  function _e(t) {
    return t.replace(Vg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vu(t, e, n, a, u, c, m, v) {
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
        ? Qu(t, m, Ae(e))
        : n != null
          ? Qu(t, m, Ae(n))
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
  function Lf(t, e, n, a, u, c, m, v) {
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
  function Qu(t, e, n) {
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
  function $f(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ae(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ae(n) : "";
  }
  function Yf(t, e, n, a) {
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
  var Qg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function qf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Qg.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Gf(t, e, n) {
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
        (a = e[u]), e.hasOwnProperty(u) && n[u] !== a && qf(t, u, a);
    } else for (var c in e) e.hasOwnProperty(c) && qf(t, c, e[c]);
  }
  function Zu(t) {
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
  var Zg = new Map([
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
    kg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ki(t) {
    return kg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var ku = null;
  function Ku(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Nl = null,
    Dl = null;
  function Xf(t) {
    var e = _l(t);
    if (e && (t = e.stateNode)) {
      var n = t[oe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Vu(
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
                'input[name="' + _e("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var u = a[oe] || null;
                if (!u) throw Error(r(90));
                Vu(
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
              (a = n[e]), a.form === t.form && Hf(a);
          }
          break t;
        case "textarea":
          $f(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && Ml(t, !!n.multiple, e, !1);
      }
    }
  }
  var Ju = !1;
  function Vf(t, e, n) {
    if (Ju) return t(e, n);
    Ju = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ju = !1),
        (Nl !== null || Dl !== null) &&
          (Nr(), Nl && ((e = Nl), (t = Dl), (Dl = Nl = null), Xf(e), t)))
      )
        for (e = 0; e < t.length; e++) Xf(t[e]);
    }
  }
  function Oa(t, e) {
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
    Wu = !1;
  if (nn)
    try {
      var Ma = {};
      Object.defineProperty(Ma, "passive", {
        get: function () {
          Wu = !0;
        },
      }),
        window.addEventListener("test", Ma, Ma),
        window.removeEventListener("test", Ma, Ma);
    } catch {
      Wu = !1;
    }
  var Mn = null,
    Fu = null,
    Ki = null;
  function Qf() {
    if (Ki) return Ki;
    var t,
      e = Fu,
      n = e.length,
      a,
      u = "value" in Mn ? Mn.value : Mn.textContent,
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
  function Zf() {
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
          : Zf),
        (this.isPropagationStopped = Zf),
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
    za = b({}, al, { view: 0, detail: 0 }),
    Kg = ce(za),
    Pu,
    Iu,
    Na,
    Pi = b({}, za, {
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
      getModifierState: eo,
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
          : (t !== Na &&
              (Na && t.type === "mousemove"
                ? ((Pu = t.screenX - Na.screenX), (Iu = t.screenY - Na.screenY))
                : (Iu = Pu = 0),
              (Na = t)),
            Pu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Iu;
      },
    }),
    kf = ce(Pi),
    Jg = b({}, Pi, { dataTransfer: 0 }),
    Wg = ce(Jg),
    Fg = b({}, za, { relatedTarget: 0 }),
    to = ce(Fg),
    Pg = b({}, al, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ig = ce(Pg),
    ty = b({}, al, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ey = ce(ty),
    ny = b({}, al, { data: 0 }),
    Kf = ce(ny),
    ly = {
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
    ay = {
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
    iy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ry(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = iy[t])
        ? !!e[t]
        : !1;
  }
  function eo() {
    return ry;
  }
  var uy = b({}, za, {
      key: function (t) {
        if (t.key) {
          var e = ly[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ji(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? ay[t.keyCode] || "Unidentified"
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
      getModifierState: eo,
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
    oy = ce(uy),
    cy = b({}, Pi, {
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
    Jf = ce(cy),
    sy = b({}, za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: eo,
    }),
    fy = ce(sy),
    dy = b({}, al, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    my = ce(dy),
    hy = b({}, Pi, {
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
    py = ce(hy),
    vy = b({}, al, { newState: 0, oldState: 0 }),
    gy = ce(vy),
    yy = [9, 13, 27, 32],
    no = nn && "CompositionEvent" in window,
    Da = null;
  nn && "documentMode" in document && (Da = document.documentMode);
  var by = nn && "TextEvent" in window && !Da,
    Wf = nn && (!no || (Da && 8 < Da && 11 >= Da)),
    Ff = " ",
    Pf = !1;
  function If(t, e) {
    switch (t) {
      case "keyup":
        return yy.indexOf(e.keyCode) !== -1;
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
  function td(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var jl = !1;
  function Sy(t, e) {
    switch (t) {
      case "compositionend":
        return td(e);
      case "keypress":
        return e.which !== 32 ? null : ((Pf = !0), Ff);
      case "textInput":
        return (t = e.data), t === Ff && Pf ? null : t;
      default:
        return null;
    }
  }
  function xy(t, e) {
    if (jl)
      return t === "compositionend" || (!no && If(t, e))
        ? ((t = Qf()), (Ki = Fu = Mn = null), (jl = !1), t)
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
        return Wf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ey = {
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
  function ed(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ey[t.type] : e === "textarea";
  }
  function nd(t, e, n, a) {
    Nl ? (Dl ? Dl.push(a) : (Dl = [a])) : (Nl = a),
      (e = Lr(e, "onChange")),
      0 < e.length &&
        ((n = new Fi("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var ja = null,
    Ba = null;
  function Ry(t) {
    Uh(t, 0);
  }
  function Ii(t) {
    var e = wa(t);
    if (Hf(e)) return t;
  }
  function ld(t, e) {
    if (t === "change") return e;
  }
  var ad = !1;
  if (nn) {
    var lo;
    if (nn) {
      var ao = "oninput" in document;
      if (!ao) {
        var id = document.createElement("div");
        id.setAttribute("oninput", "return;"),
          (ao = typeof id.oninput == "function");
      }
      lo = ao;
    } else lo = !1;
    ad = lo && (!document.documentMode || 9 < document.documentMode);
  }
  function rd() {
    ja && (ja.detachEvent("onpropertychange", ud), (Ba = ja = null));
  }
  function ud(t) {
    if (t.propertyName === "value" && Ii(Ba)) {
      var e = [];
      nd(e, Ba, t, Ku(t)), Vf(Ry, e);
    }
  }
  function Ty(t, e, n) {
    t === "focusin"
      ? (rd(), (ja = e), (Ba = n), ja.attachEvent("onpropertychange", ud))
      : t === "focusout" && rd();
  }
  function Ay(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ii(Ba);
  }
  function _y(t, e) {
    if (t === "click") return Ii(e);
  }
  function Cy(t, e) {
    if (t === "input" || t === "change") return Ii(e);
  }
  function wy(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ve = typeof Object.is == "function" ? Object.is : wy;
  function Ua(t, e) {
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
  function od(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function cd(t, e) {
    var n = od(t);
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
      n = od(n);
    }
  }
  function sd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? sd(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function fd(t) {
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
  function io(t) {
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
  var Oy = nn && "documentMode" in document && 11 >= document.documentMode,
    Bl = null,
    ro = null,
    Ha = null,
    uo = !1;
  function dd(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    uo ||
      Bl == null ||
      Bl !== Zi(a) ||
      ((a = Bl),
      "selectionStart" in a && io(a)
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
      (Ha && Ua(Ha, a)) ||
        ((Ha = a),
        (a = Lr(ro, "onSelect")),
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
    oo = {},
    md = {};
  nn &&
    ((md = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ul.animationend.animation,
      delete Ul.animationiteration.animation,
      delete Ul.animationstart.animation),
    "TransitionEvent" in window || delete Ul.transitionend.transition);
  function rl(t) {
    if (oo[t]) return oo[t];
    if (!Ul[t]) return t;
    var e = Ul[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in md) return (oo[t] = e[n]);
    return t;
  }
  var hd = rl("animationend"),
    pd = rl("animationiteration"),
    vd = rl("animationstart"),
    My = rl("transitionrun"),
    zy = rl("transitionstart"),
    Ny = rl("transitioncancel"),
    gd = rl("transitionend"),
    yd = new Map(),
    co =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  co.push("scrollEnd");
  function $e(t, e) {
    yd.set(t, e), ll(e, [t]);
  }
  var bd = new WeakMap();
  function Ce(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = bd.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Bf(e) }), bd.set(t, e), e);
    }
    return { value: t, source: e, stack: Bf(e) };
  }
  var we = [],
    Hl = 0,
    so = 0;
  function tr() {
    for (var t = Hl, e = (so = Hl = 0); e < t; ) {
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
      c !== 0 && Sd(n, u, c);
    }
  }
  function er(t, e, n, a) {
    (we[Hl++] = t),
      (we[Hl++] = e),
      (we[Hl++] = n),
      (we[Hl++] = a),
      (so |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function fo(t, e, n, a) {
    return er(t, e, n, a), nr(t);
  }
  function Ll(t, e) {
    return er(t, null, null, e), nr(t);
  }
  function Sd(t, e, n) {
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
    if (50 < oi) throw ((oi = 0), (yc = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var $l = {};
  function Dy(t, e, n, a) {
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
    return new Dy(t, e, n, a);
  }
  function mo(t) {
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
  function xd(t, e) {
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
    if (((a = t), typeof t == "function")) mo(t) && (m = 1);
    else if (typeof t == "string")
      m = B0(t, n, lt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case tt:
          return (t = ge(31, n, e, u)), (t.elementType = tt), (t.lanes = c), t;
        case C:
          return ul(n.children, u, c, e);
        case R:
          (m = 8), (u |= 24);
          break;
        case O:
          return (
            (t = ge(12, n, e, u | 2)), (t.elementType = O), (t.lanes = c), t
          );
        case $:
          return (t = ge(13, n, e, u)), (t.elementType = $), (t.lanes = c), t;
        case W:
          return (t = ge(19, n, e, u)), (t.elementType = W), (t.lanes = c), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case L:
              case B:
                m = 10;
                break t;
              case q:
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
  function ho(t, e, n) {
    return (t = ge(6, t, null, e)), (t.lanes = n), t;
  }
  function po(t, e, n) {
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
  function Ed(t, e, n) {
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
  function vo(t) {
    t.return !== null && (cl(t, 1), Ed(t, 1, 0));
  }
  function go(t) {
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
    _t = !1,
    sl = null,
    Qe = !1,
    yo = Error(r(519));
  function fl(t) {
    var e = Error(r(418, ""));
    throw (Ya(Ce(e, t)), yo);
  }
  function Rd(t) {
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
        for (n = 0; n < si.length; n++) St(si[n], e);
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
          Lf(
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
        St("invalid", e), Yf(e, a.value, a.defaultValue, a.children), Qi(e);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Yh(e.textContent, n)
        ? (a.popover != null && (St("beforetoggle", e), St("toggle", e)),
          a.onScroll != null && St("scroll", e),
          a.onScrollEnd != null && St("scrollend", e),
          a.onClick != null && (e.onclick = $r),
          (e = !0))
        : (e = !1),
      e || fl(t);
  }
  function Td(t) {
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
  function La(t) {
    if (t !== ue) return !1;
    if (!_t) return Td(t), (_t = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || jc(t.type, t.memoizedProps))),
        (n = !n)),
      n && $t && fl(t),
      Td(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                $t = qe(t.nextSibling);
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
        ? ((e = $t), Zn(t.type) ? ((t = Lc), (Lc = null), ($t = t)) : ($t = e))
        : ($t = ue ? qe(t.stateNode.nextSibling) : null);
    return !0;
  }
  function $a() {
    ($t = ue = null), (_t = !1);
  }
  function Ad() {
    var t = sl;
    return (
      t !== null &&
        (de === null ? (de = t) : de.push.apply(de, t), (sl = null)),
      t
    );
  }
  function Ya(t) {
    sl === null ? (sl = [t]) : sl.push(t);
  }
  var bo = N(null),
    dl = null,
    un = null;
  function zn(t, e, n) {
    F(bo, e._currentValue), (e._currentValue = n);
  }
  function on(t) {
    (t._currentValue = bo.current), J(bo);
  }
  function So(t, e, n) {
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
  function xo(t, e, n, a) {
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
                So(c.return, n, t),
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
          So(m, n, t),
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
  function qa(t, e, n, a) {
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
          (t !== null ? t.push(vi) : (t = [vi]));
      }
      u = u.return;
    }
    t !== null && xo(e, t, n, a), (e.flags |= 262144);
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
    return _d(dl, t);
  }
  function ur(t, e) {
    return dl === null && ml(t), _d(t, e);
  }
  function _d(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), un === null)) {
      if (t === null) throw Error(r(308));
      (un = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else un = un.next = e;
    return n;
  }
  var jy =
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
    By = l.unstable_scheduleCallback,
    Uy = l.unstable_NormalPriority,
    Qt = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Eo() {
    return { controller: new jy(), data: new Map(), refCount: 0 };
  }
  function Ga(t) {
    t.refCount--,
      t.refCount === 0 &&
        By(Uy, function () {
          t.controller.abort();
        });
  }
  var Xa = null,
    Ro = 0,
    Gl = 0,
    Xl = null;
  function Hy(t, e) {
    if (Xa === null) {
      var n = (Xa = []);
      (Ro = 0),
        (Gl = Ac()),
        (Xl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return Ro++, e.then(Cd, Cd), e;
  }
  function Cd() {
    if (--Ro === 0 && Xa !== null) {
      Xl !== null && (Xl.status = "fulfilled");
      var t = Xa;
      (Xa = null), (Gl = 0), (Xl = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Ly(t, e) {
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
  var wd = M.S;
  M.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Hy(t, e),
      wd !== null && wd(t, e);
  };
  var hl = N(null);
  function To() {
    var t = hl.current;
    return t !== null ? t : jt.pooledCache;
  }
  function or(t, e) {
    e === null ? F(hl, hl.current) : F(hl, e.pool);
  }
  function Od() {
    var t = To();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var Va = Error(r(460)),
    Md = Error(r(474)),
    cr = Error(r(542)),
    Ao = { then: function () {} };
  function zd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function sr() {}
  function Nd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(sr, sr), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), jd(t), t);
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
            throw ((t = e.reason), jd(t), t);
        }
        throw ((Qa = e), Va);
    }
  }
  var Qa = null;
  function Dd() {
    if (Qa === null) throw Error(r(459));
    var t = Qa;
    return (Qa = null), t;
  }
  function jd(t) {
    if (t === Va || t === cr) throw Error(r(483));
  }
  var Nn = !1;
  function _o(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Co(t, e) {
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
  function Dn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ct & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = nr(t)),
        Sd(t, null, n),
        e
      );
    }
    return er(t, a, e, n), nr(t);
  }
  function Za(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), Cf(t, n);
    }
  }
  function wo(t, e) {
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
  var Oo = !1;
  function ka() {
    if (Oo) {
      var t = Xl;
      if (t !== null) throw t;
    }
  }
  function Ka(t, e, n, a) {
    Oo = !1;
    var u = t.updateQueue;
    Nn = !1;
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
        if (H ? (Rt & U) === U : (a & U) === U) {
          U !== 0 && U === Gl && (Oo = !0),
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
                Nn = !0;
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
        (Gn |= m),
        (t.lanes = m),
        (t.memoizedState = k);
    }
  }
  function Bd(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Ud(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Bd(n[t], e);
  }
  var Vl = N(null),
    fr = N(0);
  function Hd(t, e) {
    (t = pn), F(fr, t), F(Vl, e), (pn = t | e.baseLanes);
  }
  function Mo() {
    F(fr, pn), F(Vl, Vl.current);
  }
  function zo() {
    (pn = fr.current), J(Vl), J(fr);
  }
  var Bn = 0,
    gt = null,
    Ot = null,
    Xt = null,
    dr = !1,
    Ql = !1,
    pl = !1,
    mr = 0,
    Ja = 0,
    Zl = null,
    $y = 0;
  function qt() {
    throw Error(r(321));
  }
  function No(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!ve(t[n], e[n])) return !1;
    return !0;
  }
  function Do(t, e, n, a, u, c) {
    return (
      (Bn = c),
      (gt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (M.H = t === null || t.memoizedState === null ? Sm : xm),
      (pl = !1),
      (c = n(a, u)),
      (pl = !1),
      Ql && (c = $d(e, n, a, u)),
      Ld(t),
      c
    );
  }
  function Ld(t) {
    M.H = br;
    var e = Ot !== null && Ot.next !== null;
    if (((Bn = 0), (Xt = Ot = gt = null), (dr = !1), (Ja = 0), (Zl = null), e))
      throw Error(r(300));
    t === null ||
      Kt ||
      ((t = t.dependencies), t !== null && rr(t) && (Kt = !0));
  }
  function $d(t, e, n, a) {
    gt = t;
    var u = 0;
    do {
      if ((Ql && (Zl = null), (Ja = 0), (Ql = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Xt = Ot = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (M.H = Zy), (c = e(n, a));
    } while (Ql);
    return c;
  }
  function Yy() {
    var t = M.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Wa(e) : e),
      (t = t.useState()[0]),
      (Ot !== null ? Ot.memoizedState : null) !== t && (gt.flags |= 1024),
      e
    );
  }
  function jo() {
    var t = mr !== 0;
    return (mr = 0), t;
  }
  function Bo(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Uo(t) {
    if (dr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      dr = !1;
    }
    (Bn = 0), (Xt = Ot = gt = null), (Ql = !1), (Ja = mr = 0), (Zl = null);
  }
  function se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xt === null ? (gt.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt;
  }
  function Vt() {
    if (Ot === null) {
      var t = gt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ot.next;
    var e = Xt === null ? gt.memoizedState : Xt.next;
    if (e !== null) (Xt = e), (Ot = t);
    else {
      if (t === null)
        throw gt.alternate === null ? Error(r(467)) : Error(r(310));
      (Ot = t),
        (t = {
          memoizedState: Ot.memoizedState,
          baseState: Ot.baseState,
          baseQueue: Ot.baseQueue,
          queue: Ot.queue,
          next: null,
        }),
        Xt === null ? (gt.memoizedState = Xt = t) : (Xt = Xt.next = t);
    }
    return Xt;
  }
  function Ho() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wa(t) {
    var e = Ja;
    return (
      (Ja += 1),
      Zl === null && (Zl = []),
      (t = Nd(Zl, t, e)),
      (e = gt),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate),
        (M.H = e === null || e.memoizedState === null ? Sm : xm)),
      t
    );
  }
  function hr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Wa(t);
      if (t.$$typeof === B) return ie(t);
    }
    throw Error(r(438, String(t)));
  }
  function Lo(t) {
    var e = null,
      n = gt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = gt.alternate;
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
      n === null && ((n = Ho()), (gt.updateQueue = n)),
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
    return $o(e, Ot, t);
  }
  function $o(t, e, n) {
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
        if (k !== D.lane ? (Rt & k) === k : (Bn & k) === k) {
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
          else if ((Bn & U) === U) {
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
              (gt.lanes |= U),
              (Gn |= U);
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
            (gt.lanes |= k),
            (Gn |= k);
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
  function Yo(t) {
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
  function Yd(t, e, n) {
    var a = gt,
      u = Vt(),
      c = _t;
    if (c) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var m = !ve((Ot || u).memoizedState, n);
    m && ((u.memoizedState = n), (Kt = !0)), (u = u.queue);
    var v = Xd.bind(null, a, u, t);
    if (
      (Fa(2048, 8, v, [t]),
      u.getSnapshot !== e || m || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        kl(9, vr(), Gd.bind(null, a, u, n, e), null),
        jt === null)
      )
        throw Error(r(349));
      c || (Bn & 124) !== 0 || qd(a, e, n);
    }
    return n;
  }
  function qd(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = gt.updateQueue),
      e === null
        ? ((e = Ho()), (gt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Gd(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), Vd(e) && Qd(t);
  }
  function Xd(t, e, n) {
    return n(function () {
      Vd(e) && Qd(t);
    });
  }
  function Vd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ve(t, n);
    } catch {
      return !0;
    }
  }
  function Qd(t) {
    var e = Ll(t, 2);
    e !== null && Ee(e, t, 2);
  }
  function qo(t) {
    var e = se();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), pl)) {
        wn(!0);
        try {
          n();
        } finally {
          wn(!1);
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
  function Zd(t, e, n, a) {
    return (t.baseState = n), $o(t, Ot, typeof a == "function" ? a : cn);
  }
  function qy(t, e, n, a, u) {
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
      M.T !== null ? n(!0) : (c.isTransition = !1),
        a(c),
        (n = e.pending),
        n === null
          ? ((c.next = e.pending = c), kd(e, c))
          : ((c.next = n.next), (e.pending = n.next = c));
    }
  }
  function kd(t, e) {
    var n = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var c = M.T,
        m = {};
      M.T = m;
      try {
        var v = n(u, a),
          E = M.S;
        E !== null && E(m, v), Kd(t, e, v);
      } catch (D) {
        Go(t, e, D);
      } finally {
        M.T = c;
      }
    } else
      try {
        (c = n(u, a)), Kd(t, e, c);
      } catch (D) {
        Go(t, e, D);
      }
  }
  function Kd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Jd(t, e, a);
          },
          function (a) {
            return Go(t, e, a);
          },
        )
      : Jd(t, e, n);
  }
  function Jd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Wd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), kd(t, n)));
  }
  function Go(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), Wd(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Wd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Fd(t, e) {
    return e;
  }
  function Pd(t, e) {
    if (_t) {
      var n = jt.formState;
      if (n !== null) {
        t: {
          var a = gt;
          if (_t) {
            if ($t) {
              e: {
                for (var u = $t, c = Qe; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (((u = qe(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (c = u.data), (u = c === "F!" || c === "F" ? u : null);
              }
              if (u) {
                ($t = qe(u.nextSibling)), (a = u.data === "F!");
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
        lastRenderedReducer: Fd,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = gm.bind(null, gt, a)),
      (a.dispatch = n),
      (a = qo(!1)),
      (c = ko.bind(null, gt, !1, a.queue)),
      (a = se()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (n = qy.bind(null, gt, u, c, n)),
      (u.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function Id(t) {
    var e = Vt();
    return tm(e, Ot, t);
  }
  function tm(t, e, n) {
    if (
      ((e = $o(t, e, Fd)[0]),
      (t = pr(cn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Wa(e);
      } catch (m) {
        throw m === Va ? cr : m;
      }
    else a = e;
    e = Vt();
    var u = e.queue,
      c = u.dispatch;
    return (
      n !== e.memoizedState &&
        ((gt.flags |= 2048), kl(9, vr(), Gy.bind(null, u, n), null)),
      [a, c, t]
    );
  }
  function Gy(t, e) {
    t.action = e;
  }
  function em(t) {
    var e = Vt(),
      n = Ot;
    if (n !== null) return tm(e, n, t);
    Vt(), (e = e.memoizedState), (n = Vt());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function kl(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = gt.updateQueue),
      e === null && ((e = Ho()), (gt.updateQueue = e)),
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
  function nm() {
    return Vt().memoizedState;
  }
  function gr(t, e, n, a) {
    var u = se();
    (a = a === void 0 ? null : a),
      (gt.flags |= t),
      (u.memoizedState = kl(1 | e, vr(), n, a));
  }
  function Fa(t, e, n, a) {
    var u = Vt();
    a = a === void 0 ? null : a;
    var c = u.memoizedState.inst;
    Ot !== null && a !== null && No(a, Ot.memoizedState.deps)
      ? (u.memoizedState = kl(e, c, n, a))
      : ((gt.flags |= t), (u.memoizedState = kl(1 | e, c, n, a)));
  }
  function lm(t, e) {
    gr(8390656, 8, t, e);
  }
  function am(t, e) {
    Fa(2048, 8, t, e);
  }
  function im(t, e) {
    return Fa(4, 2, t, e);
  }
  function rm(t, e) {
    return Fa(4, 4, t, e);
  }
  function um(t, e) {
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
  function om(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Fa(4, 4, um.bind(null, e, t), n);
  }
  function Xo() {}
  function cm(t, e) {
    var n = Vt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && No(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function sm(t, e) {
    var n = Vt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && No(e, a[1])) return a[0];
    if (((a = t()), pl)) {
      wn(!0);
      try {
        t();
      } finally {
        wn(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function Vo(t, e, n) {
    return n === void 0 || (Bn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = mh()), (gt.lanes |= t), (Gn |= t), n);
  }
  function fm(t, e, n, a) {
    return ve(n, e)
      ? n
      : Vl.current !== null
        ? ((t = Vo(t, n, a)), ve(t, e) || (Kt = !0), t)
        : (Bn & 42) === 0
          ? ((Kt = !0), (t.memoizedState = n))
          : ((t = mh()), (gt.lanes |= t), (Gn |= t), e);
  }
  function dm(t, e, n, a, u) {
    var c = Y.p;
    Y.p = c !== 0 && 8 > c ? c : 8;
    var m = M.T,
      v = {};
    (M.T = v), ko(t, !1, e, n);
    try {
      var E = u(),
        D = M.S;
      if (
        (D !== null && D(v, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var V = Ly(E, a);
        Pa(t, e, V, xe(t));
      } else Pa(t, e, a, xe(t));
    } catch (k) {
      Pa(t, e, { then: function () {}, status: "rejected", reason: k }, xe());
    } finally {
      (Y.p = c), (M.T = m);
    }
  }
  function Xy() {}
  function Qo(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var u = mm(t).queue;
    dm(
      t,
      u,
      e,
      G,
      n === null
        ? Xy
        : function () {
            return hm(t), n(a);
          },
    );
  }
  function mm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cn,
        lastRenderedState: G,
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
  function hm(t) {
    var e = mm(t).next.queue;
    Pa(t, e, {}, xe());
  }
  function Zo() {
    return ie(vi);
  }
  function pm() {
    return Vt().memoizedState;
  }
  function vm() {
    return Vt().memoizedState;
  }
  function Vy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = xe();
          t = Dn(n);
          var a = jn(e, t, n);
          a !== null && (Ee(a, e, n), Za(a, e, n)),
            (e = { cache: Eo() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Qy(t, e, n) {
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
        ? ym(e, n)
        : ((n = fo(t, e, n, a)), n !== null && (Ee(n, t, a), bm(n, e, a)));
  }
  function gm(t, e, n) {
    var a = xe();
    Pa(t, e, n, a);
  }
  function Pa(t, e, n, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yr(t)) ym(e, u);
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
      if (((n = fo(t, e, u, a)), n !== null))
        return Ee(n, t, a), bm(n, e, a), !0;
    }
    return !1;
  }
  function ko(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ac(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yr(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = fo(t, n, a, 2)), e !== null && Ee(e, t, 2);
  }
  function yr(t) {
    var e = t.alternate;
    return t === gt || (e !== null && e === gt);
  }
  function ym(t, e) {
    Ql = dr = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function bm(t, e, n) {
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
    Sm = {
      readContext: ie,
      use: hr,
      useCallback: function (t, e) {
        return (se().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ie,
      useEffect: lm,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          gr(4194308, 4, um.bind(null, e, t), n);
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
          wn(!0);
          try {
            t();
          } finally {
            wn(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = se();
        if (n !== void 0) {
          var u = n(e);
          if (pl) {
            wn(!0);
            try {
              n(e);
            } finally {
              wn(!1);
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
          (t = t.dispatch = Qy.bind(null, gt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = se();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = qo(t);
        var e = t.queue,
          n = gm.bind(null, gt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Xo,
      useDeferredValue: function (t, e) {
        var n = se();
        return Vo(n, t, e);
      },
      useTransition: function () {
        var t = qo(!1);
        return (
          (t = dm.bind(null, gt, t.queue, !0, !1)),
          (se().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = gt,
          u = se();
        if (_t) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), jt === null)) throw Error(r(349));
          (Rt & 124) !== 0 || qd(a, e, n);
        }
        u.memoizedState = n;
        var c = { value: n, getSnapshot: e };
        return (
          (u.queue = c),
          lm(Xd.bind(null, a, c, t), [t]),
          (a.flags |= 2048),
          kl(9, vr(), Gd.bind(null, a, c, n, e), null),
          n
        );
      },
      useId: function () {
        var t = se(),
          e = jt.identifierPrefix;
        if (_t) {
          var n = rn,
            a = an;
          (n = (a & ~(1 << (32 - pe(a) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = mr++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = $y++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Zo,
      useFormState: Pd,
      useActionState: Pd,
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
          (e = ko.bind(null, gt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Lo,
      useCacheRefresh: function () {
        return (se().memoizedState = Vy.bind(null, gt));
      },
    },
    xm = {
      readContext: ie,
      use: hr,
      useCallback: cm,
      useContext: ie,
      useEffect: am,
      useImperativeHandle: om,
      useInsertionEffect: im,
      useLayoutEffect: rm,
      useMemo: sm,
      useReducer: pr,
      useRef: nm,
      useState: function () {
        return pr(cn);
      },
      useDebugValue: Xo,
      useDeferredValue: function (t, e) {
        var n = Vt();
        return fm(n, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = pr(cn)[0],
          e = Vt().memoizedState;
        return [typeof t == "boolean" ? t : Wa(t), e];
      },
      useSyncExternalStore: Yd,
      useId: pm,
      useHostTransitionStatus: Zo,
      useFormState: Id,
      useActionState: Id,
      useOptimistic: function (t, e) {
        var n = Vt();
        return Zd(n, Ot, t, e);
      },
      useMemoCache: Lo,
      useCacheRefresh: vm,
    },
    Zy = {
      readContext: ie,
      use: hr,
      useCallback: cm,
      useContext: ie,
      useEffect: am,
      useImperativeHandle: om,
      useInsertionEffect: im,
      useLayoutEffect: rm,
      useMemo: sm,
      useReducer: Yo,
      useRef: nm,
      useState: function () {
        return Yo(cn);
      },
      useDebugValue: Xo,
      useDeferredValue: function (t, e) {
        var n = Vt();
        return Ot === null ? Vo(n, t, e) : fm(n, Ot.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Yo(cn)[0],
          e = Vt().memoizedState;
        return [typeof t == "boolean" ? t : Wa(t), e];
      },
      useSyncExternalStore: Yd,
      useId: pm,
      useHostTransitionStatus: Zo,
      useFormState: em,
      useActionState: em,
      useOptimistic: function (t, e) {
        var n = Vt();
        return Ot !== null
          ? Zd(n, Ot, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: Lo,
      useCacheRefresh: vm,
    },
    Kl = null,
    Ia = 0;
  function Sr(t) {
    var e = Ia;
    return (Ia += 1), Kl === null && (Kl = []), Nd(Kl, t, e);
  }
  function ti(t, e) {
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
  function Em(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Rm(t) {
    function e(w, _) {
      if (t) {
        var z = w.deletions;
        z === null ? ((w.deletions = [_]), (w.flags |= 16)) : z.push(_);
      }
    }
    function n(w, _) {
      if (!t) return null;
      for (; _ !== null; ) e(w, _), (_ = _.sibling);
      return null;
    }
    function a(w) {
      for (var _ = new Map(); w !== null; )
        w.key !== null ? _.set(w.key, w) : _.set(w.index, w), (w = w.sibling);
      return _;
    }
    function u(w, _) {
      return (w = ln(w, _)), (w.index = 0), (w.sibling = null), w;
    }
    function c(w, _, z) {
      return (
        (w.index = z),
        t
          ? ((z = w.alternate),
            z !== null
              ? ((z = z.index), z < _ ? ((w.flags |= 67108866), _) : z)
              : ((w.flags |= 67108866), _))
          : ((w.flags |= 1048576), _)
      );
    }
    function m(w) {
      return t && w.alternate === null && (w.flags |= 67108866), w;
    }
    function v(w, _, z, Q) {
      return _ === null || _.tag !== 6
        ? ((_ = ho(z, w.mode, Q)), (_.return = w), _)
        : ((_ = u(_, z)), (_.return = w), _);
    }
    function E(w, _, z, Q) {
      var at = z.type;
      return at === C
        ? V(w, _, z.props.children, Q, z.key)
        : _ !== null &&
            (_.elementType === at ||
              (typeof at == "object" &&
                at !== null &&
                at.$$typeof === et &&
                Em(at) === _.type))
          ? ((_ = u(_, z.props)), ti(_, z), (_.return = w), _)
          : ((_ = lr(z.type, z.key, z.props, null, w.mode, Q)),
            ti(_, z),
            (_.return = w),
            _);
    }
    function D(w, _, z, Q) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== z.containerInfo ||
        _.stateNode.implementation !== z.implementation
        ? ((_ = po(z, w.mode, Q)), (_.return = w), _)
        : ((_ = u(_, z.children || [])), (_.return = w), _);
    }
    function V(w, _, z, Q, at) {
      return _ === null || _.tag !== 7
        ? ((_ = ul(z, w.mode, Q, at)), (_.return = w), _)
        : ((_ = u(_, z)), (_.return = w), _);
    }
    function k(w, _, z) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return (_ = ho("" + _, w.mode, z)), (_.return = w), _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case T:
            return (
              (z = lr(_.type, _.key, _.props, null, w.mode, z)),
              ti(z, _),
              (z.return = w),
              z
            );
          case x:
            return (_ = po(_, w.mode, z)), (_.return = w), _;
          case et:
            var Q = _._init;
            return (_ = Q(_._payload)), k(w, _, z);
        }
        if (I(_) || rt(_))
          return (_ = ul(_, w.mode, z, null)), (_.return = w), _;
        if (typeof _.then == "function") return k(w, Sr(_), z);
        if (_.$$typeof === B) return k(w, ur(w, _), z);
        xr(w, _);
      }
      return null;
    }
    function U(w, _, z, Q) {
      var at = _ !== null ? _.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return at !== null ? null : v(w, _, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case T:
            return z.key === at ? E(w, _, z, Q) : null;
          case x:
            return z.key === at ? D(w, _, z, Q) : null;
          case et:
            return (at = z._init), (z = at(z._payload)), U(w, _, z, Q);
        }
        if (I(z) || rt(z)) return at !== null ? null : V(w, _, z, Q, null);
        if (typeof z.then == "function") return U(w, _, Sr(z), Q);
        if (z.$$typeof === B) return U(w, _, ur(w, z), Q);
        xr(w, z);
      }
      return null;
    }
    function H(w, _, z, Q, at) {
      if (
        (typeof Q == "string" && Q !== "") ||
        typeof Q == "number" ||
        typeof Q == "bigint"
      )
        return (w = w.get(z) || null), v(_, w, "" + Q, at);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case T:
            return (
              (w = w.get(Q.key === null ? z : Q.key) || null), E(_, w, Q, at)
            );
          case x:
            return (
              (w = w.get(Q.key === null ? z : Q.key) || null), D(_, w, Q, at)
            );
          case et:
            var yt = Q._init;
            return (Q = yt(Q._payload)), H(w, _, z, Q, at);
        }
        if (I(Q) || rt(Q)) return (w = w.get(z) || null), V(_, w, Q, at, null);
        if (typeof Q.then == "function") return H(w, _, z, Sr(Q), at);
        if (Q.$$typeof === B) return H(w, _, z, ur(_, Q), at);
        xr(_, Q);
      }
      return null;
    }
    function dt(w, _, z, Q) {
      for (
        var at = null, yt = null, it = _, ft = (_ = 0), Wt = null;
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
          (_ = c(At, _, ft)),
          yt === null ? (at = At) : (yt.sibling = At),
          (yt = At),
          (it = Wt);
      }
      if (ft === z.length) return n(w, it), _t && cl(w, ft), at;
      if (it === null) {
        for (; ft < z.length; ft++)
          (it = k(w, z[ft], Q)),
            it !== null &&
              ((_ = c(it, _, ft)),
              yt === null ? (at = it) : (yt.sibling = it),
              (yt = it));
        return _t && cl(w, ft), at;
      }
      for (it = a(it); ft < z.length; ft++)
        (Wt = H(it, w, ft, z[ft], Q)),
          Wt !== null &&
            (t &&
              Wt.alternate !== null &&
              it.delete(Wt.key === null ? ft : Wt.key),
            (_ = c(Wt, _, ft)),
            yt === null ? (at = Wt) : (yt.sibling = Wt),
            (yt = Wt));
      return (
        t &&
          it.forEach(function (Fn) {
            return e(w, Fn);
          }),
        _t && cl(w, ft),
        at
      );
    }
    function st(w, _, z, Q) {
      if (z == null) throw Error(r(151));
      for (
        var at = null,
          yt = null,
          it = _,
          ft = (_ = 0),
          Wt = null,
          At = z.next();
        it !== null && !At.done;
        ft++, At = z.next()
      ) {
        it.index > ft ? ((Wt = it), (it = null)) : (Wt = it.sibling);
        var Fn = U(w, it, At.value, Q);
        if (Fn === null) {
          it === null && (it = Wt);
          break;
        }
        t && it && Fn.alternate === null && e(w, it),
          (_ = c(Fn, _, ft)),
          yt === null ? (at = Fn) : (yt.sibling = Fn),
          (yt = Fn),
          (it = Wt);
      }
      if (At.done) return n(w, it), _t && cl(w, ft), at;
      if (it === null) {
        for (; !At.done; ft++, At = z.next())
          (At = k(w, At.value, Q)),
            At !== null &&
              ((_ = c(At, _, ft)),
              yt === null ? (at = At) : (yt.sibling = At),
              (yt = At));
        return _t && cl(w, ft), at;
      }
      for (it = a(it); !At.done; ft++, At = z.next())
        (At = H(it, w, ft, At.value, Q)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              it.delete(At.key === null ? ft : At.key),
            (_ = c(At, _, ft)),
            yt === null ? (at = At) : (yt.sibling = At),
            (yt = At));
      return (
        t &&
          it.forEach(function (k0) {
            return e(w, k0);
          }),
        _t && cl(w, ft),
        at
      );
    }
    function zt(w, _, z, Q) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === C &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case T:
            t: {
              for (var at = z.key; _ !== null; ) {
                if (_.key === at) {
                  if (((at = z.type), at === C)) {
                    if (_.tag === 7) {
                      n(w, _.sibling),
                        (Q = u(_, z.props.children)),
                        (Q.return = w),
                        (w = Q);
                      break t;
                    }
                  } else if (
                    _.elementType === at ||
                    (typeof at == "object" &&
                      at !== null &&
                      at.$$typeof === et &&
                      Em(at) === _.type)
                  ) {
                    n(w, _.sibling),
                      (Q = u(_, z.props)),
                      ti(Q, z),
                      (Q.return = w),
                      (w = Q);
                    break t;
                  }
                  n(w, _);
                  break;
                } else e(w, _);
                _ = _.sibling;
              }
              z.type === C
                ? ((Q = ul(z.props.children, w.mode, Q, z.key)),
                  (Q.return = w),
                  (w = Q))
                : ((Q = lr(z.type, z.key, z.props, null, w.mode, Q)),
                  ti(Q, z),
                  (Q.return = w),
                  (w = Q));
            }
            return m(w);
          case x:
            t: {
              for (at = z.key; _ !== null; ) {
                if (_.key === at)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === z.containerInfo &&
                    _.stateNode.implementation === z.implementation
                  ) {
                    n(w, _.sibling),
                      (Q = u(_, z.children || [])),
                      (Q.return = w),
                      (w = Q);
                    break t;
                  } else {
                    n(w, _);
                    break;
                  }
                else e(w, _);
                _ = _.sibling;
              }
              (Q = po(z, w.mode, Q)), (Q.return = w), (w = Q);
            }
            return m(w);
          case et:
            return (at = z._init), (z = at(z._payload)), zt(w, _, z, Q);
        }
        if (I(z)) return dt(w, _, z, Q);
        if (rt(z)) {
          if (((at = rt(z)), typeof at != "function")) throw Error(r(150));
          return (z = at.call(z)), st(w, _, z, Q);
        }
        if (typeof z.then == "function") return zt(w, _, Sr(z), Q);
        if (z.$$typeof === B) return zt(w, _, ur(w, z), Q);
        xr(w, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          _ !== null && _.tag === 6
            ? (n(w, _.sibling), (Q = u(_, z)), (Q.return = w), (w = Q))
            : (n(w, _), (Q = ho(z, w.mode, Q)), (Q.return = w), (w = Q)),
          m(w))
        : n(w, _);
    }
    return function (w, _, z, Q) {
      try {
        Ia = 0;
        var at = zt(w, _, z, Q);
        return (Kl = null), at;
      } catch (it) {
        if (it === Va || it === cr) throw it;
        var yt = ge(29, it, null, w.mode);
        return (yt.lanes = Q), (yt.return = w), yt;
      } finally {
      }
    };
  }
  var Jl = Rm(!0),
    Tm = Rm(!1),
    ze = N(null),
    Ze = null;
  function Un(t) {
    var e = t.alternate;
    F(Zt, Zt.current & 1),
      F(ze, t),
      Ze === null &&
        (e === null || Vl.current !== null || e.memoizedState !== null) &&
        (Ze = t);
  }
  function Am(t) {
    if (t.tag === 22) {
      if ((F(Zt, Zt.current), F(ze, t), Ze === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ze = t);
      }
    } else Hn();
  }
  function Hn() {
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
          ((n = n.dehydrated), n === null || n.data === "$?" || Hc(n))
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
  function Ko(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Jo = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = xe(),
        u = Dn(a);
      (u.payload = e),
        n != null && (u.callback = n),
        (e = jn(t, u, a)),
        e !== null && (Ee(e, t, a), Za(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = xe(),
        u = Dn(a);
      (u.tag = 1),
        (u.payload = e),
        n != null && (u.callback = n),
        (e = jn(t, u, a)),
        e !== null && (Ee(e, t, a), Za(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = xe(),
        a = Dn(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = jn(t, a, n)),
        e !== null && (Ee(e, t, n), Za(e, t, n));
    },
  };
  function _m(t, e, n, a, u, c, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, c, m)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ua(n, a) || !Ua(u, c)
          : !0
    );
  }
  function Cm(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Jo.enqueueReplaceState(e, e.state, null);
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
  function wm(t) {
    Rr(t);
  }
  function Om(t) {
    console.error(t);
  }
  function Mm(t) {
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
  function zm(t, e, n) {
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
  function Wo(t, e, n) {
    return (
      (n = Dn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Tr(t, e);
      }),
      n
    );
  }
  function Nm(t) {
    return (t = Dn(t)), (t.tag = 3), t;
  }
  function Dm(t, e, n, a) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = a.value;
      (t.payload = function () {
        return u(c);
      }),
        (t.callback = function () {
          zm(e, n, a);
        });
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (t.callback = function () {
        zm(e, n, a),
          typeof u != "function" &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this));
        var v = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function ky(t, e, n, a, u) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && qa(e, n, u, !0),
        (n = ze.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Ze === null ? Sc() : n.alternate === null && Yt === 0 && (Yt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              a === Ao
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  Ec(t, a, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Ao
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
                  Ec(t, a, u)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return Ec(t, a, u), Sc(), !1;
    }
    if (_t)
      return (
        (e = ze.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== yo && ((t = Error(r(422), { cause: a })), Ya(Ce(t, n))))
          : (a !== yo && ((e = Error(r(423), { cause: a })), Ya(Ce(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = Ce(a, n)),
            (u = Wo(t.stateNode, a, u)),
            wo(t, u),
            Yt !== 4 && (Yt = 2)),
        !1
      );
    var c = Error(r(520), { cause: a });
    if (
      ((c = Ce(c, n)),
      ui === null ? (ui = [c]) : ui.push(c),
      Yt !== 4 && (Yt = 2),
      e === null)
    )
      return !0;
    (a = Ce(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = u & -u),
            (n.lanes |= t),
            (t = Wo(n.stateNode, a, t)),
            wo(n, t),
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
                  (Xn === null || !Xn.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = Nm(u)),
              Dm(u, t, n, a),
              wo(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var jm = Error(r(461)),
    Kt = !1;
  function Pt(t, e, n, a) {
    e.child = t === null ? Tm(e, null, n, a) : Jl(e, t.child, n, a);
  }
  function Bm(t, e, n, a, u) {
    n = n.render;
    var c = e.ref;
    if ("ref" in a) {
      var m = {};
      for (var v in a) v !== "ref" && (m[v] = a[v]);
    } else m = a;
    return (
      ml(e),
      (a = Do(t, e, n, m, c, u)),
      (v = jo()),
      t !== null && !Kt
        ? (Bo(t, e, u), fn(t, e, u))
        : (_t && v && vo(e), (e.flags |= 1), Pt(t, e, a, u), e.child)
    );
  }
  function Um(t, e, n, a, u) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" &&
        !mo(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = c), Hm(t, e, c, a, u))
        : ((t = lr(n.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !ac(t, u))) {
      var m = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ua), n(m, a) && t.ref === e.ref)
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
  function Hm(t, e, n, a, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Ua(c, a) && t.ref === e.ref)
        if (((Kt = !1), (e.pendingProps = a = c), ac(t, u)))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else return (e.lanes = t.lanes), fn(t, e, u);
    }
    return Fo(t, e, n, a, u);
  }
  function Lm(t, e, n) {
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
        return $m(t, e, a, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && or(e, c !== null ? c.cachePool : null),
          c !== null ? Hd(e, c) : Mo(),
          Am(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          $m(t, e, c !== null ? c.baseLanes | n : n, n)
        );
    } else
      c !== null
        ? (or(e, c.cachePool), Hd(e, c), Hn(), (e.memoizedState = null))
        : (t !== null && or(e, null), Mo(), Hn());
    return Pt(t, e, u, n), e.child;
  }
  function $m(t, e, n, a) {
    var u = To();
    return (
      (u = u === null ? null : { parent: Qt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: n, cachePool: u }),
      t !== null && or(e, null),
      Mo(),
      Am(e),
      t !== null && qa(t, e, a, !0),
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
  function Fo(t, e, n, a, u) {
    return (
      ml(e),
      (n = Do(t, e, n, a, void 0, u)),
      (a = jo()),
      t !== null && !Kt
        ? (Bo(t, e, u), fn(t, e, u))
        : (_t && a && vo(e), (e.flags |= 1), Pt(t, e, n, u), e.child)
    );
  }
  function Ym(t, e, n, a, u, c) {
    return (
      ml(e),
      (e.updateQueue = null),
      (n = $d(e, a, n, u)),
      Ld(t),
      (a = jo()),
      t !== null && !Kt
        ? (Bo(t, e, c), fn(t, e, c))
        : (_t && a && vo(e), (e.flags |= 1), Pt(t, e, n, c), e.child)
    );
  }
  function qm(t, e, n, a, u) {
    if ((ml(e), e.stateNode === null)) {
      var c = $l,
        m = n.contextType;
      typeof m == "object" && m !== null && (c = ie(m)),
        (c = new n(a, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Jo),
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
        typeof m == "function" && (Ko(e, n, m, a), (c.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((m = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          m !== c.state && Jo.enqueueReplaceState(c, c.state, null),
          Ka(e, a, c, u),
          ka(),
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
        (Nn = !1);
      var U = e.memoizedState;
      (c.state = U),
        Ka(e, a, c, u),
        ka(),
        (D = e.memoizedState),
        v || U !== D || Nn
          ? (typeof k == "function" && (Ko(e, n, k, a), (D = e.memoizedState)),
            (E = Nn || _m(e, n, E, a, U, D, m))
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
        Co(t, e),
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
        (Nn = !1),
        (U = e.memoizedState),
        (c.state = U),
        Ka(e, a, c, u),
        ka();
      var H = e.memoizedState;
      m !== k ||
      U !== H ||
      Nn ||
      (t !== null && t.dependencies !== null && rr(t.dependencies))
        ? (typeof v == "function" && (Ko(e, n, v, a), (H = e.memoizedState)),
          (V =
            Nn ||
            _m(e, n, V, a, U, H, E) ||
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
  function Gm(t, e, n, a) {
    return $a(), (e.flags |= 256), Pt(t, e, n, a), e.child;
  }
  var Po = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Io(t) {
    return { baseLanes: t, cachePool: Od() };
  }
  function tc(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ne), t;
  }
  function Xm(t, e, n) {
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
      if (_t) {
        if ((u ? Un(e) : Hn(), _t)) {
          var v = $t,
            E;
          if ((E = v)) {
            t: {
              for (E = v, v = Qe; E.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((E = qe(E.nextSibling)), E === null)) {
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
          return Hc(v) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        sn(e);
      }
      return (
        (v = a.children),
        (a = a.fallback),
        u
          ? (Hn(),
            (u = e.mode),
            (v = _r({ mode: "hidden", children: v }, u)),
            (a = ul(a, u, n, null)),
            (v.return = e),
            (a.return = e),
            (v.sibling = a),
            (e.child = v),
            (u = e.child),
            (u.memoizedState = Io(n)),
            (u.childLanes = tc(t, m, n)),
            (e.memoizedState = Po),
            a)
          : (Un(e), ec(e, v))
      );
    }
    if (
      ((E = t.memoizedState), E !== null && ((v = E.dehydrated), v !== null))
    ) {
      if (c)
        e.flags & 256
          ? (Un(e), (e.flags &= -257), (e = nc(t, e, n)))
          : e.memoizedState !== null
            ? (Hn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Hn(),
              (u = a.fallback),
              (v = e.mode),
              (a = _r({ mode: "visible", children: a.children }, v)),
              (u = ul(u, v, n, null)),
              (u.flags |= 2),
              (a.return = e),
              (u.return = e),
              (a.sibling = u),
              (e.child = a),
              Jl(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = Io(n)),
              (a.childLanes = tc(t, m, n)),
              (e.memoizedState = Po),
              (e = u));
      else if ((Un(e), Hc(v))) {
        if (((m = v.nextSibling && v.nextSibling.dataset), m)) var D = m.dgst;
        (m = D),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = m),
          Ya({ value: a, source: null, stack: null }),
          (e = nc(t, e, n));
      } else if (
        (Kt || qa(t, e, n, !1), (m = (n & t.childLanes) !== 0), Kt || m)
      ) {
        if (
          ((m = jt),
          m !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : Hu(a)),
            (a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== E.retryLane))
        )
          throw ((E.retryLane = a), Ll(t, a), Ee(m, t, a), jm);
        v.data === "$?" || Sc(), (e = nc(t, e, n));
      } else
        v.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = E.treeContext),
            ($t = qe(v.nextSibling)),
            (ue = e),
            (_t = !0),
            (sl = null),
            (Qe = !1),
            t !== null &&
              ((Oe[Me++] = an),
              (Oe[Me++] = rn),
              (Oe[Me++] = ol),
              (an = t.id),
              (rn = t.overflow),
              (ol = e)),
            (e = ec(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (Hn(),
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
          ? (v = Io(n))
          : ((E = v.cachePool),
            E !== null
              ? ((D = Qt._currentValue),
                (E = E.parent !== D ? { parent: D, pool: D } : E))
              : (E = Od()),
            (v = { baseLanes: v.baseLanes | n, cachePool: E })),
        (u.memoizedState = v),
        (u.childLanes = tc(t, m, n)),
        (e.memoizedState = Po),
        a)
      : (Un(e),
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
  function ec(t, e) {
    return (
      (e = _r({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function _r(t, e) {
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
  function nc(t, e, n) {
    return (
      Jl(e, t.child, null, n),
      (t = ec(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Vm(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), So(t.return, e, n);
  }
  function lc(t, e, n, a, u) {
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
  function Qm(t, e, n) {
    var a = e.pendingProps,
      u = a.revealOrder,
      c = a.tail;
    if ((Pt(t, e, a.children, n), (a = Zt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Vm(t, n, e);
          else if (t.tag === 19) Vm(t, n, e);
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
          lc(e, !1, u, n, c);
        break;
      case "backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Er(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = n), (n = u), (u = t);
        }
        lc(e, !0, n, null, c);
        break;
      case "together":
        lc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function fn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Gn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((qa(t, e, n, !1), (n & e.childLanes) === 0)) return null;
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
  function ac(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && rr(t)));
  }
  function Ky(t, e, n) {
    switch (e.tag) {
      case 3:
        Et(e, e.stateNode.containerInfo),
          zn(e, Qt, t.memoizedState.cache),
          $a();
        break;
      case 27:
      case 5:
        Ft(e);
        break;
      case 4:
        Et(e, e.stateNode.containerInfo);
        break;
      case 10:
        zn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Un(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Xm(t, e, n)
              : (Un(e), (t = fn(t, e, n)), t !== null ? t.sibling : null);
        Un(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (qa(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return Qm(t, e, n);
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
        return (e.lanes = 0), Lm(t, e, n);
      case 24:
        zn(e, Qt, t.memoizedState.cache);
    }
    return fn(t, e, n);
  }
  function Zm(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Kt = !0;
      else {
        if (!ac(t, n) && (e.flags & 128) === 0) return (Kt = !1), Ky(t, e, n);
        Kt = (t.flags & 131072) !== 0;
      }
    else (Kt = !1), _t && (e.flags & 1048576) !== 0 && Ed(e, ir, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            u = a._init;
          if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
            mo(a)
              ? ((t = vl(a, t)), (e.tag = 1), (e = qm(null, e, a, t, n)))
              : ((e.tag = 0), (e = Fo(null, e, a, t, n)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === X)) {
                (e.tag = 11), (e = Bm(null, e, a, t, n));
                break t;
              } else if (u === P) {
                (e.tag = 14), (e = Um(null, e, a, t, n));
                break t;
              }
            }
            throw ((e = ct(a) || a), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Fo(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (u = vl(a, e.pendingProps)), qm(t, e, a, u, n);
      case 3:
        t: {
          if ((Et(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var c = e.memoizedState;
          (u = c.element), Co(t, e), Ka(e, a, null, n);
          var m = e.memoizedState;
          if (
            ((a = m.cache),
            zn(e, Qt, a),
            a !== c.cache && xo(e, [Qt], n, !0),
            ka(),
            (a = m.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = Gm(t, e, a, n);
              break t;
            } else if (a !== u) {
              (u = Ce(Error(r(424)), e)), Ya(u), (e = Gm(t, e, a, n));
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
                $t = qe(t.firstChild),
                  ue = e,
                  _t = !0,
                  sl = null,
                  Qe = !0,
                  n = Tm(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if (($a(), a === u)) {
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
            ? (n = Wh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : _t ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Yr(nt.current).createElement(n)),
                (a[ae] = e),
                (a[oe] = t),
                te(a, n, t),
                kt(a),
                (e.stateNode = a))
            : (e.memoizedState = Wh(
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
            _t &&
            ((a = e.stateNode = kh(e.type, e.pendingProps, nt.current)),
            (ue = e),
            (Qe = !0),
            (u = $t),
            Zn(e.type) ? ((Lc = u), ($t = qe(a.firstChild))) : ($t = u)),
          Pt(t, e, e.pendingProps.children, n),
          Ar(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            _t &&
            ((u = a = $t) &&
              ((a = E0(a, e.type, e.pendingProps, Qe)),
              a !== null
                ? ((e.stateNode = a),
                  (ue = e),
                  ($t = qe(a.firstChild)),
                  (Qe = !1),
                  (u = !0))
                : (u = !1)),
            u || fl(e)),
          Ft(e),
          (u = e.type),
          (c = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (a = c.children),
          jc(u, c) ? (a = null) : m !== null && jc(u, m) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Do(t, e, Yy, null, null, n)), (vi._currentValue = u)),
          Ar(t, e),
          Pt(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            _t &&
            ((t = n = $t) &&
              ((n = R0(n, e.pendingProps, Qe)),
              n !== null
                ? ((e.stateNode = n), (ue = e), ($t = null), (t = !0))
                : (t = !1)),
            t || fl(e)),
          null
        );
      case 13:
        return Xm(t, e, n);
      case 4:
        return (
          Et(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Jl(e, null, a, n)) : Pt(t, e, a, n),
          e.child
        );
      case 11:
        return Bm(t, e, e.type, e.pendingProps, n);
      case 7:
        return Pt(t, e, e.pendingProps, n), e.child;
      case 8:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return Pt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          zn(e, e.type, a.value),
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
        return Um(t, e, e.type, e.pendingProps, n);
      case 15:
        return Hm(t, e, e.type, e.pendingProps, n);
      case 19:
        return Qm(t, e, n);
      case 31:
        return (
          (a = e.pendingProps),
          (n = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((n = _r(a, n)),
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
        return Lm(t, e, n);
      case 24:
        return (
          ml(e),
          (a = ie(Qt)),
          t === null
            ? ((u = To()),
              u === null &&
                ((u = jt),
                (c = Eo()),
                (u.pooledCache = c),
                c.refCount++,
                c !== null && (u.pooledCacheLanes |= n),
                (u = c)),
              (e.memoizedState = { parent: a, cache: u }),
              _o(e),
              zn(e, Qt, u))
            : ((t.lanes & n) !== 0 && (Co(t, e), Ka(e, null, null, n), ka()),
              (u = t.memoizedState),
              (c = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  zn(e, Qt, a))
                : ((a = c.cache),
                  zn(e, Qt, a),
                  a !== u.cache && xo(e, [Qt], n, !0))),
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
  function km(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ep(e))) {
      if (
        ((e = ze.current),
        e !== null &&
          ((Rt & 4194048) === Rt
            ? Ze !== null
            : ((Rt & 62914560) !== Rt && (Rt & 536870912) === 0) || e !== Ze))
      )
        throw ((Qa = Ao), Md);
      t.flags |= 8192;
    }
  }
  function Cr(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Af() : 536870912), (t.lanes |= e), (Il |= e));
  }
  function ei(t, e) {
    if (!_t)
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
  function Jy(t, e, n) {
    var a = e.pendingProps;
    switch ((go(e), e.tag)) {
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
            (La(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ad())),
          Lt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (dn(e),
              n !== null ? (Lt(e), km(e, n)) : (Lt(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (dn(e), Lt(e), km(e, n))
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
            La(e) ? Rd(e) : ((t = kh(u, a, n)), (e.stateNode = t), dn(e));
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
          if (((t = lt.current), La(e))) Rd(e);
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
          if (((t = nt.current), La(e))) {
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
                Yh(t.nodeValue, n)
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
          if (((u = La(e)), a !== null && a.dehydrated !== null)) {
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
              $a(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Lt(e), (u = !1);
          } else
            (u = Ad()),
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
          Cr(e, e.updateQueue),
          Lt(e),
          null
        );
      case 4:
        return le(), t === null && Oc(e.stateNode.containerInfo), Lt(e), null;
      case 10:
        return on(e.type), Lt(e), null;
      case 19:
        if ((J(Zt), (u = e.memoizedState), u === null)) return Lt(e), null;
        if (((a = (e.flags & 128) !== 0), (c = u.rendering), c === null))
          if (a) ei(u, !1);
          else {
            if (Yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Er(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      ei(u, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      Cr(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    xd(n, t), (n = n.sibling);
                  return F(Zt, (Zt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Te() > Mr &&
              ((e.flags |= 128), (a = !0), ei(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = Er(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Cr(e, t),
                ei(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !c.alternate &&
                  !_t)
              )
                return Lt(e), null;
            } else
              2 * Te() - u.renderingStartTime > Mr &&
                n !== 536870912 &&
                ((e.flags |= 128), (a = !0), ei(u, !1), (e.lanes = 4194304));
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
          zo(),
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
          n !== null && Cr(e, n.retryQueue),
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
  function Wy(t, e) {
    switch ((go(e), e.tag)) {
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
          $a();
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
          zo(),
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
  function Km(t, e) {
    switch ((go(e), e.tag)) {
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
        sn(e), zo(), t !== null && J(hl);
        break;
      case 24:
        on(Qt);
    }
  }
  function ni(t, e) {
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
  function Ln(t, e, n) {
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
  function Jm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ud(e, n);
      } catch (a) {
        Nt(t, t.return, a);
      }
    }
  }
  function Wm(t, e, n) {
    (n.props = vl(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Nt(t, e, a);
    }
  }
  function li(t, e) {
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
  function Fm(t) {
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
  function ic(t, e, n) {
    try {
      var a = t.stateNode;
      g0(a, t.type, n, e), (a[oe] = e);
    } catch (u) {
      Nt(t, t.return, u);
    }
  }
  function Pm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Zn(t.type)) ||
      t.tag === 4
    );
  }
  function rc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Pm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Zn(t.type)) ||
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
  function uc(t, e, n) {
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
      (a === 27 && Zn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (uc(t, e, n), t = t.sibling; t !== null; )
        uc(t, e, n), (t = t.sibling);
  }
  function wr(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && Zn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (wr(t, e, n), t = t.sibling; t !== null; )
        wr(t, e, n), (t = t.sibling);
  }
  function Im(t) {
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
    oc = !1,
    th = typeof WeakSet == "function" ? WeakSet : Set,
    Jt = null;
  function Fy(t, e) {
    if (((t = t.containerInfo), (Nc = Zr), (t = fd(t)), io(t))) {
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
      Dc = { focusedElem: t, selectionRange: n }, Zr = !1, Jt = e;
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
                  Uc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Uc(t);
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
  function eh(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        $n(t, n), a & 4 && ni(5, n);
        break;
      case 1:
        if (($n(t, n), a & 4))
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
        a & 64 && Jm(n), a & 512 && li(n, n.return);
        break;
      case 3:
        if (($n(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
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
            Ud(t, e);
          } catch (m) {
            Nt(n, n.return, m);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Im(n);
      case 26:
      case 5:
        $n(t, n), e === null && a & 4 && Fm(n), a & 512 && li(n, n.return);
        break;
      case 12:
        $n(t, n);
        break;
      case 13:
        $n(t, n),
          a & 4 && ah(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = r0.bind(null, n)), T0(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || mn), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Gt), (u = mn);
          var c = Gt;
          (mn = a),
            (Gt = e) && !c ? Yn(t, n, (n.subtreeFlags & 8772) !== 0) : $n(t, n),
            (mn = u),
            (Gt = c);
        }
        break;
      case 30:
        break;
      default:
        $n(t, n);
    }
  }
  function nh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), nh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Yu(e)),
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
    for (n = n.child; n !== null; ) lh(t, e, n), (n = n.sibling);
  }
  function lh(t, e, n) {
    if (he && typeof he.onCommitFiberUnmount == "function")
      try {
        he.onCommitFiberUnmount(Ta, n);
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
        Zn(n.type) && ((Ht = n.stateNode), (fe = !1)),
          hn(t, e, n),
          di(n.stateNode),
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
              Qh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              Si(t))
            : Qh(Ht, n.stateNode));
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
        Gt || Ln(2, n, e), Gt || Ln(4, n, e), hn(t, e, n);
        break;
      case 1:
        Gt ||
          (ke(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Wm(n, e, a)),
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
  function ah(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Si(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
  }
  function Py(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new th()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new th()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function cc(t, e) {
    var n = Py(t);
    e.forEach(function (a) {
      var u = u0.bind(null, t, a);
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
              if (Zn(v.type)) {
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
        lh(c, m, u),
          (Ht = null),
          (fe = !1),
          (c = u.alternate),
          c !== null && (c.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) ih(e, t), (e = e.sibling);
  }
  var Ye = null;
  function ih(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ye(e, t),
          be(t),
          a & 4 && (Ln(3, t, t.return), ni(3, t), Ln(5, t, t.return));
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
        var u = Ye;
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
                      var m = Ih("link", "href", u).get(a + (n.href || ""));
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
                        (m = Ih("meta", "content", u).get(
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
              } else tp(u, t.type, t.stateNode);
            else t.stateNode = Ph(u, a, t.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                a === null
                  ? tp(u, t.type, t.stateNode)
                  : Ph(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                ic(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ye(e, t),
          be(t),
          a & 512 && (Gt || n === null || ke(n, n.return)),
          n !== null && a & 4 && ic(t, t.memoizedProps, n.memoizedProps);
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
          ((u = t.memoizedProps), ic(t, u, n !== null ? n.memoizedProps : u)),
          a & 1024 && (oc = !0);
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
          (u = Ye),
          (Ye = qr(e.containerInfo)),
          ye(e, t),
          (Ye = u),
          be(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Si(e.containerInfo);
          } catch (H) {
            Nt(t, t.return, H);
          }
        oc && ((oc = !1), rh(t));
        break;
      case 4:
        (a = Ye),
          (Ye = qr(t.stateNode.containerInfo)),
          ye(e, t),
          be(t),
          (Ye = a);
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
            (pc = Te()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), cc(t, a)));
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
            n !== null && ((a.retryQueue = null), cc(t, n))));
        break;
      case 19:
        ye(e, t),
          be(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), cc(t, a)));
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
          if (Pm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              c = rc(t);
            wr(t, c, u);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (zl(m, ""), (n.flags &= -33));
            var v = rc(t);
            wr(t, v, m);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              D = rc(t);
            uc(t, D, E);
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
  function rh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        rh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function $n(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) eh(t, e.alternate, e), (e = e.sibling);
  }
  function gl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ln(4, e, e.return), gl(e);
          break;
        case 1:
          ke(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Wm(e, e.return, n),
            gl(e);
          break;
        case 27:
          di(e.stateNode);
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
  function Yn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        c = e,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Yn(u, c, n), ni(4, c);
          break;
        case 1:
          if (
            (Yn(u, c, n),
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
                  Bd(E[u], v);
            } catch (D) {
              Nt(a, a.return, D);
            }
          }
          n && m & 64 && Jm(c), li(c, c.return);
          break;
        case 27:
          Im(c);
        case 26:
        case 5:
          Yn(u, c, n), n && a === null && m & 4 && Fm(c), li(c, c.return);
          break;
        case 12:
          Yn(u, c, n);
          break;
        case 13:
          Yn(u, c, n), n && m & 4 && ah(u, c);
          break;
        case 22:
          c.memoizedState === null && Yn(u, c, n), li(c, c.return);
          break;
        case 30:
          break;
        default:
          Yn(u, c, n);
      }
      e = e.sibling;
    }
  }
  function sc(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ga(n));
  }
  function fc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ga(t));
  }
  function Ke(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) uh(t, e, n, a), (e = e.sibling);
  }
  function uh(t, e, n, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ke(t, e, n, a), u & 2048 && ni(9, e);
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
            e !== t && (e.refCount++, t != null && Ga(t)));
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
              : ai(t, e)
            : c._visibility & 2
              ? Ke(t, e, n, a)
              : ((c._visibility |= 2),
                Wl(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && sc(m, e);
        break;
      case 24:
        Ke(t, e, n, a), u & 2048 && fc(e.alternate, e);
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
          Wl(c, m, v, E, u), ni(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null
            ? V._visibility & 2
              ? Wl(c, m, v, E, u)
              : ai(c, m)
            : ((V._visibility |= 2), Wl(c, m, v, E, u)),
            u && D & 2048 && sc(m.alternate, m);
          break;
        case 24:
          Wl(c, m, v, E, u), u && D & 2048 && fc(m.alternate, m);
          break;
        default:
          Wl(c, m, v, E, u);
      }
      e = e.sibling;
    }
  }
  function ai(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            ai(n, a), u & 2048 && sc(a.alternate, a);
            break;
          case 24:
            ai(n, a), u & 2048 && fc(a.alternate, a);
            break;
          default:
            ai(n, a);
        }
        e = e.sibling;
      }
  }
  var ii = 8192;
  function Fl(t) {
    if (t.subtreeFlags & ii)
      for (t = t.child; t !== null; ) oh(t), (t = t.sibling);
  }
  function oh(t) {
    switch (t.tag) {
      case 26:
        Fl(t),
          t.flags & ii &&
            t.memoizedState !== null &&
            H0(Ye, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Fl(t);
        break;
      case 3:
      case 4:
        var e = Ye;
        (Ye = qr(t.stateNode.containerInfo)), Fl(t), (Ye = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = ii), (ii = 16777216), Fl(t), (ii = e))
            : Fl(t));
        break;
      default:
        Fl(t);
    }
  }
  function ch(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function ri(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Jt = a), fh(a, t);
        }
      ch(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) sh(t), (t = t.sibling);
  }
  function sh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ri(t), t.flags & 2048 && Ln(9, t, t.return);
        break;
      case 3:
        ri(t);
        break;
      case 12:
        ri(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Or(t))
          : ri(t);
        break;
      default:
        ri(t);
    }
  }
  function Or(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (Jt = a), fh(a, t);
        }
      ch(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Ln(8, e, e.return), Or(e);
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
  function fh(t, e) {
    for (; Jt !== null; ) {
      var n = Jt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ln(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ga(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (Jt = a);
      else
        t: for (n = t; Jt !== null; ) {
          a = Jt;
          var u = a.sibling,
            c = a.return;
          if ((nh(a), a === n)) {
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
  var Iy = {
      getCacheForType: function (t) {
        var e = ie(Qt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    t0 = typeof WeakMap == "function" ? WeakMap : Map,
    Ct = 0,
    jt = null,
    bt = null,
    Rt = 0,
    wt = 0,
    Se = null,
    qn = !1,
    Pl = !1,
    dc = !1,
    pn = 0,
    Yt = 0,
    Gn = 0,
    yl = 0,
    mc = 0,
    Ne = 0,
    Il = 0,
    ui = null,
    de = null,
    hc = !1,
    pc = 0,
    Mr = 1 / 0,
    zr = null,
    Xn = null,
    It = 0,
    Vn = null,
    ta = null,
    ea = 0,
    vc = 0,
    gc = null,
    dh = null,
    oi = 0,
    yc = null;
  function xe() {
    if ((Ct & 2) !== 0 && Rt !== 0) return Rt & -Rt;
    if (M.T !== null) {
      var t = Gl;
      return t !== 0 ? t : Ac();
    }
    return wf();
  }
  function mh() {
    Ne === 0 && (Ne = (Rt & 536870912) === 0 || _t ? Tf() : 536870912);
    var t = ze.current;
    return t !== null && (t.flags |= 32), Ne;
  }
  function Ee(t, e, n) {
    ((t === jt && (wt === 2 || wt === 9)) || t.cancelPendingCommit !== null) &&
      (na(t, 0), Qn(t, Rt, Ne, !1)),
      _a(t, n),
      ((Ct & 2) === 0 || t !== jt) &&
        (t === jt &&
          ((Ct & 2) === 0 && (yl |= n), Yt === 4 && Qn(t, Rt, Ne, !1)),
        Je(t));
  }
  function hh(t, e, n) {
    if ((Ct & 6) !== 0) throw Error(r(327));
    var a = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Aa(t, e),
      u = a ? l0(t, e) : xc(t, e, !0),
      c = a;
    do {
      if (u === 0) {
        Pl && !a && Qn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), c && !e0(n))) {
          (u = xc(t, e, !1)), (c = !1);
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
              u = ui;
              var E = v.current.memoizedState.isDehydrated;
              if ((E && (na(v, m).flags |= 256), (m = xc(v, m, !1)), m !== 2)) {
                if (dc && !E) {
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
          na(t, 0), Qn(t, e, 0, !0);
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
              Qn(a, e, Ne, !qn);
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
          if ((e & 62914560) === e && ((u = pc + 300 - Te()), 10 < u)) {
            if ((Qn(a, e, Ne, !qn), Gi(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = Xh(
              ph.bind(null, a, n, de, zr, hc, e, Ne, yl, Il, qn, c, 2, -0, 0),
              u,
            );
            break t;
          }
          ph(a, n, de, zr, hc, e, Ne, yl, Il, qn, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Je(t);
  }
  function ph(t, e, n, a, u, c, m, v, E, D, V, k, U, H) {
    if (
      ((t.timeoutHandle = -1),
      (k = e.subtreeFlags),
      (k & 8192 || (k & 16785408) === 16785408) &&
        ((pi = { stylesheets: null, count: 0, unsuspend: U0 }),
        oh(e),
        (k = L0()),
        k !== null))
    ) {
      (t.cancelPendingCommit = k(
        Eh.bind(null, t, e, c, n, a, u, m, v, E, V, 1, U, H),
      )),
        Qn(t, c, m, !D);
      return;
    }
    Eh(t, e, c, n, a, u, m, v, E);
  }
  function e0(t) {
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
  function Qn(t, e, n, a) {
    (e &= ~mc),
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
    n !== 0 && _f(t, n, e);
  }
  function Nr() {
    return (Ct & 6) === 0 ? (ci(0), !1) : !0;
  }
  function bc() {
    if (bt !== null) {
      if (wt === 0) var t = bt.return;
      else (t = bt), (un = dl = null), Uo(t), (Kl = null), (Ia = 0), (t = bt);
      for (; t !== null; ) Km(t.alternate, t), (t = t.return);
      bt = null;
    }
  }
  function na(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), b0(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      bc(),
      (jt = t),
      (bt = n = ln(t.current, null)),
      (Rt = e),
      (wt = 0),
      (Se = null),
      (qn = !1),
      (Pl = Aa(t, e)),
      (dc = !1),
      (Il = Ne = mc = yl = Gn = Yt = 0),
      (de = ui = null),
      (hc = !1),
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
  function vh(t, e) {
    (gt = null),
      (M.H = br),
      e === Va || e === cr
        ? ((e = Dd()), (wt = 3))
        : e === Md
          ? ((e = Dd()), (wt = 4))
          : (wt =
              e === jm
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Se = e),
      bt === null && ((Yt = 1), Tr(t, Ce(e, t.current)));
  }
  function gh() {
    var t = M.H;
    return (M.H = br), t === null ? br : t;
  }
  function yh() {
    var t = M.A;
    return (M.A = Iy), t;
  }
  function Sc() {
    (Yt = 4),
      qn || ((Rt & 4194048) !== Rt && ze.current !== null) || (Pl = !0),
      ((Gn & 134217727) === 0 && (yl & 134217727) === 0) ||
        jt === null ||
        Qn(jt, Rt, Ne, !1);
  }
  function xc(t, e, n) {
    var a = Ct;
    Ct |= 2;
    var u = gh(),
      c = yh();
    (jt !== t || Rt !== e) && ((zr = null), na(t, e)), (e = !1);
    var m = Yt;
    t: do
      try {
        if (wt !== 0 && bt !== null) {
          var v = bt,
            E = Se;
          switch (wt) {
            case 8:
              bc(), (m = 6);
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
        n0(), (m = Yt);
        break;
      } catch (V) {
        vh(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (un = dl = null),
      (Ct = a),
      (M.H = u),
      (M.A = c),
      bt === null && ((jt = null), (Rt = 0), tr()),
      m
    );
  }
  function n0() {
    for (; bt !== null; ) bh(bt);
  }
  function l0(t, e) {
    var n = Ct;
    Ct |= 2;
    var a = gh(),
      u = yh();
    jt !== t || Rt !== e
      ? ((zr = null), (Mr = Te() + 500), na(t, e))
      : (Pl = Aa(t, e));
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
              if (zd(c)) {
                (wt = 0), (Se = null), Sh(e);
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
              zd(c)
                ? ((wt = 0), (Se = null), Sh(e))
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
                  if (!m || ep(m)) {
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
              bc(), (Yt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        a0();
        break;
      } catch (V) {
        vh(t, V);
      }
    while (!0);
    return (
      (un = dl = null),
      (M.H = a),
      (M.A = u),
      (Ct = n),
      bt !== null ? 0 : ((jt = null), (Rt = 0), tr(), Yt)
    );
  }
  function a0() {
    for (; bt !== null && !Ra(); ) bh(bt);
  }
  function bh(t) {
    var e = Zm(t.alternate, t, pn);
    (t.memoizedProps = t.pendingProps), e === null ? Dr(t) : (bt = e);
  }
  function Sh(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ym(n, e, e.pendingProps, e.type, void 0, Rt);
        break;
      case 11:
        e = Ym(n, e, e.pendingProps, e.type.render, e.ref, Rt);
        break;
      case 5:
        Uo(e);
      default:
        Km(n, e), (e = bt = xd(e, pn)), (e = Zm(n, e, pn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Dr(t) : (bt = e);
  }
  function la(t, e, n, a) {
    (un = dl = null), Uo(e), (Kl = null), (Ia = 0);
    var u = e.return;
    try {
      if (ky(t, u, e, n, Rt)) {
        (Yt = 1), Tr(t, Ce(n, t.current)), (bt = null);
        return;
      }
    } catch (c) {
      if (u !== null) throw ((bt = u), c);
      (Yt = 1), Tr(t, Ce(n, t.current)), (bt = null);
      return;
    }
    e.flags & 32768
      ? (_t || a === 1
          ? (t = !0)
          : Pl || (Rt & 536870912) !== 0
            ? (t = !1)
            : ((qn = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = ze.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        xh(e, t))
      : Dr(e);
  }
  function Dr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        xh(e, qn);
        return;
      }
      t = e.return;
      var n = Jy(e.alternate, e, pn);
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
  function xh(t, e) {
    do {
      var n = Wy(t.alternate, t);
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
  function Eh(t, e, n, a, u, c, m, v, E) {
    t.cancelPendingCommit = null;
    do jr();
    while (It !== 0);
    if ((Ct & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= so),
        Ug(t, n, c, m, v, E),
        t === jt && ((bt = jt = null), (Rt = 0)),
        (ta = e),
        (Vn = t),
        (ea = n),
        (vc = c),
        (gc = u),
        (dh = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            o0($i, function () {
              return Ch(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = M.T), (M.T = null), (u = Y.p), (Y.p = 2), (m = Ct), (Ct |= 4);
        try {
          Fy(t, e, n);
        } finally {
          (Ct = m), (Y.p = u), (M.T = a);
        }
      }
      (It = 1), Rh(), Th(), Ah();
    }
  }
  function Rh() {
    if (It === 1) {
      It = 0;
      var t = Vn,
        e = ta,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = M.T), (M.T = null);
        var a = Y.p;
        Y.p = 2;
        var u = Ct;
        Ct |= 4;
        try {
          ih(e, t);
          var c = Dc,
            m = fd(t.containerInfo),
            v = c.focusedElem,
            E = c.selectionRange;
          if (
            m !== v &&
            v &&
            v.ownerDocument &&
            sd(v.ownerDocument.documentElement, v)
          ) {
            if (E !== null && io(v)) {
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
                  var w = cd(v, st),
                    _ = cd(v, zt);
                  if (
                    w &&
                    _ &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== w.node ||
                      H.anchorOffset !== w.offset ||
                      H.focusNode !== _.node ||
                      H.focusOffset !== _.offset)
                  ) {
                    var z = k.createRange();
                    z.setStart(w.node, w.offset),
                      H.removeAllRanges(),
                      st > zt
                        ? (H.addRange(z), H.extend(_.node, _.offset))
                        : (z.setEnd(_.node, _.offset), H.addRange(z));
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
          (Zr = !!Nc), (Dc = Nc = null);
        } finally {
          (Ct = u), (Y.p = a), (M.T = n);
        }
      }
      (t.current = e), (It = 2);
    }
  }
  function Th() {
    if (It === 2) {
      It = 0;
      var t = Vn,
        e = ta,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = M.T), (M.T = null);
        var a = Y.p;
        Y.p = 2;
        var u = Ct;
        Ct |= 4;
        try {
          eh(t, e.alternate, e);
        } finally {
          (Ct = u), (Y.p = a), (M.T = n);
        }
      }
      It = 3;
    }
  }
  function Ah() {
    if (It === 4 || It === 3) {
      (It = 0), Du();
      var t = Vn,
        e = ta,
        n = ea,
        a = dh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (It = 5)
        : ((It = 0), (ta = Vn = null), _h(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Xn = null),
        Lu(n),
        (e = e.stateNode),
        he && typeof he.onCommitFiberRoot == "function")
      )
        try {
          he.onCommitFiberRoot(Ta, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = M.T), (u = Y.p), (Y.p = 2), (M.T = null);
        try {
          for (var c = t.onRecoverableError, m = 0; m < a.length; m++) {
            var v = a[m];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          (M.T = e), (Y.p = u);
        }
      }
      (ea & 3) !== 0 && jr(),
        Je(t),
        (u = t.pendingLanes),
        (n & 4194090) !== 0 && (u & 42) !== 0
          ? t === yc
            ? oi++
            : ((oi = 0), (yc = t))
          : (oi = 0),
        ci(0);
    }
  }
  function _h(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ga(e)));
  }
  function jr(t) {
    return Rh(), Th(), Ah(), Ch();
  }
  function Ch() {
    if (It !== 5) return !1;
    var t = Vn,
      e = vc;
    vc = 0;
    var n = Lu(ea),
      a = M.T,
      u = Y.p;
    try {
      (Y.p = 32 > n ? 32 : n), (M.T = null), (n = gc), (gc = null);
      var c = Vn,
        m = ea;
      if (((It = 0), (ta = Vn = null), (ea = 0), (Ct & 6) !== 0))
        throw Error(r(331));
      var v = Ct;
      if (
        ((Ct |= 4),
        sh(c.current),
        uh(c, c.current, m, n),
        (Ct = v),
        ci(0, !1),
        he && typeof he.onPostCommitFiberRoot == "function")
      )
        try {
          he.onPostCommitFiberRoot(Ta, c);
        } catch {}
      return !0;
    } finally {
      (Y.p = u), (M.T = a), _h(t, e);
    }
  }
  function wh(t, e, n) {
    (e = Ce(n, e)),
      (e = Wo(t.stateNode, e, 2)),
      (t = jn(t, e, 2)),
      t !== null && (_a(t, 2), Je(t));
  }
  function Nt(t, e, n) {
    if (t.tag === 3) wh(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          wh(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Xn === null || !Xn.has(a)))
          ) {
            (t = Ce(n, t)),
              (n = Nm(2)),
              (a = jn(e, n, 2)),
              a !== null && (Dm(n, a, e, t), _a(a, 2), Je(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ec(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new t0();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(n) ||
      ((dc = !0), u.add(n), (t = i0.bind(null, t, e, n)), e.then(t, t));
  }
  function i0(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      jt === t &&
        (Rt & n) === n &&
        (Yt === 4 || (Yt === 3 && (Rt & 62914560) === Rt && 300 > Te() - pc)
          ? (Ct & 2) === 0 && na(t, 0)
          : (mc |= n),
        Il === Rt && (Il = 0)),
      Je(t);
  }
  function Oh(t, e) {
    e === 0 && (e = Af()), (t = Ll(t, e)), t !== null && (_a(t, e), Je(t));
  }
  function r0(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Oh(t, n);
  }
  function u0(t, e) {
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
    a !== null && a.delete(e), Oh(t, n);
  }
  function o0(t, e) {
    return _n(t, e);
  }
  var Br = null,
    aa = null,
    Rc = !1,
    Ur = !1,
    Tc = !1,
    bl = 0;
  function Je(t) {
    t !== aa &&
      t.next === null &&
      (aa === null ? (Br = aa = t) : (aa = aa.next = t)),
      (Ur = !0),
      Rc || ((Rc = !0), s0());
  }
  function ci(t, e) {
    if (!Tc && Ur) {
      Tc = !0;
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
            c !== 0 && ((n = !0), Dh(a, c));
          } else
            (c = Rt),
              (c = Gi(
                a,
                a === jt ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || Aa(a, c) || ((n = !0), Dh(a, c));
          a = a.next;
        }
      while (n);
      Tc = !1;
    }
  }
  function c0() {
    Mh();
  }
  function Mh() {
    Ur = Rc = !1;
    var t = 0;
    bl !== 0 && (y0() && (t = bl), (bl = 0));
    for (var e = Te(), n = null, a = Br; a !== null; ) {
      var u = a.next,
        c = zh(a, e);
      c === 0
        ? ((a.next = null),
          n === null ? (Br = u) : (n.next = u),
          u === null && (aa = n))
        : ((n = a), (t !== 0 || (c & 3) !== 0) && (Ur = !0)),
        (a = u);
    }
    ci(t);
  }
  function zh(t, e) {
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
        ? ((v & n) === 0 || (v & a) !== 0) && (u[m] = Bg(v, e))
        : E <= e && (t.expiredLanes |= v),
        (c &= ~v);
    }
    if (
      ((e = jt),
      (n = Rt),
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
    if ((n & 3) === 0 || Aa(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && Cn(a), Lu(n))) {
        case 2:
        case 8:
          n = Bu;
          break;
        case 32:
          n = $i;
          break;
        case 268435456:
          n = Rf;
          break;
        default:
          n = $i;
      }
      return (
        (a = Nh.bind(null, t)),
        (n = _n(n, a)),
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
  function Nh(t, e) {
    if (It !== 0 && It !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (jr() && t.callbackNode !== n) return null;
    var a = Rt;
    return (
      (a = Gi(
        t,
        t === jt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (hh(t, a, e),
          zh(t, Te()),
          t.callbackNode != null && t.callbackNode === n
            ? Nh.bind(null, t)
            : null)
    );
  }
  function Dh(t, e) {
    if (jr()) return null;
    hh(t, e, !0);
  }
  function s0() {
    S0(function () {
      (Ct & 6) !== 0 ? _n(Li, c0) : Mh();
    });
  }
  function Ac() {
    return bl === 0 && (bl = Tf()), bl;
  }
  function jh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : ki("" + t);
  }
  function Bh(t, e) {
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
  function f0(t, e, n, a, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var c = jh((u[oe] || null).action),
        m = a.submitter;
      m &&
        ((e = (e = m[oe] || null)
          ? jh(e.formAction)
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
                  var E = m ? Bh(u, m) : new FormData(u);
                  Qo(
                    n,
                    { pending: !0, data: E, method: u.method, action: c },
                    null,
                    E,
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (E = m ? Bh(u, m) : new FormData(u)),
                  Qo(
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
  for (var _c = 0; _c < co.length; _c++) {
    var Cc = co[_c],
      d0 = Cc.toLowerCase(),
      m0 = Cc[0].toUpperCase() + Cc.slice(1);
    $e(d0, "on" + m0);
  }
  $e(hd, "onAnimationEnd"),
    $e(pd, "onAnimationIteration"),
    $e(vd, "onAnimationStart"),
    $e("dblclick", "onDoubleClick"),
    $e("focusin", "onFocus"),
    $e("focusout", "onBlur"),
    $e(My, "onTransitionRun"),
    $e(zy, "onTransitionStart"),
    $e(Ny, "onTransitionCancel"),
    $e(gd, "onTransitionEnd"),
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
  var si =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    h0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(si),
    );
  function Uh(t, e) {
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
    var n = e[$u];
    n === void 0 && (n = e[$u] = new Set());
    var a = t + "__bubble";
    n.has(a) || (Hh(e, t, 2, !1), n.add(a));
  }
  function wc(t, e, n) {
    var a = 0;
    e && (a |= 4), Hh(n, t, a, e);
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function Oc(t) {
    if (!t[Hr]) {
      (t[Hr] = !0),
        Mf.forEach(function (n) {
          n !== "selectionchange" && (h0.has(n) || wc(n, !1, t), wc(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Hr] || ((e[Hr] = !0), wc("selectionchange", !1, e));
    }
  }
  function Hh(t, e, n, a) {
    switch (up(e)) {
      case 2:
        var u = q0;
        break;
      case 8:
        u = G0;
        break;
      default:
        u = Xc;
    }
    (n = u.bind(null, e, n, t)),
      (u = void 0),
      !Wu ||
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
  function Mc(t, e, n, a, u) {
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
    Vf(function () {
      var D = c,
        V = Ku(n),
        k = [];
      t: {
        var U = yd.get(t);
        if (U !== void 0) {
          var H = Fi,
            dt = t;
          switch (t) {
            case "keypress":
              if (Ji(n) === 0) break t;
            case "keydown":
            case "keyup":
              H = oy;
              break;
            case "focusin":
              (dt = "focus"), (H = to);
              break;
            case "focusout":
              (dt = "blur"), (H = to);
              break;
            case "beforeblur":
            case "afterblur":
              H = to;
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
              H = kf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Wg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = fy;
              break;
            case hd:
            case pd:
            case vd:
              H = Ig;
              break;
            case gd:
              H = my;
              break;
            case "scroll":
            case "scrollend":
              H = Kg;
              break;
            case "wheel":
              H = py;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = ey;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Jf;
              break;
            case "toggle":
            case "beforetoggle":
              H = gy;
          }
          var st = (e & 4) !== 0,
            zt = !st && (t === "scroll" || t === "scrollend"),
            w = st ? (U !== null ? U + "Capture" : null) : U;
          st = [];
          for (var _ = D, z; _ !== null; ) {
            var Q = _;
            if (
              ((z = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                z === null ||
                w === null ||
                ((Q = Oa(_, w)), Q != null && st.push(fi(_, Q, z))),
              zt)
            )
              break;
            _ = _.return;
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
              n !== ku &&
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
              ((st = kf),
              (Q = "onMouseLeave"),
              (w = "onMouseEnter"),
              (_ = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((st = Jf),
                (Q = "onPointerLeave"),
                (w = "onPointerEnter"),
                (_ = "pointer")),
              (zt = H == null ? U : wa(H)),
              (z = dt == null ? U : wa(dt)),
              (U = new st(Q, _ + "leave", H, n, V)),
              (U.target = zt),
              (U.relatedTarget = z),
              (Q = null),
              Al(V) === D &&
                ((st = new st(w, _ + "enter", dt, n, V)),
                (st.target = z),
                (st.relatedTarget = zt),
                (Q = st)),
              (zt = Q),
              H && dt)
            )
              e: {
                for (st = H, w = dt, _ = 0, z = st; z; z = ia(z)) _++;
                for (z = 0, Q = w; Q; Q = ia(Q)) z++;
                for (; 0 < _ - z; ) (st = ia(st)), _--;
                for (; 0 < z - _; ) (w = ia(w)), z--;
                for (; _--; ) {
                  if (st === w || (w !== null && st === w.alternate)) break e;
                  (st = ia(st)), (w = ia(w));
                }
                st = null;
              }
            else st = null;
            H !== null && Lh(k, U, H, st, !1),
              dt !== null && zt !== null && Lh(k, zt, dt, st, !0);
          }
        }
        t: {
          if (
            ((U = D ? wa(D) : window),
            (H = U.nodeName && U.nodeName.toLowerCase()),
            H === "select" || (H === "input" && U.type === "file"))
          )
            var at = ld;
          else if (ed(U))
            if (ad) at = Cy;
            else {
              at = Ay;
              var yt = Ty;
            }
          else
            (H = U.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? D && Zu(D.elementType) && (at = ld)
                : (at = _y);
          if (at && (at = at(t, D))) {
            nd(k, at, n, V);
            break t;
          }
          yt && yt(t, U, D),
            t === "focusout" &&
              D &&
              U.type === "number" &&
              D.memoizedProps.value != null &&
              Qu(U, "number", U.value);
        }
        switch (((yt = D ? wa(D) : window), t)) {
          case "focusin":
            (ed(yt) || yt.contentEditable === "true") &&
              ((Bl = yt), (ro = D), (Ha = null));
            break;
          case "focusout":
            Ha = ro = Bl = null;
            break;
          case "mousedown":
            uo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (uo = !1), dd(k, n, V);
            break;
          case "selectionchange":
            if (Oy) break;
          case "keydown":
          case "keyup":
            dd(k, n, V);
        }
        var it;
        if (no)
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
            ? If(t, n) && (ft = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (ft = "onCompositionStart");
        ft &&
          (Wf &&
            n.locale !== "ko" &&
            (jl || ft !== "onCompositionStart"
              ? ft === "onCompositionEnd" && jl && (it = Qf())
              : ((Mn = V),
                (Fu = "value" in Mn ? Mn.value : Mn.textContent),
                (jl = !0))),
          (yt = Lr(D, ft)),
          0 < yt.length &&
            ((ft = new Kf(ft, t, null, n, V)),
            k.push({ event: ft, listeners: yt }),
            it
              ? (ft.data = it)
              : ((it = td(n)), it !== null && (ft.data = it)))),
          (it = by ? Sy(t, n) : xy(t, n)) &&
            ((ft = Lr(D, "onBeforeInput")),
            0 < ft.length &&
              ((yt = new Kf("onBeforeInput", "beforeinput", null, n, V)),
              k.push({ event: yt, listeners: ft }),
              (yt.data = it))),
          f0(k, t, D, n, V);
      }
      Uh(k, e);
    });
  }
  function fi(t, e, n) {
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
          ((u = Oa(t, n)),
          u != null && a.unshift(fi(t, u, c)),
          (u = Oa(t, e)),
          u != null && a.push(fi(t, u, c))),
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
  function Lh(t, e, n, a, u) {
    for (var c = e._reactName, m = []; n !== null && n !== a; ) {
      var v = n,
        E = v.alternate,
        D = v.stateNode;
      if (((v = v.tag), E !== null && E === a)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        D === null ||
        ((E = D),
        u
          ? ((D = Oa(n, c)), D != null && m.unshift(fi(n, D, E)))
          : u || ((D = Oa(n, c)), D != null && m.push(fi(n, D, E)))),
        (n = n.return);
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var p0 = /\r\n?/g,
    v0 = /\u0000|\uFFFD/g;
  function $h(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        p0,
        `
`,
      )
      .replace(v0, "");
  }
  function Yh(t, e) {
    return (e = $h(e)), $h(t) === e;
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
        Gf(t, a, c);
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
          ((n = Zg.get(n) || n), Xi(t, n, a));
    }
  }
  function zc(t, e, n, a, u, c) {
    switch (n) {
      case "style":
        Gf(t, a, c);
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
        if (!zf.hasOwnProperty(n))
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
        Lf(t, c, v, E, D, m, u, !1), Qi(t);
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
        Yf(t, a, u, c), Qi(t);
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
        for (a = 0; a < si.length; a++) St(si[a], t);
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
        if (Zu(e)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((a = n[V]), a !== void 0 && zc(t, e, V, a, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((a = n[v]), a != null && Mt(t, e, v, a, n, null));
  }
  function g0(t, e, n, a) {
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
        Vu(t, m, v, E, D, V, c, u);
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
        $f(t, U, H);
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
        if (Zu(e)) {
          for (var zt in n)
            (U = n[zt]),
              n.hasOwnProperty(zt) &&
                U !== void 0 &&
                !a.hasOwnProperty(zt) &&
                zc(t, e, zt, void 0, a, U);
          for (V in a)
            (U = a[V]),
              (H = n[V]),
              !a.hasOwnProperty(V) ||
                U === H ||
                (U === void 0 && H === void 0) ||
                zc(t, e, V, U, a, H);
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
  var Nc = null,
    Dc = null;
  function Yr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function qh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gh(t, e) {
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
  function jc(t, e) {
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
  var Bc = null;
  function y0() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Bc
        ? !1
        : ((Bc = t), !0)
      : ((Bc = null), !1);
  }
  var Xh = typeof setTimeout == "function" ? setTimeout : void 0,
    b0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vh = typeof Promise == "function" ? Promise : void 0,
    S0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vh < "u"
          ? function (t) {
              return Vh.resolve(null).then(t).catch(x0);
            }
          : Xh;
  function x0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Zn(t) {
    return t === "head";
  }
  function Qh(t, e) {
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
            if ((n & 1 && di(m.documentElement), n & 2 && di(m.body), n & 4))
              for (n = m.head, di(n), m = n.firstChild; m; ) {
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
            t.removeChild(c), Si(e);
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
    Si(e);
  }
  function Uc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uc(n), Yu(n);
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
  function E0(t, e, n, a) {
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
      if (((t = qe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function R0(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = qe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Hc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function T0(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function qe(t) {
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
  var Lc = null;
  function Zh(t) {
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
  function kh(t, e, n) {
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
  function di(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Yu(t);
  }
  var De = new Map(),
    Kh = new Set();
  function qr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var vn = Y.d;
  Y.d = { f: A0, r: _0, D: C0, C: w0, L: O0, m: M0, X: N0, S: z0, M: D0 };
  function A0() {
    var t = vn.f(),
      e = Nr();
    return t || e;
  }
  function _0(t) {
    var e = _l(t);
    e !== null && e.tag === 5 && e.type === "form" ? hm(e) : vn.r(t);
  }
  var ra = typeof document > "u" ? null : document;
  function Jh(t, e, n) {
    var a = ra;
    if (a && typeof e == "string" && e) {
      var u = _e(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        Kh.has(u) ||
          (Kh.add(u),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            te(e, "link", t),
            kt(e),
            a.head.appendChild(e)));
    }
  }
  function C0(t) {
    vn.D(t), Jh("dns-prefetch", t, null);
  }
  function w0(t, e) {
    vn.C(t, e), Jh("preconnect", t, e);
  }
  function O0(t, e, n) {
    vn.L(t, e, n);
    var a = ra;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + _e(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + _e(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + _e(n.imageSizes) + '"]'))
        : (u += '[href="' + _e(t) + '"]');
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
          (e === "style" && a.querySelector(mi(c))) ||
          (e === "script" && a.querySelector(hi(c))) ||
          ((e = a.createElement("link")),
          te(e, "link", t),
          kt(e),
          a.head.appendChild(e)));
    }
  }
  function M0(t, e) {
    vn.m(t, e);
    var n = ra;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + _e(a) + '"][href="' + _e(t) + '"]',
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
            if (n.querySelector(hi(c))) return;
        }
        (a = n.createElement("link")),
          te(a, "link", t),
          kt(a),
          n.head.appendChild(a);
      }
    }
  }
  function z0(t, e, n) {
    vn.S(t, e, n);
    var a = ra;
    if (a && t) {
      var u = Cl(a).hoistableStyles,
        c = ua(t);
      e = e || "default";
      var m = u.get(c);
      if (!m) {
        var v = { loading: 0, preload: null };
        if ((m = a.querySelector(mi(c)))) v.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = De.get(c)) && $c(t, n);
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
  function N0(t, e) {
    vn.X(t, e);
    var n = ra;
    if (n && t) {
      var a = Cl(n).hoistableScripts,
        u = oa(t),
        c = a.get(u);
      c ||
        ((c = n.querySelector(hi(u))),
        c ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = De.get(u)) && Yc(t, e),
          (c = n.createElement("script")),
          kt(c),
          te(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(u, c));
    }
  }
  function D0(t, e) {
    vn.M(t, e);
    var n = ra;
    if (n && t) {
      var a = Cl(n).hoistableScripts,
        u = oa(t),
        c = a.get(u);
      c ||
        ((c = n.querySelector(hi(u))),
        c ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = De.get(u)) && Yc(t, e),
          (c = n.createElement("script")),
          kt(c),
          te(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(u, c));
    }
  }
  function Wh(t, e, n, a) {
    var u = (u = nt.current) ? qr(u) : null;
    if (!u) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ua(n.href)),
            (n = Cl(u).hoistableStyles),
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
          var c = Cl(u).hoistableStyles,
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
              (c = u.querySelector(mi(t))) &&
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
                c || j0(u, t, n, m.state))),
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
              (n = Cl(u).hoistableScripts),
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
    return 'href="' + _e(t) + '"';
  }
  function mi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Fh(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function j0(t, e, n, a) {
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
    return '[src="' + _e(t) + '"]';
  }
  function hi(t) {
    return "script[async]" + t;
  }
  function Ph(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + _e(n.href) + '"]');
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
          var c = t.querySelector(mi(u));
          if (c) return (e.state.loading |= 4), (e.instance = c), kt(c), c;
          (a = Fh(n)),
            (u = De.get(u)) && $c(a, u),
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
            (u = t.querySelector(hi(c)))
              ? ((e.instance = u), kt(u), u)
              : ((a = n),
                (u = De.get(c)) && ((a = b({}, n)), Yc(a, u)),
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
  function $c(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Yc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Xr = null;
  function Ih(t, e, n) {
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
  function tp(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      );
  }
  function B0(t, e, n) {
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
  function ep(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var pi = null;
  function U0() {}
  function H0(t, e, n) {
    if (pi === null) throw Error(r(475));
    var a = pi;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = ua(n.href),
          c = t.querySelector(mi(u));
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
          (n = Fh(n)),
          (u = De.get(u)) && $c(n, u),
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
  function L0() {
    if (pi === null) throw Error(r(475));
    var t = pi;
    return (
      t.stylesheets && t.count === 0 && qc(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && qc(t, t.stylesheets), t.unsuspend)) {
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
      if (this.stylesheets) qc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Qr = null;
  function qc(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Qr = new Map()),
        e.forEach($0, t),
        (Qr = null),
        Vr.call(t));
  }
  function $0(t, e) {
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
  var vi = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function Y0(t, e, n, a, u, c, m, v) {
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
      (this.expirationTimes = Uu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Uu(0)),
      (this.hiddenUpdates = Uu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = c),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function np(t, e, n, a, u, c, m, v, E, D, V, k) {
    return (
      (t = new Y0(t, e, n, m, v, E, D, k)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = ge(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Eo()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: a, isDehydrated: n, cache: e }),
      _o(c),
      t
    );
  }
  function lp(t) {
    return t ? ((t = $l), t) : $l;
  }
  function ap(t, e, n, a, u, c) {
    (u = lp(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Dn(e)),
      (a.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (n = jn(t, a, e)),
      n !== null && (Ee(n, t, e), Za(n, t, e));
  }
  function ip(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Gc(t, e) {
    ip(t, e), (t = t.alternate) && ip(t, e);
  }
  function rp(t) {
    if (t.tag === 13) {
      var e = Ll(t, 67108864);
      e !== null && Ee(e, t, 67108864), Gc(t, 67108864);
    }
  }
  var Zr = !0;
  function q0(t, e, n, a) {
    var u = M.T;
    M.T = null;
    var c = Y.p;
    try {
      (Y.p = 2), Xc(t, e, n, a);
    } finally {
      (Y.p = c), (M.T = u);
    }
  }
  function G0(t, e, n, a) {
    var u = M.T;
    M.T = null;
    var c = Y.p;
    try {
      (Y.p = 8), Xc(t, e, n, a);
    } finally {
      (Y.p = c), (M.T = u);
    }
  }
  function Xc(t, e, n, a) {
    if (Zr) {
      var u = Vc(a);
      if (u === null) Mc(t, e, a, kr, n), op(t, a);
      else if (V0(u, t, e, n, a)) a.stopPropagation();
      else if ((op(t, a), e & 4 && -1 < X0.indexOf(t))) {
        for (; u !== null; ) {
          var c = _l(u);
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
                    Je(c), (Ct & 6) === 0 && ((Mr = Te() + 500), ci(0));
                  }
                }
                break;
              case 13:
                (v = Ll(c, 2)), v !== null && Ee(v, c, 2), Nr(), Gc(c, 2);
            }
          if (((c = Vc(a)), c === null && Mc(t, e, a, kr, n), c === u)) break;
          u = c;
        }
        u !== null && a.stopPropagation();
      } else Mc(t, e, a, null, n);
    }
  }
  function Vc(t) {
    return (t = Ku(t)), Qc(t);
  }
  var kr = null;
  function Qc(t) {
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
  function up(t) {
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
        switch (ju()) {
          case Li:
            return 2;
          case Bu:
            return 8;
          case $i:
          case Og:
            return 32;
          case Rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zc = !1,
    kn = null,
    Kn = null,
    Jn = null,
    gi = new Map(),
    yi = new Map(),
    Wn = [],
    X0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function op(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Jn = null;
        break;
      case "pointerover":
      case "pointerout":
        gi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yi.delete(e.pointerId);
    }
  }
  function bi(t, e, n, a, u, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [u],
        }),
        e !== null && ((e = _l(e)), e !== null && rp(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function V0(t, e, n, a, u) {
    switch (e) {
      case "focusin":
        return (kn = bi(kn, t, e, n, a, u)), !0;
      case "dragenter":
        return (Kn = bi(Kn, t, e, n, a, u)), !0;
      case "mouseover":
        return (Jn = bi(Jn, t, e, n, a, u)), !0;
      case "pointerover":
        var c = u.pointerId;
        return gi.set(c, bi(gi.get(c) || null, t, e, n, a, u)), !0;
      case "gotpointercapture":
        return (
          (c = u.pointerId), yi.set(c, bi(yi.get(c) || null, t, e, n, a, u)), !0
        );
    }
    return !1;
  }
  function cp(t) {
    var e = Al(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            (t.blockedOn = e),
              Hg(t.priority, function () {
                if (n.tag === 13) {
                  var a = xe();
                  a = Hu(a);
                  var u = Ll(n, a);
                  u !== null && Ee(u, n, a), Gc(n, a);
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
      var n = Vc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (ku = a), n.target.dispatchEvent(a), (ku = null);
      } else return (e = _l(n)), e !== null && rp(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function sp(t, e, n) {
    Kr(t) && n.delete(e);
  }
  function Q0() {
    (Zc = !1),
      kn !== null && Kr(kn) && (kn = null),
      Kn !== null && Kr(Kn) && (Kn = null),
      Jn !== null && Kr(Jn) && (Jn = null),
      gi.forEach(sp),
      yi.forEach(sp);
  }
  function Jr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Zc ||
        ((Zc = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Q0)));
  }
  var Wr = null;
  function fp(t) {
    Wr !== t &&
      ((Wr = t),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Wr === t && (Wr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (Qc(a || n) === null) continue;
            break;
          }
          var c = _l(n);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Qo(c, { pending: !0, data: u, method: n.method, action: a }, a, u));
        }
      }));
  }
  function Si(t) {
    function e(E) {
      return Jr(E, t);
    }
    kn !== null && Jr(kn, t),
      Kn !== null && Jr(Kn, t),
      Jn !== null && Jr(Jn, t),
      gi.forEach(e),
      yi.forEach(e);
    for (var n = 0; n < Wn.length; n++) {
      var a = Wn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
      cp(n), n.blockedOn === null && Wn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var u = n[a],
          c = n[a + 1],
          m = u[oe] || null;
        if (typeof c == "function") m || fp(n);
        else if (m) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((u = c), (m = c[oe] || null))) v = m.formAction;
            else if (Qc(u) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? (n[a + 1] = v) : (n.splice(a, 3), (a -= 3)),
            fp(n);
        }
      }
  }
  function kc(t) {
    this._internalRoot = t;
  }
  (Fr.prototype.render = kc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        a = xe();
      ap(n, a, t, e, null, null);
    }),
    (Fr.prototype.unmount = kc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          ap(t.current, 2, null, t, null, null), Nr(), (e[Tl] = null);
        }
      });
  function Fr(t) {
    this._internalRoot = t;
  }
  Fr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = wf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Wn.length && e !== 0 && e < Wn[n].priority; n++);
      Wn.splice(n, 0, t), n === 0 && cp(t);
    }
  };
  var dp = i.version;
  if (dp !== "19.1.0") throw Error(r(527, dp, "19.1.0"));
  Y.findDOMNode = function (t) {
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
  var Z0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pr.isDisabled && Pr.supportsFiber)
      try {
        (Ta = Pr.inject(Z0)), (he = Pr);
      } catch {}
  }
  return (
    (Ei.createRoot = function (t, e) {
      if (!s(t)) throw Error(r(299));
      var n = !1,
        a = "",
        u = wm,
        c = Om,
        m = Mm,
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
        (e = np(t, 1, !1, null, null, n, a, u, c, m, v, null)),
        (t[Tl] = e.current),
        Oc(t),
        new kc(e)
      );
    }),
    (Ei.hydrateRoot = function (t, e, n) {
      if (!s(t)) throw Error(r(299));
      var a = !1,
        u = "",
        c = wm,
        m = Om,
        v = Mm,
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
        (e = np(t, 1, !0, e, n ?? null, a, u, c, m, v, E, D)),
        (e.context = lp(null)),
        (n = e.current),
        (a = xe()),
        (a = Hu(a)),
        (u = Dn(a)),
        (u.callback = null),
        jn(n, u, a),
        (n = a),
        (e.current.lanes = n),
        _a(e, n),
        Je(e),
        (t[Tl] = e.current),
        Oc(t),
        new Fr(e)
      );
    }),
    (Ei.version = "19.1.0"),
    Ei
  );
}
var Ep;
function lb() {
  if (Ep) return Wc.exports;
  Ep = 1;
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
  return l(), (Wc.exports = nb()), Wc.exports;
}
var ab = lb(),
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
function ov(l, i) {
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
function ib(l, i, o) {
  if (o || arguments.length === 2)
    for (var r = 0, s = i.length, f; r < s; r++)
      (f || !(r in i)) &&
        (f || (f = Array.prototype.slice.call(i, 0, r)), (f[r] = i[r]));
  return l.concat(f || Array.prototype.slice.call(i));
}
var iu = "right-scroll-bar-position",
  ru = "width-before-scroll-bar",
  rb = "with-scroll-bars-hidden",
  ub = "--removed-body-scroll-bar-size";
function ts(l, i) {
  return typeof l == "function" ? l(i) : l && (l.current = i), l;
}
function ob(l, i) {
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
var cb = typeof window < "u" ? A.useLayoutEffect : A.useEffect,
  Rp = new WeakMap();
function sb(l, i) {
  var o = ob(null, function (r) {
    return l.forEach(function (s) {
      return ts(s, r);
    });
  });
  return (
    cb(
      function () {
        var r = Rp.get(o);
        if (r) {
          var s = new Set(r),
            f = new Set(l),
            d = o.current;
          s.forEach(function (h) {
            f.has(h) || ts(h, null);
          }),
            f.forEach(function (h) {
              s.has(h) || ts(h, d);
            });
        }
        Rp.set(o, l);
      },
      [l],
    ),
    o
  );
}
function fb(l) {
  return l;
}
function db(l, i) {
  i === void 0 && (i = fb);
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
function mb(l) {
  l === void 0 && (l = {});
  var i = db(null);
  return (i.options = We({ async: !0, ssr: !1 }, l)), i;
}
var cv = function (l) {
  var i = l.sideCar,
    o = ov(l, ["sideCar"]);
  if (!i)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = i.read();
  if (!r) throw new Error("Sidecar medium not found");
  return A.createElement(r, We({}, o));
};
cv.isSideCarExport = !0;
function hb(l, i) {
  return l.useMedium(i), cv;
}
var sv = mb(),
  es = function () {},
  bu = A.forwardRef(function (l, i) {
    var o = A.useRef(null),
      r = A.useState({
        onScrollCapture: es,
        onWheelCapture: es,
        onTouchMoveCapture: es,
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
      C = l.noIsolation,
      R = l.inert,
      O = l.allowPinchZoom,
      L = l.as,
      q = L === void 0 ? "div" : L,
      B = l.gapMode,
      X = ov(l, [
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
      $ = T,
      W = sb([o, i]),
      P = We(We({}, X), s);
    return A.createElement(
      A.Fragment,
      null,
      b &&
        A.createElement($, {
          sideCar: sv,
          removeScrollBar: p,
          shards: y,
          noRelative: x,
          noIsolation: C,
          inert: R,
          setCallbacks: f,
          allowPinchZoom: !!O,
          lockRef: o,
          gapMode: B,
        }),
      d
        ? A.cloneElement(A.Children.only(h), We(We({}, P), { ref: W }))
        : A.createElement(q, We({}, P, { className: g, ref: W }), h),
    );
  });
bu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
bu.classNames = { fullWidth: ru, zeroRight: iu };
var pb = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function vb() {
  if (!document) return null;
  var l = document.createElement("style");
  l.type = "text/css";
  var i = pb();
  return i && l.setAttribute("nonce", i), l;
}
function gb(l, i) {
  l.styleSheet
    ? (l.styleSheet.cssText = i)
    : l.appendChild(document.createTextNode(i));
}
function yb(l) {
  var i = document.head || document.getElementsByTagName("head")[0];
  i.appendChild(l);
}
var bb = function () {
    var l = 0,
      i = null;
    return {
      add: function (o) {
        l == 0 && (i = vb()) && (gb(i, o), yb(i)), l++;
      },
      remove: function () {
        l--,
          !l && i && (i.parentNode && i.parentNode.removeChild(i), (i = null));
      },
    };
  },
  Sb = function () {
    var l = bb();
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
  fv = function () {
    var l = Sb(),
      i = function (o) {
        var r = o.styles,
          s = o.dynamic;
        return l(r, s), null;
      };
    return i;
  },
  xb = { left: 0, top: 0, right: 0, gap: 0 },
  ns = function (l) {
    return parseInt(l || "", 10) || 0;
  },
  Eb = function (l) {
    var i = window.getComputedStyle(document.body),
      o = i[l === "padding" ? "paddingLeft" : "marginLeft"],
      r = i[l === "padding" ? "paddingTop" : "marginTop"],
      s = i[l === "padding" ? "paddingRight" : "marginRight"];
    return [ns(o), ns(r), ns(s)];
  },
  Rb = function (l) {
    if ((l === void 0 && (l = "margin"), typeof window > "u")) return xb;
    var i = Eb(l),
      o = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: i[0],
      top: i[1],
      right: i[2],
      gap: Math.max(0, r - o + i[2] - i[0]),
    };
  },
  Tb = fv(),
  pa = "data-scroll-locked",
  Ab = function (l, i, o, r) {
    var s = l.left,
      f = l.top,
      d = l.right,
      h = l.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          rb,
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
        .concat(ub, ": ")
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  Tp = function () {
    var l = parseInt(document.body.getAttribute(pa) || "0", 10);
    return isFinite(l) ? l : 0;
  },
  _b = function () {
    A.useEffect(function () {
      return (
        document.body.setAttribute(pa, (Tp() + 1).toString()),
        function () {
          var l = Tp() - 1;
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
    _b();
    var f = A.useMemo(
      function () {
        return Rb(s);
      },
      [s],
    );
    return A.createElement(Tb, { styles: Ab(f, !i, s, o ? "" : "!important") });
  },
  bs = !1;
if (typeof window < "u")
  try {
    var Ir = Object.defineProperty({}, "passive", {
      get: function () {
        return (bs = !0), !0;
      },
    });
    window.addEventListener("test", Ir, Ir),
      window.removeEventListener("test", Ir, Ir);
  } catch {
    bs = !1;
  }
var ca = bs ? { passive: !1 } : !1,
  wb = function (l) {
    return l.tagName === "TEXTAREA";
  },
  dv = function (l, i) {
    if (!(l instanceof Element)) return !1;
    var o = window.getComputedStyle(l);
    return (
      o[i] !== "hidden" &&
      !(o.overflowY === o.overflowX && !wb(l) && o[i] === "visible")
    );
  },
  Ob = function (l) {
    return dv(l, "overflowY");
  },
  Mb = function (l) {
    return dv(l, "overflowX");
  },
  Ap = function (l, i) {
    var o = i.ownerDocument,
      r = i;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = mv(l, r);
      if (s) {
        var f = hv(l, r),
          d = f[1],
          h = f[2];
        if (d > h) return !0;
      }
      r = r.parentNode;
    } while (r && r !== o.body);
    return !1;
  },
  zb = function (l) {
    var i = l.scrollTop,
      o = l.scrollHeight,
      r = l.clientHeight;
    return [i, o, r];
  },
  Nb = function (l) {
    var i = l.scrollLeft,
      o = l.scrollWidth,
      r = l.clientWidth;
    return [i, o, r];
  },
  mv = function (l, i) {
    return l === "v" ? Ob(i) : Mb(i);
  },
  hv = function (l, i) {
    return l === "v" ? zb(i) : Nb(i);
  },
  Db = function (l, i) {
    return l === "h" && i === "rtl" ? -1 : 1;
  },
  jb = function (l, i, o, r, s) {
    var f = Db(l, window.getComputedStyle(i).direction),
      d = f * r,
      h = o.target,
      g = i.contains(h),
      p = !1,
      b = d > 0,
      y = 0,
      T = 0;
    do {
      var x = hv(l, h),
        C = x[0],
        R = x[1],
        O = x[2],
        L = R - O - f * C;
      (C || L) && mv(l, h) && ((y += L), (T += C)),
        (h = h.parentNode.host || h.parentNode);
    } while ((!g && h !== document.body) || (g && (i.contains(h) || i === h)));
    return ((b && Math.abs(y) < 1) || (!b && Math.abs(T) < 1)) && (p = !0), p;
  },
  tu = function (l) {
    return "changedTouches" in l
      ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY]
      : [0, 0];
  },
  _p = function (l) {
    return [l.deltaX, l.deltaY];
  },
  Cp = function (l) {
    return l && "current" in l ? l.current : l;
  },
  Bb = function (l, i) {
    return l[0] === i[0] && l[1] === i[1];
  },
  Ub = function (l) {
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
  Hb = 0,
  sa = [];
function Lb(l) {
  var i = A.useRef([]),
    o = A.useRef([0, 0]),
    r = A.useRef(),
    s = A.useState(Hb++)[0],
    f = A.useState(fv)[0],
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
          var R = ib([l.lockRef.current], (l.shards || []).map(Cp), !0).filter(
            Boolean,
          );
          return (
            R.forEach(function (O) {
              return O.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                R.forEach(function (O) {
                  return O.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [l.inert, l.lockRef.current, l.shards],
    );
  var h = A.useCallback(function (R, O) {
      if (
        ("touches" in R && R.touches.length === 2) ||
        (R.type === "wheel" && R.ctrlKey)
      )
        return !d.current.allowPinchZoom;
      var L = tu(R),
        q = o.current,
        B = "deltaX" in R ? R.deltaX : q[0] - L[0],
        X = "deltaY" in R ? R.deltaY : q[1] - L[1],
        $,
        W = R.target,
        P = Math.abs(B) > Math.abs(X) ? "h" : "v";
      if ("touches" in R && P === "h" && W.type === "range") return !1;
      var et = Ap(P, W);
      if (!et) return !0;
      if ((et ? ($ = P) : (($ = P === "v" ? "h" : "v"), (et = Ap(P, W))), !et))
        return !1;
      if (
        (!r.current && "changedTouches" in R && (B || X) && (r.current = $), !$)
      )
        return !0;
      var tt = r.current || $;
      return jb(tt, O, R, tt === "h" ? B : X);
    }, []),
    g = A.useCallback(function (R) {
      var O = R;
      if (!(!sa.length || sa[sa.length - 1] !== f)) {
        var L = "deltaY" in O ? _p(O) : tu(O),
          q = i.current.filter(function ($) {
            return (
              $.name === O.type &&
              ($.target === O.target || O.target === $.shadowParent) &&
              Bb($.delta, L)
            );
          })[0];
        if (q && q.should) {
          O.cancelable && O.preventDefault();
          return;
        }
        if (!q) {
          var B = (d.current.shards || [])
              .map(Cp)
              .filter(Boolean)
              .filter(function ($) {
                return $.contains(O.target);
              }),
            X = B.length > 0 ? h(O, B[0]) : !d.current.noIsolation;
          X && O.cancelable && O.preventDefault();
        }
      }
    }, []),
    p = A.useCallback(function (R, O, L, q) {
      var B = { name: R, delta: O, target: L, should: q, shadowParent: $b(L) };
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
      p(R.type, _p(R), R.target, h(R, l.lockRef.current));
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
    C = l.inert;
  return A.createElement(
    A.Fragment,
    null,
    C ? A.createElement(f, { styles: Ub(s) }) : null,
    x
      ? A.createElement(Cb, { noRelative: l.noRelative, gapMode: l.gapMode })
      : null,
  );
}
function $b(l) {
  for (var i = null; l !== null; )
    l instanceof ShadowRoot && ((i = l.host), (l = l.host)), (l = l.parentNode);
  return i;
}
const Yb = hb(sv, Lb);
var Ns = A.forwardRef(function (l, i) {
  return A.createElement(bu, We({}, l, { ref: i, sideCar: Yb }));
});
Ns.classNames = bu.classNames;
function ee(l) {
  return Object.keys(l);
}
function ls(l) {
  return l && typeof l == "object" && !Array.isArray(l);
}
function Ds(l, i) {
  const o = { ...l },
    r = i;
  return (
    ls(l) &&
      ls(i) &&
      Object.keys(i).forEach((s) => {
        ls(r[s]) && s in l ? (o[s] = Ds(o[s], r[s])) : (o[s] = r[s]);
      }),
    o
  );
}
function qb(l) {
  return l.replace(/[A-Z]/g, (i) => `-${i.toLowerCase()}`);
}
function Gb(l) {
  var i;
  return typeof l != "string" || !l.includes("var(--mantine-scale)")
    ? l
    : (i = l.match(/^calc\((.*?)\)$/)) == null
      ? void 0
      : i[1].split("*")[0].trim();
}
function Ss(l) {
  const i = Gb(l);
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
function wp(l) {
  return l === "0rem" ? "0rem" : `calc(${l} * var(--mantine-scale))`;
}
function pv(l, { shouldScale: i = !1 } = {}) {
  function o(r) {
    if (r === 0 || r === "0") return `0${l}`;
    if (typeof r == "number") {
      const s = `${r / 16}${l}`;
      return i ? wp(s) : s;
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
        return i ? wp(f) : f;
      }
    }
    return r;
  }
  return o;
}
const Z = pv("rem", { shouldScale: !0 }),
  su = pv("em");
function Su(l) {
  return Object.keys(l).reduce(
    (i, o) => (l[o] !== void 0 && (i[o] = l[o]), i),
    {},
  );
}
function vv(l) {
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
function gv(l) {
  return Array.isArray(l) || l === null
    ? !1
    : typeof l == "object"
      ? l.type !== A.Fragment
      : !1;
}
function Xb(l) {
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
function js(l = null) {
  const i = A.createContext(l);
  return [
    ({ children: s, value: f }) => j.jsx(i.Provider, { value: f, children: s }),
    () => A.useContext(i),
  ];
}
const Vb = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function Bs(l) {
  return Vb[l];
}
function ne(l, i = "size", o = !0) {
  if (l !== void 0) return vv(l) ? (o ? Z(l) : l) : `var(--${i}-${l})`;
}
function Us(l) {
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
function Qb(l) {
  return ne(l, "mantine-line-height", !1);
}
function Zb(l) {
  if (l) return ne(l, "mantine-shadow", !1);
}
function Hs(l, i) {
  return l in i ? Ss(i[l]) : Ss(l);
}
function Op(l, i) {
  const o = l.map((r) => ({ value: r, px: Hs(r, i) }));
  return o.sort((r, s) => r.px - s.px), o;
}
function kb(l = "mantine-") {
  return `${l}${Math.random().toString(36).slice(2, 11)}`;
}
function Kb(l, i) {
  try {
    return (
      l.addEventListener("change", i), () => l.removeEventListener("change", i)
    );
  } catch {
    return l.addListener(i), () => l.removeListener(i);
  }
}
function Jb(l, i) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(l).matches
    : !1;
}
function Wb(
  l,
  i,
  { getInitialValueInEffect: o } = { getInitialValueInEffect: !0 },
) {
  const [r, s] = A.useState(o ? i : Jb(l)),
    f = A.useRef(null);
  return (
    A.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (f.current = window.matchMedia(l)),
          s(f.current.matches),
          Kb(f.current, (d) => s(d.matches))
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
const Fb = cu.useId || (() => {});
function Pb() {
  const l = Fb();
  return l ? `mantine-${l.replace(/:/g, "")}` : "";
}
function xu(l) {
  const i = Pb(),
    [o, r] = A.useState(i);
  return (
    Oi(() => {
      r(kb());
    }, []),
    typeof l == "string" ? l : typeof window > "u" ? i : o
  );
}
function Ib(l, i, o) {
  A.useEffect(
    () => (
      window.addEventListener(l, i, o),
      () => window.removeEventListener(l, i, o)
    ),
    [l, i],
  );
}
function xs(l, i) {
  if (typeof l == "function") return l(i);
  typeof l == "object" && l !== null && "current" in l && (l.current = i);
}
function t1(...l) {
  const i = new Map();
  return (o) => {
    if (
      (l.forEach((r) => {
        const s = xs(r, o);
        s && i.set(r, s);
      }),
      i.size > 0)
    )
      return () => {
        l.forEach((r) => {
          const s = i.get(r);
          s ? s() : xs(r, null);
        }),
          i.clear();
      };
  };
}
function yv(...l) {
  return A.useCallback(t1(...l), l);
}
function bv({
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
function e1(l, i) {
  return Wb("(prefers-reduced-motion: reduce)", l, i);
}
function Mp(l = !1, i) {
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
function Sv(l) {
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
function xv(l) {
  var i,
    o,
    r = "";
  if (typeof l == "string" || typeof l == "number") r += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var s = l.length;
      for (i = 0; i < s; i++)
        l[i] && (o = xv(l[i])) && (r && (r += " "), (r += o));
    } else for (o in l) l[o] && (r && (r += " "), (r += o));
  return r;
}
function El() {
  for (var l, i, o = 0, r = "", s = arguments.length; o < s; o++)
    (l = arguments[o]) && (i = xv(l)) && (r && (r += " "), (r += i));
  return r;
}
const n1 = {};
function l1(l) {
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
function Eu({ theme: l, classNames: i, props: o, stylesCtx: r }) {
  const f = (Array.isArray(i) ? i : [i]).map((d) =>
    typeof d == "function" ? d(l, o, r) : d || n1,
  );
  return l1(f);
}
function du({ theme: l, styles: i, props: o, stylesCtx: r }) {
  return (Array.isArray(i) ? i : [i]).reduce(
    (f, d) =>
      typeof d == "function" ? { ...f, ...d(l, o, r) } : { ...f, ...d },
    {},
  );
}
const Ev = A.createContext(null);
function Tn() {
  const l = A.useContext(Ev);
  if (!l)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return l;
}
function a1() {
  return Tn().cssVariablesResolver;
}
function i1() {
  return Tn().classNamesPrefix;
}
function Ls() {
  return Tn().getStyleNonce;
}
function r1() {
  return Tn().withStaticClasses;
}
function u1() {
  return Tn().headless;
}
function o1() {
  var l;
  return (l = Tn().stylesTransform) == null ? void 0 : l.sx;
}
function c1() {
  var l;
  return (l = Tn().stylesTransform) == null ? void 0 : l.styles;
}
function Rv() {
  return Tn().env || "default";
}
function s1(l) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(l);
}
function f1(l) {
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
function d1(l) {
  const [i, o, r, s] = l
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: i, g: o, b: r, a: s || 1 };
}
function m1(l) {
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
function $s(l) {
  return s1(l)
    ? f1(l)
    : l.startsWith("rgb")
      ? d1(l)
      : l.startsWith("hsl")
        ? m1(l)
        : { r: 0, g: 0, b: 0, a: 1 };
}
function eu(l, i) {
  if (l.startsWith("var("))
    return `color-mix(in srgb, ${l}, black ${i * 100}%)`;
  const { r: o, g: r, b: s, a: f } = $s(l),
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
function as(l) {
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function h1(l) {
  const i = l.match(/oklch\((.*?)%\s/);
  return i ? parseFloat(i[1]) : null;
}
function p1(l) {
  if (l.startsWith("oklch(")) return (h1(l) || 0) / 100;
  const { r: i, g: o, b: r } = $s(l),
    s = i / 255,
    f = o / 255,
    d = r / 255,
    h = as(s),
    g = as(f),
    p = as(d);
  return 0.2126 * h + 0.7152 * g + 0.0722 * p;
}
function Ri(l, i = 0.179) {
  return l.startsWith("var(") ? !1 : p1(l) > i;
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
      isLight: Ri(o === "dark" ? i.white : i.black, i.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (l === "dimmed")
    return {
      color: l,
      value: o === "dark" ? i.colors.dark[2] : i.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: Ri(
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
      isLight: Ri(l === "white" ? i.white : i.black, i.luminanceThreshold),
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
      isLight: Ri(h, i.luminanceThreshold),
      variable: s ? `--mantine-color-${r}-${f}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: l,
    value: l,
    isThemeColor: d,
    isLight: Ri(l, i.luminanceThreshold),
    shade: f,
    variable: void 0,
  };
}
function Be(l, i) {
  const o = Rl({ color: l || i.primaryColor, theme: i });
  return o.variable ? `var(${o.variable})` : l;
}
function Es(l, i) {
  const o = {
      from: (l == null ? void 0 : l.from) || i.defaultGradient.from,
      to: (l == null ? void 0 : l.to) || i.defaultGradient.to,
      deg: (l == null ? void 0 : l.deg) ?? i.defaultGradient.deg ?? 0,
    },
    r = Be(o.from, i),
    s = Be(o.to, i);
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
  const { r: o, g: r, b: s } = $s(l);
  return `rgba(${o}, ${r}, ${s}, ${i})`;
}
const fa = gn,
  v1 = ({ color: l, theme: i, variant: o, gradient: r, autoContrast: s }) => {
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
              background: Es(r, i),
              hover: Es(r, i),
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
  g1 = {
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
  zp =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Ys = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: g1,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: v1,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: zp,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: zp,
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
function Np(l) {
  return l === "auto" || l === "dark" || l === "light";
}
function y1({ key: l = "mantine-color-scheme-value" } = {}) {
  let i;
  return {
    get: (o) => {
      if (typeof window > "u") return o;
      try {
        const r = window.localStorage.getItem(l);
        return Np(r) ? r : o;
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
          Np(r.newValue) &&
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
const b1 =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  Dp =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function is(l) {
  return l < 0 || l > 9 ? !1 : parseInt(l.toString(), 10) === l;
}
function jp(l) {
  if (!(l.primaryColor in l.colors)) throw new Error(b1);
  if (
    typeof l.primaryShade == "object" &&
    (!is(l.primaryShade.dark) || !is(l.primaryShade.light))
  )
    throw new Error(Dp);
  if (typeof l.primaryShade == "number" && !is(l.primaryShade))
    throw new Error(Dp);
}
function S1(l, i) {
  var r;
  if (!i) return jp(l), l;
  const o = Ds(l, i);
  return (
    i.fontFamily &&
      !((r = i.headings) != null && r.fontFamily) &&
      (o.headings.fontFamily = i.fontFamily),
    jp(o),
    o
  );
}
const qs = A.createContext(null),
  x1 = () => A.useContext(qs) || Ys;
function Xe() {
  const l = A.useContext(qs);
  if (!l)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app",
    );
  return l;
}
function Tv({ theme: l, children: i, inherit: o = !0 }) {
  const r = x1(),
    s = A.useMemo(() => S1(o ? r : Ys, l), [l, r, o]);
  return j.jsx(qs.Provider, { value: s, children: i });
}
Tv.displayName = "@mantine/core/MantineThemeProvider";
function E1() {
  const l = Xe(),
    i = Ls(),
    o = ee(l.breakpoints).reduce((r, s) => {
      const f = l.breakpoints[s].includes("px"),
        d = Ss(l.breakpoints[s]),
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
function rs(l) {
  return Object.entries(l)
    .map(([i, o]) => `${i}: ${o};`)
    .join("");
}
function Ti(l, i) {
  return (Array.isArray(l) ? l : [l]).reduce((r, s) => `${s}{${r}}`, i);
}
function R1(l, i) {
  const o = rs(l.variables),
    r = o ? Ti(i, o) : "",
    s = rs(l.dark),
    f = rs(l.light),
    d = s
      ? Ti(
          i === ":host"
            ? `${i}([data-mantine-color-scheme="dark"])`
            : `${i}[data-mantine-color-scheme="dark"]`,
          s,
        )
      : "",
    h = f
      ? Ti(
          i === ":host"
            ? `${i}([data-mantine-color-scheme="light"])`
            : `${i}[data-mantine-color-scheme="light"]`,
          f,
        )
      : "";
  return `${r}${d}${h}`;
}
function Gs({ color: l, theme: i, autoContrast: o }) {
  return (typeof o == "boolean" ? o : i.autoContrast) &&
    Rl({ color: l || i.primaryColor, theme: i }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function Bp(l, i) {
  return Gs({
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
function T1(l) {
  return !!l && typeof l == "object" && "mantine-virtual-color" in l;
}
function da(l, i, o) {
  ee(i).forEach((r) => Object.assign(l, { [`--mantine-${o}-${r}`]: i[r] }));
}
const Av = (l) => {
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
        "--mantine-primary-color-contrast": Bp(l, "light"),
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
        "--mantine-primary-color-contrast": Bp(l, "dark"),
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
      if (T1(d)) {
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
function A1({ theme: l, generator: i }) {
  const o = Av(l),
    r = i == null ? void 0 : i(l);
  return r ? Ds(o, r) : o;
}
const us = Av(Ys);
function _1(l) {
  const i = { variables: {}, light: {}, dark: {} };
  return (
    ee(l.variables).forEach((o) => {
      us.variables[o] !== l.variables[o] && (i.variables[o] = l.variables[o]);
    }),
    ee(l.light).forEach((o) => {
      us.light[o] !== l.light[o] && (i.light[o] = l.light[o]);
    }),
    ee(l.dark).forEach((o) => {
      us.dark[o] !== l.dark[o] && (i.dark[o] = l.dark[o]);
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
function _v({ cssVariablesSelector: l, deduplicateCssVariables: i }) {
  const o = Xe(),
    r = Ls(),
    s = a1(),
    f = A1({ theme: o, generator: s }),
    d = l === ":root" && i,
    h = d ? _1(f) : f,
    g = R1(h, l);
  return g
    ? j.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${g}${d ? "" : C1(l)}` },
      })
    : null;
}
_v.displayName = "@mantine/CssVariables";
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
function w1({
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
function O1({ respectReducedMotion: l, getRootElement: i }) {
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
  colorSchemeManager: p = y1(),
  defaultColorScheme: b = "light",
  getRootElement: y = () => document.documentElement,
  cssVariablesResolver: T,
  forceColorScheme: x,
  stylesTransform: C,
  env: R,
}) {
  const {
    colorScheme: O,
    setColorScheme: L,
    clearColorScheme: q,
  } = w1({
    defaultColorScheme: b,
    forceColorScheme: x,
    manager: p,
    getRootElement: y,
  });
  return (
    O1({
      respectReducedMotion: (l == null ? void 0 : l.respectReducedMotion) || !1,
      getRootElement: y,
    }),
    j.jsx(Ev.Provider, {
      value: {
        colorScheme: O,
        setColorScheme: L,
        clearColorScheme: q,
        getRootElement: y,
        classNamesPrefix: g,
        getStyleNonce: o,
        cssVariablesResolver: T,
        cssVariablesSelector: h,
        withStaticClasses: r,
        stylesTransform: C,
        env: R,
      },
      children: j.jsxs(Tv, {
        theme: l,
        children: [
          d &&
            j.jsx(_v, { cssVariablesSelector: h, deduplicateCssVariables: f }),
          s && j.jsx(E1, {}),
          i,
        ],
      }),
    })
  );
}
Cv.displayName = "@mantine/core/MantineProvider";
function M1({ classNames: l, styles: i, props: o, stylesCtx: r }) {
  const s = Xe();
  return {
    resolvedClassNames: Eu({
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
const z1 = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function N1({ theme: l, options: i, unstyled: o }) {
  return El(
    (i == null ? void 0 : i.focusable) &&
      !o &&
      (l.focusClassName || z1[l.focusRing]),
    (i == null ? void 0 : i.active) && !o && l.activeClassName,
  );
}
function D1({ selector: l, stylesCtx: i, options: o, props: r, theme: s }) {
  return Eu({
    theme: s,
    classNames: o == null ? void 0 : o.classNames,
    props: (o == null ? void 0 : o.props) || r,
    stylesCtx: i,
  })[l];
}
function Up({ selector: l, stylesCtx: i, theme: o, classNames: r, props: s }) {
  return Eu({ theme: o, classNames: r, props: s, stylesCtx: i })[l];
}
function j1({ rootSelector: l, selector: i, className: o }) {
  return l === i ? o : void 0;
}
function B1({ selector: l, classes: i, unstyled: o }) {
  return o ? void 0 : i[l];
}
function U1({
  themeName: l,
  classNamesPrefix: i,
  selector: o,
  withStaticClass: r,
}) {
  return r === !1 ? [] : l.map((s) => `${i}-${s}-${o}`);
}
function H1({ themeName: l, theme: i, selector: o, props: r, stylesCtx: s }) {
  return l.map((f) => {
    var d, h;
    return (h = Eu({
      theme: i,
      classNames: (d = i.components[f]) == null ? void 0 : d.classNames,
      props: r,
      stylesCtx: s,
    })) == null
      ? void 0
      : h[o];
  });
}
function L1({ options: l, classes: i, selector: o, unstyled: r }) {
  return l != null && l.variant && !r ? i[`${o}--${l.variant}`] : void 0;
}
function $1({
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
  transformedStyles: C,
}) {
  return El(
    N1({ theme: l, options: i, unstyled: h || x }),
    H1({ theme: l, themeName: o, selector: r, props: b, stylesCtx: y }),
    L1({ options: i, classes: d, selector: r, unstyled: h }),
    Up({ selector: r, stylesCtx: y, theme: l, classNames: f, props: b }),
    Up({ selector: r, stylesCtx: y, theme: l, classNames: C, props: b }),
    D1({ selector: r, stylesCtx: y, options: i, props: b, theme: l }),
    j1({ rootSelector: p, selector: r, className: g }),
    B1({ selector: r, classes: d, unstyled: h || x }),
    T &&
      !x &&
      U1({
        themeName: o,
        classNamesPrefix: s,
        selector: r,
        withStaticClass: i == null ? void 0 : i.withStaticClass,
      }),
    i == null ? void 0 : i.className,
  );
}
function Y1({ theme: l, themeName: i, props: o, stylesCtx: r, selector: s }) {
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
function Rs({ style: l, theme: i }) {
  return Array.isArray(l)
    ? [...l].reduce((o, r) => ({ ...o, ...Rs({ style: r, theme: i }) }), {})
    : typeof l == "function"
      ? l(i)
      : (l ?? {});
}
function q1(l) {
  return l.reduce(
    (i, o) => (
      o &&
        Object.keys(o).forEach((r) => {
          i[r] = { ...i[r], ...Su(o[r]) };
        }),
      i
    ),
    {},
  );
}
function G1({
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
  return (g = q1([
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
function X1({
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
      Y1({ theme: l, themeName: i, props: s, stylesCtx: f, selector: o })),
    ...(!T && du({ theme: l, styles: h, props: s, stylesCtx: f })[o]),
    ...(!T &&
      du({
        theme: l,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || s,
        stylesCtx: f,
      })[o]),
    ...G1({
      theme: l,
      props: s,
      stylesCtx: f,
      vars: p,
      varsResolver: b,
      selector: o,
      themeName: i,
      headless: y,
    }),
    ...(d === o ? Rs({ style: g, theme: l }) : null),
    ...Rs({ style: r == null ? void 0 : r.style, theme: l }),
  };
}
function V1({ props: l, stylesCtx: i, themeName: o }) {
  var d;
  const r = Xe(),
    s = (d = c1()) == null ? void 0 : d();
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
function Bt({
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
    x = i1(),
    C = r1(),
    R = u1(),
    O = (Array.isArray(l) ? l : [l]).filter((B) => B),
    { withStylesTransform: L, getTransformedStyles: q } = V1({
      props: o,
      stylesCtx: r,
      themeName: O,
    });
  return (B, X) => ({
    className: $1({
      theme: T,
      options: X,
      themeName: O,
      selector: B,
      classNamesPrefix: x,
      classNames: g,
      classes: i,
      unstyled: h,
      className: s,
      rootSelector: d,
      props: o,
      stylesCtx: r,
      withStaticClasses: C,
      headless: R,
      transformedStyles: q([X == null ? void 0 : X.styles, p]),
    }),
    style: X1({
      theme: T,
      themeName: O,
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
      withStylesTransform: L,
    }),
  });
}
function wv(l, i) {
  return typeof l == "boolean" ? l : i.autoContrast;
}
function vt(l, i, o) {
  var d;
  const r = Xe(),
    s = (d = r.components[l]) == null ? void 0 : d.defaultProps,
    f = typeof s == "function" ? s(r) : s;
  return { ...i, ...f, ...Su(o) };
}
function os(l) {
  return ee(l)
    .reduce((i, o) => (l[o] !== void 0 ? `${i}${qb(o)}:${l[o]};` : i), "")
    .trim();
}
function Q1({ selector: l, styles: i, media: o, container: r }) {
  const s = i ? os(i) : "",
    f = Array.isArray(o)
      ? o.map((h) => `@media${h.query}{${l}{${os(h.styles)}}}`)
      : [],
    d = Array.isArray(r)
      ? r.map((h) => `@container ${h.query}{${l}{${os(h.styles)}}}`)
      : [];
  return `${s ? `${l}{${s}}` : ""}${f.join("")}${d.join("")}`.trim();
}
function Xs(l) {
  const i = Ls();
  return j.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: i == null ? void 0 : i(),
    dangerouslySetInnerHTML: { __html: Q1(l) },
  });
}
function Vs(l) {
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
    pb: C,
    pl: R,
    pr: O,
    pe: L,
    ps: q,
    bd: B,
    bg: X,
    c: $,
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
    w: M,
    miw: Y,
    maw: G,
    h: K,
    mih: S,
    mah: N,
    bgsz: J,
    bgp: F,
    bgr: lt,
    bga: ht,
    pos: nt,
    top: Tt,
    left: Et,
    bottom: le,
    right: Ft,
    inset: Ve,
    display: el,
    flex: _n,
    hiddenFrom: Cn,
    visibleFrom: Ra,
    lightHidden: Du,
    darkHidden: Te,
    sx: ju,
    ...Li
  } = l;
  return {
    styleProps: Su({
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
      pb: C,
      pl: R,
      pr: O,
      pe: L,
      ps: q,
      bd: B,
      bg: X,
      c: $,
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
      w: M,
      miw: Y,
      maw: G,
      h: K,
      mih: S,
      mah: N,
      bgsz: J,
      bgp: F,
      bgr: lt,
      bga: ht,
      pos: nt,
      top: Tt,
      left: Et,
      bottom: le,
      right: Ft,
      inset: Ve,
      display: el,
      flex: _n,
      hiddenFrom: Cn,
      visibleFrom: Ra,
      lightHidden: Du,
      darkHidden: Te,
      sx: ju,
    }),
    rest: Li,
  };
}
const Z1 = {
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
function Qs(l, i) {
  const o = Rl({ color: l, theme: i });
  return o.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : o.color === "bright"
      ? "var(--mantine-color-bright)"
      : o.variable
        ? `var(${o.variable})`
        : o.color;
}
function k1(l, i) {
  const o = Rl({ color: l, theme: i });
  return o.isThemeColor && o.shade === void 0
    ? `var(--mantine-color-${o.color}-text)`
    : Qs(l, i);
}
function K1(l, i) {
  if (typeof l == "number") return Z(l);
  if (typeof l == "string") {
    const [o, r, ...s] = l.split(" ").filter((d) => d.trim() !== "");
    let f = `${Z(o)}`;
    return (
      r && (f += ` ${r}`),
      s.length > 0 && (f += ` ${Qs(s.join(" "), i)}`),
      f.trim()
    );
  }
  return l;
}
const Hp = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function J1(l) {
  return typeof l == "string" && l in Hp ? Hp[l] : l;
}
const W1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function F1(l, i) {
  return typeof l == "string" && l in i.fontSizes
    ? `var(--mantine-font-size-${l})`
    : typeof l == "string" && W1.includes(l)
      ? `var(--mantine-${l}-font-size)`
      : typeof l == "number" || typeof l == "string"
        ? Z(l)
        : l;
}
function P1(l) {
  return l;
}
const I1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function tS(l, i) {
  return typeof l == "string" && l in i.lineHeights
    ? `var(--mantine-line-height-${l})`
    : typeof l == "string" && I1.includes(l)
      ? `var(--mantine-${l}-line-height)`
      : l;
}
function eS(l) {
  return typeof l == "number" ? Z(l) : l;
}
function nS(l, i) {
  if (typeof l == "number") return Z(l);
  if (typeof l == "string") {
    const o = l.replace("-", "");
    if (!(o in i.spacing)) return Z(l);
    const r = `--mantine-spacing-${o}`;
    return l.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return l;
}
const cs = {
  color: Qs,
  textColor: k1,
  fontSize: F1,
  spacing: nS,
  identity: P1,
  size: eS,
  lineHeight: tS,
  fontFamily: J1,
  border: K1,
};
function Lp(l) {
  return l.replace("(min-width: ", "").replace("em)", "");
}
function lS({ media: l, ...i }) {
  const r = Object.keys(l)
    .sort((s, f) => Number(Lp(s)) - Number(Lp(f)))
    .map((s) => ({ query: s, styles: l[s] }));
  return { ...i, media: r };
}
function aS(l) {
  if (typeof l != "object" || l === null) return !1;
  const i = Object.keys(l);
  return !(i.length === 1 && i[0] === "base");
}
function iS(l) {
  return typeof l == "object" && l !== null
    ? "base" in l
      ? l.base
      : void 0
    : l;
}
function rS(l) {
  return typeof l == "object" && l !== null
    ? ee(l).filter((i) => i !== "base")
    : [];
}
function uS(l, i) {
  return typeof l == "object" && l !== null && i in l ? l[i] : l;
}
function Ov({ styleProps: l, data: i, theme: o }) {
  return lS(
    ee(l).reduce(
      (r, s) => {
        if (s === "hiddenFrom" || s === "visibleFrom" || s === "sx") return r;
        const f = i[s],
          d = Array.isArray(f.property) ? f.property : [f.property],
          h = iS(l[s]);
        if (!aS(l[s]))
          return (
            d.forEach((p) => {
              r.inlineStyles[p] = cs[f.type](h, o);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const g = rS(l[s]);
        return (
          d.forEach((p) => {
            h && (r.styles[p] = cs[f.type](h, o)),
              g.forEach((b) => {
                const y = `(min-width: ${o.breakpoints[b]})`;
                r.media[y] = { ...r.media[y], [p]: cs[f.type](uS(l[s], b), o) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} },
    ),
  );
}
function Mv() {
  return `__m__-${A.useId().replace(/:/g, "")}`;
}
function zv(l, i) {
  return Array.isArray(l)
    ? [...l].reduce((o, r) => ({ ...o, ...zv(r, i) }), {})
    : typeof l == "function"
      ? l(i)
      : (l ?? {});
}
function Nv(l) {
  return l.startsWith("data-") ? l : `data-${l}`;
}
function oS(l) {
  return Object.keys(l).reduce((i, o) => {
    const r = l[o];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (i[Nv(o)] = l[o]), i
    );
  }, {});
}
function Dv(l) {
  return l
    ? typeof l == "string"
      ? { [Nv(l)]: !0 }
      : Array.isArray(l)
        ? [...l].reduce((i, o) => ({ ...i, ...Dv(o) }), {})
        : oS(l)
    : null;
}
function Ts(l, i) {
  return Array.isArray(l)
    ? [...l].reduce((o, r) => ({ ...o, ...Ts(r, i) }), {})
    : typeof l == "function"
      ? l(i)
      : (l ?? {});
}
function cS({ theme: l, style: i, vars: o, styleProps: r }) {
  const s = Ts(i, l),
    f = Ts(o, l);
  return { ...s, ...f, ...r };
}
const jv = A.forwardRef(
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
    C,
  ) => {
    var et;
    const R = Xe(),
      O = l || "div",
      { styleProps: L, rest: q } = Vs(x),
      B = o1(),
      X = (et = B == null ? void 0 : B()) == null ? void 0 : et(L.sx),
      $ = Mv(),
      W = Ov({ styleProps: L, theme: R, data: Z1 }),
      P = {
        ref: C,
        style: cS({ theme: R, style: i, vars: o, styleProps: W.inlineStyles }),
        className: El(r, X, {
          [$]: W.hasResponsiveStyles,
          "mantine-light-hidden": p,
          "mantine-dark-hidden": b,
          [`mantine-hidden-from-${h}`]: h,
          [`mantine-visible-from-${g}`]: g,
        }),
        "data-variant": s,
        "data-size": vv(d) ? void 0 : d || void 0,
        size: T,
        ...Dv(f),
        ...q,
      };
    return j.jsxs(j.Fragment, {
      children: [
        W.hasResponsiveStyles &&
          j.jsx(Xs, { selector: `.${$}`, styles: W.styles, media: W.media }),
        typeof y == "function" ? y(P) : j.jsx(O, { ...P }),
      ],
    });
  },
);
jv.displayName = "@mantine/core/Box";
const xt = jv;
function Bv(l) {
  return l;
}
function Dt(l) {
  const i = A.forwardRef(l);
  return (
    (i.extend = Bv),
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
function An(l) {
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
    (i.extend = Bv),
    i
  );
}
const sS = A.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function Uv() {
  return A.useContext(sS);
}
var Zs = uv();
const fS = rv(Zs);
function Ru() {
  return typeof window < "u";
}
function ba(l) {
  return Hv(l) ? (l.nodeName || "").toLowerCase() : "#document";
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
  return (i = (Hv(l) ? l.ownerDocument : l.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function Hv(l) {
  return Ru() ? l instanceof Node || l instanceof me(l).Node : !1;
}
function Ut(l) {
  return Ru() ? l instanceof Element || l instanceof me(l).Element : !1;
}
function Re(l) {
  return Ru() ? l instanceof HTMLElement || l instanceof me(l).HTMLElement : !1;
}
function As(l) {
  return !Ru() || typeof ShadowRoot > "u"
    ? !1
    : l instanceof ShadowRoot || l instanceof me(l).ShadowRoot;
}
function Mi(l) {
  const { overflow: i, overflowX: o, overflowY: r, display: s } = Ue(l);
  return (
    /auto|scroll|overlay|hidden|clip/.test(i + r + o) &&
    !["inline", "contents"].includes(s)
  );
}
function dS(l) {
  return ["table", "td", "th"].includes(ba(l));
}
function Tu(l) {
  return [":popover-open", ":modal"].some((i) => {
    try {
      return l.matches(i);
    } catch {
      return !1;
    }
  });
}
function ks(l) {
  const i = Au(),
    o = Ut(l) ? Ue(l) : l;
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
function mS(l) {
  let i = xn(l);
  for (; Re(i) && !In(i); ) {
    if (ks(i)) return i;
    if (Tu(i)) return null;
    i = xn(i);
  }
  return null;
}
function Au() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function In(l) {
  return ["html", "body", "#document"].includes(ba(l));
}
function Ue(l) {
  return me(l).getComputedStyle(l);
}
function _u(l) {
  return Ut(l)
    ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop }
    : { scrollLeft: l.scrollX, scrollTop: l.scrollY };
}
function xn(l) {
  if (ba(l) === "html") return l;
  const i = l.assignedSlot || l.parentNode || (As(l) && l.host) || tn(l);
  return As(i) ? i.host : i;
}
function Lv(l) {
  const i = xn(l);
  return In(i)
    ? l.ownerDocument
      ? l.ownerDocument.body
      : l.body
    : Re(i) && Mi(i)
      ? i
      : Lv(i);
}
function Sn(l, i, o) {
  var r;
  i === void 0 && (i = []), o === void 0 && (o = !0);
  const s = Lv(l),
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
function $p(l) {
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
function wi(l, i) {
  if (!l || !i) return !1;
  const o = i.getRootNode == null ? void 0 : i.getRootNode();
  if (l.contains(i)) return !0;
  if (o && As(o)) {
    let r = i;
    for (; r; ) {
      if (l === r) return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function $v() {
  const l = navigator.userAgentData;
  return l != null && l.platform ? l.platform : navigator.platform;
}
function Yv() {
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
function hS(l) {
  return gS()
    ? !1
    : (!Yp() && l.width === 0 && l.height === 0) ||
        (Yp() &&
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
function pS() {
  return /apple/i.test(navigator.vendor);
}
function Yp() {
  const l = /android/i;
  return l.test($v()) || l.test(Yv());
}
function vS() {
  return $v().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function gS() {
  return Yv().includes("jsdom/");
}
function Cs(l, i) {
  const o = ["mouse", "pen"];
  return o.push("", void 0), o.includes(l);
}
function yS(l) {
  return "nativeEvent" in l;
}
function bS(l) {
  return l.matches("html,body");
}
function Sl(l) {
  return (l == null ? void 0 : l.ownerDocument) || document;
}
function ss(l, i) {
  if (i == null) return !1;
  if ("composedPath" in l) return l.composedPath().includes(i);
  const o = l;
  return o.target != null && i.contains(o.target);
}
function ha(l) {
  return "composedPath" in l ? l.composedPath()[0] : l.target;
}
const SS =
  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function xS(l) {
  return Re(l) && l.matches(SS);
}
const En = Math.min,
  Fe = Math.max,
  mu = Math.round,
  lu = Math.floor,
  Pe = (l) => ({ x: l, y: l }),
  ES = { left: "right", right: "left", bottom: "top", top: "bottom" },
  RS = { start: "end", end: "start" };
function ws(l, i, o) {
  return Fe(l, En(i, o));
}
function Sa(l, i) {
  return typeof l == "function" ? l(i) : l;
}
function Rn(l) {
  return l.split("-")[0];
}
function zi(l) {
  return l.split("-")[1];
}
function qv(l) {
  return l === "x" ? "y" : "x";
}
function Ks(l) {
  return l === "y" ? "height" : "width";
}
function Pn(l) {
  return ["top", "bottom"].includes(Rn(l)) ? "y" : "x";
}
function Js(l) {
  return qv(Pn(l));
}
function TS(l, i, o) {
  o === void 0 && (o = !1);
  const r = zi(l),
    s = Js(l),
    f = Ks(s);
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
function AS(l) {
  const i = hu(l);
  return [Os(l), i, Os(i)];
}
function Os(l) {
  return l.replace(/start|end/g, (i) => RS[i]);
}
function _S(l, i, o) {
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
  let f = _S(Rn(l), o === "start", r);
  return (
    s && ((f = f.map((d) => d + "-" + s)), i && (f = f.concat(f.map(Os)))), f
  );
}
function hu(l) {
  return l.replace(/left|right|bottom|top/g, (i) => ES[i]);
}
function wS(l) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...l };
}
function Ws(l) {
  return typeof l != "number"
    ? wS(l)
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
function qp(l, i, o) {
  let { reference: r, floating: s } = l;
  const f = Pn(i),
    d = Js(i),
    h = Ks(d),
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
const OS = async (l, i, o) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: f = [],
      platform: d,
    } = o,
    h = f.filter(Boolean),
    g = await (d.isRTL == null ? void 0 : d.isRTL(i));
  let p = await d.getElementRects({ reference: l, floating: i, strategy: s }),
    { x: b, y } = qp(p, r, g),
    T = r,
    x = {},
    C = 0;
  for (let R = 0; R < h.length; R++) {
    const { name: O, fn: L } = h[R],
      {
        x: q,
        y: B,
        data: X,
        reset: $,
      } = await L({
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
    (b = q ?? b),
      (y = B ?? y),
      (x = { ...x, [O]: { ...x[O], ...X } }),
      $ &&
        C <= 50 &&
        (C++,
        typeof $ == "object" &&
          ($.placement && (T = $.placement),
          $.rects &&
            (p =
              $.rects === !0
                ? await d.getElementRects({
                    reference: l,
                    floating: i,
                    strategy: s,
                  })
                : $.rects),
          ({ x: b, y } = qp(p, T, g))),
        (R = -1));
  }
  return { x: b, y, placement: T, strategy: s, middlewareData: x };
};
async function Gv(l, i) {
  var o;
  i === void 0 && (i = {});
  const { x: r, y: s, platform: f, rects: d, elements: h, strategy: g } = l,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: b = "viewport",
      elementContext: y = "floating",
      altBoundary: T = !1,
      padding: x = 0,
    } = Sa(i, l),
    C = Ws(x),
    O = h[T ? (y === "floating" ? "reference" : "floating") : y],
    L = ga(
      await f.getClippingRect({
        element:
          (o = await (f.isElement == null ? void 0 : f.isElement(O))) == null ||
          o
            ? O
            : O.contextElement ||
              (await (f.getDocumentElement == null
                ? void 0
                : f.getDocumentElement(h.floating))),
        boundary: p,
        rootBoundary: b,
        strategy: g,
      }),
    ),
    q =
      y === "floating"
        ? { x: r, y: s, width: d.floating.width, height: d.floating.height }
        : d.reference,
    B = await (f.getOffsetParent == null
      ? void 0
      : f.getOffsetParent(h.floating)),
    X = (await (f.isElement == null ? void 0 : f.isElement(B)))
      ? (await (f.getScale == null ? void 0 : f.getScale(B))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    $ = ga(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: q,
            offsetParent: B,
            strategy: g,
          })
        : q,
    );
  return {
    top: (L.top - $.top + C.top) / X.y,
    bottom: ($.bottom - L.bottom + C.bottom) / X.y,
    left: (L.left - $.left + C.left) / X.x,
    right: ($.right - L.right + C.right) / X.x,
  };
}
const MS = (l) => ({
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
        { element: p, padding: b = 0 } = Sa(l, i) || {};
      if (p == null) return {};
      const y = Ws(b),
        T = { x: o, y: r },
        x = Js(s),
        C = Ks(x),
        R = await d.getDimensions(p),
        O = x === "y",
        L = O ? "top" : "left",
        q = O ? "bottom" : "right",
        B = O ? "clientHeight" : "clientWidth",
        X = f.reference[C] + f.reference[x] - T[x] - f.floating[C],
        $ = T[x] - f.reference[x],
        W = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
      let P = W ? W[B] : 0;
      (!P || !(await (d.isElement == null ? void 0 : d.isElement(W)))) &&
        (P = h.floating[B] || f.floating[C]);
      const et = X / 2 - $ / 2,
        tt = P / 2 - R[C] / 2 - 1,
        ut = En(y[L], tt),
        mt = En(y[q], tt),
        rt = ut,
        ot = P - R[C] - mt,
        ct = P / 2 - R[C] / 2 + et,
        I = ws(rt, ct, ot),
        M =
          !g.arrow &&
          zi(s) != null &&
          ct !== I &&
          f.reference[C] / 2 - (ct < rt ? ut : mt) - R[C] / 2 < 0,
        Y = M ? (ct < rt ? ct - rt : ct - ot) : 0;
      return {
        [x]: T[x] + Y,
        data: {
          [x]: I,
          centerOffset: ct - I - Y,
          ...(M && { alignmentOffset: Y }),
        },
        reset: M,
      };
    },
  }),
  zS = function (l) {
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
              fallbackAxisSideDirection: C = "none",
              flipAlignment: R = !0,
              ...O
            } = Sa(l, i);
          if ((o = f.arrow) != null && o.alignmentOffset) return {};
          const L = Rn(s),
            q = Pn(h),
            B = Rn(h) === h,
            X = await (g.isRTL == null ? void 0 : g.isRTL(p.floating)),
            $ = T || (B || !R ? [hu(h)] : AS(h)),
            W = C !== "none";
          !T && W && $.push(...CS(h, R, C, X));
          const P = [h, ...$],
            et = await Gv(i, O),
            tt = [];
          let ut = ((r = f.flip) == null ? void 0 : r.overflows) || [];
          if ((b && tt.push(et[L]), y)) {
            const I = TS(s, d, X);
            tt.push(et[I[0]], et[I[1]]);
          }
          if (
            ((ut = [...ut, { placement: s, overflows: tt }]),
            !tt.every((I) => I <= 0))
          ) {
            var mt, rt;
            const I = (((mt = f.flip) == null ? void 0 : mt.index) || 0) + 1,
              M = P[I];
            if (M) {
              var ot;
              const G = y === "alignment" ? q !== Pn(M) : !1,
                K = ((ot = ut[0]) == null ? void 0 : ot.overflows[0]) > 0;
              if (!G || K)
                return {
                  data: { index: I, overflows: ut },
                  reset: { placement: M },
                };
            }
            let Y =
              (rt = ut
                .filter((G) => G.overflows[0] <= 0)
                .sort((G, K) => G.overflows[1] - K.overflows[1])[0]) == null
                ? void 0
                : rt.placement;
            if (!Y)
              switch (x) {
                case "bestFit": {
                  var ct;
                  const G =
                    (ct = ut
                      .filter((K) => {
                        if (W) {
                          const S = Pn(K.placement);
                          return S === q || S === "y";
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
                  G && (Y = G);
                  break;
                }
                case "initialPlacement":
                  Y = h;
                  break;
              }
            if (s !== Y) return { reset: { placement: Y } };
          }
          return {};
        },
      }
    );
  };
function Xv(l) {
  const i = En(...l.map((f) => f.left)),
    o = En(...l.map((f) => f.top)),
    r = Fe(...l.map((f) => f.right)),
    s = Fe(...l.map((f) => f.bottom));
  return { x: i, y: o, width: r - i, height: s - o };
}
function NS(l) {
  const i = l.slice().sort((s, f) => s.y - f.y),
    o = [];
  let r = null;
  for (let s = 0; s < i.length; s++) {
    const f = i[s];
    !r || f.y - r.y > r.height / 2 ? o.push([f]) : o[o.length - 1].push(f),
      (r = f);
  }
  return o.map((s) => ga(Xv(s)));
}
const DS = function (l) {
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
          { padding: h = 2, x: g, y: p } = Sa(l, i),
          b = Array.from(
            (await (f.getClientRects == null
              ? void 0
              : f.getClientRects(r.reference))) || [],
          ),
          y = NS(b),
          T = ga(Xv(b)),
          x = Ws(h);
        function C() {
          if (
            y.length === 2 &&
            y[0].left > y[1].right &&
            g != null &&
            p != null
          )
            return (
              y.find(
                (O) =>
                  g > O.left - x.left &&
                  g < O.right + x.right &&
                  p > O.top - x.top &&
                  p < O.bottom + x.bottom,
              ) || T
            );
          if (y.length >= 2) {
            if (Pn(o) === "y") {
              const ut = y[0],
                mt = y[y.length - 1],
                rt = Rn(o) === "top",
                ot = ut.top,
                ct = mt.bottom,
                I = rt ? ut.left : mt.left,
                M = rt ? ut.right : mt.right,
                Y = M - I,
                G = ct - ot;
              return {
                top: ot,
                bottom: ct,
                left: I,
                right: M,
                width: Y,
                height: G,
                x: I,
                y: ot,
              };
            }
            const O = Rn(o) === "left",
              L = Fe(...y.map((ut) => ut.right)),
              q = En(...y.map((ut) => ut.left)),
              B = y.filter((ut) => (O ? ut.left === q : ut.right === L)),
              X = B[0].top,
              $ = B[B.length - 1].bottom,
              W = q,
              P = L,
              et = P - W,
              tt = $ - X;
            return {
              top: X,
              bottom: $,
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
          reference: { getBoundingClientRect: C },
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
async function jS(l, i) {
  const { placement: o, platform: r, elements: s } = l,
    f = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    d = Rn(o),
    h = zi(o),
    g = Pn(o) === "y",
    p = ["left", "top"].includes(d) ? -1 : 1,
    b = f && g ? -1 : 1,
    y = Sa(i, l);
  let {
    mainAxis: T,
    crossAxis: x,
    alignmentAxis: C,
  } = typeof y == "number"
    ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis,
      };
  return (
    h && typeof C == "number" && (x = h === "end" ? C * -1 : C),
    g ? { x: x * b, y: T * p } : { x: T * p, y: x * b }
  );
}
const BS = function (l) {
    return (
      l === void 0 && (l = 0),
      {
        name: "offset",
        options: l,
        async fn(i) {
          var o, r;
          const { x: s, y: f, placement: d, middlewareData: h } = i,
            g = await jS(i, l);
          return d === ((o = h.offset) == null ? void 0 : o.placement) &&
            (r = h.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + g.x, y: f + g.y, data: { ...g, placement: d } };
        },
      }
    );
  },
  US = function (l) {
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
                fn: (O) => {
                  let { x: L, y: q } = O;
                  return { x: L, y: q };
                },
              },
              ...g
            } = Sa(l, i),
            p = { x: o, y: r },
            b = await Gv(i, g),
            y = Pn(Rn(s)),
            T = qv(y);
          let x = p[T],
            C = p[y];
          if (f) {
            const O = T === "y" ? "top" : "left",
              L = T === "y" ? "bottom" : "right",
              q = x + b[O],
              B = x - b[L];
            x = ws(q, x, B);
          }
          if (d) {
            const O = y === "y" ? "top" : "left",
              L = y === "y" ? "bottom" : "right",
              q = C + b[O],
              B = C - b[L];
            C = ws(q, C, B);
          }
          const R = h.fn({ ...i, [T]: x, [y]: C });
          return {
            ...R,
            data: { x: R.x - o, y: R.y - r, enabled: { [T]: f, [y]: d } },
          };
        },
      }
    );
  };
function Vv(l) {
  const i = Ue(l);
  let o = parseFloat(i.width) || 0,
    r = parseFloat(i.height) || 0;
  const s = Re(l),
    f = s ? l.offsetWidth : o,
    d = s ? l.offsetHeight : r,
    h = mu(o) !== f || mu(r) !== d;
  return h && ((o = f), (r = d)), { width: o, height: r, $: h };
}
function Fs(l) {
  return Ut(l) ? l : l.contextElement;
}
function va(l) {
  const i = Fs(l);
  if (!Re(i)) return Pe(1);
  const o = i.getBoundingClientRect(),
    { width: r, height: s, $: f } = Vv(i);
  let d = (f ? mu(o.width) : o.width) / r,
    h = (f ? mu(o.height) : o.height) / s;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const HS = Pe(0);
function Qv(l) {
  const i = me(l);
  return !Au() || !i.visualViewport
    ? HS
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function LS(l, i, o) {
  return i === void 0 && (i = !1), !o || (i && o !== me(l)) ? !1 : i;
}
function xl(l, i, o, r) {
  i === void 0 && (i = !1), o === void 0 && (o = !1);
  const s = l.getBoundingClientRect(),
    f = Fs(l);
  let d = Pe(1);
  i && (r ? Ut(r) && (d = va(r)) : (d = va(l)));
  const h = LS(f, o, r) ? Qv(f) : Pe(0);
  let g = (s.left + h.x) / d.x,
    p = (s.top + h.y) / d.y,
    b = s.width / d.x,
    y = s.height / d.y;
  if (f) {
    const T = me(f),
      x = r && Ut(r) ? me(r) : r;
    let C = T,
      R = _s(C);
    for (; R && r && x !== C; ) {
      const O = va(R),
        L = R.getBoundingClientRect(),
        q = Ue(R),
        B = L.left + (R.clientLeft + parseFloat(q.paddingLeft)) * O.x,
        X = L.top + (R.clientTop + parseFloat(q.paddingTop)) * O.y;
      (g *= O.x),
        (p *= O.y),
        (b *= O.x),
        (y *= O.y),
        (g += B),
        (p += X),
        (C = me(R)),
        (R = _s(C));
    }
  }
  return ga({ width: b, height: y, x: g, y: p });
}
function Ps(l, i) {
  const o = _u(l).scrollLeft;
  return i ? i.left + o : xl(tn(l)).left + o;
}
function Zv(l, i, o) {
  o === void 0 && (o = !1);
  const r = l.getBoundingClientRect(),
    s = r.left + i.scrollLeft - (o ? 0 : Ps(l, r)),
    f = r.top + i.scrollTop;
  return { x: s, y: f };
}
function $S(l) {
  let { elements: i, rect: o, offsetParent: r, strategy: s } = l;
  const f = s === "fixed",
    d = tn(r),
    h = i ? Tu(i.floating) : !1;
  if (r === d || (h && f)) return o;
  let g = { scrollLeft: 0, scrollTop: 0 },
    p = Pe(1);
  const b = Pe(0),
    y = Re(r);
  if (
    (y || (!y && !f)) &&
    ((ba(r) !== "body" || Mi(d)) && (g = _u(r)), Re(r))
  ) {
    const x = xl(r);
    (p = va(r)), (b.x = x.x + r.clientLeft), (b.y = x.y + r.clientTop);
  }
  const T = d && !y && !f ? Zv(d, g, !0) : Pe(0);
  return {
    width: o.width * p.x,
    height: o.height * p.y,
    x: o.x * p.x - g.scrollLeft * p.x + b.x + T.x,
    y: o.y * p.y - g.scrollTop * p.y + b.y + T.y,
  };
}
function YS(l) {
  return Array.from(l.getClientRects());
}
function qS(l) {
  const i = tn(l),
    o = _u(l),
    r = l.ownerDocument.body,
    s = Fe(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth),
    f = Fe(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let d = -o.scrollLeft + Ps(l);
  const h = -o.scrollTop;
  return (
    Ue(r).direction === "rtl" && (d += Fe(i.clientWidth, r.clientWidth) - s),
    { width: s, height: f, x: d, y: h }
  );
}
function GS(l, i) {
  const o = me(l),
    r = tn(l),
    s = o.visualViewport;
  let f = r.clientWidth,
    d = r.clientHeight,
    h = 0,
    g = 0;
  if (s) {
    (f = s.width), (d = s.height);
    const p = Au();
    (!p || (p && i === "fixed")) && ((h = s.offsetLeft), (g = s.offsetTop));
  }
  return { width: f, height: d, x: h, y: g };
}
function XS(l, i) {
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
function Gp(l, i, o) {
  let r;
  if (i === "viewport") r = GS(l, o);
  else if (i === "document") r = qS(tn(l));
  else if (Ut(i)) r = XS(i, o);
  else {
    const s = Qv(l);
    r = { x: i.x - s.x, y: i.y - s.y, width: i.width, height: i.height };
  }
  return ga(r);
}
function kv(l, i) {
  const o = xn(l);
  return o === i || !Ut(o) || In(o)
    ? !1
    : Ue(o).position === "fixed" || kv(o, i);
}
function VS(l, i) {
  const o = i.get(l);
  if (o) return o;
  let r = Sn(l, [], !1).filter((h) => Ut(h) && ba(h) !== "body"),
    s = null;
  const f = Ue(l).position === "fixed";
  let d = f ? xn(l) : l;
  for (; Ut(d) && !In(d); ) {
    const h = Ue(d),
      g = ks(d);
    !g && h.position === "fixed" && (s = null),
      (
        f
          ? !g && !s
          : (!g &&
              h.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (Mi(d) && !g && kv(l, d))
      )
        ? (r = r.filter((b) => b !== d))
        : (s = h),
      (d = xn(d));
  }
  return i.set(l, r), r;
}
function QS(l) {
  let { element: i, boundary: o, rootBoundary: r, strategy: s } = l;
  const d = [
      ...(o === "clippingAncestors"
        ? Tu(i)
          ? []
          : VS(i, this._c)
        : [].concat(o)),
      r,
    ],
    h = d[0],
    g = d.reduce(
      (p, b) => {
        const y = Gp(i, b, s);
        return (
          (p.top = Fe(y.top, p.top)),
          (p.right = En(y.right, p.right)),
          (p.bottom = En(y.bottom, p.bottom)),
          (p.left = Fe(y.left, p.left)),
          p
        );
      },
      Gp(i, h, s),
    );
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top,
  };
}
function ZS(l) {
  const { width: i, height: o } = Vv(l);
  return { width: i, height: o };
}
function kS(l, i, o) {
  const r = Re(i),
    s = tn(i),
    f = o === "fixed",
    d = xl(l, !0, f, i);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const g = Pe(0);
  function p() {
    g.x = Ps(s);
  }
  if (r || (!r && !f))
    if (((ba(i) !== "body" || Mi(s)) && (h = _u(i)), r)) {
      const x = xl(i, !0, f, i);
      (g.x = x.x + i.clientLeft), (g.y = x.y + i.clientTop);
    } else s && p();
  f && !r && s && p();
  const b = s && !r && !f ? Zv(s, h) : Pe(0),
    y = d.left + h.scrollLeft - g.x - b.x,
    T = d.top + h.scrollTop - g.y - b.y;
  return { x: y, y: T, width: d.width, height: d.height };
}
function fs(l) {
  return Ue(l).position === "static";
}
function Xp(l, i) {
  if (!Re(l) || Ue(l).position === "fixed") return null;
  if (i) return i(l);
  let o = l.offsetParent;
  return tn(l) === o && (o = o.ownerDocument.body), o;
}
function Kv(l, i) {
  const o = me(l);
  if (Tu(l)) return o;
  if (!Re(l)) {
    let s = xn(l);
    for (; s && !In(s); ) {
      if (Ut(s) && !fs(s)) return s;
      s = xn(s);
    }
    return o;
  }
  let r = Xp(l, i);
  for (; r && dS(r) && fs(r); ) r = Xp(r, i);
  return r && In(r) && fs(r) && !ks(r) ? o : r || mS(l) || o;
}
const KS = async function (l) {
  const i = this.getOffsetParent || Kv,
    o = this.getDimensions,
    r = await o(l.floating);
  return {
    reference: kS(l.reference, await i(l.floating), l.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function JS(l) {
  return Ue(l).direction === "rtl";
}
const WS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $S,
  getDocumentElement: tn,
  getClippingRect: QS,
  getOffsetParent: Kv,
  getElementRects: KS,
  getClientRects: YS,
  getDimensions: ZS,
  getScale: va,
  isElement: Ut,
  isRTL: JS,
};
function Jv(l, i) {
  return (
    l.x === i.x && l.y === i.y && l.width === i.width && l.height === i.height
  );
}
function FS(l, i) {
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
    const C = lu(y),
      R = lu(s.clientWidth - (b + T)),
      O = lu(s.clientHeight - (y + x)),
      L = lu(b),
      B = {
        rootMargin: -C + "px " + -R + "px " + -O + "px " + -L + "px",
        threshold: Fe(0, En(1, g)) || 1,
      };
    let X = !0;
    function $(W) {
      const P = W[0].intersectionRatio;
      if (P !== g) {
        if (!X) return d();
        P
          ? d(!1, P)
          : (r = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      P === 1 && !Jv(p, l.getBoundingClientRect()) && d(), (X = !1);
    }
    try {
      o = new IntersectionObserver($, { ...B, root: s.ownerDocument });
    } catch {
      o = new IntersectionObserver($, B);
    }
    o.observe(l);
  }
  return d(!0), f;
}
function PS(l, i, o, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: f = !0,
      elementResize: d = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: g = !1,
    } = r,
    p = Fs(l),
    b = s || f ? [...(p ? Sn(p) : []), ...Sn(i)] : [];
  b.forEach((L) => {
    s && L.addEventListener("scroll", o, { passive: !0 }),
      f && L.addEventListener("resize", o);
  });
  const y = p && h ? FS(p, o) : null;
  let T = -1,
    x = null;
  d &&
    ((x = new ResizeObserver((L) => {
      let [q] = L;
      q &&
        q.target === p &&
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
  let C,
    R = g ? xl(l) : null;
  g && O();
  function O() {
    const L = xl(l);
    R && !Jv(R, L) && o(), (R = L), (C = requestAnimationFrame(O));
  }
  return (
    o(),
    () => {
      var L;
      b.forEach((q) => {
        s && q.removeEventListener("scroll", o),
          f && q.removeEventListener("resize", o);
      }),
        y == null || y(),
        (L = x) == null || L.disconnect(),
        (x = null),
        g && cancelAnimationFrame(C);
    }
  );
}
const IS = BS,
  t2 = US,
  e2 = zS,
  Vp = MS,
  n2 = DS,
  l2 = (l, i, o) => {
    const r = new Map(),
      s = { platform: WS, ...o },
      f = { ...s.platform, _c: r };
    return OS(l, i, { ...s, platform: f });
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
function Wv(l) {
  return typeof window > "u"
    ? 1
    : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qp(l, i) {
  const o = Wv(l);
  return Math.round(i * o) / o;
}
function ds(l) {
  const i = A.useRef(l);
  return (
    uu(() => {
      i.current = l;
    }),
    i
  );
}
function a2(l) {
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
  const [C, R] = A.useState(null),
    [O, L] = A.useState(null),
    q = A.useCallback((G) => {
      G !== W.current && ((W.current = G), R(G));
    }, []),
    B = A.useCallback((G) => {
      G !== P.current && ((P.current = G), L(G));
    }, []),
    X = f || C,
    $ = d || O,
    W = A.useRef(null),
    P = A.useRef(null),
    et = A.useRef(b),
    tt = g != null,
    ut = ds(g),
    mt = ds(s),
    rt = ds(p),
    ot = A.useCallback(() => {
      if (!W.current || !P.current) return;
      const G = { placement: i, strategy: o, middleware: T };
      mt.current && (G.platform = mt.current),
        l2(W.current, P.current, G).then((K) => {
          const S = { ...K, isPositioned: rt.current !== !1 };
          ct.current &&
            !pu(et.current, S) &&
            ((et.current = S),
            Zs.flushSync(() => {
              y(S);
            }));
        });
    }, [T, i, o, mt, rt]);
  uu(() => {
    p === !1 &&
      et.current.isPositioned &&
      ((et.current.isPositioned = !1), y((G) => ({ ...G, isPositioned: !1 })));
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
      if ((X && (W.current = X), $ && (P.current = $), X && $)) {
        if (ut.current) return ut.current(X, $, ot);
        ot();
      }
    }, [X, $, ot, ut, tt]);
  const I = A.useMemo(
      () => ({ reference: W, floating: P, setReference: q, setFloating: B }),
      [q, B],
    ),
    M = A.useMemo(() => ({ reference: X, floating: $ }), [X, $]),
    Y = A.useMemo(() => {
      const G = { position: o, left: 0, top: 0 };
      if (!M.floating) return G;
      const K = Qp(M.floating, b.x),
        S = Qp(M.floating, b.y);
      return h
        ? {
            ...G,
            transform: "translate(" + K + "px, " + S + "px)",
            ...(Wv(M.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: K, top: S };
    }, [o, h, M.floating, b.x, b.y]);
  return A.useMemo(
    () => ({ ...b, update: ot, refs: I, elements: M, floatingStyles: Y }),
    [b, ot, I, M, Y],
  );
}
const i2 = (l) => {
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
            ? Vp({ element: r.current, padding: s }).fn(o)
            : {}
          : r
            ? Vp({ element: r, padding: s }).fn(o)
            : {};
      },
    };
  },
  r2 = (l, i) => ({ ...IS(l), options: [l, i] }),
  Fv = (l, i) => ({ ...t2(l), options: [l, i] }),
  Zp = (l, i) => ({ ...e2(l), options: [l, i] }),
  ms = (l, i) => ({ ...n2(l), options: [l, i] }),
  u2 = (l, i) => ({ ...i2(l), options: [l, i] }),
  Pv = { ...P0 },
  o2 = Pv.useInsertionEffect,
  c2 = o2 || ((l) => l());
function yn(l) {
  const i = A.useRef(() => {});
  return (
    c2(() => {
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
let kp = !1,
  s2 = 0;
const Kp = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + s2++;
function f2() {
  const [l, i] = A.useState(() => (kp ? Kp() : void 0));
  return (
    Ie(() => {
      l == null && i(Kp());
    }, []),
    A.useEffect(() => {
      kp = !0;
    }, []),
    l
  );
}
const d2 = Pv.useId,
  Iv = d2 || f2;
function m2() {
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
const h2 = A.createContext(null),
  p2 = A.createContext(null),
  Is = () => {
    var l;
    return ((l = A.useContext(h2)) == null ? void 0 : l.id) || null;
  },
  tf = () => A.useContext(p2);
function ef(l) {
  return "data-floating-ui-" + l;
}
function hs(l) {
  const i = A.useRef(l);
  return (
    Ie(() => {
      i.current = l;
    }),
    i
  );
}
const Jp = ef("safe-polygon");
function ou(l, i, o) {
  return o && !Cs(o) ? 0 : typeof l == "number" ? l : l == null ? void 0 : l[i];
}
function v2(l, i) {
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
    x = tf(),
    C = Is(),
    R = hs(p),
    O = hs(g),
    L = hs(o),
    q = A.useRef(),
    B = A.useRef(-1),
    X = A.useRef(),
    $ = A.useRef(-1),
    W = A.useRef(!0),
    P = A.useRef(!1),
    et = A.useRef(() => {}),
    tt = A.useRef(!1),
    ut = A.useCallback(() => {
      var Y;
      const G = (Y = s.current.openEvent) == null ? void 0 : Y.type;
      return (G == null ? void 0 : G.includes("mouse")) && G !== "mousedown";
    }, [s]);
  A.useEffect(() => {
    if (!h) return;
    function Y(G) {
      let { open: K } = G;
      K ||
        (clearTimeout(B.current),
        clearTimeout($.current),
        (W.current = !0),
        (tt.current = !1));
    }
    return (
      f.on("openchange", Y),
      () => {
        f.off("openchange", Y);
      }
    );
  }, [h, f]),
    A.useEffect(() => {
      if (!h || !R.current || !o) return;
      function Y(K) {
        ut() && r(!1, K, "hover");
      }
      const G = Sl(d.floating).documentElement;
      return (
        G.addEventListener("mouseleave", Y),
        () => {
          G.removeEventListener("mouseleave", Y);
        }
      );
    }, [d.floating, o, r, h, R, ut]);
  const mt = A.useCallback(
      function (Y, G, K) {
        G === void 0 && (G = !0), K === void 0 && (K = "hover");
        const S = ou(O.current, "close", q.current);
        S && !X.current
          ? (clearTimeout(B.current),
            (B.current = window.setTimeout(() => r(!1, Y, K), S)))
          : G && (clearTimeout(B.current), r(!1, Y, K));
      },
      [O, r],
    ),
    rt = yn(() => {
      et.current(), (X.current = void 0);
    }),
    ot = yn(() => {
      if (P.current) {
        const Y = Sl(d.floating).body;
        (Y.style.pointerEvents = ""), Y.removeAttribute(Jp), (P.current = !1);
      }
    }),
    ct = yn(() =>
      s.current.openEvent
        ? ["click", "mousedown"].includes(s.current.openEvent.type)
        : !1,
    );
  A.useEffect(() => {
    if (!h) return;
    function Y(N) {
      if (
        (clearTimeout(B.current),
        (W.current = !1),
        (b && !Cs(q.current)) || (y > 0 && !ou(O.current, "open")))
      )
        return;
      const J = ou(O.current, "open", q.current);
      J
        ? (B.current = window.setTimeout(() => {
            L.current || r(!0, N, "hover");
          }, J))
        : o || r(!0, N, "hover");
    }
    function G(N) {
      if (ct()) return;
      et.current();
      const J = Sl(d.floating);
      if (
        (clearTimeout($.current),
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
      (q.current === "touch" ? !wi(d.floating, N.relatedTarget) : !0) && mt(N);
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
    if (Ut(d.domReference)) {
      var S;
      const N = d.domReference;
      return (
        o && N.addEventListener("mouseleave", K),
        (S = d.floating) == null || S.addEventListener("mouseleave", K),
        T && N.addEventListener("mousemove", Y, { once: !0 }),
        N.addEventListener("mouseenter", Y),
        N.addEventListener("mouseleave", G),
        () => {
          var J;
          o && N.removeEventListener("mouseleave", K),
            (J = d.floating) == null || J.removeEventListener("mouseleave", K),
            T && N.removeEventListener("mousemove", Y),
            N.removeEventListener("mouseenter", Y),
            N.removeEventListener("mouseleave", G);
        }
      );
    }
  }, [d, h, l, b, y, T, mt, rt, ot, r, o, L, x, O, R, s, ct]),
    Ie(() => {
      var Y;
      if (
        h &&
        o &&
        (Y = R.current) != null &&
        Y.__options.blockPointerEvents &&
        ut()
      ) {
        P.current = !0;
        const K = d.floating;
        if (Ut(d.domReference) && K) {
          var G;
          const S = Sl(d.floating).body;
          S.setAttribute(Jp, "");
          const N = d.domReference,
            J =
              x == null ||
              (G = x.nodesRef.current.find((F) => F.id === C)) == null ||
              (G = G.context) == null
                ? void 0
                : G.elements.floating;
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
    }, [h, o, C, d, x, R, ut]),
    Ie(() => {
      o || ((q.current = void 0), (tt.current = !1), rt(), ot());
    }, [o, rt, ot]),
    A.useEffect(
      () => () => {
        rt(), clearTimeout(B.current), clearTimeout($.current), ot();
      },
      [h, d.domReference, rt, ot],
    );
  const I = A.useMemo(() => {
      function Y(G) {
        q.current = G.pointerType;
      }
      return {
        onPointerDown: Y,
        onPointerEnter: Y,
        onMouseMove(G) {
          const { nativeEvent: K } = G;
          function S() {
            !W.current && !L.current && r(!0, K, "hover");
          }
          (b && !Cs(q.current)) ||
            o ||
            y === 0 ||
            (tt.current && G.movementX ** 2 + G.movementY ** 2 < 2) ||
            (clearTimeout($.current),
            q.current === "touch"
              ? S()
              : ((tt.current = !0), ($.current = window.setTimeout(S, y))));
        },
      };
    }, [b, r, o, L, y]),
    M = A.useMemo(
      () => ({
        onMouseEnter() {
          clearTimeout(B.current);
        },
        onMouseLeave(Y) {
          ct() || mt(Y.nativeEvent, !1);
        },
      }),
      [mt, ct],
    );
  return A.useMemo(() => (h ? { reference: I, floating: M } : {}), [h, I, M]);
}
const Ms = () => {},
  tg = A.createContext({
    delay: 0,
    initialDelay: 0,
    timeoutMs: 0,
    currentId: null,
    setCurrentId: Ms,
    setState: Ms,
    isInstantPhase: !1,
  }),
  g2 = () => A.useContext(tg);
function y2(l) {
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
      tg.Provider,
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
function b2(l, i) {
  i === void 0 && (i = {});
  const { open: o, onOpenChange: r, floatingId: s } = l,
    { id: f, enabled: d = !0 } = i,
    h = f ?? s,
    g = g2(),
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
      function C() {
        r(!1), T({ delay: y, currentId: null });
      }
      if (d && p && !o && p === h) {
        if (x) {
          const R = window.setTimeout(C, x);
          return () => {
            clearTimeout(R);
          };
        }
        C();
      }
    }, [d, o, T, p, h, r, y, x]),
    Ie(() => {
      d && (b === Ms || !o || b(h));
    }, [d, o, b, h]),
    g
  );
}
function ps(l, i) {
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
const S2 = "data-floating-ui-focusable",
  x2 = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick",
  },
  E2 = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture",
  },
  Wp = (l) => {
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
function R2(l, i) {
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
      capture: C,
    } = i,
    R = tf(),
    O = yn(typeof g == "function" ? g : () => !1),
    L = typeof g == "function" ? O : g,
    q = A.useRef(!1),
    B = A.useRef(!1),
    { escapeKey: X, outsidePress: $ } = Wp(x),
    { escapeKey: W, outsidePress: P } = Wp(C),
    et = A.useRef(!1),
    tt = yn((I) => {
      var M;
      if (!o || !d || !h || I.key !== "Escape" || et.current) return;
      const Y = (M = f.current.floatingContext) == null ? void 0 : M.nodeId,
        G = R ? ps(R.nodesRef.current, Y) : [];
      if (!X && (I.stopPropagation(), G.length > 0)) {
        let K = !0;
        if (
          (G.forEach((S) => {
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
      r(!1, yS(I) ? I.nativeEvent : I, "escape-key");
    }),
    ut = yn((I) => {
      var M;
      const Y = () => {
        var G;
        tt(I), (G = ha(I)) == null || G.removeEventListener("keydown", Y);
      };
      (M = ha(I)) == null || M.addEventListener("keydown", Y);
    }),
    mt = yn((I) => {
      var M;
      const Y = q.current;
      q.current = !1;
      const G = B.current;
      if (
        ((B.current = !1),
        (p === "click" && G) || Y || (typeof L == "function" && !L(I)))
      )
        return;
      const K = ha(I),
        S = "[" + ef("inert") + "]",
        N = Sl(s.floating).querySelectorAll(S);
      let J = Ut(K) ? K : null;
      for (; J && !In(J); ) {
        const nt = xn(J);
        if (In(nt) || !Ut(nt)) break;
        J = nt;
      }
      if (
        N.length &&
        Ut(K) &&
        !bS(K) &&
        !wi(K, s.floating) &&
        Array.from(N).every((nt) => !wi(J, nt))
      )
        return;
      if (Re(K) && ct) {
        const nt = K.clientWidth > 0 && K.scrollWidth > K.clientWidth,
          Tt = K.clientHeight > 0 && K.scrollHeight > K.clientHeight;
        let Et = Tt && I.offsetX > K.clientWidth;
        if (
          (Tt &&
            Ue(K).direction === "rtl" &&
            (Et = I.offsetX <= K.offsetWidth - K.clientWidth),
          Et || (nt && I.offsetY > K.clientHeight))
        )
          return;
      }
      const F = (M = f.current.floatingContext) == null ? void 0 : M.nodeId,
        lt =
          R &&
          ps(R.nodesRef.current, F).some((nt) => {
            var Tt;
            return ss(
              I,
              (Tt = nt.context) == null ? void 0 : Tt.elements.floating,
            );
          });
      if (ss(I, s.floating) || ss(I, s.domReference) || lt) return;
      const ht = R ? ps(R.nodesRef.current, F) : [];
      if (ht.length > 0) {
        let nt = !0;
        if (
          (ht.forEach((Tt) => {
            var Et;
            if (
              (Et = Tt.context) != null &&
              Et.open &&
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
      var M;
      const Y = () => {
        var G;
        mt(I), (G = ha(I)) == null || G.removeEventListener(p, Y);
      };
      (M = ha(I)) == null || M.addEventListener(p, Y);
    });
  A.useEffect(() => {
    if (!o || !d) return;
    (f.current.__escapeKeyBubbles = X), (f.current.__outsidePressBubbles = $);
    let I = -1;
    function M(N) {
      r(!1, N, "ancestor-scroll");
    }
    function Y() {
      window.clearTimeout(I), (et.current = !0);
    }
    function G() {
      I = window.setTimeout(
        () => {
          et.current = !1;
        },
        Au() ? 5 : 0,
      );
    }
    const K = Sl(s.floating);
    h &&
      (K.addEventListener("keydown", W ? ut : tt, W),
      K.addEventListener("compositionstart", Y),
      K.addEventListener("compositionend", G)),
      L && K.addEventListener(p, P ? rt : mt, P);
    let S = [];
    return (
      T &&
        (Ut(s.domReference) && (S = Sn(s.domReference)),
        Ut(s.floating) && (S = S.concat(Sn(s.floating))),
        !Ut(s.reference) &&
          s.reference &&
          s.reference.contextElement &&
          (S = S.concat(Sn(s.reference.contextElement)))),
      (S = S.filter((N) => {
        var J;
        return N !== ((J = K.defaultView) == null ? void 0 : J.visualViewport);
      })),
      S.forEach((N) => {
        N.addEventListener("scroll", M, { passive: !0 });
      }),
      () => {
        h &&
          (K.removeEventListener("keydown", W ? ut : tt, W),
          K.removeEventListener("compositionstart", Y),
          K.removeEventListener("compositionend", G)),
          L && K.removeEventListener(p, P ? rt : mt, P),
          S.forEach((N) => {
            N.removeEventListener("scroll", M);
          }),
          window.clearTimeout(I);
      }
    );
  }, [f, s, h, L, p, o, r, T, d, X, $, tt, W, ut, mt, P, rt]),
    A.useEffect(() => {
      q.current = !1;
    }, [L, p]);
  const ot = A.useMemo(
      () => ({
        onKeyDown: tt,
        [x2[y]]: (I) => {
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
        [E2[p]]: () => {
          q.current = !0;
        },
      }),
      [tt, p],
    );
  return A.useMemo(
    () => (d ? { reference: ot, floating: ct } : {}),
    [d, ot, ct],
  );
}
function T2(l) {
  const { open: i = !1, onOpenChange: o, elements: r } = l,
    s = Iv(),
    f = A.useRef({}),
    [d] = A.useState(() => m2()),
    h = Is() != null,
    [g, p] = A.useState(r.reference),
    b = yn((x, C, R) => {
      (f.current.openEvent = x ? C : void 0),
        d.emit("openchange", { open: x, event: C, reason: R, nested: h }),
        o == null || o(x, C, R);
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
function eg(l) {
  l === void 0 && (l = {});
  const { nodeId: i } = l,
    o = T2({
      ...l,
      elements: { reference: null, floating: null, ...l.elements },
    }),
    r = l.rootContext || o,
    s = r.elements,
    [f, d] = A.useState(null),
    [h, g] = A.useState(null),
    b = (s == null ? void 0 : s.domReference) || f,
    y = A.useRef(null),
    T = tf();
  Ie(() => {
    b && (y.current = b);
  }, [b]);
  const x = a2({ ...l, elements: { ...s, ...(h && { reference: h }) } }),
    C = A.useCallback(
      (B) => {
        const X = Ut(B)
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
        (Ut(B) || B === null) && ((y.current = B), d(B)),
          (Ut(x.refs.reference.current) ||
            x.refs.reference.current === null ||
            (B !== null && !Ut(B))) &&
            x.refs.setReference(B);
      },
      [x.refs],
    ),
    O = A.useMemo(
      () => ({
        ...x.refs,
        setReference: R,
        setPositionReference: C,
        domReference: y,
      }),
      [x.refs, R, C],
    ),
    L = A.useMemo(() => ({ ...x.elements, domReference: b }), [x.elements, b]),
    q = A.useMemo(
      () => ({ ...x, ...r, refs: O, elements: L, nodeId: i }),
      [x, O, L, i, r],
    );
  return (
    Ie(() => {
      r.dataRef.current.floatingContext = q;
      const B = T == null ? void 0 : T.nodesRef.current.find((X) => X.id === i);
      B && (B.context = q);
    }),
    A.useMemo(() => ({ ...x, context: q, refs: O, elements: L }), [x, O, L, q])
  );
}
function A2(l, i) {
  i === void 0 && (i = {});
  const { open: o, onOpenChange: r, events: s, dataRef: f, elements: d } = l,
    { enabled: h = !0, visibleOnly: g = !0 } = i,
    p = A.useRef(!1),
    b = A.useRef(),
    y = A.useRef(!0);
  A.useEffect(() => {
    if (!h) return;
    const x = me(d.domReference);
    function C() {
      !o &&
        Re(d.domReference) &&
        d.domReference === $p(Sl(d.domReference)) &&
        (p.current = !0);
    }
    function R() {
      y.current = !0;
    }
    return (
      x.addEventListener("blur", C),
      x.addEventListener("keydown", R, !0),
      () => {
        x.removeEventListener("blur", C),
          x.removeEventListener("keydown", R, !0);
      }
    );
  }, [d.domReference, o, h]),
    A.useEffect(() => {
      if (!h) return;
      function x(C) {
        let { reason: R } = C;
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
        hS(x.nativeEvent) || (y.current = !1);
      },
      onMouseLeave() {
        p.current = !1;
      },
      onFocus(x) {
        if (p.current) return;
        const C = ha(x.nativeEvent);
        if (g && Ut(C))
          try {
            if (pS() && vS()) throw Error();
            if (!C.matches(":focus-visible")) return;
          } catch {
            if (!y.current && !xS(C)) return;
          }
        r(!0, x.nativeEvent, "focus");
      },
      onBlur(x) {
        p.current = !1;
        const C = x.relatedTarget,
          R = x.nativeEvent,
          O =
            Ut(C) &&
            C.hasAttribute(ef("focus-guard")) &&
            C.getAttribute("data-type") === "outside";
        b.current = window.setTimeout(() => {
          var L;
          const q = $p(
            d.domReference ? d.domReference.ownerDocument : document,
          );
          (!C && q === d.domReference) ||
            wi(
              (L = f.current.floatingContext) == null
                ? void 0
                : L.refs.floating.current,
              q,
            ) ||
            wi(d.domReference, q) ||
            O ||
            r(!1, R, "focus");
        });
      },
    }),
    [f, d.domReference, r, g],
  );
  return A.useMemo(() => (h ? { reference: T } : {}), [h, T]);
}
const Fp = "active",
  Pp = "selected";
function vs(l, i, o) {
  const r = new Map(),
    s = o === "item";
  let f = l;
  if (s && l) {
    const { [Fp]: d, [Pp]: h, ...g } = l;
    f = g;
  }
  return {
    ...(o === "floating" && { tabIndex: -1, [S2]: "" }),
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
              if (!(s && [Fp, Pp].includes(p)))
                if (p.indexOf("on") === 0) {
                  if ((r.has(p) || r.set(p, []), typeof b == "function")) {
                    var y;
                    (y = r.get(p)) == null || y.push(b),
                      (d[p] = function () {
                        for (
                          var T, x = arguments.length, C = new Array(x), R = 0;
                          R < x;
                          R++
                        )
                          C[R] = arguments[R];
                        return (T = r.get(p)) == null
                          ? void 0
                          : T.map((O) => O(...C)).find((O) => O !== void 0);
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
function _2(l) {
  l === void 0 && (l = []);
  const i = l.map((h) => (h == null ? void 0 : h.reference)),
    o = l.map((h) => (h == null ? void 0 : h.floating)),
    r = l.map((h) => (h == null ? void 0 : h.item)),
    s = A.useCallback((h) => vs(h, l, "reference"), i),
    f = A.useCallback((h) => vs(h, l, "floating"), o),
    d = A.useCallback((h) => vs(h, l, "item"), r);
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
function w2(l, i) {
  var o;
  i === void 0 && (i = {});
  const { open: r, floatingId: s } = l,
    { enabled: f = !0, role: d = "dialog" } = i,
    h = (o = C2.get(d)) != null ? o : d,
    g = Iv(),
    b = Is() != null,
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
      const C = { id: s, ...(h && { role: h }) };
      return h === "tooltip" || d === "label"
        ? C
        : { ...C, ...(h === "menu" && { "aria-labelledby": g }) };
    }, [h, s, g, d]),
    x = A.useCallback(
      (C) => {
        let { active: R, selected: O } = C;
        const L = { role: "option", ...(R && { id: s + "-option" }) };
        switch (d) {
          case "select":
            return { ...L, "aria-selected": R && O };
          case "combobox":
            return { ...L, ...(R && { "aria-selected": !0 }) };
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
var ng = { root: "m_87cf2631" };
const O2 = { __staticSelector: "UnstyledButton" },
  Ni = An((l, i) => {
    const o = vt("UnstyledButton", O2, l),
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
      y = Bt({
        name: f,
        props: o,
        classes: ng,
        className: r,
        style: p,
        classNames: h,
        styles: g,
        unstyled: d,
      });
    return j.jsx(xt, {
      ...y("root", { focusable: !0 }),
      component: s,
      ref: i,
      type: s === "button" ? "button" : void 0,
      ...b,
    });
  });
Ni.classes = ng;
Ni.displayName = "@mantine/core/UnstyledButton";
var lg = { root: "m_1b7284a3" };
const M2 = {},
  z2 = (l, { radius: i, shadow: o }) => ({
    root: {
      "--paper-radius": i === void 0 ? void 0 : Ge(i),
      "--paper-shadow": Zb(o),
    },
  }),
  _i = An((l, i) => {
    const o = vt("Paper", M2, l),
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
        ...C
      } = o,
      R = Bt({
        name: "Paper",
        props: o,
        classes: lg,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: p,
        varsResolver: z2,
      });
    return j.jsx(xt, {
      ref: i,
      mod: [{ "data-with-border": g }, x],
      ...R("root"),
      variant: T,
      ...C,
    });
  });
_i.classes = lg;
_i.displayName = "@mantine/core/Paper";
function N2(l, i) {
  if (l === "rtl" && (i.includes("right") || i.includes("left"))) {
    const [o, r] = i.split("-"),
      s = o === "right" ? "left" : "right";
    return r === void 0 ? s : `${s}-${r}`;
  }
  return i;
}
function Ip(l, i, o, r) {
  return l === "center" || r === "center"
    ? { top: i }
    : l === "end"
      ? { bottom: o }
      : l === "start"
        ? { top: o }
        : {};
}
function tv(l, i, o, r, s) {
  return l === "center" || r === "center"
    ? { left: i }
    : l === "end"
      ? { [s === "ltr" ? "right" : "left"]: o }
      : l === "start"
        ? { [s === "ltr" ? "left" : "right"]: o }
        : {};
}
const D2 = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function j2({
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
      [D2[g]]: r,
    },
    y = -i / 2;
  return g === "left"
    ? {
        ...b,
        ...Ip(p, d, o, s),
        right: y,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      }
    : g === "right"
      ? {
          ...b,
          ...Ip(p, d, o, s),
          left: y,
          borderRightColor: "transparent",
          borderTopColor: "transparent",
          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
        }
      : g === "top"
        ? {
            ...b,
            ...tv(p, f, o, s, h),
            bottom: y,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
          }
        : g === "bottom"
          ? {
              ...b,
              ...tv(p, f, o, s, h),
              top: y,
              borderBottomColor: "transparent",
              borderRightColor: "transparent",
              clipPath: "polygon(0 100%, 0 0, 100% 0)",
            }
          : {};
}
const ag = A.forwardRef(
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
    const { dir: y } = Uv();
    return f
      ? j.jsx("div", {
          ...p,
          ref: b,
          style: {
            ...g,
            ...j2({
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
ag.displayName = "@mantine/core/FloatingArrow";
function gs(l) {
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
function B2({ target: l, reuseTargetNode: i, ...o }) {
  if (l) return typeof l == "string" ? document.querySelector(l) || gs(o) : l;
  if (i) {
    const r = document.querySelector("[data-mantine-shared-portal-node]");
    if (r) return r;
    const s = gs(o);
    return (
      s.setAttribute("data-mantine-shared-portal-node", "true"),
      document.body.appendChild(s),
      s
    );
  }
  return gs(o);
}
const U2 = { reuseTargetNode: !0 },
  ig = Dt((l, i) => {
    const {
        children: o,
        target: r,
        reuseTargetNode: s,
        ...f
      } = vt("Portal", U2, l),
      [d, h] = A.useState(!1),
      g = A.useRef(null);
    return (
      Oi(
        () => (
          h(!0),
          (g.current = B2({ target: r, reuseTargetNode: s, ...f })),
          xs(i, g.current),
          !r && !s && g.current && document.body.appendChild(g.current),
          () => {
            !r && !s && g.current && document.body.removeChild(g.current);
          }
        ),
        [r],
      ),
      !d || !g.current
        ? null
        : Zs.createPortal(j.jsx(j.Fragment, { children: o }), g.current)
    );
  });
ig.displayName = "@mantine/core/Portal";
const nf = Dt(({ withinPortal: l = !0, children: i, ...o }, r) =>
  Rv() === "test" || !l
    ? j.jsx(j.Fragment, { children: i })
    : j.jsx(ig, { ref: r, ...o, children: i }),
);
nf.displayName = "@mantine/core/OptionalPortal";
const Ai = (l) => ({
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
    pop: { ...Ai("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...Ai("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...Ai("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...Ai("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...Ai("top"), common: { transformOrigin: "top right" } },
  },
  ev = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function H2({ transition: l, state: i, duration: o, timingFunction: r }) {
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
          ...au[l][ev[i]],
        }
      : {}
    : {
        transitionProperty: l.transitionProperty,
        ...s,
        ...l.common,
        ...l[ev[i]],
      };
}
function L2({
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
    y = e1(),
    T = b.respectReducedMotion ? y : !1,
    [x, C] = A.useState(T ? 0 : l),
    [R, O] = A.useState(r ? "entered" : "exited"),
    L = A.useRef(-1),
    q = A.useRef(-1),
    B = A.useRef(-1);
  function X() {
    window.clearTimeout(L.current),
      window.clearTimeout(q.current),
      cancelAnimationFrame(B.current);
  }
  const $ = (P) => {
      X();
      const et = P ? s : f,
        tt = P ? d : h,
        ut = T ? 0 : P ? l : i;
      C(ut),
        ut === 0
          ? (typeof et == "function" && et(),
            typeof tt == "function" && tt(),
            O(P ? "entered" : "exited"))
          : (B.current = requestAnimationFrame(() => {
              fS.flushSync(() => {
                O(P ? "pre-entering" : "pre-exiting");
              }),
                (B.current = requestAnimationFrame(() => {
                  typeof et == "function" && et(),
                    O(P ? "entering" : "exiting"),
                    (L.current = window.setTimeout(() => {
                      typeof tt == "function" && tt(),
                        O(P ? "entered" : "exited");
                    }, ut));
                }));
            }));
    },
    W = (P) => {
      if ((X(), typeof (P ? g : p) != "number")) {
        $(P);
        return;
      }
      q.current = window.setTimeout(
        () => {
          $(P);
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
function rg({
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
  const x = Rv(),
    {
      transitionDuration: C,
      transitionStatus: R,
      transitionTimingFunction: O,
    } = L2({
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
  return C === 0 || x === "test"
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
            H2({ transition: i, duration: C, state: R, timingFunction: O }),
          ),
        });
}
rg.displayName = "@mantine/core/Transition";
function $2({ opened: l, floating: i, position: o, positionDependencies: r }) {
  const [s, f] = A.useState(0);
  A.useEffect(() => {
    if (i.refs.reference.current && i.refs.floating.current && l)
      return PS(i.refs.reference.current, i.refs.floating.current, i.update);
  }, [i.refs.reference.current, i.refs.floating.current, l, s, o]),
    fu(() => {
      i.update();
    }, r),
    fu(() => {
      f((d) => d + 1);
    }, [l]);
}
const ug = A.forwardRef(
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
ug.displayName = "@mantine/core/CloseIcon";
var og = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Y2 = { variant: "subtle" },
  q2 = (l, { size: i, radius: o, iconSize: r }) => ({
    root: {
      "--cb-size": ne(i, "cb-size"),
      "--cb-radius": o === void 0 ? void 0 : Ge(o),
      "--cb-icon-size": Z(r),
    },
  }),
  Cu = An((l, i) => {
    const o = vt("CloseButton", Y2, l),
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
        variant: C,
        icon: R,
        mod: O,
        __staticSelector: L,
        ...q
      } = o,
      B = Bt({
        name: L || "CloseButton",
        props: o,
        className: h,
        style: p,
        classes: og,
        classNames: g,
        styles: b,
        unstyled: y,
        vars: f,
        varsResolver: q2,
      });
    return j.jsxs(Ni, {
      ref: i,
      ...q,
      unstyled: y,
      variant: C,
      disabled: x,
      mod: [{ disabled: x || T }, O],
      ...B("root", { variant: C, active: !x && !T }),
      children: [R || j.jsx(ug, {}), s],
    });
  });
Cu.classes = og;
Cu.displayName = "@mantine/core/CloseButton";
function G2(l) {
  return A.Children.toArray(l).filter(Boolean);
}
var cg = { root: "m_4081bf90" };
const X2 = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  V2 = (
    l,
    { grow: i, preventGrowOverflow: o, gap: r, align: s, justify: f, wrap: d },
    { childWidth: h },
  ) => ({
    root: {
      "--group-child-width": i && o ? h : void 0,
      "--group-gap": Us(r),
      "--group-align": s,
      "--group-justify": f,
      "--group-wrap": d,
    },
  }),
  lf = Dt((l, i) => {
    const o = vt("Group", X2, l),
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
        preventGrowOverflow: C,
        vars: R,
        variant: O,
        __size: L,
        mod: q,
        ...B
      } = o,
      X = G2(g),
      $ = X.length,
      W = Us(p ?? "md"),
      et = { childWidth: `calc(${100 / $}% - (${W} - ${W} / ${$}))` },
      tt = Bt({
        name: "Group",
        props: o,
        stylesCtx: et,
        className: s,
        style: f,
        classes: cg,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: R,
        varsResolver: V2,
      });
    return j.jsx(xt, {
      ...tt("root"),
      ref: i,
      variant: O,
      mod: [{ grow: x }, q],
      size: L,
      ...B,
      children: X,
    });
  });
lf.classes = cg;
lf.displayName = "@mantine/core/Group";
const [Q2, Z2] = js({ size: "sm" }),
  k2 = {},
  sg = Dt((l, i) => {
    const o = vt("InputClearButton", k2, l),
      { size: r, variant: s, vars: f, classNames: d, styles: h, ...g } = o,
      p = Z2(),
      { resolvedClassNames: b, resolvedStyles: y } = M1({
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
sg.displayName = "@mantine/core/InputClearButton";
const [K2, Di] = js({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var Le = {
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
const nv = {},
  J2 = (l, { size: i }) => ({
    description: {
      "--input-description-size":
        i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
  }),
  wu = Dt((l, i) => {
    const o = vt("InputDescription", nv, l),
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
      } = vt("InputDescription", nv, o),
      C = Di(),
      R = Bt({
        name: ["InputWrapper", b],
        props: o,
        classes: Le,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "description",
        vars: g,
        varsResolver: J2,
      }),
      O = (y && (C == null ? void 0 : C.getStyles)) || R;
    return j.jsx(xt, {
      component: "p",
      ref: i,
      variant: T,
      size: p,
      ...O(
        "description",
        C != null && C.getStyles ? { className: s, style: f } : void 0,
      ),
      ...x,
    });
  });
wu.classes = Le;
wu.displayName = "@mantine/core/InputDescription";
const W2 = {},
  F2 = (l, { size: i }) => ({
    error: {
      "--input-error-size": i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
  }),
  Ou = Dt((l, i) => {
    const o = vt("InputError", W2, l),
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
      C = Bt({
        name: ["InputWrapper", b],
        props: o,
        classes: Le,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "error",
        vars: g,
        varsResolver: F2,
      }),
      R = Di(),
      O = (y && (R == null ? void 0 : R.getStyles)) || C;
    return j.jsx(xt, {
      component: "p",
      ref: i,
      variant: T,
      size: p,
      ...O(
        "error",
        R != null && R.getStyles ? { className: s, style: f } : void 0,
      ),
      ...x,
    });
  });
Ou.classes = Le;
Ou.displayName = "@mantine/core/InputError";
const lv = { labelElement: "label" },
  P2 = (l, { size: i }) => ({
    label: { "--input-label-size": bn(i), "--input-asterisk-color": void 0 },
  }),
  Mu = Dt((l, i) => {
    const o = vt("InputLabel", lv, l),
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
        children: C,
        __staticSelector: R,
        variant: O,
        mod: L,
        ...q
      } = vt("InputLabel", lv, o),
      B = Bt({
        name: ["InputWrapper", R],
        props: o,
        classes: Le,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "label",
        vars: g,
        varsResolver: P2,
      }),
      X = Di(),
      $ = (X == null ? void 0 : X.getStyles) || B;
    return j.jsxs(xt, {
      ...$(
        "label",
        X != null && X.getStyles ? { className: s, style: f } : void 0,
      ),
      component: p,
      variant: O,
      size: b,
      ref: i,
      htmlFor: p === "label" ? T : void 0,
      mod: [{ required: y }, L],
      onMouseDown: (W) => {
        x == null || x(W),
          !W.defaultPrevented && W.detail > 1 && W.preventDefault();
      },
      ...q,
      children: [
        C,
        y &&
          j.jsx("span", {
            ...$("required"),
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
Mu.classes = Le;
Mu.displayName = "@mantine/core/InputLabel";
const av = {},
  af = Dt((l, i) => {
    const o = vt("InputPlaceholder", av, l),
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
      } = vt("InputPlaceholder", av, o),
      C = Bt({
        name: ["InputPlaceholder", p],
        props: o,
        classes: Le,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        rootSelector: "placeholder",
      });
    return j.jsx(xt, {
      ...C("placeholder"),
      mod: [{ error: !!y }, T],
      component: "span",
      variant: b,
      ref: i,
      ...x,
    });
  });
af.classes = Le;
af.displayName = "@mantine/core/InputPlaceholder";
function I2(l, { hasDescription: i, hasError: o }) {
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
const tx = {
    labelElement: "label",
    inputContainer: (l) => l,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  ex = (l, { size: i }) => ({
    label: { "--input-label-size": bn(i), "--input-asterisk-color": void 0 },
    error: {
      "--input-error-size": i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
    description: {
      "--input-description-size":
        i === void 0 ? void 0 : `calc(${bn(i)} - ${Z(2)})`,
    },
  }),
  rf = Dt((l, i) => {
    const o = vt("InputWrapper", tx, l),
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
        label: C,
        error: R,
        description: O,
        labelProps: L,
        descriptionProps: q,
        errorProps: B,
        labelElement: X,
        children: $,
        withAsterisk: W,
        id: P,
        required: et,
        __stylesApiProps: tt,
        mod: ut,
        ...mt
      } = o,
      rt = Bt({
        name: ["InputWrapper", y],
        props: tt || o,
        classes: Le,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: ex,
      }),
      ot = { size: p, variant: b, __staticSelector: y },
      ct = xu(P),
      I = typeof W == "boolean" ? W : et,
      M = (B == null ? void 0 : B.id) || `${ct}-error`,
      Y = (q == null ? void 0 : q.id) || `${ct}-description`,
      G = ct,
      K = !!R && typeof R != "boolean",
      S = !!O,
      N = `${K ? M : ""} ${S ? Y : ""}`,
      J = N.trim().length > 0 ? N.trim() : void 0,
      F = (L == null ? void 0 : L.id) || `${ct}-label`,
      lt =
        C &&
        j.jsx(
          Mu,
          {
            labelElement: X,
            id: F,
            htmlFor: G,
            required: I,
            ...ot,
            ...L,
            children: C,
          },
          "label",
        ),
      ht =
        S &&
        j.jsx(
          wu,
          {
            ...q,
            ...ot,
            size: (q == null ? void 0 : q.size) || ot.size,
            id: (q == null ? void 0 : q.id) || Y,
            children: O,
          },
          "description",
        ),
      nt = j.jsx(A.Fragment, { children: T($) }, "input"),
      Tt =
        K &&
        A.createElement(
          Ou,
          {
            ...B,
            ...ot,
            size: (B == null ? void 0 : B.size) || ot.size,
            key: "error",
            id: (B == null ? void 0 : B.id) || M,
          },
          R,
        ),
      Et = x.map((le) => {
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
    return j.jsx(K2, {
      value: {
        getStyles: rt,
        describedBy: J,
        inputId: G,
        labelId: F,
        ...I2(x, { hasDescription: S, hasError: K }),
      },
      children: j.jsx(xt, {
        ref: i,
        variant: b,
        size: p,
        mod: [{ error: !!R }, ut],
        ...rt("root"),
        ...mt,
        children: Et,
      }),
    });
  });
rf.classes = Le;
rf.displayName = "@mantine/core/InputWrapper";
const nx = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
  },
  lx = (l, i, o) => ({
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
  He = An((l, i) => {
    const o = vt("Input", nx, l),
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
        disabled: C,
        leftSection: R,
        leftSectionProps: O,
        leftSectionWidth: L,
        rightSection: q,
        rightSectionProps: B,
        rightSectionWidth: X,
        rightSectionPointerEvents: $,
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
        inputSize: M,
        __clearSection: Y,
        __clearable: G,
        __defaultRightSection: K,
        ...S
      } = o,
      { styleProps: N, rest: J } = Vs(S),
      F = Di(),
      lt = {
        offsetBottom: F == null ? void 0 : F.offsetBottom,
        offsetTop: F == null ? void 0 : F.offsetTop,
      },
      ht = Bt({
        name: ["Input", p],
        props: b || o,
        classes: Le,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        stylesCtx: lt,
        rootSelector: "wrapper",
        vars: et,
        varsResolver: lx,
      }),
      nt = ot
        ? {
            required: g,
            disabled: C,
            "aria-invalid": !!x,
            "aria-describedby": F == null ? void 0 : F.describedBy,
            id: (F == null ? void 0 : F.inputId) || rt,
          }
        : {},
      Tt = q || (G && Y) || K;
    return j.jsx(Q2, {
      value: { size: y || "sm" },
      children: j.jsxs(xt, {
        ...ht("wrapper"),
        ...N,
        ...T,
        mod: [
          {
            error: !!x && ct,
            pointer: tt,
            disabled: C,
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
              ...O,
              "data-position": "left",
              ...ht("section", {
                className: O == null ? void 0 : O.className,
                style: O == null ? void 0 : O.style,
              }),
              children: R,
            }),
          j.jsx(xt, {
            component: "input",
            ...J,
            ...nt,
            ref: i,
            required: g,
            mod: { disabled: C, error: !!x && ct },
            variant: P,
            __size: M,
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
He.classes = Le;
He.Wrapper = rf;
He.Label = Mu;
He.Error = Ou;
He.Description = wu;
He.Placeholder = af;
He.ClearButton = sg;
He.displayName = "@mantine/core/Input";
const ax = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" },
};
var fg = { root: "m_8bffd616" };
const ix = {},
  zu = An((l, i) => {
    const o = vt("Flex", ix, l),
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
        wrap: C,
        direction: R,
        ...O
      } = o,
      L = Bt({
        name: "Flex",
        classes: fg,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
      }),
      q = Xe(),
      B = Mv(),
      X = Ov({
        styleProps: {
          gap: p,
          rowGap: b,
          columnGap: y,
          align: T,
          justify: x,
          wrap: C,
          direction: R,
        },
        theme: q,
        data: ax,
      });
    return j.jsxs(j.Fragment, {
      children: [
        X.hasResponsiveStyles &&
          j.jsx(Xs, { selector: `.${B}`, styles: X.styles, media: X.media }),
        j.jsx(xt, {
          ref: i,
          ...L("root", { className: B, style: Su(X.inlineStyles) }),
          ...O,
        }),
      ],
    });
  });
zu.classes = fg;
zu.displayName = "@mantine/core/Flex";
var dg = {
  root: "m_66836ed3",
  wrapper: "m_a5d60502",
  body: "m_667c2793",
  title: "m_6a03f287",
  label: "m_698f4f23",
  icon: "m_667f2a6a",
  message: "m_7fa78076",
  closeButton: "m_87f54839",
};
const rx = {},
  ux = (l, { radius: i, color: o, variant: r, autoContrast: s }) => {
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
  uf = Dt((l, i) => {
    const o = vt("Alert", rx, l),
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
        icon: C,
        withCloseButton: R,
        onClose: O,
        closeButtonLabel: L,
        variant: q,
        autoContrast: B,
        ...X
      } = o,
      $ = Bt({
        name: "Alert",
        classes: dg,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: ux,
      }),
      W = xu(x),
      P = (y && `${W}-title`) || void 0,
      et = `${W}-body`;
    return j.jsx(xt, {
      id: W,
      ...$("root", { variant: q }),
      variant: q,
      ref: i,
      ...X,
      role: "alert",
      "aria-describedby": et,
      "aria-labelledby": P,
      children: j.jsxs("div", {
        ...$("wrapper"),
        children: [
          C && j.jsx("div", { ...$("icon"), children: C }),
          j.jsxs("div", {
            ...$("body"),
            children: [
              y &&
                j.jsx("div", {
                  ...$("title"),
                  "data-with-close-button": R || void 0,
                  children: j.jsx("span", {
                    id: P,
                    ...$("label"),
                    children: y,
                  }),
                }),
              T &&
                j.jsx("div", {
                  id: et,
                  ...$("message"),
                  "data-variant": q,
                  children: T,
                }),
            ],
          }),
          R &&
            j.jsx(Cu, {
              ...$("closeButton"),
              onClick: O,
              variant: "transparent",
              size: 16,
              iconSize: 16,
              "aria-label": L,
              unstyled: h,
            }),
        ],
      }),
    });
  });
uf.classes = dg;
uf.displayName = "@mantine/core/Alert";
var mg = { root: "m_b6d8b162" };
function ox(l) {
  if (l === "start") return "start";
  if (l === "end" || l) return "end";
}
const cx = { inherit: !1 },
  sx = (l, { variant: i, lineClamp: o, gradient: r, size: s, color: f }) => ({
    root: {
      "--text-fz": bn(s),
      "--text-lh": Qb(s),
      "--text-gradient": i === "gradient" ? Es(r, l) : void 0,
      "--text-line-clamp": typeof o == "number" ? o.toString() : void 0,
      "--text-color": f ? Be(f, l) : void 0,
    },
  }),
  ya = An((l, i) => {
    const o = vt("Text", cx, l),
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
        styles: C,
        unstyled: R,
        variant: O,
        mod: L,
        size: q,
        ...B
      } = o,
      X = Bt({
        name: ["Text", p],
        props: o,
        classes: mg,
        className: y,
        style: T,
        classNames: x,
        styles: C,
        unstyled: R,
        vars: b,
        varsResolver: sx,
      });
    return j.jsx(xt, {
      ...X("root", { focusable: !0 }),
      ref: i,
      component: g ? "span" : "p",
      variant: O,
      mod: [
        {
          "data-truncate": ox(s),
          "data-line-clamp": typeof r == "number",
          "data-inline": f,
          "data-inherit": d,
        },
        L,
      ],
      size: q,
      ...B,
    });
  });
ya.classes = mg;
ya.displayName = "@mantine/core/Text";
const [fx, xa] = Xb("AppShell was not found in tree");
var tl = {
  root: "m_89ab340",
  navbar: "m_45252eee",
  aside: "m_9cdde9a",
  header: "m_3b16f56b",
  main: "m_8983817",
  footer: "m_3840c879",
  section: "m_6dcfc7c7",
};
const dx = {},
  of = Dt((l, i) => {
    const o = vt("AppShellAside", dx, l),
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
      x = xa();
    return x.disabled
      ? null
      : j.jsx(xt, {
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
const mx = {},
  cf = Dt((l, i) => {
    var C;
    const o = vt("AppShellFooter", mx, l),
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
      x = xa();
    return x.disabled
      ? null
      : j.jsx(xt, {
          component: "footer",
          ref: i,
          mod: [{ "with-border": p ?? x.withBorder }, y],
          ...x.getStyles("footer", {
            className: El({ [Ns.classNames.zeroRight]: x.offsetScrollbars }, s),
            classNames: r,
            styles: d,
            style: f,
          }),
          ...T,
          __vars: {
            "--app-shell-footer-z-index":
              (C = b ?? x.zIndex) == null ? void 0 : C.toString(),
          },
        });
  });
cf.classes = tl;
cf.displayName = "@mantine/core/AppShellFooter";
const hx = {},
  sf = Dt((l, i) => {
    var C;
    const o = vt("AppShellHeader", hx, l),
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
      x = xa();
    return x.disabled
      ? null
      : j.jsx(xt, {
          component: "header",
          ref: i,
          mod: [{ "with-border": p ?? x.withBorder }, y],
          ...x.getStyles("header", {
            className: El({ [Ns.classNames.zeroRight]: x.offsetScrollbars }, s),
            classNames: r,
            styles: d,
            style: f,
          }),
          ...T,
          __vars: {
            "--app-shell-header-z-index":
              (C = b ?? x.zIndex) == null ? void 0 : C.toString(),
          },
        });
  });
sf.classes = tl;
sf.displayName = "@mantine/core/AppShellHeader";
const px = {},
  ff = Dt((l, i) => {
    const o = vt("AppShellMain", px, l),
      { classNames: r, className: s, style: f, styles: d, vars: h, ...g } = o,
      p = xa();
    return j.jsx(xt, {
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
function vx({
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
    const y = Hs(r.breakpoint, s.breakpoints) - 0.1;
    (o[y] = o[y] || {}),
      (o[y]["--app-shell-aside-width"] = "100%"),
      (o[y]["--app-shell-aside-offset"] = "0px"),
      (o[y]["--app-shell-aside-transform"] = d),
      (o[y]["--app-shell-aside-transform-rtl"] = h);
  }
}
function gx({ baseStyles: l, minMediaStyles: i, footer: o }) {
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
function yx({ baseStyles: l, minMediaStyles: i, header: o }) {
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
function bx({
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
    const y = Hs(r.breakpoint, s.breakpoints) - 0.1;
    (o[y] = o[y] || {}),
      (o[y]["--app-shell-navbar-width"] = "100%"),
      (o[y]["--app-shell-navbar-offset"] = "0px"),
      (o[y]["--app-shell-navbar-transform"] = d),
      (o[y]["--app-shell-navbar-transform-rtl"] = h);
  }
}
function ys(l) {
  return Number(l) === 0 ? "0px" : Us(l);
}
function Sx({ padding: l, baseStyles: i, minMediaStyles: o }) {
  Bi(l) && (i["--app-shell-padding"] = ys(ji(l))),
    Ui(l) &&
      (l.base && (i["--app-shell-padding"] = ys(l.base)),
      ee(l).forEach((r) => {
        r !== "base" &&
          ((o[r] = o[r] || {}), (o[r]["--app-shell-padding"] = ys(l[r])));
      }));
}
function xx({
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
  bx({
    baseStyles: g,
    minMediaStyles: d,
    maxMediaStyles: h,
    navbar: l,
    theme: f,
  }),
    vx({
      baseStyles: g,
      minMediaStyles: d,
      maxMediaStyles: h,
      aside: r,
      theme: f,
    }),
    yx({ baseStyles: g, minMediaStyles: d, header: i }),
    gx({ baseStyles: g, minMediaStyles: d, footer: o }),
    Sx({ baseStyles: g, minMediaStyles: d, padding: s });
  const p = Op(ee(d), f.breakpoints).map((T) => ({
      query: `(min-width: ${su(T.px)})`,
      styles: d[T.value],
    })),
    b = Op(ee(h), f.breakpoints).map((T) => ({
      query: `(max-width: ${su(T.px)})`,
      styles: h[T.value],
    })),
    y = [...p, ...b];
  return { baseStyles: g, media: y };
}
function Ex({ navbar: l, header: i, aside: o, footer: r, padding: s }) {
  const f = Xe(),
    d = Tn(),
    { media: h, baseStyles: g } = xx({
      navbar: l,
      header: i,
      footer: r,
      aside: o,
      padding: s,
      theme: f,
    });
  return j.jsx(Xs, { media: h, styles: g, selector: d.cssVariablesSelector });
}
const Rx = {},
  df = Dt((l, i) => {
    const o = vt("AppShellNavbar", Rx, l),
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
      x = xa();
    return x.disabled
      ? null
      : j.jsx(xt, {
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
const Tx = {},
  mf = An((l, i) => {
    const o = vt("AppShellSection", Tx, l),
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
      y = xa();
    return j.jsx(xt, {
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
function Ax({ transitionDuration: l, disabled: i }) {
  const [o, r] = A.useState(!0),
    s = A.useRef(-1),
    f = A.useRef(-1);
  return (
    Ib("resize", () => {
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
const _x = {
    withBorder: !0,
    padding: 0,
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    zIndex: Bs("app"),
  },
  Cx = (l, { transitionDuration: i, transitionTimingFunction: o }) => ({
    root: {
      "--app-shell-transition-duration": `${i}ms`,
      "--app-shell-transition-timing-function": o,
    },
  }),
  je = Dt((l, i) => {
    const o = vt("AppShell", _x, l),
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
        header: C,
        zIndex: R,
        layout: O,
        disabled: L,
        aside: q,
        footer: B,
        offsetScrollbars: X = O !== "alt",
        mod: $,
        ...W
      } = o,
      P = Bt({
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
      et = Ax({ disabled: L, transitionDuration: T });
    return j.jsxs(fx, {
      value: {
        getStyles: P,
        withBorder: b,
        zIndex: R,
        disabled: L,
        offsetScrollbars: X,
      },
      children: [
        j.jsx(Ex, { navbar: p, header: C, aside: q, footer: B, padding: y }),
        j.jsx(xt, {
          ref: i,
          ...P("root"),
          mod: [{ resizing: et, layout: O, disabled: L }, $],
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
var hg = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc",
};
const wx = hg,
  pg = A.forwardRef(
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
        bodyElement: C = "div",
        labelElement: R = "label",
        variant: O,
        style: L,
        vars: q,
        mod: B,
        ...X
      },
      $,
    ) => {
      const W = Bt({
        name: l,
        props: i,
        className: o,
        style: L,
        classes: hg,
        classNames: r,
        styles: s,
        unstyled: f,
      });
      return j.jsx(xt, {
        ...W("root"),
        ref: $,
        __vars: { "--label-fz": bn(T), "--label-lh": ne(T, "label-lh") },
        mod: [{ "label-position": x }, B],
        variant: O,
        size: T,
        ...X,
        children: j.jsxs(xt, {
          component: C,
          htmlFor: C === "label" ? p : void 0,
          ...W("body"),
          children: [
            d,
            j.jsxs("div", {
              ...W("labelWrapper"),
              "data-disabled": b || void 0,
              children: [
                h &&
                  j.jsx(xt, {
                    component: R,
                    htmlFor: R === "label" ? p : void 0,
                    ...W("label"),
                    "data-disabled": b || void 0,
                    children: h,
                  }),
                g &&
                  j.jsx(He.Description, {
                    size: T,
                    __inheritStyles: !1,
                    ...W("description"),
                    children: g,
                  }),
                y &&
                  typeof y != "boolean" &&
                  j.jsx(He.Error, {
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
pg.displayName = "@mantine/core/InlineInput";
const vg = A.createContext(null),
  Ox = vg.Provider,
  gg = () => A.useContext(vg),
  [Mx, zx] = js();
var yg = { card: "m_26775b0a" };
const Nx = { withBorder: !0 },
  Dx = (l, { radius: i }) => ({ card: { "--card-radius": Ge(i) } }),
  hf = Dt((l, i) => {
    const o = vt("CheckboxCard", Nx, l),
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
        defaultChecked: C,
        onChange: R,
        ...O
      } = o,
      L = Bt({
        name: "CheckboxCard",
        classes: yg,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Dx,
        rootSelector: "card",
      }),
      q = gg(),
      B = typeof p == "boolean" ? p : q ? q.value.includes(T || "") : void 0,
      [X, $] = bv({ value: B, defaultValue: C, finalValue: !1, onChange: R });
    return j.jsx(Mx, {
      value: { checked: X },
      children: j.jsx(Ni, {
        ref: i,
        mod: [{ "with-border": y, checked: X }, b],
        ...L("card"),
        ...O,
        role: "checkbox",
        "aria-checked": X,
        onClick: (W) => {
          x == null || x(W), q == null || q.onChange(T || ""), $(!X);
        },
      }),
    });
  });
hf.displayName = "@mantine/core/CheckboxCard";
hf.classes = yg;
function jx({ children: l, role: i }) {
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
const Bx = {},
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
      } = vt("CheckboxGroup", Bx, l),
      [b, y] = bv({ value: o, defaultValue: r, finalValue: [], onChange: s }),
      T = (x) => {
        const C = typeof x == "string" ? x : x.currentTarget.value;
        !g && y(b.includes(C) ? b.filter((R) => R !== C) : [...b, C]);
      };
    return j.jsx(Ox, {
      value: { value: b, onChange: T, size: f },
      children: j.jsx(He.Wrapper, {
        size: f,
        ref: i,
        ...d,
        ...p,
        labelElement: "div",
        __staticSelector: "CheckboxGroup",
        children: j.jsx(jx, { role: "group", children: h }),
      }),
    });
  });
pf.classes = He.Wrapper.classes;
pf.displayName = "@mantine/core/CheckboxGroup";
function Ux({ size: l, style: i, ...o }) {
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
function bg({ indeterminate: l, ...i }) {
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
    : j.jsx(Ux, { ...i });
}
var Sg = {
  indicator: "m_5e5256ee",
  icon: "m_1b1c543a",
  "indicator--outline": "m_76e20374",
};
const Hx = { icon: bg },
  Lx = (
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
        "--checkbox-color": f === "outline" ? g : Be(o, l),
        "--checkbox-icon-color": s
          ? Be(s, l)
          : wv(d, l)
            ? Gs({ color: o, theme: l, autoContrast: d })
            : void 0,
      },
    };
  },
  vf = Dt((l, i) => {
    const o = vt("CheckboxIndicator", Hx, l),
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
        autoContrast: C,
        checked: R,
        mod: O,
        variant: L,
        disabled: q,
        ...B
      } = o,
      X = p,
      $ = Bt({
        name: "CheckboxIndicator",
        classes: Sg,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Lx,
        rootSelector: "indicator",
      }),
      W = zx(),
      P =
        typeof R == "boolean" || typeof b == "boolean"
          ? R || b
          : (W == null ? void 0 : W.checked) || !1;
    return j.jsx(xt, {
      ref: i,
      ...$("indicator", { variant: L }),
      variant: L,
      mod: [{ checked: P, disabled: q }, O],
      ...B,
      children: j.jsx(X, { indeterminate: b, ...$("icon") }),
    });
  });
vf.displayName = "@mantine/core/CheckboxIndicator";
vf.classes = Sg;
var xg = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542",
};
const $x = { labelPosition: "right", icon: bg },
  Yx = (
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
        "--checkbox-color": f === "outline" ? g : Be(o, l),
        "--checkbox-icon-color": s
          ? Be(s, l)
          : wv(d, l)
            ? Gs({ color: o, theme: l, autoContrast: d })
            : void 0,
      },
    };
  },
  Ea = Dt((l, i) => {
    const o = vt("Checkbox", $x, l),
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
        wrapperProps: C,
        checked: R,
        labelPosition: O,
        description: L,
        error: q,
        disabled: B,
        variant: X,
        indeterminate: $,
        icon: W,
        rootRef: P,
        iconColor: et,
        onChange: tt,
        autoContrast: ut,
        mod: mt,
        ...rt
      } = o,
      ot = gg(),
      ct = T || (ot == null ? void 0 : ot.size),
      I = W,
      M = Bt({
        name: "Checkbox",
        props: o,
        classes: xg,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Yx,
      }),
      { styleProps: Y, rest: G } = Vs(rt),
      K = xu(y),
      S = ot
        ? {
            checked: ot.value.includes(G.value),
            onChange: (F) => {
              ot.onChange(F), tt == null || tt(F);
            },
          }
        : {},
      N = A.useRef(null),
      J = i || N;
    return (
      A.useEffect(() => {
        J && "current" in J && J.current && (J.current.indeterminate = $ || !1);
      }, [$, J]),
      j.jsx(pg, {
        ...M("root"),
        __staticSelector: "Checkbox",
        __stylesApiProps: o,
        id: K,
        size: ct,
        labelPosition: O,
        label: b,
        description: L,
        error: q,
        disabled: B,
        classNames: r,
        styles: d,
        unstyled: h,
        "data-checked": S.checked || R || void 0,
        variant: X,
        ref: P,
        mod: mt,
        ...Y,
        ...C,
        children: j.jsxs(xt, {
          ...M("inner"),
          mod: { "data-label-position": O },
          children: [
            j.jsx(xt, {
              component: "input",
              id: K,
              ref: J,
              checked: R,
              disabled: B,
              mod: { error: !!q, indeterminate: $ },
              ...M("input", { focusable: !0, variant: X }),
              onChange: tt,
              ...G,
              ...S,
              type: "checkbox",
            }),
            j.jsx(I, { indeterminate: $, ...M("icon") }),
          ],
        }),
      })
    );
  });
Ea.classes = { ...xg, ...wx };
Ea.displayName = "@mantine/core/Checkbox";
Ea.Group = pf;
Ea.Indicator = vf;
Ea.Card = hf;
var Eg = {
  root: "m_347db0ec",
  "root--dot": "m_fbd81e3d",
  label: "m_5add502a",
  section: "m_91fdda9b",
};
const qx = {},
  Gx = (
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
        "--badge-dot-color": s === "dot" ? Be(o, l) : void 0,
      },
    };
  },
  gf = An((l, i) => {
    const o = vt("Badge", qx, l),
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
        children: C,
        variant: R,
        fullWidth: O,
        autoContrast: L,
        circle: q,
        mod: B,
        ...X
      } = o,
      $ = Bt({
        name: "Badge",
        props: o,
        classes: Eg,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Gx,
      });
    return j.jsxs(xt, {
      variant: R,
      mod: [
        {
          block: O,
          circle: q,
          "with-right-section": !!x,
          "with-left-section": !!T,
        },
        B,
      ],
      ...$("root", { variant: R }),
      ref: i,
      ...X,
      children: [
        T &&
          j.jsx("span", {
            ...$("section"),
            "data-position": "left",
            children: T,
          }),
        j.jsx("span", { ...$("label"), children: C }),
        x &&
          j.jsx("span", {
            ...$("section"),
            "data-position": "right",
            children: x,
          }),
      ],
    });
  });
gf.classes = Eg;
gf.displayName = "@mantine/core/Badge";
var Rg = { root: "m_fea6bf1a", burger: "m_d4fb9cad" };
const Xx = {},
  Vx = (
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
      "--burger-color": i ? Be(i, l) : void 0,
      "--burger-size": ne(o, "burger-size"),
      "--burger-line-size": r ? Z(r) : void 0,
      "--burger-transition-duration": s === void 0 ? void 0 : `${s}ms`,
      "--burger-transition-timing-function": f,
    },
  }),
  vu = Dt((l, i) => {
    const o = vt("Burger", Xx, l),
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
        ...C
      } = o,
      R = Bt({
        name: "Burger",
        classes: Rg,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Vx,
      });
    return j.jsxs(Ni, {
      ...R("root"),
      ref: i,
      ...C,
      children: [
        j.jsx(xt, { mod: ["reduce-motion", { opened: p }], ...R("burger") }),
        b,
      ],
    });
  });
vu.classes = Rg;
vu.displayName = "@mantine/core/Burger";
var Tg = { root: "m_7485cace" };
const Qx = {},
  Zx = (l, { size: i, fluid: o }) => ({
    root: { "--container-size": o ? void 0 : ne(i, "container-size") },
  }),
  yf = Dt((l, i) => {
    const o = vt("Container", Qx, l),
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
      T = Bt({
        name: "Container",
        classes: Tg,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Zx,
      });
    return j.jsx(xt, { ref: i, mod: [{ fluid: p }, b], ...T("root"), ...y });
  });
yf.classes = Tg;
yf.displayName = "@mantine/core/Container";
var Ag = { root: "m_3eebeb36", label: "m_9e365f20" };
const kx = { orientation: "horizontal" },
  Kx = (l, { color: i, variant: o, size: r }) => ({
    root: {
      "--divider-color": i ? Be(i, l) : void 0,
      "--divider-border-style": o,
      "--divider-size": ne(r, "divider-size"),
    },
  }),
  bf = Dt((l, i) => {
    const o = vt("Divider", kx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        color: p,
        orientation: b,
        label: y,
        labelPosition: T,
        mod: x,
        ...C
      } = o,
      R = Bt({
        name: "Divider",
        classes: Ag,
        props: o,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: g,
        varsResolver: Kx,
      });
    return j.jsx(xt, {
      ref: i,
      mod: [{ orientation: b, "with-label": !!y }, x],
      ...R("root"),
      ...C,
      role: "separator",
      children:
        y &&
        j.jsx(xt, {
          component: "span",
          mod: { position: T },
          ...R("label"),
          children: y,
        }),
    });
  });
bf.classes = Ag;
bf.displayName = "@mantine/core/Divider";
var _g = { root: "m_9e117634" };
const Jx = {},
  Wx = (l, { radius: i, fit: o }) => ({
    root: {
      "--image-radius": i === void 0 ? void 0 : Ge(i),
      "--image-object-fit": o,
    },
  }),
  Sf = An((l, i) => {
    const o = vt("Image", Jx, l),
      {
        classNames: r,
        className: s,
        style: f,
        styles: d,
        unstyled: h,
        vars: g,
        onError: p,
        src: b,
        radius: y,
        fit: T,
        fallbackSrc: x,
        mod: C,
        ...R
      } = o,
      [O, L] = A.useState(!b);
    A.useEffect(() => L(!b), [b]);
    const q = Bt({
      name: "Image",
      classes: _g,
      props: o,
      className: s,
      style: f,
      classNames: r,
      styles: d,
      unstyled: h,
      vars: g,
      varsResolver: Wx,
    });
    return O && x
      ? j.jsx(xt, {
          component: "img",
          ref: i,
          src: x,
          ...q("root"),
          onError: p,
          mod: ["fallback", C],
          ...R,
        })
      : j.jsx(xt, {
          component: "img",
          ref: i,
          ...q("root"),
          src: b,
          onError: (B) => {
            p == null || p(B), L(!0);
          },
          mod: C,
          ...R,
        });
  });
Sf.classes = _g;
Sf.displayName = "@mantine/core/Image";
const Fx = { duration: 100, transition: "fade" };
function Px(l, i) {
  return { ...Fx, ...i, ...l };
}
function Ix({ offset: l, position: i, defaultOpened: o }) {
  const [r, s] = A.useState(o),
    f = A.useRef(null),
    {
      x: d,
      y: h,
      elements: g,
      refs: p,
      update: b,
      placement: y,
    } = eg({
      placement: i,
      middleware: [Fv({ crossAxis: !0, padding: 5, rootBoundary: "document" })],
    }),
    T = y.includes("right") ? l : i.includes("left") ? l * -1 : 0,
    x = y.includes("bottom") ? l : i.includes("top") ? l * -1 : 0,
    C = A.useCallback(
      ({ clientX: R, clientY: O }) => {
        p.setPositionReference({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: R,
              y: O,
              left: R + T,
              top: O + x,
              right: R,
              bottom: O,
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
        R.addEventListener("mousemove", C);
        const O = Sn(p.floating.current);
        return (
          O.forEach((L) => {
            L.addEventListener("scroll", b);
          }),
          () => {
            R.removeEventListener("mousemove", C),
              O.forEach((L) => {
                L.removeEventListener("scroll", b);
              });
          }
        );
      }
    }, [g.reference, p.floating.current, b, C, r]),
    {
      handleMouseMove: C,
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
const tE = {
    refProp: "ref",
    withinPortal: !0,
    offset: 10,
    defaultOpened: !1,
    position: "right",
    zIndex: Bs("popover"),
  },
  eE = (l, { radius: i, color: o }) => ({
    tooltip: {
      "--tooltip-radius": i === void 0 ? void 0 : Ge(i),
      "--tooltip-bg": o ? Be(o, l) : void 0,
      "--tooltip-color": o ? "var(--mantine-color-white)" : void 0,
    },
  }),
  xf = Dt((l, i) => {
    const o = vt("TooltipFloating", tE, l),
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
        offset: C,
        position: R,
        multiline: O,
        zIndex: L,
        disabled: q,
        defaultOpened: B,
        variant: X,
        vars: $,
        portalProps: W,
        ...P
      } = o,
      et = Xe(),
      tt = Bt({
        name: "TooltipFloating",
        props: o,
        classes: Nu,
        className: h,
        style: d,
        classNames: g,
        styles: p,
        unstyled: b,
        rootSelector: "tooltip",
        vars: $,
        varsResolver: eE,
      }),
      {
        handleMouseMove: ut,
        x: mt,
        y: rt,
        opened: ot,
        boundaryRef: ct,
        floating: I,
        setOpened: M,
      } = Ix({ offset: C, position: R, defaultOpened: B });
    if (!gv(r))
      throw new Error(
        "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
      );
    const Y = yv(ct, Sv(r), i),
      G = r.props,
      K = (N) => {
        var J;
        (J = G.onMouseEnter) == null || J.call(G, N), ut(N), M(!0);
      },
      S = (N) => {
        var J;
        (J = G.onMouseLeave) == null || J.call(G, N), M(!1);
      };
    return j.jsxs(j.Fragment, {
      children: [
        j.jsx(nf, {
          ...W,
          withinPortal: f,
          children: j.jsx(xt, {
            ...P,
            ...tt("tooltip", {
              style: {
                ...zv(d, et),
                zIndex: L,
                display: !q && ot ? "block" : "none",
                top: (rt && Math.round(rt)) ?? "",
                left: (mt && Math.round(mt)) ?? "",
              },
            }),
            variant: X,
            ref: I,
            mod: { multiline: O },
            children: x,
          }),
        }),
        A.cloneElement(r, { ...G, [s]: Y, onMouseEnter: K, onMouseLeave: S }),
      ],
    });
  });
xf.classes = Nu;
xf.displayName = "@mantine/core/TooltipFloating";
const Cg = A.createContext(!1),
  nE = Cg.Provider,
  lE = () => A.useContext(Cg),
  aE = { openDelay: 0, closeDelay: 0 };
function Ef(l) {
  const {
    openDelay: i,
    closeDelay: o,
    children: r,
  } = vt("TooltipGroup", aE, l);
  return j.jsx(nE, {
    value: !0,
    children: j.jsx(y2, { delay: { open: i, close: o }, children: r }),
  });
}
Ef.displayName = "@mantine/core/TooltipGroup";
Ef.extend = (l) => l;
function iE(l) {
  if (l === void 0) return { shift: !0, flip: !0 };
  const i = { ...l };
  return (
    l.shift === void 0 && (i.shift = !0), l.flip === void 0 && (i.flip = !0), i
  );
}
function rE(l) {
  const i = iE(l.middlewares),
    o = [r2(l.offset)];
  return (
    i.shift &&
      o.push(
        Fv(
          typeof i.shift == "boolean"
            ? { padding: 8 }
            : { padding: 8, ...i.shift },
        ),
      ),
    i.flip && o.push(typeof i.flip == "boolean" ? Zp() : Zp(i.flip)),
    o.push(u2({ element: l.arrowRef, padding: l.arrowOffset })),
    i.inline
      ? o.push(typeof i.inline == "boolean" ? ms() : ms(i.inline))
      : l.inline && o.push(ms()),
    o
  );
}
function uE(l) {
  var W, P, et;
  const [i, o] = A.useState(l.defaultOpened),
    s = typeof l.opened == "boolean" ? l.opened : i,
    f = lE(),
    d = xu(),
    h = A.useCallback(
      (tt) => {
        o(tt), tt && q(d);
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
      middlewareData: { arrow: { x: C, y: R } = {} },
    } = eg({
      strategy: l.strategy,
      placement: l.position,
      open: s,
      onOpenChange: h,
      middleware: rE(l),
    }),
    { delay: O, currentId: L, setCurrentId: q } = b2(b, { id: d }),
    { getReferenceProps: B, getFloatingProps: X } = _2([
      v2(b, {
        enabled: (W = l.events) == null ? void 0 : W.hover,
        delay: f ? O : { open: l.openDelay, close: l.closeDelay },
        mouseOnly: !((P = l.events) != null && P.touch),
      }),
      A2(b, {
        enabled: (et = l.events) == null ? void 0 : et.focus,
        visibleOnly: !0,
      }),
      w2(b, { role: "tooltip" }),
      R2(b, { enabled: typeof l.opened > "u" }),
    ]);
  $2({
    opened: s,
    position: l.position,
    positionDependencies: l.positionDependencies,
    floating: { refs: y, update: T },
  }),
    fu(() => {
      var tt;
      (tt = l.onPositionChange) == null || tt.call(l, x);
    }, [x]);
  const $ = s && L && L !== d;
  return {
    x: g,
    y: p,
    arrowX: C,
    arrowY: R,
    reference: y.setReference,
    floating: y.setFloating,
    getFloatingProps: X,
    getReferenceProps: B,
    isGroupPhase: $,
    opened: s,
    placement: x,
  };
}
const iv = {
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
    zIndex: Bs("popover"),
    positionDependencies: [],
    middlewares: { flip: !0, shift: !0, inline: !1 },
  },
  oE = (l, { radius: i, color: o }) => ({
    tooltip: {
      "--tooltip-radius": i === void 0 ? void 0 : Ge(i),
      "--tooltip-bg": o ? Be(o, l) : void 0,
      "--tooltip-color": o ? "var(--mantine-color-white)" : void 0,
    },
  }),
  Hi = Dt((l, i) => {
    const o = vt("Tooltip", iv, l),
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
        color: C,
        classNames: R,
        styles: O,
        unstyled: L,
        style: q,
        className: B,
        withArrow: X,
        arrowSize: $,
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
        onClick: M,
        onMouseEnter: Y,
        onMouseLeave: G,
        inline: K,
        variant: S,
        keepMounted: N,
        vars: J,
        portalProps: F,
        mod: lt,
        floatingStrategy: ht,
        middlewares: nt,
        ...Tt
      } = vt("Tooltip", iv, o),
      { dir: Et } = Uv(),
      le = A.useRef(null),
      Ft = uE({
        position: N2(Et, s),
        closeDelay: g,
        openDelay: h,
        onPositionChange: p,
        opened: b,
        defaultOpened: y,
        events: rt,
        arrowRef: le,
        arrowOffset: W,
        offset: typeof tt == "number" ? tt + (X ? $ / 2 : 0) : tt,
        positionDependencies: [...I, r],
        inline: K,
        strategy: ht,
        middlewares: nt,
      }),
      Ve = Bt({
        name: "Tooltip",
        props: o,
        classes: Nu,
        className: B,
        style: q,
        classNames: R,
        styles: O,
        unstyled: L,
        rootSelector: "tooltip",
        vars: J,
        varsResolver: oE,
      });
    if (!gv(r))
      throw new Error(
        "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
      );
    const el = yv(Ft.reference, Sv(r), i),
      _n = Px(ut, { duration: 100, transition: "fade" }),
      Cn = r.props;
    return j.jsxs(j.Fragment, {
      children: [
        j.jsx(nf, {
          ...F,
          withinPortal: T,
          children: j.jsx(rg, {
            ..._n,
            keepMounted: N,
            mounted: !ct && !!Ft.opened,
            duration: Ft.isGroupPhase ? 10 : _n.duration,
            children: (Ra) =>
              j.jsxs(xt, {
                ...Tt,
                "data-fixed": ht === "fixed" || void 0,
                variant: S,
                mod: [{ multiline: mt }, lt],
                ...Ft.getFloatingProps({
                  ref: Ft.floating,
                  className: Ve("tooltip").className,
                  style: {
                    ...Ve("tooltip").style,
                    ...Ra,
                    zIndex: ot,
                    top: Ft.y ?? 0,
                    left: Ft.x ?? 0,
                  },
                }),
                children: [
                  d,
                  j.jsx(ag, {
                    ref: le,
                    arrowX: Ft.arrowX,
                    arrowY: Ft.arrowY,
                    visible: X,
                    position: Ft.placement,
                    arrowSize: $,
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
            onClick: M,
            onMouseEnter: Y,
            onMouseLeave: G,
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
Hi.Floating = xf;
Hi.Group = Ef;
const cE = {},
  gu = Dt((l, i) => {
    const { w: o, h: r, miw: s, mih: f, ...d } = vt("Space", cE, l);
    return j.jsx(xt, { ref: i, ...d, w: o, miw: s ?? o, h: r, mih: f ?? r });
  });
gu.displayName = "@mantine/core/Space";
const sE = ["h1", "h2", "h3", "h4", "h5", "h6"],
  fE = ["xs", "sm", "md", "lg", "xl"];
function dE(l, i) {
  const o = i !== void 0 ? i : `h${l}`;
  return sE.includes(o)
    ? {
        fontSize: `var(--mantine-${o}-font-size)`,
        fontWeight: `var(--mantine-${o}-font-weight)`,
        lineHeight: `var(--mantine-${o}-line-height)`,
      }
    : fE.includes(o)
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
var wg = { root: "m_8a5d1357" };
const mE = { order: 1 },
  hE = (l, { order: i, size: o, lineClamp: r, textWrap: s }) => {
    const f = dE(i, o);
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
  yu = Dt((l, i) => {
    const o = vt("Title", mE, l),
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
        mod: C,
        ...R
      } = o,
      O = Bt({
        name: "Title",
        props: o,
        classes: wg,
        className: s,
        style: f,
        classNames: r,
        styles: d,
        unstyled: h,
        vars: p,
        varsResolver: hE,
      });
    return [1, 2, 3, 4, 5, 6].includes(g)
      ? j.jsx(xt, {
          ...O("root"),
          component: `h${g}`,
          variant: y,
          ref: i,
          mod: [{ order: g, "data-line-clamp": typeof T == "number" }, C],
          size: b,
          ...R,
        })
      : null;
  });
yu.classes = wg;
yu.displayName = "@mantine/core/Title";
function pE() {
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
function vE() {
  return j.jsxs(uf, {
    variant: "filled",
    color: "indigo",
    title: "Feature in Progress",
    icon: j.jsx(pE, {}),
    children: [
      j.jsx(ya, {
        size: "sm",
        children: "This feature is currently being developed.",
      }),
      j.jsx(gu, { h: "sm" }),
      j.jsx(ya, { size: "sm", children: "Be sure to check back soon!" }),
    ],
  });
}
function gE() {
  return j.jsx(Hi, {
    label: "Mock App for Practicing Mantine Library Composition",
    children: j.jsx(zu, {
      direction: "row",
      align: "center",
      gap: "xs",
      children: j.jsx(Sf, { src: "/logo.png", height: 32 }),
    }),
  });
}
function yE({ children: l }) {
  const [i, { toggle: o }] = Mp(),
    [r, { toggle: s }] = Mp(!0);
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
        children: j.jsxs(lf, {
          h: "100%",
          px: "md",
          children: [
            j.jsx(vu, { opened: i, onClick: o, hiddenFrom: "sm", size: "sm" }),
            j.jsx(vu, {
              opened: !r,
              onClick: s,
              visibleFrom: "sm",
              size: "sm",
            }),
            j.jsx(gE, {}),
          ],
        }),
      }),
      j.jsx(je.Navbar, { p: "md", children: j.jsx(vE, {}) }),
      j.jsx(je.Main, { children: j.jsx(yf, { children: l }) }),
    ],
  });
}
const bE = [
  { label: "Water the Plants", category: "Garden", checked: !0 },
  { label: "Grocery shopping", category: "Personal", checked: !1 },
  { label: "Fix bike tire", category: "Maintenance", checked: !1 },
  { label: "Stretch for 10 min", category: "Health", checked: !1 },
];
function SE() {
  return j.jsx(Cv, {
    children: j.jsxs(yE, {
      children: [
        j.jsx(yu, { size: "h2", order: 4, children: "Dashboard" }),
        j.jsx(ya, {
          size: "sm",
          c: "gray",
          fw: 500,
          children: new Date().toDateString(),
        }),
        j.jsx(gu, { h: "md" }),
        j.jsxs(_i, {
          p: "md",
          withBorder: !0,
          children: [
            j.jsx(yu, { size: "h4", order: 4, children: "To-Do" }),
            j.jsx(gu, { h: "xs" }),
            bE.map((l, i, o) =>
              j.jsxs(
                "div",
                {
                  children: [
                    j.jsx(_i, {
                      p: "sm",
                      children: j.jsxs(zu, {
                        gap: "sm",
                        align: "center",
                        children: [
                          j.jsx(Ea, {
                            color: "indigo",
                            defaultChecked: l.checked,
                          }),
                          j.jsx(_i, {
                            style: { flex: 1 },
                            children: j.jsx(ya, {
                              size: "sm",
                              children: l.label,
                            }),
                          }),
                          j.jsx(gf, { color: "indigo", children: l.category }),
                        ],
                      }),
                    }),
                    i < o.length - 1 && j.jsx(bf, {}),
                  ],
                },
                i,
              ),
            ),
          ],
        }),
      ],
    }),
  });
}
ab.createRoot(document.getElementById("root")).render(
  j.jsx(A.StrictMode, { children: j.jsx(SE, {}) }),
);
