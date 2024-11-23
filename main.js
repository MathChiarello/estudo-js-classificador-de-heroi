const players = ['Joao:1200', 'Miguel:5200', 'Maria:8500', 'Carlos:100000'];

players.forEach((player) => {
  let [name, score] = player.split(':');
  score = parseInt(score);
  let level = '';

  if (score <= 1000) {
    level = 'Ferro';
  } else if (score >= 1001 && score <= 2000) {
    level = 'Bronze';
  } else if (score >= 2001 && score <= 5000) {
    level = 'Prata';
  } else if (score >= 5001 && score <= 7000) {
    level = 'Ouro';
  } else if (score >= 7001 && score <= 8000) {
    level = 'Platina';
  } else if (score >= 8001 && score <= 9000) {
    level = 'Ascendente';
  } else if (score >= 9001 && score <= 10000) {
    level = 'Imortal';
  } else if (score >= 10001) {
    level = 'Radiante';
  } 

  console.log(`O Herói de nome ${name} está no nível de ${level}`);
})
