webpackHotUpdate("styles",{

/***/ "./components/TopBar/TopBar.css":
/*!**************************************!*\
  !*** ./components/TopBar/TopBar.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"top_bar":"_177vOvk27bA--KCZB84ine","top_bar_img":"o2c_7XRWS3C0JFMtliO8R","logo":"_2JNWFwL2HhbbjOu8uT6Z9e"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1559432042490");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.15ab8f491da4ce7ca9c6.hot-update.js.map