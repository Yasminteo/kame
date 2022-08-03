function logar(){ 

    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    

    if(login == "yasmins" && senha == "admin123"){
        alert("Login realizado com sucesso!");
        location.href="site.html";
    }else{
        alert("Usuário ou senha incorretos!");
    }

}
Footer
