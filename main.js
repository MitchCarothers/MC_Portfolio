"use strict";

initProfileImage();

function initProfileImage () {
    const profile_note = document.getElementById("profile_note");
    const profile_image = document.getElementById("profile_image");

    profile_image.addEventListener("mouseenter", (event) => {
        profile_note.style.opacity = "100%";
    })

    profile_image.addEventListener("mouseleave", (event) => {
        profile_note.style.opacity = "0%";
    })
}
