"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLVerifier = void 0;
var path_1 = require("path");
var HtmlConstants_1 = require("./HtmlConstants");
var HTMLVerifier = (function () {
    function HTMLVerifier(htmlFile) {
        this.htmlFile = htmlFile;
    }
    HTMLVerifier.prototype.isQualified = function () {
        return this.isHTMLCordova() || this.isHTMLIonic();
    };
    HTMLVerifier.prototype.isHTMLCordova = function () {
        var scripts = this.htmlFile.getDOM().window.document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var item = scripts.item(i);
            if (item !== null && (0, path_1.basename)(item.src) === 'cordova.js') {
                return true;
            }
        }
        return false;
    };
    HTMLVerifier.prototype.isHTMLIonic = function () {
        for (var _i = 0, HTML_IDENTIFIER_1 = HtmlConstants_1.HTML_IDENTIFIER; _i < HTML_IDENTIFIER_1.length; _i++) {
            var htmlIdentifier = HTML_IDENTIFIER_1[_i];
            var tags = this.htmlFile.getDOM().window.document.getElementsByTagName(htmlIdentifier);
            if (tags.length > 0) {
                return true;
            }
        }
        return false;
    };
    return HTMLVerifier;
}());
exports.HTMLVerifier = HTMLVerifier;
