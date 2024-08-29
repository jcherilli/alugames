function adicionar() {
    let produto = document.getElementById('produto').value;
    let nome = produto.split('-')[0];
    let preco = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let totalCompra = parseFloat(document.getElementById('valor-total').innerText.split('R$')[1]);
    
    // alert(nome);
    // alert(preco);
    // alert(quantidade.value);
    let totalProduto = quantidade * preco;
    // alert(totalProduto);

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${totalProduto}</span>
        </section>`;
    document.getElementById('quantidade').value = '';

    alert(totalCompra);

    totalCompra = totalCompra + parseFloat(totalProduto);
    alert(totalCompra);
    document.getElementById('valor-total').innerText = `R$ ${totalCompra}`;
}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
}