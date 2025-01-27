function confirmacao() {
  let nome = document.getElementById("inputNome");
  let email = document.getElementById("inputEmail");
  let confirmacao = document.getElementById("confirmacao");

  document.getElementById("baseDeDados").innerHTML =
    nome.value + " | " + email.value;

  if (nome.value === "" || email.value === "") {
    confirmacao.style.display = "none";
    alert("precisa inserir um nome e um e-mail válido");
  } else {
    confirmacao.style.display = "flex";
  }

  nome.value = "";
  email.value = "";
}
