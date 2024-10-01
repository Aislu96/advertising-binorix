const arrowsQuestions =  document.querySelectorAll('.questions__group');
const blockQuestions = document.querySelectorAll('.questions__body');
const imgArrow = document.querySelectorAll('.questions__arrow-img');
let scrl= false;
//Если было совершено событие touchmove, меняем значение переменной на true
document.addEventListener('touchmove', function(){
  scrl = true;
});
for (let i = 0; i < arrowsQuestions.length; i++) {
  arrowsQuestions[i].addEventListener('click',function () {
    if(!arrowsQuestions[i]) return;
    toggleText(i);
  });

  arrowsQuestions[i].addEventListener('touchend', function (event) {
    event.preventDefault();
    if (scrl !== true){
      toggleText(i);
    }else{
      scrl = false;
    }
  });
}

function toggleText(index) {
  if (!arrowsQuestions[index]) return;
  blockQuestions[index].classList.toggle("active");
  imgArrow[index].classList.toggle("arrow-active");
}




// Устанавливаем таймер на автовоспроизведение через 10 секунд
setTimeout(function() {
  var iframe = document.querySelectorAll('.video__play');
  iframe.forEach((item)=> {
    let url = item.getAttribute('src') + '?autoplay=1&mute=1&loop=1&playlist=RPCZBBUe474';
    item.setAttribute('src', url);
  });
}, 3000);

