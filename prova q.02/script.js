document.getElementById("botao").addEventListener("click", function() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    if (altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        let situation;

        if (imc < 18.5) {
            situation = "Magreza";
        } else if (imc >= 18.5 && imc < 25) {
            situation = "Peso Normal";
        } else if (imc >= 25 && imc < 30) {
            situation = "Acima do Peso";
        } else {
            situation = "Obesidade";
        }

        document.getElementById("result").innerHTML = `Seu IMC é: ${imc.toFixed(2)} - ${situation}`;
    } else {
        document.getElementById("result").innerHTML = "Por favor, insira valores válidos.";
    }
});
