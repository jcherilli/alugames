function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagemSelecionado = gameSelecionado.querySelector('.dashboard__item__img');
    let botaoSelecionado = gameSelecionado.querySelector('.dashboard__item__button');
    let nomeJogoSelecionado = gameSelecionado.querySelector('.dashboard__item__name');

    // alert('Nome do jogo' + ` - ${nomeJogoSelecionado.textContent}`);

    if (imagemSelecionado.classList.contains('dashboard__item__img--rented')) {
        imagemSelecionado.classList.remove('dashboard__item__img--rented');
        botaoSelecionado.classList.remove('dashboard__item__button--return');
        botaoSelecionado.textContent = 'Alugar';
    } else {
        imagemSelecionado.classList.add('dashboard__item__img--rented');
        botaoSelecionado.classList.add('dashboard__item__button--return');
        botaoSelecionado.innerHTML = 'Devolver';
    }
}