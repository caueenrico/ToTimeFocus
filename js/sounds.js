export default function () {
  const treeSound = new Audio("assets/Floresta.wav");
  const rainSound = new Audio("assets/Chuva.wav");
  const coffeSound = new Audio("assets/Cafeteria.wav");
  const fireSound = new Audio("assets/Lareira.wav");
  const endTime = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  treeSound.loop = true;
  rainSound.loop = true;
  coffeSound.loop = true;
  fireSound.loop = true;

  return {
    treeSound,
    coffeSound,
    rainSound,
    fireSound,
    endTime,
  };
}
