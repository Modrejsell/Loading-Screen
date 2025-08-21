
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

let index = 0;


document.body.style.backgroundImage = `url(${images[index]})`;


setInterval(() => {
  index = (index + 1) % images.length;
  document.body.style.backgroundImage = `url(${images[index]})`;
}, 5000);


const music = document.getElementById("music");
const volume = document.getElementById("volume");

volume.addEventListener("input", () => {
  music.volume = volume.value;
});
