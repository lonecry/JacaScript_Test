/*!2017-03-06 14:52 */
!function(a){
    var b,c;
    if("undefined" == typeof ac_info_ware && (ac_info_ware = {}), c = ac_info_ware, function(){
            var a = navigator.userAgent.toLowerCase(),d = -1 != a.indexOf("like mac os x") ? !0 : !1;
            return "undefined" != typeof _mmW ? void(b = _mmW) : (b = _mmW = {
                    getProtocol        :function(){
                        return location.protocol + "//"
                    },joinParameters   :function(a,b){
                        var c = [];
                        if("," === b)for(var d in a)a.hasOwnProperty(d) && Array.prototype.push.call(c,a[d]);else if("&" === b)for(var e in a)a.hasOwnProperty(e) && Array.prototype.push.call(c,e + "=" + a[e]);
                        return c.join(b)
                    },createCacheBuster:function(){
                        return Math.ceil(1e10*Math.random())
                    },getCookieEnabled :function(){
                        return navigator.cookieEnabled ? 1 : 0
                    },getPreviousUrl   :function(){
                        var a = "";
                        try{
                            a = top.document.referrer
                        }catch(b){
                        }
                        return encodeURIComponent(a)
                    },getCurrentUrl    :function(){
                        var a = "";
                        try{
                            a = top.location.href
                        }catch(b){
                            try{
                                a = document.referrer
                            }catch(c){
                            }
                        }
                        return encodeURIComponent(a)
                    },getCharset       :function(){
                        var a = "";
                        return a = document.charset ? document.charset : document.characterSet, a || (a = "utf-8"), a = a.toLowerCase()
                    },load             :function(a,b,c,d,e){
                        var f,g = /loaded|complete/i,h = "ac_script_$" + Math.ceil(1e10*Math.random()),i = document.getElementsByTagName("script"),j = document.body ? document.body.firstChild : i[0];
                        b ? (f = document.createElement("script"), f.type = "text/javascript", f.async = 1, f.id = h, f.src = a, j.parentNode.insertBefore(f,j)) : ("undefined" != typeof ActiveXObject && (g = /complete/i), document.write('<script type="text/javascript" src="' + a + "&_time=" + +new Date + '" id="' + h + '"></script>')), f = document.getElementById(h), f && (f.onload = f.onreadystatechange = function(){
                            (!f.readyState || f.readyState.match(g)) && ("function" == typeof c && (c(), c = null), f && f.parentNode && (f.onload = f.onreadystatechange = null, f.parentNode.removeChild(f), f = null))
                        }), d && setTimeout(function(){
                            f && ("function" == typeof e && (e(), e = null), f.src = "javascript:void(0)")
                        },d)
                    },send             :function(a,d){
                        var e,a,f = document.getElementsByTagName("script")[0],g = /\[timestamp\]|\[ts\]/i,h = /\[vid\]/i;
                        d = d ? d : Math.ceil(1e8*Math.random()), a && (a = a.replace(h,b.vid ? b.vid : ""), g.test(a) ? (c.ts || (c.ts = new Date - 0), a = a.replace(g,c.ts)) : a += -1 != a.indexOf("?") ? "&cb=" + d : "?cb=" + d, e = document.createElement("img"), e.style.display = "none", f.parentNode.insertBefore(e,f), e.src = a)
                    },track            :function(a){
                        a = a.split("|||");
                        for(var c = 0 ; c < a.length ; c++)a[c] && b.send(a[c])
                    },cookie           :function(a,b,c){
                        if("undefined" == typeof b){
                            var d = ";?" + a + "=([^;]*);?",e = new RegExp(d);
                            return e.test(document.cookie) ? decodeURIComponent(RegExp.$1) : null
                        }
                        null === b && (b = "", c = c || {}, c.expires = -1);
                        var f = a + "=" + b;
                        c && (c.expires && (f += ";expires=" + c.expires.toUTCString()), c.path && (f += ";path=" + c.path), c.domain && (f += ";domain=" + c.domain), c.secure && (f += ";secure")), document.cookie = f
                    },acookie          :function(){
                        var a = /MicroMessenger/g;
                        if(!a.test(window.navigator.userAgent) && !b.cookie("afpCT")){
                            var c = new Date;
                            c.setHours(c.getHours() + 1), b.cookie("afpCT",1,{
                                expires:c,
                                path   :"/",
                                domain :location.hostname
                            });
                            var d = document.createElement("iframe");
                            d.style.cssText = "width:0;height:0;display:none", d.src = "//afpeng.csbew.com/acookie.html", document.body.insertBefore(d,document.body.firstChild);
                            var e = document.createElement("iframe");
                            e.style.cssText = "width:0;height:0;display:none", e.src = "//afpssp.alimama.com/acookie.html", document.body.insertBefore(e,document.body.firstChild)
                        }
                    },$                :function(a){
                        return "string" == typeof a ? document.getElementById(a) : a
                    },css              :function(a,c){
                        var d = b.$(a);
                        if("string" == typeof c){
                            if(d.currentStyle)return d.currentStyle[c];
                            if(window.getComputedStyle)return document.defaultView.getComputedStyle(d,null)[c]
                        }else if("object" == typeof c)for(var e in c)c.hasOwnProperty(e) && (d.style[e] = c[e])
                    },element          :function(a,c,d,e){
                        var f = document.createElement(a);
                        if(c)for(var g in c)c.hasOwnProperty(g) && f.setAttribute(g,c[g]);
                        d && b.css(f,d), e && (f.innerHTML = e);
                        try{
                            return f
                        }finally{
                            f = null
                        }
                    },getVPSize        :function(){
                        var a,b;
                        return a = "CSS1Compat" == document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth, b = "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight, [a,b]
                    },postMessage      :function(a,b,d){
                        var e = "ch" + Math.ceil(1e8*Math.random());
                        b.chid = e, b.sender = "csbew", d && (c[e] = d), a.postMessage(b,"*")
                    },addEvent         :function(a,b,c){
                        a.attachEvent ? a.attachEvent("on" + b,c) : a.addEventListener && a.addEventListener(b,c,!1)
                    },removeEvent      :function(a,b,c){
                        a.detachEvent ? a.detachEvent("on" + b,c) : a.removeEventListener && a.removeEventListener(b,c,!1)
                    },apply            :function(a,b,c){
                        if(c && this.apply(a,c), a && b && "object" == typeof b)for(var d in b)a[d] = b[d];
                        return a
                    },parseScript      :function(a){
                        for(var b,c,d = a.getElementsByTagName("script"),e = function(a,b){
                            for(var c = 0 ; c < b.length ; c++)a.setAttributeNode(b[c].cloneNode(!1))
                        },f = 0 ; f < d.length ; f++)b = d[f], c = document.createElement("script"), e(c,b.attributes), "" != b.textContent && (c.textContent = b.textContent), a.replaceChild(c,b)
                    },ifmcode          :function(c,d,e,f,g){
                        var h,i,j = "",k = Math.ceil(1e6*Math.random()),l = {
                            id               :c + k,
                            name             :c + k,
                            src              :"about:blank",
                            width            :e,
                            height           :f,
                            vspace           :"0",
                            hspace           :"0",
                            allowTransparency:"true",
                            scrolling        :"no",
                            marginHeight     :"0",
                            marginWidth      :"0",
                            frameBorder      :"0",
                            align            :"center,center"
                        },m = {
                            border       :0,
                            verticalAlign:"bottom",
                            margin       :"0 auto",
                            display      :"block",
                            overflow     :"hidden"
                        },n = !(window.opera || -1 != a.indexOf("msie")),o = function(a){
                            return -1 == a.indexOf("<body>") && (a = '<!doctype html><html><head><meta charset="utf-8" /><style>html,body{margin:0;padding:0;}</style></head><body>' + a + "</body></html>"), a
                        },p = function(a){
                            for(var b = document.getElementsByTagName("base"),c = null,d = b.length ; d-- ;)if(b[d].target && "_self" !== b[d].target.toLowerCase()){
                                c = b[d];
                                break
                            }
                            c ? (c.setAttribute("preTarget",c.target), c.target = "_self", a && a(function(){
                                    c.target = c.getAttribute("preTarget")
                                })) : a && a()
                        },q = function(){
                            try{
                                i.open("text/html","replace"), i.write(j), n && i.close()
                            }catch(a){
                            }
                        },r = function(){
                            p(function(a){
                                j = j.replace(/[\'\"\/\\]/g,"\\$&"), j = j.replace(/\r/g,"\\r"), j = j.replace(/\n/g,"\\n"), j = j.replace(/\t/g,"\\t"), j = "javascript:(function(){document.open('text/html','replace');document.domain=\"" + document.domain + '";document.write("' + j + '");' + (n ? "document.close();" : "") + "})();";
                                try{
                                    h.src = j
                                }catch(b){
                                }
                                a && a()
                            })
                        };
                        return g = g || function(){
                            }, j = o(d), h = b.element("iframe",l,m), b.addEvent(h,"load",function(){
                            b.removeEvent(h,"load",arguments.callee);
                            try{
                                i = h.contentWindow.document, q(), g()
                            }catch(c){
                                -1 != a.indexOf("msie") ? setTimeout(function(){
                                        r(), g()
                                    },0) : (r(), g())
                            }
                        }), h
                    },q                :function(a){
                        return new b.q.prototype.init(a)
                    },r                :function(a,c,d,e){
                        for(var f = 0 ; f < a.dataArr.length ; f++)new b.r.prototype.init(a.dataArr[f],f,a)
                    }
                }, b.addEvent(window,"message",function(a){
                    var b = a.data,d = b.ctr;
                    if("ware" == d){
                        var e = b.sender,f = b.chid;
                        e && "csbew" == e && f && c[f] && c[f](b)
                    }else if("warer" == d){
                        var g,h = b.aid,i = b.method,j = b.params ? b.params : [];
                        if(h && i && (g = c["r" + h], g && g[i]))try{
                            j.push(a), g[i].apply(g,j)
                        }catch(k){
                        }
                    }
                },!1), b.q.prototype = {
                    init             :function(a){
                        var e = this,f = {async:0,sendReferer:!1,sendTopUrl:!1};
                        if(a && a.aid){
                            a = b.apply({},a,f), a.timeout_fn && (a.timeout_clear = setTimeout(function(){
                                a.timeout_run = !0, a.timeout_fn()
                            },3e3)), e.aid = a.aid;
                            var g = {async:1,destid:1,sendreferer:1,sendkeywords:1};
                            if(c["i" + e.aid])for(var h in a)a.hasOwnProperty(h) && (g[h] && c["i" + e.aid][h] || (c["i" + e.aid][h] = a[h]));else c["i" + e.aid] = a;
                            !function(){
                                var a = "ac_js86_" + e.aid;
                                if(!b.$(a)){
                                    var c,d = document.createElement("script");
                                    if(d.id = a, document.currentScript) c = document.currentScript, c.parentNode.insertBefore(d,c);else{
                                        var f = document.getElementsByTagName("script"),c = f[f.length - 1];
                                        c.parentNode.insertBefore(d,c)
                                    }
                                }
                            }(), e.info("async") && d ? (e.info("async",1), e.getCustomCookie(function(a){
                                    b.load(e.getServerUrl() + e.getParameters({cc:encodeURIComponent(a)}),e.info("async"))
                                })) : b.load(e.getServerUrl() + e.getParameters(),e.info("async")), c["q" + e.aid] = e
                        }
                    },info           :function(a,b){
                        var d = this,e = "i" + d.aid;
                        return "undefined" == typeof c && (c = {}), c[e] || (c[e] = {}), "undefined" != typeof b && (null === b ? delete c[d.aid][a] : c[e][a] = b), c[e][a]
                    },getParameters  :function(a){
                        var c = this,d = b.getPreviousUrl(),e = b.getCurrentUrl(),f = {
                            a :c.info("aid"),
                            ce:b.getCookieEnabled(),
                            ec:b.getCharset(),
                            sp:1,
                            u :encodeURIComponent(window.location.href),
                            ds:[screen.width,screen.height].join("x")
                        };
                        if(a && b.apply(f,a), c.info("sendReferer") && "" !== d && (f.r = d), c.info("sendTopUrl") && "" !== e && e != encodeURIComponent(location.href) && (f.curl = e), 1 == c.info("sendkeywords") && ("undefined" != typeof window.ac_keywords_targeting && ac_keywords_targeting || c.info("keywords_targeting")))try{
                            f.kw = encodeURIComponent(c.info("keywords_targeting") || ac_keywords_targeting)
                        }catch(g){
                        }
                        if("undefined" != typeof window.ac_content_targeting && ac_content_targeting || c.info("content_targeting"))try{
                            f.ct = encodeURIComponent(c.info("content_targeting") || ac_content_targeting)
                        }catch(g){
                        }
                        if("undefined" != typeof window.ac_content_id && ac_content_id)try{
                            f.ctid = encodeURIComponent(ac_content_id)
                        }catch(g){
                        }
                        if(f.cb || (f.cb = "_mmW.r"), window.localStorage)try{
                            localStorage._asp_cookie && (f.cc = c.getFirstCookie())
                        }catch(g){
                        }
                        return window["__trans__" + c.info("aid")] && (f.from_csbew = 1), f.lt = 1, f.pvid = c.getCg().cg, f.cg = c.getCg().cg, "undefined" != typeof window.orientation && (f.lt = 90 == Math.pow(window.orientation) ? 2 : 1), window.devicePixelRatio ? f.vps = screen.width*window.devicePixelRatio + "," + screen.height*window.devicePixelRatio : f.vps = screen.width + "," + screen.height, b.joinParameters(f,"&")
                    },getFirstCookie :function(){
                        var a = JSON.parse(localStorage._asp_cookie),b = new Date - 0,c = [];
                        for(var d in a)a[d][1] > b && c.push(d + "=" + a[d]);
                        return encodeURIComponent(c.join(","))
                    },getCustomCookie:function(a){
                        var c = this,d = b.element("iframe",{src:""},{display:"none"});
                        d.src = "//afpmm.alicdn.com/g/mm/afp-cdn/ls.html", b.addEvent(d,"load",function(){
                            b.removeEvent(d,"load",arguments.callee), b.postMessage(d.contentWindow,{ctr:"getCookie"},function(b){
                                a(b.cc)
                            })
                        }), document.body.insertBefore(d,document.body.firstChild), c.info("lcbridge",d)
                    },getServerUrl   :function(){
                        var a = this;
                        return b.getProtocol() + a.getBaseUrl() + "ex?"
                    },getBaseUrl     :function(){
                        var a = this;
                        return a.info("serverbaseurl") ? a.info("serverbaseurl") : a.getLBUrl()
                    },getLBUrl       :function(){
                        var a = this;
                        return a.info("serverbaseurl","afpeng.alimama.com/")
                    },getStaticUrl   :function(){
                        var a = this;
                        return a.info("staticbaseurl") ? a.info("staticbaseurl") : a.info("staticbaseurl","s.csbew.com/")
                    },getCg          :function(){
                        function a(a,b){
                            var c,d = "",e = 1;
                            if(e = Math.floor(a.length/b), 1 == e) d = a.substr(0,b);else for(c = 0 ; b > c ; c++)d += a.substr(c*e,1);
                            return d
                        }

                        var b,c,d,e,f = "",g = "",h = location,i = "";
                        if("" === g){
                            var j = h.search.length > 9 ? h.search : (h.pathname.length > 9 ? h.pathname : h.href).substr(1);
                            for(b = document.cookie.split(";"), c = 0 ; c < b.length ; c++)b[c].split("=").length > 1 && (i += b[c].split("=")[1]);
                            i.length < 16 && (i += "0123456789abcdef"), g = a(j,8) + a(i,16)
                        }
                        for(c = 1 ; 32 >= c ; c++)d = Math.floor(16*Math.random()), g && c <= g.length && (e = g.charCodeAt(c - 1), d = (d + e)%16), f += d.toString(32), 1 === c && "a" > f && (f = "a");
                        return {cg:f}
                    }
                }, b.q.prototype.init.prototype = b.q.prototype, b.r.prototype = {
                    init             :function(a,e,f){
                        function g(a,b){
                            return typeof a == typeof b ? a == b : ("string" != typeof a && (a = String(a)), "string" != typeof b && (b = String(b)), a == b ? !0 : !1)
                        }

                        var h = this;
                        try{
                            var i = ac_info_ware["i" + a.pid];
                            if(i.timeout_fn){
                                if(i.timeout_run)return;
                                clearTimeout(i.timeout_clear), i.timeout_fn = function(){
                                }
                            }
                        }catch(j){
                        }
                        var k = {
                            aid :a.aid || a.pid,
                            mid :a.mid,
                            w   :a.width,
                            h   :a.height,
                            data:"",
                            cu  :"",
                            itu :"",
                            at  :"0",
                            logo:{show:0,pos:0,ni:["",0,0],cu:""}
                        };
                        if(h.aid = k.aid, !a.creatives.length)return void("function" == typeof h.info("adNone") ? h.info("adNone")() : "function" == typeof h.info("noAd") && h.info("noAd")(aid));
                        var l,m,n = f.templateArr,o = a.creatives[0];
                        if(m = o.macro || {}, l = o.iconLocation, k.at = o.productType.match(/4|6|2/g) ? 2 : "" === o.creativeType ? n[o.templateId].cOutPutType : m.cOutPutType, k.productType = o.productType, k.cid = o.cid, k.impTrack = o.impTrack, k.optTrack = o.optTrack, k.ctu = o.ctu && o.ctu.join("|||") || "", k.itu = o.itu && o.itu.join("|||") || "", k.cu = (d ? m.cIosDownload : m.cAndroidDownload) || m.cClickUrl, k.type = o.productType.match(/4|6|2/g) ? 3 : m.cType || 4, k.data = m.cHtmlContentsRaw || m.cHtmlContents || m.cSizePlayerUrl, n && n[o.templateId] && n[o.templateId].slotNum){
                            k.data = n[o.templateId].templateData, k.creatives = [];
                            for(var p = 0 ; p < a.creatives.length ; p++)k.creatives[p] = a.creatives[p].macro;
                            var q = n[o.templateId];
                            q.slotNum > 0 && (l = q.iconLocation || 0)
                        }
                        if(15 == o.creativeType && (k.data = '<a style="' + m.cHtmlStyle + ' " target="_blank" ' + (k.cu ? 'href="' + k.cu + '"' : "") + ">" + m.cContents + "</a>"), "" === o.creativeType){
                            k.impTrack = [], k.optTrack = [];
                            for(var p = 0 ; p < a.creatives.length ; p++)k.impTrack.push(a.creatives[p].impTrack), k.optTrack.push(a.creatives[p].optTrack)
                        }
                        if(16 == o.creativeType || "0" === o.creativeType){
                            k.type = 5, k.com_params = [], k.inv_params = [], k.rem_inv_ware = [], k.rem_inv_ware.x = 0, k.rem_inv_ware.r = !1, k.rem_inv_ware.c = !1, k.rem_inv_ware.fc = !1, k.ac_e_callback_ware = [], k.com_show_ware = function(a){
                                var b = new Image;
                                b.onload = b.onerror = function(){
                                    b.onload = b.onerror = null
                                }, b.src = a
                            }, window.ac_e_callback = function(){
                                k.ac_e_callback_ware[k.rem_inv_ware.x - 1] && k.ac_e_callback_ware[k.rem_inv_ware.x - 1].call(k)
                            }, k.rem_inv = function(){
                                this.rem_inv_ware.r = !0, this.rem_inv_ware.fc = !0
                            }, k.rem_invt = function(){
                                "0" === o.creativeType && "4" === o.tid && 1 === a.creatives.length ? (h.creative = b.element("ins",null,{
                                        display          :"block",
                                        overflow         :"hidden",
                                        height           :"50px",
                                        width            :"100%",
                                        padding          :"0",
                                        margin           :"0 auto",
                                        "text-decoration":"none"
                                    }), h.creative.appendChild(h.createIframe(v.aid)), this.data = '<script>var _maxCount = 50, _aid = "' + v.aid + '";function _ifmResize(){if(document.body.clientHeight == 0){return};parent.postMessage({method:"setSize",ctr:"warer",aid: _aid,params:[{"height":document.body.clientHeight+"px"}]},"*");};window.addEventListener("DOMContentLoaded",function(){if(_maxCount>=0){_maxCount--;_ifmResize();setTimeout(arguments.callee,200)}},false); var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; if(!!MutationObserver){ var mo = new MutationObserver(function(){_ifmResize();});mo.observe(document.body, {"childList": true,"subtree": true});} </script>' + this.data, this.type = 4) : (this.com_show_ware(this.inv_params[this.rem_inv_ware.x]), document.write(['<div id="ac_wrap_',this.aid,this.rem_inv_ware.x,'">'].join("")), this.rem_inv_ware[this.rem_inv_ware.x] && (this.rem_inv_ware[this.rem_inv_ware.x++].call(null,this), _ac_ejs_url = "//afpmm.alicdn.com/g/mm/afp-cdn/JS/e.js", document.write('<script src="' + _ac_ejs_url + '" type="text/javascript"></script>')))
                            }, k.com_show = function(){
                                this.rem_inv_ware.c = !0, this.rem_inv_ware.fc = !0
                            }, k.com_showt = function(){
                                this.com_show_ware(this.com_params[this.rem_inv_ware.x - 1]), this.ac_append_ad(), this.appendLogo(), this.rem_invt = this.rem_inv = this.com_showt = this.com_show = null
                            }, k.rem_inv_by_var = function(a,b,c,d){
                                var e = this;
                                return function(){
                                    return window[b] == d || g(window[b],d) ? (window[b] = null, e.rem_inv_ware.r = !1, e.rem_inv_ware.c = !1, e.com_showt(), !1) : window[a] == c || g(window[a],c) ? (window[a] = null, e.rem_inv_ware.r = !1, e.rem_inv_ware.c = !1, e.rem_invt(), !1) : void(("undefined" == typeof window[a] || null == window[a]) && (e.rem_inv_ware.r = !1, e.rem_inv_ware.c = !1, e.rem_invt()))
                                }
                            }, k.rem_inv_by_fn = function(){
                                return this.rem_inv_ware.c ? (this.rem_inv_ware.r = !1, this.rem_inv_ware.c = !1, this.rem_inv_ware.fc = !1, this.com_showt(), !1) : this.rem_inv_ware.r ? (this.rem_inv_ware.r = !1, this.rem_inv_ware.c = !1, this.rem_inv_ware.fc = !1, this.rem_invt(), !1) : void(this.rem_inv_ware.fc || (this.rem_inv_ware.r = !1, this.rem_inv_ware.c = !1, this.rem_invt()))
                            }, k.ac_append_ad = function(){
                                var a = "i" + k.aid;
                                if(window._mmW && window.ac_info_ware && window.ac_info_ware[a]){
                                    var b = ac_info_ware[a].destid,c = _mmW.$("ac_wrap_" + k.aid + (this.rem_inv_ware.x - 1));
                                    b && _mmW.$(b) && c && _mmW.$(b) != c.parentNode && _mmW.$(b).appendChild(c)
                                }
                            }, k.appendLogo = function(){
                                var a = _mmW.$("ac_wrap_" + k.aid + (this.rem_inv_ware.x - 1));
                                if(this.logo && 0 != this.logo.show){
                                    var c = [{top:0,left:0},{bottom:0,left:0},{top:0,right:0},{bottom:0,right:0}];
                                    h.logoEl = b.element("a",{
                                        href  :this.logo.cu,
                                        target:"_blank"
                                    },b.apply({
                                        width   :this.logo.ni[1] + "px",
                                        height  :this.logo.ni[2] + "px",
                                        border  :"none",
                                        position:"absolute"
                                    },c[this.logo.pos])), h.logoEl.appendChild(b.element("img",{src:this.logo.ni[0]},{
                                        display:"block",
                                        border :"none",
                                        width  :this.logo.ni[1] + "px",
                                        height :this.logo.ni[2] + "px"
                                    })), a.style.position = "relative", a.appendChild(h.logoEl)
                                }
                            }, window["__HUAN__" + k.aid] = [];
                            for(var r = 0 ; r < a.creatives.length ; r++)if(k.com_params.push(a.creatives[r].impTrack), k.inv_params.push(a.creatives[r].optTrack), 16 == a.creatives[r].creativeType || "0" === a.creatives[r].creativeType){
                                var s = a.creatives[r].disconfig,t = a.creatives[r].macro.cHtmlContentsRaw;
                                a.creatives[r].bidpid && (a.creatives[r].macro.cHtmlContentsRaw = t.replace("{{bidpid}}",a.creatives[r].bidpid));
                                var u = function(b,c){
                                    return function(){
                                        document.write(a.creatives[b].macro.cHtmlContentsRaw), b + 1 == c && this.com_show()
                                    }
                                }(r,a.creatives.length);
                                switch(s.interfaceType){
                                    case"1":
                                        window[s.interfaceFunc.hasAd] = function(){
                                            k.rem_inv_ware.c = !0, k[s.interfaceFunc.hasAd] = null, k.rem_inv_ware.fc = !0
                                        }, window[s.interfaceFunc.noAd] = function(){
                                            k.rem_inv_ware.r = !0, k[s.interfaceFunc.noAd] = null, k.rem_inv_ware.fc = !0
                                        }, k.ac_e_callback_ware.push(k.rem_inv_by_fn);
                                        break;
                                    case"2":
                                        k.ac_e_callback_ware.push(k.rem_inv_by_var(s.interfaceVar.noAdName,s.interfaceVar.hasAdName,s.interfaceVar.noAdValue,s.interfaceVar.hasAdValue))
                                }
                                k.rem_inv_ware.push(u.bind(k))
                            }else!function(a,b){
                                var c = {};
                                c.templateArr = f.templateArr, c.dataArr = [f.dataArr[a]], c.dataArr[0].creatives = [f.dataArr[a].creatives[b]], k.rem_inv_ware.push(function(){
                                    _mmW.r(c), k.com_show()
                                })
                            }(e,r)
                        }
                        try{
                            -1 != l ? k.logo.pos = l - 1 : f.icon.siteIconLocation ? (k.logo.pos = f.icon.siteIconLocation && f.icon.siteIconLocation - 1 || 0, l = f.icon.siteIconLocation || 0) : l = 0, 0 != l && (k.logo.show = l, k.logo.ni = [f.icon.iconFileUrl].concat(f.icon.iconSize.split(",")), k.logo.cu = f.icon.iconClickUrl), window.ac_info_ware["logo" + k.aid] = k.logo
                        }catch(j){
                        }
                        var v = k;
                        if(h.aid = v.aid, h.mid = v.mid, h.cid = v.cid, h.o = v, v.vid && (b.vid = v.vid), v.cc)if(h.info("lcbridge"))try{
                            b.postMessage(h.info("lcbridge").contentWindow,{ctr:"setCookie",cc:v.cc})
                        }catch(w){
                        }else try{
                            if(window.localStorage && localStorage._asp_cookie){
                                var x = JSON.parse(localStorage._asp_cookie);
                                b.apply(x,v.cc), localStorage._asp_cookie = JSON.stringify(x)
                            }
                        }catch(w){
                        }
                        if(1 == v.type) h.creative = b.element("img",{src:v.data,border:0,alt:""},{
                            width  :"100%",
                            display:"block"
                        }), v.cu && "" != v.cu && (h.creative.onclick = function(){
                            v.cu && window.open(v.cu,h.info("target") ? h.info("target") : "_blank")
                        });else if(2 == v.type) -1 == v.data.indexOf("#") ? v.data += "#" : v.data = v.data.replace(/(?:#).+/,""), v.data += b.joinParameters({
                            aid :v.aid,
                            clk :encodeURIComponent(v.cu),
                            curl:b.getCurrentUrl(),
                            purl:b.getPreviousUrl()
                        },"&"), h.creative = b.element("iframe",{
                            width      :v.w,
                            height     :v.h,
                            src        :v.data,
                            frameBorder:0,
                            scrolling  :"no"
                        });else if(4 == v.type)if(1 == v.at) h.creative = b.element("ins",null,{
                            display          :"block",
                            padding          :"0",
                            margin           :"0 auto",
                            "text-decoration":"none"
                        },h.renderCreative(v.data,v.creatives));else if(v.data.match(/^http:/g)) v.data += "#" + v.aid, v.h || (v.h = 50), h.creative = b.element("iframe",{
                            width      :"100%",
                            height     :v.h,
                            src        :v.data,
                            frameBorder:0,
                            scrolling  :"no"
                        }), h.clist = v.creatives;else{
                            h.creative = b.element("ins",null,{
                                display          :"block",
                                padding          :"0",
                                margin           :"0 auto",
                                "text-decoration":"none"
                            });
                            var y = h.renderCreative(v.data,v.creatives);
                            v.h && 0 != v.h || (v.h = 50), v.data = y + '<script>var _maxCount = 50, _aid = "' + v.aid + '";function _ifmResize(){if(document.body.clientHeight == 0){return};parent.postMessage({method:"setSize",ctr:"warer",aid: _aid,params:[{"height":document.body.clientHeight+"px"}]},"*");};window.addEventListener("DOMContentLoaded",function(){if(_maxCount>=0){_maxCount--;_ifmResize();setTimeout(arguments.callee,200)}},false); var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; if(!!MutationObserver){ var mo = new MutationObserver(function(){_ifmResize();});mo.observe(document.body, {"childList": true,"subtree": true});} </script>', h.codeIfm = h.createIframe(v.aid), h.creative.appendChild(h.codeIfm)
                        }else if(5 == v.type) v.rem_invt(), h.creative = h.creative || b.$("ac_wrap_" + v.aid + (v.rem_inv_ware.x - 1));else if(1 == v.at && (h.creative = b.element("ins",null,{
                                display          :"block",
                                padding          :"0",
                                margin           :"0 auto",
                                "text-decoration":"none"
                            },v.data), b.parseScript(h.creative)), 2 == v.at){
                            if(v.productType && (4 == v.productType || 6 == v.productType || 2 == v.productType)){
                                window.jsonp_callback_afp = function(a){
                                    window.tanx_ssp_temp_show_obj = a
                                };
                                var z = v.data.match(/pid.*?(mm.*?)\"/)[1];
                                v.data = '<a style="display:none!important" id="tanx-a-' + z + '"></a><script>' + v.data + '</script><script src="//atanx.alicdn.com/t/tanxmobile/tanxsspAfp.js"></script>'
                            }
                            document.write(['<div id="ac_wrap_',v.aid,'">'].join("")), document.write(v.data), document.write("</div>"), h.logo(v.aid)
                        }else{
                            var A = h.createIframe(v.aid);
                            v.data = '<script>var _maxCount = 50, _aid = "' + v.aid + '";function _ifmResize(){if(document.body.clientHeight == 0){return};parent.postMessage({method:"setSize",ctr:"warer",aid: _aid,params:[{"height":document.body.clientHeight+"px"}]},"*");};window.addEventListener("DOMContentLoaded",function(){if(_maxCount>=0){_maxCount--;_ifmResize();setTimeout(arguments.callee,200)}},false); var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; if(!!MutationObserver){ var mo = new MutationObserver(function(){_ifmResize();});mo.observe(document.body, {"childList": true,"subtree": true});} </script>' + v.data, h.creative = b.element("ins",null,{
                                display          :"block",
                                overflow         :"hidden",
                                height           :"50px",
                                width            :"100%",
                                padding          :"0",
                                margin           :"0 auto",
                                "text-decoration":"none"
                            }), h.creative.appendChild(A)
                        }
                        if(h.creative && 5 != v.type){
                            if(h.info("wrapperClassName") ? h.wrapper = b.element("div",{"class":h.info("wrapperClassName")},{position:"relative"}) : h.wrapper = b.element("div",null,{position:"relative"}), v.logo && 0 != v.logo.show){
                                var B = [{top:0,left:0},{bottom:0,left:0},{top:0,right:0},{bottom:0,right:0}];
                                h.logoEl = b.element("a",{
                                    href  :v.logo.cu,
                                    target:"_blank"
                                },b.apply({
                                    width   :v.logo.ni[1] + "px",
                                    height  :v.logo.ni[2] + "px",
                                    border  :"none",
                                    position:"absolute"
                                },B[v.logo.pos])), h.logoEl.appendChild(b.element("img",{src:v.logo.ni[0]},{
                                    display:"block",
                                    border :"none",
                                    width  :v.logo.ni[1] + "px",
                                    height :v.logo.ni[2] + "px"
                                })), h.wrapper.appendChild(h.logoEl)
                            }
                            if(h.wrapper.appendChild(h.creative), h.append(h.wrapper), h.settime){
                                var C = h.codeIfm.contentWindow.document;
                                C.open("text/html","replace");
                                var D = v.data;
                                -1 == D.indexOf("<body>") && (D = '<!doctype html><html><head><meta charset="utf-8" /><style>html,body{margin:0;padding:0;}</style></head><body>' + D + "</body></html>"), C.write(D), setTimeout(function(){
                                    C.close()
                                },20), h.settime = 0
                            }
                        }
                        if(v.impTrack && 5 != v.type)if("object" == typeof v.optTrack)for(var E = v.optTrack.length ; E-- ;)b.track(v.impTrack[E]), b.track(v.optTrack[E]);else b.track(v.impTrack), b.track(v.optTrack);
                        v.itu && b.track(v.itu), b.acookie(), c["r" + h.aid] = h
                    },renderCreative :function(a,b){
                        var c = /\[(\d+)\$([\s\S]+?)\$\]/g,d = /\{\$([^\{\}]+)\}/g;
                        return a.replace(c,function(a,c,e){
                            return c = 1*c - 1, b[c] ? e = e.replace(d,function(a,d){
                                    return "undefined" != typeof b[c][d] ? b[c][d] : a
                                }) : ""
                        })
                    },info           :function(a,b){
                        var d = this,e = "i" + d.aid;
                        return "undefined" == typeof c && (c = {}), c[e] || (c[e] = {}), "undefined" != typeof b && (null === b ? delete c[e][a] : c[e][a] = b), c[e][a]
                    },getCreateList  :function(a){
                        var b = this.clist;
                        a.source.postMessage({method:"getCreateListCallback",list:b},"*")
                    },setSize        :function(a){
                        var b = this;
                        for(var c in a)a.hasOwnProperty(c) && (b.creative.style[c] = a[c], b.creative[c] = a[c].replace(/[^0-9%]+/g,""), b.wrapper && (b.wrapper.style[c] = a[c]))
                    },append         :function(a){
                        var c,d,e = this,f = e.info("destid");
                        f && b.$(f) ? b.$(f).appendChild(a) : (c = b.$("ac_js86_" + e.aid), c && (d = c.parentNode, d && d.insertBefore(a,c)))
                    },sendClickReport:function(){
                        var a = this,c = a.o;
                        c.ctu && b.track(c.ctu), a.report(1)
                    },report         :function(a){
                        var c = this,d = {pv:1,sp:[c.aid,c.mid,c.cid,a,0,0,0].join(",")};
                        if(0 != c.mid){
                            if("string" == typeof window.ac_content_id && "" != ac_content_id)try{
                                d.ctid = encodeURIComponent(ac_content_id)
                            }catch(e){
                            }
                            c.o.vid && (d.vid = c.o.vid), b.send(c.getServerUrl() + b.joinParameters(d,"&"))
                        }
                    },getServerUrl   :function(){
                        var a = this;
                        return b.getProtocol() + a.getBaseUrl() + "v.htm?"
                    },getBaseUrl     :function(){
                        var a = this;
                        return a.info("serverbaseurl") ? a.info("serverbaseurl") : a.getLBUrl()
                    },getLBUrl       :function(){
                        var a = this;
                        return a.info("serverbaseurl","csbew.com/")
                    },logo           :function(a){
                        var c = _mmW.$("ac_wrap_" + a),d = ac_info_ware["logo" + a];
                        if("0" != d.location && 0 != d.show){
                            var e = [{top:0,left:0},{bottom:0,left:0},{top:0,right:0},{
                                bottom:0,
                                right :0
                            }],f = b.element("a",{href:d.cu,target:"_blank"},b.apply({
                                width    :d.ni[1] + "px",
                                height   :d.ni[2] + "px",
                                border   :"none",
                                "z-index":"999999",
                                position :"absolute"
                            },e[d.pos]));
                            f.appendChild(b.element("img",{src:d.ni[0]},{
                                display:"block",
                                border :"none",
                                width  :d.ni[1] + "px",
                                height :d.ni[2] + "px"
                            })), c.style.position = "relative", c.appendChild(f)
                        }
                    },createIframe   :function(a){
                        var b = this;
                        return codeIfm = document.createElement("iframe"), codeIfm.id = codeIfm.name = "ac_js86_cr" + a, codeIfm.frameborder = "0", codeIfm.vspace = "0", codeIfm.hspace = "0", codeIfm.width = "100%", codeIfm.height = "100%", codeIfm.allowtransparency = "true", codeIfm.marginheight = "0", codeIfm.marginwidth = "0", codeIfm.scrolling = "no", codeIfm.frameBorder = 0, codeIfm.align = "center,center", this.settime = 1, this.codeIfm = codeIfm, codeIfm.onload = function(){
                            b.ifmLoad = !0
                        }, codeIfm
                    }
                }, void(b.r.prototype.init.prototype = b.r.prototype))
        }(), "object" == typeof ac_as_info && ac_as_info.aid && "afp.csbew.com/" != ac_as_info.serverbaseurl){
        if("string" == typeof window.afp_cur_query)try{
            for(var d = decodeURIComponent(window.afp_cur_query.replace(/^\?/g,"")).split("&"),e = d.length,f = {} ; e ;)d[--e].replace(/(.*)\=(.*)/g,function(a,b,c){
                f[b] = c
            });
            ac_as_info.content_targeting = f.ct || "", ac_as_info.keywords_targeting = f.kw || ""
        }catch(g){
        }
        b.q(ac_as_info), ac_as_info = a
    }
}();