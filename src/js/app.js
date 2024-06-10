document.body.addEventListener('input', function(event) {
  if (event.target.classList.contains('input-words')) {
    event.target.value = event.target.value.replace(/[^a-zа-яё\s]/gi, '');
  }
});

document.getElementById("form-reg").addEventListener("submit", async function(event) {
  event.preventDefault(); // Предотвращаем стандартное действие - отправку формы

  // Получаем данные из формы
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");

  // Проверяем валидность email и номера телефона
  if (email.includes('.') && phone.length === 17) {

    const url = "https://maschbot.site/cgi-bin3/binorix.php?fullname=" + encodeURIComponent(name) + "&email=" +encodeURIComponent(email) + "&phone=" +encodeURIComponent(phone) +"&campaign=test";

    var xhr = new XMLHttpRequest();
    // Открываем соединение и отправляем GET-запрос
    xhr.open("GET", url, true);
    xhr.send()
    //Предполагается, что вы
    // // предварительно подключили библиотеку toast к вашему проекту
    Toastify({
      title: 'Success',
      text: "Successfully registered. Soon we will call you!",
      theme: "dark",
      duration: 5000,
      destination: "https://www.artsmrkts.com/campaigns/open-live-account?utm_source=binorix",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      className: "custom-toast",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)"
      }
    }).showToast();
    setTimeout(()=> {
      window.location.replace("https://www.artsmrkts.com/campaigns/open-live-account?utm_source=binorix");
    }, 5000)

  } else {
    debugger;
    if (!email.includes('.')) {
      Toastify({
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        theme: "dark",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "custom-toast",
        style: {
          background: "linear-gradient(to right, #c36868, #c36868)",
        },
      }).showToast();
    }
    if (phone.length !== 17) {
      new Toast({
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number.',
        theme: "dark",
        autoClose: 5000,
        className: "custom-toast",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
});
