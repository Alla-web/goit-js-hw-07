const changeColorBtn = document.querySelector(".change-color");
const colorContainer = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", handleClick);

function handleClick() {
  const color = getRandomHexColor();
  colorContainer.textContent = color;
  colorContainer.style.color = color;
  colorContainer.style.fontWeight = 700;

  body.style.backgroundColor = color;
  console.log(`%c   ${color}   `, `background: ${color}; color: #fff;`);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
