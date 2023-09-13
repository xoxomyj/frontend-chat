'use strict'

const pessoas = [

    {
        nome: 'Gaeul',
        imagem: 'gaeul.jpg',
        texto: 'You make me feel like eleven!',
        tempo: 'Há 45 minutos',
        mensagens: '1'
    },

    {
        nome: 'Leeseo',
        imagem: 'leeseo.jpg',
        texto: 'Oh perfect sacrifice ...',
        tempo: 'Há 2 minutos',
        mensagens: '2'
    },

    {
        nome: 'Liz',
        imagem: 'liz.jpg',
        texto: 'Whats after like?',
        tempo: 'Há 9 horas',
        mensagens: '7'
    },

    {
        nome: 'Rei',
        imagem: 'rei.jpg',
        texto: 'So that is who i am!',
        tempo: 'Há 12 horas',
        mensagens: '67'
    },

    {
        nome: 'Wonyoung',
        imagem: 'wonyoung.jpg',
        texto: 'Its our time!',
        tempo: 'Há 1 minuto',
        mensagens: '1'
    },

    {
        nome: 'Yujin',
        imagem: 'yujin.jpg',
        texto: 'ROYAL',
        tempo: 'Há 12 dias',
        mensagens: '1'
    },

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntTxt = document.createElement('span')
    qntTxt.classList.add('qnt-txt')
    qntTxt.textContent = pessoa.mensagens

    const texto = document.createElement('p')
    texto.classList.add('texto')
    texto.textContent = pessoa.texto

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo


    nomeContainer.appendChild(nome)
    
    info.appendChild(nomeContainer)

    card.appendChild(img)

    card.appendChild(info)

    card.appendChild(tempo)

    info.appendChild(texto)

    nomeContainer.appendChild(qntTxt)
  
    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)