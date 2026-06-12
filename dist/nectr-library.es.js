import Te from "react";
var X = { exports: {} }, Y = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var z, Pe;
function Se() {
  if (Pe) return z;
  Pe = 1;
  var s = Object.getOwnPropertySymbols, y = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
  function j(R) {
    if (R == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(R);
  }
  function S() {
    try {
      if (!Object.assign)
        return !1;
      var R = new String("abc");
      if (R[5] = "de", Object.getOwnPropertyNames(R)[0] === "5")
        return !1;
      for (var m = {}, f = 0; f < 10; f++)
        m["_" + String.fromCharCode(f)] = f;
      var l = Object.getOwnPropertyNames(m).map(function(o) {
        return m[o];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(o) {
        g[o] = o;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return z = S() ? Object.assign : function(R, m) {
    for (var f, l = j(R), g, o = 1; o < arguments.length; o++) {
      f = Object(arguments[o]);
      for (var b in f)
        y.call(f, b) && (l[b] = f[b]);
      if (s) {
        g = s(f);
        for (var h = 0; h < g.length; h++)
          E.call(f, g[h]) && (l[g[h]] = f[g[h]]);
      }
    }
    return l;
  }, z;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function ar() {
  if (ye) return Y;
  ye = 1, Se();
  var s = Te, y = 60103;
  if (Y.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var E = Symbol.for;
    y = E("react.element"), Y.Fragment = E("react.fragment");
  }
  var j = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = Object.prototype.hasOwnProperty, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(f, l, g) {
    var o, b = {}, h = null, w = null;
    g !== void 0 && (h = "" + g), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (o in l) S.call(l, o) && !R.hasOwnProperty(o) && (b[o] = l[o]);
    if (f && f.defaultProps) for (o in l = f.defaultProps, l) b[o] === void 0 && (b[o] = l[o]);
    return { $$typeof: y, type: f, key: h, ref: w, props: b, _owner: j.current };
  }
  return Y.jsx = m, Y.jsxs = m, Y;
}
var H = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function ir() {
  return we || (we = 1, function(s) {
    process.env.NODE_ENV !== "production" && function() {
      var y = Te, E = Se(), j = 60103, S = 60106;
      s.Fragment = 60107;
      var R = 60108, m = 60114, f = 60109, l = 60110, g = 60112, o = 60113, b = 60120, h = 60115, w = 60116, D = 60121, d = 60122, Z = 60117, Q = 60129, ee = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var p = Symbol.for;
        j = p("react.element"), S = p("react.portal"), s.Fragment = p("react.fragment"), R = p("react.strict_mode"), m = p("react.profiler"), f = p("react.provider"), l = p("react.context"), g = p("react.forward_ref"), o = p("react.suspense"), b = p("react.suspense_list"), h = p("react.memo"), w = p("react.lazy"), D = p("react.block"), d = p("react.server.block"), Z = p("react.fundamental"), p("react.scope"), p("react.opaque.id"), Q = p("react.debug_trace_mode"), p("react.offscreen"), ee = p("react.legacy_hidden");
      }
      var re = typeof Symbol == "function" && Symbol.iterator, Ae = "@@iterator";
      function De(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = re && e[re] || e[Ae];
        return typeof r == "function" ? r : null;
      }
      var k = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function P(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          ke("error", e, t);
        }
      }
      function ke(e, r, t) {
        {
          var n = k.ReactDebugCurrentFrame, c = n.getStackAddendum();
          c !== "" && (r += "%s", t = t.concat([c]));
          var u = t.map(function(i) {
            return "" + i;
          });
          u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
        }
      }
      var Ie = !1;
      function $e(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === s.Fragment || e === m || e === Q || e === R || e === o || e === b || e === ee || Ie || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === h || e.$$typeof === f || e.$$typeof === l || e.$$typeof === g || e.$$typeof === Z || e.$$typeof === D || e[0] === d));
      }
      function Ye(e, r, t) {
        var n = r.displayName || r.name || "";
        return e.displayName || (n !== "" ? t + "(" + n + ")" : t);
      }
      function te(e) {
        return e.displayName || "Context";
      }
      function A(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case s.Fragment:
            return "Fragment";
          case S:
            return "Portal";
          case m:
            return "Profiler";
          case R:
            return "StrictMode";
          case o:
            return "Suspense";
          case b:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l:
              var r = e;
              return te(r) + ".Consumer";
            case f:
              var t = e;
              return te(t._context) + ".Provider";
            case g:
              return Ye(e, e.render, "ForwardRef");
            case h:
              return A(e.type);
            case D:
              return A(e._render);
            case w: {
              var n = e, c = n._payload, u = n._init;
              try {
                return A(u(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var N = 0, ne, ae, ie, oe, ue, ce, se;
      function fe() {
      }
      fe.__reactDisabledLog = !0;
      function Ne() {
        {
          if (N === 0) {
            ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, ce = console.groupCollapsed, se = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: fe,
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
          N++;
        }
      }
      function We() {
        {
          if (N--, N === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: E({}, e, {
                value: ne
              }),
              info: E({}, e, {
                value: ae
              }),
              warn: E({}, e, {
                value: ie
              }),
              error: E({}, e, {
                value: oe
              }),
              group: E({}, e, {
                value: ue
              }),
              groupCollapsed: E({}, e, {
                value: ce
              }),
              groupEnd: E({}, e, {
                value: se
              })
            });
          }
          N < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var U = k.ReactCurrentDispatcher, B;
      function W(e, r, t) {
        {
          if (B === void 0)
            try {
              throw Error();
            } catch (c) {
              var n = c.stack.trim().match(/\n( *(at )?)/);
              B = n && n[1] || "";
            }
          return `
` + B + e;
        }
      }
      var M = !1, F;
      {
        var Fe = typeof WeakMap == "function" ? WeakMap : Map;
        F = new Fe();
      }
      function le(e, r) {
        if (!e || M)
          return "";
        {
          var t = F.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        M = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var u;
        u = U.current, U.current = null, Ne();
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
              } catch (T) {
                n = T;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (T) {
                n = T;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (T) {
              n = T;
            }
            e();
          }
        } catch (T) {
          if (T && n && typeof T.stack == "string") {
            for (var a = T.stack.split(`
`), O = n.stack.split(`
`), v = a.length - 1, _ = O.length - 1; v >= 1 && _ >= 0 && a[v] !== O[_]; )
              _--;
            for (; v >= 1 && _ >= 0; v--, _--)
              if (a[v] !== O[_]) {
                if (v !== 1 || _ !== 1)
                  do
                    if (v--, _--, _ < 0 || a[v] !== O[_]) {
                      var C = `
` + a[v].replace(" at new ", " at ");
                      return typeof e == "function" && F.set(e, C), C;
                    }
                  while (v >= 1 && _ >= 0);
                break;
              }
          }
        } finally {
          M = !1, U.current = u, We(), Error.prepareStackTrace = c;
        }
        var $ = e ? e.displayName || e.name : "", je = $ ? W($) : "";
        return typeof e == "function" && F.set(e, je), je;
      }
      function de(e, r, t) {
        return le(e, !1);
      }
      function Le(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function L(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return le(e, Le(e));
        if (typeof e == "string")
          return W(e);
        switch (e) {
          case o:
            return W("Suspense");
          case b:
            return W("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case g:
              return de(e.render);
            case h:
              return L(e.type, r, t);
            case D:
              return de(e._render);
            case w: {
              var n = e, c = n._payload, u = n._init;
              try {
                return L(u(c), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var ve = {}, pe = k.ReactDebugCurrentFrame;
      function V(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          pe.setExtraStackFrame(t);
        } else
          pe.setExtraStackFrame(null);
      }
      function Ve(e, r, t, n, c) {
        {
          var u = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var i in e)
            if (u(e, i)) {
              var a = void 0;
              try {
                if (typeof e[i] != "function") {
                  var O = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw O.name = "Invariant Violation", O;
                }
                a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (v) {
                a = v;
              }
              a && !(a instanceof Error) && (V(c), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, V(c), P("Failed %s type: %s", t, a.message), V(null));
            }
        }
      }
      var _e = k.ReactCurrentOwner, q = Object.prototype.hasOwnProperty, Ue = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ge, Ee;
      function Be(e) {
        if (q.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Me(e) {
        if (q.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function qe(e, r) {
        typeof e.ref == "string" && _e.current;
      }
      function Ge(e, r) {
        {
          var t = function() {
            ge || (ge = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function Je(e, r) {
        {
          var t = function() {
            Ee || (Ee = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var Ke = function(e, r, t, n, c, u, i) {
        var a = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: j,
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
          value: c
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function ze(e, r, t, n, c) {
        {
          var u, i = {}, a = null, O = null;
          t !== void 0 && (a = "" + t), Me(r) && (a = "" + r.key), Be(r) && (O = r.ref, qe(r, c));
          for (u in r)
            q.call(r, u) && !Ue.hasOwnProperty(u) && (i[u] = r[u]);
          if (e && e.defaultProps) {
            var v = e.defaultProps;
            for (u in v)
              i[u] === void 0 && (i[u] = v[u]);
          }
          if (a || O) {
            var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && Ge(i, _), O && Je(i, _);
          }
          return Ke(e, a, O, c, n, _e.current, i);
        }
      }
      var G = k.ReactCurrentOwner, he = k.ReactDebugCurrentFrame;
      function I(e) {
        if (e) {
          var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
          he.setExtraStackFrame(t);
        } else
          he.setExtraStackFrame(null);
      }
      var J;
      J = !1;
      function K(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
      }
      function Re() {
        {
          if (G.current) {
            var e = A(G.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function He(e) {
        return "";
      }
      var me = {};
      function Xe(e) {
        {
          var r = Re();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function be(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = Xe(r);
          if (me[t])
            return;
          me[t] = !0;
          var n = "";
          e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + A(e._owner.type) + "."), I(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
        }
      }
      function Oe(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              K(n) && be(n, r);
            }
          else if (K(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = De(e);
            if (typeof c == "function" && c !== e.entries)
              for (var u = c.call(e), i; !(i = u.next()).done; )
                K(i.value) && be(i.value, r);
          }
        }
      }
      function Ze(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === h))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = A(r);
            Ve(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !J) {
            J = !0;
            var c = A(r);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qe(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              I(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
              break;
            }
          }
          e.ref !== null && (I(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
        }
      }
      function xe(e, r, t, n, c, u) {
        {
          var i = $e(e);
          if (!i) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var O = He();
            O ? a += O : a += Re();
            var v;
            e === null ? v = "null" : Array.isArray(e) ? v = "array" : e !== void 0 && e.$$typeof === j ? (v = "<" + (A(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
          }
          var _ = ze(e, r, t, c, u);
          if (_ == null)
            return _;
          if (i) {
            var C = r.children;
            if (C !== void 0)
              if (n)
                if (Array.isArray(C)) {
                  for (var $ = 0; $ < C.length; $++)
                    Oe(C[$], e);
                  Object.freeze && Object.freeze(C);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Oe(C, e);
          }
          return e === s.Fragment ? Qe(_) : Ze(_), _;
        }
      }
      function er(e, r, t) {
        return xe(e, r, t, !0);
      }
      function rr(e, r, t) {
        return xe(e, r, t, !1);
      }
      var tr = rr, nr = er;
      s.jsx = tr, s.jsxs = nr;
    }();
  }(H)), H;
}
process.env.NODE_ENV === "production" ? X.exports = ar() : X.exports = ir();
var x = X.exports;
function or({ validObj: s }) {
  return (s == null ? void 0 : s.isInvalid) === !0 && /* @__PURE__ */ x.jsx("div", { className: "fld-error", children: s == null ? void 0 : s.message });
}
function Ce({ name: s, title: y, value: E, onChange: j, valid: S, removeHeadWrapper: R, validType: m, infoText: f, addPrefixText: l, labelInfoComponent: g, pattern: o, subTitle: b, ...h }) {
  const w = (d) => (d && m === "number" ? d = d.replace(/[^0-9]/g, "") : m === "float" ? d = d.replace(/[^0-9.]/g, "") : m === "float2" ? d = d.replace(/[^0-9.]/g, "").replace(/^(\d*\.?\d{0,2}).*$/, "$1") : m === "regex" && o && (d = d.replace(o, "")), d), D = /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs("label", { children: [
      y,
      g
    ] }),
    b && /* @__PURE__ */ x.jsx("p", { className: "fld-subtitle", children: b }),
    /* @__PURE__ */ x.jsx(
      "input",
      {
        type: "text",
        className: "form-control",
        name: s,
        value: E,
        onChange: (d) => {
          j && (d.target.value = w(d.target.value), j(d));
        },
        onBlur: (d) => {
          j && (d.target.value = d.target.value.trim(), j(d));
        },
        ...h
      }
    ),
    l && /* @__PURE__ */ x.jsx("span", { className: "prefix-text", children: l }),
    f && /* @__PURE__ */ x.jsx("div", { className: "fld-info", children: f }),
    /* @__PURE__ */ x.jsx(or, { validObj: S })
  ] });
  return R ? D : /* @__PURE__ */ x.jsx("div", { className: `form-group ${l ? "form-group-prefix" : ""}`, children: D });
}
function cr({ formFld: s, handleOnChange: y, validMsg: E }) {
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(Ce, { name: "concession_card_number", value: s.concession_card_number, onChange: y, valid: E.concession_card_number, title: "Card number" }),
    /* @__PURE__ */ x.jsx(Ce, { name: "concession_card_holder", value: s.concession_card_holder, onChange: y, valid: E.concession_card_holder, title: "Card Holder Name" })
  ] });
}
export {
  cr as ConcessionForm
};
