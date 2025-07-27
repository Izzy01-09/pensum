// Datos completos de la malla curricular
const mallaData = {
    "totalCreditos": 166,
    "saberProCreditos": 125, // 75% de 166 ≈ 125
    "seminarioCreditos": 128,
    "semestres": [
        // PERÍODO 1
        {
            "numero": 1,
            "materias": [
                { "nombre": "ALGORITMO Y PROGRAMACION", "codigo": "452004", "creditos": 2, "prerrequisitos": [] },
                { "nombre": "APRENDIZAJE AUTONOMO", "codigo": "452007", "creditos": 1, "prerrequisitos": [] },
                { "nombre": "CALCULO I", "codigo": "452001", "creditos": 3, "prerrequisitos": [] },
                { "nombre": "COMPETENCIAS COMUNICATIVAS I", "codigo": "452006", "creditos": 2, "prerrequisitos": [] },
                { "nombre": "GEOMETRIA", "codigo": "452002", "creditos": 3, "prerrequisitos": [] },
                { "nombre": "INTRODUCCION A LA INGENIERIA MECANICA", "codigo": "452005", "creditos": 2, "prerrequisitos": [] },
                { "nombre": "QUIMICA GENERAL Y LAB", "codigo": "452003", "creditos": 3, "prerrequisitos": [] }
            ]
        },
        // PERÍODO 2
        {
            "numero": 2,
            "materias": [
                { "nombre": "ALGEBRA LINEAL", "codigo": "452009", "creditos": 3, "prerrequisitos": ["452002"] },
                { "nombre": "CALCULO II", "codigo": "452008", "creditos": 3, "prerrequisitos": ["452001"] },
                { "nombre": "COMPETENCIAS COMUNICATIVAS II", "codigo": "452013", "creditos": 2, "prerrequisitos": ["452006"] },
                { "nombre": "DIBUJO TÉCNICO I", "codigo": "452012", "creditos": 2, "prerrequisitos": ["452005"] },
                { "nombre": "FÍSICA I Y LABORATORIO", "codigo": "452010", "creditos": 3, "prerrequisitos": ["452001"] },
                { "nombre": "QUÍMICA DE POLÍMEROS", "codigo": "452011", "creditos": 3, "prerrequisitos": ["452003"] },
                { "nombre": "UNIVERSIDAD Y CONTEXTO", "codigo": "452014", "creditos": 1, "prerrequisitos": ["452007"] }
            ]
        },
        // PERÍODO 3
        {
            "numero": 3,
            "materias": [
                { "nombre": "CÁLCULO III", "codigo": "452015", "creditos": 3, "prerrequisitos": ["452009"] },
                { "nombre": "DIBUJO TÉCNICO II", "codigo": "452018", "creditos": 2, "prerrequisitos": ["452012"] },
                { "nombre": "ELECTIVA LIBRE I", "codigo": "452021", "creditos": 2, "prerrequisitos": [] },
                { "nombre": "ELECTROTÉCNIA Y ELECTRÓNICA", "codigo": "452017", "creditos": 2, "prerrequisitos": ["452010"] },
                { "nombre": "FÍSICA II Y LABORATORIO", "codigo": "452016", "creditos": 3, "prerrequisitos": ["452008"] },
                { "nombre": "HUMANIDADES I", "codigo": "452020", "creditos": 2, "prerrequisitos": ["452013"] },
                { "nombre": "MATERIALES DE INGENIERÍA I", "codigo": "452019", "creditos": 2, "prerrequisitos": ["452011"] }
            ]
        },
        // PERÍODO 4
        {
            "numero": 4,
            "materias": [
                { "nombre": "ECUACIONES DIFERENCIALES", "codigo": "452022", "creditos": 3, "prerrequisitos": ["452015"] },
                { "nombre": "ESTADISTICA", "codigo": "452024", "creditos": 3, "prerrequisitos": ["452008"] },
                { "nombre": "ESTÁTICA", "codigo": "452026", "creditos": 3, "prerrequisitos": ["452016"] },
                { "nombre": "FÍSICA III Y LABORATORIO", "codigo": "452023", "creditos": 3, "prerrequisitos": ["452015", "452010"] },
                { "nombre": "GEOMETRÍA DESCRIPTIVA", "codigo": "452025", "creditos": 2, "prerrequisitos": ["452018"] },
                { "nombre": "INGLÉS I", "codigo": "452028", "creditos": 2, "prerrequisitos": [] },
                { "nombre": "MATERIALES DE INGENIERÍA II", "codigo": "452027", "creditos": 2, "prerrequisitos": ["452019"] }
            ]
        },
        // PERÍODO 5
        {
            "numero": 5,
            "materias": [
                { "nombre": "DINÁMICA", "codigo": "452033", "creditos": 3, "prerrequisitos": ["452026"] },
                { "nombre": "ELECTIVA LIBRE II", "codigo": "452030", "creditos": 2, "prerrequisitos": [] },
                { "nombre": "HUMANIDADES II", "codigo": "452035", "creditos": 2, "prerrequisitos": ["452020"] },
                { "nombre": "INGLÉS II", "codigo": "452036", "creditos": 2, "prerrequisitos": ["452028"] },
                { "nombre": "METODOLOGÍA DE LA INVESTIGACIÓN", "codigo": "452031", "creditos": 2, "prerrequisitos": ["452024"] },
                { "nombre": "MÉTODOS NUMÉRICOS", "codigo": "452029", "creditos": 3, "prerrequisitos": ["452022"] },
                { "nombre": "RESISTENCIA DE MATERIALES I", "codigo": "452034", "creditos": 3, "prerrequisitos": ["452027", "452026", "452022", "452011"] }
            ]
        },
        // PERÍODO 6
        {
            "numero": 6,
            "materias": [
                { "nombre": "INGLÉS III", "codigo": "452042", "creditos": 2, "prerrequisitos": ["452036"] },
                { "nombre": "MECÁNICA DE FLUIDOS", "codigo": "452037", "creditos": 3, "prerrequisitos": ["452032", "452026"] },
                { "nombre": "MECANISMOS", "codigo": "452038", "creditos": 3, "prerrequisitos": ["452033"] },
                { "nombre": "METROLOGÍA Y CONTROL DE CALIDAD", "codigo": "452040", "creditos": 3, "prerrequisitos": ["452024"] },
                { "nombre": "RESISTENCIA DE MATERIALES II", "codigo": "452039", "creditos": 3, "prerrequisitos": ["452034"] },
                { "nombre": "TERMODINÁMICA", "codigo": "452032", "creditos": 3, "prerrequisitos": [] },
                { "nombre": "TRANSFERENCIA DE CALOR", "codigo": "452041", "creditos": 3, "prerrequisitos": ["452032"] }
            ]
        },
        // PERÍODO 7
        {
            "numero": 7,
            "materias": [
                { "nombre": "DISEÑO DE MÁQUINAS I", "codigo": "452043", "creditos": 3, "prerrequisitos": ["452039"] },
                { "nombre": "ELECTIVA DE CARRERA I", "codigo": "452047", "creditos": 2, "prerrequisitos": ["452031"] },
                { "nombre": "GESTIÓN AMBIENTAL", "codigo": "452048", "creditos": 1, "prerrequisitos": ["452042"] },
                { "nombre": "INGLÉS IV", "codigo": "452049", "creditos": 2, "prerrequisitos": ["452041"] },
                { "nombre": "MÁQUINAS TÉRMICAS", "codigo": "452045", "creditos": 3, "prerrequisitos": ["452037"] },
                { "nombre": "NEUMÁTICA E HIDRÁULICA", "codigo": "452046", "creditos": 3, "prerrequisitos": ["452040"] },
                { "nombre": "PROCESOS DE MANUFACTURA I", "codigo": "452044", "creditos": 3, "prerrequisitos": ["452040"] }
            ]
        },
        // PERÍODO 8
        {
            "numero": 8,
            "materias": [
                { "nombre": "CONVERSIÓN DE ENERGÍA", "codigo": "452052", "creditos": 4, "prerrequisitos": ["452046", "452045"] },
                { "nombre": "DISEÑO DE MÁQUINAS II", "codigo": "452050", "creditos": 3, "prerrequisitos": ["452043"] },
                { "nombre": "ECONOMÍA PARA INGENIEROS", "codigo": "452055", "creditos": 1, "prerrequisitos": ["452048"] },
                { "nombre": "ELECTIVA DE CARRERA II", "codigo": "452054", "creditos": 2, "prerrequisitos": ["452044", "452040"] },
                { "nombre": "PROCESOS DE MANUFACTURA II", "codigo": "452051", "creditos": 3, "prerrequisitos": ["452044"] },
                { "nombre": "TALLER DE MÁQUINAS Y HERRAMIENTAS", "codigo": "452053", "creditos": 3, "prerrequisitos": [] }
            ]
        },
        // PERÍODO 9
        {
            "numero": 9,
            "materias": [
                { "nombre": "CAD CAM", "codigo": "452059", "creditos": 3, "prerrequisitos": ["452053"] },
                { "nombre": "ELABORACIÓN Y EVALUACIÓN DE PROYECTOS", "codigo": "452062", "creditos": 2, "prerrequisitos": ["452055"] },
                { "nombre": "ELECTIVA DE CARRERA III", "codigo": "452060", "creditos": 2, "prerrequisitos": ["452051"] },
                { "nombre": "INSTRUMENTACIÓN Y CONTROL DE PROCESOS", "codigo": "452057", "creditos": 3, "prerrequisitos": ["452053", "452037"] },
                { "nombre": "LUBRICACIÓN Y MANTENIMIENTO", "codigo": "452056", "creditos": 3, "prerrequisitos": ["452052"] },
                { "nombre": "REFRIGERACIÓN Y AIRE ACONDICIONADO", "codigo": "452058", "creditos": 3, "prerrequisitos": ["452052"] },
                { "nombre": "SEMINARIO DE GRADO", "codigo": "452061", "creditos": 1, "prerrequisitos": ["452059"] }
            ]
        },
        // PERÍODO 10
        {
            "numero": 10,
            "materias": [
                { "nombre": "CIM", "codigo": "452064", "creditos": 3, "prerrequisitos": ["452059"] },
                { "nombre": "ELECTIVA DE PROFUNDIZACION I", "codigo": "452063", "creditos": 3, "prerrequisitos": [] },
                { "nombre": "ELECTIVA DE PROFUNDIZACION II", "codigo": "452065", "creditos": 3, "prerrequisitos": [] },
                { "nombre": "GERENCIA PARA INGENIEROS", "codigo": "452067", "creditos": 1, "prerrequisitos": ["452062"] },
                { "nombre": "PROYECTO DE GRADO", "codigo": "452066", "creditos": 3, "prerrequisitos": ["452061"] }
            ]
        }
    ]
};

