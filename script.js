const materias = [
  // Aquí se insertarán todas las materias en el siguiente paso
];

function crearSemestres() {
  const container = document.querySelector('.semestres-container');
  for (let i = 1; i <= 10; i++) {
    const bloque = document.createElement('div');
    bloque.classList.add('semestre');
    bloque.innerHTML = `<h2>Semestre ${i}</h2>`;
    container.appendChild(bloque);
  }
}

function crearMaterias() {
  materias.forEach(materia => {
    const div = document.createElement('div');
    div.className = 'materia bloqueada';
    div.dataset.id = materia.id;
    div.dataset.creditos = materia.creditos;
    div.dataset.prerequisitos = JSON.stringify(materia.prerequisitos);

    div.innerHTML = `
      <label>
        <input type="checkbox"> ${materia.nombre} <span>(${materia.creditos} cr)</span>
      </label>
    `;

    const semestreDiv = document.querySelectorAll('.semestre')[materia.semestre - 1];
    semestreDiv.appendChild(div);
  });
}

function actualizarEstado() {
  const materiasDiv = document.querySelectorAll('.materia');
  const completadas = Array.from(materiasDiv)
    .filter(m => m.querySelector('input').checked)
    .map(m => m.dataset.id);

  materiasDiv.forEach(m => {
    const prerequisitos = JSON.parse(m.dataset.prerequisitos);
    const puedeDesbloquear = prerequisitos.every(pr => completadas.includes(pr));
    if (puedeDesbloquear || prerequisitos.length === 0) {
      m.classList.remove('bloqueada');
    } else {
      m.classList.add('bloqueada');
    }

    if (m.querySelector('input').checked) {
      m.classList.add('completada');
    } else {
      m.classList.remove('completada');
    }
  });

  actualizarProgreso();
}

function actualizarProgreso() {
  const materiasDiv = document.querySelectorAll('.materia');
  let total = 0, completado = 0;

  materiasDiv.forEach(m => {
    const cr = parseInt(m.dataset.creditos);
    total += cr;
    if (m.querySelector('input').checked) completado += cr;
  });

  const porcentaje = Math.round((completado / 166) * 100);
  document.getElementById('creditos-aprobados').textContent = completado;
  document.getElementById('barra-progreso').style.width = `${porcentaje}%`;

  document.getElementById('mensaje-saber').textContent =
    completado >= 125 ? '🎓 Puedes presentar las Pruebas Saber Pro' : '';
  document.getElementById('mensaje-seminario').textContent =
    completado >= 128 ? '📘 Puedes inscribir el Seminario de Grado' : '';
}

function iniciarMalla() {
  crearSemestres();
  crearMaterias();
  actualizarEstado();
  document.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', actualizarEstado);
  });
}

iniciarMalla();