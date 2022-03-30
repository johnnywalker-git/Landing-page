let trackImages = document.getElementById("background");
let mailingButton = document.getElementById("form-submit-event");
let trackDownloads = [

]
const imgs = [
    "images/track-1.png",
    "images/track-2.png",
    "images/track-3.png"
]

mailingButton.addEventListener('click', allowDownloads())

function allowDownloads(){
imgs.forEach(img => trackImages.innerHTML+=`<img src=${img} class="track-background">`)
}