const shiraishi = document.querySelector('button#shiraishi');

shiraishi.addEventListener('mouseenter', function (event) {
    if (shiraishi === null) {
        return;
    }

    // window.innerWidth => 1878 - Largura da janela de visualização atual do navegador
    // window.innerHeight => 931 - Altura da janela de visualização atual do navegador

    // shiraishi.offsetWidth => Largura do botão
    // shiraishi.offsetHeight => Altura do botão

    // Calcula a largura e altura máxima que o botão pode se mover pela tela, para não ultrapassar a largura ou altura da tela
    const maxWidth = window.innerWidth - shiraishi.offsetWidth;
    const maxHeight = window.innerHeight - shiraishi.offsetHeight;

    const left = getRandomInt(1, maxWidth);
    const top = getRandomInt(1, maxHeight);

    shiraishi.style.left = `${left}px`;
    shiraishi.style.top = `${top}px`;
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}