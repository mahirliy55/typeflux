import Fe, { useState as q, useRef as je, useEffect as ne } from "react";
var ae = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function dr() {
  if (ke) return V;
  ke = 1;
  var C = Fe, E = Symbol.for("react.element"), D = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, A = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(v, c, O) {
    var d, _ = {}, b = null, R = null;
    O !== void 0 && (b = "" + O), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (R = c.ref);
    for (d in c) T.call(c, d) && !F.hasOwnProperty(d) && (_[d] = c[d]);
    if (v && v.defaultProps) for (d in c = v.defaultProps, c) _[d] === void 0 && (_[d] = c[d]);
    return { $$typeof: E, type: v, key: b, ref: R, props: _, _owner: A.current };
  }
  return V.Fragment = D, V.jsx = w, V.jsxs = w, V;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function pr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var C = Fe, E = Symbol.for("react.element"), D = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), v = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), x = Symbol.iterator, p = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[p];
      return typeof r == "function" ? r : null;
    }
    var y = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        K("error", e, t);
      }
    }
    function K(e, r, t) {
      {
        var n = y.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var S = !1, G = !1, Ie = !1, $e = !1, We = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === F || We || e === A || e === O || e === d || $e || e === R || S || G || Ie || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === _ || e.$$typeof === w || e.$$typeof === v || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case D:
          return "Portal";
        case F:
          return "Profiler";
        case A:
          return "StrictMode";
        case O:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return oe(r) + ".Consumer";
          case w:
            var t = e;
            return oe(t._context) + ".Provider";
          case c:
            return Le(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case b: {
            var o = e, u = o._payload, i = o._init;
            try {
              return P(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, Y = 0, ue, se, le, fe, ce, ve, de;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (Y === 0) {
          ue = console.log, se = console.info, le = console.warn, fe = console.error, ce = console.group, ve = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Me() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ue
            }),
            info: j({}, e, {
              value: se
            }),
            warn: j({}, e, {
              value: le
            }),
            error: j({}, e, {
              value: fe
            }),
            group: j({}, e, {
              value: ce
            }),
            groupCollapsed: j({}, e, {
              value: ve
            }),
            groupEnd: j({}, e, {
              value: de
            })
          });
        }
        Y < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = y.ReactCurrentDispatcher, X;
    function U(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, N;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ue();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = z.current, z.current = null, Ve();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              n = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), g = n.stack.split(`
`), l = a.length - 1, f = g.length - 1; l >= 1 && f >= 0 && a[l] !== g[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== g[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== g[f]) {
                    var m = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, m), m;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = u, Me(), Error.prepareStackTrace = o;
      }
      var $ = e ? e.displayName || e.name : "", k = $ ? U($) : "";
      return typeof e == "function" && N.set(e, k), k;
    }
    function Ne(e, r, t) {
      return ge(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Be(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case O:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ne(e.render);
          case _:
            return B(e.type, r, t);
          case b: {
            var n = e, o = n._payload, u = n._init;
            try {
              return B(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, he = {}, ye = y.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, o) {
      {
        var u = Function.call.bind(L);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (J(o), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), J(null)), a instanceof Error && !(a.message in he) && (he[a.message] = !0, J(o), s("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function Z(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ge(e))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), me(e);
    }
    var _e = y.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Re;
    function Xe(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Re || (Re = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, g = null;
        t !== void 0 && (Ee(t), a = "" + t), He(r) && (Ee(r.key), a = "" + r.key), Xe(r) && (g = r.ref, Ze(r, o));
        for (u in r)
          L.call(r, u) && !ze.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (a || g) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, f), g && er(i, f);
        }
        return rr(e, a, g, o, n, _e.current, i);
      }
    }
    var Q = y.ReactCurrentOwner, Te = y.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Oe() {
      {
        if (Q.current) {
          var e = P(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Se = {};
    function ar(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + P(e._owner.type) + "."), I(e), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Ce(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = W(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              re(i.value) && Ce(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var o = P(r);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), s("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var we = {};
    function xe(e, r, t, n, o, u) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = nr();
          g ? a += g : a += Oe();
          var l;
          e === null ? l = "null" : Z(e) ? l = "array" : e !== void 0 && e.$$typeof === E ? (l = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = tr(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (Z(m)) {
                for (var $ = 0; $ < m.length; $++)
                  Pe(m[$], e);
                Object.freeze && Object.freeze(m);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(m, e);
        }
        if (L.call(r, "key")) {
          var k = P(e), h = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), te = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[k + te]) {
            var cr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            s(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, k, cr, k), we[k + te] = !0;
          }
        }
        return e === T ? or(f) : ir(f), f;
      }
    }
    function ur(e, r, t) {
      return xe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var lr = sr, fr = ur;
    M.Fragment = T, M.jsx = lr, M.jsxs = fr;
  }()), M;
}
process.env.NODE_ENV === "production" ? ae.exports = dr() : ae.exports = pr();
var Ae = ae.exports;
const hr = ({
  text: C,
  speed: E = 50,
  delay: D = 0,
  loop: T = !1,
  cursor: A = !0,
  cursorChar: F = "|",
  className: w = ""
}) => {
  const [v, c] = q(""), [O, d] = q(0), [_, b] = q(!1), [R, x] = q(!1), p = je(null), W = je(!1), y = Array.isArray(C) ? C : [C], s = y[O] || "";
  ne(() => () => {
    p.current && clearTimeout(p.current);
  }, []), ne(() => {
    c(""), d(0), b(!1), x(!1), W.current = !1, p.current && (clearTimeout(p.current), p.current = null);
  }, [C]), ne(() => {
    if (!y.length || !s) return;
    const S = () => {
      !R && v.length < s.length ? (c(s.slice(0, v.length + 1)), b(!0), p.current = setTimeout(S, E)) : !R && v.length === s.length ? (b(!1), T && (p.current = setTimeout(() => {
        y.length > 1, x(!0), p.current = setTimeout(S, E);
      }, 1e3))) : R && v.length > 0 ? (c(v.slice(0, -1)), p.current = setTimeout(S, E / 2)) : R && v.length === 0 && (x(!1), y.length > 1 && d((G) => (G + 1) % y.length), p.current = setTimeout(S, 500));
    };
    return W.current ? S() : (W.current = !0, p.current = setTimeout(() => {
      S();
    }, D)), () => {
      p.current && clearTimeout(p.current);
    };
  }, [v, s, O, R, _, E, D, T, y]);
  const K = `typerly-container ${w}`.trim();
  return /* @__PURE__ */ Ae.jsxs("span", { className: K, children: [
    v,
    A && /* @__PURE__ */ Ae.jsx("span", { className: "typerly-cursor", children: F })
  ] });
};
export {
  hr as Typewriter
};
