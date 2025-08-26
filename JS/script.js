/**
 * Portfolio
 * Aidan Khan
 */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('proj1').addEventListener('click', () => {
        console.log("sus")
        openWindow();
    });

})

function openWindow() {
    const popup = document.getElementById('popup')
    popup.showModal();
    document.documentElement.classList.add("modal-open")


    document.getElementById('close').addEventListener('click', () => {
        console.log("baka")
        popup.close();
        document.documentElement.classList.remove("modal-open")
    });
}