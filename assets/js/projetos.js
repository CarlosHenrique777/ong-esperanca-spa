
/* ==========================================
   MÓDULO DE PROJETOS - ONG ESPERANÇA
========================================== */

// Lista de projetos da ONG

export const listaProjetos = [

    {
        id: "alimento",
        titulo: "Alimento para Todos",
        descricao: "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.",
        categoria: "Doação"
    },

    {
        id: "educacao",
        titulo: "Educação para o Futuro",
        descricao: "Aulas de reforço e distribuição de materiais escolares para crianças e adolescentes.",
        categoria: "Voluntariado"
    },

    {
        id: "agasalho",
        titulo: "Campanha do Agasalho",
        descricao: "Arrecadação de roupas e cobertores para pessoas que precisam de apoio durante o inverno.",
        categoria: "Campanha"
    }

];


// ==========================================
// GERAR CARDS DINAMICAMENTE
// ==========================================

export function gerarCardsProjetos() {

    return listaProjetos.map(function(projeto) {

        return `

            <article id="${projeto.id}">

                <h3>${projeto.titulo}</h3>

                <span class="badge">
                    ${projeto.categoria}
                </span>

                <p>
                    ${projeto.descricao}
                </p>

            </article>

        `;

    }).join("");

}
