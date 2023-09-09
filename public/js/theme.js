
const themeButton = document.getElementById("btn-change-theme");
const themeLink = document.getElementById("theme-link");

const changeTheme = () => {

  let currentTheme = themeLink.getAttribute("href");
  console.log(currentTheme);

  if (currentTheme === "/css/light.css") {
    themeLink.setAttribute("href", "/css/dark.css");
    /* themeButton.textContent = "Cambiar a modo claro"; */
  }
  else if (currentTheme === "/css/dark.css") {
    themeLink.setAttribute("href", "/css/light.css");
    /* themeButton.textContent = "Cambiar a modo oscuro"; */
  }
};

themeButton.addEventListener("click", changeTheme);