setInterval(countdown, 1000);

function countdown() {
  const secondsCard = document.querySelector("#card-seconds");
  const minutesCard = document.querySelector("#card-minutes");
  const hoursCard = document.querySelector("#card-hours");
  const daysCard = document.querySelector("#card-days");

  const currentDate = new Date().getTime();

  const currentYear = new Date().getFullYear();
  const endDate = new Date(`${currentYear + 1}`, 0, 1).getTime();

  const dateDifference = endDate - currentDate;

  const seconds = 1000; // 1000 ms = 1 s
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const secondsNumber = Math.floor(dateDifference / seconds) % 60;
  const minutesNumber = Math.floor(dateDifference / minutes) % 60;
  let hoursNumber = Math.floor(dateDifference / hours) % 24;
  const daysNumber = Math.floor(dateDifference / days);

  flip(secondsCard, secondsNumber);
  flip(minutesCard, minutesNumber);
  flip(hoursCard, hoursNumber);
  flip(daysCard, daysNumber);
}

function flip(card, startNumber) {
  const topHalf = card.querySelector(".card-date-top");
  let number = parseInt(topHalf.textContent);

  //* If it is the same number, it has no effect.
  if (number === startNumber) return;

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  const bottomHalf = card.querySelector(".card-date-bottom");

  //* Add a leading zero if the number is less than 10
  const formattedStartNumber =
    startNumber < 10 ? `0${startNumber}` : startNumber;

  bottomHalf.textContent = number < 10 ? `0${number}` : number;
  topFlip.textContent = number < 10 ? `0${number}` : number;
  bottomFlip.textContent = formattedStartNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = formattedStartNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = formattedStartNumber;
    bottomFlip.remove();
  });

  card.append(topFlip, bottomFlip);
}
