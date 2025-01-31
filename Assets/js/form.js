const form = document.querySelector('.form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('.form__btn');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            form.reset();
            alert('¡Mensaje enviado correctamente!');
        } else {
            throw new Error('Error al enviar el formulario');
        }
    } catch (error) {
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar';
    }
});
