// Manejo de los mensajes del foro
const foroForm = document.getElementById('foro-form');
const foroMensajes = document.getElementById('foro-mensajes');

foroForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensaje = document.getElementById('mensaje').value;

    if (mensaje.trim() !== '') {
        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;
        foroMensajes.appendChild(nuevoMensaje);
        document.getElementById('mensaje').value = '';
    }
});

// Manejo de la encuesta
const encuestaForm = document.getElementById('encuesta-form');

encuestaForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    const problemasSeleccionados = [];
    const checkboxes = document.querySelectorAll('input[name="problema"]:checked');
    checkboxes.forEach((checkbox) => {
        problemasSeleccionados.push(checkbox.value);
    });

    const frecuencia = document.querySelector('input[name="frecuencia"]:checked')?.value;
    const apoyo = document.querySelector('input[name="apoyo"]:checked')?.value;
    const relajacion = document.getElementById('relajacion').value;
    const comentario = document.getElementById('comentario').value;
    
    alert(`Problemas seleccionados: ${problemasSeleccionados.join(', ')}\nFrecuencia de estrés: ${frecuencia}\nApoyo emocional: ${apoyo}\nActividades de relajación: ${relajacion}\nComentarios: ${comentario}`);
    encuestaForm.reset();
});
