const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const formulario = document.getElementById("formCadastro");
cpf.addEventListener("input", function () {

    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.slice(0, 11);

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    cpf.value = valor;

});
telefone.addEventListener("input", function () {

    let valor = telefone.value.replace(/\D/g, "");

    valor = valor.slice(0, 11);

    if (valor.length <= 10) {

        valor = valor.replace(
            /(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{4})(\d)/,
            "$1-$2"
        );

    } else {

        valor = valor.replace(
            /(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

    }

    telefone.value = valor;

});
cep.addEventListener("input", function () {

    let valor = cep.value.replace(/\D/g, "");

    valor = valor.slice(0, 8);

    valor = valor.replace(
        /(\d{5})(\d)/,
        "$1-$2"
    );

    cep.value = valor;

});
function validarCPF(cpfDigitado) {

    let numeros = cpfDigitado.replace(/\D/g, "");

    if (numeros.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(numeros)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(numeros[i]) * (10 - i);
    }

    let primeiroDigito = (soma * 10) % 11;

    if (primeiroDigito === 10) {
        primeiroDigito = 0;
    }

    if (primeiroDigito !== Number(numeros[9])) {
        return false;
    }


    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(numeros[i]) * (11 - i);
    }

    let segundoDigito = (soma * 10) % 11;

    if (segundoDigito === 10) {
        segundoDigito = 0;
    }

    if (segundoDigito !== Number(numeros[10])) {
        return false;
    }

    return true;
}
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!validarCPF(cpf.value)) {

        alert("CPF inválido.");

        cpf.focus();

        return;
    }

    alert("Cadastro realizado com sucesso!");

    formulario.reset();

});