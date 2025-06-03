document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    // Obtendo os valores dos inputs
    const nome = document.getElementById("in_name").value;
    const senha = document.getElementById("senha").value;

    // Dados fixos para validação (apenas para exemplo, não recomendado para produção)
    const loginCorreto = {
        nome: "adm",
        senha: "123"
    };

    // Verificação simples
    if (nome === loginCorreto.nome && senha === loginCorreto.senha) {
        alert("Login realizado com sucesso!");
        // Redireciona para outra página, se necessário
        window.location.href = "adm.html";
    } else {
        alert("Nome ou senha incorretos. Tente novamente.");
    }
    
});