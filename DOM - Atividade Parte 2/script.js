// Questão 1 - Mostrar/Ocultar mensagens de erro
document.getElementById("botaoErro").addEventListener("click", () => {
  const mensagem = document.getElementById("mensagemErro")
  mensagem.classList.remove("oculto")

  // Ocultar após 3 segundos
  setTimeout(() => {
    mensagem.classList.add("oculto")
  }, 3000)
})

document.getElementById("outroBotaoQ1").addEventListener("click", () => {
  const outraMensagem = document.getElementById("outraMensagemQ1")
  outraMensagem.textContent = "🔥 Erro personalizado ativado! Sistema sobrecarregado! 🔥"
  outraMensagem.classList.remove("oculto")

  // Ocultar após 3 segundos
  setTimeout(() => {
    outraMensagem.classList.add("oculto")
  }, 3000)
})

// Questão 2 - Exibir texto digitado
document.getElementById("botaoExibir").addEventListener("click", () => {
  const texto = document.getElementById("caixaDeTexto").value
  const conteudo = document.getElementById("conteudo")
  const erro = document.getElementById("erroCampoVazioQ2")

  if (texto.trim() === "") {
    erro.textContent = "⚠️ Por favor, digite algum texto antes de exibir!"
    erro.classList.remove("oculto")
    conteudo.textContent = ""
  } else {
    erro.classList.add("oculto")
    conteudo.textContent = `✨ Texto exibido: "${texto}" ✨`
  }
})

// Questão 3 - Calculadora de engajamento
document.getElementById("calcularEngajamento").addEventListener("click", () => {
  const interacoes = Number.parseFloat(document.getElementById("interacoes").value)
  const visualizacoes = Number.parseFloat(document.getElementById("visualizacoes").value)
  const resultado = document.getElementById("resultadoEngajamento")
  const erro = document.getElementById("mensagemErroEngajamento")

  if (isNaN(interacoes) || isNaN(visualizacoes) || interacoes < 0 || visualizacoes <= 0) {
    erro.textContent = "⚠️ Por favor, insira valores válidos e positivos!"
    erro.classList.remove("oculto")
    resultado.textContent = ""
  } else {
    erro.classList.add("oculto")
    const taxa = ((interacoes / visualizacoes) * 100).toFixed(2)
    resultado.textContent = `📊 Taxa de Engajamento: ${taxa}% 🎯`
  }
})

// Questão 4 - Upload de imagem
document.getElementById("carregarImagemBtn").addEventListener("click", () => {
  const arquivo = document.getElementById("uploadImagem").files[0]
  const resultado = document.getElementById("resultadoQ4")

  if (arquivo) {
    const reader = new FileReader()
    reader.onload = (e) => {
      resultado.innerHTML = `
                <h4>🖼️ Imagem carregada com sucesso!</h4>
                <p><strong>Nome:</strong> ${arquivo.name}</p>
                <p><strong>Tamanho:</strong> ${(arquivo.size / 1024).toFixed(2)} KB</p>
                <img src="${e.target.result}" alt="Imagem carregada" style="max-width: 300px; border-radius: 10px; margin-top: 10px;">
            `
    }
    reader.readAsDataURL(arquivo)
  } else {
    resultado.innerHTML = "⚠️ Por favor, selecione uma imagem primeiro!"
  }
})

// Questão 5 - Seletor de imagens
document.getElementById("selecionarImagem").addEventListener("change", function () {
  const url = this.value
  const container = document.getElementById("imagemExibidaQ5")

  if (url) {
    container.innerHTML = `
            <h4>🎨 Imagem selecionada:</h4>
            <img src="${url}" alt="Imagem selecionada" style="max-width: 300px; border-radius: 10px; margin-top: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
        `
  } else {
    container.innerHTML = ""
  }
})

// Questão 6 - Checkboxes de redes sociais
document.getElementById("enviarBtnQ6").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll('input[name="redesSociais"]:checked')
  const resultado = document.getElementById("redesSelecionadasQ6")
  const erro = document.getElementById("mensagemErroQ6")

  if (checkboxes.length === 0) {
    erro.textContent = "⚠️ Selecione pelo menos uma rede social!"
    erro.classList.remove("oculto")
    resultado.textContent = ""
  } else {
    erro.classList.add("oculto")
    const redes = Array.from(checkboxes)
      .map((cb) => cb.value)
      .join(", ")
    resultado.textContent = `📱 Redes sociais selecionadas: ${redes} 🎉`
  }
})

// Questões 7, 8, 9 - Gerenciar hashtags
document.getElementById("adicionarHashtagBtn").addEventListener("click", () => {
  const input = document.getElementById("hashtagInput")
  const lista = document.getElementById("listaHashtags")
  const erro = document.getElementById("mensagemErroHashtagQ789")
  const hashtag = input.value.trim()

  if (hashtag === "") {
    erro.textContent = "⚠️ Digite uma hashtag antes de adicionar!"
    erro.classList.remove("oculto")
    return
  }

  // Verificar se já existe
  const opcoes = Array.from(lista.options)
  if (opcoes.some((opcao) => opcao.value === hashtag)) {
    erro.textContent = "⚠️ Esta hashtag já foi adicionada!"
    erro.classList.remove("oculto")
    return
  }

  erro.classList.add("oculto")
  const option = new Option(`#${hashtag}`, hashtag)
  lista.add(option)
  input.value = ""
})

document.getElementById("removerHashtagBtn").addEventListener("click", () => {
  const lista = document.getElementById("listaHashtags")
  const erro = document.getElementById("mensagemErroHashtagQ789")

  if (lista.selectedIndex === -1) {
    erro.textContent = "⚠️ Selecione uma hashtag para remover!"
    erro.classList.remove("oculto")
    return
  }

  erro.classList.add("oculto")
  lista.remove(lista.selectedIndex)
})

// Questões 10 e 11 - Mover ativos entre carteiras
document.getElementById("moverParaDireitaBtn").addEventListener("click", () => {
  const disponiveis = document.getElementById("ativosDisponiveis")
  const carteira = document.getElementById("carteiraInvestimentos")
  const erro = document.getElementById("validationMessageQ1011")

  if (disponiveis.selectedOptions.length === 0) {
    erro.textContent = "⚠️ Selecione pelo menos um ativo para mover!"
    erro.classList.remove("oculto")
    return
  }

  erro.classList.add("oculto")
  Array.from(disponiveis.selectedOptions).forEach((option) => {
    carteira.appendChild(option)
  })
})

document.getElementById("moverParaEsquerdaBtn").addEventListener("click", () => {
  const carteira = document.getElementById("carteiraInvestimentos")
  const disponiveis = document.getElementById("ativosDisponiveis")
  const erro = document.getElementById("validationMessageQ1011")

  if (carteira.selectedOptions.length === 0) {
    erro.textContent = "⚠️ Selecione pelo menos um ativo para mover!"
    erro.classList.remove("oculto")
    return
  }

  erro.classList.add("oculto")
  Array.from(carteira.selectedOptions).forEach((option) => {
    disponiveis.appendChild(option)
  })
})
