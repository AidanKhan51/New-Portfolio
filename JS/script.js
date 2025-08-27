/**
 * Portfolio
 * Aidan Khan
 */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('proj4').addEventListener('click', () => {
        openWindow();
    });
})

function openWindow() {
    const popup = document.getElementById('popup')
    popup.showModal();
    popup.classList.add("modal-open")
    document.getElementById('body').classList.add("disable-scroll")


    document.getElementById('close').addEventListener('click', () => {
        popup.classList.remove("modal-open")
        document.getElementById('body').classList.remove("disable-scroll")
        setTimeout(() => {
            popup.close();
        }, "500");
    });
}

