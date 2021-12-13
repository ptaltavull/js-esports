const imcContentEl = document.getElementById("imc-content"); //agafam l'element amb id main-content

const formImcEl = document.createElement("form"); //cream element HTML form <form></form>
formImcEl.classList.add("vertical-form");
imcContentEl.appendChild(formImcEl); //posam formEl dins l'element mainContentEl
const pEl = document.createElement("p");
imcContentEl.appendChild(pEl);
const imcListEl = document.createElement("ul");
imcContentEl.appendChild(imcListEl);

formImcEl.addEventListener("submit", (event) => {
  event.preventDefault(); //evitam que s'envii es formulari (ja que aso refresca sa pàgina i esborra es contingut dels inputs)
  calculateIMC();
});

function createFormImcContent() {
  formImcEl.innerHTML = `
        <label for="height">Altura:</label>
        <input type="number" id="height" placeholder="178" required min="50" max="300">cm
        <label for="weight">Pes:</label>
        <input type="number" id="weight" step=".01" placeholder="75.5" min="20" max="500" required>kg
        <button class="btn" type="submit">Calcular IMC</button>
  `;
}

function calculateIMC() {
  //IMC = peso [kg]/ estatura [m2]
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;

  console.log(height);
  console.log(weight);
  const imc = weight / Math.pow(height, 2);

  printResultImc(imc);

  pEl.textContent = imc.toFixed(2);
}

function printResultImc(imc) {
  imcListEl.innerHTML = "";
  let check = false;

  const scaleMap = new Map([
    [16, "Infrapeso (delgadez severa)"],
    [17, "Infrapeso (delgadez moderada)"],
    [18.5, "Infrapeso (delgadez aceptable)"],
    [25, "Peso normal"],
    [30, "Sobrepeso"],
    [35, "Obeso (Tipo I)"],
    [40.01, "Obeso (Tipo II)"],
    [41, "Obeso (Tipo III)"],
  ]);

  scaleMap.forEach((value, key) => {
    const liEl = document.createElement("li");
    liEl.textContent = value;
    if (imc < key && !check) {
      liEl.classList.add("active-imc");
      check = true;
    }
    imcListEl.appendChild(liEl);
  });
}

createFormImcContent();
