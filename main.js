const weddingDate = new Date("Jul 6, 2024 15:30:00").getTime();

let interval = setInterval(() => {
  const now = new Date().getTime();
  const duration = weddingDate - now;
  if (duration < 0) {
    clearInterval(interval);
    countDown(0);
    return;
  }
  countDown(duration);
}, 1000);

const days = document.querySelector("#days-left");
const hours = document.querySelector("#hours-left");
const minutes = document.querySelector("#minutes-left");
const seconds = document.querySelector("#seconds-left");

const countDown = (duration) => {
  days.innerText = Math.floor(duration / (1000 * 60 * 60 * 24));
  hours.innerText = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.innerText = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerText = Math.floor((duration % (1000 * 60)) / 1000);
};
