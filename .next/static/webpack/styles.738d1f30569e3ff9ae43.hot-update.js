webpackHotUpdate("styles",{

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_1dfHw62o6HMAK-fpK4ItW4","middle_section":"_5W7dxcca2ZAMqIbBUcZBo","renta":"Px7_fnS9ldiVU_S17XwZ2","instalacion":"_2AzstyvKhubyoD0z-x9Wfx","instalacion_card":"_14URHQEtgcA-kp1KzKGVC6","renta_card":"_2v0MhEssCoE6PeqtbdGQYC"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1559512250794");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.738d1f30569e3ff9ae43.hot-update.js.map