// Obtiene el botón y el enlace de la hoja de estilo
const themeButton = document.getElementById("btn-change-theme");
const themeLink = document.getElementById("theme-link");

// Función que cambia la hoja de estilo según el modo actual
const changeTheme = () => {
  // Obtiene el nombre de la hoja de estilo actual
  let currentTheme = themeLink.getAttribute("href");
  // Si es la de modo claro, cambia a la de modo oscuro
  if (currentTheme === "/css/light.css") {
    themeLink.setAttribute("href", "/css/dark.css");
    /* themeButton.textContent = "Cambiar a modo claro"; */
  }
  // Si es la de modo oscuro, cambia a la de modo claro
  else {
    themeLink.setAttribute("href", "/css/light.css");
    /* themeButton.textContent = "Cambiar a modo oscuro"; */
  }
};

// Añade un evento al botón para que llame a la función al hacer clic
themeButton.addEventListener("click", changeTheme);