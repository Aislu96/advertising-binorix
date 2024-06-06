document.addEventListener('DOMContentLoaded', function() {
  // конечная дата, например 1 июля 2024
  const deadline = new Date(2024, 6, 1);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
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

    minutes.textContent = t_minutes < 10 ? '0' + t_minutes : t_minutes;
    seconds.textContent = t_seconds < 10 ? '0' + t_seconds : t_seconds;
  }
  // получаем элементы, содержащие компоненты даты
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});
