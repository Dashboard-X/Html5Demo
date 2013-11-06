(function (e) {
    e.fn.w3secure = function (t) {
        var n = {
            enableprotect: true
        };
        var r = e.extend({}, n, t);
        if (r.enableprotect === true) {
            var i = this;
            e(i).ready(function () {
                function t() {
                    return false
                }

                function n() {
                    document.onkeypress = function (e) {
                        e = e || window.event;
                        if (e.keyCode === 123) {
                            return false
                        }
                    };
                    document.onmousedown = function (e) {
                        e = e || window.event;
                        if (e.keyCode === 123) {
                            return false
                        }
                    };
                    document.onkeydown = function (e) {
                        e = e || window.event;
                        if (e.keyCode === 123) {
                            return false
                        }
                    };
                    document.oncontextmenu = t;
                    document.onmouseup = t;
                    var n = false;
                    var r = false;
                    var i = false;
                    window.onkeyup = function (e) {
                        if (e.which === 17) n = false
                    };
                    window.onkeydown = function (e) {
                        if (e.which === 17) n = true;
                        if ((e.which === 85 || e.which === 65 || e.which === 88 || e.which === 67 || e.which === 86 || e.which === 83) && n === true) {
                            return false
                        }
                    };
                    window.onkeyup = function (e) {
                        if (e.which === 93 || e.which === 91 || e.which === 224) i = false
                    };
                    window.onkeydown = function (e) {
                        if (e.which === 17 || e.which === 93 || e.which === 91 || e.which === 224) i = true;
                        if ((e.which === 85 || e.which === 65 || e.which === 88 || e.which === 67 || e.which === 86 || e.which === 83) && i === true) {
                            return false
                        }
                    };
                    document.ondragstart = t;
                    e("a").each(function (t, n) {
                        var r = n.href;
                        if (/\.(jpg|png|gif)$/.test(r)) {
                            e(this).prop("href", "#")
                        }
                    })
                }
                n();
                e("body").css({
                    "-webkit-touch-callout": "none",
                    "-webkit-user-select": "none",
                    "-khtml-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none"
                })
            })
        }
    }
})(jQuery)