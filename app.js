const colors = [
  "#2d00f7",
  "#6a00f4",
  "#8900f2",
  "#a100f2",
  "#b100e8",
  "#bc00dd",
  "#d100d1",
  "#db00b6",
  "#e500a4",
  "#f20089",
];
// const colors = ['#590d22', '#800f2f', '#a4133c', '#c9184a', '#ff4d6d', '#ff8fa3','#ffb3c1','#ffccd5','#fff0f3', ]
const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);
  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#000000";
  element.style.boxShadow = "0 0 2px #000000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
