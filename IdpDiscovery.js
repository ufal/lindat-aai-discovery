var IdPDiscovery = function () {
  function g(a, b, c) {
    var d = -1 != a.indexOf("?") ? "&" : "?";
    return a + d + b + "=" + c
  }
  var f = [],
    e = {}, urlParams = {};
  (function () {
    var e,
      a = /\+/g,  // Regex for replacing addition symbol with a space
      r = /([^&;=]+)=?([^&;]*)/g,
      d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
      q = window.location.search.substring(1);

    while (e = r.exec(q))
      urlParams[d(e[1])] = d(e[2]);
  })();

  return {
    nameOf: function (a) {
      return e[a] ? e[a] : a
    },
    getSP: function () {
      return urlParams.entityID || null
    },
    getName: function () {
      return this.nameOf(this.getSP())
    },
    getHostname: function (a) {
      return a.match(/^(?:f|ht)tp(?:s)?:\/\/([^/]+)/im)[1].toString()
    },
    returnTo: function (a) {
      var b = urlParams["return"] || null,
        h = urlParams.returnIDParam || "entityID",
        d = !1;
      if (b) {
        for (var i = this.getHostname(b), e = 0; e < f.length; e++) f[e] == i && (d = !0);
        d || (b = g(b, "error", encodeURIComponent("IdP Discovery: Access denied. Access not granted to return results to host [" + i + "]")), DiscoJuice.Utils.log("Access denied for return parameter [" + i + "]"), DiscoJuice.Utils.log("Allowed hosts"), DiscoJuice.Utils.log(f));
        d ? a.entityID ? (a && a.auth && (b = g(b, "auth", a.auth)), DiscoJuice.Utils.log("ReturnTo with Entityid"), window.location = g(b, h, escape(a.entityID))) : (DiscoJuice.Utils.log("ReturnTo without Entityid"), DiscoJuice.Utils.log(a), window.location = b) : window.location = b
      } else DiscoJuice.Utils.log("Missing required parameter [return]")
    },
    receive: function () {
      if (this.getSP()) {
        var a = DiscoJuice.Utils.readCookie() || null;
        urlParams.IdPentityID && (DiscoJuice.Utils.createCookie(urlParams.IdPentityID), a = urlParams.IdPentityID);
        "true" === (urlParams.isPassive || "false") && this.returnTo({
          entityID: a
        })
      }
    },
    setup: function (djc, b, c) {
      var discovery = this;
      c && (e = c);
      console.log("Setting up DiscoJuice");
      f = b;
      this.receive();
      return function (a) {
        discovery.returnTo(a)
      }
    }
  }
}();
