window.onscroll = function () {
    let position = window.pageYOffset || document.documentElement.scrollTop;
    let icon_heart = document.getElementById("icon_heart");
    let icon_fire = document.getElementById("icon_fire");

    icon_heart.style.bottom = position * 0.1 + "px";
    icon_fire.style.top = position * 0.1 + "px";
}