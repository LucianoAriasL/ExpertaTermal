const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_d75zoza';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviado';
      alert('Mensaje enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});