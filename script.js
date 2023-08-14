const dropdown = document.getElementById("dropdown-content");
const button = document.getElementById("dropdown-button");
const typeWrapper = document.getElementById("type-wrapper");
a = dropdown.getElementsByTagName("a");

const typeColours = {
  "normal": "#d6d6ca",
  "water": "#628ae5",
  "fire": "#ff6849",
  "grass": "#5ccc3e",
  "electric": "#ffd759",
  "ground": "#7c5f53",
  "psychic": "#ef7dc3",
  "flying": "#aec1ea",
  "fighting": "#b87e64",
  "bug": "#b0e455",
  "rock": "#b4a29a",
  "poison": "#a35bcb",
  "fairy": "#f2b9e3",
  "ice": "#e4ebf8",
  "steel": "#96a0b8",
  "dark": "#6d657c",
  "ghost": "#c2b7cf",
  "dragon": "#8765ff",
}

typeArray = []

for (i = 0; i < a.length; i++) {
  typeArray.push(a[i]);
  a[i].addEventListener("click", changeBackground);
}

/* typeWrapper.addEventListener("click", changeBackground); */

function changeBackground(event) {
  console.log(event.target.innerHTML);
  console.log(typeArray.indexOf(event.target));
  console.log(typeColours[event.target.innerHTML])
  selectedColour = typeColours[event.target.innerHTML]
  document.body.style.backgroundColor = selectedColour;
}

/* Toggle menu visibility and text content of button */
function toggleMenu() {
  dropdown.classList.toggle("show");
  if (button.innerHTML === "show menu") {
    button.innerHTML = "hide menu";
  } else {    
    button.innerHTML = "show menu";
  }
}



/* Filters items out as per search terms */
function filterTypes() {
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

