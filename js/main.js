const botonIntroduccion = document.getElementById('boton-introduccion')
const introduccion = document.getElementById('introduccion')
const toggleIntroduccion = document.getElementById('toggle-introduccion')

const botonTareas = document.getElementById('boton-tareas')
const tareas = document.getElementById('tareas')
const toggleTareas = document.getElementById('toggle-tareas')

const botonProblemas = document.getElementById('boton-problemas')
const problemas = document.getElementById('problemas')
const toggleProblemas = document.getElementById('toggle-problemas')

const botonPreguntas1 = document.getElementById('boton-preguntas1')
const preguntas1 = document.getElementById('preguntas1')
const togglePreguntas1 = document.getElementById('toggle-preguntas1')

const botonPreguntas2 = document.getElementById('boton-preguntas2')
const preguntas2 = document.getElementById('preguntas2')
const togglePreguntas2 = document.getElementById('toggle-preguntas2')

//Mostrar-Ocultar introducción
botonIntroduccion.addEventListener('click', (e) => {
  if (!introduccion.classList.contains('hide')) {
    introduccion.classList.add('hide')
    toggleIntroduccion.classList.remove('fa-toggle-on')
    toggleIntroduccion.classList.add('fa-toggle-off')
  } else {
    introduccion.classList.remove('hide')
    toggleIntroduccion.classList.remove('fa-toggle-off')
    toggleIntroduccion.classList.add('fa-toggle-on')
  }
})

botonTareas.addEventListener('click',  (e) => {
  if (!tareas.classList.contains('hide')) {
    tareas.classList.add('hide')
    toggleTareas.classList.remove('fa-toggle-on')
    toggleTareas.classList.add('fa-toggle-off')
  } else {
    tareas.classList.remove('hide')
    toggleTareas.classList.remove('fa-toggle-off')
    toggleTareas.classList.add('fa-toggle-on')
  }
})

botonProblemas.addEventListener('click', (e) => {
  if (!problemas.classList.contains('hide')) {
    problemas.classList.add('hide')
    toggleProblemas.classList.remove('fa-toggle-on')
    toggleProblemas.classList.add('fa-toggle-off')
  } else {
    problemas.classList.remove('hide')
    toggleProblemas.classList.remove('fa-toggle-off')
    toggleProblemas.classList.add('fa-toggle-on')
  }
})

botonPreguntas1.addEventListener('click', (e) => {
  if (!preguntas1.classList.contains('hide')) {
    preguntas1.classList.add('hide')
    togglePreguntas1.classList.remove('fa-toggle-on')
    togglePreguntas1.classList.add('fa-toggle-off')
  } else {
    preguntas1.classList.remove('hide')
    togglePreguntas1.classList.remove('fa-toggle-off')
    togglePreguntas1.classList.add('fa-toggle-on')
  }
})

botonPreguntas2.addEventListener('click', (e) => {
  if (!preguntas2.classList.contains('hide')) {
    preguntas2.classList.add('hide')
    togglePreguntas2.classList.remove('fa-toggle-on')
    togglePreguntas2.classList.add('fa-toggle-off')
  } else {
    preguntas2.classList.remove('hide')
    togglePreguntas2.classList.remove('fa-toggle-off')
    togglePreguntas2.classList.add('fa-toggle-on')
  }
})
