let quantidadeAlugados = 0;

function exibirQuantidade() {
    console.log(`Total de jogos alugados: ${quantidadeAlugados}`);
}

function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagemSelecionado = gameSelecionado.querySelector('.dashboard__item__img');
    let botaoSelecionado = gameSelecionado.querySelector('.dashboard__item__button');
    let nomeJogoSelecionado = gameSelecionado.querySelector('.dashboard__item__name');

    // alert('Nome do jogo' + ` - ${nomeJogoSelecionado.textContent}`);

    if (imagemSelecionado.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogoSelecionado.textContent}?`)) {
            imagemSelecionado.classList.remove('dashboard__item__img--rented');
            botaoSelecionado.classList.remove('dashboard__item__button--return');
            botaoSelecionado.textContent = 'Alugar';
        }
        quantidadeAlugados--;
    } else {
        imagemSelecionado.classList.add('dashboard__item__img--rented');
        botaoSelecionado.classList.add('dashboard__item__button--return');
        botaoSelecionado.innerHTML = 'Devolver';
        quantidadeAlugados++;
    }

    exibirQuantidade()
    ordenarNumeros(6, 5, 1, 2, 3, 4);

}

document.addEventListener('DOMContentLoaded',
    function() {
        quantidadeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
        exibirQuantidade();
});

function ordenarNumeros(a, b, c, d, e, f) {
    console.log(`Números antes de ordenar: ${numerosOrdenados.join(', ')}`);
    const numerosOrdenados = [a, b, c, d, e, f].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}