// Variables globales
let materiasAprobadas = [];
let creditosAprobados = 0;

// Inicializar la malla al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderizarMalla();
    document.getElementById('reiniciar-btn').addEventListener('click', reiniciarSeleccion);
});

// Renderizar toda la malla
function renderizarMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    mallaData.semestres.forEach(semestre => {
        const semestreHTML = document.createElement('div');
        semestreHTML.className = 'semestre';
        semestreHTML.innerHTML = `
            <h2>Semestre ${semestre.numero}</h2>
            <div class="materias-container" id="semestre-${semestre.numero}"></div>
        `;
        container.appendChild(semestreHTML);

        renderizarMaterias(semestre.numero);
    });
}

// Renderizar materias de un semestre
function renderizarMaterias(numSemestre) {
    const semestre = mallaData.semestres.find(s => s.numero === numSemestre);
    const container = document.getElementById(`semestre-${numSemestre}`);

    semestre.materias.forEach(materia => {
        const materiaHTML = document.createElement('div');
        materiaHTML.className = 'materia';
        materiaHTML.dataset.codigo = materia.codigo;
        
        // Verificar si está aprobada
        const estaAprobada = materiasAprobadas.includes(materia.codigo);
        if (estaAprobada) {
            materiaHTML.classList.add('aprobada');
        }

        // Verificar prerrequisitos
        const prerrequisitosCumplidos = materia.prerrequisitos.every(codigo => 
            materiasAprobadas.includes(codigo));
        
        materiaHTML.innerHTML = `
            <div class="nombre">${materia.nombre}</div>
            <div class="codigo">${materia.codigo}</div>
            <div class="creditos">${materia.creditos} créditos</div>
            ${materia.prerrequisitos.length > 0 ? 
                `<div class="prerrequisitos">Prerrequisitos: ${obtenerNombresPrerrequisitos(materia.prerrequisitos)}</div>` : ''}
        `;

        // Solo hacer clickable si está en el primer semestre o cumple prerrequisitos
        if (numSemestre === 1 || prerrequisitosCumplidos || estaAprobada) {
            materiaHTML.addEventListener('click', () => toggleMateria(materia.codigo, materia.creditos));
        } else {
            materiaHTML.style.opacity = '0.6';
            materiaHTML.style.cursor = 'not-allowed';
        }

        container.appendChild(materiaHTML);
    });
}

