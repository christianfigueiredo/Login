let btnVerSenha = document.querySelector('#verSenha')
let btnConfirmSenha = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup' , () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style','color:red')
        labelNome.innerHTML = 'Nome * Insira no minimo 3 caracteres'
        nome.setAttribute('style','border-color: red')
        validNome = false
    }
    else{
        labelNome.setAttribute('style','color: #272262') 
        labelNome.innerHTML = 'Nome'     
        nome.setAttribute('style', 'border-color: #272262')
        validNome=true

    }
})
usuario.addEventListener('keyup' , () => {
    if(usuario.value.length <= 2){
        labelUsuario.setAttribute('style','color:red')
        labelUsuario.innerHTML = 'Usuario * Insira no minimo 3 caracteres'
        usuario.setAttribute('style','border-color: red')
        validUsuario = false
    }
    else{
        labelUsuario.setAttribute('style','color: #272262') 
        labelUsuario.innerHTML = 'Usuario'     
        usuario.setAttribute('style', 'border-color: #272262')
        validUsuario = true

    }
})

senha.addEventListener('keyup' , () => {
    if(senha.value.length < 6){
        labelSenha.setAttribute('style','color:red')
        labelSenha.innerHTML = 'Senha * Insira no minimo 6 caracteres'
        senha.setAttribute('style','border-color: red')
        validSenha = false
    }
    else{
        labelSenha.setAttribute('style','color: #272262') 
        labelSenha.innerHTML = 'Senha'     
        senha.setAttribute('style', 'border-color: #272262')
        validSenha = true

    }
})
confirmSenha.addEventListener('keyup' , () => {
    if(confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style','color:red')
        labelConfirmSenha.innerHTML = 'Senha diferenta da digitada'
        confirmSenha.setAttribute('style','border-color: red')
        validConfirmSenha = false
    }
    else{
        labelConfirmSenha.setAttribute('style','color: #272262') 
        labelConfirmSenha.innerHTML = 'Confirmar Senha'     
        confirmSenha.setAttribute('style', 'border-color: #272262')
        validConfirmSenha = true

    }
})

function cadastrar()
    {
        if(validUsuario && validSenha && validNome && validConfirmSenha){
            let listaUser = JSON.parse(localStorage.getItem('listaUser')|| '[]')

            listaUser.push(
                {
                    nome: nome.value,
                    usuario: usuario.value,
                    senha: senha.value                    

                }
            )
            localStorage.setItem('listaUser', JSON.stringify(listaUser))

            msgSucess.setAttribute('style', 'display:block')
            msgSucess.innerHTML = '<strong>Cadastrado com Sucesso</strong>'
            msgError.setAttribute('style','display:none')
            msgError.innerHTML=''

            setTimeout(() =>{
                window.location.href='./index.html'
            }, 3000)

        }
        else
        {
            msgError.setAttribute('style','display:block')
            msgError.innerHTML='<strong>Preencha todos os campos corretamente antes de cadastar</strong>'
            msgSucess.setAttribute('style', 'display:none')
            msgSucess.innerHTML = ''
        }


    }


    btnVerSenha.addEventListener('click', ()=>{
        let inputVerSenha = document.querySelector('#senha')
            if (inputVerSenha.getAttribute('type') == 'password')
                {
                 inputVerSenha.setAttribute('type','text')
                 }
            else{
                inputVerSenha.setAttribute('type','password')
                }
    })   

    btnConfirmSenha.addEventListener('click', ()=>{
        let inputConfirmSenha = document.querySelector('#confirmSenha')
            if (inputConfirmSenha.getAttribute('type') == 'password')
                {
                 inputConfirmSenha.setAttribute('type','text')
                 }
            else{
                inputConfirmSenha.setAttribute('type','password')
                }
    })
    