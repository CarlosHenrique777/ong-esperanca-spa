
# ONG Esperança

Projeto acadêmico desenvolvido para simular o site de uma organização não governamental dedicada a ações sociais e ao voluntariado.

A aplicação foi construída utilizando HTML5, CSS3 e JavaScript, com foco em responsividade, interatividade, organização do código e acessibilidade.

## Site publicado

Acesse a aplicação:

https://carloshenrique777.github.io/ong-esperanca-spa/

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JavaScript ES Modules
- CSS Grid e Flexbox
- LocalStorage
- Git e GitHub
- GitHub Pages

## Funcionalidades

- Navegação dinâmica no modelo Single Page Application (SPA).
- Apresentação dos projetos sociais por meio de cards gerados dinamicamente.
- Formulário demonstrativo de voluntariado.
- Máscaras automáticas para CPF, telefone e CEP.
- Validação matemática do CPF.
- Mensagens visuais de erro e sucesso.
- Armazenamento da preferência de área de interesse no LocalStorage.
- Layout responsivo para computadores, tablets e celulares.
- Navegação por teclado e indicação visual de foco.

## Estrutura do projeto

ong-solidaria-spa/
- html/
  - index.html
- css/
  - style.css
- imagens/
  - voluntarios.png
- js/
  - app.js
  - projetos.js
  - formulario.js
- index.html
- README.md

O arquivo index.html localizado na raiz encaminha o visitante para a aplicação dentro da pasta html.

## Organização do JavaScript

O código foi dividido em módulos para facilitar sua manutenção.

- app.js: controla a navegação e os templates das páginas.
- projetos.js: armazena as informações dos projetos e gera os cards.
- formulario.js: gerencia as máscaras, validações, mensagens de feedback e LocalStorage.

A comunicação entre os módulos utiliza import e export.

## Como executar localmente

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Instale a extensão Live Server, caso necessário.
4. Abra o arquivo html/index.html utilizando o Live Server.
5. Navegue entre as opções Início, Projetos e Seja voluntário.

## Acessibilidade

Foram implementados recursos para melhorar a acessibilidade, incluindo:

- Estrutura HTML semântica.
- Textos alternativos em imagens.
- Identificação dos campos por meio de labels.
- Destaque visual durante a navegação por teclado.
- Identificação da página atual com aria-current.
- Mensagens de formulário utilizando role="alert" e role="status".
- Indicação de CPF inválido com aria-invalid.
- Layout responsivo.

O projeto recebeu testes manuais de navegação por teclado, ampliação de 200% e visualização em largura reduzida.

## Observações

Este projeto possui finalidade acadêmica.

O formulário realiza validações no navegador, mas não envia cadastros para um servidor ou banco de dados.

O LocalStorage é utilizado somente para armazenar a preferência de área de voluntariado, sem salvar CPF, telefone ou e-mail.

## Versionamento e publicação

O desenvolvimento foi versionado com Git, disponibilizado no GitHub e publicado utilizando o GitHub Pages.