// Obtener nombres de prerrequisitos
function obtenerNombresPrerrequisitos(codigos) {
    return codigos.map(codigo => {
        for (const semestre of mallaData.semestres) {
            const materia = semestre.materias.find(m => m.codigo === codigo);
            if (materia) return materia.nombre;
        }
        return '';
    }).join(', ');
}

// Alternar materia aprobada
function toggleMateria(codigo, creditos) {
    const index = materiasAprobadas.indexOf(codigo);
    
    if (index === -1) {
        materiasAprobadas.push(codigo);
        creditosAprobados += creditos;
    } else {
        materiasAprobadas.splice(index, 1);
        creditosAprobados -= creditos;
    }

    actualizarUI();
}

// Actualizar toda la interfaz
function actualizarUI() {
    renderizarMalla();
    actualizarProgreso();
}

// Actualizar barra de progreso e hitos
function actualizarProgreso() {
    const porcentaje = Math.round((creditosAprobados / mallaData.totalCreditos) * 100);
    const barraProgreso = document.getElementById('barra-progreso');
    const creditosActuales = document.getElementById('creditos-actuales');
    const porcentajeElement = document.getElementById('porcentaje');
    
    barraProgreso.style.width = `${porcentaje}%`;
    creditosActuales.textContent = creditosAprobados;
    porcentajeElement.textContent = `${porcentaje}%`;
    
    // Actualizar hitos
    const saberProHito = document.getElementById('saber-pro-hito');
    const seminarioHito = document.getElementById('seminario-hito');
    
    if (creditosAprobados >= mallaData.saberProCreditos) {
        saberProHito.classList.add('hito-alcanzado');
    } else {
        saberProHito.classList.remove('hito-alcanzado');
    }
    
    if (creditosAprobados >= mallaData.seminarioCreditos) {
        seminarioHito.classList.add('hito-alcanzado');
    } else {
        seminarioHito.classList.remove('hito-alcanzado');
    }
}

// Reiniciar selección
function reiniciarSeleccion() {
    materiasAprobadas = [];
    creditosAprobados = 0;
    actualizarUI();
}
