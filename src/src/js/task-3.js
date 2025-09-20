const nameInput = document.querySelector("#name-input");
const targetElement = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInpit);

function handleInpit(event) {
  const inputedName = event.target.value.trim();
  if (inputedName.length !== 0) {
    targetElement.textContent = inputedName;
  } else {
    targetElement.textContent = "Anonymus";
  }
}
