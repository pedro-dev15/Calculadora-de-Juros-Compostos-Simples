document.getElementById("calcular").addEventListener("click", function () {
  let capital = parseFloat(
    document.getElementById("capital").value.replace(",", ".")
  );
  let taxa = parseFloat(
    document.getElementById("taxa").value.replace(",", ".")
  );
  let tempo = parseFloat(
    document.getElementById("tempo").value.replace(",", ".")
  );
  let montante = parseFloat(
    document.getElementById("montante").value.replace(",", ".")
  );
  let conferidor = document
    .getElementById("taxa")
    .value.replace("%", "")
    .replace(",", ".");

  if (isNaN(montante) && !isNaN(capital) && !isNaN(taxa) && !isNaN(tempo)) {
    montante = capital * Math.pow(1 + taxa / 100, tempo);
    let juros = montante - capital;
    document.querySelector(".resultado").innerHTML =
      "Montante: " + montante.toFixed(2) + "<br>Juros:" + juros.toFixed(2);
    document.querySelector(".resultado").style.color = "black";
  } else if (
    isNaN(capital) &&
    !isNaN(montante) &&
    !isNaN(taxa) &&
    !isNaN(tempo)
  ) {
    capital = montante / Math.pow(1 + taxa / 100, tempo);
    document.querySelector(".resultado").innerHTML =
      "Capital: " + capital.toFixed(2);
    document.querySelector(".resultado").style.color = "black";
  } else if (
    isNaN(taxa) &&
    !isNaN(montante) &&
    !isNaN(capital) &&
    !isNaN(tempo)
  ) {
    taxa = (montante / capital) ^ (1 / tempo - 1);
    document.querySelector(".resultado").innerHTML =
      "Taxa de Juros: " + (taxa * 100).toFixed(2) + "%";
    document.querySelector(".resultado").style.color = "black";
  } else if (
    isNaN(tempo) &&
    !isNaN(montante) &&
    !isNaN(taxa) &&
    !isNaN(capital)
  ) {
    tempo = Math.log(montante / capital) / Math.log(1 + taxa / 100);
    document.querySelector(".resultado").innerHTML =
      "Tempo: " + tempo.toFixed(2) + " Meses";
    document.querySelector(".resultado").style.color = "black";
  } else {
    document.querySelector(".resultado").textContent =
      "Por favor insira 3 valores que sejam números e deixe um campo vazio.";
    document.querySelector(".resultado").style.fontSize = "30px";
    document.querySelector(".resultado").style.fontWeight = "bold";
    document.querySelector(".resultado").style.textAlign = "center";
    document.querySelector(".resultado").style.marginTop = "10px";
    document.querySelector(".resultado").style.color = "tomato";
  }
});
document.getElementById("limpar").addEventListener("click", function () {
  document.getElementById("capital").value = "";
  document.getElementById("taxa").value = "";
  document.getElementById("tempo").value = "";
  document.getElementById("montante").value = "";
  document.querySelector(".resultado").textContent = "";
});
