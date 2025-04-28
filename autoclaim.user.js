// ==UserScript==
// @name         Twitch Auto-claim Channel Points
// @version      1.0
// @author       elforo
// @description  Automatically claim channel points on twitch
// @namespace    mailto:dev@lforchini.com
// @match        *://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    let claiming = false;

    let _ = new window.MutationObserver((e) => {
        let bonus = document.querySelector(".claimable-bonus__icon");
        if (bonus && !claiming) {
            bonus.click();
            claiming = true;
            setTimeout(() => {
                claiming = false;
            }, Math.random() * 1000 + 2000);
        }
    });
})();
