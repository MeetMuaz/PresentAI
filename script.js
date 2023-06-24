const plus = document.querySelectorAll(".plus");
const info = document.querySelectorAll(".info");

// drop the drop-down cards
for (let i = 0; i < plus.length; i++) {

    plus[i].addEventListener("click", () => {
        info[i].classList.toggle('drop-down');
    });
    
}

const vid = document.getElementById("vid");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// start video from 96 seconds
vid.addEventListener("loadedmetadata", () => {
    pauseButton.classList.add("hidden");
    vid.currentTime =96;
})

// pause and play video
function playOrPause() {

    if (vid.paused && vid.currentTime === 96) {
        vid.currentTime = 0;
        vid.play();
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
    } else if (vid.paused) {
        vid.play();
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
    } else {
        vid.pause();
        playButton.classList.remove("hidden");
        pauseButton.classList.add("hidden");
    }

}

// show full scren
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

const contactForm = document.getElementById('contact-form');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('number');
const messageInput = document.getElementById('message');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // validate firstname
    if(firstnameInput.value.trim() === '') {
        alert('Please enter your firstname');
        firstnameInput.focus();
        return;
    }

    // validate lastname
    if(lastnameInput.value.trim() === '') {
        alert('Please enter your lastname');
        lastnameInput.focus();
        return;
    }

    // validate email
    if(emailInput.value.trim() === '') {
        alert('Please enter your business email');
        emailInput.focus();
        return;
    }

    // check email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    // validate phone 
    if(phoneInput.value.trim() === '') {
        alert('Please enter a valid phone number');
        phoneInput.focus();
        return;
    }       

    // check phone format
    const phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if(!phoneRegex.test(phoneInput.value)) {
        alert('Please enter a valid phone number');
        emailInput.focus();
        return;
    }

    // validate message
    if(messageInput.value.trim() === '') {
        alert('Please enter a message');
        messageInput.focus();
        return;
    }
})