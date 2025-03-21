document.getElementById("perfil-button").addEventListener("click", function() {
    document.getElementById("menu-perfil").style.display = "block";
});

document.addEventListener("click", function(event) {
    if (event.target !== document.getElementById("perfil-button") && event.target.parentNode !== document.getElementById("menu-perfil")) {
      document.getElementById("menu-perfil").style.display = "none";
    }
});

const temaLight = {
    corPrimaria: '#3498db',
    corSecundaria: '#f1c40f',
    corFundo: '#f9f9f9',
    corTexto: '#333'
};

const temaDark = {
  corPrimaria: '#2ecc71',
  corSecundaria: '#9b59b6',
  corFundo: '#333',
  corTexto: '#fff'
};

function alterarTema(tema) {
  document.body.style.setProperty('--cor-primaria', tema.corPrimaria);
  document.body.style.setProperty('--cor-secundaria', tema.corSecundaria);
  document.body.style.setProperty('--cor-fundo', tema.corFundo);
  document.body.style.setProperty('--cor-texto', tema.corTexto);
}

function alternarTema() {
  const temaAtual = document.body.classList.contains('dark') ? temaDark : temaLight;
  const temaNovo = temaAtual === temaDark ? temaLight : temaDark;
  alterarTema(temaNovo);
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
}

document.getElementById('tema-button').addEventListener('click', alternarTema);

