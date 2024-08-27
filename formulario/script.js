document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Limpiar mensajes de error
    document.querySelectorAll('.error').forEach(function(el) {
        el.style.display = 'none';
    });
    let isValid = true;

    // Validaciones
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const opciones = document.getElementById('opciones').value;
    const mensaje = document.getElementById('mensaje').value;
    if (nombre.trim() === '') {
        document.getElementById('nombreError').innerText = 'El nombre es obligatorio';
        document.getElementById('nombreError').style.display = 'block';
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Ingresa un email válido';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    if (mensaje.trim() === '') {
        document.getElementById('mensajeError').innerText = 'El mensaje es obligatorio';
        document.getElementById('mensajeError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        const datosFormulario = {
            nombre: nombre,
            email: email,
            opcionSeleccionada: opciones,
            mensaje: mensaje
        };

        console.log(datosFormulario);
        document.getElementById('successMessage').innerText = 'Formulario enviado con éxito';
        document.getElementById('successMessage').style.display = 'block'; }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
