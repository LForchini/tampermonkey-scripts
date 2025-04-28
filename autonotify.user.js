// ==UserScript==
// @name         YouTube Remove Alert
// @version      1.0
// @author       elforo
// @description  Removes the youtube notification alert
// @namespace    mailto:dev@lforchini.com
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    let alert = document.querySelector("");

    if (alert) {
        alert.click();
        alert.click();
    }
})();
