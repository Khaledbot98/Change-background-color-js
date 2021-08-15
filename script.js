var btn = document.getElementById("btn");
var body = document.querySelector("body");
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
  "Salmon",
  "DarkSalmon",
  "Crimson",
  "	DarkRed",
  "HotPink",
  "MediumVioletRed",
  "Orange",
  "DarkOrange",
  "Gold",
  "LemonChiffon",
  "DarkKhaki",
  "Fuchsia",
  "black",
];

body.style.backgroundColor = "blanchedalmond";

btn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  var colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
