const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

// Caminho do arquivo JSON
const caminhoArquivo = "./usuarios.json";

// Rota para cadastro
app.post("/cadastrar", (req, res) => {
    const { nome, email, senha, telefone, cep, endereco, numero } = req.body;

    // Ler dados existentes
    let usuarios = [];
    if (fs.existsSync(caminhoArquivo)) {
        usuarios = JSON.parse(fs.readFileSync(caminhoArquivo, "utf8"));
    }

    // Verificar se o email já existe
    if (usuarios.some((user) => user.email === email)) {
        return res.status(400).send("Usuário já cadastrado com este email.");
    }

    // Adicionar novo usuário
    usuarios.push({ nome, email, senha, telefone, cep, endereco, numero });
    fs.writeFileSync(caminhoArquivo, JSON.stringify(usuarios, null, 2));

    res.send("Cadastro realizado com sucesso!");
});

// Rota para login
app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    // Ler dados do arquivo
    if (!fs.existsSync(caminhoArquivo)) {
        return res.status(400).send("Nenhum usuário cadastrado.");
    }

    const usuarios = JSON.parse(fs.readFileSync(caminhoArquivo, "utf8"));

    // Verificar credenciais
    const usuario = usuarios.find((user) => user.email === email && user.senha === senha);

    if (!usuario) {
        return res.status(401).send("Email ou senha incorretos.");
    }

    res.send(`Bem-vindo, ${usuario.nome}!`);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});