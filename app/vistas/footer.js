function renderFooter() {
    const footerHTML = `
      <footer class="text-center text-white" style="background-color: #f1f1f1;">
        <div class="container pt-4">
          <section class="mb-4 d-flex justify-content-center">
            <a class="nav-link d-inline-block me-3" href="https://www.facebook.com/UESoficial.SV">
              <img src="../recursos/fontawesome/svgs/brands/facebook.svg" alt="Facebook" class="img-fluid" width="15" height="15">
            </a>
            <a class="nav-link d-inline-block me-3" href="https://twitter.com/UESoficial">
              <img src="../recursos/fontawesome/svgs/brands/x-twitter.svg" alt="twitter" class="img-fluid" width="15" height="15">
            </a>
            <a class="nav-link d-inline-block me-3" href="https://www.instagram.com/uesoficial?igsh=MTdxcjVuaG5wOGt2Zg==">
              <img src="../recursos/fontawesome/svgs/brands/instagram.svg" alt="instagram" class="img-fluid" width="15" height="15">
            </a>
            <a class="nav-link d-inline-block me-3" href="https://sv.linkedin.com/school/universidad-de-el-salvador/">
              <img src="../recursos/fontawesome/svgs/brands/linkedin.svg" alt="linkedin" class="img-fluid" width="15" height="15">
            </a>
            <a class="nav-link d-inline-block me-3" href="https://wa.me/72516892?text=Hola">
              <img src="../recursos/fontawesome/svgs/brands/whatsapp.svg" alt="whatsapp" class="img-fluid" width="15" height="15">
            </a>
          </section>
        </div>
        <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <img src="../recursos/img/logoUes.png" alt="logoUes" class="img-fluid me-3" width="30" height="30">
          Desarrollo de Aplicaciones Web:
          <a class="text-dark" href="https://www.ues.edu.sv/">Universidad de El Salvador</a>
        </div>
      </footer>
    `;
  
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer);
}
  
renderFooter(); // Llamada a la función para que se ejecute al cargar la página