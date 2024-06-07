document.addEventListener('DOMContentLoaded', function() {
  // конечная дата, например 1 июля 2024
  const deadline = new Date(2024, 6, 1);
  // const deadline = new Date();
  // const currentMinute = currentDate.getMinutes();
  // const currentSecond = currentDate.getSeconds();
  // const value = currentMinute % 15;
  // console.log(value);
  // id таймера
  let timerId = null;

  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
      // Действия после завершения таймера
      return;
    }

    const t_minutes = Math.floor(diff / 1000 / 60) % 60;
    const t_seconds = Math.floor(diff / 1000) % 60;

    minutesOne.textContent = Math.trunc(t_minutes/10);
    minutesTwo.textContent = t_minutes%10;
    secondsOne.textContent = Math.trunc(t_seconds/10);
    secondsTwo.textContent = t_seconds%10;
  }

  // получаем элементы, содержащие компоненты даты
  const minutes = document.getElementById('minutes');
  const minutesOne = minutes.querySelector('span:nth-child(1)');
  const minutesTwo =  minutes.querySelector('span:nth-child(2)');
  const seconds = document.getElementById('seconds');
  const secondsOne = seconds.querySelector('span:nth-child(1)');
  const secondsTwo = seconds.querySelector('span:nth-child(2)');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

