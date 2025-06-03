 document.getElementById("formLogin").addEventListener("submit", async (event) => {
        event.preventDefault();

        const credenciais = {
            email: document.getElementById("login_email").value,
            senha: document.getElementById("login_senha").value,
        };

        const resposta = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credenciais),
        });

        if (resposta.ok) {
            const mensagem = await resposta.text();
            alert(mensagem);
        } else {
            const mensagem = await resposta.text();
            alert(mensagem);
        }
    });