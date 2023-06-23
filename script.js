const plus = document.querySelectorAll(".plus");
const info = document.querySelectorAll(".info");

for (let i = 0; i < plus.length; i++) {

    plus[i].addEventListener("click", () => {
        info[i].classList.toggle('drop-down');
    });
    
}

const vid = document.getElementById("vid");

vid.addEventListener("loadedmetadata", () => {
    vid.currentTime =96;
})

function playOrPause() {

    if (vid.paused && vid.currentTime === 96) {
        vid.currentTime = 0;
        vid.play();
    } else if (vid.paused) {
        vid.play();
    } else {
        vid.pause();
    }

}

function load() {

    vid.currentTime =10;
    vid.pause();

}

function fullscreen() {

    if (vid.requestFullscreen) {
        vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) { // Firefox
        vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) { // Chrome, Safari and Opera
        vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) { // IE/Edge
        vid.msRequestFullscreen();
    }

}