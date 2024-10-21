
const text = document.querySelector('#descricao')
const exposicao = document.querySelector('#cartaz')
const bthomem = document.querySelector('#aranha')
const btcaribe = document.querySelector('#piratas')
const btrambo1 = document.querySelector('#rambo')
const btfuriosos = document.querySelector('#velozes')
const btnenhum = document.querySelector('#vazia')

bthomem.addEventListener('click', aranha)
btcaribe.addEventListener('click', piratas)
btrambo1.addEventListener('click', rambo)
btfuriosos.addEventListener('click', velozes)
btnenhum.addEventListener('click', vazia)

function aranha() {
    exposicao.src = 'image/miranha.jpg'
    text.textContent = 'Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.'
}

function piratas() {
    exposicao.src = 'image/caribe.jpeg'
    text.textContent = 'O pirata Jack Sparrow tem seu navio saqueado e roubado pelo capitão Barbossa e sua tripulação. Com o navio de Sparrow, Barbossa invade a cidade de Port Royal, levando consigo Elizabeth Swann, filha do governador.'
}

function rambo() {
    exposicao.src = 'image/rambo.jpeg'
    text.textContent = 'Um veterano da Guerra do Vietnã usa todo seu treinamento e agressividade exercitada nos campos de batalha quando é preso e torturado por policiais.'
}

function velozes() {
    exposicao.src = 'image/velozes.jpeg'
    text.textContent = 'Brian O Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.'
}

function vazia() {
    exposicao.src = 'image/Silhueta.png'
    text.textContent = ''
}
