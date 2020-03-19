
/* retorna em milissegundos */

const birth = new Date("Oct 4, 1997 00:00:00").getTime();

const livingtime = setInterval(function() {

  const now = new Date().getTime();

  const distance = now - birth;

  const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365)); 

  const mouth = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)); 

  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  console.log(days);

  document.getElementById("demo").innerHTML = years + "years " + mouth + "mouth " + days + "days ";

}, 1000);


