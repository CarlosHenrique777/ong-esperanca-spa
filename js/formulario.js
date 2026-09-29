// Módulo responsável pela validação matemática do CPF.
export function validarCPF(valor) {
    const numeros = valor.replace(/\D/g, "");

    if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += Number(numeros[i]) * (10 - i);
    }

    let primeiroDigito = (soma * 10) % 11;
    if (primeiroDigito === 10) primeiroDigito = 0;
    if (primeiroDigito !== Number(numeros[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += Number(numeros[i]) * (11 - i);
    }

    let segundoDigito = (soma * 10) % 11;
    if (segundoDigito === 10) segundoDigito = 0;

    return segundoDigito === Number(numeros[10]);
}

// Configura o formulário somente depois que ele entra na página.
export function inicializarCadastro() {
    const formulario = document.getElementById("formCadastro");
    if (!formulario) return;
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const area = document.getElementById("area");
    const erro = document.getElementById("erroCadastro");
    const retorno = document.getElementById("retornoCadastro");

    // Guarda apenas a preferência de área; nunca CPF ou dados de contato.
    const areaSalva = localStorage.getItem("ongEsperanca_areaInteresse");
    if (["educacao", "alimentacao", "eventos"].includes(areaSalva)) {
        area.value = areaSalva;
    }
    area.addEventListener("change", function () {
        if (["educacao", "alimentacao", "eventos"].includes(area.value)) {
            localStorage.setItem("ongEsperanca_areaInteresse", area.value);
        } else {
            localStorage.removeItem("ongEsperanca_areaInteresse");
        }
    });

    // Máscara de CPF
    cpf.addEventListener("input", function () {
        let valor = cpf.value.replace(/\D/g, "").slice(0, 11);
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpf.value = valor;
    });

    // Máscara de telefone (fixo ou celular)
    telefone.addEventListener("input", function () {
        const numeros = telefone.value.replace(/\D/g, "").slice(0, 11);
        if (numeros.length > 10) {
            telefone.value = "(" + numeros.slice(0, 2) + ") " +
                numeros.slice(2, 7) + "-" + numeros.slice(7);
        } else if (numeros.length > 6) {
            telefone.value = "(" + numeros.slice(0, 2) + ") " +
                numeros.slice(2, 6) + "-" + numeros.slice(6);
        } else if (numeros.length > 2) {
            telefone.value = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2);
        } else if (numeros.length > 0) {
            telefone.value = "(" + numeros;
        } else {
            telefone.value = "";
        }
    });

    // Máscara de CEP
    cep.addEventListener("input", function () {
        const numeros = cep.value.replace(/\D/g, "").slice(0, 8);
        cep.value = numeros.length > 5
            ? numeros.slice(0, 5) + "-" + numeros.slice(5)
            : numeros;
    });

    // Validação e feedback; sem envio de dados para um servidor.
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        erro.hidden = true;
        retorno.hidden = true;

        if (!validarCPF(cpf.value)) {
            cpf.setAttribute("aria-invalid", "true");
            erro.textContent = "CPF inválido. Confira os números informados.";
            erro.hidden = false;
            cpf.focus();
            return;
        }
cpf.removeAttribute("aria-invalid");
        retorno.hidden = false;
    });
}

