// Entrada de dados:
let sexo = prompt("Informe o seu sexo (M/F): ");
let altura = parseFloat(prompt("Digite a sua altura (usar '.'): "))
let resultado = "";

// Processamento de dados:
document.write("Seu sexo é: " + sexo + "<br>");
document.write("Sua altura é: " + altura + "<br>");
  if (sexo == "M") {
    pesoIdealM= 72.7 * altura - 58 ;
    document.write("Seu peso ideal é: " + pesoIdealM + "kg <br>")
  } else if (sexo == "F") {
    pesoIdealF= 62.1 * altura - 44.7 ;
    document.write("Seu peso ideal é: " + pesoIdealF + "kg <br>");
  }