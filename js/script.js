document.addEventListener('DOMContentLoaded', () => {
  const form1 = document.getElementById('formOfrecerAyuda');
  const form2 = document.getElementById('formSolicitarAyuda');

  const handleSubmit = (event, tipo) => {
    event.preventDefault();
    alert(`Gracias por ${tipo === 'ofrecer' ? 'ofrecer tu ayuda' : 'solicitar apoyo'}! Nos pondremos en contacto.`);
    event.target.reset();
  };

  if (form1) {
    form1.addEventListener('submit', e => handleSubmit(e, 'ofrecer'));
  }
  if (form2) {
    form2.addEventListener('submit', e => handleSubmit(e, 'solicitar'));
  }
});
