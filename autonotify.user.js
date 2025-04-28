// ==UserScript==
// @name         YouTube Remove Alert
// @version      1.1
// @author       elforo
// @description  Removes the youtube notification alert
// @namespace    mailto:dev@lforchini.com
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    let alert = document.querySelector("[aria-label]='Notifications'");

    if (alert) {
        alert.click();
        alert.click();
    }
})();
