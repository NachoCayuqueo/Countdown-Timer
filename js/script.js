const countdown = () => {
  const secondsCard = document.querySelector("#card-seconds");
  const minutesCard = document.querySelector("#card-minutes");
  const hoursCard = document.querySelector("#card-hours");
  const daysCard = document.querySelector("#card-days");

  const currentDate = new Date().getTime();
  const endDate = new Date(2024, 1, 1).getTime();

  const dateDifference = endDate - currentDate;

  const seconds = 1000; // 1000 ms = 1 s
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  //* seconds
  const secondsNumber = Math.floor(dateDifference / seconds) % 60;
  const minutesNumber = Math.floor(dateDifference / minutes) % 60;
  const hoursNumber = Math.floor(dateDifference / hours) % 24;
  const daysNumber = Math.floor(dateDifference / days);

  flip(secondsCard, secondsNumber);
  flip(minutesCard, minutesNumber);
  flip(hoursCard, hoursNumber);
  flip(daysCard, daysNumber);
};

const flip = (card, startNumber) => {
  const topHalf = card.querySelector(".card-date-top");
  const number = parseInt(topHalf.textContent);

  //* si es el mismo numero no genera efecto
  if (number === startNumber) return;

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  const bottomHalf = card.querySelector(".card-date-bottom");

  bottomHalf.textContent = number;
  topFlip.textContent = number;
  bottomFlip.textContent = startNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = startNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = startNumber;
    bottomFlip.remove();
  });

  card.append(topFlip, bottomFlip);
};

setInterval(countdown, 1000);
