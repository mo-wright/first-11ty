const slider = document.getElementById("timeline");
const display = document.getElementById("decade");
const skills = document.getElementById("skills");
const btn = document.getElementById("tableToggle");
const table = document.getElementById("decadeTable");

const decades = JSON.parse(document.getElementById("decade-data").textContent);
const byYear = Object.fromEntries(decades.map((d) => [d.year, d.text]));

function update() {
  display.textContent = slider.value;
  skills.textContent = byYear[slider.value] ?? "";
}

slider.addEventListener("input", update);
update();

btn.addEventListener("click", () => {
  table.classList.toggle("hidden");
  btn.textContent = table.classList.contains("hidden")
    ? "View As Table"
    : "Hide Table";
});
