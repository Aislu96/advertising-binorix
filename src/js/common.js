const arrowsQuestions =  document.querySelectorAll('.questions__group');
const blockQuestions = document.querySelectorAll('.questions__body');
const imgArrow = document.querySelectorAll('.questions__arrow span');

for (let i = 0; i < arrowsQuestions.length; i++) {
  arrowsQuestions[i].addEventListener('click',function () {
    if(!arrowsQuestions[i]) return;
    toggleText(i);
  });

  arrowsQuestions[i].addEventListener('touchend', function (event) {
    // Предотвращаем действие по умолчанию для касания (например, прокрутку страницы)
    event.preventDefault();
    toggleText(i);
  });
}

function toggleText(index) {
  if (!arrowsQuestions[index]) return;
  blockQuestions[index].classList.toggle("active");
  imgArrow[index].style.backgroundImage = 'url("/assets/img/questions/arrowDown.svg")';
}




