// ==UserScript==
// @name         Twitch Auto-claim Channel Points
// @version      1.0.1
// @author       elforo
// @description  Automatically claim channel points on twitch
// @namespace    mailto:dev@lforchini.com
// @match        *://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    let clicked = false;

    new window.MutationObserver((_e) => {
        let elem = document.querySelector(".claimable-bonus__icon");
        if (elem && !clicked) {
            elem.click();
            clicked = true;
            setTimeout(() => {
                clicked = false;
            }, Math.random() * 1000 + 2000);
        }
    });
})();
