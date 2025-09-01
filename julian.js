const CADENA = '"WEB DEVELOPMENT" AND "TOOLS" OR "EDUCATION" NOT "BUSSINES"';
const TOTAL = 1062;


function mostrar(id){ document.getElementById(id).classList.remove('oculto'); }
function ocultar(id){ document.getElementById(id).classList.add('oculto'); }

function mostrarCadena(){
  document.querySelector('#textoCadena code').textContent = CADENA;
  mostrar('textoCadena');
}

function mostrarEncontrados(){
  document.getElementById('totalEncontrados').textContent = TOTAL;
  mostrar('textoEncontrados');
}

function mostrarInfo(){
  ocultar('doi'); 
  mostrar('articulos');
}

function minimizarInfo(){
  ocultar('articulos');
  ocultar('doi');
}

function mostrarDOI(){
  ocultar('articulos');
  mostrar('doi');
}
