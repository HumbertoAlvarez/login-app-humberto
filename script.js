const form = document.getElementById('login-form');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value.trim();
  mensaje.className = '';
  if (usuario === '' || clave === '') {
    mensaje.textContent = 'Completa el usuario y la contraseña.';
    return;
  }
  mensaje.className = 'ok';
  mensaje.textContent = 'Datos completos. Ingreso simulado.';
});