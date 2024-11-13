const estoque = [];

function registrarVenda() {
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const preco = parseFloat(document.getElementById('preco').value);

    if (produto && quantidade > 0 && preco > 0) {
        const venda = {
            produto: produto,
            quantidade: quantidade,
            preco: preco,
            total: quantidade * preco
        };

        estoque.push(venda);
        atualizarEstoque();
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

function atualizarEstoque() {
    const estoqueLista = document.getElementById('estoqueLista');
    estoqueLista.innerHTML = '';
    
    estoque.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.quantidade} x ${item.produto} - R$${item.total.toFixed(2)}`;
        estoqueLista.appendChild(li);
    });
}

function limparCampos() {
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('preco').value = '';
}
