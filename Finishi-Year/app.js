const countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();
console.log(countDownDate);

const countDownFunction = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(countDownFunction);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }

}, 1000);

