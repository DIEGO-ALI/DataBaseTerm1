// Seleccionar botones de artículos
const botonesArticulos = document.querySelectorAll("header button[data-articulo]");
const articulos = document.querySelectorAll(".articulo");

// Mostrar artículo según botón ya sea 1 , 2 o 3
botonesArticulos.forEach(boton => {
  boton.addEventListener("click", () => {
    articulos.forEach(a => a.classList.add("oculto")); 
    const id = boton.getAttribute("data-articulo");
    document.getElementById("articulo" + id).classList.remove("oculto"); // Mostrar el articulo seleccionado
  });
});

///            Cerramos cada articulo
const botonesCerrar = document.querySelectorAll(".cerrar");
botonesCerrar.forEach(boton => {
  boton.addEventListener("click", () => {
    boton.parentElement.classList.add("oculto");
  });
});

// búsqueda, sale feito jsjs pero no tuve más tiempo
document.getElementById("btnBusqueda").addEventListener("click", () => {
  alert(`Cadena de búsqueda elaborada:

"WEB DEVELOPMENT" AND ( "Machine Learning" OR "Big Data" ) AND NOT "Marketing" AND "2025"

Resultados encontrados: 15`);
});

///// Mostrarmos los DOIs
document.getElementById("btnDOI").addEventListener("click", () => {
  document.getElementById("contenedor").innerHTML = `
    <div id="doi">
      <h2>DOIs</h2>
      <ul>
        <li>
          <b>big Data Analytics of Knowledge and Skill Sets</b>
          <a href="https://thesai.org/Publications/ViewPaper?Volume=16&Issue=1&Code=ijacsa&SerialNo=23" target="_blank">https://dx.doi.org/10.14569/IJACSA.2025.0160123</a>
        </li>
        <li>
          <b>Cloud-native workflow framework for stream processing: a comparative study</b>
          <a href="https://seer.ufrgs.br/index.php/rita/article/view/133785" target="_blank">https://doi.org/10.22456/2175-2745.133785</a>
        </li>
        <li>
          <b>A Hybrid Machine Learning Model for Efficient XML Parsing</b>
          <a href="https://ieeexplore.ieee.org/document/10810393" target="_blank">https://doi.org/10.1109/ACCESS.2024.3520706</a>
        </li>
      </ul>
    </div>
  `;
});
