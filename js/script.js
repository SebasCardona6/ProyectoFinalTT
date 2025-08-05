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

/* SCRIPT PARA DONACIONES */

document.querySelectorAll('.monto-btn').forEach(btn => {
    btn.addEventListener('click', function() {
    document.querySelectorAll('.monto-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    });
});

const btnTarjeta = document.getElementById('btnTarjeta');
const btnPaypal = document.getElementById('btnPaypal');
const tarjetaCampos = [
    document.getElementById('numTarjeta'),
    document.getElementById('nombreTarjeta'),
    document.getElementById('vencimientoTarjeta'),
    document.getElementById('cvvTarjeta')
];
const correoPaypal = document.getElementById('correoPaypal');

btnTarjeta.addEventListener('click', function() {
    btnTarjeta.classList.add('active');
    btnPaypal.classList.remove('active');
    tarjetaCampos.forEach(campo => campo.disabled = false);
    correoPaypal.disabled = true;
});

btnPaypal.addEventListener('click', function() {
    btnPaypal.classList.add('active');
    btnTarjeta.classList.remove('active');
    tarjetaCampos.forEach(campo => campo.disabled = true);
    correoPaypal.disabled = false;
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensajeDonacion').style.display = 'block';
    this.reset();
});
