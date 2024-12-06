let countdownTime = 5;
const countdownElement = document.getElementById ('countdown');
const interval = setInterval (() => {
  countdownTime--;
  countdownElement.textContent = countdownTime;

  if (countdownTime <= 0) {
    clearInterval (interval);
    window.location.href = 'https://regreenfire.com/';
  }
}, 1000);
