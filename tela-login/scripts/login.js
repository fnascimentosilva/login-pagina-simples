import { usuarios } from "../constantes/users.js";



document.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value

    if(!email || !senha){
        alert("Os campos obrigatórios")
    }else{
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha)

        if(usuarioEncontrado){
            window.location.href = "./home.html"
        }else{
            alert("usuario nao encontrado")
        }
    }

    
});