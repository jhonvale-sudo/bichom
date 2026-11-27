let lanches = 0;

const botao = document.getElementById("btn-lanche");
const contadorTexto = document.getElementById("contador");
const mensagemTexto = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  lanches++;
  contadorTexto.textContent = `Lanches: ${lanches}`;

  if (lanches >= 5) {
    mensagemTexto.textContent = "🎉 Seu bichinho está feliz!";
  }
});
