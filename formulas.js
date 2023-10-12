document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").addEventListener("click", calcularPrecio);
});

function mostrarGrosorVidrio() {
  const material = document.getElementById("material").value;
  const grosorVidrioDiv = document.getElementById("grosorVidrioDiv");

  if (material === "vidrio") {
    grosorVidrioDiv.style.display = "block";
  } else {
    grosorVidrioDiv.style.display = "none";
  }
}

function calcularPrecio() {
  const ancho = parseFloat(document.getElementById("ancho").value);
  const largo = parseFloat(document.getElementById("largo").value);
  const material = document.getElementById("material").value;
  let grosorVidrio = 0;
  let precioEnUSD = 0;

  if (material === "vidrio") {
    grosorVidrio = parseFloat(document.getElementById("grosorVidrio").value);
  }

  let precio = 0;
  let precioEnPesos = 0;

  if (material === "vidrio") {
    if (ancho > 0 && largo > 0 && grosorVidrio > 0) {
      precioEnUSD = ancho * largo * grosorVidrio;

      precioEnPesos = precioEnUSD * 40;

      if (precioEnPesos < 100) {
        precioEnPesos = 100;
      }
    }
  } else if (material === "espejo") {
    if (ancho > 0 && largo > 0) {
      precioEnUSD = ancho * largo * 80;

      precioEnPesos = precioEnUSD * 40;
    }
  }

  document.getElementById("precioUSD").textContent = `$${precioEnUSD.toFixed(
    2
  )}`;
  document.getElementById(
    "precioPesos"
  ).textContent = `$${precioEnPesos.toFixed(2)}`;
}
