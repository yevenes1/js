function submitForm(event) {
  event.preventDefault(); 

 
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    console.log('Por favor, completa todos los campos del formulario.');
    return; 
  }

  
  console.log('¡El formulario ha sido enviado con éxito!');
  document.getElementById('contact-form').reset();
}
