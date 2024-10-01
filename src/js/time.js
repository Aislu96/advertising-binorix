document.addEventListener('DOMContentLoaded', function() {
  let timerId = null;

  const minutes = document.querySelectorAll('#minutes span');
  const seconds = document.querySelectorAll('#seconds span');
  const minutesTwo = document.querySelectorAll('#minutesTwo span');
  const secondsTwo = document.querySelectorAll('#secondsTwo span');

  countdownTimer(minutes, seconds);
  countdownTimer(minutesTwo, secondsTwo);

  timerId = setInterval(() => {
    countdownTimer(minutes, seconds, timerId); // передаем timerId
    countdownTimer(minutesTwo, secondsTwo, timerId); // передаем timerId
  }, 1000);

  function countdownTimer(minutesElements, secondsElements, timerId) { // добавляем timerId в параметры
    const deadline = new Date();
    const m = (60 - deadline.getMinutes()) % 15;
    const s = 59 - deadline.getSeconds();

    if (m === 0 && s === 0) {
      clearInterval(timerId);
    }

    minutesElements[0].textContent = Math.trunc(m/10);
    minutesElements[1].textContent = m%10;
    secondsElements[0].textContent = Math.trunc(s/10);
    secondsElements[1].textContent = s%10;
  }
});
