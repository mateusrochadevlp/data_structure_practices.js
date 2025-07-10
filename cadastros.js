const usuario = {};
function Registrar() {
  const setUsuariosInteresses = new Custom();
  const nome = document.getElementById("nomeUsuario").value;
  const checkboxes = document.querySelectorAll(
    'input[name="interesse"]:checked'
  );

  if (!nome || checkboxes.length == 0) {
    alert("dados invalidos, tente novamente");
  } else {
    checkboxes.forEach((checkbox) => setUsuariosInteresses.add(checkbox.value));
    usuario[nome] = setUsuariosInteresses;
    document.getElementById(
      "saidaCadastro"
    ).innerText = `cadastro salvo ${nome} interessado em ${setUsuariosInteresses
      .values()
      .join(".")}`;
  }
}
function mostrarUniao() {
  const u1 = document.getElementById("userUni1").value;
  const u2 = document.getElementById("userUni2").value;

  if (!usuario[u1] || !usuario[u2]) {
    alert("coloque um usuario por favor.");
  } else {
    const uniao = usuario[u1].union(usuario[u2]).values();
    document.getElementById(
      "saidaUniao"
    ).innerText = `interesses em comum entre ${u1} e ${u2}  ${uniao.join(",")}`;
  }
}
