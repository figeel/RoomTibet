const video = document.querySelector(".about-hike-video")
const button = document.querySelector(".video-wrapper")
console.log("Video элемент:", video);
console.log("Кнопка:", button);
let videoState = "paused"

button.addEventListener("click", () => {
    console.log("Клик зарегистрирован");
    if(videoState === "paused") {
        video.play()
        videoState = "playing"
        button.classList.add("active")
    } else {
        video.pause()
        videoState = "paused"
        button.classList.remove("active")
    }
})