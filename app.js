document.getElementById('registroEvento').addEventListener('submit', function(event) {
    event.preventDefault();

    const errorMessages = document.getElementById('error-messages');
    errorMessages.innerHTML = '';

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const archivo = document.getElementById('archivo').files[0];

    let errores = [];

    if (nombre.length < 3) {
        errores.push('El nombre debe tener al menos 3 caracteres.');
    }

    if (!correo.includes('@') || !correo.includes('.')) {
        errores.push('Por favor, ingresa un correo electrónico válido.');
    }

    if (telefono.length < 10 || !/^\d+$/.test(telefono)) {
        errores.push('El teléfono debe tener al menos 10 dígitos numéricos.');
    }

    if (intereses.length === 0) {
        errores.push('Selecciona al menos un interés.');
    }

    if (!horario) {
        errores.push('Selecciona un horario preferido.');
    }

    const hoy = new Date().toISOString().split('T')[0];
    if (fecha <= hoy) {
        errores.push('La fecha del evento debe ser futura.');
    }

    if (hora < '09:00' || hora > '18:00') {
        errores.push('La hora preferida debe estar entre 09:00 y 18:00.');
    }

    if (archivo && !['application/pdf', 'image/jpeg', 'image/png'].includes(archivo.type)) {
        errores.push('El archivo debe ser PDF, JPEG o PNG.');
    }

    if (errores.length > 0) {
        errores.forEach(error => {
            const p = document.createElement('p');
            p.textContent = error;
            errorMessages.appendChild(p);
        });
    } else {
        alert('Registro exitoso. ¡Gracias por registrarte!');
    }
});