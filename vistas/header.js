function renderSection() {
  const sectionHTML = `
    <div class="principal-div text-center">
      <br><br>
      <h1 class="display-1">Hospital</h1>
      <h2 class="display-5">Universidad de El Salvador</h2>
      <br>
      <button type="button" class="btn btn-dark">
        <a class="nav-link" href="./somos.html">Sobre Nosotros</a>
      </button>
      <br><br>
    </div>
  `;

  const sectionContainer = document.createElement('div');
  sectionContainer.innerHTML = sectionHTML;
  document.body.appendChild(sectionContainer);
}

renderSection(); // Llamada a la función para que se ejecute al cargar la página


