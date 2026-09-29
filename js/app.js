import { gerarCardsProjetos } from "./projetos.js";
import { inicializarCadastro } from "./formulario.js";

const conteudo = document.getElementById("conteudo");

// Navegação responsiva: alterna o menu em telas menores.
const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");
if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener("click", function () {
        const aberto = menuPrincipal.classList.toggle("ativo");
        botaoMenu.setAttribute("aria-expanded", String(aberto));
        botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
}


// Telas da SPA
const paginas = {
    inicio: `
        <section class="hero">
            <div class="hero-conteudo">
                <h2>Juntos podemos transformar vidas</h2>
                <p>A ONG Esperança trabalha para apoiar pessoas e famílias em situação de vulnerabilidade social.</p>
                <a href="#cadastro" class="botao">Quero ser voluntário</a>
            </div>
            <div class="hero-imagem">
                

<img
    src="../imagens/voluntarios.webp"
    alt="Voluntários organizando doações de alimentos e roupas"
    class="imagem-destaque"
    width="1536"
    height="1024"
    decoding="async"
    fetchpriority="high"
>


            </div>
        </section>
        <section>
            <h2>Quem somos</h2>
            <p>Somos uma organização sem fins lucrativos que desenvolve ações de educação, alimentação e assistência social.</p>
        </section>
        <section>
            <h2>Nossa missão</h2>
            <p>Promover oportunidades, incentivar a solidariedade e contribuir para uma sociedade mais justa.</p>
        </section>
    `,

    projetos: `
        <section>
            <h2>Nossos projetos</h2>
            <p>Conheça algumas das iniciativas solidárias realizadas pela ONG Esperança.</p>
        </section>
        <div class="projetos">${gerarCardsProjetos()}</div>
    `,

    cadastro: `
        <section>
            <h2>Cadastro de voluntário</h2>
            <p>Preencha seus dados para participar dos projetos da ONG Esperança.</p>

            <form id="formCadastro">
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" minlength="3"
                           placeholder="Digite seu nome completo" required>

                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email"
                           placeholder="seunome@email.com" required>

                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf"
                    aria-describedby="erroCadastro"
                           placeholder="000.000.000-00" maxlength="14"
                           inputmode="numeric"
                           pattern="[0-9]{3}[.][0-9]{3}[.][0-9]{3}-[0-9]{2}"
                           title="Digite o CPF no formato 000.000.000-00" required>

                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone"
                           placeholder="(00) 00000-0000" maxlength="15"
                           inputmode="numeric" autocomplete="tel"
                           pattern="[(][0-9]{2}[)] [0-9]{4,5}-[0-9]{4}"
                           title="Digite o telefone com DDD" required>

                    <label for="cep">CEP</label>
                    <input type="text" id="cep" name="cep"
                           placeholder="00000-000" maxlength="9"
                           inputmode="numeric" autocomplete="postal-code"
                           pattern="[0-9]{5}-[0-9]{3}"
                           title="Digite o CEP no formato 00000-000" required>

                    <label for="area">Área de interesse</label>
                    <select id="area" name="area" required>
                        <option value="">Selecione uma opção</option>
                        <option value="educacao">Educação</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="eventos">Eventos</option>
                    </select>
                </fieldset>
                <button type="submit">Realizar cadastro</button>
            </form>

            <p id="erroCadastro" class="mensagem mensagem--erro"
               role="alert" hidden></p>
            <p id="retornoCadastro" class="mensagem mensagem--sucesso"
               role="status" hidden>
                Formulário validado com sucesso! A preferência de área fica salva
                neste navegador. Nenhum cadastro é enviado à ONG.
            </p>
        </section>
    `
};

// Navegação sem recarregar o documento.
function carregarPagina() {
    let pagina = window.location.hash.replace("#", "");
    if (!Object.prototype.hasOwnProperty.call(paginas, pagina)) {
        pagina = "inicio";
    }

    // Recolhe o menu depois de navegar.
    if (botaoMenu && menuPrincipal) {
        menuPrincipal.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }

    conteudo.innerHTML = paginas[pagina];
    
    // ACESSIBILIDADE - IDENTIFICAR A PÁGINA ATUAL

    const linksMenu = document.querySelectorAll(
        'nav a[href^="#"]'
    );

    linksMenu.forEach(function(link) {

        if (link.getAttribute("href") === "#" + pagina) {

            link.setAttribute("aria-current", "page");

        } else {

            link.removeAttribute("aria-current");

        }

    });

    if (pagina === "cadastro") {
        inicializarCadastro();
    }
}

window.addEventListener("hashchange", carregarPagina);
carregarPagina();
