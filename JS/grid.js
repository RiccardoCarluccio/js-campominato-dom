// Creo una griglia di X quadrati per riga

/**
 * @type {HTMLSelectElement}
 */
const squareCountsSelect = document.querySelector("[name='squareCounts']");
const btnStart = document.querySelector("#btn-start");

/**
 * @type {HTMLElement}
 */
const gridContainer = document.querySelector(".grid-container");

btnStart.addEventListener("click", onBtnClick);

function onBtnClick() {
  // this === btnSta

  // Leggo il valore della select
  const squareCounts = parseInt(squareCountsSelect.value);

  console.log("valore scelto", squareCounts);

  // genera la griglia
  const gridList = createGrid(squareCounts);

  console.log(gridList);

  // invoco la funzione che si occuperà di aggiungere al DOM i vari quadrati
  printGrid(gridContainer, gridList);
}

/**
 * @param {string} squareContent Contenuto testuale da inserire all'interno del quadrato creato
 * @param {number} squareCounts Numero totale di quadrati da creare
 * @returns {HTMLDivElement}
 */
function createSingleSquare(squareContent, squareCounts) {
  const square = document.createElement("div");

  const squaresPerRow = Math.sqrt(squareCounts);

  square.classList.add("grid-square");
  square.textContent = squareContent;
  square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

  square.addEventListener("click", function () {
    square.classList.toggle("bg-success");
  });

  return square;
}

function onSquareClick(square) {
  square.classList.toggle("bg-success");
}

/**
 * Dato un numero di celle, crea tutta la griglia.
 * @param {number} squaresNumber Numero di quadrati da creare all'interno della griglia
 * @returns {HTMLDivElement[]}
 */
function createGrid(squaresNumber) {
  const grid = [];

  for (let i = 0; i < squaresNumber; i++) {
    // salvo in una variabile l'output della funzione createSingleSquare
    const newSquare = createSingleSquare("sqr" + (i + 1), squaresNumber);

    grid.push(newSquare);
  }

  return grid;
}

/**
 * Aggiunge ad un elemento html, la lista dei quadrati
 * @param {HTMLElement} container
 * @param {HTMLDivElement[]} squaresList
 */
function printGrid(container, squaresList) {
  // reset del contenuto del container per evitare che ci siano altri div creati precedentemente
  container.innerHTML = "";

  for (let i = 0; i < squaresList.length; i++) {
    container.append(squaresList[i]);
  }
}