webpackHotUpdate("styles",{

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_1dfHw62o6HMAK-fpK4ItW4","img":"WweJfdSS6PJgefDlFjldj","middle_section":"_5W7dxcca2ZAMqIbBUcZBo","speakers":"_3lbSWTuDuMHjMV5vc9zKQk","renta":"Px7_fnS9ldiVU_S17XwZ2","renta_h1":"pKHYCRFht_iw3ZuhE-fOg","renta_card":"_2v0MhEssCoE6PeqtbdGQYC","renta_text":"_3I7VuPldF7dQSyNOr60sO7","instalacion":"_2AzstyvKhubyoD0z-x9Wfx","instalacion_text":"_3Ek4vc-qw1T-cbV0bJA76H","instalacion_card":"_14URHQEtgcA-kp1KzKGVC6"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1559620788257");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e9b2ac473f8193738e42.hot-update.js.map