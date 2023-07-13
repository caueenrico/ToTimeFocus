export default function () {
  const treeSound = new Audio("assets/Floresta.wav");
  const rainSound = new Audio("assets/Chuva.wav");
  const coffeSound = new Audio("assets/Cafeteria.wav");
  const fireSound = new Audio("assets/Lareira.wav");
  const endTime = new Audio(
    "assets/End.mp3"
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
