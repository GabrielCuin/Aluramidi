const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado. Ou seletor inválido.");
  }
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (e) {
    if (e.code === "Enter" || e.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function (e) {
    if (e.code === "Enter" || e.code === "Space") {
      tecla.classList.remove("ativa");
    }
  };
}
