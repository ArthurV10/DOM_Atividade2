// Variáveis Globais
const erroMilisegundos = 3000;
const mensagemErroDiv = document.getElementById('mensagemErro');
const botaoMostrarErro = document.getElementById('botaoErro');

// Verifica a existencia
if (!botaoMostrarErro) {
    console.error("Erro: O botão com ID 'botaoErro' não foi encontrado.");
}
if (!mensagemErroDiv) {
    console.error("Erro: A div com ID 'mensagemErro' não foi encontrada.");
}

// Adiciona evento ao botão, mas apenas se ele existir
if (botaoMostrarErro) {
    botaoMostrarErro.addEventListener('click', mostrarErro);
}

// Função para mostrar erro por três segundos
function mostrarErro(){
    if(mensagemErroDiv){
        mensagemErroDiv.classList.remove('oculto');
        setTimeout( () => {
        if(mensagemErroDiv){
            mensagemErroDiv.classList.add('oculto')
        }
        },erroMilisegundos);
    }
    else{
        console.error("Erro: A div 'mensagemErro' não foi possível de ser encontrada dentro do HTML");
        return;
    }
}