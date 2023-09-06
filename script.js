const countElement = document.getElementById("saldo-nav");
const maxCount = 25;
let currentCount = 0;

setTimeout(() => {
  const loadingElement = document.querySelector(".loading");
  const cardSecondElement = document.querySelector(".card-second");

  loadingElement.classList.add("d-none");
  cardSecondElement.classList.add("d-flex");

  const numberElement = document.getElementById("number");
  const finalNumber = 105;
  let currentNumber = 0;

  function updateCount() {
    if (currentNumber < finalNumber) {
      currentNumber++;
      numberElement.innerText = currentNumber;
      setTimeout(updateCount, 50); // Ajuste a velocidade da contagem aqui
    }
  }

  updateCount();
}, 8000);

function updateCount() {
  if (currentCount < maxCount) {
    currentCount++;
    countElement.innerText = currentCount;
    setTimeout(updateCount, 100); // Ajuste a velocidade da contagem aqui
  }
}

updateCount();
