const categoriaContentEl = document.getElementById("categoria-content");
const formCategoriaEl = document.createElement("form");
formCategoriaEl.classList.add("vertical-form");
categoriaContentEl.appendChild(formCategoriaEl);
const pCategoriaEl = document.createElement("p");
categoriaContentEl.appendChild(pCategoriaEl);
const categoriaListEl = document.createElement("ul");
categoriaContentEl.appendChild(categoriaListEl);

formCategoriaEl.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateCategoria();
});

function createFormCategoriaContent() {
  formCategoriaEl.innerHTML = `
        <label for="age-cat">Edat</label>
        <input type="number" id="age-cat" placeholder="35" min="5" max="120" required>anys
        <button class="btn" type="submit">Calcular cat</button>
    `;
}

function calculateCategoria() {
  const age = document.getElementById("age-cat").value;
  let cat = "";
  let check = false;

  const scaleMap = new Map([
    [7, "Prebenjamin"],
    [9, "Benjamin"],
    [11, "Alevin"],
    [13, "Infantil"],
    [15, "Cadete"],
    [18, "Juvenil"],
    [121, "Aficionado"],
  ]);

  scaleMap.forEach((value, key) => {
    if (age <= key && !check) {
      cat = value;
      check = true;
    }
  });
  printResultCategoria(cat);
}

function printResultCategoria(cat) {
  categoriaListEl.innerHTML = "";
  console.log(cat);
  categoriaListEl.append(cat);
}

createFormCategoriaContent();
