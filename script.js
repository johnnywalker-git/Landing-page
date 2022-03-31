let trackImages = document.getElementById("background");
let trackDownloads = document.getElementById("track-downloads")
let mailingButton = document.getElementById("form-submit-event");

const imgs = [
    "images/track-1.png",
    "images/track-2.png",
    "images/track-3.png"
]

const tracks = [
    "https://github.com/johnnywalker-git/Landing-page/blob/johnnywalker-git-downloads/Time%20after%20Time%20-%20Johnny%20Walker.mp3?raw=true",
    "https://github.com/johnnywalker-git/Landing-page/blob/johnnywalker-git-downloads/Intoxicated%20-%20Johnny%20Walker.mp3?raw=true",
    "https://github.com/johnnywalker-git/Landing-page/blob/johnnywalker-git-downloads/Hallelujah%20Anyway%20-%20Johnny%20Walker%20&%20Luke%20Horsfield%20(Original%20Mix)%201.mp3?raw=true",
]

// let trackId = tracks.forEach(track => console.log(track))



function renderImage() {
imgs.forEach(img => trackImages.innerHTML+=`<img src=${img} class="track-background"></a>`)
}

function renderTracks() {
    tracks.forEach(track => trackDownloads.innerHTML+=`<a class="track-background" href="${track}">Download</a>`)
    }

renderImage()
renderTracks()