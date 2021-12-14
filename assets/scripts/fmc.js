const fmcContentEl = document.getElementById("fmc-content");
const formFmcEl = document.createElement("form"); //cream element HTML form <form></form>
formFmcEl.classList.add("vertical-form");
fmcContentEl.appendChild(formFmcEl); //posam formEl dins l'element mainContentEl
const pFmcEl = document.createElement("p");
fmcContentEl.appendChild(pFmcEl);
const fmcListEl = document.createElement("ul");
fmcContentEl.appendChild(fmcListEl);

formFmcEl.addEventListener("submit", (event) => {
  event.preventDefault(); //evitam que s'envii es formulari (ja que aso refresca sa pàgina i esborra es contingut dels inputs)
  calculateFMC();
});

function createFormFmcContent() {
  formFmcEl.innerHTML = `
        <label for="gender">Sexe:</label>
        <select id="gender">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <label for="weight">Edat:</label>
        <input type="number" id="age" placeholder="35" min="0" max="120" required>
        <button class="btn" type="submit">Calcular FMC</button>
    `;
}

function calculateFMC() {
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  let fmc = 0;

  if (gender == "hombre") {
    fmc = 208.7 - 0.73 * age;
  } else {
    fmc = 208.1 - 0.77 * age;
  }
  console.log(fmc);
  printResultFmc(fmc);
  pFmcEl.textContent =
    "Freqüència cardíaca màxima: " + Math.trunc(fmc) + " bpm";
}

function printResultFmc(fmc) {
  fmcListEl.innerHTML = "";

  const scaleMap = new Map([
    [0.6, "Zona de recuperació"],
    [0.7, "Zona aeròbica"],
    [0.8, "Zona anaeròbica"],
    [0.9, "Línia vermella"],
  ]);

  scaleMap.forEach((value, key) => {
    const fmcLiEl = document.createElement("li");
    fmcLiEl.textContent =
      "Entre " +
      Math.trunc(fmc * key) +
      " - " +
      Math.trunc(fmc * (key + 0.1)) +
      " bpm" +
      " " +
      value;
    fmcListEl.appendChild(fmcLiEl);
  });
}

createFormFmcContent();
