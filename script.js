let total = 0;
let pedido = [];

function adicionarPedido(nome, valor) {
    pedido.push({ nome, valor });
    total += valor;
    document.getElementById('total').innerText = total.toFixed(2);
}

function fazerPedido() {
    if (pedido.length === 0) {
        alert('Você precisa selecionar ao menos uma bebida!');
        return;
    }

    // Gerar o PDF com a lista de pedidos
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título do PDF
    doc.setFontSize(18);
    doc.text('Pedido do Bar', 20, 20);

    // Adicionar detalhes do pedido
    doc.setFontSize(12);
    let yPosition = 30;
    pedido.forEach(item => {
        doc.text(`${item.nome} - R$ ${item.valor.toFixed(2)}`, 20, yPosition);
        yPosition += 10;
    });

    // Adicionar o total
    doc.text(`Total: R$ ${total.toFixed(2)}`, 20, yPosition + 10);

    // Salvar o PDF como um Blob
    const pdfBlob = doc.output('blob');

    // Criar um link para o arquivo PDF
    const link = URL.createObjectURL(pdfBlob);

    // Criar o link para o WhatsApp com o PDF
    // Substitua o número de WhatsApp abaixo pelo número real do seu bar
    const numeroWhatsApp = "+5511999999999"; // Exemplo: +55 seguido do número
    const mensagem = `Olá! Aqui está o meu pedido:\n\nTotal: R$ ${total.toFixed(2)}\n\nVeja o PDF com os detalhes do pedido.`;

    // Criar uma URL para o WhatsApp com o link para o PDF
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}&url=${encodeURIComponent(link)}`;

    // Redirecionar para o WhatsApp
    window.open(url, '_blank');
}
