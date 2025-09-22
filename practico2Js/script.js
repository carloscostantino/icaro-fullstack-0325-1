// ---------- Navegación ----------
const links = document.querySelectorAll(".nav-link");
const secciones = document.querySelectorAll("section");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Ocultar todas las secciones
    secciones.forEach(sec => sec.classList.add("oculto"));

    // Mostrar solo la seleccionada
    document.getElementById(targetId).classList.remove("oculto");
  });
});

// ---------- Calculadora ----------
function operar(op) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = 0;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingresa ambos números");
    return;
  }

  switch (op) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num2 !== 0 ? num1 / num2 : "Error (división por 0)";
      break;
  }

  document.getElementById("resultado").textContent = resultado;
}

// ---------- Lista de Tareas ----------
let tareas = [];

function agregarTarea() {
  let input = document.getElementById("nuevaTarea");
  let texto = input.value.trim();

  if (texto === "") {
    alert("Escribe una tarea");
    return;
  }

  tareas.push(texto);
  input.value = "";
  mostrarTareas();
}

function mostrarTareas() {
  let lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach((tarea, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = tarea;

    // Botón "Completada"
    let btnCompletada = document.createElement("button");
    btnCompletada.textContent = "Completada";
    btnCompletada.onclick = () => {
      span.classList.toggle("completada");

      if (span.classList.contains("completada")) {
        btnCompletada.textContent = "Desmarcar";
        btnCompletada.classList.add("desmarcar");
      } else {
        btnCompletada.textContent = "Completada";
        btnCompletada.classList.remove("desmarcar");
      }
    };

    // Botón "Eliminar"
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
      tareas.splice(index, 1);
      mostrarTareas();
    };

    li.appendChild(span);
    li.appendChild(btnCompletada);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Detectar tecla Enter en el input de tareas
document.getElementById("nuevaTarea").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    agregarTarea();
  }
});

