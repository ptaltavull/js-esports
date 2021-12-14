const calendarContainerEl = document.getElementById("calendar-container");

const date = new Date();
const day = date.getDate();
const month = date.toLocaleDateString("es", {
  month: "short",
});
const year = date.getFullYear();

const daySpanEl = document.createElement("span");
const monthSpanEl = document.createElement("span");
const yearSpanEl = document.createElement("span");

daySpanEl.classList.add("day-info");
monthSpanEl.classList.add("month-info");
yearSpanEl.classList.add("year-info");

daySpanEl.textContent = day;
monthSpanEl.textContent = month;
yearSpanEl.textContent = year;

calendarContainerEl.append(daySpanEl, yearSpanEl, monthSpanEl);
