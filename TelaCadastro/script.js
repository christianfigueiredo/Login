
let btn = document.querySelector('.fa-eye')

    btn.addEventListener('click', ()=>{
        let inputSenha = document.querySelector('#senha')
            if (inputSenha.getAttribute('type') == 'password')
                {
                 inputSenha.setAttribute('type','text')
                 }
            else{
                inputSenha.setAttribute('type','password')
                }
    })
    
   function entrar(){
        let usuario = document.querySelector('#usuario')
        let userLabel = document.querySelector('#userLabel')

        let senha = document.querySelector('#senha')
        let senhaLabel = document.querySelector('#senhaLabel')

        let msgError = document.querySelector('#msgError')
        let listaUser = []

        let userValid = {
            nome: '',
            usuario: '',
            senha: ''
        }
        listaUser = JSON.parse(localStorage.getItem('listaUser'))
        listaUser.forEach((item)=> {
            if(usuario.value == item.usuario && senha.value == item.senha){
                userValid = {
                    nome: item.nome,
                    usuario: item.usuario,
                    senha: item.senha
                }
            }
        })

        if(usuario.value == userValid.usuario && senha.value==userValid.senha){
            window.location.href='./inicio.html'

            let token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2)
            localStorage.setItem('token',token)
            localStorage.setItem('userLogado', JSON.stringify(userValid))


        }
        else{
            userLabel.setAttribute('style','color:red')
            usuario.setAttribute('style','border-color:red')
            senhaLabel.setAttribute('style','color:red')
            senha.setAttribute('style','border-color:red')
            msgError.setAttribute('style', 'display:block')
            msgError.innerHTML = 'Usuario ou senha incorretos'
            //usuario.value=''
            //senha.value=''
            usuario.focus()
        }
  } 
  
  
  
  