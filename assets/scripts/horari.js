const horariContentEl = document.getElementById("horari-content");
const tableHorariMati = document.createElement("table");
const tableHorariCapvespre = document.createElement("table");
horariContentEl.appendChild(tableHorariMati);
horariContentEl.appendChild(tableHorariCapvespre);

function createTableHorariMati() {
  const activitatsMati = [
    ["Natación", "Atletismo", "Baloncesto"],
    ["Bádminton", "Escalada deportiva", "Balonmano"],
    ["Gimnasia rítmica", "Boxeo", "Esgrima"],
    ["Fútbol sala", "Judo", "Karate"],
    ["Fútbol", "Patinaje de velocidad", "Rugby 7"],
  ];

  const activitatsCapvespre = [
    ["Waterpolo", "Lucha", "Natación", "Balonmano"],
    ["Fútbol", "Patinaje de velocidad", "Rugby 7", "Natación"],
    ["Bádminton", "Escalada deportiva", "Balonmano", "Baloncesto"],
    ["Fútbol sala", "Judo", "Karate", "Fútbol"],
    ["Natación", "Atletismo", "Baloncesto", "Natación"],
    ["Gimnasia rítmica", "Boxeo", "Esgrima", "Natación"],
    ["Fútbol", "Patinaje de velocidad", "Rugby 7", "Natación"],
  ];

  const activitatsMatiStr = generarActivitats(activitatsMati, 9, 2);
  const activitatsCapvespreStr = generarActivitats(activitatsCapvespre, 16, 1);

  tableHorariMati.innerHTML = activitatsMatiStr;
  tableHorariCapvespre.innerHTML = activitatsCapvespreStr;
}

function generarActivitats(arr, start, duration) {
  let horesDies = [
    "Hora",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  let activitats = "<tr>";
  let hora = start;

  for (let i = 0; i < arr.length + 1; i++) {
    activitats += "<th>" + horesDies[i] + "</th>";
  }

  activitats += "</tr>";
  for (let i = 0; i < arr[i].length; i++) {
    activitats += "<tr><td>" + hora + ":00 - ";
    hora += duration;
    activitats += hora + ":00</td>";

    for (let j = 0; j < arr.length; j++) {
      activitats += "<td>" + arr[j][i] + "</td>";
    }
    activitats += "</tr>";
  }
  return activitats;
}

function createTableHorariCapvespre() {}

createTableHorariMati();
