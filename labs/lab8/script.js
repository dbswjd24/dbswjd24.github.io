function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

let toggleButton = document.getElementById("toggleButton");

toggleButton.onclick = function() {
  toggleTheme();
};
