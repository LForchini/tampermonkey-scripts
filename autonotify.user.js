// ==UserScript==
// @name         YouTube Remove Alert
// @version      1.3
// @author       elforo
// @description  Removes the youtube notification alert
// @namespace    mailto:dev@lforchini.com
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    let clicked = false;

    new window.MutationObserver((_e) => {
        let elem = document.querySelector(`[aria-label]="Notifications"`);
        if (elem && !clicked) {
            elem.click();
            elem.click();
            clicked = true;
            setTimeout(() => {
                clicked = false;
            }, Math.random() * 1000 + 2000);
        }
    });
})();
