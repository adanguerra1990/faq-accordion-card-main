document.addEventListener("DOMContentLoaded",  () => {
  iniciarApp();
});

function iniciarApp() {
  acordionPreguntas()
}

function acordionPreguntas() {
  const preguntas = document.querySelectorAll('.pregunta');
  preguntas.forEach((preguntaActual) => {

    preguntaActual.addEventListener('click', () => {
      preguntas.forEach((pregunta) => {
        const respuesta = pregunta.querySelector('.respuesta');
        const iconoFlecha = pregunta.querySelector('.icono-flecha');
        const tituloPregunta = pregunta.querySelector('.titulo-pregunta')

        // Si la pregunta en la que se hizo clic es la pregunta actual y su respuesta está oculta, la mostramos.
        // En caso contrario, ocultamos la respuesta.
        if (pregunta === preguntaActual && respuesta.style.display === 'none') {
          respuesta.style.display = 'block';
          respuesta.style.height = respuesta.scrollHeight + 'px';
          iconoFlecha.style.transform = 'rotate(180deg)';
          respuesta.classList.add('mostrar');
          tituloPregunta.style.fontWeight = "700";
        } else {
          tituloPregunta.style.fontWeight = "normal";
          respuesta.style.display = 'none';
          respuesta.style.height = '0px';
          iconoFlecha.style.transform = 'rotate(0deg)';
          respuesta.classList.remove('mostrar');
        }
      });
    });
  });
}