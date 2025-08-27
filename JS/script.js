/**
 * Portfolio
 * Aidan Khan
 */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('proj1').addEventListener('click', () => {
        openWindow();
    });
})

function openWindow() {
    const popup = document.getElementById('popup')
    popup.showModal();
    popup.classList.add("modal-open")


    document.getElementById('close').addEventListener('click', () => {
        popup.classList.remove("modal-open")
        setTimeout(() => {
            popup.close();
        }, "500");
    });
}

