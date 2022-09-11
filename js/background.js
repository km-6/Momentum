const HIDDEN_CLASSNAME = "hidden";

const bg = document.querySelector("#background-image");
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = `url(img/${chosenImage})`;
bg.style.backgroundImage = bgImg;
