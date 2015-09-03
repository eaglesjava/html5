var getQuerySting, getQueryData, didi, Zepto = function() {
	function a(a) {
		return null == a ? String(a) : U[V.call(a)] || "object"
	}

	function b(b) {
		return "function" == a(b)
	}

	function c(a) {
		return null != a && a == a.window
	}

	function d(a) {
		return null != a && a.nodeType == a.DOCUMENT_NODE
	}

	function e(b) {
		return "object" == a(b)
	}

	function f(a) {
		return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
	}

	function g(a) {
		return "number" == typeof a.length
	}

	function h(a) {
		return D.call(a, function(a) {
			return null != a
		})
	}

	function i(a) {
		return a.length > 0 ? x.fn.concat.apply([], a) : a
	}

	function j(a) {
		return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function k(a) {
		return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
	}

	function l(a, b) {
		return "number" != typeof b || H[j(a)] ? b : b + "px"
	}

	function m(a) {
		var b, c;
		return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c), F[a]
	}

	function n(a) {
		return "children" in a ? C.call(a.children) : x.map(a.childNodes, function(a) {
			return 1 == a.nodeType ? a : void 0
		})
	}

	function o(a, b, c) {
		for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
	}

	function p(a, b) {
		return null == b ? x(a) : x(a).filter(b)
	}

	function q(a, c, d, e) {
		return b(c) ? c.call(a, d, e) : c
	}

	function r(a, b, c) {
		null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
	}

	function s(a, b) {
		var c = a.className || "",
			d = c && c.baseVal !== v;
		return b === v ? d ? c.baseVal : c : void(d ? c.baseVal = b : a.className = b)
	}

	function t(a) {
		try {
			return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : +a + "" == a ? +a : /^[\[\{]/.test(a) ? x.parseJSON(a) : a) : a
		} catch (b) {
			return a
		}
	}

	function u(a, b) {
		b(a);
		for (var c = 0, d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b)
	}
	var v, w, x, y, z, A, B = [],
		C = B.slice,
		D = B.filter,
		E = window.document,
		F = {},
		G = {},
		H = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		I = /^\s*<(\w+|!)[^>]*>/,
		J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		L = /^(?:body|html)$/i,
		M = /([A-Z])/g,
		N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		O = ["after", "prepend", "before", "append"],
		P = E.createElement("table"),
		Q = E.createElement("tr"),
		R = {
			tr: E.createElement("tbody"),
			tbody: P,
			thead: P,
			tfoot: P,
			td: Q,
			th: Q,
			"*": E.createElement("div")
		},
		S = /complete|loaded|interactive/,
		T = /^[\w-]*$/,
		U = {},
		V = U.toString,
		W = {},
		X = E.createElement("div"),
		Y = {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		Z = Array.isArray || function(a) {
			return a instanceof Array
		};
	return W.matches = function(a, b) {
		var c, d, e, f;
		return b && a && 1 === a.nodeType ? (c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector) ? c.call(a, b) : (e = a.parentNode, f = !e, f && (e = X).appendChild(a), d = ~W.qsa(e, b).indexOf(a), f && X.removeChild(a), d) : !1
	}, z = function(a) {
		return a.replace(/-+(.)?/g, function(a, b) {
			return b ? b.toUpperCase() : ""
		})
	}, A = function(a) {
		return D.call(a, function(b, c) {
			return a.indexOf(b) == c
		})
	}, W.fragment = function(a, b, c) {
		var d, e, g;
		return J.test(a) && (d = x(E.createElement(RegExp.$1))), d || (a.replace && (a = a.replace(K, "<$1></$2>")), b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, d = x.each(C.call(g.childNodes), function() {
			g.removeChild(this)
		})), f(c) && (e = x(d), x.each(c, function(a, b) {
			N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
		})), d
	}, W.Z = function(a, b) {
		return a = a || [], a.__proto__ = x.fn, a.selector = b || "", a
	}, W.isZ = function(a) {
		return a instanceof W.Z
	}, W.init = function(a, c) {
		var d;
		if (!a) return W.Z();
		if ("string" == typeof a)
			if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c), a = null;
			else {
				if (c !== v) return x(c).find(a);
				d = W.qsa(E, a)
			} else {
			if (b(a)) return x(E).ready(a);
			if (W.isZ(a)) return a;
			if (Z(a)) d = h(a);
			else if (e(a)) d = [a], a = null;
			else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c), a = null;
			else {
				if (c !== v) return x(c).find(a);
				d = W.qsa(E, a)
			}
		}
		return W.Z(d, a)
	}, x = function(a, b) {
		return W.init(a, b)
	}, x.extend = function(a) {
		var b, c = C.call(arguments, 1);
		return "boolean" == typeof a && (b = a, a = c.shift()), c.forEach(function(c) {
			o(a, c, b)
		}), a
	}, W.qsa = function(a, b) {
		var c, e = "#" == b[0],
			f = !e && "." == b[0],
			g = e || f ? b.slice(1) : b,
			h = T.test(g);
		return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
	}, x.contains = E.documentElement.contains ? function(a, b) {
		return a !== b && a.contains(b)
	} : function(a, b) {
		for (; b && (b = b.parentNode);)
			if (b === a) return !0;
		return !1
	}, x.type = a, x.isFunction = b, x.isWindow = c, x.isArray = Z, x.isPlainObject = f, x.isEmptyObject = function(a) {
		var b;
		for (b in a) return !1;
		return !0
	}, x.inArray = function(a, b, c) {
		return B.indexOf.call(b, a, c)
	}, x.camelCase = z, x.trim = function(a) {
		return null == a ? "" : String.prototype.trim.call(a)
	}, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(a, b) {
		var c, d, e, f = [];
		if (g(a))
			for (d = 0; d < a.length; d++) c = b(a[d], d), null != c && f.push(c);
		else
			for (e in a) c = b(a[e], e), null != c && f.push(c);
		return i(f)
	}, x.each = function(a, b) {
		var c, d;
		if (g(a)) {
			for (c = 0; c < a.length; c++)
				if (b.call(a[c], c, a[c]) === !1) return a
		} else
			for (d in a)
				if (b.call(a[d], d, a[d]) === !1) return a; return a
	}, x.grep = function(a, b) {
		return D.call(a, b)
	}, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
		U["[object " + b + "]"] = b.toLowerCase()
	}), x.fn = {
		forEach: B.forEach,
		reduce: B.reduce,
		push: B.push,
		sort: B.sort,
		indexOf: B.indexOf,
		concat: B.concat,
		map: function(a) {
			return x(x.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function() {
			return x(C.apply(this, arguments))
		},
		ready: function(a) {
			return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded", function() {
				a(x)
			}, !1), this
		},
		get: function(a) {
			return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(a) {
			return B.every.call(this, function(b, c) {
				return a.call(b, c, b) !== !1
			}), this
		},
		filter: function(a) {
			return b(a) ? this.not(this.not(a)) : x(D.call(this, function(b) {
				return W.matches(b, a)
			}))
		},
		add: function(a, b) {
			return x(A(this.concat(x(a, b))))
		},
		is: function(a) {
			return this.length > 0 && W.matches(this[0], a)
		},
		not: function(a) {
			var d, c = [];
			return b(a) && a.call !== v ? this.each(function(b) {
				a.call(this, b) || c.push(this)
			}) : (d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a), this.forEach(function(a) {
				d.indexOf(a) < 0 && c.push(a)
			})), x(c)
		},
		has: function(a) {
			return this.filter(function() {
				return e(a) ? x.contains(this, a) : x(this).find(a).size()
			})
		},
		eq: function(a) {
			return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			var a = this[0];
			return a && !e(a) ? a : x(a)
		},
		last: function() {
			var a = this[this.length - 1];
			return a && !e(a) ? a : x(a)
		},
		find: function(a) {
			var b, c = this;
			return b = a ? "object" == typeof a ? x(a).filter(function() {
				var a = this;
				return B.some.call(c, function(b) {
					return x.contains(b, a)
				})
			}) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
				return W.qsa(this, a)
			}) : x()
		},
		closest: function(a, b) {
			var c = this[0],
				e = !1;
			for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
			return x(c)
		},
		parents: function(a) {
			for (var b = [], c = this; c.length > 0;) c = x.map(c, function(a) {
				return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
			});
			return p(b, a)
		},
		parent: function(a) {
			return p(A(this.pluck("parentNode")), a)
		},
		children: function(a) {
			return p(this.map(function() {
				return n(this)
			}), a)
		},
		contents: function() {
			return this.map(function() {
				return C.call(this.childNodes)
			})
		},
		siblings: function(a) {
			return p(this.map(function(a, b) {
				return D.call(n(b.parentNode), function(a) {
					return a !== b
				})
			}), a)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(a) {
			return x.map(this, function(b) {
				return b[a]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
			})
		},
		replaceWith: function(a) {
			return this.before(a).remove()
		},
		wrap: function(a) {
			var d, e, c = b(a);
			return this[0] && !c && (d = x(a).get(0), e = d.parentNode || this.length > 1), this.each(function(b) {
				x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
			})
		},
		wrapAll: function(a) {
			if (this[0]) {
				x(this[0]).before(a = x(a));
				for (var b;
					(b = a.children()).length;) a = b.first();
				x(a).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			var c = b(a);
			return this.each(function(b) {
				var d = x(this),
					e = d.contents(),
					f = c ? a.call(this, b) : a;
				e.length ? e.wrapAll(f) : d.append(f)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				x(this).replaceWith(x(this).children())
			}), this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(a) {
			return this.each(function() {
				var b = x(this);
				(a === v ? "none" == b.css("display") : a) ? b.show(): b.hide()
			})
		},
		prev: function(a) {
			return x(this.pluck("previousElementSibling")).filter(a || "*")
		},
		next: function(a) {
			return x(this.pluck("nextElementSibling")).filter(a || "*")
		},
		html: function(a) {
			return 0 in arguments ? this.each(function(b) {
				var c = this.innerHTML;
				x(this).empty().append(q(this, a, b, c))
			}) : 0 in this ? this[0].innerHTML : null
		},
		text: function(a) {
			return 0 in arguments ? this.each(function(b) {
				var c = q(this, a, b, this.textContent);
				this.textContent = null == c ? "" : "" + c
			}) : 0 in this ? this[0].textContent : null
		},
		attr: function(a, b) {
			var c;
			return "string" != typeof a || 1 in arguments ? this.each(function(c) {
				if (1 === this.nodeType)
					if (e(a))
						for (w in a) r(this, w, a[w]);
					else r(this, a, q(this, b, c, this.getAttribute(a)))
			}) : this.length && 1 === this[0].nodeType ? !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : v
		},
		removeAttr: function(a) {
			return this.each(function() {
				1 === this.nodeType && a.split(" ").forEach(function(a) {
					r(this, a)
				}, this)
			})
		},
		prop: function(a, b) {
			return a = Y[a] || a, 1 in arguments ? this.each(function(c) {
				this[a] = q(this, b, c, this[a])
			}) : this[0] && this[0][a]
		},
		data: function(a, b) {
			var c = "data-" + a.replace(M, "-$1").toLowerCase(),
				d = 1 in arguments ? this.attr(c, b) : this.attr(c);
			return null !== d ? t(d) : v
		},
		val: function(a) {
			return 0 in arguments ? this.each(function(b) {
				this.value = q(this, a, b, this.value)
			}) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value)
		},
		offset: function(a) {
			if (a) return this.each(function(b) {
				var c = x(this),
					d = q(this, a, b, c.offset()),
					e = c.offsetParent().offset(),
					f = {
						top: d.top - e.top,
						left: d.left - e.left
					};
				"static" == c.css("position") && (f.position = "relative"), c.css(f)
			});
			if (!this.length) return null;
			var b = this[0].getBoundingClientRect();
			return {
				left: b.left + window.pageXOffset,
				top: b.top + window.pageYOffset,
				width: Math.round(b.width),
				height: Math.round(b.height)
			}
		},
		css: function(b, c) {
			var d, e, f, g;
			if (arguments.length < 2) {
				if (e = this[0], !e) return;
				if (d = getComputedStyle(e, ""), "string" == typeof b) return e.style[z(b)] || d.getPropertyValue(b);
				if (Z(b)) return f = {}, x.each(b, function(a, b) {
					f[b] = e.style[z(b)] || d.getPropertyValue(b)
				}), f
			}
			if (g = "", "string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
				this.style.removeProperty(j(b))
			});
			else
				for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";" : this.each(function() {
					this.style.removeProperty(j(w))
				});
			return this.each(function() {
				this.style.cssText += ";" + g
			})
		},
		index: function(a) {
			return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(a) {
			return a ? B.some.call(this, function(a) {
				return this.test(s(a))
			}, k(a)) : !1
		},
		addClass: function(a) {
			return a ? this.each(function(b) {
				if ("className" in this) {
					y = [];
					var c = s(this),
						d = q(this, a, b, c);
					d.split(/\s+/g).forEach(function(a) {
						x(this).hasClass(a) || y.push(a)
					}, this), y.length && s(this, c + (c ? " " : "") + y.join(" "))
				}
			}) : this
		},
		removeClass: function(a) {
			return this.each(function(b) {
				if ("className" in this) {
					if (a === v) return s(this, "");
					y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function(a) {
						y = y.replace(k(a), " ")
					}), s(this, y.trim())
				}
			})
		},
		toggleClass: function(a, b) {
			return a ? this.each(function(c) {
				var d = x(this),
					e = q(this, a, c, s(this));
				e.split(/\s+/g).forEach(function(a) {
					(b === v ? !d.hasClass(a) : b) ? d.addClass(a): d.removeClass(a)
				})
			}) : this
		},
		scrollTop: function(a) {
			if (this.length) {
				var b = "scrollTop" in this[0];
				return a === v ? b ? this[0].scrollTop : this[0].pageYOffset : this.each(b ? function() {
					this.scrollTop = a
				} : function() {
					this.scrollTo(this.scrollX, a)
				})
			}
		},
		scrollLeft: function(a) {
			if (this.length) {
				var b = "scrollLeft" in this[0];
				return a === v ? b ? this[0].scrollLeft : this[0].pageXOffset : this.each(b ? function() {
					this.scrollLeft = a
				} : function() {
					this.scrollTo(a, this.scrollY)
				})
			}
		},
		position: function() {
			if (this.length) {
				var a = this[0],
					b = this.offsetParent(),
					c = this.offset(),
					d = L.test(b[0].nodeName) ? {
						top: 0,
						left: 0
					} : b.offset();
				return c.top -= parseFloat(x(a).css("margin-top")) || 0, c.left -= parseFloat(x(a).css("margin-left")) || 0, d.top += parseFloat(x(b[0]).css("border-top-width")) || 0, d.left += parseFloat(x(b[0]).css("border-left-width")) || 0, {
					top: c.top - d.top,
					left: c.left - d.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position");) a = a.offsetParent;
				return a
			})
		}
	}, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function(a) {
		var b = a.replace(/./, function(a) {
			return a[0].toUpperCase()
		});
		x.fn[a] = function(e) {
			var f, g = this[0];
			return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
				g = x(this), g.css(a, q(this, e, b, g[a]()))
			})
		}
	}), O.forEach(function(b, c) {
		var d = c % 2;
		x.fn[b] = function() {
			var b, e, f = x.map(arguments, function(c) {
					return b = a(c), "object" == b || "array" == b || null == c ? c : W.fragment(c)
				}),
				g = this.length > 1;
			return f.length < 1 ? this : this.each(function(a, b) {
				e = d ? b : b.parentNode, b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null;
				var h = x.contains(E.documentElement, e);
				f.forEach(function(a) {
					if (g) a = a.cloneNode(!0);
					else if (!e) return x(a).remove();
					e.insertBefore(a, b), h && u(a, function(a) {
						null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
					})
				})
			})
		}, x.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
			return x(a)[b](this), this
		}
	}), W.Z.prototype = x.fn, W.uniq = A, W.deserializeValue = t, x.zepto = W, x
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
	function(a) {
		function b(a) {
			return a._zid || (a._zid = m++)
		}

		function c(a, c, f, g) {
			if (c = d(c), c.ns) var h = e(c.ns);
			return (q[b(a)] || []).filter(function(a) {
				return !(!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
			})
		}

		function d(a) {
			var b = ("" + a).split(".");
			return {
				e: b[0],
				ns: b.slice(1).sort().join(" ")
			}
		}

		function e(a) {
			return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
		}

		function f(a, b) {
			return a.del && !s && a.e in t || !!b
		}

		function g(a) {
			return u[a] || s && t[a] || a
		}

		function h(c, e, h, i, k, m, n) {
			var o = b(c),
				p = q[o] || (q[o] = []);
			e.split(/\s/).forEach(function(b) {
				var e, o;
				return "ready" == b ? a(document).ready(h) : (e = d(b), e.fn = h, e.sel = k, e.e in u && (h = function(b) {
					var c = b.relatedTarget;
					return !c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
				}), e.del = m, o = m || h, e.proxy = function(a) {
					if (a = j(a), !a.isImmediatePropagationStopped()) {
						a.data = i;
						var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
						return b === !1 && (a.preventDefault(), a.stopPropagation()), b
					}
				}, e.i = p.length, p.push(e), "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n)), void 0)
			})
		}

		function i(a, d, e, h, i) {
			var j = b(a);
			(d || "").split(/\s/).forEach(function(b) {
				c(a, b, e, h).forEach(function(b) {
					delete q[j][b.i], "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
				})
			})
		}

		function j(b, c) {
			return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y, function(a, d) {
				var e = c[a];
				b[a] = function() {
					return this[d] = v, e && e.apply(c, arguments)
				}, b[d] = w
			}), (c.defaultPrevented !== l ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)), b
		}

		function k(a) {
			var b, c = {
				originalEvent: a
			};
			for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
			return j(c, a)
		}
		var l, v, w, x, y, m = 1,
			n = Array.prototype.slice,
			o = a.isFunction,
			p = function(a) {
				return "string" == typeof a
			},
			q = {},
			r = {},
			s = "onfocusin" in window,
			t = {
				focus: "focusin",
				blur: "focusout"
			},
			u = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents", a.event = {
			add: h,
			remove: i
		}, a.proxy = function(c, d) {
			var f, e = 2 in arguments && n.call(arguments, 2);
			if (o(c)) return f = function() {
				return c.apply(d, e ? e.concat(n.call(arguments)) : arguments)
			}, f._zid = b(c), f;
			if (p(d)) return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) : a.proxy(c[d], c);
			throw new TypeError("expected function")
		}, a.fn.bind = function(a, b, c) {
			return this.on(a, b, c)
		}, a.fn.unbind = function(a, b) {
			return this.off(a, b)
		}, a.fn.one = function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		}, v = function() {
			return !0
		}, w = function() {
			return !1
		}, x = /^([A-Z]|returnValue$|layer[XY]$)/, y = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		}, a.fn.delegate = function(a, b, c) {
			return this.on(b, a, c)
		}, a.fn.undelegate = function(a, b, c) {
			return this.off(b, a, c)
		}, a.fn.live = function(b, c) {
			return a(document.body).delegate(this.selector, b, c), this
		}, a.fn.die = function(b, c) {
			return a(document.body).undelegate(this.selector, b, c), this
		}, a.fn.on = function(b, c, d, e, f) {
			var g, j, m = this;
			return b && !p(b) ? (a.each(b, function(a, b) {
				m.on(a, c, d, b, f)
			}), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function(l, m) {
				f && (g = function(a) {
					return i(m, a.type, e), e.apply(this, arguments)
				}), c && (j = function(b) {
					var d, f = a(b.target).closest(c, m).get(0);
					return f && f !== m ? (d = a.extend(k(b), {
						currentTarget: f,
						liveFired: m
					}), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
				}), h(m, b, e, d, c, j || g)
			}))
		}, a.fn.off = function(b, c, d) {
			var e = this;
			return b && !p(b) ? (a.each(b, function(a, b) {
				e.off(a, c, b)
			}), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
				i(this, b, d, c)
			}))
		}, a.fn.trigger = function(b, c) {
			return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b), b._args = c, this.each(function() {
				b.type in t && "function" == typeof this[b.type] ? this[b.type]() : "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
			})
		}, a.fn.triggerHandler = function(b, d) {
			var e, f;
			return this.each(function(g, h) {
				e = k(p(b) ? a.Event(b) : b), e._args = d, e.target = h, a.each(c(h, b.type || b), function(a, b) {
					return f = b.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0
				})
			}), f
		}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
			a.fn[b] = function(a) {
				return 0 in arguments ? this.bind(b, a) : this.trigger(b)
			}
		}), a.Event = function(a, b) {
			var c, d, e;
			if (p(a) || (b = a, a = b.type), c = document.createEvent(r[a] || "Events"), d = !0, b)
				for (e in b) "bubbles" == e ? d = !!b[e] : c[e] = b[e];
			return c.initEvent(a, d, !0), j(c)
		}
	}(Zepto),
	function(a) {
		function b(b, c, d) {
			var e = a.Event(c);
			return a(b).trigger(e, d), !e.isDefaultPrevented()
		}

		function c(a, c, d, e) {
			return a.global ? b(c || s, d, e) : void 0
		}

		function d(b) {
			b.global && 0 === a.active++ && c(b, null, "ajaxStart")
		}

		function e(b) {
			b.global && !--a.active && c(b, null, "ajaxStop")
		}

		function f(a, b) {
			var d = b.context;
			return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
		}

		function g(a, b, d, e) {
			var f = d.context,
				g = "success";
			d.success.call(f, a, g, b), e && e.resolveWith(f, [a, g, b]), c(d, f, "ajaxSuccess", [b, d, a]), i(g, b, d)
		}

		function h(a, b, d, e, f) {
			var g = e.context;
			e.error.call(g, d, b, a), f && f.rejectWith(g, [d, b, a]), c(e, g, "ajaxError", [d, e, a || b]), i(b, d, e)
		}

		function i(a, b, d) {
			var f = d.context;
			d.complete.call(f, b, a), c(d, f, "ajaxComplete", [b, d]), e(d)
		}

		function j() {}

		function k(a) {
			return a && (a = a.split(";", 2)[0]), a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
		}

		function l(a, b) {
			return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
		}

		function m(b) {
			b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)), !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
		}

		function n(b, c, d, e) {
			return a.isFunction(c) && (e = d, d = c, c = void 0), a.isFunction(d) || (e = d, d = void 0), {
				url: b,
				data: c,
				success: d,
				dataType: e
			}
		}

		function o(b, c, d, e) {
			var f, g = a.isArray(c),
				h = a.isPlainObject(c);
			a.each(c, function(c, i) {
				f = a.type(i), e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"), !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
			})
		}
		var p, q, A, r = 0,
			s = window.document,
			t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			u = /^(?:text|application)\/javascript/i,
			v = /^(?:text|application)\/xml/i,
			w = "application/json",
			x = "text/html",
			y = /^\s*$/,
			z = s.createElement("a");
		z.href = window.location.href, a.active = 0, a.ajaxJSONP = function(b, c) {
			if (!("type" in b)) return a.ajax(b);
			var d, e, i = b.jsonpCallback,
				j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r,
				k = s.createElement("script"),
				l = window[j],
				m = function(b) {
					a(k).triggerHandler("error", b || "abort")
				},
				n = {
					abort: m
				};
			return c && c.promise(n), a(k).on("load error", function(f, i) {
				clearTimeout(e), a(k).off().remove(), "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c), window[j] = l, d && a.isFunction(l) && l(d[0]), l = d = void 0
			}), f(n, b) === !1 ? (m("abort"), n) : (window[j] = function() {
				d = arguments
			}, k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
				m("timeout")
			}, b.timeout)), n)
		}, a.ajaxSettings = {
			type: "GET",
			beforeSend: j,
			success: j,
			error: j,
			complete: j,
			context: null,
			global: !0,
			xhr: function() {
				return new window.XMLHttpRequest
			},
			accepts: {
				script: "text/javascript, application/javascript, application/x-javascript",
				json: w,
				xml: "application/xml, text/xml",
				html: x,
				text: "text/plain"
			},
			crossDomain: !1,
			timeout: 0,
			processData: !0,
			cache: !0
		}, a.ajax = function(b) {
			var c, n, o, r, t, u, v, w, x, A, B, e = a.extend({}, b || {}),
				i = a.Deferred && a.Deferred();
			for (p in a.ajaxSettings) void 0 === e[p] && (e[p] = a.ajaxSettings[p]);
			if (d(e), e.crossDomain || (c = s.createElement("a"), c.href = e.url, c.href = c.href, e.crossDomain = z.protocol + "//" + z.host != c.protocol + "//" + c.host), e.url || (e.url = window.location.toString()), m(e), n = e.dataType, o = /\?.+=\?/.test(e.url), o && (n = "jsonp"), e.cache !== !1 && (b && b.cache === !0 || "script" != n && "jsonp" != n) || (e.url = l(e.url, "_=" + Date.now())), "jsonp" == n) return o || (e.url = l(e.url, e.jsonp ? e.jsonp + "=?" : e.jsonp === !1 ? "" : "callback=?")), a.ajaxJSONP(e, i);
			if (t = e.accepts[n], u = {}, v = function(a, b) {
				u[a.toLowerCase()] = [a, b]
			}, w = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1 : window.location.protocol, x = e.xhr(), A = x.setRequestHeader, i && i.promise(x), e.crossDomain || v("X-Requested-With", "XMLHttpRequest"), v("Accept", t || "*/*"), (t = e.mimeType || t) && (t.indexOf(",") > -1 && (t = t.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(t)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && v("Content-Type", e.contentType || "application/x-www-form-urlencoded"), e.headers)
				for (q in e.headers) v(q, e.headers[q]);
			if (x.setRequestHeader = v, x.onreadystatechange = function() {
				if (4 == x.readyState) {
					x.onreadystatechange = j, clearTimeout(r);
					var b, c = !1;
					if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == w) {
						n = n || k(e.mimeType || x.getResponseHeader("content-type")), b = x.responseText;
						try {
							"script" == n ? (1, eval)(b) : "xml" == n ? b = x.responseXML : "json" == n && (b = y.test(b) ? null : a.parseJSON(b))
						} catch (d) {
							c = d
						}
						c ? h(c, "parsererror", x, e, i) : g(b, x, e, i)
					} else h(x.statusText || null, x.status ? "error" : "abort", x, e, i)
				}
			}, f(x, e) === !1) return x.abort(), h(null, "abort", x, e, i), x;
			if (e.xhrFields)
				for (q in e.xhrFields) x[q] = e.xhrFields[q];
			B = "async" in e ? e.async : !0, x.open(e.type, e.url, B, e.username, e.password);
			for (q in u) A.apply(x, u[q]);
			return e.timeout > 0 && (r = setTimeout(function() {
				x.onreadystatechange = j, x.abort(), h(null, "timeout", x, e, i)
			}, e.timeout)), x.send(e.data ? e.data : null), x
		}, a.get = function() {
			return a.ajax(n.apply(null, arguments))
		}, a.post = function() {
			var b = n.apply(null, arguments);
			return b.type = "POST", a.ajax(b)
		}, a.getJSON = function() {
			var b = n.apply(null, arguments);
			return b.dataType = "json", a.ajax(b)
		}, a.fn.load = function(b, c, d) {
			if (!this.length) return this;
			var e, f = this,
				g = b.split(/\s/),
				h = n(b, c, d),
				i = h.success;
			return g.length > 1 && (h.url = g[0], e = g[1]), h.success = function(b) {
				f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b), i && i.apply(f, arguments)
			}, a.ajax(h), this
		}, A = encodeURIComponent, a.param = function(b, c) {
			var d = [];
			return d.add = function(b, c) {
				a.isFunction(c) && (c = c()), null == c && (c = ""), this.push(A(b) + "=" + A(c))
			}, o(d, b, c), d.join("&").replace(/%20/g, "+")
		}
	}(Zepto),
	function(a) {
		a.fn.serializeArray = function() {
			var b, c, d = [],
				e = function(a) {
					return a.forEach ? a.forEach(e) : void d.push({
						name: b,
						value: a
					})
				};
			return this[0] && a.each(this[0].elements, function(d, f) {
				c = f.type, b = f.name, b && "fieldset" != f.nodeName.toLowerCase() && !f.disabled && "submit" != c && "reset" != c && "button" != c && "file" != c && ("radio" != c && "checkbox" != c || f.checked) && e(a(f).val())
			}), d
		}, a.fn.serialize = function() {
			var a = [];
			return this.serializeArray().forEach(function(b) {
				a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
			}), a.join("&")
		}, a.fn.submit = function(b) {
			if (0 in arguments) this.bind("submit", b);
			else if (this.length) {
				var c = a.Event("submit");
				this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit()
			}
			return this
		}
	}(Zepto),
	function(a) {
		"__proto__" in {} || a.extend(a.zepto, {
			Z: function(b, c) {
				return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
			},
			isZ: function(b) {
				return "array" === a.type(b) && "__Z" in b
			}
		});
		try {
			getComputedStyle(void 0)
		} catch (b) {
			var c = getComputedStyle;
			window.getComputedStyle = function(a) {
				try {
					return c(a)
				} catch (b) {
					return null
				}
			}
		}
	}(Zepto),
	function() {
		"use strict";
		var a = window.didi || {};
		window.didi = a, a._cfg = {}, a.init = function(b) {
			b = b || {}, b.id && a.trace({
				id: b.id,
				data: b.data || {}
			});
			var c = a._cfg;
			"auto" === b.debug && (b.debug = a.is("dev")), c.debug = !!b.debug, b.debug === !0, b.wxSignFn ? c.wxSignFn = b.wxSignFn : b.wxSignApi && (c.wxSignApi = b.wxSignApi), "undefined" != typeof b.share ? a.setShare(b.share) : a.app.setShare(!1)
		}, $.getScript = function(a, b) {
			var c = document.createElement("script");
			c.type = "text/javascript", c.src = a, document.getElementsByTagName("head")[0].appendChild(c), c.onload = c.onreadystatechange = function() {
				this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || "function" == typeof b && b()
			}
		}, $.fn.touch = function(b, c, d) {
			var g, h, i, j, k, l, e = $(this),
				f = !1;
			if (b === !1) return e.off(".touch"), this;
			if ("string" == typeof b && c === !1) return e.off(".touch", b), this;
			if ("string" == typeof b && $.isFunction(c)) f = !0;
			else {
				if (!$.isFunction(b)) return this;
				f = !1, c = b, d = c
			}
			return g = 0, h = 0, i = a.is("mobile"), j = function(a, b) {
				d !== !1 && (b ? a.addClass("active") : a.removeClass("active"))
			}, a._cfg.lastTouch = +new Date, k = function(c, d) {
				c = "touch" + c + ".touch";
				var g = function() {
					d.apply(this, arguments), a._cfg.lastTouch = +new Date
				};
				f ? e.on(c, b, g) : e.on(c, g)
			}, l = function(c, d) {
				c = "mouse" + c + ".touch";
				var g = function() {
					var c = +new Date;
					(!i || a.is("chrome") && c - a._cfg.lastTouch > 1e3) && d.apply(this, arguments)
				};
				f ? e.on(c, b, g) : e.on(c, g)
			}, k("start", function(a) {
				j($(this), !0);
				var b = a.touches[0];
				g = b.pageX, h = b.pageY
			}), k("move", function(a) {
				var b = a.touches[0];
				Math.abs(b.pageX - g) + Math.abs(b.pageY - h) > 15 ? ($(this).attr("moved", "true"), j($(this), !1)) : ($(this).attr("moved", "false"), j($(this), !0))
			}), k("end", function(a) {
				j($(this), !1), "true" !== $(this).attr("moved") ? c.call(this, a) : $(this).attr("moved", "false")
			}), k("cancel", function() {
				j($(this), !1), $(this).attr("moved", "false")
			}), l("down", function() {
				j($(this), !0)
			}), l("leave", function() {
				j($(this), !1)
			}), l("up", function(a) {
				j($(this), !1), c.call(this, a)
			}), this
		}, $.fn.loading = function(a) {
			$(this), "string" == typeof a && (a = {
				text: a
			})
		}
	}(), getQuerySting = function() {
		var g, h, a = location.search.length ? location.search.substring(1) : "",
			b = {},
			c = a.split("&"),
			d = null,
			e = null,
			f = null;
		if (c)
			for (g = 0, h = c.length; h > g; g++) d = c[g].split("="), e = decodeURIComponent(d[0]), f = decodeURIComponent(d[1]), b[e] = f;
		return b
	}, getQueryData = function(a) {
		var b = getQuerySting();
		return void 0 === b[a] ? "" : b[a]
	},
	function() {
		"use strict";
		var b, c, d, e, f, g, h, i, j, k, a = window.didi || {};
		window.didi = a, b = null, c = window.document, d = c.documentElement, e = c.body, f = null, g = null, h = null, i = function(a) {
			return this instanceof i ? (new i.fn.init(a), void 0) : h = new i(a)
		}, j = function(a) {
			var b = !1;
			return b = Array.isArray(a)
		}, k = function(a) {
			e.appendChild(a)
		}, i.fn = i.prototype = {
			constructor: i,
			init: function(a) {
				var b, d, h, i, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E;
				if (a) {
					if (b = c.createElement("div"), b.id = "d_wall", b.style.backgroundColor = a.bgcolor || "black", b.style.opacity = a.opacity || "0.2", b.style.filter = a.opacity ? "alpha(opacity=" + 100 * a.opacity + ")" : "alpha(opacity=20)", b.className = "didi-dialog-wall", d = c.createElement("div"), d.id = "d_wrap", d.style.width = a.width || "260px", d.style.height = a.height || "210px", d.style.backgroundColor = a.d_bgcolor || "#fff", d.style.opacity = a.d_opacity ? a.d_opacity : "", d.style.filter = a.d_opacity ? "alpha(opacity=" + 100 * a.d_opacity + ")" : "alpha(opacity=20)", "loading" === a.type && (d.style.padding = "0px"), d.setAttribute("dialog-type", a.type), d.className = "didi-dialog-wrap", h = "", h += "<div style='" + ("loading" === a.type ? "padding:0px;" : "padding: 0px 16px;") + "'>", a.dom && 1 === a.dom.nodeType ? h += a.dom.outerHTML : a.html && "string" == typeof a.html ? h += a.html : a.domId && a.domId.length && (i = c.getElementById(a.domId), i && (h += i.outerHTML)), a.icon ? (l = a.icon.type, m = a.icon.width || "61px", n = a.icon.height || "61px", l && (o = "", o = "loading" === a.type ? "margin:36px 0px 10px 0" : "margin:20px 0px 12px 0", p = "dialog-icon icon-" + l, "loading" === l && (p = "icon-loading"), h += '<p class="didi_dialog_icon" style="' + o + '"><span class="' + p + '" style="display: inline-block; width:' + m + ";height:" + n + "; background-size:" + m + " " + n + ';"></span></p>')) : h += '<div class="no-icon" style="height:20px"></div>', a.title && j(a.title))
						for (q = 0, r = a.title.length; r > q; q++) s = a.title[q], s && (t = s.color || "#ff8a01", u = s.fontSize || "1.4em", h += '<p class="didi-dialog-title" style="color:' + t + ";font-size:" + u + ';">' + s.txt + "</p>");
					if (a.tips && j(a.tips))
						for (v = 0, w = a.tips.length; w > v; v++) x = a.tips[v], x && (y = x.color || "#666666", z = x.fontSize || "1.0em", h += '<p class="didi-dialog-p" style="color:' + y + ";font-size:" + z + ';">' + x.txt + "</p>");
					if (a.btns && j(a.btns)) {
						for (h += '<div id="d_dialog_footer" class="didi-dialog-footer">', A = 0, B = a.btns.length; B > A; A++) C = a.btns[A], C && (h += "confirm" === a.type ? '<a class="' + C.klsName + '" id="' + C.id + '" style="width: 118px; height: 37px; line-height: 35px; margin:0 3px;">' + C.txt + "</a>" : '<a class="' + C.klsName + '" id="' + C.id + '" style="width: 100%;">' + C.txt + "</a>");
						h += "</div>"
					}
					h += "</div>", d.innerHTML = h, D = c.getElementById("d_wall"), E = c.getElementById("d_wrap"), D ? (e.removeChild(D), k(b)) : k(b), E ? (e.removeChild(E), k(d)) : k(d), f = c.getElementById("d_wall"), g = c.getElementById("d_wrap"), a.btns && a.btns.length && j(a.btns) && $.each(a.btns, function(a, b) {
						if (b) {
							var d = b.id,
								e = b.eventType || "click",
								f = b.callback,
								g = c.getElementById(d);
							g && !g["on" + e] && ("click" === e ? $(g).touch(function(a) {
								a.preventDefault(), a.stopPropagation(), setTimeout(function() {
									f(a)
								}, 0)
							}, !0) : g.addEventListener(e, f, !1))
						}
					})
				}
			},
			_dialogPosi: function() {
				var i, j, a = d.scrollTop,
					b = d.scrollLeft,
					c = d.clientHeight,
					e = d.clientWidth,
					f = g.style.height.replace("px", ""),
					h = g.style.width.replace("px", "");
				return "auto" === f && (f = 220), i = a + (c - f - 20) / 2, j = b + (e - h) / 2, {
					top: i,
					left: j
				}
			}
		}, i.fn.show = function() {
			var h, i, j, k, a = this;
			f && g && (h = e.scrollHeight, i = d.clientWidth, j = c.documentElement.scrollTop || c.body.scrollTop, f.style.width = i + "px", f.style.height = h + "px", f.style.display = "block", k = this._dialogPosi(), g.style.top = k.top + j + "px", g.style.left = k.left + "px", g.style.display = "block", window.addEventListener("resize", function() {
				a.reset.call(a)
			}, !1), window.addEventListener("scroll", function() {
				a.reset.call(a), j = c.documentElement.scrollTop || c.body.scrollTop, g.style.top = k.top + j + "px"
			}, !1)), b && clearTimeout(b)
		}, i.fn.hide = function(a) {
			if (a && "string" == typeof a && g) {
				var c = g.getAttribute("dialog-type");
				if (a !== c) return !1
			}
			f && g && (f.style.display = "none", g.style.display = "none"), b && clearTimeout(b)
		}, i.fn.reset = function() {
			var b, d, e, a = f.style.display;
			"block" === a && f && g && (b = c.documentElement.scrollHeight, d = c.documentElement.clientWidth, f.style.width = d + "px", f.style.height = b + "px", e = this._dialogPosi(), g.style.top = e.top + "px", g.style.left = e.left + "px")
		}, a.alert = function(a, b, c) {
			if (c = c || {}, a === !1) return i.fn.hide("alert");
			var d = {
				type: "alert",
				bgcolor: "black",
				height: "auto",
				width: c.width || "280px",
				tips: [{
					txt: a,
					fontSize: "1.1em"
				}],
				btns: [{
					id: "btn_close",
					txt: c.text || "我知道了",
					klsName: "btn-orange",
					eventType: "click",
					callback: function() {
						h.hide(), b && b()
					}
				}]
			};
			c.icon !== !1 && (d.icon = {
				type: c.icon || "alert",
				width: "61px",
				height: "61px"
			}), h = new i(d), h.show()
		}, a.confirm = function(a, b, c, d) {
			if (d = d || {}, a === !1) return i.fn.hide("confirm");
			var e = {
				type: "confirm",
				height: "auto",
				width: d.width || "280px",
				tips: [{
					txt: a || "确定执行此操作吗？",
					color: "#666666",
					fontSize: "1.04em"
				}],
				btns: [{
					id: "btn-cancel",
					txt: d.cancelText || "取消",
					klsName: "btn-white",
					eventType: "click",
					callback: function() {
						h.hide(), "function" == typeof c && c()
					}
				}, {
					id: "btn-ok",
					txt: d.confirmText || "确定",
					klsName: "btn-orange",
					eventType: "click",
					callback: function() {
						h.hide(), "function" == typeof b && b()
					}
				}]
			};
			d.icon !== !1 && (e.icon = {
				type: d.icon || "alert",
				width: "60px",
				height: "60px"
			}), h = new i(e), h.show()
		}, a.loading = function(a, c, d) {
			if (a === !1) return i.fn.hide("loading");
			var e = {
				type: "loading",
				bgcolor: "#ffffff",
				d_bgcolor: "black",
				d_opacity: "0.7",
				width: "125px",
				height: "125px",
				icon: {
					type: "loading",
					width: "30px",
					height: "30px"
				},
				tips: [{
					txt: a || "正在加载...",
					color: "#FFFFFF",
					fontSize: "13px"
				}]
			};
			h = new i(e), h.show(), (null === c || void 0 === c) && (c = 1e4), c && (b && clearTimeout(b), b = window.setTimeout(function() {
				h.hide()
			}, c)), d && d()
		}, window.didi.dialog = i
	}(), didi = window.didi || {},
	function() {
		"use strict";
		didi.getData = function(a) {
			if (void 0 !== localStorage[a]) return localStorage[a];
			var b, c = new RegExp("(^| )" + a + "=([^;]*)(;|$)");
			return b = document.cookie.match(c), b ? unescape(b[2]) : null
		}, didi.setData = function(a, b) {
			localStorage[a] = b;
			var c = new Date;
			c.setTime(c.getTime() + 2592e3), document.cookie = a + "=" + escape(b) + ";expires=" + c.toGMTString()
		}, didi.delData = function(a) {
			var b = didi.getData(a);
			void 0 !== b && (delete localStorage[a], didi.getData(a) && (document.cookie = a + "=" + b + ";expires=" + new Date(0).toGMTString()))
		}, didi.err = function(a) {
			console.log("ERR:" + a)
		}, didi.ua = function() {
			var a = {
					android: /android/i,
					iphone: /iphone/i,
					ipad: /ipad/i,
					ipod: /ipod/i,
					weixin: /micromessenger/i,
					mqq: /mqq/i,
					didi: /didi/i,
					alipay: /aliapp/i,
					chrome: /chrome\//i
				},
				b = {},
				c = window.navigator.userAgent;
			return $.each(a, function(a, d) {
				b[a] = d.test(c)
			}), b.ios = b.iphone || b.ipad || b.iphone, b.mobile = b.ios || b.android, b.pc = !b.mobile, b.prod = /(udache.com|diditaxi.com.cn|xiaojukeji.com)\//.test(window.location.href), b.dev = !b.prod, window.chrome && window.chrome && (b.chrome = !0), b
		}, didi.is = function(a) {
			var b = a.split(","),
				c = didi.ua(),
				d = function(a) {
					var b, d;
					return (a = $.trim(a) || "") ? (b = a.split("."), d = !0, $.each(b, function(a, b) {
						return c[b] ? void 0 : (d = !1, !1)
					}), d) : !1
				},
				e = !1;
			return $.each(b, function(a, b) {
				return d(b) ? (e = !0, !1) : void 0
			}), e
		}
	}(),
	function() {
		"use strict";
		var a = function(a) {
			a = a || "", a = a.split("."), a.length = 4;
			var b = [];
			return $.each(a, function(a, c) {
				c = 1 * c, c ? b.push(c > 10 ? c : "0" + c) : b.push("00")
			}), parseInt(b.join(""), 10)
		};
		didi.version = function() {}, didi.version.compare = function(b, c, d) {
			return b = a(b), d = a(d), c = $.trim(c) || "", -1 !== c.indexOf("=") && b === d ? !0 : -1 !== c.indexOf(">") && b > d ? !0 : -1 !== c.indexOf("<") && d > b ? !0 : !1
		}, didi.version.parse = a
	}(),
	function() {
		"use strict";
		var a = {
				data: {},
				sign: "",
				pv: function(b) {
					var c = a.data = {
						id: b.id,
						data: b.data || {}
					};
					$.ajax({
						url: "http://gsactivity.diditaxi.com.cn/gulfstream/recommend/v1/activity/pv",
						data: {
							a_id: c.id,
							data: c.data
						},
						dataType: "jsonp",
						success: function(b) {
							a.sign = b.sign
						}
					})
				},
				log: function(b, c, d) {
					$.isFunction(c) && (d = c, c = {});
					var e = a.data;
					$.ajax({
						url: "http://gsactivity.diditaxi.com.cn/gulfstream/recommend/v1/activity/log",
						data: {
							a_id: e.id,
							action: b,
							data: c || {},
							sign: a.sign
						},
						dataType: "jsonp",
						success: function() {
							d && d()
						}
					})
				}
			},
			b = function(b, c, d) {
				$.isPlainObject(b) && !a.sign ? a.pv(b) : "string" == typeof b && a.log(b, c, d)
			};
		$.extend(b, {
			pv: a.pv,
			log: a.log
		}), didi.trace = b
	}(),
	function() {
		"use strict";
		var QQ, didi = window.didi || {},
			Share = {
				cache: {},
				set: function() {}
			},
			Weixin = {
				fns: [],
				isReady: !1,
				isInit: !1,
				init: function() {
					if (!Weixin.isInit) {
						Weixin.isInit = !0;
						var a = document.createElement("script");
						a.type = "text/javascript", a.src = "http://res.wx.qq.com/open/js/jweixin-1.0.0.js", document.getElementsByTagName("head")[0].appendChild(a), a.onload = function() {
							wx && wx.hideOptionMenu && wx.hideOptionMenu(), Weixin.getSign(function(a) {
								var b = "onMenuShareTimeline,onMenuShareAppMessage,onMenuShareWeibo,hideOptionMenu,showOptionMenu,hideMenuItems,showMenuItems,chooseWXPay,scanQRCode,checkJsApi".split(",");
								wx.config({
									debug: !1,
									appId: a.appid,
									timestamp: a.timestamp,
									nonceStr: a.noncestr,
									signature: a.sign,
									jsApiList: b
								}), wx.ready(function() {
									Weixin.isReady = !0, $.each(Weixin.fns, function(a, b) {
										b(wx)
									})
								}), wx.error(function() {})
							})
						}
					}
				},
				is: function() {
					return /MicroMessenger/i.test(window.navigator.userAgent)
				},
				getSign: function(a) {
					$.ajax({
						dataType: "jsonp",
						url: "http://api.udache.com/gulfstream/api/v1/webapp/pJsApiSign",
						data: {
							url: encodeURIComponent(location.href.split("#")[0])
						},
						success: function(b) {
							0 == b.errno && a(b.info)
						}
					})
				},
				fn: function(a) {
					return Weixin.is() ? 0 == arguments.length ? !0 : (Weixin.isReady ? a(wx, !0) : (Weixin.fns.push(a), Weixin.init()), void 0) : !1
				},
				setShare: function(a) {
					Weixin.fn(function(b) {
						if (a !== !1) {
							var c = {
								title: a.title || "",
								link: a.link || a.url || a.href || "",
								imgUrl: a.imgUrl || a.icon || "",
								desc: a.desc || a.text || a.content || "",
								success: a.success || function() {},
								cancel: a.cancel || function() {}
							};
							b.showOptionMenu({}), b.onMenuShareTimeline(c), b.onMenuShareAppMessage(c), b.onMenuShareWeibo(c)
						}
					})
				},
				sign: function() {}
			};
		didi.weixin = function(a) {
				return Weixin.fn(a)
			}, didi.weixin.getSign = Weixin.getSign, didi.weixin.setShare = Weixin.setShare, didi.weixin.is = Weixin.is, QQ = {
				fns: [],
				isReady: !1,
				isInit: !1,
				init: function() {
					if (!QQ.isInit) {
						QQ.isInit = !0;
						var a = document.createElement("script");
						a.type = "text/javascript", a.src = "http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152", document.getElementsByTagName("head")[0].appendChild(a), a.onload = function() {
							QQ.isReady = !0, $.each(QQ.fns, function(a, b) {
								b(mqq)
							})
						}
					}
				},
				is: function() {
					return /qq/i.test(window.navigator.userAgent)
				},
				fn: function(a) {
					return QQ.is() ? 0 == arguments.length ? !0 : (QQ.isReady ? a(mqq, !0) : (QQ.fns.push(a), QQ.init()), void 0) : !1
				},
				setShare: function(a) {
					QQ.fn(function(b) {
						if (a === !1) return b.ui.setTitleButtons({
							right: {
								hidden: !0
							}
						}), void 0;
						var c = {
							title: a.title || "",
							share_url: a.link || a.url || a.href || "",
							image_url: a.imgUrl || a.icon || "",
							desc: a.desc || a.text || a.content || ""
						};
						alert(JSON.stringify(c)), b.data.setShareInfo(c, function() {})
					})
				}
			}, didi.qq = function(a) {
				return QQ.fn(a)
			}, didi.qq.getSign = QQ.getSign, didi.qq.setShare = QQ.setShare, didi.qq.is = QQ.is,
			function() {
				var App = {
					shareMap: {
						weixin_timeline: "微信朋友圈",
						weixin_appmsg: "微信好友",
						sina_weibo: "新浪微博",
						qq_appmsg: "QQ",
						qzone: "QQ空间"
					},
					cfg: {
						downloadUrl: {
							ios: "https://itunes.apple.com/cn/app/di-di-da-che-zhi-jian-shang/id554499054?ls=1&mt=8",
							android: "http://dldir1.qq.com/diditaxi/apk/didi_psngr.apk"
						}
					},
					is: function() {
						return !!window.DidiJSBridge || !Weixin.is()
					},
					isPre: !1,
					isReady: !1,
					fns: [],
					init: function() {
						didi.is("ios") && App.fn(function(a) {
							setTimeout(function() {
								try {
									a.init && a.init({})
								} catch (b) {}
							}, 500)
						})
					},
					prepare: function() {
						if (!App.isPre) {
							var a = function() {
								App.isReady = !0, $.each(App.fns, function(a, b) {
									b(App.getBridge())
								})
							};
							"undefined" != typeof DidiJSBridge ? a() : document.addEventListener("DidiJSBridgeReady", function() {
								a()
							}, !1), App.isPre = !0
						}
					},
					bridgeCache: !1,
					getBridge: function() {
						var bridge, nativeHandler;
						return window.DidiJSBridge
					},
					formatParam: function(a, b) {
						return a = a.toString() || "", $.isPlainObject(b) && /(^share_|show_entrance)/.test(a) && (b = JSON.stringify(b)), b
					},
					fn: function(a) {
						return App.is() ? 0 === arguments.length ? !0 : (App.isReady ? a(App.getBridge()) : (App.fns.push(a), App.prepare()), void 0) : !1
					},
					shareData: {},
					formatShareData: function(a, b) {
						var c = {
								url: "link,url",
								icon_url: "icon",
								img_url: "imgUrl,img_url",
								title: "title",
								content: "desc,content",
								from: "from"
							},
							d = {
								title: "滴滴一下，美好出行",
								from: "native"
							},
							e = {};
						return b = b ? b + "_" : "", $.each(c, function(c, d) {
							c = "share_" + c, $.each(d.split(","), function(d, f) {
								return e[c] = e[c] || a[b + f] || "", e[c] ? !1 : void 0
							}), e[c] || $.each(d.split(","), function(b, d) {
								return e[c] = e[c] || a[d] || "", e[c] ? !1 : void 0
							})
						}), $.each(d, function(a, b) {
							var c = "share_" + a;
							e[c] = e[c] || b
						}), e
					},
					setShare: function(a) {
						var c, b = {
							entrance: {
								icon: "http://static.xiaojukeji.com/api/img/i-webview-entrance.png"
							},
							buttons: []
						};
						a !== !1 && (App.shareData = a, c = a.success || function() {}, $.each(App.shareMap, function(d, e) {
							a[d] !== !1 && b.buttons.push({
								type: "share_" + d,
								name: e,
								data: App.formatShareData(a, d),
								callback: c
							})
						})), b.buttons.push({
							type: "page_refresh",
							name: "刷新"
						}), App.fn(function(a) {
							a = window.DidiJSBridge, a.callHandler("init_entrance", JSON.stringify(b)), a.callHandler("show_entrance")
						})
					},
					share: function(a, b) {
						App.fn(function(c) {
							if (a = a.replace(/\-/g, "_"), App.shareMap[a]) {
								var d = App.formatShareData(b || App.shareData, a);
								c.callHandler("share_" + a, JSON.stringify(d))
							}
						})
					},
					open: function(a) {
						var b, c, d, e, f;
						didi.is("mobile") && (a = a || {}, b = Date.now(), c = "didipasnger://common_marketing_host", d = {
							0: "出租车|taxi|打车|0",
							1: "专车|udahce|1",
							2: "快车|flier|fastcar|2",
							3: "顺风车|shunfengche|3",
							4: "代驾|daijia|4"
						}, e = 0, f = a.business || a.biz, f && ($.each(d, function(a, b) {
							b.indexOf(f) > -1 && (e = a)
						}), c = c + "?business=" + e), a.loading !== !1 && didi.loading("请稍候..."), $("<iframe>").attr({
							src: a.packageUrl || c
						}).hide().appendTo("body"), setTimeout(function() {
							var d, c = Date.now();
							(!b || 1500 > c - b) && (d = a.system ? "ios" === a.system ? "ios" : "android" : didi.is("ios") ? "ios" : "android", url = a[d] || App.cfg.downloadUrl[d], location.href = url, a.loading !== !1 && didi.loading(!1))
						}, 1e3))
					}
				};
				didi.app = function(a) {
					return App.fn(a)
				}, $.each("setShare,share,is,open".split(","), function(a, b) {
					App.fn[b] = App[b]
				}), didi.app = App.fn, $(App.init)
			}(),
			function() {
				var a = {
					isPre: !1,
					isReady: !1,
					fns: [],
					init: function() {},
					prepare: function() {
						if (!a.isPre) {
							var b = function() {
								a.isReady = !0, $.each(a.fns, function(a, b) {
									b(window.AlipayJSBridge)
								})
							};
							"undefined" != typeof window.AlipayJSBridge ? b() : document.addEventListener("AlipayJSBridgeReady", function() {
								b()
							}, !1), a.isPre = !0
						}
					},
					fn: function(b) {
						return didi.is("alipay") ? 0 === arguments.length ? !0 : (a.isReady ? b(window.AlipayJSBridge) : (a.fns.push(b), a.prepare()), void 0) : !1
					}
				};
				didi.alipay = function(b) {
					return a.fn(b)
				}, $(a.init)
			}(), didi.setShare = function(a) {
				didi.weixin.setShare(a), didi.app.setShare(a)
			}
	}(),
	function() {
		"use strict";
		var a = {
			_tipsCont: null,
			_tips: null,
			_isTipShow: !1,
			_tipsNs: "default",
			_tipsFn: {},
			tips: function(b, c) {
				var e, f, d = 1e4;
				"number" == typeof c ? (d = 1e3 * c, c = "default") : c = c || "default", a._tipsCont ? (e = a._tipsCont, f = a._tips) : (e = $("<div>").addClass("slide-tips-cont"), f = $("<div>").addClass("slide-tips"), e.append(f).appendTo("body"), e.touch(function() {
					$(e).removeClass("open")
				}), a._tipsCont = e, a._tips = f), a._tipsFn[c] && clearTimeout(a._tipsFn[c]), a._tipsFn[c] = setTimeout(function() {
					a.tips(!1, c)
				}, d), b === !1 ? (void 0 === c || c === a._tipsNs) && e.removeClass("open") : setTimeout(function() {
					f.html(b), e.addClass("open"), a._tipsNs = c
				})
			}
		};
		didi.tips = a.tips
	}();