let currentIndex = 0; // guarda el índice de la imagen actualmente mostrada
const images = document.querySelectorAll('.seccion-galeria img'); // NodeList estático con todas las miniaturas (el orden importa)
const lightbox = document.getElementById('lightbox');//el contenedor del lightbox
const lightboxImg = document.getElementById('lightbox-img');//la imagen del lightbox

function openLightbox(index) {//abre el lightbox y muestra la imagen en la posición 'index' del nodelist images
  currentIndex = index;//actualiza el índice actual
  lightbox.style.display = 'flex';//muestra el lightbox que estaba oculto con hide en el css
  lightboxImg.src = images[currentIndex].src;//actualiza la imagen del lightbox con la miniatura seleccionada
}

function closeLightbox() {
  lightbox.style.display = 'none';//oculta el lightbox
}

function changeImage(step) {//tiene un desplazamiento circular
  currentIndex += step; // sumá 1 o restá 1
  if (currentIndex < 0) currentIndex = images.length - 1; // si esta en la primer imagen y va a la izquierda, muestra la última imagen
  if (currentIndex >= images.length) currentIndex = 0; // si esta en el última imagen y presiona a deracha, muestra la primer imagen
  lightboxImg.src = images[currentIndex].src;
}

// Se agregan atajos de teclado
document.addEventListener('keydown', (e) => {//captura los eventos del teclado
  if (lightbox.style.display === 'flex') {
    if (e.key === "Escape") closeLightbox();//cierra el lightbox si está abierto con la tecla escape
    if (e.key === "ArrowRight") changeImage(1);//cambia a la imagen siguiente con la tecla derecha
    if (e.key === "ArrowLeft") changeImage(-1);//cambia a la imagen anterior con la tecla izquierda
  }
});


// --- Calculadora de equipo ---
const form = document.getElementById("equipoForm");
const totalElement = document.getElementById("total");
const detalleElement = document.getElementById("detalle");

if (form) {
  form.addEventListener("change", () => {
    let total = 0;
    let detalleHTML = "";

    // Buscar cada grupo de componente
    const grupos = form.querySelectorAll(".col-md-6");
    grupos.forEach(grupo => {
      const label = grupo.querySelector("label").textContent; // nombre del componente
      const select = grupo.querySelector("select");
      const precio = parseInt(select.value);
      const texto = select.options[select.selectedIndex].text;

      if (precio > 0) {
        total += precio;
        detalleHTML += `<li><strong>${label}:</strong> ${texto}</li>`;
      }
    });

    totalElement.textContent = "$" + total;
    detalleElement.innerHTML = detalleHTML || "<li>No se seleccionó ningún componente</li>";
  });
}


