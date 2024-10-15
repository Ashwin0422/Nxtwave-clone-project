let videoIds = ["video1", "video2", "video3", "video4", "video5", "video6"];
let videoAbout = ["aboutVideo1", "aboutVideo2", "aboutVideo3", "aboutVideo4", "aboutVideo5", "aboutVideo6"];

function displayingBgImg() {
    let oldVal = 0;
    let currentVal = 1;

    setInterval(function() {
        let oldId = document.getElementById(videoIds[oldVal]);
        let oldAboutId = document.getElementById(videoAbout[oldVal]);
        oldId.classList.add("d-none");
        oldAboutId.classList.add("d-none");

        let currentId = document.getElementById(videoIds[currentVal]);
        let currentAboutId = document.getElementById(videoAbout[currentVal]);
        currentId.classList.remove("d-none");
        currentAboutId.classList.remove("d-none");

        oldVal = currentVal;
        currentVal = (currentVal + 1) % 6;
    }, 3000);
}

displayingBgImg();