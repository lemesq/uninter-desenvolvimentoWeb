const formulario = document.getElementById("formContato");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    resultado.textContent = "Por favor, preencha todos os campos.";
    resultado.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    resultado.textContent = "Por favor, digite um e-mail válido.";
    resultado.style.color = "red";
    return;
  }

  resultado.textContent = "Mensagem enviada com sucesso!";
  resultado.style.color = "green";

  formulario.reset();
});