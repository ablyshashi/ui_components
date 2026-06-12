var Lo = Object.defineProperty;
var Fo = (n, a, t) => a in n ? Lo(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[a] = t;
var E = (n, a, t) => Fo(n, typeof a != "symbol" ? a + "" : a, t);
import * as H from "react";
import w, { useLayoutEffect as Ma, cloneElement as Sa, createRef as Ze, Component as de, useRef as Ur, useEffect as $r, useCallback as Ao, createElement as Wo } from "react";
import * as Ho from "react-dom";
import Bo from "react-dom";
var Xr = { exports: {} }, mt = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yr, Nn;
function Ea() {
  if (Nn) return Yr;
  Nn = 1;
  var n = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function e(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yr = r() ? Object.assign : function(o, i) {
    for (var s, c = e(o), l, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var u in s)
        a.call(s, u) && (c[u] = s[u]);
      if (n) {
        l = n(s);
        for (var p = 0; p < l.length; p++)
          t.call(s, l[p]) && (c[l[p]] = s[l[p]]);
      }
    }
    return c;
  }, Yr;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function Qo() {
  if (Yn) return mt;
  Yn = 1, Ea();
  var n = w, a = 60103;
  if (mt.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var t = Symbol.for;
    a = t("react.element"), mt.Fragment = t("react.fragment");
  }
  var e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = Object.prototype.hasOwnProperty, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, l) {
    var d, u = {}, p = null, f = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (f = c.ref);
    for (d in c) r.call(c, d) && !o.hasOwnProperty(d) && (u[d] = c[d]);
    if (s && s.defaultProps) for (d in c = s.defaultProps, c) u[d] === void 0 && (u[d] = c[d]);
    return { $$typeof: a, type: s, key: p, ref: f, props: u, _owner: e.current };
  }
  return mt.jsx = i, mt.jsxs = i, mt;
}
var Ir = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function jo() {
  return In || (In = 1, function(n) {
    process.env.NODE_ENV !== "production" && function() {
      var a = w, t = Ea(), e = 60103, r = 60106;
      n.Fragment = 60107;
      var o = 60108, i = 60114, s = 60109, c = 60110, l = 60112, d = 60113, u = 60120, p = 60115, f = 60116, m = 60121, v = 60122, g = 60117, b = 60129, D = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var y = Symbol.for;
        e = y("react.element"), r = y("react.portal"), n.Fragment = y("react.fragment"), o = y("react.strict_mode"), i = y("react.profiler"), s = y("react.provider"), c = y("react.context"), l = y("react.forward_ref"), d = y("react.suspense"), u = y("react.suspense_list"), p = y("react.memo"), f = y("react.lazy"), m = y("react.block"), v = y("react.server.block"), g = y("react.fundamental"), y("react.scope"), y("react.opaque.id"), b = y("react.debug_trace_mode"), y("react.offscreen"), D = y("react.legacy_hidden");
      }
      var M = typeof Symbol == "function" && Symbol.iterator, S = "@@iterator";
      function I(h) {
        if (h === null || typeof h != "object")
          return null;
        var _ = M && h[M] || h[S];
        return typeof _ == "function" ? _ : null;
      }
      var N = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function k(h) {
        {
          for (var _ = arguments.length, C = new Array(_ > 1 ? _ - 1 : 0), F = 1; F < _; F++)
            C[F - 1] = arguments[F];
          P("error", h, C);
        }
      }
      function P(h, _, C) {
        {
          var F = N.ReactDebugCurrentFrame, ee = F.getStackAddendum();
          ee !== "" && (_ += "%s", C = C.concat([ee]));
          var J = C.map(function(U) {
            return "" + U;
          });
          J.unshift("Warning: " + _), Function.prototype.apply.call(console[h], console, J);
        }
      }
      var R = !1;
      function A(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === n.Fragment || h === i || h === b || h === o || h === d || h === u || h === D || R || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === p || h.$$typeof === s || h.$$typeof === c || h.$$typeof === l || h.$$typeof === g || h.$$typeof === m || h[0] === v));
      }
      function T(h, _, C) {
        var F = _.displayName || _.name || "";
        return h.displayName || (F !== "" ? C + "(" + F + ")" : C);
      }
      function L(h) {
        return h.displayName || "Context";
      }
      function Y(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && k("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case n.Fragment:
            return "Fragment";
          case r:
            return "Portal";
          case i:
            return "Profiler";
          case o:
            return "StrictMode";
          case d:
            return "Suspense";
          case u:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case c:
              var _ = h;
              return L(_) + ".Consumer";
            case s:
              var C = h;
              return L(C._context) + ".Provider";
            case l:
              return T(h, h.render, "ForwardRef");
            case p:
              return Y(h.type);
            case m:
              return Y(h._render);
            case f: {
              var F = h, ee = F._payload, J = F._init;
              try {
                return Y(J(ee));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var V = 0, B, W, X, le, Me, vn, gn;
      function wn() {
      }
      wn.__reactDisabledLog = !0;
      function mo() {
        {
          if (V === 0) {
            B = console.log, W = console.info, X = console.warn, le = console.error, Me = console.group, vn = console.groupCollapsed, gn = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: wn,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          V++;
        }
      }
      function vo() {
        {
          if (V--, V === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: t({}, h, {
                value: B
              }),
              info: t({}, h, {
                value: W
              }),
              warn: t({}, h, {
                value: X
              }),
              error: t({}, h, {
                value: le
              }),
              group: t({}, h, {
                value: Me
              }),
              groupCollapsed: t({}, h, {
                value: vn
              }),
              groupEnd: t({}, h, {
                value: gn
              })
            });
          }
          V < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Er = N.ReactCurrentDispatcher, Cr;
      function jt(h, _, C) {
        {
          if (Cr === void 0)
            try {
              throw Error();
            } catch (ee) {
              var F = ee.stack.trim().match(/\n( *(at )?)/);
              Cr = F && F[1] || "";
            }
          return `
` + Cr + h;
        }
      }
      var Pr = !1, Vt;
      {
        var go = typeof WeakMap == "function" ? WeakMap : Map;
        Vt = new go();
      }
      function yn(h, _) {
        if (!h || Pr)
          return "";
        {
          var C = Vt.get(h);
          if (C !== void 0)
            return C;
        }
        var F;
        Pr = !0;
        var ee = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var J;
        J = Er.current, Er.current = null, mo();
        try {
          if (_) {
            var U = function() {
              throw Error();
            };
            if (Object.defineProperty(U.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(U, []);
              } catch (We) {
                F = We;
              }
              Reflect.construct(h, [], U);
            } else {
              try {
                U.call();
              } catch (We) {
                F = We;
              }
              h.call(U.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (We) {
              F = We;
            }
            h();
          }
        } catch (We) {
          if (We && F && typeof We.stack == "string") {
            for (var K = We.stack.split(`
`), ve = F.stack.split(`
`), oe = K.length - 1, ce = ve.length - 1; oe >= 1 && ce >= 0 && K[oe] !== ve[ce]; )
              ce--;
            for (; oe >= 1 && ce >= 0; oe--, ce--)
              if (K[oe] !== ve[ce]) {
                if (oe !== 1 || ce !== 1)
                  do
                    if (oe--, ce--, ce < 0 || K[oe] !== ve[ce]) {
                      var Ae = `
` + K[oe].replace(" at new ", " at ");
                      return typeof h == "function" && Vt.set(h, Ae), Ae;
                    }
                  while (oe >= 1 && ce >= 0);
                break;
              }
          }
        } finally {
          Pr = !1, Er.current = J, vo(), Error.prepareStackTrace = ee;
        }
        var ht = h ? h.displayName || h.name : "", Rn = ht ? jt(ht) : "";
        return typeof h == "function" && Vt.set(h, Rn), Rn;
      }
      function bn(h, _, C) {
        return yn(h, !1);
      }
      function wo(h) {
        var _ = h.prototype;
        return !!(_ && _.isReactComponent);
      }
      function qt(h, _, C) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return yn(h, wo(h));
        if (typeof h == "string")
          return jt(h);
        switch (h) {
          case d:
            return jt("Suspense");
          case u:
            return jt("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case l:
              return bn(h.render);
            case p:
              return qt(h.type, _, C);
            case m:
              return bn(h._render);
            case f: {
              var F = h, ee = F._payload, J = F._init;
              try {
                return qt(J(ee), _, C);
              } catch {
              }
            }
          }
        return "";
      }
      var Dn = {}, _n = N.ReactDebugCurrentFrame;
      function Kt(h) {
        if (h) {
          var _ = h._owner, C = qt(h.type, h._source, _ ? _.type : null);
          _n.setExtraStackFrame(C);
        } else
          _n.setExtraStackFrame(null);
      }
      function yo(h, _, C, F, ee) {
        {
          var J = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var U in h)
            if (J(h, U)) {
              var K = void 0;
              try {
                if (typeof h[U] != "function") {
                  var ve = Error((F || "React class") + ": " + C + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ve.name = "Invariant Violation", ve;
                }
                K = h[U](_, U, F, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (oe) {
                K = oe;
              }
              K && !(K instanceof Error) && (Kt(ee), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", C, U, typeof K), Kt(null)), K instanceof Error && !(K.message in Dn) && (Dn[K.message] = !0, Kt(ee), k("Failed %s type: %s", C, K.message), Kt(null));
            }
        }
      }
      var kn = N.ReactCurrentOwner, Or = Object.prototype.hasOwnProperty, bo = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xn, Mn;
      function Do(h) {
        if (Or.call(h, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function _o(h) {
        if (Or.call(h, "key")) {
          var _ = Object.getOwnPropertyDescriptor(h, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ko(h, _) {
        typeof h.ref == "string" && kn.current;
      }
      function xo(h, _) {
        {
          var C = function() {
            xn || (xn = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
          };
          C.isReactWarning = !0, Object.defineProperty(h, "key", {
            get: C,
            configurable: !0
          });
        }
      }
      function Mo(h, _) {
        {
          var C = function() {
            Mn || (Mn = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
          };
          C.isReactWarning = !0, Object.defineProperty(h, "ref", {
            get: C,
            configurable: !0
          });
        }
      }
      var So = function(h, _, C, F, ee, J, U) {
        var K = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: e,
          // Built-in properties that belong on the element
          type: h,
          key: _,
          ref: C,
          props: U,
          // Record the component responsible for creating this element.
          _owner: J
        };
        return K._store = {}, Object.defineProperty(K._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(K, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(K, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
      };
      function Eo(h, _, C, F, ee) {
        {
          var J, U = {}, K = null, ve = null;
          C !== void 0 && (K = "" + C), _o(_) && (K = "" + _.key), Do(_) && (ve = _.ref, ko(_, ee));
          for (J in _)
            Or.call(_, J) && !bo.hasOwnProperty(J) && (U[J] = _[J]);
          if (h && h.defaultProps) {
            var oe = h.defaultProps;
            for (J in oe)
              U[J] === void 0 && (U[J] = oe[J]);
          }
          if (K || ve) {
            var ce = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
            K && xo(U, ce), ve && Mo(U, ce);
          }
          return So(h, K, ve, ee, F, kn.current, U);
        }
      }
      var Tr = N.ReactCurrentOwner, Sn = N.ReactDebugCurrentFrame;
      function pt(h) {
        if (h) {
          var _ = h._owner, C = qt(h.type, h._source, _ ? _.type : null);
          Sn.setExtraStackFrame(C);
        } else
          Sn.setExtraStackFrame(null);
      }
      var Rr;
      Rr = !1;
      function Nr(h) {
        return typeof h == "object" && h !== null && h.$$typeof === e;
      }
      function En() {
        {
          if (Tr.current) {
            var h = Y(Tr.current.type);
            if (h)
              return `

Check the render method of \`` + h + "`.";
          }
          return "";
        }
      }
      function Co(h) {
        return "";
      }
      var Cn = {};
      function Po(h) {
        {
          var _ = En();
          if (!_) {
            var C = typeof h == "string" ? h : h.displayName || h.name;
            C && (_ = `

Check the top-level render call using <` + C + ">.");
          }
          return _;
        }
      }
      function Pn(h, _) {
        {
          if (!h._store || h._store.validated || h.key != null)
            return;
          h._store.validated = !0;
          var C = Po(_);
          if (Cn[C])
            return;
          Cn[C] = !0;
          var F = "";
          h && h._owner && h._owner !== Tr.current && (F = " It was passed a child from " + Y(h._owner.type) + "."), pt(h), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, F), pt(null);
        }
      }
      function On(h, _) {
        {
          if (typeof h != "object")
            return;
          if (Array.isArray(h))
            for (var C = 0; C < h.length; C++) {
              var F = h[C];
              Nr(F) && Pn(F, _);
            }
          else if (Nr(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ee = I(h);
            if (typeof ee == "function" && ee !== h.entries)
              for (var J = ee.call(h), U; !(U = J.next()).done; )
                Nr(U.value) && Pn(U.value, _);
          }
        }
      }
      function Oo(h) {
        {
          var _ = h.type;
          if (_ == null || typeof _ == "string")
            return;
          var C;
          if (typeof _ == "function")
            C = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === l || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === p))
            C = _.propTypes;
          else
            return;
          if (C) {
            var F = Y(_);
            yo(C, h.props, "prop", F, h);
          } else if (_.PropTypes !== void 0 && !Rr) {
            Rr = !0;
            var ee = Y(_);
            k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function To(h) {
        {
          for (var _ = Object.keys(h.props), C = 0; C < _.length; C++) {
            var F = _[C];
            if (F !== "children" && F !== "key") {
              pt(h), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), pt(null);
              break;
            }
          }
          h.ref !== null && (pt(h), k("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
        }
      }
      function Tn(h, _, C, F, ee, J) {
        {
          var U = A(h);
          if (!U) {
            var K = "";
            (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var ve = Co();
            ve ? K += ve : K += En();
            var oe;
            h === null ? oe = "null" : Array.isArray(h) ? oe = "array" : h !== void 0 && h.$$typeof === e ? (oe = "<" + (Y(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof h, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, K);
          }
          var ce = Eo(h, _, C, ee, J);
          if (ce == null)
            return ce;
          if (U) {
            var Ae = _.children;
            if (Ae !== void 0)
              if (F)
                if (Array.isArray(Ae)) {
                  for (var ht = 0; ht < Ae.length; ht++)
                    On(Ae[ht], h);
                  Object.freeze && Object.freeze(Ae);
                } else
                  k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                On(Ae, h);
          }
          return h === n.Fragment ? To(ce) : Oo(ce), ce;
        }
      }
      function Ro(h, _, C) {
        return Tn(h, _, C, !0);
      }
      function No(h, _, C) {
        return Tn(h, _, C, !1);
      }
      var Yo = No, Io = Ro;
      n.jsx = Yo, n.jsxs = Io;
    }();
  }(Ir)), Ir;
}
process.env.NODE_ENV === "production" ? Xr.exports = Qo() : Xr.exports = jo();
var re = Xr.exports;
function Ca(n) {
  var a, t, e = "";
  if (typeof n == "string" || typeof n == "number") e += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (a = 0; a < r; a++) n[a] && (t = Ca(n[a])) && (e && (e += " "), e += t);
  } else for (t in n) n[t] && (e && (e += " "), e += t);
  return e;
}
function ue() {
  for (var n, a, t = 0, e = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (a = Ca(n)) && (e && (e += " "), e += a);
  return e;
}
const Pa = 6048e5, Vo = 864e5, wr = 6e4, yr = 36e5, qo = 1e3, Ln = Symbol.for("constructDateFrom");
function Z(n, a) {
  return typeof n == "function" ? n(a) : n && typeof n == "object" && Ln in n ? n[Ln](a) : n instanceof Date ? new n.constructor(a) : new Date(a);
}
function O(n, a) {
  return Z(a || n, n);
}
function Se(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in);
  return isNaN(a) ? Z((t == null ? void 0 : t.in) || n, NaN) : (a && e.setDate(e.getDate() + a), e);
}
function Ce(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in);
  if (isNaN(a)) return Z(n, NaN);
  if (!a)
    return e;
  const r = e.getDate(), o = Z(n, e.getTime());
  o.setMonth(e.getMonth() + a + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (e.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), e);
}
function Oa(n, a, t) {
  return Z(n, +O(n) + a);
}
function Ko(n, a, t) {
  return Oa(n, a * yr);
}
let Uo = {};
function ft() {
  return Uo;
}
function qe(n, a) {
  var s, c, l, d;
  const t = ft(), e = (a == null ? void 0 : a.weekStartsOn) ?? ((c = (s = a == null ? void 0 : a.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? t.weekStartsOn ?? ((d = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, r = O(n, a == null ? void 0 : a.in), o = r.getDay(), i = (o < e ? 7 : 0) + o - e;
  return r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r;
}
function Dt(n, a) {
  return qe(n, { ...a, weekStartsOn: 1 });
}
function Ta(n, a) {
  const t = O(n, a == null ? void 0 : a.in), e = t.getFullYear(), r = Z(t, 0);
  r.setFullYear(e + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Dt(r), i = Z(t, 0);
  i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Dt(i);
  return t.getTime() >= o.getTime() ? e + 1 : t.getTime() >= s.getTime() ? e : e - 1;
}
function ir(n) {
  const a = O(n), t = new Date(
    Date.UTC(
      a.getFullYear(),
      a.getMonth(),
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    )
  );
  return t.setUTCFullYear(a.getFullYear()), +n - +t;
}
function Ke(n, ...a) {
  const t = Z.bind(
    null,
    a.find((e) => typeof e == "object")
  );
  return a.map(t);
}
function ut(n, a) {
  const t = O(n, a == null ? void 0 : a.in);
  return t.setHours(0, 0, 0, 0), t;
}
function _t(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  ), o = ut(e), i = ut(r), s = +o - ir(o), c = +i - ir(i);
  return Math.round((s - c) / Vo);
}
function $o(n, a) {
  const t = Ta(n, a), e = Z(n, 0);
  return e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), Dt(e);
}
function It(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in);
  return e.setTime(e.getTime() + a * wr), e;
}
function rn(n, a, t) {
  return Ce(n, a * 3, t);
}
function Xo(n, a, t) {
  return Oa(n, a * 1e3);
}
function sr(n, a, t) {
  return Se(n, a * 7, t);
}
function Ee(n, a, t) {
  return Ce(n, a * 12, t);
}
function Fn(n, a) {
  let t, e = a == null ? void 0 : a.in;
  return n.forEach((r) => {
    !e && typeof r == "object" && (e = Z.bind(null, r));
    const o = O(r, e);
    (!t || t < o || isNaN(+o)) && (t = o);
  }), Z(e, t || NaN);
}
function An(n, a) {
  let t, e = a == null ? void 0 : a.in;
  return n.forEach((r) => {
    !e && typeof r == "object" && (e = Z.bind(null, r));
    const o = O(r, e);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), Z(e, t || NaN);
}
function Go(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  );
  return +ut(e) == +ut(r);
}
function Ie(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function kt(n) {
  return !(!Ie(n) && typeof n != "number" || isNaN(+O(n)));
}
function cr(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  ), o = e.getFullYear() - r.getFullYear(), i = e.getMonth() - r.getMonth();
  return o * 12 + i;
}
function Xe(n, a) {
  const t = O(n, a == null ? void 0 : a.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function lr(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  ), o = e.getFullYear() - r.getFullYear(), i = Xe(e) - Xe(r);
  return o * 4 + i;
}
function ur(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  );
  return e.getFullYear() - r.getFullYear();
}
function zo(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  ), o = Wn(e, r), i = Math.abs(
    _t(e, r)
  );
  e.setDate(e.getDate() - o * i);
  const s = +(Wn(e, r) === -o), c = o * (i - s);
  return c === 0 ? 0 : c;
}
function Wn(n, a) {
  const t = n.getFullYear() - a.getFullYear() || n.getMonth() - a.getMonth() || n.getDate() - a.getDate() || n.getHours() - a.getHours() || n.getMinutes() - a.getMinutes() || n.getSeconds() - a.getSeconds() || n.getMilliseconds() - a.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Ra(n, a) {
  const t = O(n, a == null ? void 0 : a.in);
  return t.setHours(23, 59, 59, 999), t;
}
function Na(n, a) {
  const t = O(n, a == null ? void 0 : a.in), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Gr(n, a) {
  const t = O(n, a == null ? void 0 : a.in), e = t.getMonth(), r = e - e % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function Ya(n, a) {
  const t = O(n, a == null ? void 0 : a.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Ia(n, a) {
  const t = O(n, a == null ? void 0 : a.in), e = t.getFullYear();
  return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function br(n, a) {
  const t = O(n, a == null ? void 0 : a.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Zo(n, a) {
  var s, c;
  const t = ft(), e = t.weekStartsOn ?? ((c = (s = t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? 0, r = O(n, a == null ? void 0 : a.in), o = r.getDay(), i = (o < e ? -7 : 0) + 6 - (o - e);
  return r.setDate(r.getDate() + i), r.setHours(23, 59, 59, 999), r;
}
const Jo = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, ei = (n, a, t) => {
  let e;
  const r = Jo[n];
  return typeof r == "string" ? e = r : a === 1 ? e = r.one : e = r.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + e : e + " ago" : e;
};
function Lr(n) {
  return (a = {}) => {
    const t = a.width ? String(a.width) : n.defaultWidth;
    return n.formats[t] || n.formats[n.defaultWidth];
  };
}
const ti = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ri = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ni = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ai = {
  date: Lr({
    formats: ti,
    defaultWidth: "full"
  }),
  time: Lr({
    formats: ri,
    defaultWidth: "full"
  }),
  dateTime: Lr({
    formats: ni,
    defaultWidth: "full"
  })
}, oi = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ii = (n, a, t, e) => oi[n];
function Pt(n) {
  return (a, t) => {
    const e = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (e === "formatting" && n.formattingValues) {
      const i = n.defaultFormattingWidth || n.defaultWidth, s = t != null && t.width ? String(t.width) : i;
      r = n.formattingValues[s] || n.formattingValues[i];
    } else {
      const i = n.defaultWidth, s = t != null && t.width ? String(t.width) : n.defaultWidth;
      r = n.values[s] || n.values[i];
    }
    const o = n.argumentCallback ? n.argumentCallback(a) : a;
    return r[o];
  };
}
const si = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ci = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, li = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ui = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, di = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, fi = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, pi = (n, a) => {
  const t = Number(n), e = t % 100;
  if (e > 20 || e < 10)
    switch (e % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, hi = {
  ordinalNumber: pi,
  era: Pt({
    values: si,
    defaultWidth: "wide"
  }),
  quarter: Pt({
    values: ci,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: Pt({
    values: li,
    defaultWidth: "wide"
  }),
  day: Pt({
    values: ui,
    defaultWidth: "wide"
  }),
  dayPeriod: Pt({
    values: di,
    defaultWidth: "wide",
    formattingValues: fi,
    defaultFormattingWidth: "wide"
  })
};
function Ot(n) {
  return (a, t = {}) => {
    const e = t.width, r = e && n.matchPatterns[e] || n.matchPatterns[n.defaultMatchWidth], o = a.match(r);
    if (!o)
      return null;
    const i = o[0], s = e && n.parsePatterns[e] || n.parsePatterns[n.defaultParseWidth], c = Array.isArray(s) ? vi(s, (u) => u.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      mi(s, (u) => u.test(i))
    );
    let l;
    l = n.valueCallback ? n.valueCallback(c) : c, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const d = a.slice(i.length);
    return { value: l, rest: d };
  };
}
function mi(n, a) {
  for (const t in n)
    if (Object.prototype.hasOwnProperty.call(n, t) && a(n[t]))
      return t;
}
function vi(n, a) {
  for (let t = 0; t < n.length; t++)
    if (a(n[t]))
      return t;
}
function gi(n) {
  return (a, t = {}) => {
    const e = a.match(n.matchPattern);
    if (!e) return null;
    const r = e[0], o = a.match(n.parsePattern);
    if (!o) return null;
    let i = n.valueCallback ? n.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const s = a.slice(r.length);
    return { value: i, rest: s };
  };
}
const wi = /^(\d+)(th|st|nd|rd)?/i, yi = /\d+/i, bi = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Di = {
  any: [/^b/i, /^(a|c)/i]
}, _i = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ki = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, xi = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Mi = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Si = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ei = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ci = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Pi = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Oi = {
  ordinalNumber: gi({
    matchPattern: wi,
    parsePattern: yi,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: Ot({
    matchPatterns: bi,
    defaultMatchWidth: "wide",
    parsePatterns: Di,
    defaultParseWidth: "any"
  }),
  quarter: Ot({
    matchPatterns: _i,
    defaultMatchWidth: "wide",
    parsePatterns: ki,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: Ot({
    matchPatterns: xi,
    defaultMatchWidth: "wide",
    parsePatterns: Mi,
    defaultParseWidth: "any"
  }),
  day: Ot({
    matchPatterns: Si,
    defaultMatchWidth: "wide",
    parsePatterns: Ei,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ot({
    matchPatterns: Ci,
    defaultMatchWidth: "any",
    parsePatterns: Pi,
    defaultParseWidth: "any"
  })
}, La = {
  code: "en-US",
  formatDistance: ei,
  formatLong: ai,
  formatRelative: ii,
  localize: hi,
  match: Oi,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ti(n, a) {
  const t = O(n, a == null ? void 0 : a.in);
  return _t(t, br(t)) + 1;
}
function nn(n, a) {
  const t = O(n, a == null ? void 0 : a.in), e = +Dt(t) - +$o(t);
  return Math.round(e / Pa) + 1;
}
function an(n, a) {
  var d, u, p, f;
  const t = O(n, a == null ? void 0 : a.in), e = t.getFullYear(), r = ft(), o = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((u = (d = a == null ? void 0 : a.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = Z((a == null ? void 0 : a.in) || n, 0);
  i.setFullYear(e + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = qe(i, a), c = Z((a == null ? void 0 : a.in) || n, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const l = qe(c, a);
  return +t >= +s ? e + 1 : +t >= +l ? e : e - 1;
}
function Ri(n, a) {
  var s, c, l, d;
  const t = ft(), e = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((c = (s = a == null ? void 0 : a.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((d = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, r = an(n, a), o = Z((a == null ? void 0 : a.in) || n, 0);
  return o.setFullYear(r, 0, e), o.setHours(0, 0, 0, 0), qe(o, a);
}
function Fa(n, a) {
  const t = O(n, a == null ? void 0 : a.in), e = +qe(t, a) - +Ri(t, a);
  return Math.round(e / Pa) + 1;
}
function z(n, a) {
  const t = n < 0 ? "-" : "", e = Math.abs(n).toString().padStart(a, "0");
  return t + e;
}
const $e = {
  // Year
  y(n, a) {
    const t = n.getFullYear(), e = t > 0 ? t : 1 - t;
    return z(a === "yy" ? e % 100 : e, a.length);
  },
  // Month
  M(n, a) {
    const t = n.getMonth();
    return a === "M" ? String(t + 1) : z(t + 1, 2);
  },
  // Day of the month
  d(n, a) {
    return z(n.getDate(), a.length);
  },
  // AM or PM
  a(n, a) {
    const t = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, a) {
    return z(n.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(n, a) {
    return z(n.getHours(), a.length);
  },
  // Minute
  m(n, a) {
    return z(n.getMinutes(), a.length);
  },
  // Second
  s(n, a) {
    return z(n.getSeconds(), a.length);
  },
  // Fraction of second
  S(n, a) {
    const t = a.length, e = n.getMilliseconds(), r = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return z(r, a.length);
  }
}, vt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Hn = {
  // Era
  G: function(n, a, t) {
    const e = n.getFullYear() > 0 ? 1 : 0;
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(e, { width: "abbreviated" });
      case "GGGGG":
        return t.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(e, { width: "wide" });
    }
  },
  // Year
  y: function(n, a, t) {
    if (a === "yo") {
      const e = n.getFullYear(), r = e > 0 ? e : 1 - e;
      return t.ordinalNumber(r, { unit: "year" });
    }
    return $e.y(n, a);
  },
  // Local week-numbering year
  Y: function(n, a, t, e) {
    const r = an(n, e), o = r > 0 ? r : 1 - r;
    if (a === "YY") {
      const i = o % 100;
      return z(i, 2);
    }
    return a === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : z(o, a.length);
  },
  // ISO week-numbering year
  R: function(n, a) {
    const t = Ta(n);
    return z(t, a.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, a) {
    const t = n.getFullYear();
    return z(t, a.length);
  },
  // Quarter
  Q: function(n, a, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      case "Q":
        return String(e);
      case "QQ":
        return z(e, 2);
      case "Qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return t.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, a, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      case "q":
        return String(e);
      case "qq":
        return z(e, 2);
      case "qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return t.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, a, t) {
    const e = n.getMonth();
    switch (a) {
      case "M":
      case "MM":
        return $e.M(n, a);
      case "Mo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "MMM":
        return t.month(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(e, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, a, t) {
    const e = n.getMonth();
    switch (a) {
      case "L":
        return String(e + 1);
      case "LL":
        return z(e + 1, 2);
      case "Lo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "LLL":
        return t.month(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(e, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, a, t, e) {
    const r = Fa(n, e);
    return a === "wo" ? t.ordinalNumber(r, { unit: "week" }) : z(r, a.length);
  },
  // ISO week of year
  I: function(n, a, t) {
    const e = nn(n);
    return a === "Io" ? t.ordinalNumber(e, { unit: "week" }) : z(e, a.length);
  },
  // Day of the month
  d: function(n, a, t) {
    return a === "do" ? t.ordinalNumber(n.getDate(), { unit: "date" }) : $e.d(n, a);
  },
  // Day of year
  D: function(n, a, t) {
    const e = Ti(n);
    return a === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : z(e, a.length);
  },
  // Day of week
  E: function(n, a, t) {
    const e = n.getDay();
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, a, t, e) {
    const r = n.getDay(), o = (r - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "e":
        return String(o);
      case "ee":
        return z(o, 2);
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, a, t, e) {
    const r = n.getDay(), o = (r - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "c":
        return String(o);
      case "cc":
        return z(o, a.length);
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, a, t) {
    const e = n.getDay(), r = e === 0 ? 7 : e;
    switch (a) {
      case "i":
        return String(r);
      case "ii":
        return z(r, a.length);
      case "io":
        return t.ordinalNumber(r, { unit: "day" });
      case "iii":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, a, t) {
    const r = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, a, t) {
    const e = n.getHours();
    let r;
    switch (e === 12 ? r = vt.noon : e === 0 ? r = vt.midnight : r = e / 12 >= 1 ? "pm" : "am", a) {
      case "b":
      case "bb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, a, t) {
    const e = n.getHours();
    let r;
    switch (e >= 17 ? r = vt.evening : e >= 12 ? r = vt.afternoon : e >= 4 ? r = vt.morning : r = vt.night, a) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, a, t) {
    if (a === "ho") {
      let e = n.getHours() % 12;
      return e === 0 && (e = 12), t.ordinalNumber(e, { unit: "hour" });
    }
    return $e.h(n, a);
  },
  // Hour [0-23]
  H: function(n, a, t) {
    return a === "Ho" ? t.ordinalNumber(n.getHours(), { unit: "hour" }) : $e.H(n, a);
  },
  // Hour [0-11]
  K: function(n, a, t) {
    const e = n.getHours() % 12;
    return a === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : z(e, a.length);
  },
  // Hour [1-24]
  k: function(n, a, t) {
    let e = n.getHours();
    return e === 0 && (e = 24), a === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : z(e, a.length);
  },
  // Minute
  m: function(n, a, t) {
    return a === "mo" ? t.ordinalNumber(n.getMinutes(), { unit: "minute" }) : $e.m(n, a);
  },
  // Second
  s: function(n, a, t) {
    return a === "so" ? t.ordinalNumber(n.getSeconds(), { unit: "second" }) : $e.s(n, a);
  },
  // Fraction of second
  S: function(n, a) {
    return $e.S(n, a);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, a, t) {
    const e = n.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (a) {
      case "X":
        return Qn(e);
      case "XXXX":
      case "XX":
        return nt(e);
      case "XXXXX":
      case "XXX":
      default:
        return nt(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "x":
        return Qn(e);
      case "xxxx":
      case "xx":
        return nt(e);
      case "xxxxx":
      case "xxx":
      default:
        return nt(e, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Bn(e, ":");
      case "OOOO":
      default:
        return "GMT" + nt(e, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Bn(e, ":");
      case "zzzz":
      default:
        return "GMT" + nt(e, ":");
    }
  },
  // Seconds timestamp
  t: function(n, a, t) {
    const e = Math.trunc(+n / 1e3);
    return z(e, a.length);
  },
  // Milliseconds timestamp
  T: function(n, a, t) {
    return z(+n, a.length);
  }
};
function Bn(n, a = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), r = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(r) : t + String(r) + a + z(o, 2);
}
function Qn(n, a) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + z(Math.abs(n) / 60, 2) : nt(n, a);
}
function nt(n, a = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), r = z(Math.trunc(e / 60), 2), o = z(e % 60, 2);
  return t + r + a + o;
}
const jn = (n, a) => {
  switch (n) {
    case "P":
      return a.date({ width: "short" });
    case "PP":
      return a.date({ width: "medium" });
    case "PPP":
      return a.date({ width: "long" });
    case "PPPP":
    default:
      return a.date({ width: "full" });
  }
}, Aa = (n, a) => {
  switch (n) {
    case "p":
      return a.time({ width: "short" });
    case "pp":
      return a.time({ width: "medium" });
    case "ppp":
      return a.time({ width: "long" });
    case "pppp":
    default:
      return a.time({ width: "full" });
  }
}, Ni = (n, a) => {
  const t = n.match(/(P+)(p+)?/) || [], e = t[1], r = t[2];
  if (!r)
    return jn(n, a);
  let o;
  switch (e) {
    case "P":
      o = a.dateTime({ width: "short" });
      break;
    case "PP":
      o = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = a.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = a.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", jn(e, a)).replace("{{time}}", Aa(r, a));
}, zr = {
  p: Aa,
  P: Ni
}, Yi = /^D+$/, Ii = /^Y+$/, Li = ["D", "DD", "YY", "YYYY"];
function Fi(n) {
  return Yi.test(n);
}
function Ai(n) {
  return Ii.test(n);
}
function Wi(n, a, t) {
  const e = Hi(n, a, t);
  if (console.warn(e), Li.includes(n)) throw new RangeError(e);
}
function Hi(n, a, t) {
  const e = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Bi = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ji = /^'([^]*?)'?$/, Vi = /''/g, qi = /[a-zA-Z]/;
function Vn(n, a, t) {
  var d, u, p, f, m, v, g, b;
  const e = ft(), r = (t == null ? void 0 : t.locale) ?? e.locale ?? La, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((f = (p = e.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((v = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? e.weekStartsOn ?? ((b = (g = e.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = O(n, t == null ? void 0 : t.in);
  if (!kt(s))
    throw new RangeError("Invalid time value");
  let c = a.match(Qi).map((D) => {
    const y = D[0];
    if (y === "p" || y === "P") {
      const M = zr[y];
      return M(D, r.formatLong);
    }
    return D;
  }).join("").match(Bi).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const y = D[0];
    if (y === "'")
      return { isToken: !1, value: Ki(D) };
    if (Hn[y])
      return { isToken: !0, value: D };
    if (y.match(qi))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: D };
  });
  r.localize.preprocessor && (c = r.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: r
  };
  return c.map((D) => {
    if (!D.isToken) return D.value;
    const y = D.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Ai(y) || !(t != null && t.useAdditionalDayOfYearTokens) && Fi(y)) && Wi(y, a, String(n));
    const M = Hn[y[0]];
    return M(s, y, r.localize, l);
  }).join("");
}
function Ki(n) {
  const a = n.match(ji);
  return a ? a[1].replace(Vi, "'") : n;
}
function qn(n, a) {
  return O(n, a == null ? void 0 : a.in).getDate();
}
function Ui(n, a) {
  return O(n, a == null ? void 0 : a.in).getDay();
}
function $i(n, a) {
  const t = O(n, a == null ? void 0 : a.in), e = t.getFullYear(), r = t.getMonth(), o = Z(t, 0);
  return o.setFullYear(e, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Xi() {
  return Object.assign({}, ft());
}
function pe(n, a) {
  return O(n, a == null ? void 0 : a.in).getHours();
}
function Gi(n, a) {
  const t = O(n, a == null ? void 0 : a.in).getDay();
  return t === 0 ? 7 : t;
}
function he(n, a) {
  return O(n, a == null ? void 0 : a.in).getMinutes();
}
function be(n, a) {
  return O(n, a == null ? void 0 : a.in).getMonth();
}
function Ge(n) {
  return O(n).getSeconds();
}
function Zr(n) {
  return +O(n);
}
function j(n, a) {
  return O(n, a == null ? void 0 : a.in).getFullYear();
}
function je(n, a) {
  return +O(n) > +O(a);
}
function Ne(n, a) {
  return +O(n) < +O(a);
}
function zi(n, a) {
  return +O(n) == +O(a);
}
function Zi(n, a) {
  const t = Ji(a) ? new a(0) : Z(a, 0);
  return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), t;
}
function Ji(n) {
  var a;
  return typeof n == "function" && ((a = n.prototype) == null ? void 0 : a.constructor) === n;
}
const es = 10;
class Wa {
  constructor() {
    E(this, "subPriority", 0);
  }
  validate(a, t) {
    return !0;
  }
}
class ts extends Wa {
  constructor(a, t, e, r, o) {
    super(), this.value = a, this.validateValue = t, this.setValue = e, this.priority = r, o && (this.subPriority = o);
  }
  validate(a, t) {
    return this.validateValue(a, this.value, t);
  }
  set(a, t, e) {
    return this.setValue(a, t, this.value, e);
  }
}
class rs extends Wa {
  constructor(t, e) {
    super();
    E(this, "priority", es);
    E(this, "subPriority", -1);
    this.context = t || ((r) => Z(e, r));
  }
  set(t, e) {
    return e.timestampIsSet ? t : Z(t, Zi(t, this.context));
  }
}
class G {
  run(a, t, e, r) {
    const o = this.parse(a, t, e, r);
    return o ? {
      setter: new ts(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(a, t, e) {
    return !0;
  }
}
class ns extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 140);
    E(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, e, r) {
    return e.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const ie = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Te = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function se(n, a) {
  return n && {
    value: a(n.value),
    rest: n.rest
  };
}
function ne(n, a) {
  const t = a.match(n);
  return t ? {
    value: parseInt(t[0], 10),
    rest: a.slice(t[0].length)
  } : null;
}
function Re(n, a) {
  const t = a.match(n);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: a.slice(1)
    };
  const e = t[1] === "+" ? 1 : -1, r = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, i = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: e * (r * yr + o * wr + i * qo),
    rest: a.slice(t[0].length)
  };
}
function Ha(n) {
  return ne(ie.anyDigitsSigned, n);
}
function ae(n, a) {
  switch (n) {
    case 1:
      return ne(ie.singleDigit, a);
    case 2:
      return ne(ie.twoDigits, a);
    case 3:
      return ne(ie.threeDigits, a);
    case 4:
      return ne(ie.fourDigits, a);
    default:
      return ne(new RegExp("^\\d{1," + n + "}"), a);
  }
}
function dr(n, a) {
  switch (n) {
    case 1:
      return ne(ie.singleDigitSigned, a);
    case 2:
      return ne(ie.twoDigitsSigned, a);
    case 3:
      return ne(ie.threeDigitsSigned, a);
    case 4:
      return ne(ie.fourDigitsSigned, a);
    default:
      return ne(new RegExp("^-?\\d{1," + n + "}"), a);
  }
}
function on(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Ba(n, a) {
  const t = a > 0, e = t ? a : 1 - a;
  let r;
  if (e <= 50)
    r = n || 100;
  else {
    const o = e + 50, i = Math.trunc(o / 100) * 100, s = n >= o % 100;
    r = n + i - (s ? 100 : 0);
  }
  return t ? r : 1 - r;
}
function Qa(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class as extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, r) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return se(ae(4, t), o);
      case "yo":
        return se(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return se(ae(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, r) {
    const o = t.getFullYear();
    if (r.isTwoDigitYear) {
      const s = Ba(
        r.year,
        o
      );
      return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const i = !("era" in e) || e.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class os extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (i) => ({
      year: i,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return se(ae(4, t), o);
      case "Yo":
        return se(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return se(ae(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, r, o) {
    const i = an(t, o);
    if (r.isTwoDigitYear) {
      const c = Ba(
        r.year,
        i
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), qe(t, o);
    }
    const s = !("era" in e) || e.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), qe(t, o);
  }
}
class is extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e) {
    return dr(e === "R" ? 4 : e.length, t);
  }
  set(t, e, r) {
    const o = Z(t, 0);
    return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), Dt(o);
  }
}
class ss extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 130);
    E(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return dr(e === "u" ? 4 : e.length, t);
  }
  set(t, e, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class cs extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 120);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "Q":
      case "QQ":
        return ae(e.length, t);
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ls extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 120);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "q":
      case "qq":
        return ae(e.length, t);
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class us extends G {
  constructor() {
    super(...arguments);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    E(this, "priority", 110);
  }
  parse(t, e, r) {
    const o = (i) => i - 1;
    switch (e) {
      case "M":
        return se(
          ne(ie.month, t),
          o
        );
      case "MM":
        return se(ae(2, t), o);
      case "Mo":
        return se(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ds extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 110);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (i) => i - 1;
    switch (e) {
      case "L":
        return se(
          ne(ie.month, t),
          o
        );
      case "LL":
        return se(ae(2, t), o);
      case "Lo":
        return se(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function fs(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in), r = Fa(e, t) - a;
  return e.setDate(e.getDate() - r * 7), O(e, t == null ? void 0 : t.in);
}
class ps extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 100);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "w":
        return ne(ie.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, r, o) {
    return qe(fs(t, r, o), o);
  }
}
function hs(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in), r = nn(e, t) - a;
  return e.setDate(e.getDate() - r * 7), e;
}
class ms extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 100);
    E(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "I":
        return ne(ie.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, r) {
    return Dt(hs(t, r));
  }
}
const vs = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gs = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class ws extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "subPriority", 1);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "d":
        return ne(ie.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    const r = t.getFullYear(), o = Qa(r), i = t.getMonth();
    return o ? e >= 1 && e <= gs[i] : e >= 1 && e <= vs[i];
  }
  set(t, e, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
}
class ys extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "subpriority", 1);
    E(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "D":
      case "DD":
        return ne(ie.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    const r = t.getFullYear();
    return Qa(r) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
}
function sn(n, a, t) {
  var u, p, f, m;
  const e = ft(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((p = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : p.weekStartsOn) ?? e.weekStartsOn ?? ((m = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = O(n, t == null ? void 0 : t.in), i = o.getDay(), c = (a % 7 + 7) % 7, l = 7 - r, d = a < 0 || a > 6 ? a - (i + l) % 7 : (c + l) % 7 - (i + l) % 7;
  return Se(o, d, t);
}
class bs extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = sn(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Ds extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "e":
      case "ee":
        return se(ae(e.length, t), i);
      case "eo":
        return se(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = sn(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
class _s extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, e, r, o) {
    const i = (s) => {
      const c = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "c":
      case "cc":
        return se(ae(e.length, t), i);
      case "co":
        return se(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          i
        );
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = sn(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
function ks(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in), r = Gi(e, t), o = a - r;
  return Se(e, o, t);
}
class xs extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 90);
    E(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (i) => i === 0 ? 7 : i;
    switch (e) {
      case "i":
      case "ii":
        return ae(e.length, t);
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      case "iii":
        return se(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiii":
        return se(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiiii":
        return se(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiii":
      default:
        return se(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 7;
  }
  set(t, e, r) {
    return t = ks(t, r), t.setHours(0, 0, 0, 0), t;
  }
}
class Ms extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 80);
    E(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(on(r), 0, 0, 0), t;
  }
}
class Ss extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 80);
    E(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(on(r), 0, 0, 0), t;
  }
}
class Es extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 80);
    E(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(on(r), 0, 0, 0), t;
  }
}
class Cs extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "h":
        return ne(ie.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 12;
  }
  set(t, e, r) {
    const o = t.getHours() >= 12;
    return o && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !o && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Ps extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "H":
        return ne(ie.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
}
class Os extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "K":
        return ne(ie.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Ts extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 70);
    E(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "k":
        return ne(ie.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 24;
  }
  set(t, e, r) {
    const o = r <= 24 ? r % 24 : r;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class Rs extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 60);
    E(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "m":
        return ne(ie.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, r) {
    return t.setMinutes(r, 0, 0), t;
  }
}
class Ns extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 50);
    E(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "s":
        return ne(ie.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return ae(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, r) {
    return t.setSeconds(r, 0), t;
  }
}
class Ys extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 30);
    E(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const r = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return se(ae(e.length, t), r);
  }
  set(t, e, r) {
    return t.setMilliseconds(r), t;
  }
}
class Is extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 10);
    E(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return Re(
          Te.basicOptionalMinutes,
          t
        );
      case "XX":
        return Re(Te.basic, t);
      case "XXXX":
        return Re(
          Te.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Re(
          Te.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Re(Te.extended, t);
    }
  }
  set(t, e, r) {
    return e.timestampIsSet ? t : Z(
      t,
      t.getTime() - ir(t) - r
    );
  }
}
class Ls extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 10);
    E(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return Re(
          Te.basicOptionalMinutes,
          t
        );
      case "xx":
        return Re(Te.basic, t);
      case "xxxx":
        return Re(
          Te.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Re(
          Te.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Re(Te.extended, t);
    }
  }
  set(t, e, r) {
    return e.timestampIsSet ? t : Z(
      t,
      t.getTime() - ir(t) - r
    );
  }
}
class Fs extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 40);
    E(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ha(t);
  }
  set(t, e, r) {
    return [Z(t, r * 1e3), { timestampIsSet: !0 }];
  }
}
class As extends G {
  constructor() {
    super(...arguments);
    E(this, "priority", 20);
    E(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ha(t);
  }
  set(t, e, r) {
    return [Z(t, r), { timestampIsSet: !0 }];
  }
}
const Ws = {
  G: new ns(),
  y: new as(),
  Y: new os(),
  R: new is(),
  u: new ss(),
  Q: new cs(),
  q: new ls(),
  M: new us(),
  L: new ds(),
  w: new ps(),
  I: new ms(),
  d: new ws(),
  D: new ys(),
  E: new bs(),
  e: new Ds(),
  c: new _s(),
  i: new xs(),
  a: new Ms(),
  b: new Ss(),
  B: new Es(),
  h: new Cs(),
  H: new Ps(),
  K: new Os(),
  k: new Ts(),
  m: new Rs(),
  s: new Ns(),
  S: new Ys(),
  X: new Is(),
  x: new Ls(),
  t: new Fs(),
  T: new As()
}, Hs = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Bs = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Qs = /^'([^]*?)'?$/, js = /''/g, Vs = /\S/, qs = /[a-zA-Z]/;
function Ks(n, a, t, e) {
  var g, b, D, y, M, S, I, N;
  const r = () => Z((e == null ? void 0 : e.in) || t, NaN), o = Xi(), i = (e == null ? void 0 : e.locale) ?? o.locale ?? La, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((b = (g = e == null ? void 0 : e.locale) == null ? void 0 : g.options) == null ? void 0 : b.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((y = (D = o.locale) == null ? void 0 : D.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, c = (e == null ? void 0 : e.weekStartsOn) ?? ((S = (M = e == null ? void 0 : e.locale) == null ? void 0 : M.options) == null ? void 0 : S.weekStartsOn) ?? o.weekStartsOn ?? ((N = (I = o.locale) == null ? void 0 : I.options) == null ? void 0 : N.weekStartsOn) ?? 0;
  if (!a)
    return n ? r() : O(t, e == null ? void 0 : e.in);
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: c,
    locale: i
  }, d = [new rs(e == null ? void 0 : e.in, t)], u = a.match(Bs).map((k) => {
    const P = k[0];
    if (P in zr) {
      const R = zr[P];
      return R(k, i.formatLong);
    }
    return k;
  }).join("").match(Hs), p = [];
  for (let k of u) {
    const P = k[0], R = Ws[P];
    if (R) {
      const { incompatibleTokens: A } = R;
      if (Array.isArray(A)) {
        const L = p.find(
          (Y) => A.includes(Y.token) || Y.token === P
        );
        if (L)
          throw new RangeError(
            `The format string mustn't contain \`${L.fullToken}\` and \`${k}\` at the same time`
          );
      } else if (R.incompatibleTokens === "*" && p.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${k}\` and any other token at the same time`
        );
      p.push({ token: P, fullToken: k });
      const T = R.run(
        n,
        k,
        i.match,
        l
      );
      if (!T)
        return r();
      d.push(T.setter), n = T.rest;
    } else {
      if (P.match(qs))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (k === "''" ? k = "'" : P === "'" && (k = Us(k)), n.indexOf(k) === 0)
        n = n.slice(k.length);
      else
        return r();
    }
  }
  if (n.length > 0 && Vs.test(n))
    return r();
  const f = d.map((k) => k.priority).sort((k, P) => P - k).filter((k, P, R) => R.indexOf(k) === P).map(
    (k) => d.filter((P) => P.priority === k).sort((P, R) => R.subPriority - P.subPriority)
  ).map((k) => k[0]);
  let m = O(t, e == null ? void 0 : e.in);
  if (isNaN(+m)) return r();
  const v = {};
  for (const k of f) {
    if (!k.validate(m, l))
      return r();
    const P = k.set(m, v, l);
    Array.isArray(P) ? (m = P[0], Object.assign(v, P[1])) : m = P;
  }
  return m;
}
function Us(n) {
  return n.match(Qs)[1].replace(js, "'");
}
function $s(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  );
  return e.getFullYear() === r.getFullYear() && e.getMonth() === r.getMonth();
}
function Xs(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  );
  return +Gr(e) == +Gr(r);
}
function Gs(n, a, t) {
  const [e, r] = Ke(
    t == null ? void 0 : t.in,
    n,
    a
  );
  return e.getFullYear() === r.getFullYear();
}
function Lt(n, a, t) {
  const e = +O(n, t == null ? void 0 : t.in), [r, o] = [
    +O(a.start, t == null ? void 0 : t.in),
    +O(a.end, t == null ? void 0 : t.in)
  ].sort((i, s) => i - s);
  return e >= r && e <= o;
}
function zs(n, a, t) {
  return Se(n, -1, t);
}
function Zs(n, a) {
  const t = () => Z(a == null ? void 0 : a.in, NaN), r = rc(n);
  let o;
  if (r.date) {
    const l = nc(r.date, 2);
    o = ac(l.restDateString, l.year);
  }
  if (!o || isNaN(+o)) return t();
  const i = +o;
  let s = 0, c;
  if (r.time && (s = oc(r.time), isNaN(s)))
    return t();
  if (r.timezone) {
    if (c = ic(r.timezone), isNaN(c)) return t();
  } else {
    const l = new Date(i + s), d = O(0, a == null ? void 0 : a.in);
    return d.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), d.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), d;
  }
  return O(i + s + c, a == null ? void 0 : a.in);
}
const Ut = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Js = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ec = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, tc = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function rc(n) {
  const a = {}, t = n.split(Ut.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return a;
  if (/:/.test(t[0]) ? e = t[0] : (a.date = t[0], e = t[1], Ut.timeZoneDelimiter.test(a.date) && (a.date = n.split(Ut.timeZoneDelimiter)[0], e = n.substr(
    a.date.length,
    n.length
  ))), e) {
    const r = Ut.timezone.exec(e);
    r ? (a.time = e.replace(r[1], ""), a.timezone = r[1]) : a.time = e;
  }
  return a;
}
function nc(n, a) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + a) + "})|(\\d{2}|[+-]\\d{" + (2 + a) + "})$)"
  ), e = n.match(t);
  if (!e) return { year: NaN, restDateString: "" };
  const r = e[1] ? parseInt(e[1]) : null, o = e[2] ? parseInt(e[2]) : null;
  return {
    year: o === null ? r : o * 100,
    restDateString: n.slice((e[1] || e[2]).length)
  };
}
function ac(n, a) {
  if (a === null) return /* @__PURE__ */ new Date(NaN);
  const t = n.match(Js);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], r = Tt(t[1]), o = Tt(t[2]) - 1, i = Tt(t[3]), s = Tt(t[4]), c = Tt(t[5]) - 1;
  if (e)
    return dc(a, s, c) ? sc(a, s, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !lc(a, o, i) || !uc(a, r) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(a, o, Math.max(r, i)), l);
  }
}
function Tt(n) {
  return n ? parseInt(n) : 1;
}
function oc(n) {
  const a = n.match(ec);
  if (!a) return NaN;
  const t = Fr(a[1]), e = Fr(a[2]), r = Fr(a[3]);
  return fc(t, e, r) ? t * yr + e * wr + r * 1e3 : NaN;
}
function Fr(n) {
  return n && parseFloat(n.replace(",", ".")) || 0;
}
function ic(n) {
  if (n === "Z") return 0;
  const a = n.match(tc);
  if (!a) return 0;
  const t = a[1] === "+" ? -1 : 1, e = parseInt(a[2]), r = a[3] && parseInt(a[3]) || 0;
  return pc(e, r) ? t * (e * yr + r * wr) : NaN;
}
function sc(n, a, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(n, 0, 4);
  const r = e.getUTCDay() || 7, o = (a - 1) * 7 + t + 1 - r;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const cc = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ja(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
function lc(n, a, t) {
  return a >= 0 && a <= 11 && t >= 1 && t <= (cc[a] || (ja(n) ? 29 : 28));
}
function uc(n, a) {
  return a >= 1 && a <= (ja(n) ? 366 : 365);
}
function dc(n, a, t) {
  return a >= 1 && a <= 53 && t >= 0 && t <= 6;
}
function fc(n, a, t) {
  return n === 24 ? a === 0 && t === 0 : t >= 0 && t < 60 && a >= 0 && a < 60 && n >= 0 && n < 25;
}
function pc(n, a) {
  return a >= 0 && a <= 59;
}
function De(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in), r = e.getFullYear(), o = e.getDate(), i = Z(n, 0);
  i.setFullYear(r, a, 15), i.setHours(0, 0, 0, 0);
  const s = $i(i);
  return e.setMonth(a, Math.min(o, s)), e;
}
function tr(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in);
  return e.setHours(a), e;
}
function rr(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in);
  return e.setMinutes(a), e;
}
function wt(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in), r = Math.trunc(e.getMonth() / 3) + 1, o = a - r;
  return De(e, e.getMonth() + o * 3);
}
function nr(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in);
  return e.setSeconds(a), e;
}
function Pe(n, a, t) {
  const e = O(n, t == null ? void 0 : t.in);
  return isNaN(+e) ? Z(n, NaN) : (e.setFullYear(a), e);
}
function ct(n, a, t) {
  return Ce(n, -a, t);
}
function Va(n, a, t) {
  return rn(n, -1, t);
}
function Kn(n, a, t) {
  return sr(n, -1, t);
}
function Je(n, a, t) {
  return Ee(n, -a, t);
}
function Dr() {
  return typeof window < "u";
}
function Ct(n) {
  return qa(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function _e(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Fe(n) {
  var a;
  return (a = (qa(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function qa(n) {
  return Dr() ? n instanceof Node || n instanceof _e(n).Node : !1;
}
function me(n) {
  return Dr() ? n instanceof Element || n instanceof _e(n).Element : !1;
}
function Ue(n) {
  return Dr() ? n instanceof HTMLElement || n instanceof _e(n).HTMLElement : !1;
}
function Un(n) {
  return !Dr() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof _e(n).ShadowRoot;
}
function Wt(n) {
  const {
    overflow: a,
    overflowX: t,
    overflowY: e,
    display: r
  } = xe(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + e + t) && r !== "inline" && r !== "contents";
}
function hc(n) {
  return /^(table|td|th)$/.test(Ct(n));
}
function _r(n) {
  try {
    if (n.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const mc = /transform|translate|scale|rotate|perspective|filter/, vc = /paint|layout|strict|content/, tt = (n) => !!n && n !== "none";
let Ar;
function cn(n) {
  const a = me(n) ? xe(n) : n;
  return tt(a.transform) || tt(a.translate) || tt(a.scale) || tt(a.rotate) || tt(a.perspective) || !ln() && (tt(a.backdropFilter) || tt(a.filter)) || mc.test(a.willChange || "") || vc.test(a.contain || "");
}
function gc(n) {
  let a = et(n);
  for (; Ue(a) && !xt(a); ) {
    if (cn(a))
      return a;
    if (_r(a))
      return null;
    a = et(a);
  }
  return null;
}
function ln() {
  return Ar == null && (Ar = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ar;
}
function xt(n) {
  return /^(html|body|#document)$/.test(Ct(n));
}
function xe(n) {
  return _e(n).getComputedStyle(n);
}
function kr(n) {
  return me(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function et(n) {
  if (Ct(n) === "html")
    return n;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    Un(n) && n.host || // Fallback.
    Fe(n)
  );
  return Un(a) ? a.host : a;
}
function Ka(n) {
  const a = et(n);
  return xt(a) ? n.ownerDocument ? n.ownerDocument.body : n.body : Ue(a) && Wt(a) ? a : Ka(a);
}
function Ft(n, a, t) {
  var e;
  a === void 0 && (a = []), t === void 0 && (t = !0);
  const r = Ka(n), o = r === ((e = n.ownerDocument) == null ? void 0 : e.body), i = _e(r);
  if (o) {
    const s = Jr(i);
    return a.concat(i, i.visualViewport || [], Wt(r) ? r : [], s && t ? Ft(s) : []);
  } else
    return a.concat(r, Ft(r, [], t));
}
function Jr(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
const Mt = Math.min, lt = Math.max, fr = Math.round, $t = Math.floor, Le = (n) => ({
  x: n,
  y: n
}), wc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yc(n, a, t) {
  return lt(n, Mt(a, t));
}
function xr(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function St(n) {
  return n.split("-")[0];
}
function Ht(n) {
  return n.split("-")[1];
}
function bc(n) {
  return n === "x" ? "y" : "x";
}
function un(n) {
  return n === "y" ? "height" : "width";
}
function ot(n) {
  const a = n[0];
  return a === "t" || a === "b" ? "y" : "x";
}
function dn(n) {
  return bc(ot(n));
}
function Dc(n, a, t) {
  t === void 0 && (t = !1);
  const e = Ht(n), r = dn(n), o = un(r);
  let i = r === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return a.reference[o] > a.floating[o] && (i = pr(i)), [i, pr(i)];
}
function _c(n) {
  const a = pr(n);
  return [en(n), a, en(a)];
}
function en(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const $n = ["left", "right"], Xn = ["right", "left"], kc = ["top", "bottom"], xc = ["bottom", "top"];
function Mc(n, a, t) {
  switch (n) {
    case "top":
    case "bottom":
      return t ? a ? Xn : $n : a ? $n : Xn;
    case "left":
    case "right":
      return a ? kc : xc;
    default:
      return [];
  }
}
function Sc(n, a, t, e) {
  const r = Ht(n);
  let o = Mc(St(n), t === "start", e);
  return r && (o = o.map((i) => i + "-" + r), a && (o = o.concat(o.map(en)))), o;
}
function pr(n) {
  const a = St(n);
  return wc[a] + n.slice(a.length);
}
function Ec(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Ua(n) {
  return typeof n != "number" ? Ec(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function hr(n) {
  const {
    x: a,
    y: t,
    width: e,
    height: r
  } = n;
  return {
    width: e,
    height: r,
    top: t,
    left: a,
    right: a + e,
    bottom: t + r,
    x: a,
    y: t
  };
}
var Cc = typeof document < "u", Pc = function() {
}, mr = Cc ? Ma : Pc;
const Oc = {
  ...H
}, Tc = Oc.useInsertionEffect, Rc = Tc || ((n) => n());
function Nc(n) {
  const a = H.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Rc(() => {
    a.current = n;
  }), H.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return a.current == null ? void 0 : a.current(...e);
  }, []);
}
function Gn(n, a, t) {
  let {
    reference: e,
    floating: r
  } = n;
  const o = ot(a), i = dn(a), s = un(i), c = St(a), l = o === "y", d = e.x + e.width / 2 - r.width / 2, u = e.y + e.height / 2 - r.height / 2, p = e[s] / 2 - r[s] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: d,
        y: e.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: e.y + e.height
      };
      break;
    case "right":
      f = {
        x: e.x + e.width,
        y: u
      };
      break;
    case "left":
      f = {
        x: e.x - r.width,
        y: u
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  switch (Ht(a)) {
    case "start":
      f[i] -= p * (t && l ? -1 : 1);
      break;
    case "end":
      f[i] += p * (t && l ? -1 : 1);
      break;
  }
  return f;
}
async function Yc(n, a) {
  var t;
  a === void 0 && (a = {});
  const {
    x: e,
    y: r,
    platform: o,
    rects: i,
    elements: s,
    strategy: c
  } = n, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = xr(a, n), m = Ua(f), g = s[p ? u === "floating" ? "reference" : "floating" : u], b = hr(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), D = u === "floating" ? {
    x: e,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), M = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = hr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: D,
    offsetParent: y,
    strategy: c
  }) : D);
  return {
    top: (b.top - S.top + m.top) / M.y,
    bottom: (S.bottom - b.bottom + m.bottom) / M.y,
    left: (b.left - S.left + m.left) / M.x,
    right: (S.right - b.right + m.right) / M.x
  };
}
const Ic = 50, Lc = async (n, a, t) => {
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: i
  } = t, s = i.detectOverflow ? i : {
    ...i,
    detectOverflow: Yc
  }, c = await (i.isRTL == null ? void 0 : i.isRTL(a));
  let l = await i.getElementRects({
    reference: n,
    floating: a,
    strategy: r
  }), {
    x: d,
    y: u
  } = Gn(l, e, c), p = e, f = 0;
  const m = {};
  for (let v = 0; v < o.length; v++) {
    const g = o[v];
    if (!g)
      continue;
    const {
      name: b,
      fn: D
    } = g, {
      x: y,
      y: M,
      data: S,
      reset: I
    } = await D({
      x: d,
      y: u,
      initialPlacement: e,
      placement: p,
      strategy: r,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: n,
        floating: a
      }
    });
    d = y ?? d, u = M ?? u, m[b] = {
      ...m[b],
      ...S
    }, I && f < Ic && (f++, typeof I == "object" && (I.placement && (p = I.placement), I.rects && (l = I.rects === !0 ? await i.getElementRects({
      reference: n,
      floating: a,
      strategy: r
    }) : I.rects), {
      x: d,
      y: u
    } = Gn(l, p, c)), v = -1);
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: r,
    middlewareData: m
  };
}, Fc = (n) => ({
  name: "arrow",
  options: n,
  async fn(a) {
    const {
      x: t,
      y: e,
      placement: r,
      rects: o,
      platform: i,
      elements: s,
      middlewareData: c
    } = a, {
      element: l,
      padding: d = 0
    } = xr(n, a) || {};
    if (l == null)
      return {};
    const u = Ua(d), p = {
      x: t,
      y: e
    }, f = dn(r), m = un(f), v = await i.getDimensions(l), g = f === "y", b = g ? "top" : "left", D = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", M = o.reference[m] + o.reference[f] - p[f] - o.floating[m], S = p[f] - o.reference[f], I = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let N = I ? I[y] : 0;
    (!N || !await (i.isElement == null ? void 0 : i.isElement(I))) && (N = s.floating[y] || o.floating[m]);
    const k = M / 2 - S / 2, P = N / 2 - v[m] / 2 - 1, R = Mt(u[b], P), A = Mt(u[D], P), T = R, L = N - v[m] - A, Y = N / 2 - v[m] / 2 + k, V = yc(T, Y, L), B = !c.arrow && Ht(r) != null && Y !== V && o.reference[m] / 2 - (Y < T ? R : A) - v[m] / 2 < 0, W = B ? Y < T ? Y - T : Y - L : 0;
    return {
      [f]: p[f] + W,
      data: {
        [f]: V,
        centerOffset: Y - V - W,
        ...B && {
          alignmentOffset: W
        }
      },
      reset: B
    };
  }
}), Ac = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(a) {
      var t, e;
      const {
        placement: r,
        middlewareData: o,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = a, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...g
      } = xr(n, a);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const b = St(r), D = ot(s), y = St(s) === s, M = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = p || (y || !v ? [pr(s)] : _c(s)), I = m !== "none";
      !p && I && S.push(...Sc(s, v, m, M));
      const N = [s, ...S], k = await c.detectOverflow(a, g), P = [];
      let R = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (d && P.push(k[b]), u) {
        const Y = Dc(r, i, M);
        P.push(k[Y[0]], k[Y[1]]);
      }
      if (R = [...R, {
        placement: r,
        overflows: P
      }], !P.every((Y) => Y <= 0)) {
        var A, T;
        const Y = (((A = o.flip) == null ? void 0 : A.index) || 0) + 1, V = N[Y];
        if (V && (!(u === "alignment" ? D !== ot(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((X) => ot(X.placement) === D ? X.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Y,
              overflows: R
            },
            reset: {
              placement: V
            }
          };
        let B = (T = R.filter((W) => W.overflows[0] <= 0).sort((W, X) => W.overflows[1] - X.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!B)
          switch (f) {
            case "bestFit": {
              var L;
              const W = (L = R.filter((X) => {
                if (I) {
                  const le = ot(X.placement);
                  return le === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  le === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((le) => le > 0).reduce((le, Me) => le + Me, 0)]).sort((X, le) => X[1] - le[1])[0]) == null ? void 0 : L[0];
              W && (B = W);
              break;
            }
            case "initialPlacement":
              B = s;
              break;
          }
        if (r !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
}, Wc = /* @__PURE__ */ new Set(["left", "top"]);
async function Hc(n, a) {
  const {
    placement: t,
    platform: e,
    elements: r
  } = n, o = await (e.isRTL == null ? void 0 : e.isRTL(r.floating)), i = St(t), s = Ht(t), c = ot(t) === "y", l = Wc.has(i) ? -1 : 1, d = o && c ? -1 : 1, u = xr(a, n);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return s && typeof m == "number" && (f = s === "end" ? m * -1 : m), c ? {
    x: f * d,
    y: p * l
  } : {
    x: p * l,
    y: f * d
  };
}
const Bc = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(a) {
      var t, e;
      const {
        x: r,
        y: o,
        placement: i,
        middlewareData: s
      } = a, c = await Hc(a, n);
      return i === ((t = s.offset) == null ? void 0 : t.placement) && (e = s.arrow) != null && e.alignmentOffset ? {} : {
        x: r + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
};
function $a(n) {
  const a = xe(n);
  let t = parseFloat(a.width) || 0, e = parseFloat(a.height) || 0;
  const r = Ue(n), o = r ? n.offsetWidth : t, i = r ? n.offsetHeight : e, s = fr(t) !== o || fr(e) !== i;
  return s && (t = o, e = i), {
    width: t,
    height: e,
    $: s
  };
}
function fn(n) {
  return me(n) ? n : n.contextElement;
}
function yt(n) {
  const a = fn(n);
  if (!Ue(a))
    return Le(1);
  const t = a.getBoundingClientRect(), {
    width: e,
    height: r,
    $: o
  } = $a(a);
  let i = (o ? fr(t.width) : t.width) / e, s = (o ? fr(t.height) : t.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Qc = /* @__PURE__ */ Le(0);
function Xa(n) {
  const a = _e(n);
  return !ln() || !a.visualViewport ? Qc : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function jc(n, a, t) {
  return a === void 0 && (a = !1), !t || a && t !== _e(n) ? !1 : a;
}
function dt(n, a, t, e) {
  a === void 0 && (a = !1), t === void 0 && (t = !1);
  const r = n.getBoundingClientRect(), o = fn(n);
  let i = Le(1);
  a && (e ? me(e) && (i = yt(e)) : i = yt(n));
  const s = jc(o, t, e) ? Xa(o) : Le(0);
  let c = (r.left + s.x) / i.x, l = (r.top + s.y) / i.y, d = r.width / i.x, u = r.height / i.y;
  if (o) {
    const p = _e(o), f = e && me(e) ? _e(e) : e;
    let m = p, v = Jr(m);
    for (; v && e && f !== m; ) {
      const g = yt(v), b = v.getBoundingClientRect(), D = xe(v), y = b.left + (v.clientLeft + parseFloat(D.paddingLeft)) * g.x, M = b.top + (v.clientTop + parseFloat(D.paddingTop)) * g.y;
      c *= g.x, l *= g.y, d *= g.x, u *= g.y, c += y, l += M, m = _e(v), v = Jr(m);
    }
  }
  return hr({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function Mr(n, a) {
  const t = kr(n).scrollLeft;
  return a ? a.left + t : dt(Fe(n)).left + t;
}
function Ga(n, a) {
  const t = n.getBoundingClientRect(), e = t.left + a.scrollLeft - Mr(n, t), r = t.top + a.scrollTop;
  return {
    x: e,
    y: r
  };
}
function Vc(n) {
  let {
    elements: a,
    rect: t,
    offsetParent: e,
    strategy: r
  } = n;
  const o = r === "fixed", i = Fe(e), s = a ? _r(a.floating) : !1;
  if (e === i || s && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Le(1);
  const d = Le(0), u = Ue(e);
  if ((u || !u && !o) && ((Ct(e) !== "body" || Wt(i)) && (c = kr(e)), u)) {
    const f = dt(e);
    l = yt(e), d.x = f.x + e.clientLeft, d.y = f.y + e.clientTop;
  }
  const p = i && !u && !o ? Ga(i, c) : Le(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + d.x + p.x,
    y: t.y * l.y - c.scrollTop * l.y + d.y + p.y
  };
}
function qc(n) {
  return Array.from(n.getClientRects());
}
function Kc(n) {
  const a = Fe(n), t = kr(n), e = n.ownerDocument.body, r = lt(a.scrollWidth, a.clientWidth, e.scrollWidth, e.clientWidth), o = lt(a.scrollHeight, a.clientHeight, e.scrollHeight, e.clientHeight);
  let i = -t.scrollLeft + Mr(n);
  const s = -t.scrollTop;
  return xe(e).direction === "rtl" && (i += lt(a.clientWidth, e.clientWidth) - r), {
    width: r,
    height: o,
    x: i,
    y: s
  };
}
const zn = 25;
function Uc(n, a) {
  const t = _e(n), e = Fe(n), r = t.visualViewport;
  let o = e.clientWidth, i = e.clientHeight, s = 0, c = 0;
  if (r) {
    o = r.width, i = r.height;
    const d = ln();
    (!d || d && a === "fixed") && (s = r.offsetLeft, c = r.offsetTop);
  }
  const l = Mr(e);
  if (l <= 0) {
    const d = e.ownerDocument, u = d.body, p = getComputedStyle(u), f = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, m = Math.abs(e.clientWidth - u.clientWidth - f);
    m <= zn && (o -= m);
  } else l <= zn && (o += l);
  return {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
function $c(n, a) {
  const t = dt(n, !0, a === "fixed"), e = t.top + n.clientTop, r = t.left + n.clientLeft, o = Ue(n) ? yt(n) : Le(1), i = n.clientWidth * o.x, s = n.clientHeight * o.y, c = r * o.x, l = e * o.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Zn(n, a, t) {
  let e;
  if (a === "viewport")
    e = Uc(n, t);
  else if (a === "document")
    e = Kc(Fe(n));
  else if (me(a))
    e = $c(a, t);
  else {
    const r = Xa(n);
    e = {
      x: a.x - r.x,
      y: a.y - r.y,
      width: a.width,
      height: a.height
    };
  }
  return hr(e);
}
function za(n, a) {
  const t = et(n);
  return t === a || !me(t) || xt(t) ? !1 : xe(t).position === "fixed" || za(t, a);
}
function Xc(n, a) {
  const t = a.get(n);
  if (t)
    return t;
  let e = Ft(n, [], !1).filter((s) => me(s) && Ct(s) !== "body"), r = null;
  const o = xe(n).position === "fixed";
  let i = o ? et(n) : n;
  for (; me(i) && !xt(i); ) {
    const s = xe(i), c = cn(i);
    !c && s.position === "fixed" && (r = null), (o ? !c && !r : !c && s.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || Wt(i) && !c && za(n, i)) ? e = e.filter((d) => d !== i) : r = s, i = et(i);
  }
  return a.set(n, e), e;
}
function Gc(n) {
  let {
    element: a,
    boundary: t,
    rootBoundary: e,
    strategy: r
  } = n;
  const i = [...t === "clippingAncestors" ? _r(a) ? [] : Xc(a, this._c) : [].concat(t), e], s = Zn(a, i[0], r);
  let c = s.top, l = s.right, d = s.bottom, u = s.left;
  for (let p = 1; p < i.length; p++) {
    const f = Zn(a, i[p], r);
    c = lt(f.top, c), l = Mt(f.right, l), d = Mt(f.bottom, d), u = lt(f.left, u);
  }
  return {
    width: l - u,
    height: d - c,
    x: u,
    y: c
  };
}
function zc(n) {
  const {
    width: a,
    height: t
  } = $a(n);
  return {
    width: a,
    height: t
  };
}
function Zc(n, a, t) {
  const e = Ue(a), r = Fe(a), o = t === "fixed", i = dt(n, !0, o, a);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Le(0);
  function l() {
    c.x = Mr(r);
  }
  if (e || !e && !o)
    if ((Ct(a) !== "body" || Wt(r)) && (s = kr(a)), e) {
      const f = dt(a, !0, o, a);
      c.x = f.x + a.clientLeft, c.y = f.y + a.clientTop;
    } else r && l();
  o && !e && r && l();
  const d = r && !e && !o ? Ga(r, s) : Le(0), u = i.left + s.scrollLeft - c.x - d.x, p = i.top + s.scrollTop - c.y - d.y;
  return {
    x: u,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Wr(n) {
  return xe(n).position === "static";
}
function Jn(n, a) {
  if (!Ue(n) || xe(n).position === "fixed")
    return null;
  if (a)
    return a(n);
  let t = n.offsetParent;
  return Fe(n) === t && (t = t.ownerDocument.body), t;
}
function Za(n, a) {
  const t = _e(n);
  if (_r(n))
    return t;
  if (!Ue(n)) {
    let r = et(n);
    for (; r && !xt(r); ) {
      if (me(r) && !Wr(r))
        return r;
      r = et(r);
    }
    return t;
  }
  let e = Jn(n, a);
  for (; e && hc(e) && Wr(e); )
    e = Jn(e, a);
  return e && xt(e) && Wr(e) && !cn(e) ? t : e || gc(n) || t;
}
const Jc = async function(n) {
  const a = this.getOffsetParent || Za, t = this.getDimensions, e = await t(n.floating);
  return {
    reference: Zc(n.reference, await a(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function el(n) {
  return xe(n).direction === "rtl";
}
const tl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vc,
  getDocumentElement: Fe,
  getClippingRect: Gc,
  getOffsetParent: Za,
  getElementRects: Jc,
  getClientRects: qc,
  getDimensions: zc,
  getScale: yt,
  isElement: me,
  isRTL: el
};
function Ja(n, a) {
  return n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height;
}
function rl(n, a) {
  let t = null, e;
  const r = Fe(n);
  function o() {
    var s;
    clearTimeout(e), (s = t) == null || s.disconnect(), t = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), o();
    const l = n.getBoundingClientRect(), {
      left: d,
      top: u,
      width: p,
      height: f
    } = l;
    if (s || a(), !p || !f)
      return;
    const m = $t(u), v = $t(r.clientWidth - (d + p)), g = $t(r.clientHeight - (u + f)), b = $t(d), y = {
      rootMargin: -m + "px " + -v + "px " + -g + "px " + -b + "px",
      threshold: lt(0, Mt(1, c)) || 1
    };
    let M = !0;
    function S(I) {
      const N = I[0].intersectionRatio;
      if (N !== c) {
        if (!M)
          return i();
        N ? i(!1, N) : e = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !Ja(l, n.getBoundingClientRect()) && i(), M = !1;
    }
    try {
      t = new IntersectionObserver(S, {
        ...y,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(S, y);
    }
    t.observe(n);
  }
  return i(!0), o;
}
function nl(n, a, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, l = fn(n), d = r || o ? [...l ? Ft(l) : [], ...a ? Ft(a) : []] : [];
  d.forEach((b) => {
    r && b.addEventListener("scroll", t, {
      passive: !0
    }), o && b.addEventListener("resize", t);
  });
  const u = l && s ? rl(l, t) : null;
  let p = -1, f = null;
  i && (f = new ResizeObserver((b) => {
    let [D] = b;
    D && D.target === l && f && a && (f.unobserve(a), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = f) == null || y.observe(a);
    })), t();
  }), l && !c && f.observe(l), a && f.observe(a));
  let m, v = c ? dt(n) : null;
  c && g();
  function g() {
    const b = dt(n);
    v && !Ja(v, b) && t(), v = b, m = requestAnimationFrame(g);
  }
  return t(), () => {
    var b;
    d.forEach((D) => {
      r && D.removeEventListener("scroll", t), o && D.removeEventListener("resize", t);
    }), u == null || u(), (b = f) == null || b.disconnect(), f = null, c && cancelAnimationFrame(m);
  };
}
const al = Bc, ol = Ac, ea = Fc, il = (n, a, t) => {
  const e = /* @__PURE__ */ new Map(), r = {
    platform: tl,
    ...t
  }, o = {
    ...r.platform,
    _c: e
  };
  return Lc(n, a, {
    ...r,
    platform: o
  });
};
var sl = typeof document < "u", cl = function() {
}, ar = sl ? Ma : cl;
function vr(n, a) {
  if (n === a)
    return !0;
  if (typeof n != typeof a)
    return !1;
  if (typeof n == "function" && n.toString() === a.toString())
    return !0;
  let t, e, r;
  if (n && a && typeof n == "object") {
    if (Array.isArray(n)) {
      if (t = n.length, t !== a.length) return !1;
      for (e = t; e-- !== 0; )
        if (!vr(n[e], a[e]))
          return !1;
      return !0;
    }
    if (r = Object.keys(n), t = r.length, t !== Object.keys(a).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(a, r[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const o = r[e];
      if (!(o === "_owner" && n.$$typeof) && !vr(n[o], a[o]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function eo(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ta(n, a) {
  const t = eo(n);
  return Math.round(a * t) / t;
}
function Hr(n) {
  const a = H.useRef(n);
  return ar(() => {
    a.current = n;
  }), a;
}
function ll(n) {
  n === void 0 && (n = {});
  const {
    placement: a = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: r,
    elements: {
      reference: o,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = n, [d, u] = H.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = H.useState(e);
  vr(p, e) || f(e);
  const [m, v] = H.useState(null), [g, b] = H.useState(null), D = H.useCallback((X) => {
    X !== I.current && (I.current = X, v(X));
  }, []), y = H.useCallback((X) => {
    X !== N.current && (N.current = X, b(X));
  }, []), M = o || m, S = i || g, I = H.useRef(null), N = H.useRef(null), k = H.useRef(d), P = c != null, R = Hr(c), A = Hr(r), T = Hr(l), L = H.useCallback(() => {
    if (!I.current || !N.current)
      return;
    const X = {
      placement: a,
      strategy: t,
      middleware: p
    };
    A.current && (X.platform = A.current), il(I.current, N.current, X).then((le) => {
      const Me = {
        ...le,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      Y.current && !vr(k.current, Me) && (k.current = Me, Ho.flushSync(() => {
        u(Me);
      }));
    });
  }, [p, a, t, A, T]);
  ar(() => {
    l === !1 && k.current.isPositioned && (k.current.isPositioned = !1, u((X) => ({
      ...X,
      isPositioned: !1
    })));
  }, [l]);
  const Y = H.useRef(!1);
  ar(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), ar(() => {
    if (M && (I.current = M), S && (N.current = S), M && S) {
      if (R.current)
        return R.current(M, S, L);
      L();
    }
  }, [M, S, L, R, P]);
  const V = H.useMemo(() => ({
    reference: I,
    floating: N,
    setReference: D,
    setFloating: y
  }), [D, y]), B = H.useMemo(() => ({
    reference: M,
    floating: S
  }), [M, S]), W = H.useMemo(() => {
    const X = {
      position: t,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return X;
    const le = ta(B.floating, d.x), Me = ta(B.floating, d.y);
    return s ? {
      ...X,
      transform: "translate(" + le + "px, " + Me + "px)",
      ...eo(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: le,
      top: Me
    };
  }, [t, s, B.floating, d.x, d.y]);
  return H.useMemo(() => ({
    ...d,
    update: L,
    refs: V,
    elements: B,
    floatingStyles: W
  }), [d, L, V, B, W]);
}
const ul = (n) => {
  function a(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const {
        element: e,
        padding: r
      } = typeof n == "function" ? n(t) : n;
      return e && a(e) ? e.current != null ? ea({
        element: e.current,
        padding: r
      }).fn(t) : {} : e ? ea({
        element: e,
        padding: r
      }).fn(t) : {};
    }
  };
}, dl = (n, a) => {
  const t = al(n);
  return {
    name: t.name,
    fn: t.fn,
    options: [n, a]
  };
}, fl = (n, a) => {
  const t = ol(n);
  return {
    name: t.name,
    fn: t.fn,
    options: [n, a]
  };
}, pl = (n, a) => {
  const t = ul(n);
  return {
    name: t.name,
    fn: t.fn,
    options: [n, a]
  };
}, hl = {
  ...H
};
let ra = !1, ml = 0;
const na = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + ml++
);
function vl() {
  const [n, a] = H.useState(() => ra ? na() : void 0);
  return mr(() => {
    n == null && a(na());
  }, []), H.useEffect(() => {
    ra = !0;
  }, []), n;
}
const gl = hl.useId, to = gl || vl;
let At;
process.env.NODE_ENV !== "production" && (At = /* @__PURE__ */ new Set());
function wl() {
  for (var n, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((n = At) != null && n.has(r))) {
    var o;
    (o = At) == null || o.add(r), console.warn(r);
  }
}
function yl() {
  for (var n, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((n = At) != null && n.has(r))) {
    var o;
    (o = At) == null || o.add(r), console.error(r);
  }
}
const bl = /* @__PURE__ */ H.forwardRef(function(a, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: r
      },
      middlewareData: {
        arrow: o,
        shift: i
      }
    },
    width: s = 14,
    height: c = 7,
    tipRadius: l = 0,
    strokeWidth: d = 0,
    staticOffset: u,
    stroke: p,
    d: f,
    style: {
      transform: m,
      ...v
    } = {},
    ...g
  } = a;
  process.env.NODE_ENV !== "production" && (t || wl("The `ref` prop is required for `FloatingArrow`."));
  const b = to(), [D, y] = H.useState(!1);
  if (mr(() => {
    if (!r) return;
    xe(r).direction === "rtl" && y(!0);
  }, [r]), !r)
    return null;
  const [M, S] = e.split("-"), I = M === "top" || M === "bottom";
  let N = u;
  (I && i != null && i.x || !I && i != null && i.y) && (N = null);
  const k = d * 2, P = k / 2, R = s / 2 * (l / -8 + 1), A = c / 2 * l / 4, T = !!f, L = N && S === "end" ? "bottom" : "top";
  let Y = N && S === "end" ? "right" : "left";
  N && D && (Y = S === "end" ? "left" : "right");
  const V = (o == null ? void 0 : o.x) != null ? N || o.x : "", B = (o == null ? void 0 : o.y) != null ? N || o.y : "", W = f || "M0,0" + (" H" + s) + (" L" + (s - R) + "," + (c - A)) + (" Q" + s / 2 + "," + c + " " + R + "," + (c - A)) + " Z", X = {
    top: T ? "rotate(180deg)" : "",
    left: T ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: T ? "" : "rotate(180deg)",
    right: T ? "rotate(-90deg)" : "rotate(90deg)"
  }[M];
  return /* @__PURE__ */ re.jsxs("svg", {
    ...g,
    "aria-hidden": !0,
    ref: t,
    width: T ? s : s + k,
    height: s,
    viewBox: "0 0 " + s + " " + (c > s ? c : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [Y]: V,
      [L]: B,
      [M]: I || T ? "100%" : "calc(100% - " + k / 2 + "px)",
      transform: [X, m].filter((le) => !!le).join(" "),
      ...v
    },
    children: [k > 0 && /* @__PURE__ */ re.jsx("path", {
      clipPath: "url(#" + b + ")",
      fill: "none",
      stroke: p,
      strokeWidth: k + (f ? 0 : 1),
      d: W
    }), /* @__PURE__ */ re.jsx("path", {
      stroke: k && !f ? g.fill : "none",
      d: W
    }), /* @__PURE__ */ re.jsx("clipPath", {
      id: b,
      children: /* @__PURE__ */ re.jsx("rect", {
        x: -P,
        y: P * (T ? -1 : 1),
        width: s + k,
        height: s
      })
    })]
  });
});
function Dl() {
  const n = /* @__PURE__ */ new Map();
  return {
    emit(a, t) {
      var e;
      (e = n.get(a)) == null || e.forEach((r) => r(t));
    },
    on(a, t) {
      n.has(a) || n.set(a, /* @__PURE__ */ new Set()), n.get(a).add(t);
    },
    off(a, t) {
      var e;
      (e = n.get(a)) == null || e.delete(t);
    }
  };
}
const _l = /* @__PURE__ */ H.createContext(null), kl = /* @__PURE__ */ H.createContext(null), xl = () => {
  var n;
  return ((n = H.useContext(_l)) == null ? void 0 : n.id) || null;
}, Ml = () => H.useContext(kl);
function Sl(n) {
  const {
    open: a = !1,
    onOpenChange: t,
    elements: e
  } = n, r = to(), o = H.useRef({}), [i] = H.useState(() => Dl()), s = xl() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = e.reference;
    f && !me(f) && yl("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, l] = H.useState(e.reference), d = Nc((f, m, v) => {
    o.current.openEvent = f ? m : void 0, i.emit("openchange", {
      open: f,
      event: m,
      reason: v,
      nested: s
    }), t == null || t(f, m, v);
  }), u = H.useMemo(() => ({
    setPositionReference: l
  }), []), p = H.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return H.useMemo(() => ({
    dataRef: o,
    open: a,
    onOpenChange: d,
    elements: p,
    events: i,
    floatingId: r,
    refs: u
  }), [a, d, p, i, r, u]);
}
function El(n) {
  n === void 0 && (n = {});
  const {
    nodeId: a
  } = n, t = Sl({
    ...n,
    elements: {
      reference: null,
      floating: null,
      ...n.elements
    }
  }), e = n.rootContext || t, r = e.elements, [o, i] = H.useState(null), [s, c] = H.useState(null), d = (r == null ? void 0 : r.domReference) || o, u = H.useRef(null), p = Ml();
  mr(() => {
    d && (u.current = d);
  }, [d]);
  const f = ll({
    ...n,
    elements: {
      ...r,
      ...s && {
        reference: s
      }
    }
  }), m = H.useCallback((y) => {
    const M = me(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      getClientRects: () => y.getClientRects(),
      contextElement: y
    } : y;
    c(M), f.refs.setReference(M);
  }, [f.refs]), v = H.useCallback((y) => {
    (me(y) || y === null) && (u.current = y, i(y)), (me(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !me(y)) && f.refs.setReference(y);
  }, [f.refs]), g = H.useMemo(() => ({
    ...f.refs,
    setReference: v,
    setPositionReference: m,
    domReference: u
  }), [f.refs, v, m]), b = H.useMemo(() => ({
    ...f.elements,
    domReference: d
  }), [f.elements, d]), D = H.useMemo(() => ({
    ...f,
    ...e,
    refs: g,
    elements: b,
    nodeId: a
  }), [f, g, b, a, e]);
  return mr(() => {
    e.dataRef.current.floatingContext = D;
    const y = p == null ? void 0 : p.nodesRef.current.find((M) => M.id === a);
    y && (y.context = D);
  }), H.useMemo(() => ({
    ...f,
    context: D,
    refs: g,
    elements: b
  }), [f, g, b, D]);
}
/*!
  react-datepicker v9.1.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var tn = function(a, t) {
  return tn = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  }, tn(a, t);
};
function fe(n, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
  tn(n, a);
  function t() {
    this.constructor = n;
  }
  n.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
}
var Q = function() {
  return Q = Object.assign || function(t) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Q.apply(this, arguments);
};
function Ye(n, a, t) {
  if (t || arguments.length === 2) for (var e = 0, r = a.length, o; e < r; e++)
    (o || !(e in a)) && (o || (o = Array.prototype.slice.call(a, 0, e)), o[e] = a[e]);
  return n.concat(o || Array.prototype.slice.call(a));
}
var Cl = function(n) {
  var a = n.showTimeSelectOnly, t = a === void 0 ? !1 : a, e = n.showTime, r = e === void 0 ? !1 : e, o = n.className, i = n.children, s = n.inline, c = t ? "Choose Time" : "Choose Date".concat(r ? " and Time" : "");
  return w.createElement("div", { className: o, "aria-label": c, role: s ? void 0 : "dialog", "aria-modal": s ? void 0 : "true", translate: "no" }, i);
}, Pl = function(n, a) {
  var t = Ur(null), e = Ur(n);
  $r(function() {
    e.current = n;
  }, [n]);
  var r = Ao(function(o) {
    var i, s = o.composed && o.composedPath && o.composedPath().find(function(c) {
      return c instanceof Node;
    }) || o.target;
    t.current && !t.current.contains(s) && (a && s instanceof HTMLElement && s.classList.contains(a) || (i = e.current) === null || i === void 0 || i.call(e, o));
  }, [a]);
  return $r(function() {
    return document.addEventListener("mousedown", r), function() {
      document.removeEventListener("mousedown", r);
    };
  }, [r]), t;
}, Sr = function(n) {
  var a = n.children, t = n.onClickOutside, e = n.className, r = n.containerRef, o = n.style, i = n.ignoreClass, s = Pl(t, i);
  return w.createElement("div", { className: e, style: o, ref: function(c) {
    s.current = c, r && (r.current = c);
  } }, a);
}, Xt = null, aa = !1;
function ro() {
  if (aa)
    return Xt;
  aa = !0;
  try {
    var n = "date-fns-tz";
    Xt = require(n);
  } catch {
    Xt = null;
  }
  return Xt;
}
function oa(n, a) {
  if (!a)
    return n;
  var t = ro();
  return t ? t.toZonedTime(n, a) : (process.env.NODE_ENV !== "production" && console.warn('react-datepicker: timeZone prop requires "date-fns-tz" package. Please install it: npm install date-fns-tz'), n);
}
function He(n, a) {
  if (!a)
    return n;
  var t = ro();
  return t ? t.fromZonedTime(n, a) : (process.env.NODE_ENV !== "production" && console.warn('react-datepicker: timeZone prop requires "date-fns-tz" package. Please install it: npm install date-fns-tz'), n);
}
var x;
(function(n) {
  n.ArrowUp = "ArrowUp", n.ArrowDown = "ArrowDown", n.ArrowLeft = "ArrowLeft", n.ArrowRight = "ArrowRight", n.PageUp = "PageUp", n.PageDown = "PageDown", n.Home = "Home", n.End = "End", n.Enter = "Enter", n.Space = " ", n.Tab = "Tab", n.Escape = "Escape", n.Backspace = "Backspace", n.X = "x";
})(x || (x = {}));
function no() {
  var n = typeof window < "u" ? window : globalThis;
  return n;
}
var Bt = 12;
function $(n) {
  if (n == null)
    return /* @__PURE__ */ new Date();
  var a = typeof n == "string" ? Zs(n) : O(n);
  return ye(a) ? a : /* @__PURE__ */ new Date();
}
function rt(n, a, t, e, r) {
  r === void 0 && (r = $());
  for (var o = Et(t) || Et(pn()), i = Array.isArray(a) ? a : [a], s = 0, c = i; s < c.length; s++) {
    var l = c[s], d = Ks(n, l, r, {
      locale: o
    });
    if (ye(d) && (!e || n === te(d, l, t)))
      return d;
  }
  if (!e && n && n.length >= 8) {
    var u = new Date(n);
    if (kt(u))
      return u;
  }
  return null;
}
function Ol(n, a) {
  if (a === void 0 && (a = $()), !n)
    return null;
  var t = n.match(/\b(1\d{3}|2\d{3})\b/);
  if (!t || !t[1])
    return null;
  var e = parseInt(t[1], 10), r = n.match(/(?:^|[/\-\s])?(0?[1-9]|1[0-2])(?:[/\-\s]|$)/), o = r && r[1] ? parseInt(r[1], 10) - 1 : a.getMonth();
  return new Date(e, o, 1);
}
function ye(n) {
  return kt(n);
}
function it(n) {
  return n == null ? null : Ie(n) && kt(n) ? n : null;
}
function te(n, a, t) {
  if (t === "en")
    return Vn(n, a, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? Et(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), e = e || Et(pn()), Vn(n, a, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function we(n, a) {
  var t = a.dateFormat, e = a.locale, r = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return n && te(n, r, e) || "";
}
var ao = " - ";
function Tl(n, a, t) {
  if (!n && !a)
    return "";
  var e = n ? we(n, t) : "", r = a ? we(a, t) : "", o = t.rangeSeparator || ao;
  return "".concat(e).concat(o).concat(r);
}
function Rl(n, a) {
  if (!(n != null && n.length))
    return "";
  var t = n[0] ? we(n[0], a) : "";
  if (n.length === 1)
    return t;
  if (n.length === 2 && n[1]) {
    var e = we(n[1], a);
    return "".concat(t, ", ").concat(e);
  }
  var r = n.length - 1;
  return "".concat(t, " (+").concat(r, ")");
}
function Be(n, a) {
  var t = a.hour, e = t === void 0 ? 0 : t, r = a.minute, o = r === void 0 ? 0 : r, i = a.second, s = i === void 0 ? 0 : i;
  return tr(rr(nr(n, s), o), e);
}
function Nl(n) {
  return nn(n);
}
function Yl(n, a) {
  return te(n, "ddd", a);
}
function Nt(n) {
  return ut(n);
}
function ze(n, a, t) {
  var e = Et(a || pn());
  return qe(n, {
    locale: e,
    weekStartsOn: t
  });
}
function Ve(n) {
  return Ya(n);
}
function Yt(n) {
  return br(n);
}
function ia(n) {
  return Gr(n);
}
function sa() {
  return ut($());
}
function ca(n) {
  return Ra(n);
}
function Il(n) {
  return Zo(n);
}
function Ll(n) {
  return Na(n);
}
function Oe(n, a) {
  return n && a ? Gs(n, a) : !n && !a;
}
function ge(n, a) {
  return n && a ? $s(n, a) : !n && !a;
}
function gr(n, a) {
  return n && a ? Xs(n, a) : !n && !a;
}
function q(n, a) {
  return n && a ? Go(n, a) : !n && !a;
}
function st(n, a) {
  return n && a ? zi(n, a) : !n && !a;
}
function at(n, a, t) {
  var e, r = ut(a), o = Ra(t);
  try {
    e = Lt(n, { start: r, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function pn() {
  var n = no();
  return n.__localeId__;
}
function Et(n) {
  if (typeof n == "string") {
    var a = no();
    return a.__localeData__ ? a.__localeData__[n] : void 0;
  } else
    return n;
}
function Fl(n, a, t) {
  return a(te(n, "EEEE", t));
}
function Al(n, a) {
  return te(n, "EEEEEE", a);
}
function Wl(n, a) {
  return te(n, "EEE", a);
}
function hn(n, a) {
  return te(De($(), n), "LLLL", a);
}
function oo(n, a) {
  return te(De($(), n), "LLL", a);
}
function Hl(n, a) {
  return te(wt($(), n), "QQQ", a);
}
function ke(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, i = t.excludeDateIntervals, s = t.includeDates, c = t.includeDateIntervals, l = t.filterDate, d = t.disabled;
  return d ? !0 : Qt(n, { minDate: e, maxDate: r }) || o && o.some(function(u) {
    return u instanceof Date ? q(n, u) : q(n, u.date);
  }) || i && i.some(function(u) {
    var p = u.start, f = u.end;
    return Lt(n, { start: p, end: f });
  }) || s && !s.some(function(u) {
    return q(n, u);
  }) || c && !c.some(function(u) {
    var p = u.start, f = u.end;
    return Lt(n, { start: p, end: f });
  }) || l && !l($(n)) || !1;
}
function mn(n, a) {
  var t = a === void 0 ? {} : a, e = t.excludeDates, r = t.excludeDateIntervals;
  return r && r.length > 0 ? r.some(function(o) {
    var i = o.start, s = o.end;
    return Lt(n, { start: i, end: s });
  }) : e && e.some(function(o) {
    var i;
    return o instanceof Date ? q(n, o) : q(n, (i = o.date) !== null && i !== void 0 ? i : /* @__PURE__ */ new Date());
  }) || !1;
}
function io(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return Qt(n, {
    minDate: e ? Ya(e) : void 0,
    maxDate: r ? Na(r) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return ge(n, c instanceof Date ? c : c.date);
  })) || i && !i.some(function(c) {
    return ge(n, c);
  }) || s && !s($(n)) || !1;
}
function Gt(n, a, t, e) {
  var r = j(n), o = be(n), i = j(a), s = be(a), c = j(e);
  return r === i && r === c ? o <= t && t <= s : r < i ? c === r && o <= t || c === i && s >= t || c < i && c > r : !1;
}
function Bl(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, i = t.includeDates;
  return Qt(n, { minDate: e, maxDate: r }) || o && o.some(function(s) {
    return ge(s instanceof Date ? s : s.date, n);
  }) || i && !i.some(function(s) {
    return ge(s, n);
  }) || !1;
}
function zt(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate, c = t.disabled;
  return c ? !0 : Qt(n, { minDate: e, maxDate: r }) || (o == null ? void 0 : o.some(function(l) {
    return gr(n, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return gr(n, l);
  }) || s && !s($(n)) || !1;
}
function Zt(n, a, t) {
  if (!a || !t || !kt(a) || !kt(t))
    return !1;
  var e = j(a), r = j(t);
  return e <= n && r >= n;
}
function or(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, i = t.includeDates, s = t.filterDate, c = t.disabled;
  if (c)
    return !0;
  var l = new Date(n, 0, 1);
  return Qt(l, {
    minDate: e ? br(e) : void 0,
    maxDate: r ? Ia(r) : void 0
  }) || (o == null ? void 0 : o.some(function(d) {
    return Oe(l, d instanceof Date ? d : d.date);
  })) || i && !i.some(function(d) {
    return Oe(l, d);
  }) || s && !s($(l)) || !1;
}
function Jt(n, a, t, e) {
  var r = j(n), o = Xe(n), i = j(a), s = Xe(a), c = j(e);
  return r === i && r === c ? o <= t && t <= s : r < i ? c === r && o <= t || c === i && s >= t || c < i && c > r : !1;
}
function Qt(n, a) {
  var t, e = a === void 0 ? {} : a, r = e.minDate, o = e.maxDate;
  return (t = r && _t(n, r) < 0 || o && _t(n, o) > 0) !== null && t !== void 0 ? t : !1;
}
function la(n, a) {
  return a.some(function(t) {
    return pe(t) === pe(n) && he(t) === he(n) && Ge(t) === Ge(n);
  });
}
function ua(n, a) {
  var t = a === void 0 ? {} : a, e = t.excludeTimes, r = t.includeTimes, o = t.filterTime;
  return e && la(n, e) || r && !la(n, r) || o && !o(n) || !1;
}
function da(n, a) {
  var t = a.minTime, e = a.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var r = $();
  r = tr(r, pe(n)), r = rr(r, he(n)), r = nr(r, Ge(n));
  var o = $();
  o = tr(o, pe(t)), o = rr(o, he(t)), o = nr(o, Ge(t));
  var i = $();
  i = tr(i, pe(e)), i = rr(i, he(e)), i = nr(i, Ge(e));
  var s;
  try {
    s = !Lt(r, { start: o, end: i });
  } catch {
    s = !1;
  }
  return s;
}
function fa(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = ct(n, 1);
  return e && cr(e, o) > 0 || r && r.every(function(i) {
    return cr(i, o) > 0;
  }) || !1;
}
function pa(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Ce(n, 1);
  return e && cr(o, e) > 0 || r && r.every(function(i) {
    return cr(o, i) > 0;
  }) || !1;
}
function Ql(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = br(n), i = Va(o);
  return e && lr(e, i) > 0 || r && r.every(function(s) {
    return lr(s, i) > 0;
  }) || !1;
}
function jl(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Ia(n), i = rn(o, 1);
  return e && lr(i, e) > 0 || r && r.every(function(s) {
    return lr(i, s) > 0;
  }) || !1;
}
function ha(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = Je(n, 1);
  return e && ur(e, o) > 0 || r && r.every(function(i) {
    return ur(i, o) > 0;
  }) || !1;
}
function Vl(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.yearItemNumber, o = r === void 0 ? Bt : r, i = Yt(Je(n, o)), s = Qe(i, o).endPeriod, c = e && j(e);
  return c && c > s || !1;
}
function ma(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Ee(n, 1);
  return e && ur(o, e) > 0 || r && r.every(function(i) {
    return ur(o, i) > 0;
  }) || !1;
}
function ql(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.yearItemNumber, o = r === void 0 ? Bt : r, i = Ee(n, o), s = Qe(i, o).startPeriod, c = e && j(e);
  return c && c < s || !1;
}
function so(n) {
  var a = n.minDate, t = n.includeDates;
  if (t && a) {
    var e = t.filter(function(r) {
      return _t(r, a) >= 0;
    });
    return An(e);
  } else return t ? An(t) : a;
}
function co(n) {
  var a = n.maxDate, t = n.includeDates;
  if (t && a) {
    var e = t.filter(function(r) {
      return _t(r, a) <= 0;
    });
    return Fn(e);
  } else return t ? Fn(t) : a;
}
function va(n, a) {
  var t;
  n === void 0 && (n = []), a === void 0 && (a = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), r = 0, o = n.length; r < o; r++) {
    var i = n[r];
    if (Ie(i)) {
      var s = te(i, "MM.dd.yyyy"), c = e.get(s) || [];
      c.includes(a) || (c.push(a), e.set(s, c));
    } else if (typeof i == "object") {
      var l = Object.keys(i), d = (t = l[0]) !== null && t !== void 0 ? t : "", u = i[d];
      if (typeof d == "string" && Array.isArray(u))
        for (var p = 0, f = u.length; p < f; p++) {
          var m = u[p];
          if (m) {
            var s = te(m, "MM.dd.yyyy"), c = e.get(s) || [];
            c.includes(d) || (c.push(d), e.set(s, c));
          }
        }
    }
  }
  return e;
}
function Kl(n, a) {
  return n.length !== a.length ? !1 : n.every(function(t, e) {
    return t === a[e];
  });
}
function Ul(n, a) {
  n === void 0 && (n = []), a === void 0 && (a = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return n.forEach(function(e) {
    var r = e.date, o = e.holidayName;
    if (Ie(r)) {
      var i = te(r, "MM.dd.yyyy"), s = t.get(i) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in s && s.className === a && Kl(s.holidayNames, [o]))) {
        s.className = a;
        var c = s.holidayNames;
        s.holidayNames = c ? Ye(Ye([], c, !0), [o], !1) : [o], t.set(i, s);
      }
    }
  }), t;
}
function $l(n, a, t, e, r) {
  for (var o = r.length, i = [], s = 0; s < o; s++) {
    var c = n, l = r[s];
    l && (c = Ko(c, pe(l)), c = It(c, he(l)), c = Xo(c, Ge(l)));
    var d = It(n, (t + 1) * e);
    je(c, a) && Ne(c, d) && l != null && i.push(l);
  }
  return i;
}
function gt(n) {
  return n < 10 ? "0".concat(n) : "".concat(n);
}
function Qe(n, a) {
  a === void 0 && (a = Bt);
  var t = Math.ceil(j(n) / a) * a, e = t - (a - 1);
  return { startPeriod: e, endPeriod: t };
}
function Xl(n) {
  var a = new Date(n.getFullYear(), n.getMonth(), n.getDate()), t = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 24);
  return Math.round((+t - +a) / 36e5);
}
function ga(n) {
  var a = n.getSeconds(), t = n.getMilliseconds();
  return O(n.getTime() - a * 1e3 - t);
}
function lo(n, a) {
  return ga(n).getTime() === ga(a).getTime();
}
function wa(n) {
  if (!Ie(n))
    throw new Error("Invalid date");
  var a = new Date(n);
  return a.setHours(0, 0, 0, 0), a;
}
function Br(n, a) {
  if (!Ie(n) || !Ie(a))
    throw new Error("Invalid date received");
  var t = wa(n), e = wa(a);
  return Ne(t, e);
}
function uo(n) {
  return n.key === x.Space;
}
var Qr = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.inputRef = w.createRef(), e.onTimeChange = function(r) {
        var o, i;
        e.setState({ time: r });
        var s = e.props.date, c = s instanceof Date && !isNaN(+s), l = c ? s : /* @__PURE__ */ new Date();
        if (r != null && r.includes(":")) {
          var d = r.split(":"), u = d[0], p = d[1];
          l.setHours(Number(u)), l.setMinutes(Number(p));
        }
        (i = (o = e.props).onChange) === null || i === void 0 || i.call(o, l);
      }, e.renderTimeInput = function() {
        var r = e.state.time, o = e.props, i = o.date, s = o.timeString, c = o.customTimeInput;
        return c ? Sa(c, {
          date: i,
          value: r,
          onChange: e.onTimeChange
        }) : w.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var l;
          (l = e.inputRef.current) === null || l === void 0 || l.focus();
        }, required: !0, value: r, onChange: function(l) {
          e.onTimeChange(l.target.value || s);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return a.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, a.prototype.render = function() {
      return w.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        w.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        w.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          w.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, a;
  }(de)
), Gl = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.dayEl = Ze(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var r, o, i = e.key;
        i === x.Space && (e.preventDefault(), e.key = x.Enter), (o = (r = t.props).handleOnKeyDown) === null || o === void 0 || o.call(r, e);
      }, t.isSameDay = function(e) {
        return q(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var r = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(i) {
          return t.isSameDayOrWeek(i);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !r && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), ke(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate,
          disabled: t.props.disabled
        });
      }, t.isExcluded = function() {
        return mn(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return q(t.props.day, ze(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && q(e, ze(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, r = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var i = te(r, "MM.dd.yyyy");
        return o.get(i);
      }, t.getHolidaysClass = function() {
        var e, r = t.props, o = r.day, i = r.holidays;
        if (!i)
          return [void 0];
        var s = te(o, "MM.dd.yyyy");
        return i.has(s) ? [(e = i.get(s)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, r = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : at(r, o, i);
      }, t.isInSelectingRange = function() {
        var e, r = t.props, o = r.day, i = r.selectsStart, s = r.selectsEnd, c = r.selectsRange, l = r.selectsDisabledDaysInRange, d = r.startDate, u = r.swapRange, p = r.endDate, f = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        if (t.isAfterMonth() || t.isBeforeMonth() || !(i || s || c) || !f || !l && t.isDisabled())
          return !1;
        if (i && p && (Ne(f, p) || st(f, p)))
          return at(o, f, p);
        if (s && d && (je(f, d) || st(f, d)))
          return at(o, d, f);
        if (c && d && !p) {
          if (st(f, d) || je(f, d))
            return at(o, d, f);
          if (u && Ne(f, d))
            return at(o, f, d);
        }
        return !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, o = r.day, i = r.startDate, s = r.selectsStart, c = r.swapRange, l = r.selectsRange, d = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s ? q(o, d) : l && c && i && d ? q(o, Ne(d, i) ? d : i) : q(o, i);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, o = r.day, i = r.endDate, s = r.selectsEnd, c = r.selectsRange, l = r.swapRange, d = r.startDate, u = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s ? q(o, u) : c && l && d && u ? q(o, Ne(u, d) ? d : u) : c ? q(o, u) : q(o, i);
      }, t.isRangeStart = function() {
        var e = t.props, r = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : q(o, r);
      }, t.isRangeEnd = function() {
        var e = t.props, r = e.day, o = e.startDate, i = e.endDate;
        return !o || !i ? !1 : q(i, r);
      }, t.isWeekend = function() {
        var e = Ui(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === be(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (be(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay($());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(r) {
          return t.isSameDayOrWeek(r);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var r = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return ue("react-datepicker__day", r, "react-datepicker__day--" + Yl(t.props.day), {
          "react-datepicker__day--disabled": t.isDisabled(),
          "react-datepicker__day--excluded": t.isExcluded(),
          "react-datepicker__day--selected": t.isSelected(),
          "react-datepicker__day--keyboard-selected": t.isKeyboardSelected(),
          "react-datepicker__day--range-start": t.isRangeStart(),
          "react-datepicker__day--range-end": t.isRangeEnd(),
          "react-datepicker__day--in-range": t.isInRange(),
          "react-datepicker__day--in-selecting-range": t.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": t.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": t.isSelectingRangeEnd(),
          "react-datepicker__day--today": t.isCurrentDay(),
          "react-datepicker__day--weekend": t.isWeekend(),
          "react-datepicker__day--outside-month": t.isAfterMonth() || t.isBeforeMonth()
        }, t.getHighLightedClass(), t.getHolidaysClass());
      }, t.getAriaLabel = function() {
        var e = t.props, r = e.day, o = e.ariaLabelPrefixWhenEnabled, i = o === void 0 ? "Choose" : o, s = e.ariaLabelPrefixWhenDisabled, c = s === void 0 ? "Not available" : s, l = t.isDisabled() || t.isExcluded() ? c : i;
        return "".concat(l, " ").concat(te(r, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, r = e.day, o = e.holidays, i = o === void 0 ? /* @__PURE__ */ new Map() : o, s = e.excludeDates, c = te(r, "MM.dd.yyyy"), l = [];
        return i.has(c) && l.push.apply(l, i.get(c).holidayNames), t.isExcluded() && l.push(s == null ? void 0 : s.filter(function(d) {
          return d instanceof Date ? q(d, r) : q(d == null ? void 0 : d.date, r);
        }).map(function(d) {
          if (!(d instanceof Date))
            return d == null ? void 0 : d.message;
        })), l.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, r = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && q(r, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(qn(t.props.day), t.props.day) : qn(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          w.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "gridcell", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && w.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return a.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, a.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, a.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, a.prototype.isDayActiveElement = function() {
      var t, e, r;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((r = document.activeElement) === null || r === void 0 ? void 0 : r.classList.contains("react-datepicker__day"));
    }, a.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, a;
  }(de)
), zl = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.weekNumberEl = Ze(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var r, o, i = e.key;
        i === x.Space && (e.preventDefault(), e.key = x.Enter), (o = (r = t.props).handleOnKeyDown) === null || o === void 0 || o.call(r, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !q(t.props.date, t.props.selected) && q(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || q(t.props.date, t.props.selected) && q(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var r = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && q(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (r = !0), t.props.inline && !t.props.shouldFocusDayInline && (r = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (r = !0)), r && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, a.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, a.prototype.render = function() {
      var t = this.props, e = t.weekNumber, r = t.isWeekDisabled, o = t.ariaLabelPrefix, i = o === void 0 ? a.defaultProps.ariaLabelPrefix : o, s = t.onClick, c = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!s && !r,
        "react-datepicker__week-number--selected": !!s && q(this.props.date, this.props.selected)
      };
      return w.createElement("div", { ref: this.weekNumberEl, className: ue(c), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex(), role: "gridcell" }, e);
    }, a;
  }(de)
), Zl = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return ke(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(e, r) {
        t.props.onDayClick && t.props.onDayClick(e, r);
      }, t.handleDayMouseEnter = function(e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }, t.handleWeekClick = function(e, r, o) {
        for (var i, s, c, l = new Date(e), d = 0; d < 7; d++) {
          var u = new Date(e);
          u.setDate(u.getDate() + d);
          var p = !t.isDisabled(u);
          if (p) {
            l = u;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(l, r, o), t.props.showWeekPicker && t.handleDayClick(l, o), ((i = t.props.shouldCloseOnSelect) !== null && i !== void 0 ? i : a.defaultProps.shouldCloseOnSelect) && ((c = (s = t.props).setOpen) === null || c === void 0 || c.call(s, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : Nl(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), r = Se(e, 6), o = new Date(e); o <= r; ) {
          if (!t.isDisabled(o))
            return !1;
          o = Se(o, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), r = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var i = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          r.push(w.createElement(zl, Q({ key: "W" }, a.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: i })));
        }
        return r.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var c = Se(e, s);
          return w.createElement(Gl, Q({}, a.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return ze(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !q(t.startOfWeek(), t.props.selected) && q(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": q(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      }, e = this.props.weekClassName ? this.props.weekClassName(this.startOfWeek()) : void 0;
      return w.createElement("div", { className: ue(t, e), role: "row" }, this.renderDays());
    }, a;
  }(de)
), Rt, Jl = 6, bt = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, jr = (Rt = {}, Rt[bt.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, Rt[bt.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, Rt[bt.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, Rt), er = 1;
function ya(n, a) {
  return n ? bt.FOUR_COLUMNS : a ? bt.TWO_COLUMNS : bt.THREE_COLUMNS;
}
var eu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.MONTH_REFS = Ye([], Array(12), !0).map(function() {
        return Ze();
      }), t.QUARTER_REFS = Ye([], Array(4), !0).map(function() {
        return Ze();
      }), t.isDisabled = function(e) {
        return ke(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate,
          disabled: t.props.disabled
        });
      }, t.isExcluded = function(e) {
        return mn(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, r) {
        var o, i;
        (i = (o = t.props).onDayClick) === null || i === void 0 || i.call(o, e, r, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var r, o;
        (o = (r = t.props).onDayMouseEnter) === null || o === void 0 || o.call(r, e);
      }, t.handleMouseLeave = function() {
        var e, r;
        (r = (e = t.props).onMouseLeave) === null || r === void 0 || r.call(e);
      }, t.isRangeStartMonth = function(e) {
        var r = t.props, o = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : ge(De(o, e), i);
      }, t.isRangeStartQuarter = function(e) {
        var r = t.props, o = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : gr(wt(o, e), i);
      }, t.isRangeEndMonth = function(e) {
        var r = t.props, o = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : ge(De(o, e), s);
      }, t.isRangeEndQuarter = function(e) {
        var r = t.props, o = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : gr(wt(o, e), s);
      }, t.isInSelectingRangeMonth = function(e) {
        var r, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, d = o.startDate, u = o.endDate, p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(s || c || l) || !p ? !1 : s && u ? Gt(p, u, e, i) : c && d || l && d && !u ? Gt(d, p, e, i) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.startDate, c = o.selectsStart, l = De(i, e), d = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return c ? ge(l, d) : ge(l, s);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, i = o.day, s = o.endDate, c = o.selectsEnd, l = o.selectsRange, d = De(i, e), u = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return c || l ? ge(d, u) : ge(d, s);
      }, t.isInSelectingRangeQuarter = function(e) {
        var r, o = t.props, i = o.day, s = o.selectsStart, c = o.selectsEnd, l = o.selectsRange, d = o.startDate, u = o.endDate, p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(s || c || l) || !p ? !1 : s && u ? Jt(p, u, e, i) : c && d || l && d && !u ? Jt(d, p, e, i) : !1;
      }, t.isWeekInMonth = function(e) {
        var r = t.props.day, o = Se(e, 6);
        return ge(e, r) || ge(o, r);
      }, t.isCurrentMonth = function(e, r) {
        return j(e) === j($()) && r === be($());
      }, t.isCurrentQuarter = function(e, r) {
        return j(e) === j($()) && r === Xe($());
      }, t.isSelectedMonth = function(e, r, o) {
        return be(o) === r && j(e) === j(o);
      }, t.isSelectMonthInList = function(e, r, o) {
        return o.some(function(i) {
          return t.isSelectedMonth(e, r, i);
        });
      }, t.isSelectedQuarter = function(e, r, o) {
        return Xe(o) === r && j(e) === j(o);
      }, t.isSelectQuarterInList = function(e, r, o) {
        return o.some(function(i) {
          return t.isSelectedQuarter(e, r, i);
        });
      }, t.isMonthSelected = function() {
        var e = t.props, r = e.day, o = e.selected, i = e.selectedDates, s = e.selectsMultiple, c = be(r);
        return s ? i == null ? void 0 : i.some(function(l) {
          return t.isSelectedMonth(r, c, l);
        }) : !!o && t.isSelectedMonth(r, c, o);
      }, t.isQuarterSelected = function() {
        var e = t.props, r = e.day, o = e.selected, i = e.selectedDates, s = e.selectsMultiple, c = Xe(r);
        return s ? i == null ? void 0 : i.some(function(l) {
          return t.isSelectedQuarter(r, c, l);
        }) : !!o && t.isSelectedQuarter(r, c, o);
      }, t.renderWeeks = function() {
        if (!ye(t.props.day))
          return [];
        for (var e = [], r = t.props.fixedHeight, o = 0, i = !1, s = ze(Ve(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(m) {
          return t.props.showWeekPicker ? ze(m, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, l = function(m) {
          return t.props.showWeekPicker ? ze(m, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, d = t.props.selected ? l(t.props.selected) : void 0, u = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(w.createElement(Zl, Q({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: s, month: be(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: d, preSelection: u, showWeekNumber: t.props.showWeekNumbers }))), !i; ) {
          o++, s = sr(s, 1);
          var p = r && o >= Jl, f = !r && !t.isWeekInMonth(s);
          if (p || f)
            if (t.props.peekNextMonth)
              i = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, r) {
        var o = t.isMonthDisabledForLabelDate(r), i = o.isDisabled, s = o.labelDate;
        i || t.handleDayClick(Ve(s), e);
      }, t.onMonthMouseEnter = function(e) {
        var r = t.isMonthDisabledForLabelDate(e), o = r.isDisabled, i = r.labelDate;
        o || t.handleDayMouseEnter(Ve(i));
      }, t.handleMonthNavigation = function(e, r) {
        var o, i, s, c;
        (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, r), (c = (s = t.MONTH_REFS[e]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, r, o) {
        var i, s = t.props, c = s.selected, l = s.preSelection, d = s.setPreSelection, u = s.minDate, p = s.maxDate, f = s.showFourColumnMonthYearPicker, m = s.showTwoColumnMonthYearPicker;
        if (l) {
          var v = ya(f, m), g = t.getVerticalOffset(v), b = (i = jr[v]) === null || i === void 0 ? void 0 : i.grid, D = function(N, k, P) {
            var R, A, T = k, L = P;
            switch (N) {
              case x.ArrowRight:
                T = Ce(k, er), L = P === 11 ? 0 : P + er;
                break;
              case x.ArrowLeft:
                T = ct(k, er), L = P === 0 ? 11 : P - er;
                break;
              case x.ArrowUp:
                T = ct(k, g), L = !((R = b == null ? void 0 : b[0]) === null || R === void 0) && R.includes(P) ? P + 12 - g : P - g;
                break;
              case x.ArrowDown:
                T = Ce(k, g), L = !((A = b == null ? void 0 : b[b.length - 1]) === null || A === void 0) && A.includes(P) ? P - 12 + g : P + g;
                break;
            }
            return { newCalculatedDate: T, newCalculatedMonth: L };
          }, y = function(N, k, P) {
            for (var R = 40, A = N, T = !1, L = 0, Y = D(A, k, P), V = Y.newCalculatedDate, B = Y.newCalculatedMonth; !T; ) {
              if (L >= R) {
                V = k, B = P;
                break;
              }
              if (u && V < u) {
                A = x.ArrowRight;
                var W = D(A, V, B);
                V = W.newCalculatedDate, B = W.newCalculatedMonth;
              }
              if (p && V > p) {
                A = x.ArrowLeft;
                var W = D(A, V, B);
                V = W.newCalculatedDate, B = W.newCalculatedMonth;
              }
              if (Bl(V, t.props)) {
                var W = D(A, V, B);
                V = W.newCalculatedDate, B = W.newCalculatedMonth;
              } else
                T = !0;
              L++;
            }
            return { newCalculatedDate: V, newCalculatedMonth: B };
          };
          if (r === x.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), d == null || d(c));
            return;
          }
          var M = y(r, l, o), S = M.newCalculatedDate, I = M.newCalculatedMonth;
          switch (r) {
            case x.ArrowRight:
            case x.ArrowLeft:
            case x.ArrowUp:
            case x.ArrowDown:
              t.handleMonthNavigation(I, S);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var r, o;
        return (o = (r = jr[e]) === null || r === void 0 ? void 0 : r.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, r) {
        var o = t.props, i = o.disabledKeyboardNavigation, s = o.handleOnMonthKeyDown, c = e.key;
        c !== x.Tab && e.preventDefault(), i || t.handleKeyboardNavigation(e, c, r), s && s(e);
      }, t.onQuarterClick = function(e, r) {
        var o = wt(t.props.day, r);
        zt(o, t.props) || t.handleDayClick(ia(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var r = wt(t.props.day, e);
        zt(r, t.props) || t.handleDayMouseEnter(ia(r));
      }, t.handleQuarterNavigation = function(e, r) {
        var o, i, s, c;
        t.isDisabled(r) || t.isExcluded(r) || ((i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, r), (c = (s = t.QUARTER_REFS[e - 1]) === null || s === void 0 ? void 0 : s.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, r) {
        var o, i, s = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (s) {
            case x.Enter:
              t.onQuarterClick(e, r), (i = (o = t.props).setPreSelection) === null || i === void 0 || i.call(o, t.props.selected);
              break;
            case x.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 4 ? 1 : r + 1, rn(t.props.preSelection, 1));
              break;
            case x.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 1 ? 4 : r - 1, Va(t.props.preSelection));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var r, o = t.props, i = o.day, s = o.disabled, c = o.minDate, l = o.maxDate, d = o.excludeDates, u = o.includeDates, p = De(i, e);
        return s ? {
          isDisabled: !0,
          labelDate: De(i, e)
        } : {
          isDisabled: (r = (c || l || d || u) && io(p, t.props)) !== null && r !== void 0 ? r : !1,
          labelDate: p
        };
      }, t.isMonthDisabled = function(e) {
        var r = t.isMonthDisabledForLabelDate(e).isDisabled;
        return r;
      }, t.getMonthClassNames = function(e) {
        var r = t.props, o = r.day, i = r.startDate, s = r.endDate, c = r.preSelection, l = r.monthClassName, d = l ? l(De(o, e)) : void 0, u = t.getSelection();
        return ue("react-datepicker__month-text", "react-datepicker__month-".concat(e), d, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": u ? t.isSelectMonthInList(o, e, u) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthSelected() && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": i && s ? Gt(i, s, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = be(t.props.preSelection), o = t.isMonthDisabledForLabelDate(r).isDisabled, i = e === r && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = Xe(t.props.preSelection), o = zt(t.props.day, t.props), i = e === r && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getAriaLabel = function(e) {
        var r = t.props, o = r.chooseDayAriaLabelPrefix, i = o === void 0 ? "Choose" : o, s = r.disabledDayAriaLabelPrefix, c = s === void 0 ? "Not available" : s, l = r.day, d = r.locale, u = De(l, e), p = t.isDisabled(u) || t.isExcluded(u) ? c : i;
        return "".concat(p, " ").concat(te(u, "MMMM yyyy", d));
      }, t.getQuarterClassNames = function(e) {
        var r = t.props, o = r.day, i = r.startDate, s = r.endDate, c = r.minDate, l = r.maxDate, d = r.excludeDates, u = r.includeDates, p = r.filterDate, f = r.preSelection, m = r.disabledKeyboardNavigation, v = r.disabled, g = (c || l || d || u || p || v) && zt(wt(o, e), t.props), b = t.getSelection();
        return ue("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": g,
          "react-datepicker__quarter-text--selected": b ? t.isSelectQuarterInList(o, e, b) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !m && f && t.isSelectedQuarter(o, e, f) && !t.isQuarterSelected() && !g,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": i && s ? Jt(i, s, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e),
          "react-datepicker__quarter-text--today": t.isCurrentQuarter(o, e)
        });
      }, t.getMonthContent = function(e) {
        var r = t.props, o = r.showFullMonthYearPicker, i = r.renderMonthContent, s = r.locale, c = r.day, l = oo(e, s), d = hn(e, s);
        return i ? i(e, l, d, c) : o ? d : l;
      }, t.getQuarterContent = function(e) {
        var r, o = t.props, i = o.renderQuarterContent, s = o.locale, c = Hl(e, s);
        return (r = i == null ? void 0 : i(e, c)) !== null && r !== void 0 ? r : c;
      }, t.renderMonths = function() {
        var e, r = t.props, o = r.showTwoColumnMonthYearPicker, i = r.showFourColumnMonthYearPicker, s = r.day, c = r.selected, l = (e = jr[ya(i, o)]) === null || e === void 0 ? void 0 : e.grid;
        return l == null ? void 0 : l.map(function(d, u) {
          return w.createElement("div", { className: "react-datepicker__month-wrapper", key: u }, d.map(function(p, f) {
            return w.createElement("div", { ref: t.MONTH_REFS[p], key: f, onClick: function(m) {
              t.onMonthClick(m, p);
            }, onKeyDown: function(m) {
              uo(m) && (m.preventDefault(), m.key = x.Enter), t.onMonthKeyDown(m, p);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(p);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(p);
            } : void 0, tabIndex: Number(t.getTabIndex(p)), className: t.getMonthClassNames(p), "aria-disabled": t.isMonthDisabled(p), role: "option", "aria-label": t.getAriaLabel(p), "aria-current": t.isCurrentMonth(s, p) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(s, p, c) : void 0 }, t.getMonthContent(p));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, r = e.day, o = e.selected, i = [1, 2, 3, 4];
        return w.createElement("div", { className: "react-datepicker__quarter-wrapper" }, i.map(function(s, c) {
          return w.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(l) {
            t.onQuarterClick(l, s);
          }, onKeyDown: function(l) {
            t.onQuarterKeyDown(l, s);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(s);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(s);
          } : void 0, className: t.getQuarterClassNames(s), "aria-selected": o ? t.isSelectedQuarter(r, s, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(s)), "aria-current": t.isCurrentQuarter(r, s) ? "date" : void 0 }, t.getQuarterContent(s));
        }));
      }, t.getClassNames = function() {
        var e = t.props, r = e.selectingDate, o = e.selectsStart, i = e.selectsEnd, s = e.showMonthYearPicker, c = e.showQuarterYearPicker, l = e.showWeekPicker;
        return ue("react-datepicker__month", {
          "react-datepicker__month--selecting-range": r && (o || i)
        }, { "react-datepicker__monthPicker": s }, { "react-datepicker__quarterPicker": c }, { "react-datepicker__weekPicker": l });
      }, t;
    }
    return a.prototype.getSelection = function() {
      var t = this.props, e = t.selected, r = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return r;
      if (e)
        return [e];
    }, a.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, r = t.showQuarterYearPicker, o = t.day, i = t.ariaLabelPrefix, s = i === void 0 ? "Month " : i, c = s ? s.trim() + " " : "", l = ye(o) ? "".concat(c).concat(te(o, "MMMM, yyyy", this.props.locale)) : "", d = e || r;
      return d ? w.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": l, role: "listbox" }, e ? this.renderMonths() : this.renderQuarters()) : w.createElement(
        "div",
        { role: "table" },
        this.props.dayNamesHeader && w.createElement("div", { role: "rowgroup" }, this.props.dayNamesHeader),
        this.props.monthHeader && w.createElement("div", { role: "rowgroup" }, this.props.monthHeader),
        w.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": l, role: "rowgroup" }, this.renderWeeks()),
        this.props.monthFooter && w.createElement("div", { role: "rowgroup" }, this.props.monthFooter)
      );
    }, a;
  }(de)
), tu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.monthOptionButtonsRef = {}, t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.handleOptionKeyDown = function(e, r) {
        var o;
        switch (r.key) {
          case "Enter":
            r.preventDefault(), t.onChange(e);
            break;
          case "Escape":
            r.preventDefault(), t.props.onCancel();
            break;
          case "ArrowUp":
          case "ArrowDown": {
            r.preventDefault();
            var i = (e + (r.key === "ArrowUp" ? -1 : 1) + t.props.monthNames.length) % t.props.monthNames.length;
            (o = t.monthOptionButtonsRef[i]) === null || o === void 0 || o.focus();
            break;
          }
        }
      }, t.renderOptions = function() {
        return t.monthOptionButtonsRef = {}, t.props.monthNames.map(function(e, r) {
          return w.createElement(
            "div",
            { ref: function(o) {
              t.monthOptionButtonsRef[r] = o, t.isSelectedMonth(r) && (o == null || o.focus());
            }, role: "button", tabIndex: 0, className: t.isSelectedMonth(r) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, r), onKeyDown: t.handleOptionKeyDown.bind(t, r), "aria-selected": t.isSelectedMonth(r) ? "true" : void 0 },
            t.isSelectedMonth(r) ? w.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            e
          );
        });
      }, t.onChange = function(e) {
        return t.props.onChange(e);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return a.prototype.render = function() {
      return w.createElement(Sr, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(de)
), ru = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(r, o) {
          return w.createElement("option", { key: r, value: o }, r);
        });
      }, t.renderSelectMode = function(e) {
        return w.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(r) {
          return t.onChange(parseInt(r.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, r) {
        return w.createElement(
          "button",
          { key: "read", type: "button", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          w.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          w.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, r[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return w.createElement(tu, Q({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var r = t.state.dropdownVisible, o = [t.renderReadView(!r, e)];
        return r && o.unshift(t.renderDropdown(e)), o;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return oo(o, t.props.locale);
      } : function(o) {
        return hn(o, t.props.locale);
      }), r;
      switch (this.props.dropdownMode) {
        case "scroll":
          r = this.renderScrollMode(e);
          break;
        case "select":
          r = this.renderSelectMode(e);
          break;
      }
      return w.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, r);
    }, a;
  }(de)
), ba = 5;
function nu(n, a, t) {
  for (var e = [], r = n ?? Je(t, ba), o = a ?? Ee(t, ba), i = Ve(r), s = Ve(o); !je(i, s); )
    e.push($(i)), i = Ce(i, 1);
  return e;
}
var au = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(r) {
          var o = Zr(r), i = Oe(e.props.date, r) && ge(e.props.date, r);
          return w.createElement(
            "div",
            { className: i ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": i ? "true" : void 0 },
            i ? w.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            te(r, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(r) {
        return e.props.onChange(r);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: nu(e.props.minDate, e.props.maxDate, e.props.date)
      }, e;
    }
    return a.prototype.render = function() {
      var t = ue({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return w.createElement(Sr, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(de)
), Da = 5, ou = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e, r, o = (e = t.props.minDate) !== null && e !== void 0 ? e : Je(t.props.date, Da), i = (r = t.props.maxDate) !== null && r !== void 0 ? r : Ee(t.props.date, Da), s = Ve(o), c = Ve(i), l = []; !je(s, c); ) {
          var d = Zr(s);
          l.push(w.createElement("option", { key: d, value: d }, te(s, t.props.dateFormat, t.props.locale))), s = Ce(s, 1);
        }
        return l;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return w.createElement("select", { value: Zr(Ve(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var r = te(t.props.date, t.props.dateFormat, t.props.locale);
        return w.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          w.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          w.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, r)
        );
      }, t.renderDropdown = function() {
        return w.createElement(au, Q({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, r = [t.renderReadView(!e)];
        return e && r.unshift(t.renderDropdown()), r;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var r = $(e);
        Oe(t.props.date, r) && ge(t.props.date, r) || t.props.onChange(r);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return w.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(de)
), iu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, r, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && a.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((r = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && r !== void 0 ? r : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(e) {
        var r, o;
        (t.props.minTime || t.props.maxTime) && da(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && ua(e, t.props) || (o = (r = t.props).onChange) === null || o === void 0 || o.call(r, e);
      }, t.isSelectedTime = function(e) {
        var r = it(t.props.selected);
        return r && lo(r, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && da(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && ua(e, t.props);
      }, t.liClasses = function(e) {
        var r, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (pe(e) * 3600 + he(e) * 60 + Ge(e)) % (((r = t.props.intervals) !== null && r !== void 0 ? r : a.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, r) {
        var o, i;
        e.key === x.Space && (e.preventDefault(), e.key = x.Enter), (e.key === x.ArrowUp || e.key === x.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === x.ArrowDown || e.key === x.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === x.Enter && t.handleClick(r), (i = (o = t.props).handleOnKeyDown) === null || i === void 0 || i.call(o, e);
      }, t.renderTimes = function() {
        for (var e, r = [], o = typeof t.props.format == "string" ? t.props.format : "p", i = (e = t.props.intervals) !== null && e !== void 0 ? e : a.defaultProps.intervals, s = it(t.props.selected) || it(t.props.openToDate) || $(), c = Nt(s), l = t.props.injectTimes && t.props.injectTimes.sort(function(g, b) {
          return g.getTime() - b.getTime();
        }), d = 60 * Xl(s), u = d / i, p = 0; p < u; p++) {
          var f = It(c, p * i);
          if (r.push(f), l) {
            var m = $l(c, f, p, i, l);
            r = r.concat(m);
          }
        }
        var v = r.reduce(function(g, b) {
          return b.getTime() <= s.getTime() ? b : g;
        }, r[0]);
        return r.map(function(g) {
          return w.createElement("li", { key: g.valueOf(), onClick: t.handleClick.bind(t, g), className: t.liClasses(g), ref: function(b) {
            g === v && (t.centerLi = b);
          }, onKeyDown: function(b) {
            t.handleOnKeyDown(b, g);
          }, tabIndex: g === v ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(g) ? "true" : void 0, "aria-disabled": t.isDisabledTime(g) ? "true" : void 0 }, te(g, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? w.createElement(w.Fragment, null) : w.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          w.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
        );
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.observeDatePickerHeightChanges();
    }, a.prototype.componentWillUnmount = function() {
      var t;
      (t = this.resizeObserver) === null || t === void 0 || t.disconnect();
    }, a.prototype.observeDatePickerHeightChanges = function() {
      var t = this, e = this.props.monthRef;
      this.updateContainerHeight(), e && (this.resizeObserver = new ResizeObserver(function() {
        t.updateContainerHeight();
      }), this.resizeObserver.observe(e));
    }, a.prototype.updateContainerHeight = function() {
      if (this.props.monthRef && this.header) {
        var t = this.props.monthRef.clientHeight - this.header.clientHeight;
        this.state.height !== t && this.setState({
          height: t
        });
      }
    }, a.prototype.render = function() {
      var t = this, e, r = this.state.height;
      return w.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : a.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        w.createElement(
          "div",
          { className: "react-datepicker__time" },
          w.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            w.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: r ? { height: r } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, a.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, a;
  }(de)
), _a = 3, su = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.YEAR_REFS = Ye([], Array(e.props.yearItemNumber), !0).map(function() {
        return Ze();
      }), e.isDisabled = function(r) {
        return ke(r, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(r) {
        return mn(r, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var r;
        return (r = e.props.selectingDate) !== null && r !== void 0 ? r : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(r) {
        var o = function() {
          var i, s;
          (s = (i = e.YEAR_REFS[r]) === null || i === void 0 ? void 0 : i.current) === null || s === void 0 || s.focus();
        };
        window.requestAnimationFrame(o);
      }, e.handleYearClick = function(r, o) {
        e.props.onDayClick && e.props.onDayClick(r, o);
      }, e.handleYearNavigation = function(r, o) {
        var i, s, c, l, d = e.props, u = d.date, p = d.yearItemNumber;
        if (!(u === void 0 || p === void 0)) {
          var f = Qe(u, p).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, o), r - f < 0 ? e.updateFocusOnPaginate(p - (f - r)) : r - f >= p ? e.updateFocusOnPaginate(Math.abs(p - (r - f))) : (l = (c = e.YEAR_REFS[r - f]) === null || c === void 0 ? void 0 : c.current) === null || l === void 0 || l.focus());
        }
      }, e.isSameDay = function(r, o) {
        return q(r, o);
      }, e.isCurrentYear = function(r) {
        return r === j($());
      }, e.isRangeStart = function(r) {
        return e.props.startDate && e.props.endDate && Oe(Pe($(), r), e.props.startDate);
      }, e.isRangeEnd = function(r) {
        return e.props.startDate && e.props.endDate && Oe(Pe($(), r), e.props.endDate);
      }, e.isInRange = function(r) {
        return Zt(r, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(r) {
        var o = e.props, i = o.selectsStart, s = o.selectsEnd, c = o.selectsRange, l = o.startDate, d = o.endDate;
        return !(i || s || c) || !e.selectingDate() ? !1 : i && d ? Zt(r, e.selectingDate(), d) : s && l || c && l && !d ? Zt(r, l, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(r) {
        var o;
        if (!e.isInSelectingRange(r))
          return !1;
        var i = e.props, s = i.startDate, c = i.selectsStart, l = Pe($(), r);
        return c ? Oe(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Oe(l, s ?? null);
      }, e.isSelectingRangeEnd = function(r) {
        var o;
        if (!e.isInSelectingRange(r))
          return !1;
        var i = e.props, s = i.endDate, c = i.selectsEnd, l = i.selectsRange, d = Pe($(), r);
        return c || l ? Oe(d, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : Oe(d, s ?? null);
      }, e.isKeyboardSelected = function(r) {
        if (!(e.props.disabledKeyboardNavigation || e.props.date === void 0 || e.props.preSelection == null)) {
          var o = e.props, i = o.minDate, s = o.maxDate, c = o.excludeDates, l = o.includeDates, d = o.filterDate, u = o.selected, p = Yt(Pe(e.props.date, r)), f = (i || s || c || l || d) && or(r, e.props), m = !!u && q(p, Yt(u)), v = q(p, Yt(e.props.preSelection));
          return !e.props.inline && !m && v && !f;
        }
      }, e.isSelectedYear = function(r) {
        var o = e.props, i = o.selectsMultiple, s = o.selected, c = o.selectedDates;
        return i ? c == null ? void 0 : c.some(function(l) {
          return r === j(l);
        }) : !!s && r === j(s);
      }, e.onYearClick = function(r, o) {
        var i = e.props.date;
        i !== void 0 && e.handleYearClick(Yt(Pe(i, o)), r);
      }, e.onYearKeyDown = function(r, o) {
        var i, s, c = r.key, l = e.props, d = l.date, u = l.yearItemNumber, p = l.handleOnKeyDown;
        if (c !== x.Tab && r.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case x.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(r, o), (s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, e.props.selected);
              break;
            case x.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, Ee(e.props.preSelection, 1));
              break;
            case x.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, Je(e.props.preSelection, 1));
              break;
            case x.ArrowUp: {
              if (d === void 0 || u === void 0 || e.props.preSelection == null)
                break;
              var f = Qe(d, u).startPeriod, m = _a, v = o - m;
              if (v < f) {
                var g = u % m;
                o >= f && o < f + g ? m = g : m += g, v = o - m;
              }
              e.handleYearNavigation(v, Je(e.props.preSelection, m));
              break;
            }
            case x.ArrowDown: {
              if (d === void 0 || u === void 0 || e.props.preSelection == null)
                break;
              var b = Qe(d, u).endPeriod, m = _a, v = o + m;
              if (v > b) {
                var g = u % m;
                o <= b && o > b - g ? m = g : m += g, v = o + m;
              }
              e.handleYearNavigation(v, Ee(e.props.preSelection, m));
              break;
            }
          }
        p && p(r);
      }, e.getYearClassNames = function(r) {
        var o = e.props, i = o.date, s = o.disabled, c = o.minDate, l = o.maxDate, d = o.excludeDates, u = o.includeDates, p = o.filterDate, f = o.yearClassName;
        return ue("react-datepicker__year-text", "react-datepicker__year-".concat(r), i ? f == null ? void 0 : f(Pe(i, r)) : void 0, {
          "react-datepicker__year-text--selected": e.isSelectedYear(r),
          "react-datepicker__year-text--disabled": (c || l || d || u || p || s) && or(r, e.props),
          "react-datepicker__year-text--keyboard-selected": e.isKeyboardSelected(r),
          "react-datepicker__year-text--range-start": e.isRangeStart(r),
          "react-datepicker__year-text--range-end": e.isRangeEnd(r),
          "react-datepicker__year-text--in-range": e.isInRange(r),
          "react-datepicker__year-text--in-selecting-range": e.isInSelectingRange(r),
          "react-datepicker__year-text--selecting-range-start": e.isSelectingRangeStart(r),
          "react-datepicker__year-text--selecting-range-end": e.isSelectingRangeEnd(r),
          "react-datepicker__year-text--today": e.isCurrentYear(r)
        });
      }, e.getYearTabIndex = function(r) {
        if (e.props.disabledKeyboardNavigation || e.props.preSelection == null)
          return "-1";
        var o = j(e.props.preSelection), i = or(r, e.props);
        return r === o && !i ? "0" : "-1";
      }, e.getYearContent = function(r) {
        return e.props.renderYearContent ? e.props.renderYearContent(r) : r;
      }, e;
    }
    return a.prototype.render = function() {
      var t = this, e = [], r = this.props, o = r.date, i = r.yearItemNumber, s = r.onYearMouseEnter, c = r.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var l = Qe(o, i), d = l.startPeriod, u = l.endPeriod, p = function(v) {
        e.push(w.createElement("div", { ref: f.YEAR_REFS[v - d], onClick: function(g) {
          t.onYearClick(g, v);
        }, onKeyDown: function(g) {
          uo(g) && (g.preventDefault(), g.key = x.Enter), t.onYearKeyDown(g, v);
        }, tabIndex: Number(f.getYearTabIndex(v)), className: f.getYearClassNames(v), onMouseEnter: f.props.usePointerEvent ? void 0 : function(g) {
          return s(g, v);
        }, onPointerEnter: f.props.usePointerEvent ? function(g) {
          return s(g, v);
        } : void 0, onMouseLeave: f.props.usePointerEvent ? void 0 : function(g) {
          return c(g, v);
        }, onPointerLeave: f.props.usePointerEvent ? function(g) {
          return c(g, v);
        } : void 0, key: v, "aria-current": f.isCurrentYear(v) ? "date" : void 0 }, f.getYearContent(v)));
      }, f = this, m = d; m <= u; m++)
        p(m);
      return w.createElement(
        "div",
        { className: "react-datepicker__year" },
        w.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, a;
  }(de)
);
function cu(n, a, t, e) {
  for (var r = [], o = 0; o < 2 * a + 1; o++) {
    var i = n + a - o, s = !0;
    t && (s = j(t) <= i), e && s && (s = j(e) >= i), s && r.push(i);
  }
  return r;
}
var lu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      e.yearOptionButtonsRef = {}, e.handleOptionKeyDown = function(s, c) {
        var l;
        switch (c.key) {
          case "Enter":
            c.preventDefault(), e.onChange(s);
            break;
          case "Escape":
            c.preventDefault(), e.props.onCancel();
            break;
          case "ArrowUp":
          case "ArrowDown": {
            c.preventDefault();
            var d = s + (c.key === "ArrowUp" ? 1 : -1);
            e.yearOptionButtonsRef[d] && ((l = e.yearOptionButtonsRef[d]) === null || l === void 0 || l.focus());
            break;
          }
        }
      }, e.renderOptions = function() {
        e.yearOptionButtonsRef = {};
        var s = e.props.year, c = e.state.yearsList.map(function(u) {
          return w.createElement(
            "div",
            { ref: function(p) {
              e.yearOptionButtonsRef[u] = p, u === s && (p == null || p.focus());
            }, role: "button", tabIndex: 0, className: s === u ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: u, onClick: e.onChange.bind(e, u), onKeyDown: e.handleOptionKeyDown.bind(e, u), "aria-selected": s === u ? "true" : void 0 },
            s === u ? w.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            u
          );
        }), l = e.props.minDate ? j(e.props.minDate) : null, d = e.props.maxDate ? j(e.props.maxDate) : null;
        return (!d || !e.state.yearsList.find(function(u) {
          return u === d;
        })) && c.unshift(w.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          w.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!l || !e.state.yearsList.find(function(u) {
          return u === l;
        })) && c.push(w.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          w.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), c;
      }, e.onChange = function(s) {
        e.props.onChange(s);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.shiftYears = function(s) {
        var c = e.state.yearsList.map(function(l) {
          return l + s;
        });
        e.setState({
          yearsList: c
        });
      }, e.incrementYears = function() {
        return e.shiftYears(1);
      }, e.decrementYears = function() {
        return e.shiftYears(-1);
      };
      var r = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, i = r || (o ? 10 : 5);
      return e.state = {
        yearsList: cu(e.props.year, i, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = Ze(), e;
    }
    return a.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, r = e ? e.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = r && r instanceof HTMLElement ? r.offsetTop + (r.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, a.prototype.render = function() {
      var t = ue({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return w.createElement(Sr, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(de)
), uu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? j(t.props.minDate) : 1900, r = t.props.maxDate ? j(t.props.maxDate) : 2100, o = [], i = e; i <= r; i++)
          o.push(w.createElement("option", { key: i, value: i }, i));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return w.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return w.createElement(
          "button",
          { key: "read", type: "button", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: t.toggleDropdown },
          w.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          w.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return w.createElement(lu, Q({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, r = [t.renderReadView(!e)];
        return e && r.unshift(t.renderDropdown()), r;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
      }, t.toggleDropdown = function(e) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
        });
      }, t.handleYearChange = function(e, r) {
        var o;
        (o = t.onSelect) === null || o === void 0 || o.call(t, e, r), t.setOpen();
      }, t.onSelect = function(e, r) {
        var o, i;
        (i = (o = t.props).onSelect) === null || i === void 0 || i.call(o, e, r);
      }, t.setOpen = function() {
        var e, r;
        (r = (e = t.props).setOpen) === null || r === void 0 || r.call(e, !0);
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return w.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(de)
), du = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], fo = "react-datepicker-ignore-onclickoutside", fu = function(n) {
  var a = (n.className || "").split(/\s+/);
  return du.some(function(t) {
    return a.indexOf(t) >= 0;
  });
}, pu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(r) {
        e.props.onClickOutside(r);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(r) {
        var o, i;
        fu(r.target) && ((i = (o = e.props).onDropdownFocus) === null || i === void 0 || i.call(o, r));
      }, e.getDateInView = function() {
        var r = e.props, o = r.preSelection, i = r.selected, s = r.openToDate, c = so(e.props), l = co(e.props), d = $(), u = s || i || o;
        return u || (c && Ne(d, c) ? c : l && je(d, l) ? l : d);
      }, e.increaseMonth = function() {
        e.setState(function(r) {
          var o = r.date;
          return {
            date: Ce(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(r) {
          var o = r.date;
          return {
            date: ct(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(r, o, i) {
        e.props.onSelect(r, o, i), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.handleDayMouseEnter = function(r) {
        e.setState({ selectingDate: r }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(r);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(r, o) {
        e.setState({ selectingDate: Pe($(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(r, o);
      }, e.handleYearMouseLeave = function(r, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(r, o);
      }, e.handleYearChange = function(r) {
        var o, i, s, c;
        (i = (o = e.props).onYearChange) === null || i === void 0 || i.call(o, r), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(r), (c = (s = e.props).setOpen) === null || c === void 0 || c.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.getEnabledPreSelectionDateForMonth = function(r) {
        if (!ke(r, e.props))
          return r;
        for (var o = Ve(r), i = Ll(r), s = zo(i, o), c = null, l = 0; l <= s; l++) {
          var d = Se(o, l);
          if (!ke(d, e.props)) {
            c = d;
            break;
          }
        }
        return c;
      }, e.handleMonthChange = function(r) {
        var o, i, s, c = (o = e.getEnabledPreSelectionDateForMonth(r)) !== null && o !== void 0 ? o : r;
        e.handleCustomMonthChange(c), e.props.adjustDateOnChange && (e.props.onSelect(c), (s = (i = e.props).setOpen) === null || s === void 0 || s.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(c);
      }, e.handleCustomMonthChange = function(r) {
        var o, i;
        (i = (o = e.props).onMonthChange) === null || i === void 0 || i.call(o, r), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(r) {
        e.handleYearChange(r), e.handleMonthChange(r);
      }, e.changeYear = function(r) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Pe(i, Number(r))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(r) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: De(i, Number(r))
          };
        }, function() {
          var o, i;
          e.handleMonthChange(e.state.date), (i = (o = e.props).onMonthSelectedInChange) === null || i === void 0 || i.call(o, 0);
        });
      }, e.changeMonthYear = function(r) {
        e.setState(function(o) {
          var i = o.date;
          return {
            date: Pe(De(i, be(r)), j(r))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(r, o) {
        if (r === void 0 && (r = e.state.date), o === void 0 && (o = 0), !ye(r))
          return [];
        var i = e.props.disabled, s = ze(r, e.props.locale, e.props.calendarStartDay), c = [];
        return e.props.showWeekNumbers && c.push(w.createElement(
          "div",
          { key: "W", className: "react-datepicker__day-name ".concat(i ? "react-datepicker__day-name--disabled" : ""), role: "columnheader" },
          w.createElement("span", { className: "react-datepicker__sr-only" }, "Week number"),
          w.createElement("span", { "aria-hidden": "true" }, e.props.weekLabel || "#")
        )), c.concat([0, 1, 2, 3, 4, 5, 6].map(function(l) {
          var d = Se(s, l), u = e.formatWeekday(d, e.props.locale), p = te(d, "EEEE", e.props.locale), f = e.props.weekDayClassName ? e.props.weekDayClassName(d) : void 0;
          if (e.props.renderCustomDayName) {
            var m = e.props.renderCustomDayName({
              day: d,
              shortName: u,
              fullName: p,
              locale: e.props.locale,
              customDayNameCount: o
            });
            return w.createElement("div", { key: l, role: "columnheader", className: ue("react-datepicker__day-name", f, i ? "react-datepicker__day-name--disabled" : "") }, m);
          }
          return w.createElement(
            "div",
            { key: l, role: "columnheader", className: ue("react-datepicker__day-name", f, i ? "react-datepicker__day-name--disabled" : "") },
            w.createElement("span", { className: "react-datepicker__sr-only" }, p),
            w.createElement("span", { "aria-hidden": "true" }, u)
          );
        }));
      }, e.formatWeekday = function(r, o) {
        return e.props.formatWeekDay ? Fl(r, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? Wl(r, o) : Al(r, o);
      }, e.decreaseYear = function() {
        e.setState(function(r) {
          var o, i = r.date;
          return {
            date: Je(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var r, o, i;
        if (!e.props.renderCustomHeader) {
          var s = (r = e.props.monthsShown) !== null && r !== void 0 ? r : a.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = ct(e.state.date, l), u;
          switch (!0) {
            case e.props.disabled:
              u = !0;
              break;
            case e.props.showMonthYearPicker:
              u = ha(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              u = Vl(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              u = Ql(e.state.date, e.props);
              break;
            default:
              u = fa(d, e.props);
              break;
          }
          if (!(!((i = e.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && u || e.props.showTimeSelectOnly)) {
            var p = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], f = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], m = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (m = e.decreaseYear), u && e.props.showDisabledMonthNavigation && (f.push("react-datepicker__navigation--previous--disabled"), m = void 0);
            var v = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, g = e.props, b = g.previousMonthButtonLabel, D = b === void 0 ? a.defaultProps.previousMonthButtonLabel : b, y = g.previousYearButtonLabel, M = y === void 0 ? a.defaultProps.previousYearButtonLabel : y, S = e.props, I = S.previousMonthAriaLabel, N = I === void 0 ? typeof D == "string" ? D : "Previous Month" : I, k = S.previousYearAriaLabel, P = k === void 0 ? typeof M == "string" ? M : "Previous Year" : k;
            return w.createElement(
              "button",
              { type: "button", className: f.join(" "), onClick: m, onKeyDown: e.props.handleOnKeyDown, "aria-label": v ? P : N },
              w.createElement("span", { className: p.join(" ") }, v ? M : D)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(r) {
          var o, i = r.date;
          return {
            date: Ee(i, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var r;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.disabled:
              o = !0;
              break;
            case e.props.showMonthYearPicker:
              o = ma(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = ql(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = jl(e.state.date, e.props);
              break;
            default:
              o = pa(e.state.date, e.props);
              break;
          }
          if (!(!((r = e.props.forceShowMonthNavigation) !== null && r !== void 0 ? r : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
            var i = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], s = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            e.props.showTimeSelect && i.push("react-datepicker__navigation--next--with-time"), e.props.todayButton && i.push("react-datepicker__navigation--next--with-today-button");
            var c = e.increaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (c = e.increaseYear), o && e.props.showDisabledMonthNavigation && (i.push("react-datepicker__navigation--next--disabled"), c = void 0);
            var l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, d = e.props, u = d.nextMonthButtonLabel, p = u === void 0 ? a.defaultProps.nextMonthButtonLabel : u, f = d.nextYearButtonLabel, m = f === void 0 ? a.defaultProps.nextYearButtonLabel : f, v = e.props, g = v.nextMonthAriaLabel, b = g === void 0 ? typeof p == "string" ? p : "Next Month" : g, D = v.nextYearAriaLabel, y = D === void 0 ? typeof m == "string" ? m : "Next Year" : D;
            return w.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": l ? y : b },
              w.createElement("span", { className: s.join(" ") }, l ? m : p)
            );
          }
        }
      }, e.renderCurrentMonth = function(r) {
        r === void 0 && (r = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), w.createElement("h2", { className: o.join(" ") }, ye(r) ? te(r, e.props.dateFormat, e.props.locale) : "");
      }, e.renderYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showYearDropdown || r))
          return w.createElement(uu, Q({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: j(e.state.date) }));
      }, e.renderMonthDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthDropdown || r))
          return w.createElement(ru, Q({}, a.defaultProps, e.props, { month: be(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthYearDropdown || r))
          return w.createElement(ou, Q({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(r) {
        e.props.onSelect(sa(), r), e.props.setPreSelection && e.props.setPreSelection(sa());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return w.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDayNamesHeader = function(r, o) {
        return o === void 0 && (o = 0), w.createElement("div", { className: "react-datepicker__day-names", role: "row" }, e.header(r, o));
      }, e.renderDefaultHeader = function(r) {
        var o = r.monthDate, i = r.i, s = w.createElement(
          "div",
          { className: ue("react-datepicker__header", {
            "react-datepicker__header--has-time-select": e.props.showTimeSelect,
            "react-datepicker__header--middle": e.props.monthHeaderPosition === "middle",
            "react-datepicker__header--bottom": e.props.monthHeaderPosition === "bottom"
          }) },
          e.renderCurrentMonth(o),
          w.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(i !== 0),
            e.renderMonthYearDropdown(i !== 0),
            e.renderYearDropdown(i !== 0)
          )
        );
        return e.props.monthHeaderPosition === "top" ? s : w.createElement(
          "div",
          { className: "react-datepicker__header-wrapper" },
          e.renderPreviousButton() || null,
          e.renderNextButton() || null,
          s
        );
      }, e.renderCustomHeader = function(r) {
        var o, i, s = r.monthDate, c = r.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var l = e.props, d = l.showYearPicker, u = l.yearItemNumber, p;
        if (d) {
          var f = Qe(s, u), m = f.startPeriod, v = f.endPeriod;
          p = {
            startYear: m,
            endYear: v
          };
        }
        var g = fa(e.state.date, e.props), b = pa(e.state.date, e.props), D = ha(e.state.date, e.props), y = ma(e.state.date, e.props);
        return w.createElement("div", { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus }, (i = (o = e.props).renderCustomHeader) === null || i === void 0 ? void 0 : i.call(o, Q(Q(Q({}, e.state), d && { visibleYearsRange: p }), { customHeaderCount: c, monthDate: s, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: g, nextMonthButtonDisabled: b, prevYearButtonDisabled: D, nextYearButtonDisabled: y })));
      }, e.renderYearHeader = function(r) {
        var o = r.monthDate, i = e.props, s = i.showYearPicker, c = i.yearItemNumber, l = c === void 0 ? a.defaultProps.yearItemNumber : c, d = Qe(o, l), u = d.startPeriod, p = d.endPeriod;
        return w.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, s ? "".concat(u, " - ").concat(p) : j(o));
      }, e.renderHeader = function(r) {
        var o = r.monthDate, i = r.i, s = i === void 0 ? 0 : i, c = { monthDate: o, i: s };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(c);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(c);
          default:
            return e.renderDefaultHeader(c);
        }
      }, e.renderMonths = function() {
        var r, o;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var i = [], s = (r = e.props.monthsShown) !== null && r !== void 0 ? r : a.defaultProps.monthsShown, c = e.props.showPreviousMonths ? s - 1 : 0, l = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? Ee(e.state.date, c) : ct(e.state.date, c), d = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, u = 0; u < s; ++u) {
            var p = u - d + c, f = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? Ee(l, p) : Ce(l, p), m = "month-".concat(u), v = u < s - 1, g = u > 0;
            i.push(w.createElement(
              "div",
              { key: m, ref: function(b) {
                e.monthContainer = b ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.props.monthHeaderPosition === "top" && e.renderHeader({ monthDate: f, i: u }),
              w.createElement(eu, Q({}, a.defaultProps, e.props, { containerRef: e.containerRef, ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: f, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: u, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: v, monthShowsDuplicateDaysStart: g, dayNamesHeader: e.renderDayNamesHeader(f, u), monthHeader: e.props.monthHeaderPosition === "middle" ? e.renderHeader({ monthDate: f, i: u }) : void 0, monthFooter: e.props.monthHeaderPosition === "bottom" ? e.renderHeader({ monthDate: f, i: u }) : void 0 }))
            ));
          }
          return i;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return w.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            w.createElement(su, Q({}, a.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return w.createElement(iu, Q({}, a.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var r, o;
        if (e.props.showTimeInput) {
          if (e.props.selectsRange) {
            var i = e.props, s = i.startDate, c = i.endDate, l = s ? new Date(s) : void 0, d = l && ye(l) && !!s, u = d ? "".concat(gt(l.getHours()), ":").concat(gt(l.getMinutes())) : "", p = c ? new Date(c) : void 0, f = p && ye(p) && !!c, m = f ? "".concat(gt(p.getHours()), ":").concat(gt(p.getMinutes())) : "";
            return w.createElement(
              w.Fragment,
              null,
              w.createElement(Qr, Q({}, a.defaultProps, e.props, { date: l, timeString: u, onChange: function(D) {
                var y, M;
                (M = (y = e.props).onTimeChange) === null || M === void 0 || M.call(y, D, "start");
              }, timeInputLabel: ((r = e.props.timeInputLabel) !== null && r !== void 0 ? r : "Time") + " (Start)" })),
              w.createElement(Qr, Q({}, a.defaultProps, e.props, { date: p, timeString: m, onChange: function(D) {
                var y, M;
                (M = (y = e.props).onTimeChange) === null || M === void 0 || M.call(y, D, "end");
              }, timeInputLabel: ((o = e.props.timeInputLabel) !== null && o !== void 0 ? o : "Time") + " (End)" }))
            );
          }
          var v = e.props.selected ? new Date(e.props.selected) : void 0, g = v && ye(v) && !!e.props.selected, b = g ? "".concat(gt(v.getHours()), ":").concat(gt(v.getMinutes())) : "";
          return w.createElement(Qr, Q({}, a.defaultProps, e.props, { date: v, timeString: b, onChange: function(D) {
            var y, M;
            (M = (y = e.props).onTimeChange) === null || M === void 0 || M.call(y, D);
          } }));
        }
      }, e.renderAriaLiveRegion = function() {
        var r;
        if (!ye(e.state.date))
          return w.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" });
        var o = Qe(e.state.date, (r = e.props.yearItemNumber) !== null && r !== void 0 ? r : a.defaultProps.yearItemNumber), i = o.startPeriod, s = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(i, " - ").concat(s) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = j(e.state.date) : c = "".concat(hn(be(e.state.date), e.props.locale), " ").concat(j(e.state.date)), w.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return w.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = Ze(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          outsideClickIgnoreClass: fo,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Bt,
          monthHeaderPosition: "top"
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, a.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && ye(this.props.preSelection) && (!q(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var r = !ge(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return r && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !q(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, a.prototype.render = function() {
      var t = this.props.container || Cl;
      return w.createElement(
        Sr,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, ignoreClass: this.props.outsideClickIgnoreClass },
        w.createElement(
          "div",
          { style: { display: "contents" }, ref: this.containerRef },
          w.createElement(
            t,
            { className: ue("react-datepicker", this.props.className, {
              "react-datepicker--time-only": this.props.showTimeSelectOnly
            }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly, inline: this.props.inline },
            this.renderAriaLiveRegion(),
            this.props.monthHeaderPosition === "top" && this.renderPreviousButton(),
            this.props.monthHeaderPosition === "top" && this.renderNextButton(),
            this.renderMonths(),
            this.renderYears(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.renderInputTimeSection(),
            this.renderChildren()
          )
        )
      );
    }, a;
  }(de)
), hu = function(n) {
  var a = n.icon, t = n.className, e = t === void 0 ? "" : t, r = n.onClick, o = "react-datepicker__calendar-icon";
  if (typeof a == "string")
    return w.createElement("i", { className: "".concat(o, " ").concat(a, " ").concat(e), "aria-hidden": "true", onClick: r });
  if (w.isValidElement(a)) {
    var i = a;
    return w.cloneElement(i, {
      className: "".concat(i.props.className || "", " ").concat(o, " ").concat(e),
      onClick: function(s) {
        typeof i.props.onClick == "function" && i.props.onClick(s), typeof r == "function" && r(s);
      }
    });
  }
  return w.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: r },
    w.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, po = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return a.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, a.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, a.prototype.render = function() {
      return Bo.createPortal(this.props.children, this.el);
    }, a;
  }(de)
), mu = "[tabindex], a, button, input, select, textarea", vu = function(n) {
  return (n instanceof HTMLAnchorElement || !n.disabled) && n.tabIndex !== -1;
}, ho = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.getTabChildren = function() {
        var r;
        return Array.prototype.slice.call((r = e.tabLoopRef.current) === null || r === void 0 ? void 0 : r.querySelectorAll(mu), 1, -1).filter(vu);
      }, e.handleFocusStart = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[r.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[0].focus();
      }, e.tabLoopRef = Ze(), e;
    }
    return a.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : a.defaultProps.enableTabLoop) ? w.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        w.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        w.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, a.defaultProps = {
      enableTabLoop: !0
    }, a;
  }(de)
);
function gu(n) {
  function a(t) {
    var e, r = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = Ur(null), i = El(Q({ open: !r, whileElementsMounted: nl, placement: t.popperPlacement, middleware: Ye([
      fl({ padding: 15 }),
      dl(10),
      // eslint-disable-next-line react-hooks/refs -- Floating UI requires refs to be passed during render
      pl({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), s = Q(Q({}, t), { hidePopper: r, popperProps: Q(Q({}, i), { arrowRef: o }) });
    return w.createElement(n, Q({}, s));
  }
  return a.displayName = "withFloating(".concat(n.displayName || n.name || "Component", ")"), a;
}
var wu = function(n) {
  var a = n.className, t = n.wrapperClassName, e = n.hidePopper, r = e === void 0 ? !0 : e, o = n.popperComponent, i = n.targetComponent, s = n.enableTabLoop, c = n.popperOnKeyDown, l = n.portalId, d = n.portalHost, u = n.popperProps, p = n.showArrow, f = n.popperTargetRef, m = n.monthHeaderPosition;
  $r(function() {
    f != null && f.current && u.refs.setPositionReference(f.current);
  }, [f, u.refs]);
  var v = void 0;
  if (!r) {
    var g = ue("react-datepicker-popper", !p && "react-datepicker-popper-offset", m === "middle" && "react-datepicker-popper--header-middle", m === "bottom" && "react-datepicker-popper--header-bottom", a);
    v = w.createElement(
      ho,
      { enableTabLoop: s },
      w.createElement(
        "div",
        { ref: u.refs.setFloating, style: u.floatingStyles, className: g, "data-placement": u.placement, onKeyDown: c },
        o,
        p && w.createElement(bl, { ref: u.arrowRef, context: u.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
      )
    );
  }
  n.popperContainer && (v = Wo(n.popperContainer, {}, v)), l && !r && (v = w.createElement(po, { portalId: l, portalHost: d }, v));
  var b = ue("react-datepicker-wrapper", t);
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("div", { ref: u.refs.setReference, className: b }, i),
    v
  );
}, yu = gu(wu);
function ka(n, a) {
  return n && a ? be(n) !== be(a) || j(n) !== j(a) : n !== a;
}
var Vr = "Date input not valid.", bu = (
  /** @class */
  function(n) {
    fe(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        var r = e.props.timeZone, o = e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : $();
        return r ? oa(o, r) : o;
      }, e.modifyHolidays = function() {
        var r;
        return (r = e.props.holidays) === null || r === void 0 ? void 0 : r.reduce(function(o, i) {
          var s = rt(i.date, "yyyy-MM-dd", void 0, !1);
          return s ? Ye(Ye([], o, !0), [Q(Q({}, i), { date: s })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var r = e.props.timeZone, o = e.getPreSelection(), i = so(e.props), s = co(e.props), c = i && Ne(o, Nt(i)) ? i : s && je(o, ca(s)) ? s : o, l = e.props.selectsRange ? e.props.startDate : e.props.selected;
        return l && r && (l = oa(l, r)), {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: l ?? c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: va(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.getInputValue = function() {
        var r, o = e.props, i = o.locale, s = o.startDate, c = o.endDate, l = o.rangeSeparator, d = o.selected, u = o.selectedDates, p = o.selectsMultiple, f = o.selectsRange, m = o.formatMultipleDates, v = o.value, g = (r = e.props.dateFormat) !== null && r !== void 0 ? r : a.defaultProps.dateFormat, b = e.state.inputValue;
        if (typeof v == "string")
          return v;
        if (typeof b == "string")
          return b;
        if (f)
          return Tl(s, c, {
            dateFormat: g,
            locale: i,
            rangeSeparator: l
          });
        if (p) {
          if (m) {
            var D = function(y) {
              return we(y, { dateFormat: g, locale: i });
            };
            return m(u ?? [], D);
          }
          return Rl(u ?? [], {
            dateFormat: g,
            locale: i
          });
        }
        return we(d, {
          dateFormat: g,
          locale: i
        });
      }, e.resetHiddenStatus = function() {
        e.setState(Q(Q({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(Q(Q({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.setFocus = function() {
        var r, o;
        (o = (r = e.input) === null || r === void 0 ? void 0 : r.focus) === null || o === void 0 || o.call(r, { preventScroll: !0 });
      }, e.setBlur = function() {
        var r, o;
        (o = (r = e.input) === null || r === void 0 ? void 0 : r.blur) === null || o === void 0 || o.call(r), e.cancelFocusInput();
      }, e.deferBlur = function() {
        requestAnimationFrame(function() {
          e.setBlur();
        });
      }, e.setOpen = function(r, o) {
        o === void 0 && (o = !1), e.setState({
          open: r,
          preSelection: r && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: qr
        }, function() {
          r || e.setState(function(i) {
            return {
              focused: o ? i.focused : !1
            };
          }, function() {
            !o && e.deferBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return Ie(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(r) {
        var o, i, s = e.state.wasHidden, c = s ? e.state.open : !0;
        s && e.resetHiddenStatus(), e.state.preventFocus || ((i = (o = e.props).onFocus) === null || i === void 0 || i.call(o, r), c && !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
      }, e.sendFocusBackToInput = function() {
        e.preventFocusTimeout && e.clearPreventFocusTimeout(), e.setState({ preventFocus: !0 }, function() {
          e.preventFocusTimeout = setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        });
      }, e.cancelFocusInput = function() {
        clearTimeout(e.inputFocusTimeout), e.inputFocusTimeout = void 0;
      }, e.deferFocusInput = function() {
        e.cancelFocusInput(), e.inputFocusTimeout = setTimeout(function() {
          return e.setFocus();
        }, 1);
      }, e.handleDropdownFocus = function() {
        e.cancelFocusInput();
      }, e.resetInputValue = function() {
        e.setState(Q(Q({}, e.state), { inputValue: null }));
      }, e.handleBlur = function(r) {
        var o, i;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((i = (o = e.props).onBlur) === null || i === void 0 || i.call(o, r));
        var s = e.state.inputValue;
        if (typeof s == "string" && s.length > 0) {
          var c = /[a-zA-Z0-9]/.test(s);
          !c && e.props.selected && e.setSelected(null, void 0, !0);
        }
        e.resetInputValue(), e.state.open && e.props.open === !1 && e.setOpen(!1), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(r) {
        var o, i;
        (i = (o = e.props).onClickOutside) === null || i === void 0 || i.call(o, r), !e.props.inline && !r.defaultPrevented && e.setOpen(!1), e.props.withPortal && r.preventDefault();
      }, e.handleChange = function() {
        for (var r, o, i, s, c, l, d, u, p = [], f = 0; f < arguments.length; f++)
          p[f] = arguments[f];
        var m = p[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, p), !m || typeof m.isDefaultPrevented != "function" || m.isDefaultPrevented()))) {
          e.setState({
            inputValue: (m == null ? void 0 : m.target) instanceof HTMLInputElement ? m.target.value : null,
            lastPreSelectChange: Du
          });
          var v = e.props, g = v.selectsRange, b = v.startDate, D = v.endDate, y = (r = e.props.dateFormat) !== null && r !== void 0 ? r : a.defaultProps.dateFormat, M = (o = e.props.strictParsing) !== null && o !== void 0 ? o : a.defaultProps.strictParsing, S = (m == null ? void 0 : m.target) instanceof HTMLInputElement ? m.target.value : "";
          if (g) {
            var I = e.props.rangeSeparator, N = I.trim(), k = S.split(y.includes(N) ? I : N, 2).map(function(W) {
              return W.trim();
            }), P = k[0], R = k[1], A = rt(P ?? "", y, e.props.locale, M), T = A ? rt(R ?? "", y, e.props.locale, M) : null, L = ((i = it(b)) === null || i === void 0 ? void 0 : i.getTime()) !== (A == null ? void 0 : A.getTime()), Y = ((s = it(D)) === null || s === void 0 ? void 0 : s.getTime()) !== (T == null ? void 0 : T.getTime());
            if (!L && !Y || A && ke(A, e.props) || T && ke(T, e.props))
              return;
            A && e.setState({ preSelection: A }), (l = (c = e.props).onChange) === null || l === void 0 || l.call(c, [A, T], m);
          } else {
            var V = rt(S, y, e.props.locale, M, (d = e.props.selected) !== null && d !== void 0 ? d : void 0);
            if (V || !S)
              e.setSelected(V, m, !0);
            else if (!e.props.inline) {
              var B = Ol(S, (u = e.state.preSelection) !== null && u !== void 0 ? u : void 0);
              B && (!e.props.minDate || !Ne(B, e.props.minDate)) && (!e.props.maxDate || !je(B, e.props.maxDate)) && e.setState({ preSelection: B });
            }
          }
        }
      }, e.handleSelect = function(r, o, i) {
        var s;
        if (!e.props.readOnly) {
          var c = e.props, l = c.selectsRange, d = c.startDate, u = c.endDate, p = c.locale, f = c.swapRange, m = (s = e.props.dateFormat) !== null && s !== void 0 ? s : a.defaultProps.dateFormat, v = !l || d && !u && (f || !Br(r, d));
          if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && v && e.sendFocusBackToInput(), e.props.onChangeRaw) {
            var g = we(r, {
              dateFormat: m,
              locale: p
            });
            e.props.onChangeRaw(o, { date: r, formattedDate: g });
          }
          e.setSelected(r, o, !1, i), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect ? e.setPreSelection(r) : v && e.setOpen(!1);
        }
      }, e.setSelected = function(r, o, i, s) {
        var c, l, d = e.props.timeZone, u = r;
        if (u && d && (u = He(u, d)), e.props.showYearPicker) {
          if (u !== null && or(j(u), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (u !== null && io(u, e.props))
            return;
        } else if (u !== null && ke(u, e.props))
          return;
        var p = e.props, f = p.onChange, m = p.selectsRange, v = p.startDate, g = p.endDate, b = p.selectsMultiple, D = p.selectedDates, y = p.minTime, M = p.swapRange;
        if (!st(e.props.selected, u) || e.props.allowSameDay || m || b)
          if (u !== null && (e.props.selected && (!i || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (u = Be(u, {
            hour: pe(e.props.selected),
            minute: he(e.props.selected),
            second: Ge(e.props.selected)
          })), !i && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && y && (u = Be(u, {
            hour: y.getHours(),
            minute: y.getMinutes(),
            second: y.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: u
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: s })), m) {
            var S = f, I = !v && !g, N = v && !g, k = !v && !!g, P = v && g;
            I ? S == null || S([u, null], o) : N ? u === null ? S == null || S([null, null], o) : Br(u, v) ? M ? S == null || S([u, v], o) : S == null || S([u, null], o) : S == null || S([v, u], o) : k && (u && Br(u, g) ? S == null || S([u, g], o) : S == null || S([u, null], o)), P && (S == null || S([u, null], o));
          } else if (b) {
            var R = f;
            if (u !== null)
              if (!(D != null && D.length))
                R == null || R([u], o);
              else {
                var A = D.some(function(L) {
                  return q(L, u);
                });
                if (A) {
                  var T = D.filter(function(L) {
                    return !q(L, u);
                  });
                  R == null || R(T, o);
                } else
                  R == null || R(Ye(Ye([], D, !0), [u], !1), o);
              }
          } else
            f == null || f(u, o);
        i || ((l = (c = e.props).onSelect) === null || l === void 0 || l.call(c, u, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(r) {
        if (!e.props.readOnly) {
          var o = Ie(e.props.minDate), i = Ie(e.props.maxDate), s = !0;
          if (r) {
            var c = Nt(r);
            if (o && i)
              s = at(r, e.props.minDate, e.props.maxDate);
            else if (o) {
              var l = Nt(e.props.minDate);
              s = je(r, l) || st(c, l);
            } else if (i) {
              var d = ca(e.props.maxDate);
              s = Ne(r, d) || st(c, d);
            }
          }
          s && e.setState({
            preSelection: r
          });
        }
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(r, o) {
        var i, s;
        if (!e.props.selectsMultiple) {
          var c = e.props, l = c.selectsRange, d = c.startDate, u = c.endDate, p = c.onChange, f = c.timeZone;
          if (l) {
            var m = p;
            if (o === "start") {
              if (d) {
                var v = Be(d, {
                  hour: pe(r),
                  minute: he(r)
                });
                e.setState({
                  preSelection: v
                }), f && (v = He(v, f)), m == null || m([
                  v,
                  u ? f ? He(u, f) : u : null
                ], void 0);
              }
            } else if (o === "end") {
              if (u) {
                var g = Be(u, {
                  hour: pe(r),
                  minute: he(r)
                });
                e.setState({
                  preSelection: g
                }), f && (g = He(g, f)), m == null || m([
                  d ? f ? He(d, f) : d : null,
                  g
                ], void 0);
              }
            } else {
              var b = d && !u;
              if (b) {
                var v = Be(d, {
                  hour: pe(r),
                  minute: he(r)
                });
                e.setState({
                  preSelection: v
                }), f && (v = He(v, f)), m == null || m([v, null], void 0);
              } else if (d && u) {
                var g = Be(u, {
                  hour: pe(r),
                  minute: he(r)
                });
                e.setState({
                  preSelection: g
                }), f && (g = He(g, f)), m == null || m([
                  f ? He(d, f) : d,
                  g
                ], void 0);
              } else {
                var D = Be(e.getPreSelection(), {
                  hour: pe(r),
                  minute: he(r)
                });
                e.setState({
                  preSelection: D
                });
              }
            }
          } else {
            var y = e.props.selected ? e.props.selected : e.getPreSelection(), D = e.props.selected ? r : Be(y, {
              hour: pe(r),
              minute: he(r)
            });
            e.setState({
              preSelection: D
            }), D && f && (D = He(D, f)), (s = (i = e.props).onChange) === null || s === void 0 || s.call(i, D);
          }
          e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var r, o;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (o = (r = e.props).onInputClick) === null || o === void 0 || o.call(r);
      }, e.handleTimeOnlyArrowKey = function(r) {
        var o, i, s, c, l = it(e.props.selected) || e.state.preSelection || $(), d = (o = e.props.timeIntervals) !== null && o !== void 0 ? o : 30, u = (i = e.props.dateFormat) !== null && i !== void 0 ? i : a.defaultProps.dateFormat, p = Array.isArray(u) ? u[0] : u, f = Nt(l), m = pe(l) * 60 + he(l), v = 23 * 60 + 60 - d, g;
        if (r === x.ArrowUp) {
          var b = Math.max(0, m - d);
          g = It(f, b);
        } else {
          var b = Math.min(v, m + d);
          g = It(f, b);
        }
        var D = te(g, p || a.defaultProps.dateFormat, e.props.locale);
        if (e.setState({
          preSelection: g,
          inputValue: D
        }), !(e.props.selectsRange || e.props.selectsMultiple)) {
          var y = e.props.selected ? e.props.selected : e.getPreSelection(), M = e.props.selected ? g : Be(y, {
            hour: pe(g),
            minute: he(g)
          });
          (c = (s = e.props).onChange) === null || c === void 0 || c.call(s, M), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), requestAnimationFrame(function() {
            e.scrollToTimeOption(g);
          });
        }
      }, e.handleTimeOnlyEnterKey = function(r) {
        var o, i, s, c, l = r.target, d = l.value, u = (o = e.props.dateFormat) !== null && o !== void 0 ? o : a.defaultProps.dateFormat, p = e.props.timeFormat || "p", f = e.state.preSelection || it(e.props.selected) || $(), m = rt(d, u, e.props.locale, (i = e.props.strictParsing) !== null && i !== void 0 ? i : !1, f), v = f;
        if (m && ye(m))
          v = m;
        else {
          var g = ((s = e.calendar) === null || s === void 0 ? void 0 : s.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(".react-datepicker__time-list-item[tabindex='0']");
          if (g instanceof HTMLElement) {
            var b = (c = g.textContent) === null || c === void 0 ? void 0 : c.trim();
            if (b) {
              var D = rt(b, p, e.props.locale, !1, f);
              D && ye(D) && (v = D);
            }
          }
        }
        e.handleTimeChange(v), e.setOpen(!1), e.sendFocusBackToInput();
      }, e.scrollToTimeOption = function(r) {
        var o, i;
        if (!((o = e.calendar) === null || o === void 0) && o.containerRef.current) {
          for (var s = e.calendar.containerRef.current, c = Array.from(s.querySelectorAll(".react-datepicker__time-list-item")), l = null, d = 1 / 0, u = e.props.timeFormat || "p", p = 0, f = c; p < f.length; p++) {
            var m = f[p], v = (i = m.textContent) === null || i === void 0 ? void 0 : i.trim();
            if (v) {
              var g = rt(v, u, e.props.locale, !1, r);
              if (g && ye(g)) {
                if (lo(g, r)) {
                  l = m;
                  break;
                }
                var b = Math.abs(g.getTime() - r.getTime());
                b < d && (d = b, l = m);
              }
            }
          }
          l && (c.forEach(function(D) {
            D.setAttribute("tabindex", "-1");
          }), l.setAttribute("tabindex", "0"), l.scrollIntoView({
            behavior: "smooth",
            block: "center"
          }));
        }
      }, e.onInputKeyDown = function(r) {
        var o, i, s, c, l, d;
        (i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, r);
        var u = r.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (u === x.ArrowDown || u === x.ArrowUp || u === x.Enter) && ((s = e.onInputClick) === null || s === void 0 || s.call(e));
          return;
        }
        if (e.state.open && e.props.showTimeSelectOnly) {
          if (u === x.ArrowDown || u === x.ArrowUp) {
            r.preventDefault(), e.handleTimeOnlyArrowKey(u);
            return;
          }
          if (u === x.Enter) {
            r.preventDefault(), e.handleTimeOnlyEnterKey(r);
            return;
          }
        }
        if (e.state.open) {
          if (u === x.ArrowDown || u === x.ArrowUp) {
            r.preventDefault();
            var p = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', f = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(p);
            f instanceof HTMLElement && f.focus({ preventScroll: !0 });
            return;
          }
          var m = $(e.state.preSelection);
          u === x.Enter ? (r.preventDefault(), r.target.blur(), e.inputOk() && e.state.lastPreSelectChange === qr ? (e.handleSelect(m, r), !e.props.shouldCloseOnSelect && e.setPreSelection(m)) : e.setOpen(!1)) : u === x.Escape ? (r.preventDefault(), r.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : u === x.Tab && e.setOpen(!1), e.inputOk() || (d = (l = e.props).onInputError) === null || d === void 0 || d.call(l, { code: 1, msg: Vr });
        }
      }, e.onPortalKeyDown = function(r) {
        var o = r.key;
        o === x.Escape && (r.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(r) {
        var o, i, s, c, l, d, u = e.props, p = u.minDate, f = u.maxDate, m = u.disabledKeyboardNavigation, v = u.showWeekPicker, g = u.shouldCloseOnSelect, b = u.locale, D = u.calendarStartDay, y = u.adjustDateOnChange, M = u.inline;
        if ((i = (o = e.props).onKeyDown) === null || i === void 0 || i.call(o, r), !m) {
          var S = r.key, I = r.shiftKey, N = $(e.state.preSelection), k = function(A, T) {
            var L = T;
            switch (A) {
              case x.ArrowRight:
                L = v ? sr(T, 1) : Se(T, 1);
                break;
              case x.ArrowLeft:
                L = v ? Kn(T) : zs(T);
                break;
              case x.ArrowUp:
                L = Kn(T);
                break;
              case x.ArrowDown:
                L = sr(T, 1);
                break;
              case x.PageUp:
                L = I ? Je(T, 1) : ct(T, 1);
                break;
              case x.PageDown:
                L = I ? Ee(T, 1) : Ce(T, 1);
                break;
              case x.Home:
                L = ze(T, b, D);
                break;
              case x.End:
                L = Il(T);
                break;
            }
            return L;
          }, P = function(A, T) {
            for (var L = 40, Y = A, V = !1, B = 0, W = k(A, T); !V; ) {
              if (B >= L) {
                W = T;
                break;
              }
              p && W < p && (Y = x.ArrowRight, W = ke(p, e.props) ? k(Y, W) : p), f && W > f && (Y = x.ArrowLeft, W = ke(f, e.props) ? k(Y, W) : f), ke(W, e.props) ? ((Y === x.PageUp || Y === x.Home) && (Y = x.ArrowRight), (Y === x.PageDown || Y === x.End) && (Y = x.ArrowLeft), W = k(Y, W)) : V = !0, B++;
            }
            return W;
          };
          if (S === x.Enter) {
            r.preventDefault(), e.handleSelect(N, r), !g && e.setPreSelection(N);
            return;
          } else if (S === x.Escape) {
            r.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (s = e.props).onInputError) === null || c === void 0 || c.call(s, { code: 1, msg: Vr });
            return;
          }
          var R = null;
          switch (S) {
            case x.ArrowLeft:
            case x.ArrowRight:
            case x.ArrowUp:
            case x.ArrowDown:
            case x.PageUp:
            case x.PageDown:
            case x.Home:
            case x.End:
              R = P(S, N);
              break;
          }
          if (!R) {
            (d = (l = e.props).onInputError) === null || d === void 0 || d.call(l, { code: 1, msg: Vr });
            return;
          }
          r.preventDefault(), e.setState({ lastPreSelectChange: qr }), y && e.setSelected(R), e.setPreSelection(R), M && e.setState({ shouldFocusDayInline: !0 });
        }
      }, e.onPopperKeyDown = function(r) {
        var o = r.key;
        o === x.Escape && (r.preventDefault(), e.sendFocusBackToInput(), e.setOpen(!1));
      }, e.onClearClick = function(r) {
        r && r.preventDefault && r.preventDefault(), e.sendFocusBackToInput();
        var o = e.props, i = o.selectsRange, s = o.onChange;
        i ? s == null || s([null, null], r) : s == null || s(null, r), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(r) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (r.target === document || r.target === document.documentElement || r.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(r) && e.setOpen(!1);
      }, e.handleMonthSelectedInChange = function(r) {
        e.setState({ monthSelectedIn: r });
      }, e.renderCalendar = function() {
        var r, o;
        return !e.props.inline && !e.isCalendarOpen() ? null : w.createElement(pu, Q({ showMonthYearDropdown: void 0, ref: function(i) {
          e.calendar = i;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (r = e.props.dateFormatCalendar) !== null && r !== void 0 ? r : a.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: Ul(e.modifyHolidays()), outsideClickIgnoreClass: e.props.outsideClickIgnoreClass, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : a.defaultProps.dropdownMode, onMonthSelectedInChange: e.handleMonthSelectedInChange }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var r, o = e.props.locale, i = (r = e.props.dateFormat) !== null && r !== void 0 ? r : a.defaultProps.dateFormat, s = e.props.showTimeInput || e.props.showTimeSelect, c = s ? "PPPPp" : "PPPP", l;
        return e.props.selectsRange ? l = "Selected start date: ".concat(we(e.props.startDate, {
          dateFormat: c,
          locale: o
        }), ". ").concat(e.props.endDate ? "End date: " + we(e.props.endDate, {
          dateFormat: c,
          locale: o
        }) : "") : e.props.showTimeSelectOnly ? l = "Selected time: ".concat(we(e.props.selected, { dateFormat: i, locale: o })) : e.props.showYearPicker ? l = "Selected year: ".concat(we(e.props.selected, { dateFormat: "yyyy", locale: o })) : e.props.showMonthYearPicker ? l = "Selected month: ".concat(we(e.props.selected, { dateFormat: "MMMM yyyy", locale: o })) : e.props.showQuarterYearPicker ? l = "Selected quarter: ".concat(we(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: o
        })) : l = "Selected date: ".concat(we(e.props.selected, {
          dateFormat: c,
          locale: o
        })), w.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, l);
      }, e.renderDateInput = function() {
        var r, o, i, s, c, l, d, u = ue(e.props.className, (r = {}, r[e.props.outsideClickIgnoreClass || a.defaultProps.outsideClickIgnoreClass] = e.state.open, r)), p = e.props.customInput || w.createElement("input", { type: "text" }), f = e.props.customInputRef || "ref", m = {}, v = (i = e.props["aria-describedby"]) !== null && i !== void 0 ? i : e.props.ariaDescribedBy, g = (s = e.props["aria-invalid"]) !== null && s !== void 0 ? s : e.props.ariaInvalid, b = (c = e.props["aria-label"]) !== null && c !== void 0 ? c : e.props.ariaLabel, D = (l = e.props["aria-labelledby"]) !== null && l !== void 0 ? l : e.props.ariaLabelledBy, y = (d = e.props["aria-required"]) !== null && d !== void 0 ? d : e.props.ariaRequired;
        return v != null && (m["aria-describedby"] = v), g != null && (m["aria-invalid"] = g), b != null && (m["aria-label"] = b), D != null && (m["aria-labelledby"] = D), y != null && (m["aria-required"] = y), Sa(p, Q((o = {}, o[f] = function(M) {
          e.input = M;
        }, o.value = e.getInputValue(), o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = ue(p.props.className, u), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o), m));
      }, e.renderClearButton = function() {
        var r = e.props, o = r.isClearable, i = r.disabled, s = r.selected, c = r.startDate, l = r.endDate, d = r.clearButtonTitle, u = r.clearButtonClassName, p = u === void 0 ? "" : u, f = r.ariaLabelClose, m = f === void 0 ? "Close" : f, v = r.selectedDates, g = r.readOnly;
        return o && !g && (s != null || c != null || l != null || v != null && v.length) ? w.createElement("button", { type: "button", className: ue("react-datepicker__close-icon", p, { "react-datepicker__close-icon--disabled": i }), disabled: i, "aria-label": m, onClick: e.onClearClick, title: d, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          preventOpenOnFocus: !1,
          monthsShown: 1,
          outsideClickIgnoreClass: fo,
          readOnly: !1,
          rangeSeparator: ao,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: Bt,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.componentDidUpdate = function(t, e) {
      var r, o, i, s;
      this.props.selectsRange && ka(t.startDate, this.props.startDate) ? this.setPreSelection(this.props.startDate) : ka(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), this.props.selectsRange && e.open === !1 && this.state.open === !0 && this.state.monthSelectedIn !== 0 && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: va(this.props.highlightDates)
      }), !e.focused && !st(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (r = this.props).onCalendarOpen) === null || o === void 0 || o.call(r)), e.open === !0 && this.state.open === !1 && ((s = (i = this.props).onCalendarClose) === null || s === void 0 || s.call(i)));
    }, a.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, r = t.icon, o = t.calendarIconClassname, i = t.calendarIconClassName, s = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), w.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && w.createElement(hu, Q({ icon: r, className: ue(i, !i && o, c && "react-datepicker-ignore-onclickoutside") }, s ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, a.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? w.createElement(
          ho,
          { enableTabLoop: this.props.enableTabLoop },
          w.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = w.createElement(po, Q({ portalId: this.props.portalId }, this.props), e)), w.createElement(
          w.Fragment,
          null,
          this.renderInputContainer(),
          e
        );
      }
      return w.createElement(yu, Q({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow, monthHeaderPosition: this.props.monthHeaderPosition }));
    }, a;
  }(de)
), Du = "input", qr = "navigate";
function xa() {
  return /* @__PURE__ */ re.jsx(
    bu,
    {
      selected: /* @__PURE__ */ new Date()
    }
  );
}
function _u({ validObj: n }) {
  return (n == null ? void 0 : n.isInvalid) === !0 && /* @__PURE__ */ re.jsx("div", { className: "fld-error", children: n == null ? void 0 : n.message });
}
function Kr({ name: n, title: a, value: t, onChange: e, valid: r, removeHeadWrapper: o, validType: i, infoText: s, addPrefixText: c, labelInfoComponent: l, pattern: d, subTitle: u, ...p }) {
  const f = (v) => (v && i === "number" ? v = v.replace(/[^0-9]/g, "") : i === "float" ? v = v.replace(/[^0-9.]/g, "") : i === "float2" ? v = v.replace(/[^0-9.]/g, "").replace(/^(\d*\.?\d{0,2}).*$/, "$1") : i === "regex" && d && (v = v.replace(d, "")), v), m = /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
    /* @__PURE__ */ re.jsxs("label", { children: [
      a,
      l
    ] }),
    u && /* @__PURE__ */ re.jsx("p", { className: "fld-subtitle", children: u }),
    /* @__PURE__ */ re.jsx(
      "input",
      {
        type: "text",
        className: "form-control",
        name: n,
        value: t,
        onChange: (v) => {
          e && (v.target.value = f(v.target.value), e(v));
        },
        onBlur: (v) => {
          e && (v.target.value = v.target.value.trim(), e(v));
        },
        ...p
      }
    ),
    c && /* @__PURE__ */ re.jsx("span", { className: "prefix-text", children: c }),
    s && /* @__PURE__ */ re.jsx("div", { className: "fld-info", children: s }),
    /* @__PURE__ */ re.jsx(_u, { validObj: r })
  ] });
  return o ? m : /* @__PURE__ */ re.jsx("div", { className: `form-group ${c ? "form-group-prefix" : ""}`, children: m });
}
function Su({ formFld: n, handleOnChange: a, validMsg: t }) {
  return /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
    /* @__PURE__ */ re.jsx(Kr, { name: "concession_card_number", value: n.concession_card_number, onChange: a, valid: t.concession_card_number, title: "Card number" }),
    /* @__PURE__ */ re.jsx(Kr, { name: "concession_card_holder", value: n.concession_card_holder, onChange: a, valid: t.concession_card_holder, title: "Card Holder Name" }),
    /* @__PURE__ */ re.jsx(xa, { name: "concession_issued", value: n.concession_issued, onChange: a, valid: t.concession_issued, title: "Issued", maxDate: /* @__PURE__ */ new Date() }),
    /* @__PURE__ */ re.jsx(xa, { minDate: /* @__PURE__ */ new Date(), name: "concession_expiry", value: n.concession_expiry, onChange: a, valid: t.concession_expiry, title: "Expiry" }),
    /* @__PURE__ */ re.jsx(Kr, { name: "concession_address", value: n.service_address, readOnly: !0, valid: t.concession_address, title: "Concession Card Address" })
  ] });
}
export {
  Su as ConcessionForm
};
