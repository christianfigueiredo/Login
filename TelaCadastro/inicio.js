


let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')
logado.innerHTML = `Ola  ${userLogado.nome}`

if (localStorage.getItem('token')==null){
    alert('voce precisa estar logado')
    window.location.href='./index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href='./index.html'
}