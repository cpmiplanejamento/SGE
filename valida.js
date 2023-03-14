const usuarios = [
    {
       login: 'santana',
       pass: '123'
    },
    {
       login: 'fernando',
       pass: 'fernando123'
    },
    {
       login: 'admin',
       pass: 'admin'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false
    
    for(let i in usuarios){
    
        if(pegaUsuario == usuarios[i].login&&pegaSenha == usuarios [i].pass){
            validaLogin = true    
            break
        }else{
            validaLogin = false
        }
    
    }
    if (validaLogin == true ){
        alert('ok')
    }else{
        alert('Usuário e Senha não registrados!')


    }      
})