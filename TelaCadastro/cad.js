let btn2 = document.querySelector('#verSenha')

    btn2.addEventListener('click', ()=>{
        let inputSenha = document.querySelector('#senha')
            if (inputSenha.getAttribute('type') == 'password')
                {
                 inputSenha.setAttribute('type','text')
                 }
            else{
                inputSenha.setAttribute('type','password')
                }
    })

    let btn3 = document.querySelector('#verConfirmSenha')

    btn3.addEventListener('click', ()=>{
        let inputSenha = document.querySelector('#confirmSenha')
            if (inputSenha.getAttribute('type') == 'password')
                {
                 inputSenha.setAttribute('type','text')
                 }
            else{
                inputSenha.setAttribute('type','password')
                }
    })