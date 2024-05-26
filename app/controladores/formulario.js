const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
e.preventDefault(); // Previene el comportamiento predeterminado de envío del formulario

// Obtiene los datos del formulario
const formData = new FormData(form);
const data = Object.fromEntries(formData);

try {
    const response = await fetch('/enviarCorreo', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });
    
    const { success, message } = await response.json();
    
    // Crea un elemento div para mostrar el mensaje de alerta
    const alertContainer = document.getElementById('alertContainer');
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', success ? 'alert-success' : 'alert-danger');
    alertDiv.textContent = message;
    
    // Agrega el mensaje de alerta al contenedor
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alertDiv);
    
    // Limpia el formulario después de un envío exitoso
    if (success) {
    form.reset();
    }
} catch (error) {
    console.error('Error al enviar el formulario:', error);
    alert('Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
}
});