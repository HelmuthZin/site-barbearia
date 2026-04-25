/ Simulação de agendamento
    const nome = this.querySelectorAll('input')[0].value;
    const data = this.querySelectorAll('input')[1].value;
    
    if(nome && data) {
        alert(`Obrigado, ${nome}! Seu agendamento para o dia ${data} foi solicitado com sucesso. Aguarde nossa confirmação.`);
        this.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    };

// Efeito de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
