const video =  document.querySelector('.video');
const videoFon =  document.querySelector('.video__fon');
const videoPlay = document.querySelector('.video__play');
const icon = document.querySelector('.video__cross-icon');

function toggleVideo(event) {
  event.stopPropagation();
  videoFon.classList.toggle("active");
  videoPlay.classList.toggle("active");
  icon.classList.toggle("active");
}


video.addEventListener('click', toggleVideo);
icon.addEventListener('click', toggleVideo);
