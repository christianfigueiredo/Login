
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
            alert('deu certo')
        }
        else{
            alert('Deu ruim')
        }

        
      
   } 