window.onload = function() {
    // Recuperar o pedido e total do localStorage
    const pedido = JSON.parse(localStorage.getItem('pedido'));
    const total = parseFloat(localStorage.getItem('total'));

    if (!pedido || pedido.length === 0) {
        alert('Nenhum pedido encontrado!');
        window.location.href = 'index.html';  // Redirecionar para a página inicial
        return;
    }

    // Exibir os detalhes do pedido
    let conteudoPedido = "<div style='padding: 5px 0; display: flex; justify-content: space-between; font-weight: bold;'>";
    conteudoPedido += "<span>Nome</span><span>Valor</span></div>";

    pedido.forEach(item => {
        conteudoPedido += `<div class="pedido-item"><span>${item.nome}</span><span>R$ ${item.valor.toFixed(2)}</span></div>`;
    });

    conteudoPedido += "<div style='padding-top: 15px; font-weight: bold; font-size: 18px;'>Total: R$ " + total.toFixed(2) + "</div>";

    document.getElementById('pedidoDetalhado').innerHTML = conteudoPedido;
}

function imprimirPedido() {
    // Imprimir o pedido
    window.print();
}
