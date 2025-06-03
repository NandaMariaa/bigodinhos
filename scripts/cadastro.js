document.getElementById("formCadastro").addEventListener("submit", async (event) => {
        event.preventDefault();

        const usuario = {
            nome: document.getElementById("in_name").value,
            email: document.getElementById("in_mail").value,
            senha: document.getElementById("senha").value,
            telefone: document.getElementById("telefone").value,
            cep: document.getElementById("cep").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
        };

        const resposta = await fetch("http://localhost:3000/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario),
        });

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!");
        } else {
            const mensagem = await resposta.text();
            alert(mensagem);
        }
});