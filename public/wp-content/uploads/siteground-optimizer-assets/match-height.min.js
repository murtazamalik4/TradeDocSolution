(function(a) {
    'use strict';
    typeof define == 'function' && define.amd ? define(['jquery'], a) : typeof module != 'undefined' && module.exports ? module.exports = a(require('jquery')) : a(jQuery)
})(function(b) {
    var f = -1,
        d = -1,
        c = function(a) {
            return parseFloat(a) || 0
        },
        g = function(e) {
            var f = 1,
                g = b(e),
                d = null,
                a = [];
            return g.each(function() {
                var e = b(this),
                    g = e.offset().top - c(e.css('margin-top')),
                    h = a.length > 0 ? a[a.length - 1] : null;
                h === null ? a.push(e) : Math.floor(Math.abs(d - g)) <= f ? a[a.length - 1] = h.add(e) : a.push(e), d = g
            }), a
        },
        e = function(a) {
            var c = {
                byRow: !0,
                property: 'height',
                target: null,
                remove: !1
            };
            return typeof a == 'object' ? b.extend(c, a) : (typeof a == 'boolean' ? c.byRow = a : a === 'remove' && (c.remove = !0), c)
        },
        a = b.fn.matchHeight = function(d) {
            var c = e(d),
                f;
            return c.remove ? (f = this, this.css(c.property, ''), b.each(a._groups, function(b, a) {
                a.elements = a.elements.not(f)
            }), this) : this.length <= 1 && !c.target ? this : (a._groups.push({
                elements: this,
                options: c
            }), a._apply(this, c), this)
        },
        h, i;
    a.version = 'master', a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._rows = g, a._parse = c, a._parseOptions = e, a._apply = function(j, m) {
        var d = e(m),
            f = b(j),
            i = [f],
            k = b(window).scrollTop(),
            l = b('html').outerHeight(!0),
            h = f.parents().filter(':hidden');
        return h.each(function() {
            var a = b(this);
            a.data('style-cache', a.attr('style'))
        }), h.css('display', 'block'), d.byRow && !d.target && (f.each(function() {
            var c = b(this),
                a = c.css('display');
            a !== 'inline-block' && a !== 'flex' && a !== 'inline-flex' && (a = 'block'), c.data('style-cache', c.attr('style')), c.css({
                display: a,
                'padding-top': '0',
                'padding-bottom': '0',
                'margin-top': '0',
                'margin-bottom': '0',
                'border-top-width': '0',
                'border-bottom-width': '0',
                height: '100px',
                overflow: 'hidden'
            })
        }), i = g(f), f.each(function() {
            var a = b(this);
            a.attr('style', a.data('style-cache') || '')
        })), b.each(i, function(g, f) {
            var a = b(f),
                e = 0;
            if (d.target) e = d.target.outerHeight(!1);
            else {
                if (d.byRow && a.length <= 1) {
                    a.css(d.property, '');
                    return
                }
                a.each(function() {
                    var a = b(this),
                        f = a.attr('style'),
                        c = a.css('display'),
                        g;
                    c !== 'inline-block' && c !== 'flex' && c !== 'inline-flex' && (c = 'block'), g = {
                        display: c
                    }, g[d.property] = '', a.css(g), a.outerHeight(!1) > e && (e = a.outerHeight(!1)), f ? a.attr('style', f) : a.css('display', '')
                })
            }
            a.each(function() {
                var a = b(this),
                    f = 0;
                if (d.target && a.is(d.target)) return;
                a.css('box-sizing') !== 'border-box' && (f += c(a.css('border-top-width')) + c(a.css('border-bottom-width')), f += c(a.css('padding-top')) + c(a.css('padding-bottom'))), a.css(d.property, e - f + 'px')
            })
        }), h.each(function() {
            var a = b(this);
            a.attr('style', a.data('style-cache') || null)
        }), a._maintainScroll && b(window).scrollTop(k / l * b('html').outerHeight(!0)), this
    }, a._applyDataApi = function() {
        var a = {};
        b('[data-match-height], [data-mh]').each(function() {
            var c = b(this),
                d = c.attr('data-mh') || c.attr('data-match-height');
            d in a ? a[d] = a[d].add(c) : a[d] = c
        }), b.each(a, function() {
            this.matchHeight(!0)
        })
    }, h = function(c) {
        a._beforeUpdate && a._beforeUpdate(c, a._groups), b.each(a._groups, function() {
            a._apply(this.elements, this.options)
        }), a._afterUpdate && a._afterUpdate(c, a._groups)
    }, a._update = function(g, c) {
        if (c && c.type === 'resize') {
            var e = b(window).width();
            if (e === f) return;
            f = e
        }
        g ? d === -1 && (d = setTimeout(function() {
            h(c), d = -1
        }, a._throttle)) : h(c)
    }, b(a._applyDataApi), i = b.fn.on ? 'on' : 'bind', b(window)[i]('load', function(b) {
        a._update(!1, b)
    }), b(window)[i]('resize orientationchange', function(b) {
        a._update(!0, b)
    })
})