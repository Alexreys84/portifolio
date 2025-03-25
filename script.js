function enviarEmail(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Validação básica
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Simula o envio do e-mail
    console.log(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    alert('Mensagem enviada com sucesso!');
    
    // Limpa os campos após o envio
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}
