function buscarEndereco() {

    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length === 8) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert('CEP não encontrado!');
                } else {
                    document.getElementById('endereco').value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                }
            })
            .catch(() => alert('Erro ao buscar CEP. Tente novamente.'));
    } else {
        alert('CEP inválido!');
    }
    
}