const countdown = () => {
  const daysRemaining = document.getElementById("days");
  const hoursRemaining = document.getElementById("hours");
  const minutesRemaining = document.getElementById("minutes");
  const secondsRemaining = document.getElementById("seconds");

  const currentDate = new Date().getTime();
  const endDate = new Date(2024, 1, 1).getTime();

  const dateDifference = endDate - currentDate;

  const seconds = 1000; // 1000 ms = 1 s
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  daysRemaining.innerHTML = Math.floor(dateDifference / days);
  hoursRemaining.innerHTML = Math.floor(dateDifference / hours) % 24;
  minutesRemaining.innerHTML = Math.floor(dateDifference / minutes) % 60;
  secondsRemaining.innerHTML = Math.floor(dateDifference / seconds) % 60;
};

setInterval(countdown, 1000);
