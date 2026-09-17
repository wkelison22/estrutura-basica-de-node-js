// --- EXEMPLOS DE VARIÁVEIS ---
const nomeDoCurso = "Desenvolvimento Node.js"; // Constante (não muda)
let quantidadeAlunos = 30;                     // Variável reatribuível
var statusAtivo = true;                       // Variável de escopo amplo

// Exibindo variáveis no console
console.log(`Curso: ${nomeDoCurso}`);
console.log(`Quantidade inicial de alunos: ${quantidadeAlunos}`);

// --- EXEMPLOS DE FUNÇÕES ---

// 1. Função Tradicional
function saudarUsuario(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a).`;
}

// 2. Arrow Function (Sintaxe Moderna)
const calcularSoma = (a, b) => {
    return a + b;
};

// Executando e exibindo os resultados das funções
const mensagemSaudacao = saudarUsuario("Estudante");
console.log(mensagemSaudacao);

const resultadoSoma = calcularSoma(15, 25);
console.log(`Resultado da soma: ${resultadoSoma}`);